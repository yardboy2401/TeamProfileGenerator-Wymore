const Intern = require('../classes/Intern');

describe ("Intern Class", () => {
    describe("Initialization", () => {
        //Positive test
        it("Intern getName() gives back name", () => {
            var newIntern = new Intern('newIntern', 15,'t@t.com', 'tomsschooliscool')
            expect(newIntern._name).toBe('newIntern')
        })
        it("Employee getId() give back Id", () => {
            var newIntern = new Intern('newIntern', 15, 't@t.com', 'tomsschooliscool')
            expect(newIntern._id).toBe(15)
        })
        it("Intern getEmail() give back Email", () => {
            var newIntern = new Intern('newIntern', 15, 't@t.com', 'tomsschooliscool')
            expect(newIntern._email).toBe('t@t.com')
        })
        it("Intern getGithub() give back Github", () => {
            var newIntern = new Intern('newIntern', 15, 't@t.com', 'tomsschooliscool')
            expect(newIntern._school).toBe('tomsschooliscool')
        })
        it("Intern getRole() gives back 'Intern'", () => {
            var newIntern = new Intern('newIntern', 15, 't@t.com', 'tomsschooliscool')
            expect(newIntern.getRole()).toBe("Intern")
        })
    })
})