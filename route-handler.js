// todo-routes.js
var express = require('express');
var errors = require('express-api-server').errors;
var jsonParser = require('body-parser').json();

var router = module.exports = express.Router();

router.route('/')
    // GET /todos
    .get(function(req, res, next) {
        // var todos; // ...Get resources from backend...
        console.log("LOLOLOL");
        res.json({"status": 0});
    })
    // POST /todos
    .post(jsonParser, function(req, res, next) {
        if (!req.body) { return next(new errors.BadRequestError()); }

        console.log("TROLOLOLOL");
        console.log(req.body);

        // Plot JSON values.

        res.status(201); // Created
        res.json({"status": 0});
    });
