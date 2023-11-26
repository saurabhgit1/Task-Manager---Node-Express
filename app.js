import express from "express";
import tasksRouter from "./router/tasks.js";
import connectDB from "./db/connect.js";
import dotenv from "dotenv";
dotenv.config();
import notFound from "./middleware/not-found.js";
import errorHandler from "./middleware/error-handler.js";

const app = express();
const port = process.env.PORT || 3000;
console.log("ppp", port);

//middlewares
app.use(express.json());
app.use(express.static("./public"));

//routes
app.use("/api/v1/tasks", tasksRouter);
app.use(notFound);
app.use(errorHandler);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log("server started at" + port);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
