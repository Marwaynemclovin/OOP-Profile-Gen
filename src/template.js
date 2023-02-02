const Engineer = require("../lib/Engineer");

module.exports = team => {
    return `
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <title>OOP Profile Gen</title>
  </head>
  <body>
    <div class="container-fluid">
        <div class = "row">
            <div class = "col- 12 d-flex justify-content-center">
                <h1 class = "text-center>The Team<h1>
            </div>
        </div>
    </div>
    <div class = "container">
        <div class = "row">
            <div class = " col-12 d-flex justify-content-center">
            ${gernerateTeam(team)}
            </div>
        </div>
    <div>
  </body>
</html>
    `;
};

const gernerateTeam = team => {

    const generateManager = manager => {
        return `
        <div class="card">
            <div class="card-header text-center">
                <h2 class="card-title">${manager.getName()}</h2>
                <h4 class="card-title">Title: ${manager.getRole()}</h4>
            </div>
            <div class="card-body bg-light">
                <ul class="list-group text-dark">
                    <li class="list-group-item">ID: ${manager.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li class="list-group-item">Office number: <a href="tel:${manager.getOfficeNumber()}">${manager.getOfficeNumber()}</a></li>
                </ul>
            </div>
        </div>
        `;
    };

    const generateEngineer = engineer => {
        return `
        <div class="card">
            <div class="card-header text-center">
                <h2 class="card-title">${engineer.getName()}</h2>
                <h4 class="card-title">Title: ${engineer.getRole()}</h4>
            </div>
            <div class="card-body bg-light">
                <ul class="list-group text-dark">
                    <li class="list-group-item">ID: ${engineer.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGitHub()}" target="_blank" rel="noopener noreferrer">${engineer.getGitHub()}</a></li>                
                </ul>
            </div>
        </div>
        `;
    };

    const generateIntern = intern => {
        return `
        <div class="card">
            <div class="card-header text-center">
                <h2 class="card-title">${intern.getName()}</h2>
                <h4 class="card-title">Title: ${intern.getRole()}</h4>
            </div>
            <div class="card-body bg-light">
                <ul class="list-group text-dark">
                    <li class="list-group-item">ID: ${intern.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                    <li class="list-group-item">School: ${intern.getSchool()}</li>                
                </ul>
            </div>
        </div>
        `;
    };

    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    return html.join("");

};