import { extendType, nonNull, objectType, stringArg } from "nexus";
import { prismaErr } from "../prismaError";
import { PrismaClient } from "@prisma/client";
import { addSkillResolver } from "../resolvers/skill";

const prisma = new PrismaClient();

export const Skills = objectType({
  name: "Skills",
  definition(t) {
    t.string("id");
    t.string("name");
    t.list.field("categories", {
      type: "CategoriesOnSkills",
    });
    t.field("createdAt", { type: "DateTime" });
    t.field("updatedAt", { type: "DateTime" });
  },
});

export const allSkills = extendType({
  type: "Query",
  definition(t) {
    t.list.field("skills", {
      type: "Skills",
      async resolve(_root, args) {
        return await prisma.skills.findMany({
          include: {
            categories: {
              include: {
                skill: true,
                category: true,
              },
            },
          },
        });
      },
    });
  },
});

export const getSkill = extendType({
  type: "Query",
  definition(t) {
    t.field("skill", {
      type: "Skills",
      args: {
        id: nonNull(stringArg()),
      },
      async resolve(_root, args) {
        return await prisma.skills
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

export const editSkill = extendType({
  type: "Mutation",
  definition(t) {
    t.field("editSkill", {
      type: "Skills",
      args: {
        id: nonNull(stringArg()),
        name: stringArg(),
        categoryId: stringArg(),
      },
      async resolve(_root, args) {
        const skill = await prisma.skills
          .update({
            where: {
              id: args.id,
            },
            data: {
              name: args.name,
            },
          })
          .catch(prismaErr);

        // await prisma.categoriesOnSkills.update({
        //   where: {
        //     skillId: args.id
        //   }
        // })

        return skill;
      },
    });
  },
});
