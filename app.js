require('dotenv').config();
const express = require('express');
const authRoutes = require('./authentication/routes/authRoutes');
const protectedRoute = require('./authentication/routes/protectedRoute');
const resetPasswordRoutes = require('./authentication/routes/resetPasswordRoutes');
const homeRoutes = require('./homepage/routes/homeRoutes');
const quizRoutes = require('./quiz/routes/quizRoutes');
const careerRoutes = require('./career/routes/careerRoutes');
const softSkillsRoutes = require('./softSkills/routes/softSkillsRoutes');
const profileRoutes = require('./authentication/routes/profileRoutes');

// const swaggerUi = require('swagger-ui-express');
const swaggerSetup = require('./swaggerConfig'); 
const app = express();

swaggerSetup(app);

app.use(express.json());
app.use('/auth', authRoutes);
app.use('/', protectedRoute);
app.use('/', resetPasswordRoutes);
app.use('/', homeRoutes);
app.use('/quiz', quizRoutes);
app.use('/', careerRoutes);
app.use('/', softSkillsRoutes);
app.use('/profile', profileRoutes);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
  console.log('Dokumentasi API tersedia di http://localhost:4000/api-docs');
});
