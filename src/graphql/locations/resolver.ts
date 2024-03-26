import locations from "../../fixtures/locations.json";

export const resolvers = {
  Query: {
    locations: () => locations,
  },
};
