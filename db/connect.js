import mongoose from "mongoose";

// const connectionString =
//   "mongodb+srv://singhsaurabhkumar84:Saurabh1234@nodeexpressprojects.jewjoft.mongodb.net/?retryWrites=true&w=majority";

const connectDB = (url) => {
  return mongoose.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
};

export default connectDB;
