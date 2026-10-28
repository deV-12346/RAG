import express from "express"
import { aiAssistant } from "../controller/aiassistant.controller"
import { handleApproval } from "../controller/approve.controller";
export const aiRouter = express.Router()
aiRouter.get("/chatbot", aiAssistant)
aiRouter.post("/approval", handleApproval);
