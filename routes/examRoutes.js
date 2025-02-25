const express = require('express');
const examController = require('../controllers/examController');

const router = express.Router();

router.post('/create-exam', examController.createExam);
router.post('/get-exam', examController.getExamBySubjectAndSemester);
// router.put('/update-exam', examController.updateExam);
// router.delete('/delete-exam', examController.deleteExam);

module.exports = router;