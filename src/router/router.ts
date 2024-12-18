import { Router } from "express";
import auth from "./routes/auth";
import profile from "./routes/profile";

const router: Router = Router();

router.use("/user", profile);
router.use("/auth", auth);

export default router;
