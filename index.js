// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
// THEN a high-quality, professional README.md is generated with the title of my project and 
// sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, 
// and Questions
const questions = [{

    type: "input",
    name: "Title",
    message: "What is your project title? (must include)",
        validate: titleResponse => {
            if(titleResponse) {
                return true;
            }
            else {
                console.log("You must enter a title!");
                return false;
            }
        }
}, 

{
    type: "input",
    name: "Description",
    message: "Enter a description of your project. (must include)",
        validate: descriptionResponse => {
            if(descriptionResponse) {
                return true;
         }
            else {
                console.log("You must enter a title!");
                return false;
            }
        }
}, 

{
    type: "input",
    name: "Github",
    message: "Please provide your Github username."
}, 

{
    type: "input",
    name: "Email",
    message: "Please provide your email address."
},

{
    type: "input",
    name: "Dependencies",
    message: "Are there specific dependencies required for this project? Please list."
}, 

{
    type: "input",
    name: "Usage",
    message: "How is this project intended to be used?"
}, 

{
    type: "input",
    name: "Contributing",
    message: "List any contribution guidelines involved in this project."
}, 

{
    type: "list",
    name: "License",
    message: "Select licenses included with this project?",
    choices: ["Apache License 2.0", "BSD licenses", "GNU licenses", "MIT License"],
}, 

{
    type: "input",
    name: "Do you have any badges?",
    message: "Badges"
}, 

{
    type: "input",
    name: "Installation",
    message: "Please provide installation instructions for this project."
}, 

{
    type: "input",
    name: "Tests",
    message: "Please list any test instructions."
},  

];
// include additional quetsions and information as needed above



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}`, `${data}`, (err) => {
        if(err) {
            console.log(err);
        }
        else {
            console.log("Your file has been succesfully generated!")
        }
    })
}


//DOUBLE CHECK HERE
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((userResponse) => {
        return writeToFile("README.md", generateMarkdown(userResponse));
        
    })
}




// Function call to initialize app
init();
