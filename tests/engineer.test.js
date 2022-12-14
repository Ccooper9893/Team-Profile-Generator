const Engineer = require('../lib/engineer');

describe('Engineer class', () => {

    describe('new Engineer class', () => {
        it('should create a new engineer object', () => {
            const newObj = new Engineer();
        expect(typeof newObj).toBe('object');
        });
    });

    describe('getGithub', () => {
        it('should return a github username using the getGithub method', () => {
            const engineer = new Engineer('','','','username123');
        expect(engineer.getGithub()).toBe('username123');
        });
    });

    describe('getRole', () => {
        it('should return the role of the engineer object', () => {
            const engineer = new Engineer();
        expect(engineer.getRole()).toBe('Engineer');
        });
    });
});