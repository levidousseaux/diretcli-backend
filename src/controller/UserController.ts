import { validate } from "class-validator";
import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../models/User";

export class UserController{

  async GetById(req: Request, res: Response) {
    const userRepository = getRepository(User);
    const users = await userRepository.findOne({
      where: { email: req.params.email },
      select: ["email", "name", "role"]
    });
    res.status(200).send(users);
  };

  async EditUser(req: Request, res: Response) {
    const id = req.params.email;
    const { email, name, role } = req.body;
    const userRepository = getRepository(User);
    let user;
    
    try {
      user = await userRepository.findOneOrFail(id);
    } catch (error) {
      res.status(404).send();
      return;
    }

    user.name = name;
    user.email = email;
    user.role = role;
    
    const errors = await validate(user);
    if (errors.length > 0) {
      res.status(400).send(errors);
      return;
    }

    try {
      await userRepository.save(user);
    } catch (e) {
      res.status(409).send("username already in use");
      return;
    }
    res.status(204).send();
  };

  async DeleteUser(req: Request, res: Response) {
    const id = req.params.email;
    const userRepository = getRepository(User);
    let user: User;

    try {
      user = await userRepository.findOneOrFail(id);
    } catch (error) {
      res.status(404).send("User not found");
      return;
    }
    userRepository.delete(id);
    res.status(204).send();
  };
};
