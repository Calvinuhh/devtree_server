import { Router } from "express";
import { handleController } from "../../controllers/handleController";

const handle: Router = Router();

handle.get("/:handle", handleController);

export default handle;
