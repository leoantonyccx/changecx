import {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
} from "@prisma/client/runtime";

export const prismaErr = (err: unknown) => {
  if (err instanceof PrismaClientKnownRequestError) {
    throw new Error(err.message);
  }
  if (err instanceof PrismaClientUnknownRequestError) {
    throw new Error(err.message);
  }
  return Promise.reject("Invalid Connection");
};
