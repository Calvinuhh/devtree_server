import { Request, Response } from "express";
import { deleteUser, getUsers } from "../services/usersServices";

export const getUsersController = async (req: Request, res: Response) => {
  try {
    const users = await getUsers();

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
