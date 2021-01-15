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
const User_1 = require("../models/User");
const UserRepository_1 = require("../repository/UserRepository");
class UserController {
    CreateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = new UserRepository_1.UserRepository();
            const user = new User_1.User(1, req.body.name, new Date(req.body.birthday), req.body.email, req.body.cellphone);
            try {
                yield repository.CreateUser(user);
                res.status(200).send(user);
            }
            catch (e) {
                res.status(404).send(e.message);
            }
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map