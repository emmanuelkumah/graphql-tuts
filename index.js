import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { typeDefs } from "./schema.js";
import db from "./db.js";

const resolvers = {
  //The Query object holds the resolver methods for all the queries
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
  //The Mutation object holds the resolver methods for all mutations
  Mutation: {
    deleteStudent(_, args) {
      db.students = db.students.filter((student) => student.id !== args.id);
      return db.students;
    },
    addStudent(_, args) {
      let student = {
        ...args.student,
        id: Math.floor(Math.random() * 1000).toString(),
      };
      db.students.push(student);
      return student;
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
