const express = require('express');
const homeworkController = require('../controllers/homeworkController');

const router = express.Router();

router.post('/create-homework', homeworkController.createHomework);
router.post('/get-homework', homeworkController.getHomeworkById);
router.put('/update-homework', homeworkController.updateHomework);
router.delete('/delete-homework', homeworkController.deleteHomework);

module.exports = router;