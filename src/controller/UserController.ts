import { User } from '../models/User';
import { UserRepository } from '../repository/UserRepository';

export class UserController {

  async CreateUser(req: any, res: any) {    
    const repository: UserRepository = new UserRepository()
    const user: User = new User(req.body.name, new Date(req.body.birthday), req.body.email, req.body.cellphone)
    
    try {
        await repository.CreateUser(user)
        res.status(200).send(user)
    }
    catch (e) {
      res.status(404).send(e.message);
    }
  }

  async GetUsers(req: any, res: any) {    
    const repository: UserRepository = new UserRepository()
    
    try {
        await repository.GetUser().then(result => {
          res.status(200).send(result)
        })
    }
    catch (e) {
      res.status(404).send(e.message);
    }
  }

}
