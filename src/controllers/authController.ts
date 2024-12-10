import { Request, Response } from "express";
import { authService } from "../services/authService";

export const authController = (req: Request, res: Response): void => {
  res.json(authService());
};

export const authPostController = (req: Request, res: Response) => {
  res.json(req.body);
  console.log(req.body);
};
