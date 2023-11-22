import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
    maxlength: [20, "name can't be longer than 20 chars!"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("task", TaskSchema);
