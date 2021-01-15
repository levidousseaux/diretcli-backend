import { User } from "../models/User";

export class UserController {
  
  GetAll(req: any, res: any) {
    try {
      //PEDIR PARA O BANCO RETORNAR O USUARIO DO ID
      const user = new User(req.body.name, req.body.email, req.body.password)      
      res.status(200).send(user)
    }
    catch (e) {
      res.status(404).send(e.message);
    }
  }
}