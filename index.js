// Importing modules
const inquirer = require('inquirer')
const fs = require('fs')
const Manager = require('./lib/manager')
const Intern = require('./lib/intern')
const Engineer = require('./lib/engineer')

// Current Team Array
const teamArr = []

// Team Manager Questions
const startQuestions = [ //name, employee ID, email address, and office number
{
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
{
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
{
    type: 'input',
    name: 'email',
    message: 'Please enter the manager\'s email address -> ',
    validate: userInput => { //Requires valid employee ID
        if (userInput && isNaN(userInput) && userInput.includes('.com') && userInput.includes('@')) {
            return true;
        } else {
            console.warn('\x1b[31m', '\nPlease provide a valid email address!')
        }
    }
},
{
    type: 'input',
    name: 'officeNumber',
    message: 'Please enter the manager\'s office number -> ',
    validate: userInput => { //Requires valid employee ID
        if (userInput && !isNaN(userInput)) {
            return true;
        } else {
            console.warn('\x1b[31m', '\nPlease provide a valid office number!')
        }
    }
}
]

const addEmployeeQuestion = [
    {
        type: 'confirm',
        name: 'addEmployee',
        message: 'Would  you like to add another team member? -> ',
        default: 'false'

    }
]

function init() {
    inquirer.prompt(startQuestions)
    .then((data) => {
        const {name, id, email, officeNumber} = data;
        const manager = new Manager(name, id, email, officeNumber)
        
        
    })
    .catch((err) => {
        console.log(err)
    })
}

init()


