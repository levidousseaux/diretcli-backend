import { getConnection, EntityManager } from "typeorm";
import { Disease } from "../models/Disease";

export class DiseaseRepository {

    private manager: EntityManager

    constructor() {
        this.manager = getConnection().manager
    }

    async Find(): Promise<Disease[]> {
        const diseases: Disease[] = [];
        await this.manager.find(Disease).then( result => {
            result.forEach((value) => {
                diseases.push(value)
            })
        })
        return diseases
    }

    async DeleteById(id: any): Promise<any> {
        let rows = 0
        await this.manager.delete(Disease, id).then( result => { rows = result.raw })
        return rows
    }

    async InsertDisease(disease: Disease): Promise<any> {
        let return_value;
        await this.manager.insert(Disease, disease).then( result => { return_value = result.raw })
        return return_value
    }

    async UpdateDisease(id: number, disease: Disease): Promise<number> {
        let rows = 0
        await this.manager.update(Disease, id, disease).then( result => { rows = result.raw })
        return rows
    }

}