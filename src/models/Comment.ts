import {Entity, Column, PrimaryGeneratedColumn, BaseEntity} from "typeorm";

@Entity()
export class Comment extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column('int')
    id_recomendation: number

    @Column('text')
    user: string

    @Column('text')
    value: string
    
    constructor(id_recomendation: number, user: string, value: string) {
        super()
        this.id_recomendation = id_recomendation
        this.user = user
        this.value = value        
    }
}
