import { User } from "../models/User";

export class UserController {
  
  GetAll(req: any, res: any) {
    try {
      //PEDIR PARA O BANCO RETORNAR O USUARIO DO ID
      const response = new User("Levi", "levi1234", 1)//userRepository.find(req.params.id)      
      res.status(200).send(response)
    }
    catch (e) {
      res.status(404).send(e.message);
    }
  }
}