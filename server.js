import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import bannerController from "./bannerController.js";
import { connectToDB } from "./mysqlDB.js";
const port = 8080;

const banner_controller = new bannerController();

const server = express();

server.use(bodyParser.json());

server.use(
  cors({
    origin: [process.env.CORS_ORIGIN],
  })
);

server.get("/", (req, res) => {
  res.send("Welcome to Banner App API");
});

server.get("/bannerDetails", (req, res) => {
  banner_controller.getDetails(req, res);
});

server.post("/updateBannerDetails", (req, res) => {
  console.log(req.body);
  banner_controller.updateDetails(req, res);
  res.status(200).send("Banner Details Updated");
});

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  connectToDB();
});
