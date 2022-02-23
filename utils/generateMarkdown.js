// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None' || license === '')  {
    return '';
  }
  else {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None' || license === '')  {
    return '';
  }
  else {
    return `* [License](#license)`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None' || license === '')  {
    return '';
  }
  else {
    return `## License
    
    This project is using the ${license} License
    `;

}
}

// If there is no test command render test section
function renderTestSection(test) {
  if (!test)  {
    return `
    This project does not include any test`;
  }
  else {
    return `    
    This project has testing built in, if you will like to test the project use the following command:
     ${runTest}`;
}
}


// TODO: Create a function to generate markdown for README
//this will use data from the promise caputered by inquirer.prompt within function init() since it is being exported to index.js. Data will be displayed in the allocated sections
function generateMarkdown(answers) {
  return `# ${answers.title}
${renderLicenseBadge(answers.license)}

## Description

${answers.description}
${answers.additional_0}
${answers.additional_1}
${answers.additional_2}

## Technologies Used

${answers.technologies}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
${renderLicenseLink(answers.license)}
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)


## Installation

To install this project follow the  instructions below:

${answers.installation}


## Usage

${answers.usage}

${renderLicenseSection(answers.license)}
  
## Contributing

${answers.contributing}

## Tests

${renderTestSection()}


## Questions

If you have any questions about this project or questions about anything in this repository, please feel free to contact me directly via email at: ${answers.email }. 

You can contact me directly through github at [${answers.github}](https://github.com/${answers.github}/)

`;
}

module.exports = generateMarkdown;
