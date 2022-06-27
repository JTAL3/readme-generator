// TODO: Create a function that returns a license badge based on which license is passed in
const licenseSelection = ["Apache License 2.0", "BSD licenses", "GNU licenses", "MIT License"]
// If there is no license, return an empty string
function pullBadge(license) {
  if (license === licenseSelection[0]){
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }
  if (license === licenseSelection[1]){
    return "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)"
  }
  if (license === licenseSelection[2]){
    return "[![License](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)"
  }
  if (license === licenseSelection[3]){
    return "[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
  if (license === "" ) {
    return "";
  }
  

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function pullLink(license) {
  if (license === licenseSelection[0]){
    return `[${licenseSelection[0]}](https://opensource.org/licenses/Apache-2.0)`
  } else if (license === licenseSelection[1]){
    return `[${licenseSelection[1]}](https://opensource.org/licenses/BSD-2-Clause)`
  } else if (license === licenseSelection[2]){
    return `[${licenseSelection[2]}](https://www.gnu.org/licenses/lgpl-3.0)`
  } else if (license === licenseSelection[3]){
    return `[${licenseSelection[3]}](https://opensource.org/licenses/MIT)`
  } 
  else {
    return ""
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function pullSection(license) {
  if (license === licenseSelection[0]){
    return `Read more about ${licenseSelection[0]} here:`
  } else if (license === licenseSelection[1]){
    return `Read more about ${licenseSelection[1]} here:`
  } else if (license === licenseSelection[2]){
    return `Read more about ${licenseSelection[2]} here:`
  } else if (license === licenseSelection[3]){
    return `Read more about ${licenseSelection[3]} here:`
  } 
  else {
    return ""
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}

  ## Badges
  ${pullBadge(data.license)}

  ## Table of Contents
  * [License](#License)
  * [Description](#Description)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [How to Contribute](#Contributing)
  * [Tests](#Tests)
  * ${pullLink(data.license)}
  * [Questions?](#Questions)

  ## Description:
  ${data.Description}

  ## Installation:
  ${data.Install}

  ## Usage:
  ${data.Usage}

  ## Contributing:
  [Contributor Covenant](https://www.contributor-covenant.org/)  
  ${data.Contributing}

  ## Tests:
  ${data.Tests}

  ## License:
  ${pullSection(data.license)}

  ## Questions? Feel free to reach out directly at:
  [${data.Github}](https://github.com/${data.Github})

  ## I can also be reached at:
  ${data.Email}
  
  
`;
  
}

module.exports = generateMarkdown;
