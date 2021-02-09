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
exports.SourceController = void 0;
const Source_1 = require("../models/Source");
const typeorm_1 = require("typeorm");
class SourceController {
    Create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sourceRepository = typeorm_1.getRepository(Source_1.Source);
                const comment = new Source_1.Source(req.body.id_recomendation, req.body.value);
                const result = yield sourceRepository.save(comment);
                return res.status(201).send(result);
            }
            catch (error) {
                return res.status(400).send({ error: error });
            }
        });
    }
    FindByRecomendation(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sourceRepository = typeorm_1.getRepository(Source_1.Source);
                const comments = yield sourceRepository.find({ where: { id_recomendation: req.params.id_recomendation } });
                return res.status(200).send(comments);
            }
            catch (error) {
                return res.status(400).send({ error: error });
            }
        });
    }
    Delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sourceRepository = typeorm_1.getRepository(Source_1.Source);
                const result = yield sourceRepository.delete(req.params.id);
                return res.status(200).send({ rowsAffected: result.affected });
            }
            catch (error) {
                return res.status(400).send({ error: error });
            }
        });
    }
}
exports.SourceController = SourceController;
//# sourceMappingURL=SourceController.js.map