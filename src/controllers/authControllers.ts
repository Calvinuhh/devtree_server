import { Request, Response } from "express";
import { createUser } from "../services/authServices";
import UserInterface from "../interfaces/User.interface";

export const createUserController = async (req: Request, res: Response) => {
  try {
    const { email, handle, name, password }: UserInterface = req.body;

    const newUser = await createUser({ email, handle, name, password });

    res.status(201).json(newUser);
  } catch (error) {
    const err = error as Error;
    res.status(400).json(err.message);
  }
};
