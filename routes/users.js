var express = require('express');
var router = express.Router();
var checkJwt = require('../utilities/authorization/index');

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.send('respond with a resource');
});

router.get('/private', checkJwt, function(req, res) {
	res.json({
		message: 'Hello from a private endpoint! You need to be authenticated to see this.'
	});
});

module.exports = router;
