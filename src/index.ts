// Inject .env variables (config.env)
import "./helpers/env";
import express from "express";
import http from "http";

const SERVER_PORT = process.env.SERVER_PORT;

const app = express();

/*
 *
 * Middleware
 *
 */
// Parses Content-Type payload to JSON.
app.use(express.json());

app.get("/", async (req, res) => {
  res.send("<h1>Welcome to Movielist server</h1>");
});

/*
 *
 * API Router
 *
 */
// app.use("/api", require("./api"));

// Server launch
http.createServer(app).listen(SERVER_PORT, () => {
  // tslint:disable-next-line:no-console
  console.log(`Listening on ${SERVER_PORT}`);
});
