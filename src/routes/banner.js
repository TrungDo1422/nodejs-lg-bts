const express = require('express');
const banner_router = express.Router();

// Require user controller
const banner_controller = require('../controller/banner.controller');

banner_router.get('/', banner_controller.get_banner);

banner_router.post('/create', banner_controller.post_create);

banner_router.patch('/update/:id', banner_controller.update_banner);

banner_router.delete('/delete/:id', banner_controller.delete_banner);

// Exports cho biến banner_router
module.exports = banner_router;
