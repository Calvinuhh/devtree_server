import { Router } from "express";
import { authorization } from "../../middlewares/authorization";
import { patchProfileController } from "../../controllers/ProfileController";
import { validatePatchInputs } from "../../middlewares/inputsPatchValidations";

const profile: Router = Router();

profile.patch("/:id", authorization, validatePatchInputs, patchProfileController);

export default profile;
