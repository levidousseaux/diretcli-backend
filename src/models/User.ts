import {Entity, Column, PrimaryGeneratedColumn, BaseEntity} from "typeorm";

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column('text')
    user: string

    @Column('datetime')
    birthday: Date

    UpdateUser(user: any) {
        this.id = user.id
        this.value = user.value
        this.user = user.user
        this.birthday = user.birthday
    }
}
