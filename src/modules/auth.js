import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const createJWT = ({ id, username }) => {
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET);
  return token; // token is a string
};
export const protect = (req, res, next) => {
  //   console.log(req.headers);
  const bearer = req.headers.authorization;

  //   console.log("in protect, req.headers.authorization: ", bearer);
  if (!bearer) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const [, token] = bearer.split(" ");
  if (!token) {
    return res.status(401).json({ message: "not a valid token" });
  }
  // try {
  //   const payload = jwt.verify(token, process.env.JWT_SECRET);
  //   req.user = payload;
  //   // console.log(payload);
  //   next();
  // } catch (e) {
  //   console.error(e);

  //   res.status(401);
  //   res.json({ message: "token malformed" });
  // }

  next();
};

export const hashPassword = (password) => {
  const SALT = 10;
  const hashedPassword = bcrypt.hash(password, SALT);
  //   console.log(hashedPassword);
  // fyi - may need to async/await to see this
  return hashedPassword;
};
export const comparePasswords = async (password, hash) => {
  // is plain text password the same as hashed password in db?
  const isMatch = await bcrypt.compare(password, hash);
  console.log(isMatch); // may need to async/await to see this
  return isMatch;
};
