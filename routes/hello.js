const path = require('path');

const express = require('express');

const helloController = require('../controllers/hello');

const router = express.Router();

// /admin/add-product => POST

router.get('/:helloName', (req, res, next) =>{
    console.log("req: ", req)
    const name = req.params.helloName;
    if (!name){
        return res.redirect('/');
    }
    else res.render('hello/hello', {name});
    });


module.exports = router;
