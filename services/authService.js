const User = require('../models/userModel');
const bcrypt = require('bcryptjs'); // 用于密码加密
const redisClient = require('../utils/redisClient');

// 注册
const register = async (phone, password, userId) => {
  // 检查手机号是否已注册
  const existingUser = await User.findOne({ phone });
  if (existingUser) {
    throw new Error('手机号已注册');
  }

  // 加密密码
  const hashedPassword = await bcrypt.hash(password, 10);

  // 创建用户
  const user = new User(
    { phone, 
      password: hashedPassword,  
      userId: userId }
  );
  await user.save();

  return user;
};

// 登录
const login = async (phone, password) => {
  // 查找用户
  const user = await User.findOne({ phone });
  if (!user) {
    throw new Error('用户不存在');
  }

  // 验证密码
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error('密码错误');
  }

  return user;
};

const updateLastLoginTime = async (phone) => {
  await User.findOneAndUpdate(
    { phone },
    { lastLoginAt: Date.now() }
  );
};

const logout = async (userId) => {
  return {
    success: true,
    message: '退出登录成功',
  };
};

module.exports = { register, login, updateLastLoginTime, logout };