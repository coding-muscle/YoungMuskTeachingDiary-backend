const authService = require('../services/authService');
const { v4: uuidv4 } = require('uuid');

// 注册
const register = async (req, res) => {
  const { phone, password } = req.body;
  try {
    const userId = uuidv4();
    const user = await authService.register(phone, password, userId);
    res.json({ success: true, message: '注册成功', user });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// 登录
const login = async (req, res) => {
  const { phone, password } = req.body;
  try {
    const user = await authService.login(phone, password);
    // 更新最后登录时间
    await authService.updateLastLoginTime(phone);
    res.json({ success: true, message: '登录成功', user });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

//登出
const logout = async (req, res) => {
  const { userId } = req.body;
  try {
    const user = await authService.logout(userId);
    res.json({ success: true, message: '登出成功', user });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = { register, login, logout };