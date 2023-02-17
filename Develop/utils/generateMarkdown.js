function renderLicenseBadge(license) {
  if (license === 'None'){
    return '';
  }else if(license === 'MIT') {
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
  } else if (license === 'Apache 2.0') {
      return '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)'
  } else if (license === 'GPL v3.0') {
      return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
  } 
  }


function renderLicenseLink(license) {
  if (license === 'None'){
    return ''
  }else if(license === 'MIT') {
      return 'https://opensource.org/licenses/MIT'
    } else if (license === 'Apache 2.0') {
      return 'https://opensource.org/licenses/Apache-2.0'
    } else if (license === 'GPL v3.0') {
      return 'http://www.gnu.org/licenses/gpl-3.0'
    }
}


function renderLicenseSection(license) {
  if(license === 'None') {
    return ''
  } return `## License`;
}

function generateMarkdown(data) {
  return `# ${data.title}

  ## ${renderLicenseBadge(data.license)}
  ### ${renderLicenseLink(data.license)}

  
  ## Table of Contents:
  * [Installation](#Installation)
  * [Usage](#usage)
  * [License](#license)
  * [WalkthroughVideo](#WalkthroughVideo)
  * [Contributors](#contributors)
  * [Tests](#tests)
  * [Questions](#questions)
  ## Installation:
  ### You must install the following for this app to function:
  ### ${data.Installation}
  ## Usage:
  ### ${data.usage}
  ## Licence:
  ### ${data.license}
  ## WalkthroughVideo:
  ###
  ## Contributors:
  ### ${data.contributions}
  ## Tests:
  ### Run the following commands in your terminal to test this app:
  ${data.tests}
  ###
  ## Questions:
  ### You may contact me at either
  ### Github: https://github.com/${data.github}
  ### or
  ### Email: ${data.email}
`;
}

module.exports = generateMarkdown;
