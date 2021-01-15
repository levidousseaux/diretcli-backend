/*import { User } from '../models/User';
import { UserRepository } from '../repository/UserRepository';

export class UserController {

  GetAll(req: any, res: any) {
    const repository: UserRepository = new UserRepository()
    try {
      repository.Find().then( user => { res.status(200).send(user) })
    }
    catch (e) {
      res.status(404).send(e.message);
    }
  }

  InsertUser(req: any, res: any) {
    const repository: UserRepository = new UserRepository()
    const user: User = new User()
    user.UpdateUser(req.body)

    try {
      repository.InsertUser(user).then((users) => {
        res.status(200).send(users)
      })
    }
    catch (e) {
      res.status(404).send(e.message);
    }
  }

  DeleteUser(req: any, res: any) {
    const repository: UserRepository = new UserRepository()
    try {
      repository.DeleteById(req.params.id).then((users) => {
        res.status(200).send(users)
      })
    }
    catch (e) {
      res.status(404).send(e.message);
    }
  }

}
*/
