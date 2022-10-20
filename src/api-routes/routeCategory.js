const express = require('express');
const router = express.Router();
let productsCtrl = require('../controllers/category.js');

     //lay tat ca
router.get('/' , productsCtrl.getAll )
    //lay theo Id
router.get('/:categoryId', productsCtrl.getbyID )


module.exports = router;