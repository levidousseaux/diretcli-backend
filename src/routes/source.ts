import { Router } from "express";
import { SourceController } from "../controller/SourceController";

const router = Router();
const sourceController: SourceController = new SourceController();

router.get('/:id_recomendation', sourceController.FindByRecomendation);
router.post('/', sourceController.Create);
router.delete('/:id', sourceController.Delete);

export default router;