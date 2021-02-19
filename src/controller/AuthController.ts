import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { getRepository } from "typeorm";

import { User } from "../models/User";
import config from "../config/config";
import { validate } from "class-validator";

export class AuthController {
  async Logout (req: Request, res: Response) {
    res.status(204).json({})
  }
  async Login (req: Request, res: Response) {
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
      { email: user.email, name: user.name, role: user.role },
      config.jwtSecret,
      { expiresIn: "1h" }
    );
    res.status(200).send({ token: token });
  }

  async CreateUser(req: Request, res: Response) {
    const user = new User(req.body.email, req.body.fullName, req.body.password, 'admin');
    const errors = await validate(user);

    if (req.body.confirmPassword != req.body.password) {
      res.status(400).send(errors);
      return;
    }

    if (errors.length > 0) {
      res.status(400).send(errors);
      return;
    }

    user.hashPassword();
    
    const userRepository = getRepository(User);
    try {
      await userRepository.save(user);
    } catch (e) {
      res.status(409).send();
      return;
    }

    const token = jwt.sign(
      { userId: user.email, username: user.name },
      config.jwtSecret,
      { expiresIn: "1h" }
    );

    res.status(201).send({ token: token });
  }

  async ResetPass(req: Request, res: Response) {
    const userRepository = getRepository(User);
    try {
      const user: User = await userRepository.findOneOrFail({ where: { email: req.body.email } });
      return res.status(200).send();
    } catch(error) {
      return res.status(400).send( { error: error })
    }
  }
}
