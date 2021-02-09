import { Request, Response } from "express";
import { Comment } from "../models/Comment";
import { DeleteResult, getRepository } from "typeorm";

export class CommentController {

    async Create(req: Request, res: Response) {
        try {
            const commentRepository = getRepository(Comment);
            const comment = new Comment(req.body.id_recomendation, req.body.user, req.body.value)
            const result = await commentRepository.save(comment);        
            return res.status(201).send(result);
        } catch(error) {
            return res.status(400).send( { error: error })
        }
    }

    async FindByRecomendation(req: Request, res: Response) {    
        try {            
            const commentRepository = getRepository(Comment);  
            const comments = await commentRepository.find({ where: { id_recomendation: req.params.id_recomendation } });        
            return res.status(200).send(comments);
        } catch(error) {
            return res.status(400).send( { error: error })
        }
    }

    async Delete(req: Request, res: Response) {    
        try {            
            const commentRepository = getRepository(Comment);  
            const result: DeleteResult = await commentRepository.delete(req.params.id);        
            return res.status(200).send({rowsAffected: result.affected});
        } catch(error) {
            return res.status(400).send( { error: error })
        }
    }
}
