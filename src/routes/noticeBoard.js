const express = require('express');
const notice_router = express.Router();

// Require user controller
const notice_controller = require('../controller/noticeBoard.controller');

notice_router.get('/', notice_controller.get_notice);

notice_router.post('/create', notice_controller.post_create);

notice_router.patch('/update/:id', notice_controller.update_notice);

notice_router.delete('/delete/:id', notice_controller.delete_notice);

// Exports cho biến notice_router
module.exports = notice_router;
