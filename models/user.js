import mongoose from "mongoose";
mongoose.connect('mongodb://localhost:27017/sagar');

const userSchema = new mongoose.Schema(
  {
    username:String,
    email: String
  }
);

export const User = mongoose.model("User", userSchema);


  // {
  //   username: {
  //     type: String,
  //     required: true,
  //     unique: true,
  //     lowercase: true,
  //   },
  //   email: String,
  //   email: {
  //     type: String,
  //     required: true,
  //     unique: true,
  //     lowercase: true,
  //   },
  //   password: {
  //     type: String,
  //     required: [true, "Password is required"],
  //   },
  // },
  // {
  //   timestamps: true,
  // }