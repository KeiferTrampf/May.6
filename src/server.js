import express from "express";
import cors from "cors";
import morgan from "morgan";
import { router } from "./router.js";
import { protect, hashPassword, comparePasswords } from "./modules/auth.js";

hashPassword("kiwi").then((hashed) => {
  // console.log(hashed);
});

// const result = comparePasswords(
//   "kiwi",
//   "$2b$10$NDP9ipimMkH27hGpdoHbCumZGwTmpfVmuJz82sRwR.zg2zFktWoSS"
// );
// console.log(
//   comparePasswords(
//     "kiwi",
//     "$2b$10$NDP9ipimMkH27hGpdoHbCumZGwTmpfVmuJz82sRwR.zg2zFktWoSS"
//   )
// );

export const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json()); // no longer need body-parser; not needed after Express v4.16
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("🚚 Welcome to the Food Truck!");
});

app.use("/api", protect, router);

// => {
//   const bearer = req.headers.authorization;
//   console.log(req.headers, bearer);

// }
console.log(
  comparePasswords(
    "kiwi",
    "$2b$10$NDP9ipimMkH27hGpdoHbCumZGwTmpfVmuJz82sRwR.zg2zFktWoSS"
  )
);
