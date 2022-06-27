// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
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
}

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
    name: "Contributions",
    message: "List collaborators involved in the making of your project."
}, 

{
    type: "input",
    name: "License",
    message: "Are there licenses incorporated with this project?"
}, 

{
    type: "input",
    name: "Do you have any badges?",
    message: "Badges"
}, 

{
    type: "input",
    name: "If your project has a lot of features, list them here.",
    message: "Features"
}, 

{
    type: "input",
    name: "Guidelines for how to contribute.",
    message: "Contribute"
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
        return writeToFile("readme.md", generateMarkdown(userResponse));

    })
}




// Function call to initialize app
init();
