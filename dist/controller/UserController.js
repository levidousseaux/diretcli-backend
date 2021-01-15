"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const User_1 = require("../models/User");
class UserController {
    GetAll(req, res) {
        try {
            //PEDIR PARA O BANCO RETORNAR O USUARIO DO ID
            const user = new User_1.User(req.body.name, req.body.email, req.body.password);
            res.status(200).send(user);
        }
        catch (e) {
            res.status(404).send(e.message);
        }
    }
}
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map