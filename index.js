// Importing modules
const inquirer = require('inquirer')
const fs = require('fs')
const Manager = require('./lib/manager')
const Intern = require('./lib/intern')
const Engineer = require('./lib/engineer')

// Current Team Array
const teamArr = []

// Questions for User
const questionObj ={
    managerNameInputQ: {
        type: 'input',
        name: 'name',
        message: 'Please enter the name of your team manager -> ',
        validate: userInput => { //Requires a valid employee name
            if (userInput && isNaN(userInput)) {
            return true;
            } else {
                console.warn('\x1b[31m', '\nPlease provide a valid name!')
            }
        }
    },
    nameInputQ: {
        type: 'input',
        name: 'name',
        message: 'Please enter the name of your new team member -> ',
        validate: userInput => { //Requires a valid employee name
            if (userInput && isNaN(userInput)) {
            return true;
            } else {
                console.warn('\x1b[31m', '\nPlease provide a valid name!')
            }
        }
    },

    emailInputQ: {
        type: 'input',
        name: 'email',
        message: 'Please provide the team member\'s email address -> ',
        validate: userInput => {
            if (userInput && userInput.includes('@') && userInput.includes('.com')) {
                return true
            } else {
                console.warn('\x1b[31m', '\nPlease provide a valid email address!') 
            }
        }
    },

    idNumberQ: {
        type: 'input',
        name: 'id',
        message: 'Please provide a team member ID -> ',
        validate: userInput => { //Requires valid employee ID
            if (userInput && !isNaN(userInput)) {
                return true;
            } else {
                console.warn('\x1b[31m', '\nPlease provide a valid ID number!')
            }
        }
    },

    officeNumQ: {
        type: 'input',
        name: 'officeNumber',
        message: 'Please enter the manager\'s office number -> ',
        validate: userInput => { //Requires valid office number
            if (userInput && !isNaN(userInput)) {
                return true;
            } else {
                console.warn('\x1b[31m', '\nPlease provide a valid office number!')
            }
        }
    },

    githubQ: {
        type: 'input',
        name: 'githubUsername',
        message: 'Please enter the engineer\'s Github username -> ',
        validate: userInput => { //Requires a valid Github username
            if (userInput && isNaN(userInput)) {
            return true;
            } else {
                console.warn('\x1b[31m', '\nPlease provide a valid Github username!')
            }
        }  
    },
    
    schoolQ: {
        type: 'input',
        name: 'school',
        message: 'Please enter the name of school the intern attended -> ',
        validate: userInput => { //Requires a valid school name
            if(userInput && isNaN(userInput)) {
                return true;
            } else {
                console.warn('\x1b[31m', '\nPlease provide a valid school name!')
            }
        }
    },

    githubQ: {
        type: 'input',
        name: 'github',
        message: 'Please enter the engineer\'s Github username -> ',
        validate: userInput => { //Requires a valid school name
            if(userInput && isNaN(userInput)) {
                return true;
            } else {
                console.warn('\x1b[31m', '\nPlease provide a valid Github username!')
            }
        }
    },

    confirmQ: {
        type: 'list',
        name: 'addEmployee',
        message: 'Please specify an additional team member to add.  -> ',
        choices: ['Intern', 'Engineer', 'I am finished']
    }
}
// Destructed questionObj for easier access to questions
const {managerNameInputQ, nameInputQ, idNumberQ,  emailInputQ,  officeNumQ, confirmQ, schoolQ, githubQ} = questionObj;

// Adding Manager to start team build
function start() {
    inquirer.prompt([managerNameInputQ, idNumberQ,  emailInputQ,  officeNumQ, confirmQ ])
    .then((data) => {
        const manager = new Manager(data.name, data.id, data.email, data.officeNumber) // Creates new Manager object
        teamArr.push(manager); //Pushes team member onto array

        switch(data.addEmployee) { // Checks if user wants to add another team member
            case 'Intern': addIntern();
            break;
            case 'Engineer': addEngineer();
            break;
            case 'I am finished': generateHTML();
            break;
        }
    })
    .catch((err) => {
        console.log(err)
    })
}

function addIntern() {
    inquirer.prompt([nameInputQ, idNumberQ, emailInputQ, schoolQ, confirmQ])
    .then((data) => {
        let newIntern = new Intern(data.name, data.id, data.email, data.school);
        teamArr.push(newIntern);

        switch(data.addEmployee) { // Checks if user wants to add another team member
            case 'Intern': addIntern();
            break;
            case 'Engineer': addEngineer();
            break;
            case 'I am finished': generateHTML();
            break;
        }
    })
    .catch((err) => {
        console.log(err)
    })
}

function addEngineer() {
    inquirer.prompt([nameInputQ, idNumberQ, emailInputQ, githubQ, confirmQ])
        .then((data) => {
            let newEngineer = new Engineer(data.name, data.id, data.email, data.github);
            teamArr.push(newEngineer)

            switch(data.addEmployee) { // Checks if user wants to add another team member
                case 'Intern': addIntern();
                break;
                case 'Engineer': addEngineer();
                break;
                case 'I am finished': generateHTML();
                break;
            }
        })
        .catch((err) => {
            console.log(err)
        })
        
}

function generateHTML() {
    console.log(typeof teamArr[0])
}

// Starts the question prompts
start()


