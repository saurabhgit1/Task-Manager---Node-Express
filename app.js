import express from "express";
import tasksRouter from "./router/tasks.js";
import connectDB from "./db/connect.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/api/v1/tasks", tasksRouter);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log("server started");
    });
  } catch (error) {
    console.log(error);
  }
};

start();
