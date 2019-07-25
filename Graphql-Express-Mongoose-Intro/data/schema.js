import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';
const typeDefs = `

  type Dog {
    id: ID
    firstName: String
    lastName: String
    gender: Gender
    email: String
    age: Int
    parents: [Parent]
  }

  type Parent {
    firstName: String
    lastName: String
  }

  type Query {
    getOneDog(id: ID!): Dog
    getDogs: [Dog]
  }

  enum Gender {
    MALE
    FEMALE
  }

  input ParentInput {
    firstName: String
    lastName: String
  }

  input DogInput {
    id: ID
    firstName: String
    lastName: String
    gender: Gender
    email: String
    age: Int
    parents: [ParentInput]
  }

  type Mutation {
    createDog(input: DogInput): Dog
    updateDog(input: DogInput): Dog
    deleteDog(id: ID!): String
  }
`;


export default makeExecutableSchema({typeDefs, resolvers});
