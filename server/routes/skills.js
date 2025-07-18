const express = require('express');
const router = express.Router();

const skills = [
  { skill: 'Strong programming skills in languages including Java, JavaScript, React JS (with use of APIs), HTML, CSS, and SQL (with an understanding of relational databases)' },
  { skill: 'Ability to connect, navigate and use Linux/Unix operating systems' },
  { skill: 'Excellent oral and written communication skills, enhanced by my journalism background' },
  { skill: 'Good problem solver and fast learner, able to adapt to adverse situations' },
  { skill: 'Organizational skills developed through years of experience completing a degree while working part-time' },
  { skill: 'Superb attention to detail, with focus on accuracy in coding and writing' }
];

router.get('/', (req, res) => {
  res.json(skills);
});

module.exports = router;
