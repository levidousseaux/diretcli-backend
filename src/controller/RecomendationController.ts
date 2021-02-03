import { getRepository } from 'typeorm';
import { Recomendation } from '../models/Recomendation';
import { RecomendationRepository } from '../repository/RecomendationRepository';

export class RecomendationController {
  
  GetAll(req: any, res: any) {
    const repository: RecomendationRepository = new RecomendationRepository()
    try {
      repository.FindById(req.params.id).then((recomendations) => {
        res.status(200).send(recomendations)
      })
    }
    catch (e) {
      res.status(404).send(e.message);
    }
  }

  InsertRecomendation(req: any, res: any) {
    const repository: RecomendationRepository = new RecomendationRepository()
    const recomendation: Recomendation =  new Recomendation(req.body.id_disease, req.body.category, req.body.subcategory, req.body.sequence, req.body.title, req.body.value)
    
    try {
      repository.InsertRecomendation(recomendation).then((recomendations) => {
        res.status(200).send(recomendations)
      })
    }
    catch (e) {
      res.status(404).send(e.message);
    }
  }

  async ImportRecomendations(req: { body: any; }, res: any) {
    const repository: RecomendationRepository = new RecomendationRepository()
    const data = req.body
    const recomendations: Recomendation[] = []
    try {
      await data.forEach((recomendation: { id_disease: number; category: string; subcategory: string; sequence: number; title: string; value: string; }) => {
        recomendations.push(new Recomendation(recomendation.id_disease, recomendation.category, recomendation.subcategory, recomendation.sequence, recomendation.title, recomendation.value))
      });
      await repository.InsertRecomendations(recomendations)
      res.status(200).send()
    }
    catch (e) {
      res.status(404).send(e.message);
    }
  }

  UpdateRecomendation(req: any, res: any) {
    const repository: RecomendationRepository = new RecomendationRepository()
    const recomendation: Recomendation =  new Recomendation(req.body.id_disease, req.body.category, req.body.subcategory, req.body.sequence, req.body.title, req.body.value)

    try {
      repository.UpdateRecomendation(req.body.id, recomendation).then((recomendations) => {
        res.status(200).send(recomendations)
      })
    }
    catch (e) {
      res.status(404).send(e.message);
    }
  }

  DeleteRecomendation(req: any, res: any) {
    const repository: RecomendationRepository = new RecomendationRepository()
    try {
      repository.DeleteById(req.params.id).then((recomendations) => {
        res.status(200).send(recomendations)
      })
    }
    catch (e) {
      res.status(404).send(e.message);
    }
  }

  async UploadImage(req: any, res: any) {
    try {
      if (!req.file.originalname.toLocaleLowerCase().match(/\.(png|jpg|jpeg)$/)){
        return res.status(400).send({ error: "Formato invalido" })
      }
      const repository = getRepository(Recomendation)
      const recomendation: Recomendation = await repository.findOneOrFail(req.body.id)        
      recomendation.image = req.file.buffer
      recomendation.save()
      res.send()
    } catch (e){
    }
  }

  async DeleteImage(req: any, res: any) {
    try {
      const repository = getRepository(Recomendation)
      const recomendation: Recomendation = await repository.findOneOrFail(req.params.id)
      recomendation.image = null
      repository.save(recomendation)
      res.status(200).send()
    } catch (e) {
        res.status(400).send(e)
    }
  }

  async GetImage(req: any, res: any) {
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
  }
}