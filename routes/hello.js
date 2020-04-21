const path = require('path');

const express = require('express');

const helloController = require('../controllers/hello');

const router = express.Router();

// /admin/add-product => POST

router.get('/:name', helloController.postName);


module.exports = router;
