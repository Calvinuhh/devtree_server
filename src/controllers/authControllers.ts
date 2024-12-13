import { Request, Response } from "express";
import { createUser } from "../services/authServices";

export const createUserController = async (req: Request, res: Response) => {
  try {
    const newUser = await createUser(req.body);

    res.status(201).json(newUser);
  } catch (error) {
    const err = error as Error;
    res.status(400).json(err.message);
  }
};
