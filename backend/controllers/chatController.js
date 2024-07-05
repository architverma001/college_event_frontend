const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: 'gemini-1.5-pro',
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: 'text/plain',
};

const sendMessage = async (req, res) => {
  const { message, history } = req.body;

  try {
    const response = await model.generateContent(message, generationConfig);
    res.json({ response: response.response.text()});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch response from AI model' });
  }
};

module.exports = { sendMessage };
