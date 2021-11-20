// Creates Engineer Class with name, id, email, github constructor and getters for each and role of "Engineer"
const Employee = require('./employee');


//Make Engineer Class that extends Employee Class
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this._github = github;
    };

    getGithub() {
        return this._github;
    };

    getRole() {
        return "Engineer";
    };
};

//Exports Engineer Class
module.exports = Engineer;