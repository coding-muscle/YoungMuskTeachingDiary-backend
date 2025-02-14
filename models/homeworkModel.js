const mongoose = require('mongoose');

const homeworkSchema = new mongoose.Schema({
  workId: { type: String, required: true },
  workContent: { type: String, required: true },
  student: { type: String, required: true },
  studentId: { type: String },
  teacher: { type: String, required: true },
  teacherId: { type: String },
  setTime: { type: Date, required: true },
  workStatus: { type: Number, enum: [0/*未完成*/, 1/*已完成*/], default: 0 },
  createdAt: { type: Date, default: Date.now }, // 创建时间
  isDeleted: { type: Boolean, default: false }, // 是否已删除
});

const Homework = mongoose.model('Homework', homeworkSchema);

module.exports = Homework;