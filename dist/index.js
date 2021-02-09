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
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const dotenv = __importStar(require("dotenv"));
const helmet_1 = __importDefault(require("helmet"));
const Recomendation_1 = require("./models/Recomendation");
const Disease_1 = require("./models/Disease");
const routes_1 = __importDefault(require("./routes"));
const typeorm_1 = require("typeorm");
const cors_1 = __importDefault(require("cors"));
const User_1 = require("./models/User");
const Comment_1 = require("./models/Comment");
const Source_1 = require("./models/Source");
const app = express_1.default();
dotenv.config();
if (!process.env.PORT) {
    console.log(`Error to get ports`);
    process.exit(1);
}
const PORT = parseInt(process.env.PORT, 10);
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
typeorm_1.createConnection({
    /*    name: "default",
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "root",
        password: "levi1234",
        database: "diretcli",
        entities: [
            Recomendation,
            Disease,
            User
        ],
        synchronize: true,
        logging: false
      }*/
    name: "default",
    type: "mysql",
    host: "us-cdbr-east-02.cleardb.com",
    port: 3306,
    username: "be827aa0f28bbd",
    password: "5b34a369",
    database: "heroku_4674a33dd5ab37b",
    entities: [
        Recomendation_1.Recomendation,
        Disease_1.Disease,
        User_1.User,
        Comment_1.Comment,
        Source_1.Source
    ],
    synchronize: true,
    logging: false
}).then(() => { }).catch((error) => console.log(error));
app.use(helmet_1.default());
app.use(cors_1.default());
app.use(express_1.default.json());
app.use("/", routes_1.default);
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Credentials', "true");
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    next();
});
//# sourceMappingURL=index.js.map