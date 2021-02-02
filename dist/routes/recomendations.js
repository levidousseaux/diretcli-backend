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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const RecomendationController_1 = require("../controller/RecomendationController");
const multer_1 = __importDefault(require("multer"));
const typeorm_1 = require("typeorm");
const Recomendation_1 = require("../models/Recomendation");
const router = express_1.Router();
const recomendationController = new RecomendationController_1.RecomendationController();
router.get('/:id', recomendationController.GetAll);
router.post('/create', recomendationController.InsertRecomendation);
router.post('/import', recomendationController.ImportRecomendations);
router.put('/update', recomendationController.UpdateRecomendation);
router.delete('/delete/:id', recomendationController.DeleteRecomendation);
const upload = multer_1.default({
    dest: 'images',
    storage: multer_1.default.memoryStorage(),
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) {
            cb(new Error('Please upload an image.'));
        }
        cb(undefined, true);
    }
});
router.post('/upload', upload.single('upload'), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const repository = typeorm_1.getRepository(Recomendation_1.Recomendation);
        const recomendation = yield repository.findOneOrFail(req.body.id);
        recomendation.image = req.file.buffer;
        recomendation.save();
        res.send();
    }
    catch (e) {
        res.status(400).send(e);
    }
}), (error, req, res, next) => {
    res.status(400).send({ error: error.message });
});
router.delete('/upload', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const repository = typeorm_1.getRepository(Recomendation_1.Recomendation);
        const recomendation = yield repository.findOneOrFail(req.body.id);
        recomendation.image = undefined;
        recomendation.save();
        res.send();
    }
    catch (e) {
        res.status(400).send(e);
    }
}));
router.get('/:id/image', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const repository = typeorm_1.getRepository(Recomendation_1.Recomendation);
        const recomendation = yield repository.findOneOrFail(req.params.id);
        if (!recomendation || !recomendation.image) {
            throw new Error();
        }
        //response header, use set
        res.set('Content-Type', 'image/png');
        res.send(recomendation.image);
    }
    catch (e) {
        res.status(404).send();
    }
}));
exports.default = router;
//# sourceMappingURL=recomendations.js.map