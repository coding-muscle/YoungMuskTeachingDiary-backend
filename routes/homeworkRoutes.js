const express = require('express');
const homeworkController = require('../controllers/homeworkController');

const router = express.Router();

router.post('/create-homework', homeworkController.createHomework);
router.post('/get-homework', homeworkController.getWorkById);
router.put('/update-homework', homeworkController.updateWork);
router.delete('/delete-homework', homeworkController.deleteWork);

module.exports = router;