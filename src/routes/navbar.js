const express = require('express');
const navbar_router = express.Router();

// Require user controller
const navbar_controller = require('../controller/navbar.controller');

navbar_router.get('/', navbar_controller.get_navbar);

navbar_router.post('/create', navbar_controller.post_create);

navbar_router.patch('/update/:id', navbar_controller.update_navbar);

navbar_router.delete('/delete/:id', navbar_controller.delete_navbar);

// Exports cho biến navbar_router
module.exports = navbar_router;
