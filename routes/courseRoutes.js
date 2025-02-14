const express = require('express');
const courseController = require('../controllers/courseController');

const router = express.Router();

router.post('/create-course', courseController.createCourse);
router.post('/get-course', courseController.getCourseByIdAndDate);
router.put('/update-course', courseController.updateCourse);
router.delete('/delete-course', courseController.deleteCourse);

module.exports = router;