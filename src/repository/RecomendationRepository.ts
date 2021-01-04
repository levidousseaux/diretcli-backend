import { getConnection, EntityManager } from "typeorm";
import { Recomendation } from '../models/Recomendation';

export class RecomendationRepository {

    private manager: EntityManager

    constructor() {
        this.manager = getConnection().manager
    }

    async FindById(id_disease: any): Promise<Recomendation[]> {
        const recomendations: Recomendation[] = [];
        await this.manager.find(Recomendation, { id_disease }).then( result => {
            result.forEach((value) => {
                recomendations.push(value)
            })
        })
        return recomendations
    }

    async DeleteById(id: any): Promise<number> {
        let rows = 0
        await this.manager.delete(Recomendation, id).then( result => { rows = result.raw })
        return rows
    }

    async InsertRecomendation(recomendation: Recomendation): Promise<any> {
        let return_value;
        await this.manager.insert(Recomendation, recomendation).then( result => { return_value = result.raw })
        return return_value
    }

    async UpdateRecomendation(id: number, recomendation: Recomendation): Promise<number> {
        let rows = 0
        await this.manager.update(Recomendation, id, recomendation).then( result => { rows = result.raw })
        return rows
    }

}