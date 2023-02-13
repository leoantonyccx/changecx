import { PrismaClient } from "@prisma/client";
import { extendType, nonNull, objectType, stringArg } from "nexus";
import { prismaErr } from "../prismaError";

const prisma = new PrismaClient();

export const Publishers = objectType({
  name: "Publishers",
  definition(t) {
    t.string("id");
    t.string("name");
    t.field("createdAt", { type: "DateTime" });
    t.field("updatedAt", { type: "DateTime" });
  },
});

export const allPublishers = extendType({
  type: "Query",
  definition(t) {
    t.list.field("publishers", {
      type: "Publishers",
      async resolve(_root, args, ctx) {
        return await prisma.publishers.findMany();
      },
    });
  },
});

export const getPublisher = extendType({
  type: "Query",
  definition(t) {
    t.field("publisher", {
      type: "Publishers",
      args: {
        id: nonNull(stringArg()),
      },
      async resolve(_root, args, ctx) {
        return await prisma.publishers
          .findUnique({
            where: {
              id: args.id,
            },
          })
          .catch(prismaErr);
      },
    });
  },
});

// export const addPublisher = extendType({
//   type: "Mutation",
//   definition(t) {
//     t.field("addPublisher", {
//       type: "Publishers",
//       args: {
//         name: nonNull(stringArg()),
//       },
//       async resolve(_root, args) {
//         // const existingPublisher = await prisma.publishers.findUnique({
//         //   where: {
//         //     id: args.id,
//         //   },
//         // });

//         // if (!existingPublisher) {
//         return await prisma.publishers
//           .upsert({
//             where :{
//               name : args.name
//             },
//             data: {
//               name: args.name,
//             },
//           })
//           .catch(prismaErr);
//         // }
//       },
//     });
//   },
// });

export const editPublisher = extendType({
  type: "Mutation",
  definition(t) {
    t.field("editPublisher", {
      type: "Publishers",
      args: {
        id: nonNull(stringArg()),
        name: stringArg(),
      },
      async resolve(_root, args, ctx) {
        return await prisma.publishers
          .update({
            where: {
              id: args.id,
            },
            data: {
              name: args.name ?? "",
            },
          })
          .catch(prismaErr);
      },
    });
  },
});

export const deletePublisher = extendType({
  type: "Mutation",
  definition(t) {
    t.field("deletePublisher", {
      type: "Publishers",
      args: {
        id: nonNull(stringArg()),
      },
      async resolve(_root, args, ctx) {
        return await prisma.publishers
          .delete({
            where: {
              id: args.id,
            },
          })
          .catch(prismaErr);
      },
    });
  },
});
