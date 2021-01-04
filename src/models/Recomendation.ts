import {Entity, Column, PrimaryGeneratedColumn, BaseEntity} from "typeorm";

@Entity()
export class Recomendation extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column('int')
    id_disease: number

    @Column('tinytext')
    type: string

    @Column('int')
    sequence: number

    @Column('text')
    value: string

    @Column('text')
    user: string

    @Column('datetime')
    last_updated: Date

    UpdateRecomendation(recomendation: any) {
        this.id = recomendation.id
        this.id_disease = recomendation.id_disease
        this.type = recomendation.type
        this.sequence = recomendation.sequence
        this.value = recomendation.value
        this.user = 'levi'
        this.last_updated = new Date(Date.now())
    }
}
