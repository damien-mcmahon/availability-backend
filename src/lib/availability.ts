import {
  AvailabilityRoom,
  availabilityRoomListSchema,
} from "../types/availability";
import { AvailabilityInput } from "../types/hotel";
import { Room, Tax } from "../types/room";
import { makeAPIURL } from "./utils";

const mapAvailabiltyToEnnismoreRoom = (room: AvailabilityRoom): Room => ({
  id: `${room.id}-${room.code}`,
  name: room.name,
  description: room.description,
  pictures: room.media.map((media) => media.url),
  price: {
    id: room.rates[0].id,
    subTotal: room.rates[0].price.amount,
    currency: room.rates[0].price.currency,
    taxes: room.rates[0].price.taxes?.map((tax: Tax) => ({
      id: tax.id,
      name: tax.name,
      amount: tax.amount,
    })),
  },
});

// TODO: More defensive programming needed here
export async function getAvailability(
  availabilityInput: AvailabilityInput,
): Promise<Room[] | []> {
  const response = await fetch(makeAPIURL("rooms"), {
    method: "GET",
  });

  const data = await response.json();

  if (!data || !Array.isArray(data)) {
    console.log("No data received from the API");
    return [];
  }

  const parsedData = availabilityRoomListSchema.safeParse(data);

  if (!parsedData.success) {
    console.log("Invalid data received from the API");
    return [];
  } else {
    return data.map(mapAvailabiltyToEnnismoreRoom);
  }
}
