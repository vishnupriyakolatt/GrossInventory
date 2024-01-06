const express = require('express');
const {Addproduct}=require('../controllers/InventoryController')
const upload = require('../utility/multer');
const InventoryRoutes = express.Router();

InventoryRoutes.post('/addproducts', upload.single('file'), Addproduct);


module.exports=InventoryRoutes;