import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { getRepository } from "typeorm";

import { User } from "../models/User";
import config from "../config/config";
import { validate } from "class-validator";

export class AuthController {
  static login = async (req: Request, res: Response) => {
    let { email, password } = req.body;
    let user: User;
    const userRepository = getRepository(User);

    if (!(email && password)) {
      res.status(400).send();
    }
    
    try {
      user = await userRepository.findOneOrFail({ where: { email: email } });
    } catch (error) {
      res.status(401).send();
      return;
    }

    if (!user.checkIfUnencryptedPasswordIsValid(password)) {
      res.status(401).send();
      return;
    }

    const token = jwt.sign(
      { userId: user.email, username: user.name },
      config.jwtSecret,
      { expiresIn: "1h" }
    );

    //Send the jwt in the response
    res.send(user);
  };

  static changePassword = async (req: Request, res: Response) => {
    //Get ID from JWT
    const id = res.locals.jwtPayload.userId;

    //Get parameters from the body
    const { oldPassword, newPassword } = req.body;
    if (!(oldPassword && newPassword)) {
      res.status(400).send();
    }

    //Get user from the database
    const userRepository = getRepository(User);
    let user: User;
    try {
      user = await userRepository.findOneOrFail(id);
    } catch (id) {
      res.status(401).send();
    }

    //Check if old password matchs
    if (!user.checkIfUnencryptedPasswordIsValid(oldPassword)) {
      res.status(401).send();
      return;
    }

    //Validate de model (password lenght)
    user.password = newPassword;
    const errors = await validate(user);
    if (errors.length > 0) {
      res.status(400).send(errors);
      return;
    }
    //Hash the new password and save
    user.hashPassword();
    userRepository.save(user);

    res.status(204).send();
  };
}
