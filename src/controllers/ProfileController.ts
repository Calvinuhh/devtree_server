import { Request, Response } from "express";
import { patchProfile } from "../services/profileServices";

export const patchProfileController = async (req: Request, res: Response) => {
  try {
    const { handle, description } = req.body;
    const { id } = req.params;

    const patchUser = await patchProfile(id, handle, description);

    res.status(200).json(patchUser);
  } catch (error) {
    const err = error as Error;
    res.status(400).json(err.message);
  }
};
