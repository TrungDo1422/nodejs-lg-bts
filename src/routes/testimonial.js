const express = require('express');
const testimonial_router = express.Router();

// Require user controller
const testimonial_controller = require('../controller/testimonial.controller');

testimonial_router.get('/', testimonial_controller.get_testimonial);

testimonial_router.post('/create', testimonial_controller.post_create);

testimonial_router.patch(
  '/update/:id',
  testimonial_controller.update_testimonial
);

testimonial_router.delete(
  '/delete/:id',
  testimonial_controller.delete_testimonial
);

// Exports cho biến testimonial_router
module.exports = testimonial_router;
