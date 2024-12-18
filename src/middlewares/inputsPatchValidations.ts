import { Request, Response, NextFunction } from "express";
import { UpdateProfile } from "../interfaces/User.interface";
import { validateMaxLength } from "../utils/usersInputsValidations";
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

    for (const key in req.body) {
      if (!req.body[key]) throw Error(`Campo ${key} esta vacio`);
    }

    if (!handle) throw Error("Handle es requerido");
    if (!description) throw Error("Description es requerido");

    validateMaxLength(description, "descripcion");

    next();
  } catch (error) {
    const err = error as Error;
    res.status(400).json(err.message);
  }
};
