import { PrismaClient } from "@prisma/client";
import { extendType, idArg, nonNull, objectType, stringArg } from "nexus";
import { prismaErr } from "../prismaError";

const prisma = new PrismaClient();

export const Certificates = objectType({
  name: "Certificates",
  definition(t) {
    t.string("id");
    t.string("name");
    t.field("publisher", { type: "Publishers" });
    t.string("publisherId");
    t.string("expiry");
    t.string("photo");
    t.field("employeeSkill", { type: "EmployeeSkills" });
    t.string("employeeSkillId");
    t.field("createdAt", { type: "DateTime" });
    t.field("updatedAt", { type: "DateTime" });
  },
});

export const allCertificates = extendType({
  type: "Query",
  definition(t) {
    t.list.field("certificates", {
      type: "Certificates",
      async resolve(_root, args, ctx) {
        return await prisma.certificates.findMany({
          include: {
            publisher: true,
            employeeSkill: {
              include: {
                employee: true,
                skill: {
                  include: {
                    skill: true,
                    category: true,
                  },
                },
              },
            },
          },
        });
      },
    });
  },
});

export const getCertificate = extendType({
  type: "Query",
  definition(t) {
    t.field("certificate", {
      type: "Certificates",
      args: {
        id: nonNull(stringArg()),
      },
      async resolve(_root, args, ctx) {
        return await prisma.certificates
          .findUniqueOrThrow({
            where: {
              id: args.id,
            },
          })
          .catch(prismaErr);
      },
    });
  },
});

export const addCertificate = extendType({
  type: "Mutation",
  definition(t) {
    t.field("addCertificate", {
      type: "Employee",
      args: {
        id: stringArg(),
        name: nonNull(stringArg()),
        publisherId: nonNull(stringArg()),
        photo: nonNull(stringArg()),
        expiry: stringArg(),
        employeeSkillId: nonNull(stringArg()),
        employeeId: nonNull(stringArg()),
      },
      async resolve(_root, args) {
        await prisma.certificates
          .upsert({
            where: {
              employeeSkillId: args.employeeSkillId,
            },
            update: {
              name: args.name,
              publisherId: args.publisherId,
              photo: args.photo,
              expiry: args.expiry ?? "",
            },
            create: {
              name: args.name,
              publisherId: args.publisherId,
              photo: args.photo,
              expiry: args.expiry ?? "",
              employeeSkillId: args.employeeSkillId,
            },
          })
          .catch(prismaErr);

        // await prisma.certificates
        //   .create({
        //     data: {
        //       name: args.name,
        //       publisher: args.publisher,
        //       photo: args.photo,
        //       expiry: args.expiry,
        //       employeeSkillId: args.employeeSkillId,
        //     },
        //   })
        //   .catch(prismaErr);

        return await prisma.employee
          .findUniqueOrThrow({
            where: {
              id: args.employeeId ?? "",
            },
            include: {
              employeeSkills: {
                include: {
                  certificate: {
                    include: {
                      publisher: true,
                    },
                  },
                  skill: {
                    include: {
                      skill: true,
                      category: true,
                    },
                  },
                },
              },
            },
          })
          .catch(prismaErr);
      },
    });
  },
});

// export const editCertificate = extendType({
//   type: "Mutation",
//   definition(t) {
//     t.field("editCertificate", {
//       type: "Certificates",
//       args: {
//         id: nonNull(stringArg()),
//         name: stringArg(),
//         publisherId: stringArg(),
//       },
//       async resolve(_root, args, ctx) {
//         return await prisma.certificates
//           .update({
//             where: {
//               id: args.id,
//             },
//             data: {
//               name: args.name ?? "",
//               publisherId: args.publisherId,
//             },
//           })
//           .catch(prismaErr);
//       },
//     });
//   },
// });

export const deleteCertificate = extendType({
  type: "Mutation",
  definition(t) {
    t.field("deleteCertificate", {
      type: "Employee",
      args: {
        id: nonNull(stringArg()),
        employeeId: nonNull(stringArg()),
      },
      async resolve(_root, args, ctx) {
        await prisma.certificates
          .delete({
            where: {
              id: args.id,
            },
          })
          .catch(prismaErr);

        return await prisma.employee
          .findUniqueOrThrow({
            where: {
              id: args.employeeId ?? "",
            },
            include: {
              employeeSkills: {
                include: {
                  certificate: {
                    include: {
                      publisher: true,
                    },
                  },
                  skill: {
                    include: {
                      skill: true,
                      category: true,
                    },
                  },
                },
              },
            },
          })
          .catch(prismaErr);
      },
    });
  },
});
