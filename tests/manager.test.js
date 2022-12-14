const Manager = require('../lib/manager');

describe('Manager class', () => {

    describe('new Manager class', () => {
        it('should create a new manager object', () => {
            const newObj = new Manager();
        expect(typeof newObj).toBe('object');
        });
    });

    describe('getRole', () => {
        it('should return the role property of the manager object', () => {
            const manager = new Manager();
        expect(manager.getRole()).toBe('Manager');
        });
    });
});