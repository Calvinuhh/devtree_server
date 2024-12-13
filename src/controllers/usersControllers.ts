import { Request, Response } from "express";
import { createUser, deleteUser, getUsers } from "../services/usersServices";
import UserInterface from "../interfaces/User.interface";

export const createUserController = async (req: Request, res: Response) => {
  try {
    const { name, email, password, handle }: UserInterface = req.body;

    for (const key in req.body) {
      if (!req.body[key]) throw Error(`Missing field: ${key}`);
    }

    const newUser = await createUser({ handle, name, email, password });

    res.status(201).json(newUser);
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
    res.status(404).json(err.message);
  }
};

export const deteleUserController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const user = await deleteUser(id);

    res
      .status(200)
      .json(`User ${user.name} with email: ${user.email} was deleted`);
  } catch (error) {
    const err = error as Error;
    res.status(404).json(err.message);
  }
};
