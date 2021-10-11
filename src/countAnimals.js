const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    return data.species.reduce((acc, current) => {
      acc[current.name] = current.residents.length;
      return acc;
    }, {});
  }

  if (animal.sex !== undefined) {
    return data.species.find((specie) =>
      specie.name.includes(animal.specie)).residents.filter((specieSex) =>
      specieSex.sex === animal.sex).length;
  } return data.species.find((specie) =>
    specie.name.includes(animal.specie)).residents.length;
}

// console.log(countAnimals());

module.exports = countAnimals;
