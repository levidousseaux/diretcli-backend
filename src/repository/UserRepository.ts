/*import { getConnection, EntityManager } from "typeorm";
import { User } from '../models/User';

export class UserRepository {

    private manager: EntityManager

    constructor() {
        this.manager = getConnection().manager
    }

    async Find(): Promise<User[]> {
        const user: User[] = [];
        await this.manager.findOne(User).then( result => {
            result.forEach((value) => {
                user.push(value)
            })
        })
        return user
    }

    async DeleteById(id: any): Promise<number> {
        let rows = 0
        await this.manager.delete(User, id).then( result => { rows = result.raw })
        return rows
    }

    async InsertUser(user: User): Promise<any> {
        let return_value;
        await this.manager.insert(User, user).then( result => { return_value = result.raw })
        return return_value
    }

}
*/
