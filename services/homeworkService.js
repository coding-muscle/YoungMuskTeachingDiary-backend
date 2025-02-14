const User = require('../models/userModel');
const homeworkModel = require('../models/homeworkModel');

const createHomework = async (homeworkData) => {
  try {
    const student = await User.findOne({ username: homeworkData.student });
    homeworkData.studentId = student.userId;

    const teacher = await User.findOne({ username: homeworkData.teacher });
    homeworkData.teacherId = teacher.userId;

    const homework = await homeworkModel.create(homeworkData);
    return homework;
  } catch (error) {
    throw error;
  }
};

const getWork = async (req, res) => {
  try {
    const homeworks = await homework.find({ classId: req.params.classId });
    res.status(200).json({
      message: 'Homeworks fetched successfully',
      homeworks,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Internal server error',
    });
  }
};

const updateWork = async (req, res) => {
  try {
    const { title, description, dueDate } = req.body;
    const homeworkToUpdate = await homework.findByIdAndUpdate(
      req.params.id,
      {
        title,
        description,
        dueDate,
      },
      { new: true },
    );
    res.status(200).json({
      message: 'Homework updated successfully',
      homework: homeworkToUpdate,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Internal server error',
    });
  }
};

const deleteWork = async (req, res) => {
  try {
    const homeworkToDelete = await homework.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: 'Homework deleted successfully',
      homework: homeworkToDelete,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Internal server error',
    });
  }
};

module.exports = {
  createHomework,
  getWork,
  updateWork,
  deleteWork,
};