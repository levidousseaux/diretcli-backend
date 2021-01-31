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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const User_1 = require("../models/User");
class UserController {
    ListAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userRepository = typeorm_1.getRepository(User_1.User);
            const users = yield userRepository.find({
                select: ["email", "name", "role"]
            });
            res.status(200).send(users);
        });
    }
    ;
    CreateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = new User_1.User(req.body.email, req.body.name, req.body.password, req.body.role);
            const errors = yield class_validator_1.validate(user);
            if (errors.length > 0) {
                res.status(400).send(errors);
                return;
            }
            user.hashPassword();
            const userRepository = typeorm_1.getRepository(User_1.User);
            try {
                yield userRepository.save(user);
            }
            catch (e) {
                res.status(409).send();
                return;
            }
            res.status(201).send();
        });
    }
    ;
    EditUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.email;
            const { email, name, role } = req.body;
            const userRepository = typeorm_1.getRepository(User_1.User);
            let user;
            try {
                user = yield userRepository.findOneOrFail(id);
            }
            catch (error) {
                res.status(404).send();
                return;
            }
            user.name = name;
            user.email = email;
            user.role = role;
            const errors = yield class_validator_1.validate(user);
            if (errors.length > 0) {
                res.status(400).send(errors);
                return;
            }
            try {
                yield userRepository.save(user);
            }
            catch (e) {
                res.status(409).send("username already in use");
                return;
            }
            res.status(204).send();
        });
    }
    ;
    DeleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.email;
            const userRepository = typeorm_1.getRepository(User_1.User);
            let user;
            try {
                user = yield userRepository.findOneOrFail(id);
            }
            catch (error) {
                res.status(404).send("User not found");
                return;
            }
            userRepository.delete(id);
            res.status(204).send();
        });
    }
    ;
}
exports.UserController = UserController;
;
//# sourceMappingURL=UserController.js.map