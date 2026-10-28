import {GoogleGenAI, Type} from "@google/genai"

import dotenv from "dotenv"
import { searchPackageDefinition } from "../tools/definitions/searchPackageDefinition";
import { getBookingHistoryDefinition } from "../tools/definitions/getBookingHistoryDefinition";
import { createBookingDefinition } from "../tools/definitions/createBookingDefinition";
dotenv.config()
export const ai = new GoogleGenAI({
    apiKey:process.env.GEMEINI_KEY
})
export const tools = [searchPackageDefinition,getBookingHistoryDefinition,createBookingDefinition];