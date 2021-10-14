const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeesInfo(employeeInfo) {
  const firstNameRe = data.employees.find((employee) => employee.firstName === employeeInfo.name);
  const LastNameRe = data.employees.find((employee) => employee.lastName === employeeInfo.name);
  const idResult = data.employees.find((employee) => employee.id === employeeInfo.id);
  if (firstNameRe !== undefined) {
    return firstNameRe;
  }
  if (LastNameRe !== undefined) {
    return LastNameRe;
  }
  if (idResult !== undefined) {
    return idResult;
  }
}

function getEmployees(option) {
  const employeeInfo = getEmployeesInfo(option);
  if (employeeInfo === undefined) {
    throw new Error('Informações inválidas');
  }
  const speciesInfo = data.species.filter((specie) =>
    employeeInfo.responsibleFor.includes(specie.id));

  return {
    id: employeeInfo.id,
    fullName: `${employeeInfo.firstName} ${employeeInfo.lastName}`,
    species: speciesInfo.map((specie) => specie.name),
    locations: speciesInfo.map((specie) => specie.location),
  };
}

function getAllEmployees() {
  const allEmployees = employees.map((employee) => ({ name: employee.firstName }));
  return allEmployees.map((employee) => (getEmployees(employee)));
}

function getEmployeesCoverage(option = 'default') {
  if (option === 'default') {
    return getAllEmployees();
  }
  return getEmployees(option);
}

module.exports = getEmployeesCoverage;

/*
ENTRADAS:
getEmployeesCoverage({ name: 'Sharonda' });
getEmployeesCoverage({ name: 'Spry' });
getEmployeesCoverage({ id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad' });

SAIDAS:

{
  "id": "4b40a139-d4dc-4f09-822d-ec25e819a5ad",
  "fullName": "Sharonda Spry",
  "species": [ "otters", "frogs" ],
  "locations": [ "SE", "SW" ]
}

*/
