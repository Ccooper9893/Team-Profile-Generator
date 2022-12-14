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
    nameInputQ: {
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

    emailInputQ: {
        type: 'input',
        name: 'email',
        message: 'Please enter the manager\'s email address -> ',
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
        message: 'Please enter the manager\'s ID number -> ',
        validate: userInput => { //Requires valid employee ID
            if (userInput && !isNaN(userInput)) {
                return true;
            } else {
                console.warn('\x1b[31m', '\nPlease provide a valid ID number!')
            }
        }
    },

    confirmQ: {
        type: 'list',
        name: 'addEmployee',
        message: 'Please specify an additional team member to add.  -> ',
        choices: ['Intern', 'Engineer', 'I am finished']
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
        } 
}

// Destructed questionObj for easier access to questions
const {nameInputQ, idNumberQ,  emailInputQ,  officeNumQ, confirmQ} = questionObj;

// Adding Manager to start team build
function start() {
    inquirer.prompt([ nameInputQ, idNumberQ,  emailInputQ,  officeNumQ, confirmQ ])
    .then((data) => {
        const manager = new Manager(data.name, data.id, data.email, data.officeNumber) // Creates new Manager object
        teamArr.push(manager); //Pushes team member onto array

        switch(data.addEmployee) { // Checks if user wants to add another team member
            case 'Intern': addIntern();
            case 'Engineer': addEngineer();
            case 'I am finished': generateHTML();
        }
    })
}

start()


