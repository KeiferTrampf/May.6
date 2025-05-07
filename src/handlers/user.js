import User from "../models/user.js"; // will handle DB interactions
import { hashPassword, comparePasswords } from "../modules/auth.js";

const createUser = async ({ username, password }) => {
  const user = await User.create({
    username,
    password: await hashPassword(password),
  });

  return user;
};

export default {
  createUser,
};
