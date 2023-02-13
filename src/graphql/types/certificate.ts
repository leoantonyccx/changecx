import { PrismaClient } from "@prisma/client";
import { extendType, idArg, nonNull, objectType, stringArg } from "nexus";
import { prismaErr } from "../prismaError";

const prisma = new PrismaClient();

export const Certificates = objectType({
  name: "Certificates",
  definition(t) {
    t.string("id");
    t.string("name");
    t.string("publisher");
    t.string("expiry");
    t.string("photo");
    t.field("employeeSkill", { type: "EmployeeSkills" });
    t.string("employeeSkillId");
    t.list.string("updateLog");
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
            employeeSkill: {
              include: {
                certificate: true,
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
        publisher: nonNull(stringArg()),
        photo: nonNull(stringArg()),
        expiry: stringArg(),
        employeeSkillId: stringArg(),
        employeeId: stringArg(),
      },
      async resolve(_root, args) {
        await prisma.certificates
          .upsert({
            where: {
              employeeSkillId: args.employeeSkillId ?? "",
            },
            update: {
              name: args.name,
              publisher: args.publisher,
              photo: args.photo,
              expiry: args.expiry ?? "",
            },
            create: {
              name: args.name,
              publisher: args.publisher,
              photo: args.photo,
              expiry: args.expiry ?? "",
              employeeSkillId: args.employeeSkillId ?? "",
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
                  certificate: true,
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

export const editCertificate = extendType({
  type: "Mutation",
  definition(t) {
    t.field("editCertificate", {
      type: "Certificates",
      args: {
        id: nonNull(stringArg()),
        name: stringArg(),
      },
      async resolve(_root, args, ctx) {
        return await prisma.certificates
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

export const deleteCertificate = extendType({
  type: "Mutation",
  definition(t) {
    t.field("deleteCertificate", {
      type: "Certificates",
      args: {
        id: nonNull(stringArg()),
      },
      async resolve(_root, args, ctx) {
        return await prisma.certificates
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
