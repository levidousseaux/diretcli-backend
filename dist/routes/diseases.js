"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const DiseaseController_1 = require("../controller/DiseaseController");
const router = express_1.Router();
const diseaseController = new DiseaseController_1.DiseaseController();
router.get('/', diseaseController.GetAll);
router.post('/create', diseaseController.InsertDisease);
router.put('/update', diseaseController.UpdateDisease);
router.delete('/delete/:id', diseaseController.DeleteDisease);
exports.default = router;
//# sourceMappingURL=diseases.js.map