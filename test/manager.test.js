const Manager = require('../classes/Manager');

describe ("Manager Class", () => {
    describe("Initialization", () => {
        //Positive test
        it("Manager getName() gives back name", () => {
            var newManager = new Manager('newManager', 15,'t@t.com', 101)
            expect(newManager._name).toBe('newManager')
        })
        it("Employee getId() give back Id", () => {
            var newManager = new Manager('newManager', 15, 't@t.com', 101)
            expect(newManager._id).toBe(15)
        })
        it("Manager getEmail() give back Email", () => {
            var newManager = new Manager('newManager', 15, 't@t.com', 101)
            expect(newManager._email).toBe('t@t.com')
        })
        it("Manager getGithub() give back Github", () => {
            var newManager = new Manager('newManager', 15, 't@t.com', 101)
            expect(newManager._officeNumber).toBe(101)
        })
        it("Manager getRole() gives back 'Manager'", () => {
            var newManager = new Manager('newManager', 15, 't@t.com', 101)
            expect(newManager.getRole()).toBe("Manager")
        })
    })
})