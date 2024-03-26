export const typeDefs = `#graphql
  type Hotel {
    id: ID!
    name: String!
    location: Location!
    rooms(input: RoomSearchInput!): [Room]
  }

  input RoomSearchInput {
    checkIn: String!
    checkOut: String!
    guests: Int!
  }

  type Room {
    id: ID!
    name: String!
    hotel: Hotel!
    description: String!
    pictures: [String]!
    rates: [Rate]!
  }

  type Rate {
    id: ID!
    subTotal: Float!
    currency: String!
    taxes: [Tax]!
  }

  type Tax {
    id: ID!
    name: String!
    amount: Float!
  }

  type Query {
    hotels: [Hotel]
    rooms: [Room]
  }
`;
