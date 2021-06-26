import { Router } from "express";
const usersRouter = Router();

//Example Endpoint
usersRouter.get("/", (req, res) => {
  return res.status(200).send("<p>User Routes Status: OK</p>");
});

export default usersRouter;
