const express = require('express');
const router = express.Router();
const { getTypesDB } = require('../controllers/typeControllers');

router.get('/', async (req, res) => {
	let types = await getTypesDB();
	res.send(types);
});

module.exports = router;
