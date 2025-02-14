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

const getWorkById = async (req, res) => {
  try {
    const homework = await homeworkService.getHomework(req.params.id);
    if (!homework) {
      return res.status(404).json({ message: 'Homework not found' });
    }
    return res.status(200).json(homework);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateWork = async (req, res) => {
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

const deleteWork = async (req, res) => {
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
  getWorkById,
  updateWork,
  deleteWork,
};