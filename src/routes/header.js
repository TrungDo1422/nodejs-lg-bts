const express = require('express');
const header_router = express.Router();

// Require user controller
const header_controller = require('../controller/header.controller');

header_router.get('/', header_controller.get_header);

header_router.post('/create', header_controller.post_create);

header_router.patch('/update/:id', header_controller.update_header);

header_router.delete('/delete/:id', header_controller.delete_header);

// Exports cho biến header_router
module.exports = header_router;
