// @ts-nocheck  
// const product = require("../models/product.js");
const product = require("../models/product.js");
const productModel = require("../models/product.js");

const getAllProduct = async () => {
  return await productModel.find();
};

const createProduct = async (product) => {
  return await productModel.create(product);
};

const deleteProduct = async (product) => {
  return await productModel.findByIdAndDelete(product)

}

const updateProduct = async (id, dataProduct) => {
  console.log(dataProduct)
  return await productModel.findByIdAndUpdate(id, dataProduct, { new: true } )
}

module.exports = { getAllProduct, createProduct, deleteProduct, updateProduct};
