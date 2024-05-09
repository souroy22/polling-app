import { NextFunction, Request, Response } from "express";

const validationCheck = {
  validateCreateQuestion: (req: Request, res: Response, next: NextFunction) => {
    const requiredFields: string[] = ["title"];
    const missingFields: string[] = [];

    // Check if any required field is missing or blank
    requiredFields.forEach((field) => {
      if (!req.body[field] || req.body[field].trim() === "") {
        missingFields.push(field);
      }
    });

    // If any field is missing or blank, send an error response
    if (missingFields.length > 0) {
      return res.status(400).json({
        error: `Missing or blank fields: ${missingFields.join(", ")}`,
      });
    }

    // No missing or blank fields, proceed to the next middleware
    next();
  },

  validateCreateOption: (req: Request, res: Response, next: NextFunction) => {
    const requiredFields: string[] = ["text"];
    const missingFields: string[] = [];

    // Check if any required field is missing or blank
    requiredFields.forEach((field) => {
      if (!req.body[field] || req.body[field].trim() === "") {
        missingFields.push(field);
      }
    });

    // If any field is missing or blank, send an error response
    if (missingFields.length > 0) {
      return res.status(400).json({
        error: `Missing or blank fields: ${missingFields.join(", ")}`,
      });
    }

    // No missing or blank fields, proceed to the next middleware
    next();
  },
};

export default validationCheck;
