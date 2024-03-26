import { env } from "./env";

export const makeAPIURL = (path: string) => {
  return `https://${env.AVAILABILITY_ENDPOINT}.mockapi.io/api/v1/${path}`;
};
