const Manager = require('../classes/Manager');

describe ("Manager Class", () => {
    describe("Initialization", () => {
        //Tests functionality of getName() method
        it("Manager getName() gives back name", () => {
            var newManager = new Manager('newManager', 15,'t@t.com', 101)
            expect(newManager._name).toBe('newManager')
        });
        //Tests functionality of getId() method
        it("Employee getId() give back Id", () => {
            var newManager = new Manager('newManager', 15, 't@t.com', 101)
            expect(newManager._id).toBe(15)
        });
        //Tests functionality of getEmail() method
        it("Manager getEmail() give back Email", () => {
            var newManager = new Manager('newManager', 15, 't@t.com', 101)
            expect(newManager._email).toBe('t@t.com')
        });
        //Tests functionality of getGithub() method
        it("Manager getGithub() give back Github", () => {
            var newManager = new Manager('newManager', 15, 't@t.com', 101)
            expect(newManager._officeNumber).toBe(101)
        });
        //Tests functionality of getRole() method
        it("Manager getRole() gives back 'Manager'", () => {
            var newManager = new Manager('newManager', 15, 't@t.com', 101)
            expect(newManager.getRole()).toBe("Manager")
        });
    });
});