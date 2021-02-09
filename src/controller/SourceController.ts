import { Request, Response } from "express";
import { Source } from "../models/Source";
import { DeleteResult, getRepository } from "typeorm";

export class SourceController {

    async Create(req: Request, res: Response) {
        try {
            const sourceRepository = getRepository(Source);
            const comment = new Source(req.body.id_recomendation, req.body.value)
            const result = await sourceRepository.save(comment);        
            return res.status(201).send(result);
        } catch(error) {
            return res.status(400).send( { error: error })
        }
    }

    async FindByRecomendation(req: Request, res: Response) {    
        try {            
            const sourceRepository = getRepository(Source);  
            const comments = await sourceRepository.find({ where: { id_recomendation: req.params.id_recomendation } });        
            return res.status(200).send(comments);
        } catch(error) {
            return res.status(400).send( { error: error })
        }
    }

    async Delete(req: Request, res: Response) {    
        try {            
            const sourceRepository = getRepository(Source);  
            const result: DeleteResult = await sourceRepository.delete(req.params.id);        
            return res.status(200).send({rowsAffected: result.affected});
        } catch(error) {
            return res.status(400).send( { error: error })
        }
    }
}
