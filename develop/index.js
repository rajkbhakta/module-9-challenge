// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of the project?",
    name: "title",
  },
  {
    type: "input",
    message: "What is the description of the project?",
    name: "description",
  },
  {
    type: "list",
    message: "What is the license of the project?",
    choices: [
      "GNU AGPLv3",
      "GNU GPLv3",
      "GNU LGPLv3",
      "Apache 2.0",
      "Boost Software 1.0",
      "MIT",
      "Mozilla",
    ],
    name: "license",
  },
  {
    type: "input",
    message: "What is the installation instructions for the project?",
    name: "installation",
  },
  {
    type: "input",
    message: "What is the usage information for the project?",
    name: "usage",
  },
  {
    type: "input",
    message: "What are the contribution guidlines for the project?",
    name: "contribution",
  },
  {
    type: "input",
    message: "What test instructions for the project?",
    name: "tests",
  },
  {
    type: "input",
    message: "What is the github username?",
    name: "username",
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), function (error) {
    if (error) {
      return console.log(error);
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    writeToFile("./output/README.MD", data);
  });
}

// Function call to initialize app
init();
