import { Router } from "express";
import { findSourceMap } from "module";
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


usersRouter.get("/users", async (req, res) =>{
  try {
    const users = await UserModel.find();
    res.send(users);
  } catch (e) {
    res.status(500).send(`Error: ${e.toString()}`);
  }
})

usersRouter.post("/newuser", async (req, res) =>{
  try {
    //Insert new user to db
  } catch (e) {
    res.status(500).send(`Error: ${e.toString()}`);
  }
})


export default usersRouter;
