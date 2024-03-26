import hotels from "../../fixtures/hotels.json";

export const resolvers = {
  Query: {
    hotels: async (_: any, __: any, ___: any) => {
      return hotels;
    },
  },
  Hotel: {
    rooms: async (_: any, __: any, ___: any) => {
      return [];
    },
  },
};
