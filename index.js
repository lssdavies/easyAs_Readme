// TODO: Include packages needed for this application
//Importing modules needed for the app.
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const path = require("path");

// TODO: Create an array of questions for user input
//this caputers the users initial data name, github and email*/
const readMeQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is your name?",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter your name!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub Username?",
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log("Please enter your Github Username!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter your Github Username!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "title",
    message: "What is the name of your project",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please enter a project name!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Briefly describe your project",
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log("Please enter a brief description of your project!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "additional_0",
    message: "What was your motivation? (optional)",
  },
  {
    type: "input",
    name: "additional_1",
    message: "Why did you build this project? (optional)",
  },
  {
    type: "input",
    name: "additional_2",
    message: "What problem does it solve? (optional)",
  },
  {
    type: "checkbox",
    name: "technologies",
    message: "What technolgies did you implement in your project?",
    choices: [
      "HTML",
      "CSS",
      "JavaScript",
      "JQuery",
      "Bootstrap",
      "Node",
      "Express",
      "Handlebars",
      "MySQL",
      "MySQL 2",
      "Sequelize",
      "NoSQL",
      "Mongoose",
      "GraphQL",
      "React",
    ],
  },
  {
    type: "input",
    name: "installation",
    message: "What does a user have to do to use/run project?",
    default: "Clone repository and then install dependencies, npm i",
  },

  {
    type: "input",
    name: "usage",
    message: "Please provide instructions on for using this project.",
  },
  {
    type: "checkbox",
    name: "license",
    message: "What kind of license does your project have?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
  },
  {
    type: "confirm",
    name: "test",
    message: "Did you write a test for your application?",
    default: false,
  },
  {
    type: "input",
    name: "runTest",
    message: "What is the test command to test the app?",
    default: "npm test",
    /*using when property to check if user will like to add a test to the app by looking at the response from test*/
    when: ({ test }) => {
      if (test) {
        return true;
      } else {
        return false;
      }
    },
  },
  {
    type: "input",
    name: "contributing",
    message:
      "Please advise on how you will like users to contribute to the repo?",
  },
];

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}
//Passing 2 arguments to the function  file name and data returned from the promise inquirer.prompt()
const writeToFile = (fileName, answers) => {
  return fs.writeFile(fileName, answers, function (err) {
    if (err) {
      console.log(err);
    }
  });
};

// TODO: Create a function to initialize app
const init = () => {
  console.log(`
  
In order for easyAs_Readme to generate a README.md file for your
project we'll need to collect some personal data and contact information from you.

============================================================================

easyAs_Readme will generate a Table of Contents using the following Sections:


- Installation
- Usage
- License
- Contributing
- Tests
- Questions

So please answer as many questions as possible to ensure we have data for
each section.
===========================================================================
    `);

  inquirer.prompt(readMeQuestions).then((answers) => {
    console.log(answers);
    console.log("Creating Your professional README");
    writeToFile("./README.md", generateMarkdown({ ...answers }));
    // writeToFile('README.md', generateMarkdown({ ...answers }));
  });
};

// Function call to initialize app
init();
