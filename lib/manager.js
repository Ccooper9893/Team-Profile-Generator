//Importing Employee parent class module
const Employee = require('./Employee')

// Creating Manager class - Child of Employee
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber;
    }
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;
