import { Router } from "express";
import { RecomendationController } from '../controller/RecomendationController';
import multer from "multer";
import { getRepository } from "typeorm";
import { Recomendation } from "../models/Recomendation";

const router = Router();

const recomendationController: RecomendationController = new RecomendationController();

router.get('/:id', recomendationController.GetAll);
router.post('/create', recomendationController.InsertRecomendation);
router.post('/import', recomendationController.ImportRecomendations);
router.put('/update', recomendationController.UpdateRecomendation);
router.delete('/delete/:id', recomendationController.DeleteRecomendation);

const upload = multer({
    dest: 'images',
    storage: multer.memoryStorage(),
    fileFilter(req, file, cb) {
        if (!file.originalname.toLocaleLowerCase().match(/\.(png|jpg|jpeg)$/)){
            cb(new Error('Please upload an image.'))
        }
        cb(undefined, true)
    }
})
    
router.post('/upload', upload.single('upload'), async (req: any, res: any) => {
    try {
        const repository = getRepository(Recomendation)
        const recomendation: Recomendation = await repository.findOneOrFail(req.body.id)        
        recomendation.image = req.file.buffer
        recomendation.save()
        res.send()
    } catch (e){
        res.status(400).send()
    }
  }, (error: any, req: any, res: any, next: any) => {
    res.status(400).send()
    })

router.delete('/upload', async (req, res) => {
    try {
        const repository = getRepository(Recomendation)
        const recomendation: Recomendation = await repository.findOneOrFail(req.body.id)
        recomendation.image = undefined
        recomendation.save()
        res.send()
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/:id/image', async (req, res) => {
    try{
        const repository = getRepository(Recomendation)
        const recomendation: Recomendation = await repository.findOneOrFail(req.params.id)
        if (!recomendation || !recomendation.image) {
            throw new Error()
        }
        res.set('Content-Type', 'image/png')
        res.send(recomendation.image)
    } catch(e) {
        res.status(404).send()
    }
})
export default router;