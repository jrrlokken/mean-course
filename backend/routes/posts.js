const express = require("express");

const postsController = require("../controllers/posts");
const checkAuth = require("../middleware/check-auth");
const extractFile = require("../middleware/file");

const router = express.Router();

router.get("/:id", checkAuth, postsController.getPost);
router.get("", postsController.getPosts);
router.post("", checkAuth, extractFile, postsController.createPost);
router.put("/:postId", checkAuth, extractFile, postsController.updatePost);
router.delete("/:postId", checkAuth, postsController.deletePost);

module.exports = router;
