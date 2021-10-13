const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((employee) => (employee.managers.includes(id)));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const results = data.employees.filter((employee) =>
    employee.managers.includes(managerId));
  return results.map((result) => `${result.firstName} ${result.lastName}`);
}
module.exports = { isManager, getRelatedEmployees };
