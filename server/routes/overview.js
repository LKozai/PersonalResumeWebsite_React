const express = require('express');
const router = express.Router();

const overview = {
  bio: 'An aspiring software developer in Year 2 of the Humber Polytechnic computer programming co-op program. Experience working with Java, JavaScript, Python, SQL and relational databases, HTML/CSS, and operating systems.'
};

router.get('/', (req, res) => {
  res.json(overview);
});

module.exports = router;
