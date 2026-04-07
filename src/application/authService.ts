import User from "../domain/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your_secret";

export const registerUser = async (
  name: string,
  email: string,
  password: string,
) => {
  const hashed = await bcrypt.hash(password, 10);
  return await User.create({ name, email, password: hashed });
};

export const loginUser = async (email: string, password: string) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("User not found");

  if (!user.password) {
    throw new Error("User password missing");
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) throw new Error("Invalid password");

  const token = jwt.sign(
    { id: user._id, role: user.role },
    JWT_SECRET,
    { expiresIn: "1d" }
  );

  return token;
};