const Employee = require('../lib/Employee');
const Intern = require("../lib/Intern");

test("Can create school.", () => {
    const testSchool = "School Name";
    const employeeInstance = new Intern("Sean", 1, "seansmith@gmail.com", testSchool);
    expect(employeeInstance.school).toBe(testSchool);
});

test('Testing the School', () => {
    const testValue = 'University of Sydney';
    const e = new Intern('Foo', 1, 'seansmith@gmail.com', testValue);
    expect(e.school).toBe(testValue);
});

test("Testing role.", () => {
    const returnValue = "Intern";
    const employeeInstance = new Intern("Sean", 1, "seansmith@gmail.com", "School Name");
    expect(employeeInstance.getRole()).toBe(returnValue);
});