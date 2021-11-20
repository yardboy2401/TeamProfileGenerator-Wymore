const Engineer = require('../classes/engineer');

describe ("Engineer Class", () => {
    describe("Initialization", () => {
        //Positive test
        it("Engineer getName() gives back name", () => {
            var newEngineer = new Engineer('newEngineer', 15,'t@t.com', 'tomiscool')
            expect(newEngineer._name).toBe('newEngineer')
        })
        it("Employee getId() give back Id", () => {
            var newEngineer = new Engineer('newEngineer', 15, 't@t.com', 'tomiscool')
            expect(newEngineer._id).toBe(15)
        })
        it("Engineer getEmail() give back Email", () => {
            var newEngineer = new Engineer('newEngineer', 15, 't@t.com', 'tomiscool')
            expect(newEngineer._email).toBe('t@t.com')
        })
        it("Engineer getGithub() give back Github", () => {
            var newEngineer = new Engineer('newEngineer', 15, 't@t.com', 'tomiscool')
            expect(newEngineer._github).toBe('tomiscool')
        })
        it("Engineer getRole() gives back 'Engineer'", () => {
            var newEngineer = new Engineer('newEngineer', 15, 't@t.com', 'tomiscool')
            expect(newEngineer.getRole()).toBe("Engineer")
        })
    })
})