const data = require('../data/zoo_data');
/*
const animalLocation = () => ({
  NE: data.species.filter((specie) =>
    (specie.location === 'NE')).map((specieName) => specieName.name),
  NW: data.species.filter((specie) =>
    (specie.location === 'NW')).map((specieName) => specieName.name),
  SE: data.species.filter((specie) =>
    (specie.location === 'SE')).map((specieName) => specieName.name),
  SW: data.species.filter((specie) =>
    (specie.location === 'SW')).map((specieName) => specieName.name),
});

const mapIncludesNames = (sort, sex) => {
  const animalMap = {};
  data.species.forEach((specie) => {
    if (!animalMap[specie.location]) {
      animalMap[specie.location] = [];
    }
    let residentsMap = [...specie.residents];
    if (sex) {
      residentsMap = residentsMap.filter((resident) => resident.sex === sex);
    }
    residentsMap = residentsMap.map((resident) => resident.name);
    if (sort) {
      residentsMap.sort();
    }
    animalMap[specie.location].push({ [specie.name]: residentsMap });
  });
  return animalMap;
};

function getAnimalMap(options = {}) {
  const { includeNames, sorted, sex } = options;
  if (includeNames) {
    return mapIncludesNames(sorted, sex);
  }
  return animalLocation();
}

console.log(getAnimalMap());

module.exports = getAnimalMap;
*/
