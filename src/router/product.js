const express = require("express")
const {createProduct, getAllProduct, deleteProduct, updateProduct} = require("../controllers/product.js")

const router = express.Router();

router.route("/").get(getAllProduct).post(createProduct);
router.route("/:id").delete(deleteProduct).put(updateProduct);

module.exports = router;