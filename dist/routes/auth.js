"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AuthController_1 = require("../controller/AuthController");
const router = express_1.Router();
const authController = new AuthController_1.AuthController();
router.post("/sign-in", authController.Login);
router.post("/sign-up", authController.CreateUser);
router.delete("/sign-out", authController.Logout);
router.post("/request-pass", authController.ResetPass);
router.post("/reset-pass", authController.ResetPass);
exports.default = router;
//# sourceMappingURL=auth.js.map