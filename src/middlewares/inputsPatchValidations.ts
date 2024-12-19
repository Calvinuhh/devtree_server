import { Request, Response, NextFunction } from "express";
import { UpdateProfile } from "../interfaces/User.interface";
import {
  validateLenghtFromTo,
  validateMaxLength,
} from "../utils/usersInputsValidations";
import { Types } from "mongoose";

export const validatePatchInputs = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { handle, description }: UpdateProfile = req.body;
    const { id } = req.params;

    if (!Types.ObjectId.isValid(id))
      throw Error("El ID ingresado no es valido");

    if (handle) validateLenghtFromTo(handle, "handle", 2, 40);
    if (description) validateMaxLength(description, 100, "descripcion");

    next();
  } catch (error) {
    const err = error as Error;
    res.status(400).json(err.message);
  }
};