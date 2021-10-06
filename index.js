// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    "What is your GitHub username",
    "What is your email address?",
    "What is your project's name?",
    "Please write a short description of your project:",
    "What kind of license should your project have?",
    "What command should be run to install dependencies?",
    "What command should be run to run tests?",
    "What does the user need to know about using the repo?",
    "What does the user need to know about contributing to the repo?"
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: questions[0],
                name: 'github-username'
            },
            {
                type: 'input',
                message: questions[1],
                name: 'email-address'
            },
            {
                type: 'input',
                message: questions[2],
                name: 'project-name'
            },
            {
                type: 'input',
                message: questions[3],
                name: 'description'
            },
            {
                type: 'input',
                message: questions[4],
                name: 'license'
            },
            {
                type: 'input',
                message: questions[5],
                name: 'dependencies'
            },
            {
                type: 'input',
                message: questions[6],
                name: 'tests'
            },
            {
                type: 'input',
                message: questions[7],
                name: 'using-repo'
            },
            {
                type: 'input',
                message: questions[8],
                name: 'contribute-to-repo'
            },

        ])
        .then((response) =>
            console.log(response)
        );
}

// Function call to initialize app
init();