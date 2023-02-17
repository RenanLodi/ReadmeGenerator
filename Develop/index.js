const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require("./utils/generateMarkdown");


const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: value => {
            if (value) {
                return true;
            } else {
                console.log('Please enter a project title');
                return false;
            }
        }
    },
    {
        type: 'editor',
        message: 'What is the description of your project? ',
        name: 'description',
        validate: value => {
            if (value) {
                return true;
            } else {
                console.log('White a description');
                return false;
            }
        }
    },
    {
        type: 'editor',
        message: 'What are the installation instructions of your project? ',
        name: 'Installation',
        validate: value => {
            if (value) {
                return true;
            } else {
                console.log('Please provide installation steps');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the use of your project?',
        validate: value => {
            if (value) {
                return true;
            } else {
                console.log('Please provide a use for your project');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'What guidelines must others follow in order to contribute?',
        validate: value => {
            if (value) {
                return true;
            } else {
                console.log('Please enter contribution guidelines');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How do you test this project?',
        validate: value => {
            if (value) {
                return true;
            } else {
                console.log('Please explain how to test this project');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license does your project use?',
        choices: ['Apache 2.0', 'MIT', 'GPL v3.0','None'],
        validate: value = () => {
            if (value) {
                return true;
            } else {
                console.log('Please select one of the four options')
                return false;
                }
        }
    },
    {
        type: 'input',
        message: 'What is your github username? ',
        name: 'github',
        validate: value => {
            if (value) {
                return true;
            } else {
                console.log('Please provide your username so others can reach out to you with questions');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'What is your E-Mail? ',
        name: 'email',
        validate: value => {
            if (value) {
                return true;
            } else {
                console.log('Please provide an email');
                return false;
            }
    },
}

];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.error(`Error in generating README: ${err}`);
        } else {
            console.log(`README generated successfully!`);
        }
    });
}
function init() {
inquirer.prompt(questions)
        .then (function (userInput){
            console.log(userInput);
            writeToFile('README.md', generateMarkdown(userInput));
        });
        };


init();
