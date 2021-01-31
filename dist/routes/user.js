"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = require("../controller/UserController");
const router = express_1.Router();
const userController = new UserController_1.UserController();
router.get("/", userController.ListAll);
router.post("/", userController.CreateUser);
router.patch("/:email", userController.EditUser);
router.delete("/:email", userController.DeleteUser);
exports.default = router;
//# sourceMappingURL=user.js.map