"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const RecomendationController_1 = require("../controller/RecomendationController");
const router = express_1.Router();
const recomendationController = new RecomendationController_1.RecomendationController();
router.get('/:id', recomendationController.GetAll);
router.post('/create', recomendationController.InsertRecomendation);
router.post('/import', recomendationController.ImportRecomendations);
router.put('/update', recomendationController.UpdateRecomendation);
router.delete('/delete/:id', recomendationController.DeleteRecomendation);
exports.default = router;
//# sourceMappingURL=recomendations.js.map