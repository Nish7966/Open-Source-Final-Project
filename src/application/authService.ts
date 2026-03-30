import { UserModel } from "../infrastructure/database/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = async (username: string, email: string, password: string) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new UserModel({
    username,
    email,
    password: hashedPassword
  });

  return await user.save();
};

export const loginUser = async (email: string, password: string) => {
  const user = await UserModel.findOne({ email });

  if (!user) throw new Error("User not found");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid credentials");

  const token = jwt.sign({ id: user._id }, "secret", { expiresIn: "1d" });

  return token;
};