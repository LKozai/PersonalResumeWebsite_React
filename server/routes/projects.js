const express = require('express');
const router = express.Router();

const projects = [
  { language: 'Java', description: 'Created a Java console application that prompts users to select from several options in a library database and perform operations like loaning or returning books. Used for loops and if/else statements to allow users to search for books based on their title, author, and/or ISBN number. Used case logic to allow users to choose an operation to perform and take user input through Scanner objects.' },
  { language: 'React Native', description: 'Built a mobile app to display real-time NFL game schedules and final scores. Integrated external APIs for live data and used Redux for centralized state management. Implemented navigation between weeks and conditional rendering of past vs. upcoming games. Demonstrates API integration, async logic, and mobile UI design best practices.' },
  { language: 'JavaScript, HTML, CSS', description: ' Built a multi-page responsive website featuring a navigation bar and clean UI. Developed a registration form with field validation using regex and JavaScript. Styled interface with CSS for visual consistency and modern layout design.' }
];

router.get('/', (req, res) => {
  res.json(projects);
});

module.exports = router;
