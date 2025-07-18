const PORT = process.env.PORT || 8000;
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const overviewRoutes = require('./routes/overview');
const skillsRoutes = require('./routes/skills');
const educationRoutes = require('./routes/education');
const projectsRoutes = require('./routes/projects');
const experienceRoutes = require('./routes/experience');

app.get('/', (req, res) => {
  res.send("My resume landing page");
});

app.use('/overview', overviewRoutes);
app.use('/skills', skillsRoutes);
app.use('/education', educationRoutes);
app.use('/projects', projectsRoutes);
app.use('/experience', experienceRoutes);

app.use((req, res) => {
  res.status(404).send("Page not found");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
