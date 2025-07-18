const express = require('express');
const router = express.Router();

const overview = {
  bio: 'A highly motivated recent computer programming graduate with knowledge and experience in front-end, back-end programming, and relational databases. Strong attention to detail, problem-solving, and communication skills. Professional experience with mobile applications on the media side, with an understanding of modern technology users.'
};

router.get('/', (req, res) => {
  res.json(overview);
});

module.exports = router;
