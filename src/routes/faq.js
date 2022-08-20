const express = require('express');
const faq_router = express.Router();

// Require user controller
const faq_controller = require('../controller/faq.controller');

faq_router.get('/', faq_controller.get_faq);

faq_router.post('/create', faq_controller.post_create);

faq_router.patch('/update/:id', faq_controller.update_faq);

faq_router.delete('/delete/:id', faq_controller.delete_faq);

// Exports cho biến faq_router
module.exports = faq_router;
