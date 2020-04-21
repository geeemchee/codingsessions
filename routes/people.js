const path = require('path');

const express = require('express');

const peopleController = require('../controllers/people');

const router = express.Router();

// /admin/add-product => POST

router.get('/people', peopleController.getPeople);

router.post('/people', peopleController.postAddPeople);


module.exports = router;
