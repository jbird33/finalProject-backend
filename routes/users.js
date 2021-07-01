const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/profile/:index', ctrl.users.getProfile);


router.post('/signup', ctrl.users.signup);
router.post('/login', ctrl.users.login);

router.put('/profile/:index', ctrl.users.editProfile);

router.delete('/profile/:index', ctrl.users.deleteUser);

module.exports = router;