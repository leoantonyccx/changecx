import { PrismaClient } from "@prisma/client";
import { prismaErr } from "../prismaError";

const prisma = new PrismaClient();

export const addSkillResolver = async (args: any) => {
  return await prisma.categoriesOnSkills
    .create({
      // where:{
      //   categoryId:
      // },
      data: {
        category: {
          connect: {
            id: args.categoryId,
          },
        },
        skill: {
          connectOrCreate: {
            where: {
              name: args.name,
            },
            create: {
              name: args.name,
            },
          },
        },
      },
      include: {
        skill: true,
        category: true,
      },
    })
    .catch(prismaErr);
};
