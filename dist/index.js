"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const typeorm_1 = require("typeorm");
const dotenv = __importStar(require("dotenv"));
const helmet_1 = __importDefault(require("helmet"));
const Recomendation_1 = require("./models/Recomendation");
const Disease_1 = require("./models/Disease");
const RecomendationController_1 = require("./controller/RecomendationController");
const DiseaseController_1 = require("./controller/DiseaseController");
const UserController_1 = require("./controller/UserController");
dotenv.config();
const app = express_1.default();
const authorisedRoute = express_1.default.Router();
app.use(helmet_1.default());
app.use(cors_1.default());
app.use(express_1.default.json());
if (!process.env.PORT) {
    console.log(`Error to get ports`);
    process.exit(1);
}
const PORT = parseInt(process.env.PORT, 10);
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
typeorm_1.createConnection({
    name: "default",
    type: "mysql",
    host: "us-cdbr-east-02.cleardb.com",
    port: 3306,
    username: "be827aa0f28bbd",
    password: "5b34a369",
    database: "heroku_4674a33dd5ab37b",
    entities: [
        Recomendation_1.Recomendation,
        Disease_1.Disease
    ],
    synchronize: true,
    logging: false
}).then(connection => {
    // here you can start to work with your entities
}).catch(error => console.log(error));
app.use("/", authorisedRoute);
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Credentials', "true");
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    next();
});
const recomendationController = new RecomendationController_1.RecomendationController();
const diseaseController = new DiseaseController_1.DiseaseController();
const userController = new UserController_1.UserController();
authorisedRoute.get('/recomendations/:id', recomendationController.GetAll);
authorisedRoute.post('/create_recomendation', recomendationController.InsertRecomendation);
authorisedRoute.put('/update_recomendation', recomendationController.UpdateRecomendation);
authorisedRoute.delete('/delete_recomendation/:id', recomendationController.DeleteRecomendation);
authorisedRoute.get('/diseases', diseaseController.GetAll);
authorisedRoute.post('/create_disease', diseaseController.InsertDisease);
authorisedRoute.put('/update_disease', diseaseController.UpdateDisease);
authorisedRoute.delete('/delete_disease/:id', diseaseController.DeleteDisease);
authorisedRoute.get('/user/:user_id', userController.GetAll);
//# sourceMappingURL=index.js.map