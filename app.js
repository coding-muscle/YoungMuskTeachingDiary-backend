const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const profileRoutes = require('./routes/profileRoutes');
const courseRoutes = require('./routes/courseRoutes');
const homeworkRoutes = require('./routes/homeworkRoutes');
const focusRoutes = require('./routes/focusRoutes');
const errorHandler = require('./middlewares/errorHandler');
const connectDB = require('./utils/db');

const app = express();

// 连接数据库
connectDB();

// 中间件
app.use(bodyParser.json());

// 路由
app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/course', courseRoutes);
app.use('/api/homework', homeworkRoutes);
app.use('/api/focus', focusRoutes);

// 全局错误处理
app.use(errorHandler);

module.exports = app;