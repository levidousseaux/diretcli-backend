import {Entity, Column, PrimaryGeneratedColumn, BaseEntity} from "typeorm";

@Entity()
export class Disease extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column('text')
    name: string

    @Column('text')
    resume: string

    constructor(name: string, resume: string) {
        super()
        this.name = name
        this.resume = resume
    }
}
