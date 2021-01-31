"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiseaseController = void 0;
const Disease_1 = require("../models/Disease");
const DiseaseRepository_1 = require("../repository/DiseaseRepository");
class DiseaseController {
    GetAll(req, res) {
        const repository = new DiseaseRepository_1.DiseaseRepository();
        try {
            repository.Find().then((diseases) => { res.status(200).send(diseases); });
        }
        catch (e) {
            res.status(404).send(e.message);
        }
    }
    InsertDisease(req, res) {
        const repository = new DiseaseRepository_1.DiseaseRepository();
        const disease = new Disease_1.Disease();
        disease.UpdateDisease(req.body);
        try {
            repository.InsertDisease(disease).then((diseases) => {
                res.status(200).send(diseases);
            });
        }
        catch (e) {
            res.status(404).send(e.message);
        }
    }
    UpdateDisease(req, res) {
        const repository = new DiseaseRepository_1.DiseaseRepository();
        const disease = new Disease_1.Disease();
        disease.UpdateDisease(req.body);
        try {
            repository.UpdateDisease(disease.id, disease).then((diseases) => {
                res.status(200).send(diseases);
            });
        }
        catch (e) {
            res.status(404).send(e.message);
        }
    }
    DeleteDisease(req, res) {
        const repository = new DiseaseRepository_1.DiseaseRepository();
        try {
            repository.DeleteById(req.params.id).then((diseases) => {
                res.status(200).send(diseases);
            });
        }
        catch (e) {
            res.status(404).send(e.message);
        }
    }
}
exports.DiseaseController = DiseaseController;
//# sourceMappingURL=DiseaseController.js.map