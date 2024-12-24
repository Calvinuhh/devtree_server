import { Request, Response } from "express";
import { getUserByHandle } from "../services/handle";

export const handleController = async (req: Request, res: Response) => {
  try {
    const { handle } = req.params;
    if (!handle) {
      throw new Error("No se proporciono un nickname");
    }

    const user = await getUserByHandle(handle);

    res.status(200).json(user);
  } catch (error) {
    const err = error as Error;
    res.status(400).json(err.message);
  }
};
