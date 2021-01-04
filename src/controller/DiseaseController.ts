import { Disease } from '../models/Disease';
import { DiseaseRepository } from '../repository/DiseaseRepository';

export class DiseaseController {

  GetAll(req: any, res: any) {
    const repository: DiseaseRepository = new DiseaseRepository()
    try {
      repository.Find().then( diseases => { res.status(200).send(diseases) })
    }
    catch (e) {
      res.status(404).send(e.message);
    }
  }

  InsertDisease(req: any, res: any) {
    const repository: DiseaseRepository = new DiseaseRepository()
    const disease: Disease = new Disease()
    disease.UpdateDisease(req.body)
    try {
      repository.InsertDisease(disease).then((diseases) => {
        res.status(200).send(diseases)
      })
    }
    catch (e) {
      res.status(404).send(e.message);
    }
  }

  UpdateDisease(req: any, res: any) {
    const repository: DiseaseRepository = new DiseaseRepository()
    const disease: Disease = new Disease()
    disease.UpdateDisease(req.body)
    try {
      repository.UpdateDisease(disease.id, disease).then((diseases) => {
        res.status(200).send(diseases)
      })
    }
    catch (e) {
      res.status(404).send(e.message);
    }
  }

  DeleteDisease(req: any, res: any) {
    const repository: DiseaseRepository = new DiseaseRepository()
    try {
      repository.DeleteById(req.params.id).then((diseases) => {
        res.status(200).send(diseases)
      })
    }
    catch (e) {
      res.status(404).send(e.message);
    }
  }

}