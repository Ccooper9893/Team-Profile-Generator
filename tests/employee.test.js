const Employee = require('../lib/employee');

describe('Employee class', () => {

    describe('new Employee class', () => {
        it('should create a new employee object', () => {
            const newObj = new Employee();
        expect(typeof newObj).toBe('object');
        });
    });

    describe('getName', () => {
        it('should return a name using getName method', () => {
            const employee = new Employee('John');
        expect(employee.getName()).toBe('John');
        });
    });

    describe('getId', () => {
        it('should return an id using getId method', () => {
            const employee = new Employee('John', 10);
        expect(employee.getId()).toBe(10)
        })
    })

    describe('getEmail', () => {
        it('should return an email using getEmail method', () => {
            const employee = new Employee('John', 10, 'john@email.com');
        expect(employee.getEmail()).toBe('john@email.com');
        });
    });

    describe('getRole', () => {
        it('should return a role using the getRole method', () => {
            const employee = new Employee();
        expect(employee.getRole()).toBe('Employee');
        });
    });
});