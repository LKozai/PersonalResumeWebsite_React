const express = require('express');
const router = express.Router();

const projects = [
  { language: 'Java', description: 'Created a Java program that prompts users to select from several options in a library database and perform operations like loaning or returning books. Used for loops and if/else statements to allow users to search for books based on their title, author, and/or ISBN number. Used case logic to allow users to choose an operation to perform and take user input through Scanner objects. Created a Java program that prompts users to enter a salary, then calculates federal tax, provincial tax, EI, and CPP deductions based on a range of tax brackets and deduction rates. Used if/else logic to ensure correct taxes and deductions were calculated for users. Smaller assignments/labs included use of arrays, matrices, class inheritance, and exception handling.' },
  { language: 'JavaScript', description: 'Created a wedding planning website with several different webpages that incorporated principles of JavaScript, HTML and CSS. Included a registration form that incorporated error messages for required fields and patterns (e.g., email format). Included a navigation bar to allow users to navigate from the home page to registration, pricing, testimonials, and contact. Made aesthetically pleasing UI using fundamental CSS techniques. Created a definitions app in React JS that allows users to search for any word and retrieves its definition from an API. Used AJAX calls to fetch data from an online dictionary API, used event handling to process words and retrieve definitions on the click of a “Get Definition” button, and incorporated user-friendly UI with a navigation bar and Bootstrap design.' },
  { language: 'SQL (relational datbases)', description: 'Created a relational database with six tables representing a movie rental service. Used SQL to create tables and add basic constraints (primary keys, not null, and foreign keys to connect the tables). Used additional check constraints when logically required (such as a return date being later than initial rental date). Inserted data into each table, with proper formatting to create and organize tables accurately.' }
];

router.get('/', (req, res) => {
  res.json(projects);
});

module.exports = router;
