"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = __importDefault(require("./routes/auth"));
const user_1 = __importDefault(require("./routes/user"));
const diseases_1 = __importDefault(require("./routes/diseases"));
const recomendations_1 = __importDefault(require("./routes/recomendations"));
const routes = express_1.Router();
routes.use("/auth", auth_1.default);
routes.use("/user", user_1.default);
routes.use("/diseases", diseases_1.default);
routes.use("/recomendations", recomendations_1.default);
exports.default = routes;
//# sourceMappingURL=routes.js.map