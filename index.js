// Importing modules
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateMarkdown');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');

// Current Team Array
const teamArr = [];

// Questions for User
const questionObj ={
    managerNameInputQ: {
        type: 'input',
        name: 'name',
        message: 'Please enter the name of your team manager -> ',
        validate: userInput => { //Requires a valid employee name
            return userInput && isNaN(userInput) ? true : console.warn('\x1b[31m', '\nPlease provide a valid name!\n') }
    },
    nameInputQ: {
        type: 'input',
        name: 'name',
        message: 'Please enter the name of your new team member -> ',
        validate: userInput => { //Requires a valid employee name
            return userInput && isNaN(userInput) ? true : console.warn('\x1b[31m', '\nPlease provide a valid name!\n') }
    },

    emailInputQ: {
        type: 'input',
        name: 'email',
        message: 'Please provide the team member\'s email address -> ',
        validate: userInput => {
            return userInput && userInput.includes('@') && userInput.includes('.com') ? true : console.warn('\x1b[31m', '\nPlease provide a valid email address!\n')}
    },

    idNumberQ: {
        type: 'input',
        name: 'id',
        message: 'Please provide a team member ID -> ',
        validate: userInput => { //Requires valid employee ID
            return userInput && !isNaN(userInput) ? true : console.warn('\x1b[31m', '\nPlease provide a valid ID number!\n') }
    },

    officeNumQ: {
        type: 'input',
        name: 'officeNumber',
        message: 'Please enter the manager\'s office number -> ',
        validate: userInput => { //Requires valid office number
            return userInput && !isNaN(userInput) ? true : console.warn('\x1b[31m', '\nPlease provide a valid ID number!\n') }
    },

    githubQ: {
        type: 'input',
        name: 'githubUsername',
        message: 'Please enter the engineer\'s Github username -> ',
        validate: userInput => { //Requires a valid Github username
            return userInput && isNaN(userInput) ? true : console.warn('\x1b[31m', '\nPlease provide a valid name!\n') }
    },
    
    schoolQ: {
        type: 'input',
        name: 'school',
        message: 'Please enter the name of school the intern attended -> ',
        validate: userInput => { //Requires a valid school name
            return userInput && isNaN(userInput) ? true : console.warn('\x1b[31m', '\nPlease provide a valid name!\n') }
    },

    githubQ: {
        type: 'input',
        name: 'github',
        message: 'Please enter the engineer\'s Github username -> ',
        validate: userInput => { //Requires a valid school name
            return userInput && isNaN(userInput) ? true : console.warn('\x1b[31m', '\nPlease provide a valid name!\n') }
    },

    confirmQ: {
        type: 'list',
        name: 'addEmployee',
        message: '\nPlease specify an additional team member to add.  -> ',
        choices: ['Intern', 'Engineer', 'Finish building team']
    }
};
// Destructed questionObj for easier access to questions (Ridding of repeat code)
const {managerNameInputQ, nameInputQ, idNumberQ,  emailInputQ,  officeNumQ, confirmQ, schoolQ, githubQ} = questionObj;

// Prompts user questions for adding first team member (manager)
function start() { 
    inquirer.prompt([managerNameInputQ, idNumberQ,  emailInputQ,  officeNumQ, confirmQ ])
    .then((data) => {
        const manager = new Manager(data.name, data.id, data.email, data.officeNumber); // Creates new Manager object
        teamArr.push(manager); //Pushes team member onto team array

        switch(data.addEmployee) { // Checks if user wants to add another team member
            case 'Intern': addIntern();
            break;
            case 'Engineer': addEngineer();
            break;
            case 'Finish building team': finishBuild();
            break;
        };
    })
    .catch((err) => {
        console.log(err);
    })
};

// Prompts user questions for adding an new team member (intern)
function addIntern() { 
    inquirer.prompt([nameInputQ, idNumberQ, emailInputQ, schoolQ, confirmQ])
    .then((data) => {
        let newIntern = new Intern(data.name, data.id, data.email, data.school); //Creates new Intern object
        teamArr.push(newIntern);

        switch(data.addEmployee) { // Checks if user wants to add another team member
            case 'Intern': addIntern();
            break;
            case 'Engineer': addEngineer();
            break;
            case 'Finish building team': finishBuild();
            break;
        }
    })
    .catch((err) => {
        console.log(err);
    })
};

// Prompts user questions for adding an new team member (Engineer)
function addEngineer() { 
    inquirer.prompt([nameInputQ, idNumberQ, emailInputQ, githubQ, confirmQ])
        .then((data) => {
            let newEngineer = new Engineer(data.name, data.id, data.email, data.github); //Creates new Engineer object
            teamArr.push(newEngineer); //Pushes team member onto team array

            switch(data.addEmployee) { // Checks if user wants to add another team member
                case 'Intern': addIntern();
                break;
                case 'Engineer': addEngineer();
                break;
                case 'Finish building team': finishBuild();
                break;
            }
        })
        .catch((err) => {
            console.log(err);
        })
        
};

// Generate the html file
function finishBuild() {
    fs.writeFile('./dist/generatedHtml.html', generateHTML(teamArr), (err) => {
        err ? console.log('There has been an error!') : console.log('\x1b[32m', '\nYour HTML file has been successfully created and is located in the distribution folder.\n')
    });
};

// Starts the question prompts
start();


