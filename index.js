import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { typeDefs } from "./schema.js";
import db from "./db.js";

const resolvers = {
  Query: {
    //define the resolver functions
    students() {
      return db.students; // returns the data to be sent to client
    },
    courses() {
      return db.courses;
    },
    //returns data for a specific student
    student(_, args) {
      return db.students.find((student) => student.id === args.id);
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
