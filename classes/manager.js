// Creates Employee Class with name, id, email, office number constructor and getters for each and role of "Manager"
const Employee = require('./employee');

//Make Manager Class that extends Employee Class
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email) 
        this._officeNumber = officeNumber;
    };

    get officeNumber() {
        return this._officeNumber;
    };

    getRole () {
        return "Manager";
    };
    
};

//Exports Manager Class
module.exports = Manager;