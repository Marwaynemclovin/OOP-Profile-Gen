const inquirer = require('inquirer');
const path = require('path');
const fs =  require('fs');
const outputDIR = path.resolve(__dirname, 'dist');
const outputPath = path.join(outputDIR, 'team.html');
const render = require('./src/template.js');

// Constructors
// const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const teamArray = [];

function appStart () {

    function teamStart (){
        inquirer.prompt([{
            type: 'list',
            message: 'What employees need to be added to the team?',
            name: 'addEmployee',
            choices: ['Manager', 'Engineer', 'Intern', 'No other members required']
        }]).then(function (userInput) {
            switch (userInput.addEmployee) {
                case 'Manager':
                    addManager();
                    break;
                case 'Engineer':
                    addEngineer();
                    break; 
                case 'Intern':
                    addIntern();
                    break;
                default:
                    createHTML();
            }
        });
    }

    function addManager (){
        inquirer.prompt ([
            {
                type: 'input',
                name: 'managerName',
                message: 'Insert the name of the Manager'
            },

            {
                type: 'input',
                name: 'managerID',
                message: 'Insert the employee ID of the Manager'
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: 'Insert the email of the Manager'
            },
            {
                type: 'input',
                name: 'managerOfficeNumber',
                message: 'Insert the office number of the manager'
            }
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOfficeNumber);
            teamArray.push(manager);
            teamStart();
        });
    }

    function addEngineer (){
        inquirer.prompt ([
            {
                type: 'input',
                name: 'engineerName',
                message: 'Insert the name of the Engineer'
            },

            {
                type: 'input',
                name: 'engineerID',
                message: 'Insert the employee ID of the Engineer'
            },

            {
                type: 'input',
                name: 'engineerEmail',
                message: 'Insert the email of the Engineer'
            },

            {
                type: 'input',
                name: 'engineerGit',
                message: 'Insert the GitHub username of the Engineer'
            },
        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGit);
            teamArray.push(engineer);
            teamStart();
        });
    }

    function addIntern (){
        inquirer.prompt ([
            {
                type: 'input',
                name: 'internName',
                message: 'Insert the name of the Intern'
            },
            {
                type: 'input',
                name: 'internID',
                message: 'Insert the employee ID of the Intern'
            },
            {
                type: 'input',
                name: 'internEmail',
                message: 'Insert the email of the Intern'
            },
            {
                type: 'input',
                name: 'internSchool',
                message: 'Insert the School of the Intern'
            },
        ]).then(answers => {
            const intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool);
            teamArray.push(intern);
            createTeam();
        });
    }
    
    function createHTML (){
        if (!fs.existsSync(DIST_DIR)) {
            fs.mkdirSync(DIST_DIR)
        }
        console.log('Creating Team HTML');
        fs.writeFileSync(outputPath, render(teamArray), 'utf-8');
    }
    
    createTeam ();
    
    function appStart () {
        inquirer.prompt([
            {
                type: 'list',
                name: 'addMember',
                message: 'What type of team member would you like to add?',
                choices: ['Manager', 'Engineer', 'Intern', 'No more members to add']
            },
        ]).then(answers => {
            switch(answers.addMember) {
                case 'Manager':
                    addManager();
                    break;
                case 'Engineer':
                    addEngineer();
                    break;
                case 'Intern':
                    addIntern();
                    break;
                default:
                    createHTML();
                    break;
            }
        });
    }
}
    appStart();
