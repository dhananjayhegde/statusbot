/**
 * http://usejsdoc.org/
 */
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
	res.status(200).json({
		message: 'Giving carts details'
	});
});

module.exports = router;