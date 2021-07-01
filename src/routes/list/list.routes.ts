import { Router } from "express";
const listsRouter = Router();

import { ListModel } from "../../connections/models";
import { IList } from "../../schemas/list.schema";

interface Movie {
  director: string;
  title: string;
}

// Example Endpoint
listsRouter.get("/", (req, res) => {
  return res.status(200).send("<p>List Routes Status: OK</p>");
});

/*
 * Enpoints:
 * ---------
 * GET lists
 * POST list
 * PATCH movie to list
 * DELETE movie from list
 * ---------
 */

listsRouter.get("/lists", async (req, res) => {
  try {
    const lists = await ListModel.find();
    res.status(200).send(lists);
  } catch (e) {
    res.status(500).send(`Error: ${e.toString()}`);
  }
});

listsRouter.post("/newlist", async (req, res) => {
  try {
    const listData: IList = req.body;
    const list = new ListModel({
      name: listData.name,
      user_id: listData.user_id,
      movies: listData.movies,
    });
    await list.save();
    res.status(200).send(true);
  } catch (e) {
    res.status(500).send(`Error: ${e.toString()}`);
  }
});

listsRouter.patch("/addmovie/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const listData: Movie = req.body;
    await ListModel.findByIdAndUpdate(id, listData, { new: true });
    res.status(200).send(ListModel.findById(id));
  } catch (e) {
    res.status(500).send(`Error: ${e.toString()}`);
  }
});

listsRouter.patch("/removemovie/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const listData: Movie[] = req.body;
    await ListModel.findByIdAndUpdate(id, listData, { new: true });
    res.status(200).send(ListModel.findById(id));
  } catch (e) {
    res.status(500).send(`Error: ${e.toString()}`);
  }
});

export default listsRouter;
