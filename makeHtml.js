
const makeManagerCard = (manager) => {
    return `
    <div class = "col-sm-4">
        <div class = card>
            <h5 class ="card-header">${manager._name}</h5>
            <div class ="card-body">
            <h5 class ="card-title"><i class="fas fa-mug-hot"></i> Manager</h5>
            <p class ="card-text">ID: ${manager._id}</p>
            <p class ="card-text">Office Number: ${manager._officeNumber}</p>
            <a href ="mailto:${manager._email}" class ="btn btn-primary" target="_blank">Email: ${manager._email}</a>
            </div>
        </div>
    </div>
    `;
};

const makeEngineerCard = (engineer) => {
    return `
    <div class = "col-sm-4">
        <div class = card>
            <h5 class ="card-header">${engineer._name}</h5>
            <div class ="card-body">
            <h5 class ="card-title"><i class="fas fa-laptop-code"></i> Engineer</h5>
            <p class ="card-text">ID: ${engineer._id}</p>
            <a href ="mailto:${engineer._email}" class ="btn btn-primary" target="_blank">Email:${engineer._email}</a>\n
            <a href ="http://github.com/${engineer._github}" class ="btn btn-primary" target="_blank">Github: ${engineer._github}</a>
            </div>
        </div>
    </div>
    `;
};

const makeInternCard = (intern) => {
    return `
    <div class = "col-sm-4">
        <div class = card>
            <h5 class ="card-header">${intern._name}</h5>
            <div class ="card-body">
            <h5 class ="card-title"><i class="fas fa-graduation-cap"></i> Intern</h5>
            <p class ="card-text">ID: ${intern._id}</p>
            <p class ="card-text">School: ${intern._school}</p>
            <a href ="mailto:${intern._email}" class ="btn btn-primary" target="_blank">Email: ${intern._email}</a>
            </div>
        </div>
    </div>
    `;
 };

const makeHtml = (htmlData) => {
    let cards = [];

    for (let i = 0; i < htmlData.length; i++) {
        const employee = htmlData[i];
        const role = employee.getRole();

        if (role === "Manager") {
            const managerCard = makeManagerCard(employee);
            cards.push(managerCard);
        } else if (role === "Engineer") {
            const engineerCard = makeEngineerCard(employee);
            cards.push(engineerCard);
        } else if (role === "Intern") {
            const internCard = makeInternCard(employee);
            cards.push(internCard);
        } else {
            console.log('Error! Something went wrong!')
        }
    };

const employeeCards = cards.join('');

const makeTeam = makeTeamPage(employeeCards)
return makeTeam;
};

const makeTeamPage = (employeeCards) => {
    return `
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
<link rel="stylesheet" type="text/css" href="./style.css" />
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
<title>My Team Page</title>
</head>
<body>
<nav class="navbar navbar-dark bg-dark">
    <span class="navbar-brand mb-0 h1">My Team</span>
</nav>
<main>
    <div class ="container">
        <div class ="row" id="team-cards">

        ${employeeCards}

        </div>
    </div>
</main>
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
};

module.exports = makeHtml;
