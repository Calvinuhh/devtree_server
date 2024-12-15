import { Router } from "express";
import {
  createUserController,
  loginController,
} from "../../controllers/authControllers";
import {
  validateUserLogin,
  validateUserRegister,
} from "../../middlewares/authValidator";

const auth: Router = Router();

auth.post("/register", validateUserRegister, createUserController);
auth.post("/login", validateUserLogin, loginController);

export default auth;
