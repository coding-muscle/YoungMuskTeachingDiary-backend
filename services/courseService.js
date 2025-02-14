const User = require('../models/userModel');
const courseModel = require('../models/courseModel');

const createCourse = async (courseData) => {
  try {
    const student = await User.findOne({ username: courseData.student });
    courseData.studentId = student.userId;

    const teacher = await User.findOne({ username: courseData.teacher });
    courseData.teacherId = teacher.userId;

    const startTime = new Date(courseData.startTime);
    const duration = await revertDuration(courseData.courseDuration);
    const endTime = new Date(startTime.getTime() + duration);
    courseData.endTime = endTime;

    // 创建课程
    const course = await courseModel.create(courseData);
    return course;
  } catch (error) {
    throw error;
  }
};

const getCourseById = async (studentId) => {
  try {
    const courses = await courseModel.find({studentId});
    return courses;
  } catch (error) {
    throw error;
  }
};

const getCourseByIdAndDate = async (studentId, date) => {
  try {
    const [month, day] = date.split('/').map(Number);
    if (
      isNaN(month) || isNaN(day) ||
      month < 1 || month > 12 ||
      day < 1 || day > 31
    ) {
      throw new Error('日期格式错误，应为月/日（如 2/11）');
    }
    
    const courses = await courseModel.find({
      studentId,
      $expr: {
        $and: [
          { $eq: [{ $month: "$startTime" }, month] }, // 提取 startTime 的月份（1-12）
          { $eq: [{ $dayOfMonth: "$startTime" }, day] }, // 提取 startTime 的日期（1-31）
        ],
      },
    });
    
    return courses;
  } catch (error) {
    throw error;
  }
};

const updateCourse = async (id, courseData) => {
};

const deleteCourse = async (id) => {
};

//输入以分钟为单位的课程时长，返回毫秒数
const revertDuration = async (courseDuration) => {
  return (Number(courseDuration)) * 60 * 1000;
}

module.exports = {
  getCourseById,
  getCourseByIdAndDate,
  createCourse,
  updateCourse,
  deleteCourse,
};