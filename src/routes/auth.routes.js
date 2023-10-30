const express = require('express');
const router = express.Router();

const { signin } = require('../controllers/auth.controller');

router.post('/signin', (req, res) => {
    signin(req, res);
});

module.exports = router;