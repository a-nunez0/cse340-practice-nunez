const express = require('express');
const router = express.Router();

const facultyController = require('./faculty/faculty');

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

// Faculty routes
router.get('/faculty', facultyController.facultyListPage);

router.get('/faculty/:facultyId', facultyController.facultyDetailPage);

module.exports = router;