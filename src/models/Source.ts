import {Entity, Column, PrimaryGeneratedColumn, BaseEntity} from "typeorm";

@Entity()
export class Source extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column('int')
    id_recomendation: number

    @Column('text')
    value: string
    
    constructor(id_recomendation: number, value: string) {
        super()
        this.id_recomendation = id_recomendation
        this.value = value        
    }
}
