export const typeDefs = `#graphql
  type Location {
    id: ID!
    name: String!
  }

  type Query {
    locations: [Location]
  }
`;
