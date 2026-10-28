import { Type} from "@google/genai"
export const searchPackageDefinition = {
    name: "search_package",
    description:
      "Search the database for travel packages in Himachal Pradesh. ALWAYS use this tool when the user asks about packages, costs, destination pricing, or trip durations.",
    parameters: {
      type: Type.OBJECT,
      properties: {
        packageName: {
          type: Type.STRING,
          description:
            "Optional name or type of the package, such as honeymoon or adventure",
        },
        maxBudget: {
          type: Type.NUMBER,
          description:"Optional maximum total budget in INR",
        },
        minBudget: {
          type: Type.NUMBER,
          description:
            "Optional minimum total budget in INR",
        },
        destinationName: {
          type: Type.STRING,
          description:
            "Destination to search, such as Manali or Shimla",
        },
        days: {
          type: Type.INTEGER,
          description:
            "Optional duration of the trip in days",
        },
      },
      required: ["destinationName"],
    },
}