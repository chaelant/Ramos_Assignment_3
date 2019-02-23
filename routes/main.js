const express = require('express');
const router = express.Router();
const path = require('path');
const products = require('../data/products');

router.get('/', (req, res) => {
<<<<<<< HEAD
    const prodList = products.getProducts();
    try {
        res.render('catalog/catalog', {'ProductList': prodList})
=======
    try {
        res.render('catalog/catalog', {})
>>>>>>> c405f3243173b8f36d1ebe841ca95949c15f85d0
    } catch (e) {
        res.json({error: e});
    }
});

module.exports = router;
