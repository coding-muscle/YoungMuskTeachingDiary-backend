const User = require('../models/userModel');

const setProfile = async (userId, username, selectedRole) => {
    try {
      
      const updateData = {
        username,
        isSetProfile: true,
        isStudent: selectedRole === 'student',
        isParent: selectedRole === 'parent',
      };

        // 如果是家长角色，查找对应学生的 id 并添加到更新数据中
        if (selectedRole === 'parent') {
          const student = await User.findOne({ username, isStudent: true });
          if (student) {
            updateData.username = student.username + '的家长';
            updateData.childId = student.userId;
          } else {
              throw new Error('未找到对应学生');
          }
      }
      
      // 更新用户信息
      const user = await User.findOneAndUpdate(
        {userId},
        updateData,
        { new: true } // 返回更新后的文档
      );

      if (!user) {
        throw new Error('用户不存在');
      }

      return user;
    } catch (err) {
      throw new Error(err.message || '更新用户信息失败');
    }
};

// 获取用户信息
const getProfile = async (userId) => {
    try {
      const user = await User.findOne({ userId });
      if (!user) {
        throw new Error('用户不存在');
      }    
      return user;
    } catch (err) {
      throw new Error(err.message || '获取用户信息失败');
    }
};

module.exports = {setProfile, getProfile};