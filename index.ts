import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import dotenv from "dotenv";
import { schema } from "./src/schema";

dotenv.config();

const apolloServer = new ApolloServer({
  schema,
});

startStandaloneServer(apolloServer, {
  listen: { port: 4000 },
}).then((engine) => console.log(`Server ready at: ${engine?.url}`));
