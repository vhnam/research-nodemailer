const express = require('express');
const router = express.Router();

const emailController = require('../controllers/v1/email');

router.post('/email', emailController.send);

module.exports = router;
