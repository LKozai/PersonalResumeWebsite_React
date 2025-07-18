const express = require('express');
const router = express.Router();

const experience = [
  { company: 'theScore', role: 'Associate News Editor', duration: 'Jun. 2021 - Aug. 2023' },
  { company: 'On The Record', role: 'Copy Editor', duration: 'Jan. 2020 - April 2020' },
  { company: 'TSN.ca', role: 'Web Producer (Intern)', duration: 'Feb. - Mar. 2020' },
  { company: 'Starbucks', role: 'Barista', duration: 'Jun. 2018 - Mar. 2020' }
];

router.get('/', (req, res) => {
  res.json(experience);
});

module.exports = router;
