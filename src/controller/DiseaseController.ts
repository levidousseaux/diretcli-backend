import { Disease } from '../models/Disease';
import { DiseaseRepository } from '../repository/DiseaseRepository';

export class DiseaseController {

  GetAll(req: any, res: any) {
    try {
      const repository: DiseaseRepository = new DiseaseRepository()
      repository.Find().then( (diseases) => { res.status(200).send(diseases) })
    }
    catch (e) {
      res.status(404).send(e.message);
    }
  }

  InsertDisease(req: any, res: any) {    
    try {
      const repository: DiseaseRepository = new DiseaseRepository()
      const disease: Disease = new Disease(req.body.name, req.body.resume)      
      repository.Insert(disease).then((diseases) => {
        res.status(200).send(diseases)
      })
    }
    catch (e) {
      res.status(404).send(e.message);
    }
  }

  UpdateDisease(req: any, res: any) {
    const repository: DiseaseRepository = new DiseaseRepository()
    const disease: Disease = new Disease(req.body.name, req.body.resume)        
    disease.id = req.body.id
    try {
      repository.Update(disease).then(() => {
        res.status(200).send()
      })
    }
    catch (e) {
      res.status(404).send(e.message);
    }
  }

  DeleteDisease(req: any, res: any) {
    try {
      const repository: DiseaseRepository = new DiseaseRepository()
      repository.DeleteById(req.params.id).then((diseases) => {
        res.status(200).send(diseases)
      })
    }
    catch (e) {
      res.status(404).send(e.message);
    }
  }

}