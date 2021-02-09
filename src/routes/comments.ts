import { Router } from "express";
import { CommentController } from "../controller/CommentController";

const router = Router();
const commentController: CommentController = new CommentController();

router.get('/:id_recomendation', commentController.FindByRecomendation);
router.post('/', commentController.Create);
router.delete('/:id', commentController.Delete);

export default router;