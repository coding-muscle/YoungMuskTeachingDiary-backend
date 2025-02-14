const axios = require('axios');
const config = require('../config/config');

const sendSms = async (phone, code) => {
  try {
    await axios.post(config.sms.apiUrl, {
      phone,
      code,
      apiKey: config.sms.apiKey,
    });
  } catch (error) {
    throw new Error('短信发送失败');
  }
};

module.exports = { sendSms };