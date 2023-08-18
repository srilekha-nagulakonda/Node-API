const express = require("express");
const Product = require("../models/productModel");
const {
  getProducts,
  getProductById,
  updateProduct,
  createProduct,
  deleteProduct,
} = require("../controllers/productController");

const router = express.Router();

router.get("/", getProducts);

router.get("/:id", getProductById);

//update product
router.put("/:id", updateProduct);

//send data into db
router.post("/", createProduct);

//delete product

router.delete("/:id", deleteProduct);

module.exports = router;
