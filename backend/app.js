import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { db } from "./db/db.js";
import router from "./routes/transactions.js";

const app = express();

dotenv.config();

//middlewares
app.use(cors());
app.use(express.json());

//routes

app.use("/api/v1", router);

const PORT = process.env.PORT;

const server = () => {
  db();
  app.listen(PORT, () => {
    console.log(`Server is running on port:`, PORT);
  });
};

server();
