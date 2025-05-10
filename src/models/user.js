import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, "name is required"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
});

export default mongoose.model("User", userSchema);
