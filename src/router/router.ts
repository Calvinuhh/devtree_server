import { Router } from "express";
import auth from "./routes/auth";
import profile from "./routes/profile";
import handle from "./routes/handle";

const router: Router = Router();

router.use("/user", profile);
router.use("/auth", auth);
router.use("/handle", handle);

export default router;
