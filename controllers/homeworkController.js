const homeworkService = require('../services/homeworkService');
const { v4: uuidv4 } = require('uuid');

const createHomework = async (req, res) => {
  try {
    const workId = uuidv4();
    const { student, teacher, workContent, setTime } = req.body;
    const homework = await homeworkService.createHomework({
      workId,
      student,
      teacher,
      workContent,
      setTime
    });
    return res.status(200).json(homework);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getHomeworkById = async (req, res) => {
  try {
    const { userId } = req.body;
    const studentId = userId;
    const homework = await homeworkService.getHomework(studentId);
    if (!homework) {
      return res.status(404).json({ message: 'Homework not found' });
    }
    return res.status(200).json(homework);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateHomework = async (req, res) => {
  try {
    const homework = await homeworkService.updateHomework(req.params.id, req.body);
    if (!homework) {
      return res.status(404).json({ message: 'Homework not found' });
    }
    return res.status(200).json(homework);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteHomework = async (req, res) => {
  try {
    const homework = await homeworkService.deleteHomework(req.params.id);
    if (!homework) {
      return res.status(404).json({ message: 'Homework not found' });
    }
    return res.status(200).json({ message: 'Homework deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createHomework,
  getHomeworkById,
  updateHomework,
  deleteHomework,
};