import {
  extendType,
  objectType,
  stringArg,
  nonNull,
  list,
  arg,
  inputObjectType,
} from "nexus";
import { prismaErr } from "../prismaError";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export const Employee = objectType({
  name: "Employee",
  definition(t) {
    t.string("id");
    t.string("name");
    t.string("email");
    t.string("photo");
    t.string("role");
    t.boolean("isManager");
    t.list.field("employeeSkills", { type: "EmployeeSkills" });
    t.field("createdAt", { type: "DateTime" });
    t.field("updatedAt", { type: "DateTime" });
  },
});

export const allEmployees = extendType({
  type: "Query",
  definition(t) {
    t.list.field("employees", {
      type: "Employee",
      async resolve(_root, args, ctx) {
        return await prisma.employee.findMany({
          include: {
            employeeSkills: {
              include: {
                certificate: true,
                skill: {
                  include: {
                    category: true,
                    skill: true,
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

export const searchEmployee = extendType({
  type: "Query",
  definition(t) {
    t.list.field("searchEmployee", {
      type: "Employee",
      args: {
        word: nonNull(stringArg()),
      },
      async resolve(_root, args) {
        return await prisma.employee.findMany({
          where: {
            OR: [
              {
                email: {
                  contains: args.word,
                  mode: "insensitive",
                },
                name: {
                  contains: args.word,
                  mode: "insensitive",
                },
              },
            ],
          },
          include: {
            employeeSkills: {
              include: {
                certificate: true,
                skill: {
                  include: {
                    category: true,
                    skill: true,
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

export const searchEmployeeBySkill = extendType({
  type: "Query",
  definition(t) {
    t.list.field("searchEmployeeBySkill", {
      type: "Employee",
      args: {
        word: nonNull(stringArg()),
      },
      async resolve(_root, args) {
        return await prisma.employee.findMany({
          where: {
            employeeSkills: {
              some: {
                skill: {
                  skill: {
                    name: {
                      contains: args.word,
                      mode: "insensitive",
                    },
                  },
                },
              },
            },
          },
          include: {
            employeeSkills: {
              include: {
                certificate: true,
                skill: {
                  include: {
                    category: true,
                    skill: true,
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

export const searchEmployeeByCategory = extendType({
  type: "Query",
  definition(t) {
    t.list.field("searchEmployeeByCategory", {
      type: "Employee",
      args: {
        word: nonNull(stringArg()),
      },
      async resolve(_root, args) {
        return await prisma.employee.findMany({
          where: {
            employeeSkills: {
              some: {
                skill: {
                  category: {
                    name: {
                      contains: args.word,
                      mode: "insensitive",
                    },
                  },
                },
              },
            },
          },
          include: {
            employeeSkills: {
              include: {
                certificate: true,
                skill: {
                  include: {
                    category: true,
                    skill: true,
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

export const getEmployee = extendType({
  type: "Query",
  definition(t) {
    t.field("employee", {
      type: "Employee",
      args: {
        email: nonNull(stringArg()),
      },
      async resolve(_root, args, ctx) {
        return await prisma.employee
          .findUnique({
            where: {
              email: args.email,
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

export const employeeLogin = extendType({
  type: "Mutation",
  definition(t) {
    t.field("employeeLogin", {
      type: "Employee",
      args: {
        email: nonNull(stringArg()),
        password: nonNull(stringArg()),
      },
      async resolve(_root, args) {
        const employee = await prisma.employee
          .findFirst({
            where: {
              AND: {
                email: args.email,
                password: args.name,
              },
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
        // const pwVerify = await bcrypt.compare(args.password, employee.password);

        if (employee) {
          const accessToken = await jwt.sign(
            { email: employee.email },
            process.env.SECRET_TOKEN as string,
            { expiresIn: "10m" }
          );

          return {
            ...employee,
            accessToken,
          };
        }
        // else return "Invalid Credentials";
      },
    });
  },
});

export const addEmployee = extendType({
  type: "Mutation",
  definition(t) {
    t.field("addEmployee", {
      type: "Employee",
      args: {
        name: nonNull(stringArg()),
        email: nonNull(stringArg()),
        password: nonNull(stringArg()),
        photo: stringArg(),
        role: stringArg(),
        isManager: stringArg(),
      },
      async resolve(_root, args) {
        const existingEmployee = await prisma.employee.findUnique({
          where: {
            email: args.email,
          },
        });

        if (!existingEmployee) {
          // const salt = await bcrypt.genSalt(10);
          // const hash = await bcrypt.hash(args.password, salt);

          const employee = await prisma.employee
            .create({
              data: {
                name: args.name,
                email: args.email,
                password: args.password,
                photo: args.photo,
                role: args.role,
                isManager: args.isManager,
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

          const accessToken = await jwt.sign(
            { email: employee.email },
            process.env.SECRET_TOKEN as string,
            { expiresIn: "10m" }
          );

          return {
            ...employee,
            accessToken,
          };
        }
      },
    });
  },
});

export const editEmployee = extendType({
  type: "Mutation",
  definition(t) {
    t.field("editEmployee", {
      type: "Employee",
      args: {
        id: nonNull(stringArg()),
        name: stringArg(),
        email: nonNull(stringArg()),
        password: stringArg(),
        photo: stringArg(),
        role: stringArg(),
        isManager: stringArg(),
      },
      async resolve(_root, args, ctx) {
        // let { id, ...data } = args;
        await prisma.employee
          .update({
            where: {
              id: args.id,
            },
            data: {
              ...args,
            },
          })
          .catch(prismaErr);

        return await prisma.employee
          .findUniqueOrThrow({
            where: {
              id: args.id,
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

export const deleteEmployee = extendType({
  type: "Mutation",
  definition(t) {
    t.field("deleteEmployee", {
      type: "Employee",
      args: {
        id: nonNull(stringArg()),
      },
      async resolve(_root, args, ctx) {
        return await prisma.employee
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
