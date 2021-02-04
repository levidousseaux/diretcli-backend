import { Router } from "express";
import { RecomendationController } from '../controller/RecomendationController';
import multer from "multer";

const router = Router();
const upload = multer({
    storage: multer.memoryStorage()
})
const recomendationController: RecomendationController = new RecomendationController();

router.get('/:id', recomendationController.GetAll);
router.post('/create', recomendationController.InsertRecomendation);
router.post('/import', recomendationController.ImportRecomendations);
router.put('/update', recomendationController.UpdateRecomendation);
router.delete('/delete/:id', recomendationController.DeleteRecomendation);
router.post('/upload', upload.single('upload'), recomendationController.UploadImage)
router.delete('/image/:id', recomendationController.DeleteImage)
router.get('/image/:id', recomendationController.GetImage)

export default router;