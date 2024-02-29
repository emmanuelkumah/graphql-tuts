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

# define what you can fetch from the data source
type Query {
    # specify fields to query and what the expected results should be
    courses: [Course]
    students:[Student]
}
`;
