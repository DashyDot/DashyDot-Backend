const express = require('express');
const router = express.Router();

const { signup, signin } = require('../controllers/auth.controller');

router.post('/signup', (req, res) => {
    signup(req, res);
});

router.post('/signin', (req, res) => {
    signin(req, res);
});

module.exports = router;