var express = require('express');
var router = express.Router();
var model = require('../models/index');

/* GET categories listing. */
router.get('/', function(req, res, next) {
    model.Category.findAll({})
        .then(Category => res.json({
            error: false,
            data: Category
        }))
        .catch(error => res.json({
            data: [],
            error: true
        }));
});
/* POST category. */
router.post('/', function(req, res, next) {
    const {
        name,
        description,
        icon
    } = req.body;
    model.Category.create({
        name: name,
        description: description,
        icon: icon
    })
        .then(Category => res.status(201).json({
            error: false,
            data: Category,
            message: 'New Category has been created.'
        }))
        .catch(error => res.json({
            data: [],
            error: true
        }));
});
/* update category. */
router.put('/:id', function(req, res, next) {
    const categoryId = req.params.id;

    const { name, description, icon } = req.body;

    model.Category.update({
        name: name,
        description: description,
        icon: icon
    }, {
        where: {
            id: categoryId
        }
    })
        .then(Category => res.json({
            error: false,
            message: 'todo has been updated.'
        }))
        .catch(error => res.json({
            error: true,
        }));
});
/* delete category. */
router.delete('/:id', function(req, res, next) {
    const categoryId = req.params.id;

    model.Category.destroy({ where: {
            id: categoryId
        }})
        .then(status => res.json({
            error: false,
            message: 'todo has been delete.'
        }))
        .catch(error => res.json({
            error: error
        }));
});

module.exports = router;