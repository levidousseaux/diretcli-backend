import * as bcrypt from "bcryptjs";
import { Column, Entity, PrimaryColumn } from "typeorm";

    
@Entity()
export class User {

    @PrimaryColumn()
    email: string;
    
    @Column('text')
    name: string;    

    @Column('text')
    password: string;

    @Column('text')
    role: string;

    constructor(email: string, name: string, password: string, role: string) {
        this.email = email
        this.name = name
        this.password = password
        this.role = role
    }

    hashPassword() {
    this.password = bcrypt.hashSync(this.password, 8);
    }

    checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
        return bcrypt.compareSync(unencryptedPassword, this.password);
    }
}