import dotenv from "dotenv";
dotenv.config();
import { connect } from "./connect.js";
import { app } from "./server.js";
import { createJWT } from "./modules/auth.js";

connect(process.env.DB_CONN)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server running on http://localhost:${process.env.PORT}`);
    });
  })
  .catch((e) => console.error(e));

// console.log(createJWT({ id: "2", username: "al" }));
