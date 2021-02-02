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

}