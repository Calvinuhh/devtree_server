import { Request, Response } from "express";
import { createUser, login } from "../services/authServices";
import { IUser, LoginData } from "../interfaces/User.interface";

export const createUserController = async (req: Request, res: Response) => {
  try {
    const { email, handle, name, password }: IUser = req.body;

    const newUser = await createUser({ email, handle, name, password });

    if (newUser) res.status(201).json("Record created successfully");
  } catch (error) {
    const err = error as Error;
    res.status(400).json(err.message);
  }
};

export const loginController = async (req: Request, res: Response) => {
  try {
    const { email, password }: LoginData = req.body;

    const check = await login(email, password);

    if (check) res.status(200).json("Authenticated");
  } catch (error) {
    const err = error as Error;
    res.status(401).json(err.message);
  }
};
