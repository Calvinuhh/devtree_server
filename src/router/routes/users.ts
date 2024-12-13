import { Router } from "express";
import {
  getUsersController,
  deteleUserController,
} from "../../controllers/usersControllers";

const users: Router = Router();

users.get("/", getUsersController);
users.delete("/:id", deteleUserController);

export default users;
