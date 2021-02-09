"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const SourceController_1 = require("../controller/SourceController");
const router = express_1.Router();
const sourceController = new SourceController_1.SourceController();
router.get('/:id_recomendation', sourceController.FindByRecomendation);
router.post('/', sourceController.Create);
router.delete('/:id', sourceController.Delete);
exports.default = router;
//# sourceMappingURL=source.js.map