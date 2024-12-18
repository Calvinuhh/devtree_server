import { Router } from "express";
import {
  createUserController,
  getUserController,
  loginController,
} from "../../controllers/authControllers";
import {
  validateUserLogin,
  validateUserRegister,
} from "../../middlewares/inputsValidations";
import { authorization } from "../../middlewares/authorization";

const auth: Router = Router();

auth.post("/register", validateUserRegister, createUserController);
auth.post("/login", validateUserLogin, loginController);
auth.get("/user", authorization, getUserController);

export default auth;
