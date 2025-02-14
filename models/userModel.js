const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  phone: { type: String, required: true, unique: true }, // 手机号
  password: { type: String, required: true }, // 密码
  userId: { type: String, unique: true }, // 用户名
  username: { type: String, default: '' }, // 用户昵称
  gender: { type: String, enum: ['male', 'female', 'other'], default: 'other' }, // 性别
  isSetProfile: { type: Boolean, default: false }, //是否设置过个人信息
  isTeacher: { type: Boolean, default: false }, // 是否是老师
  isStudent: { type: Boolean, default: false }, // 是否是学生
  isParent: { type: Boolean, default: false }, // 是否是家长
  childId: { type: String, default: '' }, // 孩子ID
  isAdmin: { type: Boolean, default: false }, // 是否是管理员
  isDeleted: { type: Boolean, default: false }, // 是否已删除
  avatarUrl: { type: String, default: '' }, // 头像地址
  lastLoginAt: { type: Date, default: Date.now }, // 最后登录时间
  createdAt: { type: Date, default: Date.now }, // 创建时间
});

// 添加校验：isStudent 和 isParent 不能同时为 true
userSchema.pre('save', function (next) {
  if (this.isStudent && this.isParent) {
    next(new Error('用户不能同时是学生和家长'));
  } else {
    next();
  }
});

module.exports = mongoose.model('User', userSchema);