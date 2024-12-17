import { Request, Response } from "express";
import { createUser, login } from "../services/authServices";
import { IUser, LoginData } from "../interfaces/User.interface";

export const createUserController = async (req: Request, res: Response) => {
  try {
    const { email, handle, name, password }: IUser = req.body;

    const newUser = await createUser({ email, handle, name, password });

    if (newUser) res.status(201).json("Registro creado correctamente");
  } catch (error) {
    const err = error as Error;
    res.status(409).json(err.message);
  }
};

export const loginController = async (req: Request, res: Response) => {
  try {
    const { email, password }: LoginData = req.body;

    const token = await login(email, password);

    if (token) res.status(200).json(token);
  } catch (error) {
    const err = error as Error;
    res.status(401).json(err.message);
  }
};

export const getUserController = async (req: Request, res: Response) => {
  try {
    res.status(200).json(req.user);
  } catch (error) {
    const err = error as Error;
    res.status(401).json(err.message);
  }
};
