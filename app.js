// import mongoose from "mongoose";
import { User } from "./models/user.js";
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hey hello from server");
});

app.get("/create", async (req, res) => {
  let createdBy = await User.create({
    username: "Sagar",
    email: "sagar@gmail.com",
  });
  res.send(createdBy);
});

app.get("/update", async (req, res) => {
  let updatedBy = await User.findOneAndUpdate(
    { username: "Sagar" },
    { username: "sagar g kunte" },
    { new: true }
  );
  res.send(updatedBy);
});

app.get("/read", async (req, res) => {
  let users = await User.find();
  res.send(users);
});

app.get("/delete", async (req, res) => {
  let user = await User.findOneAndDelete({ username: "sagar g kunte" });
  res.send(user);
});
app.listen(3000, () => {
  console.log(`Server is running at http://localhost:3000`);
});
