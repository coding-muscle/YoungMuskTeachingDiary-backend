const mongoose = require('mongoose');

const examSchema = new mongoose.Schema({
    examId: { type: String, required: true, unique: true },
    examSubject: { type: String, required: true },
    examName: { type: String, required: true },
    studentName: { type: String, required: true },
    studentId: { type: String },
    examDate: { type: Date, required: true },
    examSemester: { type: String, required: true },
    examScore: { type: Number, default: 0 },
    status: { type: String, default: '待测试' },
    feedback: { type: String, default: '教师还未反馈，羊斯克正在敲打老师！'},
    createdAt: { type: Date, default: Date.now }, // 创建时间
    isDeleted: { type: Boolean, default: false }, // 是否已删除
  });

const Exam = mongoose.model('Exam', examSchema);

module.exports = Exam;