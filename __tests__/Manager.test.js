const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

test('set office number with constructor', () => {
    const testValue = 100;
    const e = new Manager('Foo', 1, 'stephenho@gmail.com', testValue);
    expect(e.officeNumber).toBe(testValue);
});

test("Testing officeNumber will return office number.", () => {
    const testOfficeNumber = 1;
    const employeeInstance = new Manager("Stephen", 1, "stephenho@gmail.com", testOfficeNumber);
    expect(employeeInstance.getOfficeNumber()).toBe(testOfficeNumber);
});

// Test if the getRole() value is Manager
test('getRole() return Manager', () => {
    const testValue = 'Manager';
    const e = new Manager('Foo', 1, 'manager@email.com', 100);
    expect(e.getRole()).toBe(testValue);
});