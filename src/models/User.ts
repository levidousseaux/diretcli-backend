import {Entity, Column, PrimaryGeneratedColumn, BaseEntity} from "typeorm";

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column('text')
    name: string

    @Column('datetime')
    birthday: Date

    @Column('text')
    email: string

    @Column('text')
    cellphone: string
    
    constructor (name: string, birthday: Date, email: string, cellphone: string) {
        super()
        this.name = name
        this.birthday = birthday
        this.email = email
        this.cellphone = cellphone
    }
}
