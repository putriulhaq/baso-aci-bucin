const express = require("express")
const { getAllUsers, createUsers } = require("../controllers/auth.js")
const router = express.Router();

router.route("/").get(getAllUsers).post(createUsers);
// router.route("/:id").delete(deleteProduct).put(updateProduct);

module.exports = router;