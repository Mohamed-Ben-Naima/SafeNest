const userService = require("../services/userService.js");

const getAllUsersController = async (req, res, next) => {
  try {
    // if (!req.user) {
    //   next(new Error("Your are not authenticated yet get Other people"));
    // }
    const users = await userService.getAllUsers();

    res.status(200).json({data : users});
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUsersController,
};
