import { Types } from "mongoose";
import { Request, Response, NextFunction } from "express";

export const validateImageInputs = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    if (!Types.ObjectId.isValid(id))
      throw Error("El ID ingresado no es valido");

    next();
  } catch (error) {
    const err = error as Error;
    res.status(400).json(err.message);
  }
};
