import { Request, Response } from "express";
import { createUser, getUsers } from "../services/usersServices";
import UserInterface from "../interfaces/User.interface";

export const createUserController = async (req: Request, res: Response) => {
  try {
    const { name, email, password }: UserInterface = req.body;
    if (!name || !email || !password) throw Error("Missing field");

    const newUser = await createUser({ name, email, password });

    res.status(200).json(newUser);
  } catch (error) {
    const err = error as Error;
    res.status(400).json(err.message);
  }
};

export const getUsersController = async (req: Request, res: Response) => {
  try {
    const users: UserInterface[] = await getUsers();

    res.status(200).json(users);
  } catch (error) {
    const err = error as Error;
    res.status(400).json(err.message);
  }
};
