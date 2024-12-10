import express, { json } from "express";
import router from "./router";

const server = express();

server.use(json());

server.use("/api", router);

export default server;
