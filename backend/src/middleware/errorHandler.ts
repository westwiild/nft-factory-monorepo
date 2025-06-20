import { Request, Response, NextFunction } from "express";
import { logger } from "../utils/logger";

export function errorHandler(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  logger.error("Error:", error);

  // Handle specific error types
  if (error.message.includes("insufficient funds")) {
    return res.status(400).json({
      error: "Insufficient funds for transaction",
    });
  }

  if (error.message.includes("user rejected")) {
    return res.status(400).json({
      error: "Transaction was rejected",
    });
  }

  // Default error response
  res.status(500).json({
    error: "Internal server error",
    message: process.env.NODE_ENV === "development" ? error.message : undefined,
  });
}
