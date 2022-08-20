const express = require('express');
const cta_router = express.Router();

// Require user controller
const cta_controller = require('../controller/cta.controller');

cta_router.get('/', cta_controller.get_cta);

cta_router.post('/create', cta_controller.post_create);

cta_router.patch('/update/:id', cta_controller.update_cta);

cta_router.delete('/delete/:id', cta_controller.delete_cta);

// Exports cho biến cta_router
module.exports = cta_router;
