import { Router } from "express";
const usersRouter = Router();

import { UserModel } from "../../connections/models";

//Example Endpoint
usersRouter.get("/", (req, res) => {
  return res.status(200).send("<p>User Routes Status: OK</p>");
});

/*
 * Enpoints:
 * ---------
 * GET users
 * POST user
 * ---------
 */

usersRouter.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).send(users);
  } catch (e) {
    res.status(500).send(`Error: ${e.toString()}`);
  }
});

usersRouter.post("/newuser", async (req, res) => {
  try {
    const user = new UserModel({
      name: req.body.name,
      password: req.body.password,
    });
    await user.save();
    res.status(200).send(true);
  } catch (e) {
    res.status(500).send(`Error: ${e.toString()}`);
  }
});

export default usersRouter;
