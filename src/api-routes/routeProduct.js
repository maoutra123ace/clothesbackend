const express = require('express');
const router = express.Router();
let productsCtrl = require('../controllers/product.js');

        //lay tat ca
    router.get('/' , productsCtrl.getAll )
        //lay theo Id
    router.get('/:productId',
       productsCtrl.getbyID )

    
module.exports = router;