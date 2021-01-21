import { Router } from "express";

import { DiseaseController } from '../controller/DiseaseController';

const router = Router();

const diseaseController: DiseaseController = new DiseaseController();

router.get('/diseases', diseaseController.GetAll);
router.post('/create_disease', diseaseController.InsertDisease);
router.put('/update_disease', diseaseController.UpdateDisease);
router.delete('/delete_disease/:id',diseaseController.DeleteDisease);

export default router;