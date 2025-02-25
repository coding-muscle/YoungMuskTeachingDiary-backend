const courseService = require('../services/courseService');
const { v4: uuidv4 } = require('uuid');

const createCourse = async (req, res) => {
    try {
        // 从请求体中解构课程数据
        const {
            courseName,
            student,
            teacher,
            classroom,
            startTime,
            courseDuration,
        } = req.body;
        
        // 调用服务层创建课程
        const courseId = uuidv4();
        const course = await courseService.createCourse({
            courseId,
            courseName,
            student,
            teacher,
            classroom,
            startTime,
            courseDuration,
        });

        // 返回创建成功的课程数据
        res.status(200).json(course);
    } catch (error) {
        // 捕获错误并返回错误信息
        res.status(400).json({ message: error.message });
    }
};

const getCourseById = async (req, res) => {
    try {
        const { userId } = req.query;
        const courses = await courseService.getCourseById(userId);
        
        if (!courses) {
            return res.status(404).json({ message: 'Course not found' });
        }
        res.status(200).json(courses);
    } catch (error) {        
        res.status(400).json({ message: error.message });
    }
};

const getCourseByIdAndDate = async (req, res) => {
    try {
        const { userId, date } = req.body;

        if (!date || !date.includes('/')) {
        return res.status(400).json({ message: '日期格式错误，应为月/日' });
        }
        
        const courses = await courseService.getCourseByIdAndDate(userId, date);
        
        if (!courses) {
            return res.status(404).json({ message: 'Course not found' });
        }
        res.status(200).json(courses);
    } catch (error) {        
        res.status(400).json({ message: error.message });
    }
};

const updateCourse = async (req, res) => {
};

const deleteCourse = async (req, res) => {
};

module.exports = {
    createCourse,
    getCourseById,
    getCourseByIdAndDate,
    updateCourse,
    deleteCourse
};