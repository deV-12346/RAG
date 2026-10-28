import { Type } from "@google/genai";

export const createBookingDefinition = {
  name: "create_booking",
  description: "Book a travel package for the logged-in user. ALWAYS ask for explicit user confirmation before calling this tool, as it involves creating a reservation.",
  parameters: {
    type: Type.OBJECT,
    properties: {
      packageName: {
        type: Type.STRING,
        description: "The name of the package to book",
      },
      startDate: {
        type: Type.STRING,
        description: "Trip start date (YYYY-MM-DD)",
      },
    },
    required: ["packageName", "startDate"],
  },
};
