const User = require('../models/userModel');
const focusModel = require('../models/focusModel');

const createFocus = async (focusData) => {
    try {
        //添加学生姓名
        const student = await User.findOne({ userId: focusData.userId });
        focusData.student = student.username;
        
        //创建focus
        const focus = await focusModel.create(focusData);
        return focus;
    } catch (error) {
        throw error;
    }
};

const getFocusById = async (id) => {
    try {
        const focus = await focusModel.findOne({ focusId: id });
        return focus;
    } catch (error) {
        throw error;
    }
};

const getFocusByStudentId = async (studentId) => {
    try {
        const focus = await focusModel.find({ studentId: studentId });
        return focus;
    } catch (error) {
        throw error;
    }
};

const updateFocusById = async (id, data) => {
    try {
        const focus = await focusModel.findByIdAndUpdate(id, data, { new: true });
        return focus;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    createFocus,
    getFocusById,
    getFocusByStudentId,
    updateFocusById,
};