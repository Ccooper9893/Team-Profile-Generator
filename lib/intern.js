//Importing Employee parent class module
const Employee = require('./Employee')

// Creating Intern class - Child of Employee
class Intern extends Employee {
    constructor(school){
        this.school = school;
    }

    getSchool()
    getRole()
}

module.exports = Intern;