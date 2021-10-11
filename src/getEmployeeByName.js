const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const result = data.employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);
  if (result === undefined) {
    return {};
  } return result;
}

// console.log(getEmployeeByName('Nigel'));

module.exports = getEmployeeByName;
