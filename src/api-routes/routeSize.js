const express = require('express');
const router = express.Router();
let productsCtrl = require('../controllers/size.js');

     //lay tat ca
router.get('/' , productsCtrl.getAll )
    //lay theo Id
router.get('/:sizeId',
productsCtrl.getbyID )


module.exports = router;