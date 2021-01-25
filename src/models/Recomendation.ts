import {Entity, Column, PrimaryGeneratedColumn, BaseEntity} from "typeorm";

@Entity()
export class Recomendation extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column('int')
    id_disease: number

    @Column('tinytext')
    category: string

    @Column('tinytext')
    subcategory: string

    @Column('int')
    sequence: number

    @Column('text')
    title: string

    @Column('text')
    value: string

    @Column('text')
    user: string

    @Column('datetime')
    last_updated: Date

    constructor (id_disease: number, category: string, subcategory: string, sequence: number, title: string, value: string) {
        super();
        this.id_disease = id_disease        
        this.category = category
        this.subcategory = subcategory
        this.sequence = sequence
        this.title = title
        this.value = value
        this.user = 'LEVI'
        this.last_updated = new Date(Date.now())
    }
}
