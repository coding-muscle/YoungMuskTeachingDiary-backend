const examService = require('../services/examService');
const { v4: uuidv4 } = require('uuid');

const createExam = async (req, res) => {    
    try {
        const { 
            examSubject,
            examName,
            studentName,
            examDate,
            examSemester,
            examScore
        } = req.body;

        const examId = uuidv4();
        const Exam = await examService.createExam({
            examId,
            examSubject,
            examName,
            studentName,
            examDate,
            examSemester,
            examScore
        });
        res.status(200).json(Exam);
    } catch (error) {        
        res.status(500).json({ message: error.message });
    }
}

const getExamBySubjectAndSemester = async (req, res) => {
     try {
        const { 
            userId, 
            semester, 
            subject 
        } = req.body;

        const exams = await examService.getExamBySubjectAndSemester(userId, semester, subject);
        if (exams.length > 0) {
            res.status(200).json(exams);
        } else {
            res.status(404).json({ message: `No exams found for subject ${examSubject} and semester ${examSemester}` });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getExamById = async (req, res) => {
    try {
        const { examId } = req.params;
        const exam = await examService.getExamById(examId);
        if (exam) {
            res.status(200).json(exam);
        } else {
            res.status(404).json({ message: `Exam with id ${examId} not found` });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    createExam,
    getExamBySubjectAndSemester,
    getExamById
}