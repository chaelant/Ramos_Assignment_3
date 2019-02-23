const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
    try {
        res.render('catalog/catalog', {})
    } catch (e) {
        res.json({error: e});
    }
});

module.exports = router;
