import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt";
import { getUserById } from "../services/authServices";
import { UserRequest } from "../interfaces/User.interface";

declare global {
  namespace Express {
    interface Request {
      user?: UserRequest;
    }
  }
}

export const authorization = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) throw Error("No autorizado");

    const [, token] = authorization.split(" ");

    if (!token) throw Error("No autorizado");

    const result = verifyToken(token);

    if (typeof result === "object" && result.id) {
      const user = await getUserById(result.id);
      req.user = user;
      next();
    }
  } catch (error) {
    const err = error as Error;
    res.status(401).json(err.message);
  }
};
