import { Router } from "express";
import {
  createUserController,
  getUsersController,
} from "../../controllers/usersControllers";

const users: Router = Router();

users.post("/", createUserController);
users.get("/", getUsersController);

export default users;
