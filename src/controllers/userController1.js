import handler from "../handlers/user.js";

const createUser = async (req, res) => {
  const { username, password } = req.body;

  // Check if the username already exists
  const existingUser = await handler.findUserByUsername(username);
  if (existingUser) {
    return res
      .status(400)
      .json({ ok: false, message: "Username already exists" });
  }

  // Create the user if the username is unique
  await handler.createUser({ username, password });
  res.status(201).json({ ok: true });
};
const loginUser = async (req, res) => {
  const { username, password } = req.body;
  const user = await handler.loginUser({ username, password });

  if (!user) {
    res.status(401);
    res.json({ message: "invalid password" });
    return;
  }

  const token = createJWT(user);
  res.status(200).json({ token });
};
export default {
  createUser,
  loginUser,
};
