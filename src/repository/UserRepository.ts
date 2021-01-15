import { getConnection, EntityManager } from "typeorm";
import { User } from '../models/User';

export class UserRepository {

    private manager: EntityManager

    constructor() {
        this.manager = getConnection().manager
    }

    async CreateUser(user: User) {                  
        await this.manager.insert(User, user)
    }

}
