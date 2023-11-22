import express from "express";
import {
  createTask,
  deleteTask,
  getAllTasks,
  getTask,
  updateTask,
} from "../controllers/tasks.js";
const tasksRouter = express.Router();

tasksRouter.route("/").get(getAllTasks).post(createTask);

tasksRouter.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

// export {tasksRouter}
export default tasksRouter;
