import { Router } from "express";

import { DiseaseController } from '../controller/DiseaseController';

const router = Router();

const diseaseController: DiseaseController = new DiseaseController();

router.get('/', diseaseController.GetAll);
router.post('/create', diseaseController.InsertDisease);
router.put('/update', diseaseController.UpdateDisease);
router.delete('/delete/:id',diseaseController.DeleteDisease);

export default router;