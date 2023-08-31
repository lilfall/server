const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ status: "Success", message: "User routes" });
});

module.exports = router;
