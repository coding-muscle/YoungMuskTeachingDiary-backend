const User = require('../models/userModel');
const examModel = require('../models/examModel');

const createExam = async (examData) => {
    try {
        const student = await User.findOne({ username: examData.studentName });
        examData.studentId = student.userId;

        const exam = await examModel.create(examData);
        return exam;
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Internal Server Error',
        });
    }
};

const getExamBySubjectAndSemester = async (userId, semester, subject) => {
    try {
        const exams = await examModel.find({ studentId: userId, examSemester: semester, examSubject: subject, isDeleted: false });
        return exams;
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Internal Server Error',
        });
    }
}

module.exports = {
    createExam,
    getExamBySubjectAndSemester,
};