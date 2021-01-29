import { Router } from "express";
import { RecomendationController } from '../controller/RecomendationController';

const router = Router();

const recomendationController: RecomendationController = new RecomendationController();

router.get('/:id', recomendationController.GetAll);
router.post('/create', recomendationController.InsertRecomendation);
router.post('/import', recomendationController.ImportRecomendations);
router.put('/update', recomendationController.UpdateRecomendation);
router.delete('/delete/:id', recomendationController.DeleteRecomendation);

export default router;