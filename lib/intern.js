//Importing Employee parent class module
const Employee = require('./Employee')

// Creating Intern class - Child of Employee
class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email)
        this.school = school;
    }

    getSchool() {
        return `School: ${this.school}`
    }
    
    getRole() {
        return 'Intern'
    }
}

module.exports = Intern;