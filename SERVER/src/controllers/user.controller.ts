// user.controller.ts

import { Request, Response } from "express";
import User from "../models/user.model";

class UserController {
  async getAllUsers(req: Request, res: Response): Promise<void> {
    // Add req and res here
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: "Error fetching users" });
    }
  }

  async createUser(req: Request, res: Response): Promise<void> {
    const { name, phone, age, email, status, money, active } = req.body;

    try {
      const newUser = new User({
        name,
        phone,
        age,
        email,
        status,
        money,
        active,
      });
      await newUser.save();
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ message: "Error creating user" });
    }
  }

  async getUserById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    try {
      const user = await User.findById(id);
      if (!user) {
        res.status(404).json({ message: "User not found" });
        return;
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: "Error fetching user" });
    }
  }
  //funcion para buscar segun nombre
  async getUserByName(req: Request, res: Response): Promise<void> {
    const { name } = req.params;
    try {
      const user = await User.find({ name: name });
    } catch (error) {
      res.status(500).json({ message: "Error fetching user" });
    }
  }
  //funcion para buscar segun mail
  async getUserByMail(req: Request, res: Response): Promise<void> {
    const { email } = req.params;
    try {
      const user = await User.find({ email: email });
    } catch (error) {
      res.status(500).json({ message: "Error fetching user" });
    }
  }
}

export default new UserController();
