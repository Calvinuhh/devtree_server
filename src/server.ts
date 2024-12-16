import express, { json } from "express";
import router from "./router/router";
import cors from "cors";

process.loadEnvFile();
const { CLIENT_URL } = process.env;

const server = express();

server.use(
  cors({
    origin: CLIENT_URL,
  })
);
server.use(json());

server.use("/api", router);

export default server;
