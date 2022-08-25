const express = require('express');
const uploadImg_router = express.Router();

// Require user controller
const uploadImg_controller = require('../controller/uploadImg.controller');

uploadImg_router.get('/', uploadImg_controller.get_uploadImg);

uploadImg_router.post('/create', uploadImg_controller.post_create);

uploadImg_router.patch('/update/:id', uploadImg_controller.update_uploadImg);

uploadImg_router.delete('/delete/:id', uploadImg_controller.delete_uploadImg);

// Exports cho biến uploadImg_router
module.exports = uploadImg_router;
