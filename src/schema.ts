import { makeSchema } from "nexus";
import { join } from "path";
import * as types from "./graphql/types";
import { GraphQLDateTime } from "graphql-iso-date";
export const DateTime = GraphQLDateTime;

export const schema = makeSchema({
  types: [types, DateTime],
  outputs: {
    typegen: join(__dirname, "./graphql", "nexus-typegen.ts"),
    schema: join(__dirname, "./graphql", "schema.graphql"),
  },
});
