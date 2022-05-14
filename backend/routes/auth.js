const express = require("express");

const authController = require("../controllers/auth");

const router = express.Router();

router.post("/signup", authController.createUser);
router.post("/login", authController.userLogin);

module.exports = router;
