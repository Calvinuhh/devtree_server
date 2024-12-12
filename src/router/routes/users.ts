import { Router } from "express";
import {
  createUserController,
  getUsersController,
  deteleUserController,
} from "../../controllers/usersControllers";

const users: Router = Router();

users.post("/", createUserController);
users.get("/", getUsersController);
users.delete("/:id", deteleUserController);

export default users;
