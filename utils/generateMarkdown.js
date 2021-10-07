// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '(https://img.shields.io/badge/License-MIT-yellow.svg)';
    case 'Apache 2.0':
      return '(https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
    case 'GPLv3':
      return '(https://img.shields.io/badge/License-GPLv3-blue.svg)';
    case 'BSD 3':
      return '(https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return '(https://opensource.org/licenses/MIT)';
    case 'Apache 2.0':
      return '(https://opensource.org/licenses/Apache-2.0)';
    case 'GPLv3':
      return '(https://www.gnu.org/licenses/gpl-3.0)';
    case 'BSD 3':
      return '(https://opensource.org/licenses/BSD-3-Clause)';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseBadge = renderLicenseBadge(license);
  const licenseLink = renderLicenseLink(license);

  switch (license) {
    case 'MIT':
      return `is covered under the [![License: MIT]${licenseBadge}]${licenseLink}`;
    case 'Apache 2.0':
      return `is covered under the [![License]${licenseBadge}]${licenseLink}`;
    case 'GPLv3':
      return `is covered under the [![License: GPL v3]${licenseBadge}]${licenseLink}`;
    case 'BSD 3':
      return `is covered under the [![License]${licenseBadge}]${licenseLink}`;
    default:
      return `does not have a`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.projectname}

${licenseSection}

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
This application ${data.license} license.

## Contributing
${data.contributetorepo}.

## Tests
${data.tests}.

## Questions
Here is a link to my GitHub profile: https://github.com/${data.githubusername}

If you need to reach me with additional questions, please feel free to email me at ${data.emailaddress}.`;
}

module.exports = generateMarkdown;