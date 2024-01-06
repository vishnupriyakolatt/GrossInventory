const Product = require("../models/product");
const upload = require('../utility/multer');


//ADD A NEW PRODUCT

const Addproduct = async (req, res) => {
  console.log(req.file)
  try {
  
    const allProduct = await Product.find();
    const verify = await Product.findOne({
      productcode: { $regex: new RegExp(req.body.productcode, "i") },
    });
    console.log("All Products:", allProduct);
    console.log("Verification Result:", verify);

    if (verify) {
      return res.status(400).json({ msg: "Product is already exist" });
    } else {
      const newProduct = new Product({
        productcode: req.body.productcode,
        name: req.body.name,
        image: req.file.path,
        rate: req.body.rate,
        offer: req.body.offer,
        category: req.body.category,
        stock: req.body.stock,
        offer:req.body.offer
      });
      await newProduct.save();
      res.status(200).json({ msg: "Product added successfully" });
    }
  } catch (error) {
    console.error("Error in Addproduct:", error);
    res.status(500).json(error); 

  }}


//GET ALL PRODUCTS
const viewProducts= async (req, res) => {
  try {
    const ProductData = await Product.find({});

    console.log(ProductData);
    return res.status(200).json(ProductData);
  } catch (error) {
    console.error('Error fetching Products:', error);
    res.status(500).json(error);
  }
};

module.exports = { Addproduct ,viewProducts};
