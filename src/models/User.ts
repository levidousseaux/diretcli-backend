import {Entity, PrimaryGeneratedColumn, Column, Unique, CreateDateColumn, UpdateDateColumn} from "typeorm";
import { IsNotEmpty } from "class-validator";
import * as bcrypt from "bcryptjs";

    
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    username: string;

    @Column('text')
    password: string;

    @Column('text')
    @IsNotEmpty()
    role: string;

    @Column('datetime')
    createdAt: Date;

    @Column('datetime')
    updatedAt: Date;

    hashPassword() {
    this.password = bcrypt.hashSync(this.password, 8);
    }

    checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
    return bcrypt.compareSync(unencryptedPassword, this.password);
    }
}