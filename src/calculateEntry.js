const data = require('../data/zoo_data');

// const x = [
//   { name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 18 },
//   { name: 'Carlos Nogueira', age: 50 },
// ];

function countEntrants(entrants) {
  const result = ({
    child: entrants.filter((entrant) => entrant.age < 18).length,
    adult: entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length,
    senior: entrants.filter((entrant) => entrant.age >= 50).length,
  });
  return result;
}

function calculateEntry(entrants) {
  let result = 0;
  if (!entrants || !entrants.length) {
    return result;
  }
  const resultEntrants = countEntrants(entrants);
  const childSum = resultEntrants.child * data.prices.child;
  const adultSum = resultEntrants.adult * data.prices.adult;
  const seniorSum = resultEntrants.senior * data.prices.senior;
  result = childSum + adultSum + seniorSum;
  return result;
}

// console.log(calculateEntry());

module.exports = { calculateEntry, countEntrants };
