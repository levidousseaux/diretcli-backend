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
exports.RecomendationController = void 0;
const Recomendation_1 = require("../models/Recomendation");
const RecomendationRepository_1 = require("../repository/RecomendationRepository");
class RecomendationController {
    GetAll(req, res) {
        const repository = new RecomendationRepository_1.RecomendationRepository();
        try {
            repository.FindById(req.params.id).then((recomendations) => {
                res.status(200).send(recomendations);
            });
        }
        catch (e) {
            res.status(404).send(e.message);
        }
    }
    InsertRecomendation(req, res) {
        const repository = new RecomendationRepository_1.RecomendationRepository();
        const recomendation = new Recomendation_1.Recomendation(req.body.id_disease, req.body.category, req.body.subcategory, req.body.sequence, req.body.title, req.body.value);
        try {
            repository.InsertRecomendation(recomendation).then((recomendations) => {
                res.status(200).send(recomendations);
            });
        }
        catch (e) {
            res.status(404).send(e.message);
        }
    }
    ImportRecomendations(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = new RecomendationRepository_1.RecomendationRepository();
            const data = req.body;
            const recomendations = [];
            try {
                yield data.forEach((recomendation) => {
                    recomendations.push(new Recomendation_1.Recomendation(recomendation.id_disease, recomendation.category, recomendation.subcategory, recomendation.sequence, recomendation.title, recomendation.value));
                });
                yield repository.InsertRecomendations(recomendations);
                res.status(200).send();
            }
            catch (e) {
                res.status(404).send(e.message);
            }
        });
    }
    UpdateRecomendation(req, res) {
        const repository = new RecomendationRepository_1.RecomendationRepository();
        const recomendation = new Recomendation_1.Recomendation(req.body.id_disease, req.body.category, req.body.subcategory, req.body.sequence, req.body.title, req.body.value);
        try {
            repository.UpdateRecomendation(req.body.id, recomendation).then((recomendations) => {
                res.status(200).send(recomendations);
            });
        }
        catch (e) {
            res.status(404).send(e.message);
        }
    }
    DeleteRecomendation(req, res) {
        const repository = new RecomendationRepository_1.RecomendationRepository();
        try {
            repository.DeleteById(req.params.id).then((recomendations) => {
                res.status(200).send(recomendations);
            });
        }
        catch (e) {
            res.status(404).send(e.message);
        }
    }
}
exports.RecomendationController = RecomendationController;
//# sourceMappingURL=RecomendationController.js.map