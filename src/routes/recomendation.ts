import { Router } from "express";
import { RecomendationController } from '../controller/RecomendationController';

const router = Router();

const recomendationController: RecomendationController = new RecomendationController();

router.get('/recomendations/:id', recomendationController.GetAll);
router.post('/create_recomendation', recomendationController.InsertRecomendation);
router.put('/update_recomendation', recomendationController.UpdateRecomendation);
router.delete('/delete_recomendation/:id', recomendationController.DeleteRecomendation);

export default router;