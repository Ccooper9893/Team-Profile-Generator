const Intern = require('../lib/intern');

describe('Intern class', () => {

    describe('new Intern class', () => {
        it('should create a new Intern employee object', () => {
            const newObj = new Intern();
        expect(typeof newObj).toBe('object');
        });
    });

    describe('getSchool', () => {
        it('should return a school name using the getSchool method', () => {
            const intern = new Intern('','','','University');
        expect(intern.getSchool()).toBe('University');
        });
    });

    describe('getRole', () => {
        it('should return a role property from the intern object', () => {
            const intern = new Intern();
        expect(intern.getRole()).toBe('Intern');
        });
    });
});