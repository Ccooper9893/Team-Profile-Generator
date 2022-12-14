const inquirer = require('inquirer')
const fs = require('fs')

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
        message: 'Please enter an employee ID number -> ',
        validate: userInput => { //Requires valid employee ID
            if (userInput && !isNaN(userInput)) {
                return true;
            } else {
                console.warn('\x1b[31m', '\nPlease provide a valid employee ID number!')
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter the employee\'s email address -> ',
        validate: userInput => { //Requires valid employee ID
            if (userInput && isNaN(userInput) && userInput.includes('.com') && userInput.includes('@')) {
                return true;
            } else {
                console.warn('\x1b[31m', '\nPlease provide a valid email address!')
            }
        }
    },

]
