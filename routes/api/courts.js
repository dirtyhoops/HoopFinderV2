const express = require('express');
const router = express.Router();

// @route       GET api/courts
// @desc        Test route
// @access      Public
router.get('/', (req, res) => res.send('Courts route'));

module.exports = router;
