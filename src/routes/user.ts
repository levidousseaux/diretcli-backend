import { Router } from "express";
import { UserController } from "../controller/UserController";

const router = Router();
const userController: UserController = new UserController()

router.get("/", userController.ListAll);
router.post("/", userController.CreateUser);
router.patch("/:email", userController.EditUser );
router.delete( "/:email", userController.DeleteUser );

export default router;
