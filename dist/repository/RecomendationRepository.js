"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecomendationRepository = void 0;
const typeorm_1 = require("typeorm");
const Recomendation_1 = require("../models/Recomendation");
class RecomendationRepository {
    constructor() {
        this.manager = typeorm_1.getConnection().manager;
    }
    FindById(id_disease) {
        return __awaiter(this, void 0, void 0, function* () {
            const recomendations = [];
            yield this.manager.find(Recomendation_1.Recomendation, { id_disease }).then(result => {
                result.forEach((value) => {
                    recomendations.push(value);
                });
            });
            return recomendations;
        });
    }
    DeleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let rows = 0;
            yield this.manager.delete(Recomendation_1.Recomendation, id).then(result => { rows = result.raw; });
            return rows;
        });
    }
    InsertRecomendation(recomendation) {
        return __awaiter(this, void 0, void 0, function* () {
            let return_value;
            yield this.manager.insert(Recomendation_1.Recomendation, recomendation).then(result => { return_value = result.raw; });
            return return_value;
        });
    }
    InsertRecomendations(recomendation) {
        return __awaiter(this, void 0, void 0, function* () {
            let return_value;
            yield this.manager.insert(Recomendation_1.Recomendation, recomendation).then(result => { return_value = result.raw; });
            return return_value;
        });
    }
    UpdateRecomendation(id, recomendation) {
        return __awaiter(this, void 0, void 0, function* () {
            let rows = 0;
            yield this.manager.update(Recomendation_1.Recomendation, id, recomendation).then(result => { rows = result.raw; });
            return rows;
        });
    }
}
exports.RecomendationRepository = RecomendationRepository;
//# sourceMappingURL=RecomendationRepository.js.map