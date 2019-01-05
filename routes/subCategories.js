var express = require('express');
var router = express.Router();
var model = require('../models/index');

/* GET subCategories listing. */
router.get('/', function(req, res, next) {
    model.SubCategory.findAll({
        attributes: ['name', 'categoryId'],
    })
        .then(SubCategory => res.json({
            error: false,
            data: SubCategory
        }))
        .catch(error => res.json({
            data: [],
            error: true
        }));
});

module.exports = router;