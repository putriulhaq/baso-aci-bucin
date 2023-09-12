const productService = require("../services/product.js");

const getAllProduct = async (req, res) => {
  try {
    const products = await productService.getAllProduct();
    res.json({ data: products, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createProduct = async (req, res) => {
  try {
    const product = await productService.createProduct(req.body);
    res.json({ data: product, status: "success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const idProduct = req.params.id
    const deleteProduct = await productService.deleteProduct(idProduct)
    if(!deleteProduct){
      return res.status(404).json({message: "Product tidak di temukan"})
    }
    else{
      return res.status(200).json({message: "Berhasil di hapus"})
    }
  } catch (err){
    res.status(500).json({error: err.message})
  }
}

const updateProduct = async (req, res) => {
  try {
    const idProduct = req.params.id
    const dataProduct = req.body
    console.log(dataProduct)
    const updateProduct = await productService.updateProduct(idProduct, dataProduct)
    console.log(updateProduct)
    if(!updateProduct){
      return res.status(404).json({message: "Gagal mempebaharui data"})
    } else {
      return res.status(200).json({message: "Berhasil di perbaharui"})
    }
  } catch (err) {
    res.status(500).json({error: err.message})
  }
}

module.exports = {getAllProduct, createProduct, deleteProduct, updateProduct}
