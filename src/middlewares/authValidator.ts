import { NextFunction, Request, Response } from "express";
import UserInterface from "../interfaces/User.interface";
import User from "../models/User";

export const validateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email }: UserInterface = req.body;

    const emailExists = await User.findOne({ email });

    if (emailExists)
      throw Error(`User with email: ${emailExists.email} already exists`);

    for (const key in req.body) {
      if (!req.body[key]) throw Error(`Missing field: ${key}`);
    }

    next();
  } catch (error) {
    const err = error as Error;
    res.status(400).json(err.message);
  }
};
