import { CustomAPIError } from "../errors/custom-errors.js";

const errorHandler = (error, req, res, next) => {
  // console.error(error);
  if (error instanceof CustomAPIError) {
    return res.status(error.statuscode).json({ msg: error.message });
  }
  return res
    .status(500)
    .json({ msg: "Something went wrong, Please Try again." });
};

export default errorHandler;
