
import { Request, Response } from "express";
import { registerUser, loginUser } from "../../application/authService";

export const register = async (req: Request, res: Response) => {
  try {
    const user = await registerUser(req.body.name, req.body.email, req.body.password);
    res.json(user);
  } catch (err: any) {
    res.status(400).json({ msg: err.message });
  }
};  

export const login = async (req: Request, res: Response) => {
  try {
    const token = await loginUser(req.body.email, req.body.password);
    res.json({ token });
  } catch (err: any) {
    res.status(400).json({ msg: err.message });
  }
};