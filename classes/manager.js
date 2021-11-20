const Employee = require('./employee');


class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email) 
        this._officeNumber = officeNumber;
    }

    get officeNumber() {
        return this._officeNumber;
    }

    getRole () {
        return "Manager";
    }
    
}

module.exports = Manager;