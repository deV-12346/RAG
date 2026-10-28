import { Request, Response } from "express";
import { retrievalPipeline } from "../utils/retrievalpipeline/retrievalPipeline";
import { generateAnswer } from "../utils/retrievalpipeline/generateAnswer";
import { appendToHistory, getHistory } from "../store/memoryStore";
const message = [];
export const aiAssistant = async (req: Request, res: Response) => {
  try {
    const { input } = req.body;
    const user = {
      userid: 1,
      message: [],
    };
    if (!input || !input.trim()) {
      return res.status(400).json({
        success: false,
        message: "Input is not provided",
      });
    }
    const history = getHistory(1);
    appendToHistory(1, "user", input);
    const content = await retrievalPipeline(input);
    const texts = await generateAnswer(content, input, 1,history);

    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");
    res.flushHeaders();
    let modelResponseText = "";
    for await (const text of texts) {
      if (text) {
        res.write(`data: ${JSON.stringify({ text })}\n\n`);
        if (typeof text === "string") {
          modelResponseText += text;
        }
      }
    }
    if (modelResponseText) {
      appendToHistory(1, "model", modelResponseText);
    }
    res.end();
  } catch (error) {
    console.log(error);
    if (!res.header) {
      return res.status(500).json({
        success: false,
        messsage: "Something went wrong",
      });
    }
    res.write({
      success: false,
      messsage: "Something went wrong",
    });
    res.end();
  }
};
