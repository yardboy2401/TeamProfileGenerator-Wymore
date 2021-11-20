const Employee = require('../classes/employee');

describe ("Employee Class", () => {
    describe("Initialization", () => {
        //Tests functionality of getName() method
        it("Employee getName() gives back name", () => {
            var newEmployee = new Employee('newEmployee', 15,'t@t.com')
            expect(newEmployee._name).toBe('newEmployee')
        })
        //Tests functionality of getId() method
        it("Employee getId() give back Id", () => {
            var newEmployee = new Employee('newEmployee', 15, 't@t.com')
            expect(newEmployee._id).toBe(15)
        })
        //Tests functionality of getEmail() method
        it("Employee getEmail() give back Email", () => {
            var newEmployee = new Employee('newEmployee', 15, 't@t.com')
            expect(newEmployee._email).toBe('t@t.com')
        })
        //Tests functionality of getRole() method
        it("Employee getRole() gives back 'Employee'", () => {
            var newEmployee = new Employee('newEmployee', 15, 't@t.com')
            expect(newEmployee.getRole()).toBe("Employee")
        })
    })
})

