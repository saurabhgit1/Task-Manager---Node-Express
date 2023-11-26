import Task from "../models/Task.js";
import asyncWrapper from "../middleware/async.js";
import {
  CustomAPIError,
  createCustomAPIError,
} from "../errors/custom-errors.js";

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(201).json({ tasks }); // can write like this as key and value name is same
  // res.status(201).json({tasks:tasks});
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json(task);
});

const getTask = asyncWrapper(async (req, res, next) => {
  console.log("inside get task");
  const { id: taskId } = req.params;
  const task = await Task.findOne({ _id: taskId });

  if (!task) {
    //method-3
    return next(createCustomAPIError("No Record Found", 404));
    //method-2
    // const error = new Error("No Record Found");
    // error.status = 404;
    // return next(error);
    //method-1
    // return res.status(404).json({ msg: "No task with id" + taskId });
  }

  res.status(200).json({ task });
});

const updateTask = asyncWrapper(async (req, res, next) => {
  const { id: taskId } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!task) {
    return next(createCustomAPIError("Task not exist with given id", 404));
  }

  res.status(200).status(200).json({ task });
});

const deleteTask = asyncWrapper(async (req, res, next) => {
  const { id: taskId } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskId });

  if (!task) {
    return next(createCustomAPIError("Task Does not Exist", 404));
  }
  res.status(200).json({ task });
});

export { getAllTasks, createTask, getTask, updateTask, deleteTask };
