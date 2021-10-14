const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const employeeFind = employees.find((employee) => employee.id === id);
  const aniamalResp = data.species.find((specie) => specie.id === employeeFind.responsibleFor[0]);
  const result = aniamalResp.residents.reduce((acc, curr) => (curr.age > acc.age ? curr : acc));
  return [result.name, result.sex, result.age];
}

// console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
