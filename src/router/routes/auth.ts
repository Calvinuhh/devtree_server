import { Router } from "express";
import {
  authController,
  authPostController,
} from "../../controllers/authController";

const auth: Router = Router();

auth.get("/register", authController);
auth.post("/register", authPostController);

export default auth;
