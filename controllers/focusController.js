const focusService = require('../services/focusService');
const { v4: uuidv4 } = require('uuid');

const createFocus = async (req, res) => {
  try {
    const focusId = uuidv4();
    const { userId, startTime, focusDuration } = req.body;
    
    const focus = await focusService.createFocus({focusId, userId, startTime, focusDuration});
    res.status(200).json(focus);
  } catch (error) {
    res.status(500).json({ message: '错误发生在Controller层' });
  }
};

const getFocusById = async (req, res) => {
  try {
    const { userId } = req.params;
    const focus = await focusService.getFocus(userId);
    res.status(200).json(focus);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateFocus = async (req, res) => {
  try {
    const { userId } = req.params;
    const { focus } = req.body;
    const updatedFocus = await focusService.updateFocus(userId, focus);
    res.status(200).json(updatedFocus);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteFocus = async (req, res) => {
  try {
    const { userId } = req.params;
    await focusService.deleteFocus(userId);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createFocus,
  getFocusById,
  updateFocus,
  deleteFocus,
  };