"use strict";
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
        const recomendation = new Recomendation_1.Recomendation();
        recomendation.UpdateRecomendation(req.body);
        try {
            repository.InsertRecomendation(recomendation).then((recomendations) => {
                res.status(200).send(recomendations);
            });
        }
        catch (e) {
            res.status(404).send(e.message);
        }
    }
    UpdateRecomendation(req, res) {
        const repository = new RecomendationRepository_1.RecomendationRepository();
        const recomendation = new Recomendation_1.Recomendation();
        recomendation.UpdateRecomendation(req.body);
        try {
            repository.UpdateRecomendation(recomendation.id, recomendation).then((recomendations) => {
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