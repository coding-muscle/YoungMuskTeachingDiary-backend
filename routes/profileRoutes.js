const express = require('express');
const profileController = require('../controllers/profileController');

const router = express.Router();

router.post('/set-profile', profileController.setProfile);
router.get('/get-profile', profileController.getProfile);

module.exports = router;