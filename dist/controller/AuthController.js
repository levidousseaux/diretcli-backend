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
exports.AuthController = void 0;
const jwt = __importStar(require("jsonwebtoken"));
const typeorm_1 = require("typeorm");
const User_1 = require("../models/User");
const config_1 = __importDefault(require("../config/config"));
const class_validator_1 = require("class-validator");
class AuthController {
}
exports.AuthController = AuthController;
AuthController.login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { email, password } = req.body;
    let user;
    const userRepository = typeorm_1.getRepository(User_1.User);
    if (!(email && password)) {
        res.status(400).send();
    }
    try {
        user = yield userRepository.findOneOrFail({ where: { email: email } });
    }
    catch (error) {
        res.status(401).send();
        return;
    }
    if (!user.checkIfUnencryptedPasswordIsValid(password)) {
        res.status(401).send();
        return;
    }
    const token = jwt.sign({ userId: user.email, username: user.name }, config_1.default.jwtSecret, { expiresIn: "1h" });
    //Send the jwt in the response
    res.send(user);
});
AuthController.changePassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //Get ID from JWT
    const id = res.locals.jwtPayload.userId;
    //Get parameters from the body
    const { oldPassword, newPassword } = req.body;
    if (!(oldPassword && newPassword)) {
        res.status(400).send();
    }
    //Get user from the database
    const userRepository = typeorm_1.getRepository(User_1.User);
    let user;
    try {
        user = yield userRepository.findOneOrFail(id);
    }
    catch (id) {
        res.status(401).send();
    }
    //Check if old password matchs
    if (!user.checkIfUnencryptedPasswordIsValid(oldPassword)) {
        res.status(401).send();
        return;
    }
    //Validate de model (password lenght)
    user.password = newPassword;
    const errors = yield class_validator_1.validate(user);
    if (errors.length > 0) {
        res.status(400).send(errors);
        return;
    }
    //Hash the new password and save
    user.hashPassword();
    userRepository.save(user);
    res.status(204).send();
});
//# sourceMappingURL=AuthController.js.map