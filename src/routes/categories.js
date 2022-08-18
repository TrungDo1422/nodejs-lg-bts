const express = require('express');
const Categories_router = express.Router();

// Require user controller
const Categories_controller = require('../controller/categories.controller');

Categories_router.get('/', Categories_controller.get_categories);

Categories_router.post('/create', Categories_controller.post_create);

Categories_router.patch('/update/:id', Categories_controller.update_categories);

Categories_router.delete(
  '/delete/:id',
  Categories_controller.delete_categories
);

// Exports cho biến Categories_router
module.exports = Categories_router;
