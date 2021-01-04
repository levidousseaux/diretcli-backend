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
    const recomendation: Recomendation = new Recomendation()
    recomendation.UpdateRecomendation(req.body)

    try {
      repository.InsertRecomendation(recomendation).then((recomendations) => {
        res.status(200).send(recomendations)
      })
    }
    catch (e) {
      res.status(404).send(e.message);
    }
  }

  UpdateRecomendation(req: any, res: any) {
    const repository: RecomendationRepository = new RecomendationRepository()
    const recomendation: Recomendation = new Recomendation()
    recomendation.UpdateRecomendation(req.body)

    try {
      repository.UpdateRecomendation(recomendation.id, recomendation).then((recomendations) => {
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