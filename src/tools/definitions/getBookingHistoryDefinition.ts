import { Type } from "@google/genai";

export const getBookingHistoryDefinition = {
  name: "get_booking_history",
  description:"Fetch the booking history and package details for the currently logged-in user. Use this when a user asks about their own bookings or trip history.",
  parameters: {
    type: Type.OBJECT,
    properties: {},
    required: [],
  },
};
