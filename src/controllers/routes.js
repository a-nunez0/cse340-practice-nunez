const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const title = 'Welcome Home';
    res.render('home', { title });
});

router.get('/about', (req, res) => {
    const title = 'About Me';
    res.render('about', { title });
});

router.get('/products', (req, res) => {
    const title = 'Our Products';
    res.render('products', { title });
});

module.exports = router;