import express, { json } from "express";
import router from "./router/router";
import cors from "cors";

const server = express();

server.use(cors());
server.use(json());

server.use("/api", router);

export default server;
