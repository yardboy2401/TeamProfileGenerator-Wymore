// Questions to ask with Inquirer
//1. ID for all Employee Types
//2. Ask type of employee - Manager/Engineer/Intern
//3. If Manager then need ID/Email/OfficeNumber
//4. If Engineer then need ID/Email/GitHub
//5. If Intern then need ID/Email/School
//6. Overall class should be Employee, then sub classes for the rest that will inherit ID and Email from parent class

const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./classes/manager');
const Intern = require('./classes/intern');
const Engineer = require('./classes/engineer');
const makeHtml = require('./makeHtml');

let team = [];

const startManagerQuestions = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the team manager's name?",
            name: "managerName",
            validate: managerName => {
                if(managerName) {
                    return true;
                } else {
                    console.log("Please enter a valid manager name!");
                    return false;
                }
            }
        },
        {
            type: "input",
            message: "What is the manager's employee ID number?",
            name: "managerId",
            validate: (managerId) => {
                if(managerId) {
                    return true;
                } else {
                    console.log("Please enter a valid manager employee ID!")
                }
            }
        },
        {
            type: "input",
            message: "What is the manager's email address?",
            name: "managerEmail",
            validate: (managerEmail) => {
                if(managerEmail) {
                    return true;
                } else {
                    console.log("Please enter a valid email address!")
                }
            }
        },
        {
            type: "input",
            message: "What is the team manager's office number?",
            name: "managerOfficeNumber",
            validate: (managerOfficeNumber) => {
                if(managerOfficeNumber) {
                    return true;
                } else {
                    console.log("Please enter a valid manager office number!");
                }
            }
        },
])

.then((answers) => {
    const manager = new Manager(
        answers.managerName,
        answers.managerId,
        answers.managerEmail,
        answers.managerOfficeNumber,
    );
    team.push(manager);
});
}

const repeatQuestions = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the employee's name?",
            name: "employeeName",
            validate: employeeName => {
                if(employeeName) {
                    return true;
                } else {
                    console.log("Please enter a valid employee name!");
                    return false;
                }
            }
        },
        {
            type: "input",
            message: "What is the employee's email address?",
            name: "employeeEmail",
            validate: employeeEmail => {
                if(employeeEmail) {
                    return true;
                } else {
                    console.log("Please enter a valid employee email address!");
                    return false;
                }
            }
        },
        {
            type: "input",
            message: "What is the employee's ID?",
            name: "employeeId",
            validate: employeeId => {
                if(employeeId) {
                    return true;
                } else {
                    console.log("Please enter a valid employee ID!");
                    return false;
                }
            }
        },
        {
            type: "list",
            message: "What type of employee is this?",
            choices: ["Engineer", "Intern"],
            name: "employeeType",
        },
        {
            type: "input",
            message: "What is the engineer's Github username?",
            name: "githubUsername",
            when: (answers) => answers.employeeType === "Engineer",
        },
        {
            type: "input",
            message: "What school did the intern attend?",
            name: "internSchool",
            when: (answers) => answers.employeeType === "Intern",
        },
        {
            type: "confirm",
            message: "Do you have another employee to add to the team?",
            name: "repeat",
        },
    ])
    .then((answers) => {
        if(answers.employeeType === "Intern") {
            const intern = new Intern (
                answers.employeeName,
                answers.employeeId,
                answers.employeeEmail,
                answers.internSchool,
            );
            team.push(intern);
        }
        if(answers.employeeType === "Engineer") {
            const engineer = new Engineer (
                answers.employeeName,
                answers.employeeId,
                answers.employeeEmail,
                answers.githubUsername,
            );
            team.push(engineer);
        }
        if(answers.repeat === true) {
            return repeatQuestions(team);
        } else {
            return team;
        }
    });
};

const writeToFile = (htmlData) => {
    const filename = './public/index.html';
        fs.writeFile(filename, htmlData, function(err) {
            console.log(err);
            console.log('success file written');
        })
    }

startManagerQuestions()
    .then(repeatQuestions)
    .then(team => {
        return makeHtml(team);
    })
    .then(htmlPage => {
        return writeToFile(htmlPage);
    })
    .catch(err => {
        console.log(err);
    });
        
