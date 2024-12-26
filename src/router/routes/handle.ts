import { Router } from "express";
import {
  handleController,
  searchByHandleController,
} from "../../controllers/handleController";
import { searchByHandleValidation } from "../../middlewares/searchByHandleValidation";

const handle: Router = Router();

handle.post("/search", searchByHandleValidation, searchByHandleController);
handle.get("/:handle", handleController);

export default handle;
