//Importing Employee parent class module
const Employee = require('./Employee')

// Creating Engineer Class - Child of Employee
class Engineer extends Employee{
    constructor(github) {
        this.github = github;
    }

    getGithub()
    getRole()
}

module.exports = Engineer;