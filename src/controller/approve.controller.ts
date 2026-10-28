import { Request, Response } from "express";
import { executeTools } from "../tools/executor";

export const handleApproval = async (req: Request, res: Response) => {
  try {
    const { approved, toolName, args } = req.body;
    // Reject approval
    if (approved !== true) {
      return res.json({
        success: true,
        message: "Booking cancelled by user",
      });
    }
    const data = await executeTools(toolName, args, 1);
    return res.json({
      success: true,
      message: "Success",
      data,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};
