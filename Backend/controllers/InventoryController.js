const Product = require("../models/product");
const upload = require('../utility/multer');


//ADD A NEW PRODUCT

const Addproduct = async (req, res) => {
  try {
    const allProduct = await Product.find();
    const verify = await Product.findOne({
      productcode: { $regex: new RegExp(req.body.productcode, "i") },
    });
    console.log(allProduct);
    if (verify) {
      return res.status(400).json({ msg: "Product is already exist" });
    } else {
      const newProduct = new Product({
        productcode: req.body.productcode,
        name: req.body.name,
        image: req.file.path,
        rate: req.body.rate,
        category: req.body.category,
        stock: req.body.stock,
      });
      await newProduct.save();
      res.status(200).json({ msg: "Product added successfully" });

    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};


//GET ALL PRODUCTS


module.exports = { Addproduct };
