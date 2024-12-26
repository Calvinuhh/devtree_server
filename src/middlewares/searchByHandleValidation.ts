import { Request, Response, NextFunction } from "express";

export const searchByHandleValidation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { handle } = req.body;

    if (!handle) throw Error("No se proporciono un nickname");

    next();
  } catch (error) {
    const err = error as Error;
    res.status(400).json(err.message);
  }
};
