const {getAllProduct,
       getSingleProduct,
       addProduct,
       updateProduct,
       deleteProduct
} = require('../controller/productController.js')
const app = require('express');
const router = app.Router();

router.get('/get', getAllProduct);
router.get('/get/:pID', getSingleProduct);
router.post('/add', addProduct);
router.put('/update/:pID', updateProduct);
router.delete('/delete/:pID', deleteProduct);

module.exports = router;
