import { Request, Response } from "express";
import { authService } from "../services/authServices";

export const authController = (req: Request, res: Response) => {
  res.json(authService());
};

export const authPostController = (req: Request, res: Response) => {
  res.json(req.body);
  console.log(req.body);
};
