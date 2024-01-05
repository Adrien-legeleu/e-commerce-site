const express = require("express");
const { verifyToken } = require("./verifyToken");
const router = express.Router();

router.put("/:id", verifyToken);

module.exports = router;
