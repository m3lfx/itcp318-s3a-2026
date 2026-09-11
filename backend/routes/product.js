const express = require('express');
const router = express.Router();
const upload = require("../utils/multer");

const {
    newProduct,
    getSingleProduct,
    getProducts,
    getAdminProducts,

    // updateProduct,
    // deleteProduct,

} = require('../controllers/product');
const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth')

// router.post('/admin/product/new', upload.array('images', 10), newProduct);
router.get('/product/:id', getSingleProduct)
router.get('/products', getProducts)
router.get('/admin/products', isAuthenticatedUser, authorizeRoles('admin'), getAdminProducts);
router.post('/admin/product/new', isAuthenticatedUser, upload.array('images', 10), newProduct);

// router.put('/admin/product/:id', upload.array('images', 10), updateProduct);
// router.delete('/admin/product/:id', deleteProduct);
module.exports = router