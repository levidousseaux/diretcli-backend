"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CommentController_1 = require("../controller/CommentController");
const router = express_1.Router();
const commentController = new CommentController_1.CommentController();
router.get('/:id_recomendation', commentController.FindByRecomendation);
router.post('/', commentController.Create);
router.delete('/:id', commentController.Delete);
exports.default = router;
//# sourceMappingURL=comments.js.map