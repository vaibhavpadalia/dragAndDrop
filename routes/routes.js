var express = require('express');
var router = express.Router();
var controller = require('../controller/controller');

router.route('/v1/createUser')
    .post(controller.createUser);

router.route('/v1/getDetails')
    .get(controller.getDetails);

module.exports = router;