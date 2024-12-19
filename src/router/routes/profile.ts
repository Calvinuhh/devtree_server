import { Router } from "express";
import { authorization } from "../../middlewares/authorization";
import {
  patchProfileController,
  uploadImageController,
} from "../../controllers/ProfileController";
import { validatePatchInputs } from "../../middlewares/inputsPatchValidations";
import { validateImageInputs } from "../../middlewares/imageValidations";

const profile: Router = Router();

profile.patch(
  "/:id",
  authorization,
  validatePatchInputs,
  patchProfileController
);
profile.post(
  "/:id/image",
  authorization,
  validateImageInputs,
  uploadImageController
);

export default profile;
