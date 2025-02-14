const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  courseId: { type: String, required: true, unique: true },
  courseName: { type: String, required: true },
  student: { type: String, required: true },
  studentId: { type: String },
  teacher: { type: String, required: true },
  teacherId: { type: String },
  classroom: { type: String, required: true },
  startTime: { type: Date, required: true },
  courseDuration: { type: Number, required: true },
  endTime: { type: Date, required: true },
  courseStatus: { type: Number, enum: [0/*待上课*/, 1/*上课中*/, 2/*已结束*/], default: 0 },
  feedback: { type: String, default: '教师还未反馈，羊斯克正在敲打老师！'},
  createdAt: { type: Date, default: Date.now }, // 创建时间
  isDeleted: { type: Boolean, default: false }, // 是否已删除
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;