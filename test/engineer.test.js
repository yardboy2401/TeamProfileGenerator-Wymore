const Engineer = require('../classes/engineer');

describe ("Engineer Class", () => {
    describe("Initialization", () => {
        //Tests functionality of getName() method
        it("Engineer getName() gives back name", () => {
            var newEngineer = new Engineer('newEngineer', 15,'t@t.com', 'tomiscool')
            expect(newEngineer._name).toBe('newEngineer')
        });
        //Tests functionality of getId() method
        it("Employee getId() give back Id", () => {
            var newEngineer = new Engineer('newEngineer', 15, 't@t.com', 'tomiscool')
            expect(newEngineer._id).toBe(15)
        });
        //Tests functionality of getEmail() method
        it("Engineer getEmail() give back Email", () => {
            var newEngineer = new Engineer('newEngineer', 15, 't@t.com', 'tomiscool')
            expect(newEngineer._email).toBe('t@t.com')
        });
        //Tests functionality of getGithub() method
        it("Engineer getGithub() give back Github", () => {
            var newEngineer = new Engineer('newEngineer', 15, 't@t.com', 'tomiscool')
            expect(newEngineer._github).toBe('tomiscool')
        });
        //Tests functionality of getRole() method
        it("Engineer getRole() gives back 'Engineer'", () => {
            var newEngineer = new Engineer('newEngineer', 15, 't@t.com', 'tomiscool')
            expect(newEngineer.getRole()).toBe("Engineer")
        });
    });
});