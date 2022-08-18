const express = require('express');
const about_router = express.Router();

// Require user controller
const about_controller = require('../controller/about.controller');

about_router.get('/', about_controller.get_about);

about_router.post('/create', about_controller.post_create);

about_router.patch('/update/:id', about_controller.update_about);

about_router.delete('/delete/:id', about_controller.delete_about);

// Exports cho biến about_router
module.exports = about_router;
