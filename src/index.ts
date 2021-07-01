// Inject .env variables (config.env)
import "./helpers/env";
import express from "express";
import http from "http";
import cors from "cors";
import routes from "./routes";
// Connect to desired databases
import { connectToDbDefault } from "./connections/models";

const SERVER_PORT = process.env.SERVER_PORT;

const app = express();

// ------------------------------------------------------------------------------------------------------------

/*
 *
 * Middleware
 *
 */

// Parses Content-Type payload to JSON.
app.use(express.json());

// Allow cross-origin request
app.use(cors());

// ------------------------------------------------------------------------------------------------------------

// Default Endpoint
app.get("/", async (req, res) => {
  res.send("<h1>Welcome to Movielist server</h1>");
});

// ------------------------------------------------------------------------------------------------------------

// Routes
app.use(routes);

// ------------------------------------------------------------------------------------------------------------

//Connect databases
connectToDbDefault;

// ------------------------------------------------------------------------------------------------------------

// Server launch
http.createServer(app).listen(SERVER_PORT, () => {
  // tslint:disable-next-line:no-console
  console.info(`Listening on ${SERVER_PORT}`);
});
