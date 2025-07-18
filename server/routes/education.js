const express = require('express');
const router = express.Router();

const education = [
  { school: 'Humber Polytechnic', degree: 'Computer Programming, Advanced Diploma Program', dates: 'Sept. 2023 - Apr. 2025' },
  { school: 'Toronto Metropolitan University', degree: 'Bachelor of Journalism', dates: 'Sept. 2016 - Apr. 2020' }
];

router.get('/', (req, res) => {
  res.json(education);
});

module.exports = router;
