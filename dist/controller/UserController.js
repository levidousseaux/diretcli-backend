"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const User_1 = require("../models/User");
class UserController {
    GetAll(req, res) {
        try {
            //PEDIR PARA O BANCO RETORNAR O USUARIO DO ID
            const response = new User_1.User("Levi", "levi1234", 1); //userRepository.find(req.params.id)      
            res.status(200).send(response);
        }
        catch (e) {
            res.status(404).send(e.message);
        }
    }
}
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map