const Intern = require('../classes/Intern');

describe ("Intern Class", () => {
    describe("Initialization", () => {
        //Tests functionality of getName() method
        it("Intern getName() gives back name", () => {
            var newIntern = new Intern('newIntern', 15,'t@t.com', 'tomsschooliscool')
            expect(newIntern._name).toBe('newIntern')
        });
        //Tests functionality of getId() method
        it("Employee getId() give back Id", () => {
            var newIntern = new Intern('newIntern', 15, 't@t.com', 'tomsschooliscool')
            expect(newIntern._id).toBe(15)
        });
        //Tests functionality of getEmail() method
        it("Intern getEmail() give back Email", () => {
            var newIntern = new Intern('newIntern', 15, 't@t.com', 'tomsschooliscool')
            expect(newIntern._email).toBe('t@t.com')
        });
        //Tests functionality of getGithub() method
        it("Intern getGithub() give back Github", () => {
            var newIntern = new Intern('newIntern', 15, 't@t.com', 'tomsschooliscool')
            expect(newIntern._school).toBe('tomsschooliscool')
        });
        //Tests functionality of getRole() method
        it("Intern getRole() gives back 'Intern'", () => {
            var newIntern = new Intern('newIntern', 15, 't@t.com', 'tomsschooliscool')
            expect(newIntern.getRole()).toBe("Intern")
        });
    });
});