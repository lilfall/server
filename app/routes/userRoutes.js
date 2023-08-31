const express = require("express");
const UserController = require("../controllers/userControllers.js");
const router = express.Router();

router.get("/", UserController.getUsers);

module.exports = router;
