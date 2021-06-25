// Inject .env variables (config.env)
require("dotenv").config();

const { SERVER_PORT } = require("./config");

const express = require("express");
const http = require("http");

const app = express();

/*
 *
 * Middleware
 *
 */
//Parses Content-Type payload to JSON.
app.use(express.json());

app.get("/", async (req, res) => {
  res.send("<h1>Welcome to Movielist server</h1>");
});

// Server launch
http.createServer(app).listen(SERVER_PORT, () => {
  console.log(`Listening on ${SERVER_PORT}`);
});
