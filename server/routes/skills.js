const express = require('express');
const router = express.Router();

const skills = [
  { skill: 'Proficient in programming languages including Java, Python, JavaScript, ReactJS and React Native (with API integration), HTML and CSS, and SQL Developer (relational databases)' },
  { skill: 'Ability to connect, navigate and use Linux/Unix operating systems' },
  { skill: 'Strong communicator with a background in journalism' },
  { skill: 'Good problem solver and fast learner, able to adapt to adverse situations' },
  { skill: 'Excellent time management, adaptability, and problem-solving skills' },
  { skill: 'Superb attention to detail, with focus on accuracy in coding' }
];

router.get('/', (req, res) => {
  res.json(skills);
});

module.exports = router;
