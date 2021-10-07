// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if (!license) {
    return;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  if (!license) {
    return;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if (!license) {
    return;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectname}

${data.license}.

## Description
${data.description}.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
      
## Installation
${data.dependencies}.

## Usage
${data.usingrepo}.

## License
${data.license}.

## Contributing
${data.contributetorepo}.

## Tests
${data.tests}.

## Questions
${data.githubusername} ${data.emailaddress}`;
}

module.exports = generateMarkdown;