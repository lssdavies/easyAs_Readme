// TODO: Include packages needed for this application
//Importing modules needed for the app.
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
//this caputers the users initial data name, github and email*/
const contactInfoQuestions = [
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
];
const projectContentQuestions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the name of your project',
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log('Please enter a project name!');
        return false;
      }
    },
  },
  {
    type: 'input',
    name: 'description',
    message: 'Briefly describe your project',
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log('Please enter a brief description of your project!');
        return false;
      }
    },
  },
  {
    type: 'input',
    name: 'additional_0',
    message: 'What was your motivation? (optional)',
  },
  {
    type: 'input',
    name: 'additional_2',
    message: 'Why did you build this project? (optional)',
  },
  {
    type: 'input',
    name: 'additional_3',
    message: 'What problem does it solve? (optional)',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What does a user have to do to use/run projecT?',
    default: 'Clone repository and then install dependencies, npm i',
  },
  
  {
    type: 'input',
    name: 'usage',
    message: 'Please provide instructions on for using this project.',
  },
  {
    type: 'list',
    name: 'license',
    message: 'What kind of license should your project have?',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
  },
  {
    type: 'confirm',
    name: 'test',
    message: 'Did you write a test for your application?',
    default: false,
  },
  {
    type: 'input',
    name: 'runTest',
    message: 'What is the test command to test the app?',
    default: 'npm test',
    /*using when property to check if user will like to added a test to the app by looking at the response test*/
     when: ({ runTest }) => {
        if (runTest) {
          return true;
        } else {
          return false;
        }
      },
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Please advise on how you will like users to contribute to the repo?',
  },
  
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const init = () => {
  console.log(`
  
In order for easyAs_Readme to generate a README.md file for your
project well need to collect some personal data and contact information from you.

============================================================================
    `);

  return inquirer.prompt(contactInfoQuestions);
};

// secondary function to store
const promptProjectContent = (markdownData) =>  {
    console.log(`
===========================================================================

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
    
    `)
    console.log(markdownData);
    return inquirer.prompt(projectContentQuestions)
    
    
}

// Function call to initialize app
init()
.then(promptProjectContent)
// .then(markdownData => {

// } );

