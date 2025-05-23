import handler from "../handlers/user.js";
import jwt from "jsonwebtoken";

const createUser = async (req, res) => {
  const { username, password } = req.body;

  const existingUser = await handler.findUserByUsername(username);
  if (existingUser) {
    return res
      .status(400)
      .json({ ok: false, message: "Username already exists" });
  }

  await handler.createUser({ username, password });
  res.status(201).json({ ok: true });
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;
  const user = await handler.loginUser({ username, password });

  if (!user) {
    res.status(401).json({ message: "invalid password" });
    return;
  }

  const token = jwt.sign({ userId: user._id }, "your_secret_key", {
    expiresIn: "1h",
  });
  // Use createJWT to generate the token
  res.status(200).json({ token });
};

export default {
  createUser,
  loginUser,
};
