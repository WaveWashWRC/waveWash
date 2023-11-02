const express = require('express');
const router = express.Router();
const {getStatus} = require('../controllers/auth')
router.route('/').get(getStatus)
module.exports = router