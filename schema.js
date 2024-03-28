export const typeDefs = `#graphql
# define the entities 
type Course {
    id:ID
    name:String
    cost:String
    rating: Float
}
type Student {
    id: ID
    name: String
    level: String
    courses:[String]
}

# Use the Root Query to define what you can fetch from the data source
type Query {
    #get courses array
    courses: [Course]
    #get students array
    students:[Student]
#Fetch a specific student by providing a student's ID as argument
student(id:ID!): Student
}
#Mutating data 
type Mutation{
    deleteStudent(id: ID!): [Student]
    addStudent(student: StudentInput!): Student
}
# data to pass to addStudent
input StudentInput{
    name: String
    level: String
    courses:[String]
}
`;
