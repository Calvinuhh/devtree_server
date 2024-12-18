import { NextFunction, Request, Response } from "express";
import { IUser, LoginData } from "../interfaces/User.interface";
import {
  onlyStrings,
  securePassword,
  validateEmail,
  validateLenghtFromTo,
} from "../utils/usersInputsValidations";

export const validateUserRegister = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, name, handle, password }: IUser = req.body;

    for (const key in req.body) {
      if (!req.body[key]) throw Error(`Campo: ${key} esta vacio`);
    }

    if (!email) throw Error("Email es requerido");
    if (!name) throw Error("Name es requerido");
    if (!handle) throw Error("handle es requerido");
    if (!password) throw Error("password es requerido");

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
      if (!req.body[key]) throw Error(`Campo: ${key} esta vacio`);
    }

    if (!email) throw Error("Email es requerido");
    if (!password) throw Error("password es requerido");

    validateEmail(email);

    next();
  } catch (error) {
    const err = error as Error;
    res.status(400).json(err.message);
  }
};
