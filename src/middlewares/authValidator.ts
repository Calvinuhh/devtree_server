import { NextFunction, Request, Response } from "express";
import { IUser, LoginData } from "../interfaces/User.interface";
import User from "../models/User";
import {
  onlyStrings,
  securePassword,
  validateEmail,
  validateLenghtFromTo,
} from "../utils/usersValidations";

export const validateUserRegister = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, name, handle, password }: IUser = req.body;

    for (const key in req.body) {
      if (!req.body[key]) throw Error(`Field: ${key} is empty`);
    }

    if (!email) throw Error("Email is required");
    if (!name) throw Error("Name is required");
    if (!handle) throw Error("handle is required");
    if (!password) throw Error("password is required");

    const emailExists = await User.findOne({ email });
    if (emailExists)
      throw Error(`User with email: ${emailExists.email} already exists`);

    validateEmail(email);
    onlyStrings(name, "name");
    validateLenghtFromTo(name, "name", 2, 30);
    validateLenghtFromTo(handle, "handle", 2, 40);
    securePassword(password, "password", 6);

    next();
  } catch (error) {
    const err = error as Error;
    res.status(400).json(err.message);
  }
};

export const validateUserLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password }: LoginData = req.body;

    for (const key in req.body) {
      if (!req.body[key]) throw Error(`Field: ${key} is empty`);
    }

    if (!email) throw Error("Email is required");
    if (!password) throw Error("password is required");

    const emailExists = await User.findOne({ email });
    if (!emailExists) throw Error("Email not registered");

    validateEmail(email);

    next();
  } catch (error) {
    const err = error as Error;
    res.status(400).json(err.message);
  }
};
