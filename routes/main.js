const express = require('express');
const router = express.Router();
const path = require('path');
const products = require('../data/products');

router.get('/', (req, res) => {
    const prodList = products.getProducts();
    try {
        res.render('catalog/catalog', {'ProductList': prodList})
    } catch (e) {
        res.json({error: e});
    }
});

module.exports = router;
