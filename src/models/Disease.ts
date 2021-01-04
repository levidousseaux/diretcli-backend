import {Entity, Column, PrimaryGeneratedColumn, BaseEntity} from "typeorm";

@Entity()
export class Disease extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column('text')
    name: string

    @Column('text')
    user: string

    @Column('datetime')
    last_updated: Date

    UpdateDisease(disease: any) {
        this.id = disease.id
        this.name = disease.name
        this.user = 'levi'
        this.last_updated = new Date(Date.now())
    }
}
