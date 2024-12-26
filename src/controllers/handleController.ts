import { Request, Response } from "express";
import { getUserByHandle, searchByHandle } from "../services/handleServices";

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

export const searchByHandleController = async (req: Request, res: Response) => {
  try {
    const { handle } = req.body;

    const handleSearch = await searchByHandle(handle);

    if (!handleSearch) res.status(200).json("El nickname esta disponible");
  } catch (error) {
    const err = error as Error;
    res.status(409).json(err.message);
  }
};
