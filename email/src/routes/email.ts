import { Router } from "express";
import { handleEmailSend } from "../controllers/email-controller.ts";

const router = Router();

router.route("/").post(handleEmailSend);

export default router;
