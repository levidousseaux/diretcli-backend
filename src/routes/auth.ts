import { Router } from "express";
import { AuthController } from '../controller/AuthController';

const router = Router();
const authController = new AuthController()
router.post("/sign-in", authController.Login);
router.post("/sign-up", authController.CreateUser);
router.delete("/sign-out", authController.Logout);
router.post("/request-pass", authController.ResetPass);
router.post("/reset-pass", authController.ResetPass);

export default router;