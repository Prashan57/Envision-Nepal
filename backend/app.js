import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.js";
import ServerlessHttp from "serverless-http";
import cors from "cors";
import bidRouter from "./routes/userBid.js";
import adminBidRouter from "./routes/adminBid.js";
dotenv.config();

const { ENVIRONMENT, MONGODB_LOCAL, MONGODB_PROD, PORT } = process.env;

export const app = express();

/**
 * database connection
 */
mongoose
  .connect(ENVIRONMENT === "dev" ? MONGODB_LOCAL : MONGODB_PROD)
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });

// Parses the query params from request url
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // request body / response

app.use(
  cors((req, callback) => {
    callback(null, {
      origin: true,
    });
  })
); // any domain can hit this backend server

// Uses imported routes in express
app.use("/api", userRouter);
app.use("/api", bidRouter);
app.use("/api/admin", adminBidRouter);

app.use("/", (req, res) => {
  res.send("reply from server");
});

export default ServerlessHttp(app);
