export const typeDefs = `#graphql
# Course type 
type Course {
    id:ID!
    name:String!
    cost:String!
    instructor: Instructor!
    rating: Int!
}
#Define studuent type and the fields to query
type Student {
    id: ID!
    name: String!
    level: String!
    hasDiscount: Boolean
    courses:[Course!]!
}
type Instructor {
    id: ID!
    name: String!
    courses: [Course!]!
}

type Query {
    # specify fields to query and what the expected results should be
    courses: [Course!]!
    students:[Student!]!
}
`;
