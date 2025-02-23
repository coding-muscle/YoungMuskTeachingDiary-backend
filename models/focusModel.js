const mongoose = require('mongoose');

const FocusSchema = new mongoose.Schema({
    focusId: { type: String, required: true, unique: true },
    student: { type: String, required: true },
    studentId: { type: String },
    startTime: { type: Date, required: true },
    focusDuration: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now }, // 创建时间
    isDeleted: { type: Boolean, default: false }, // 是否已删除
});

const Focus = mongoose.model('Focus', FocusSchema);

module.exports = Focus;