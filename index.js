import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { typeDefs } from "./schema";
import db from "./db";

const resolvers = {
  Query: {
    students() {
      return db.students;
    },
    courses() {
      return db.courses;
    },
    instructors() {
      return db.instructors;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer({
  server,
  listen: { port: 4000 },
});

console.log(`Server ready on port ${url}`);
