// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

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
function writeToFile(fileName, data) {
    const readmeContent = generateMarkdown(data);
    
    fs.writeFile(fileName, readmeContent, (err) =>
    err ? console.log(err) : console.log('Successfully created readme file!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: questions[0],
                name: 'githubusername'
            },
            {
                type: 'input',
                message: questions[1],
                name: 'emailaddress'
            },
            {
                type: 'input',
                message: questions[2],
                name: 'projectname'
            },
            {
                type: 'input',
                message: questions[3],
                name: 'description'
            },
            {
                type: 'rawlist',
                message: questions[4],
                name: 'license',
                choices: ['MIT', 'Apache', 'GPLv2', 'GPLv3']
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
                name: 'usingrepo'
            },
            {
                type: 'input',
                message: questions[8],
                name: 'contributetorepo'
            },

        ])
        .then((response) =>
            writeToFile('README.md', response)
        );
}

// Function call to initialize app
init();