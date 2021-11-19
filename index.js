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

let team = [];

function init() {
    console.log('Starting application')
    managerQuestions();
}

const managerQuestions = () => {
    inquirer.prompt([
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
    repeatQuestions();
});
}

const repeatQuestions = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the employee's name?",
            name: "employeeName",
        },
        {
            type: "input",
            message: "What is the employee's email address?",
            name: "employeeEmail",
        },
        {
            type: "input",
            message: "What is the employee's ID?",
            name: "employeeId",
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
            repeatQuestions();
        }
        const cards = [];
        for (let i = 0; i < team.length; i++) {
            if(role === "Manager") {
                cards.push(
                    `<h1>${team[i]._name}</h1>
                    <h2>Manager</h2>`
                    )
            } else if (employeeType === "Engineer") {
                cards.push(
                    `<h1>${team[i]._name}</h1>
                    <h2>TestEngineer</h2>`
                )
            } else if (employeeType === "Intern") {
                cards.push(
                    `<h1>${team[i]._name}</h1>
                    <h2>TestIntern</h2>`
                )
            };
        }
    
    const fakeHtml = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          src="https://code.jquery.com/jquery-3.5.1.min.js"
          integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
          crossorigin="anonymous"
        ></script>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.3/css/fontawesome.min.css"
          integrity="undefined"
          crossorigin="anonymous"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous"
        />
        <link rel="stylesheet" type="text/css" href="./assets/style.css" />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
          integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
          crossorigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
          rel="stylesheet"
        />
        <title>Jeff Wymore Portfolio</title>
      </head>
    <body>
        <nav class="navbar navbar-dark bg-dark">
            <span class="navbar-brand mb-0 h1">My Team</span>
        </nav>
        ${cards}
    </body>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    <script
      src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
      integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
      integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
      integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
      crossorigin="anonymous"
    ></script>
    <script src="./assets/script.js"></script>
    </html>
    `;
    const writeToFile = () => {
        const filename = 'Index.html'
        fs.writeFile(filename, fakeHtml, function(err) {
            console.log(err);
            console.log('success file written');
        })
    }
    writeToFile();


    });
}

init();

