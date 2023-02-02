const Employee = require('../lib/Employee');
const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
    const testGithub = "FlynnShelton";
    const employeeInstance = new Engineer("Flynn", 1, "flynnshelton@gmail.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "FlynnShelton";
    const employeeInstance = new Engineer("Flynn", 1, "flynnshelton@gmail.com", testGithub);
    expect(employeeInstance.getGitHub()).toBe(testGithub);
});

test("Testing role.", () => {
    const testValue = "Engineer";
    const employeeInstance = new Engineer("Flynn", 1, "flynnshelton@gmail.com", "JamesLJenks");
    expect(employeeInstance.getRole()).toBe(testValue);
});