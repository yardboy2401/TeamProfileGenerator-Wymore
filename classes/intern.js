// Creates Engineer Class with name, id, email, school constructor and getters for each and role of "Intern"
const Employee = require('./employee');



class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this._school = school;
    }

    getSchool() {
        return this._school;
    }

    getRole() {
        return "Intern";
    }
}

module.exports = Intern;