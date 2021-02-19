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
exports.DiseaseRepository = void 0;
const typeorm_1 = require("typeorm");
const Disease_1 = require("../models/Disease");
class DiseaseRepository {
    constructor() {
        this.manager = typeorm_1.getConnection().manager;
    }
    Find() {
        return __awaiter(this, void 0, void 0, function* () {
            const diseases = [];
            yield this.manager.find(Disease_1.Disease).then(result => {
                result.forEach((value) => {
                    diseases.push(value);
                });
            });
            return diseases;
        });
    }
    DeleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let rows = 0;
            yield this.manager.delete(Disease_1.Disease, id).then(result => { rows = result.raw; });
            return rows;
        });
    }
    Insert(disease) {
        return __awaiter(this, void 0, void 0, function* () {
            let return_value;
            yield this.manager.insert(Disease_1.Disease, disease).then(result => { return_value = result.raw; });
            return return_value;
        });
    }
    Update(disease) {
        return __awaiter(this, void 0, void 0, function* () {
            yield disease.save();
        });
    }
}
exports.DiseaseRepository = DiseaseRepository;
//# sourceMappingURL=DiseaseRepository.js.map