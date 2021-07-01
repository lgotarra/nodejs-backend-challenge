import { Router } from "express";
import usersRouter from "./user/user.routes";
import listsRouter from "./list/list.routes";

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/lists', listsRouter);

export default routes;
