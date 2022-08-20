const express = require('express');
const popular_router = express.Router();

// Require user controller
const popular_controller = require('../controller/popular.controller');

popular_router.get('/', popular_controller.get_popular);

popular_router.post('/create', popular_controller.post_create);

popular_router.patch('/update/:id', popular_controller.update_popular);

popular_router.delete('/delete/:id', popular_controller.delete_popular);

// Exports cho biến popular_router
module.exports = popular_router;
