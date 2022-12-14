//Importing Employee parent class module
const Employee = require('./Employee')

// Creating Engineer Class - Child of Employee
class Engineer extends Employee{
    constructor(name, id, email, github) {
        super(name, id, email),
        this.github = github;
    }

    getGithub() {
        return `Github: ${this.github}`
    }
    getRole() {
        return 'Engineer'
    }
}

module.exports = Engineer;