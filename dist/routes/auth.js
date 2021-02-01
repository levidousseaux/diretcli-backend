"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AuthController_1 = require("../controller/AuthController");
const checkJwt_1 = require("../middlewares/checkJwt");
const router = express_1.Router();
const authController = new AuthController_1.AuthController();
router.post("/sign-in", authController.Login);
router.post("/sign-up", authController.CreateUser);
router.delete("/sign-out", authController.Logout);
router.post("/request-pass", authController.ResetPass);
router.post("/login", authController.ResetPass);
router.post("/change-password", [checkJwt_1.checkJwt], AuthController_1.AuthController.changePassword);
exports.default = router;
//# sourceMappingURL=auth.js.map