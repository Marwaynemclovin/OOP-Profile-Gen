const inquirer = require(inquirer);
const path = require('path');
const fs =  require('fs');
const outputDIR = path.resolve(__dirname, 'dist');
const outoputPath = path.join(DIST_DIR, 'team.html');
const gernerateTeam = require('./src/template.js');

// Constructors
const Employee = require('.lib/Employee');
const Engineer = require('.lib/Engineer');
const Intern = require('.lib/Inern');
const Manager = require('.lib/Manager');
const { default: inquirer } = require('inquirer');
