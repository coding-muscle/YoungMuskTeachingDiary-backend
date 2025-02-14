const profileService = require('../services/profileService');

// 设置身份信息的控制器函数
const setProfile = async (req, res) => {
    try {
        // 从请求体中获取用户名和所选角色
        const { userId, username, selectedRole } = req.body;
        
        const updatedUser = await profileService.setProfile(
          userId,
          username,
          selectedRole
        );

        // 返回成功响应
        res.status(200).json({
          message: '身份设置成功',
          user: {
            isStudent: updatedUser.isStudent,
            isParent: updatedUser.isParent,
            username: updatedUser.username
          }
        });
    } catch (err) {
        // 根据不同的错误类型返回相应的错误响应
        if (err.message === '无效的身份类型') {
            res.status(400).json({ message: err.message });
        } else if (err.message === '用户不存在') {
            res.status(404).json({ message: err.message });
        } else {
            res.status(500).json({ message: '服务器错误' });
        }
    }
};

const getProfile = async (req, res) => {
    try {        
        // 从请求体中获取用户ID
        const { userId } = req.query;
        const user = await profileService.getProfile(userId);

        // 返回成功响应
        res.status(200).json({
          message: '获取成功',
          user: {
            username: user.username,
            userId: user.userId.slice(-6),
            // avatarUrl: user.avatarUrl,
          }
        });
    } catch (err) {        
        // 根据不同的错误类型返回相应的错误响应
        if (err.message === '用户不存在') {
            res.status(404).json({ message: err.message });
        } else {
            res.status(500).json({ message: '服务器错误' });
        }
    }
};
module.exports = { setProfile, getProfile };