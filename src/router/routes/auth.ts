import { Router } from "express";
import { createUserController } from "../../controllers/authControllers";
import { validateUser } from "../../middlewares/authValidator";

const auth: Router = Router();

auth.post("/register", validateUser, createUserController);

export default auth;
