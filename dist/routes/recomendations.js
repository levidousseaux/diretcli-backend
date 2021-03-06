"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const RecomendationController_1 = require("../controller/RecomendationController");
const multer_1 = __importDefault(require("multer"));
const router = express_1.Router();
const upload = multer_1.default({
    storage: multer_1.default.memoryStorage()
});
const recomendationController = new RecomendationController_1.RecomendationController();
router.get('/:id', recomendationController.GetAll);
router.post('/create', recomendationController.InsertRecomendation);
router.post('/import', recomendationController.ImportRecomendations);
router.put('/update', recomendationController.UpdateRecomendation);
router.delete('/delete/:id', recomendationController.DeleteRecomendation);
router.post('/upload', upload.single('upload'), recomendationController.UploadImage);
router.delete('/image/:id', recomendationController.DeleteImage);
router.get('/image/:id', recomendationController.GetImage);
exports.default = router;
//# sourceMappingURL=recomendations.js.map