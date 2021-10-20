const data = require('../data/zoo_data');

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

const animalsIncludedNamesFilters = (sort, sex) => {
  const animalMap = {};
  data.species.forEach((specie) => {
    if (!animalMap[specie.location]) {
      animalMap[specie.location] = [];
    }
    let residentsMap = [...specie.residents];
    if (sex !== undefined) {
      residentsMap = residentsMap.filter((resident) => resident.sex === sex);
    }
    residentsMap = residentsMap.map((resident) => resident.name);
    if (sort !== undefined) {
      residentsMap.sort();
    }
    animalMap[specie.location].push({ [specie.name]: residentsMap });
  });
  return animalMap;
};

function getAnimalMap(options = {}) {
  const { includeNames, sorted, sex } = options;
  if (includeNames) {
    return animalsIncludedNamesFilters(sorted, sex);
  }
  return animalLocation();
}

module.exports = getAnimalMap;

/*

Dentro do => data.species.forEach((specie) => {

if (!animalMap[specie.location]) { animalMap[specie.location] = [];
//RETORNA { NE: [], NW: [], SE: [], SW: [] }

let residentsMap = [...specie.residents];
RETORNA:
[
  { name: 'Zena', sex: 'female', age: 12 },
  { name: 'Maxwell', sex: 'male', age: 15 },
  { name: 'Faustino', sex: 'male', age: 7 },
  { name: 'Dee', sex: 'female', age: 14 }
]
[
  { name: 'Shu', sex: 'female', age: 19 },
  { name: 'Esther', sex: 'female', age: 17 }
]
[
  { name: 'Hiram', sex: 'male', age: 4 },
  { name: 'Edwardo', sex: 'male', age: 4 },
  { name: 'Milan', sex: 'male', age: 4 }
]
[
  { name: 'Joe', sex: 'male', age: 10 },
  { name: 'Tad', sex: 'male', age: 12 },
  { name: 'Keri', sex: 'female', age: 2 },
  { name: 'Nicholas', sex: 'male', age: 2 }
]
[
  { name: 'Neville', sex: 'male', age: 9 },
  { name: 'Lloyd', sex: 'male', age: 8 },
  { name: 'Mercedes', sex: 'female', age: 9 },
  { name: 'Margherita', sex: 'female', age: 10 }
]
[
  { name: 'Cathey', sex: 'female', age: 3 },
  { name: 'Annice', sex: 'female', age: 2 }
]
[
  { name: 'Paulette', sex: 'female', age: 5 },
  { name: 'Bill', sex: 'male', age: 6 }
]
[
  { name: 'Ilana', sex: 'female', age: 11 },
  { name: 'Orval', sex: 'male', age: 15 },
  { name: 'Bea', sex: 'female', age: 12 },
  { name: 'Jefferson', sex: 'male', age: 4 }
]
[
  { name: 'Gracia', sex: 'female', age: 11 },
  { name: 'Antone', sex: 'male', age: 9 },
  { name: 'Vicky', sex: 'female', age: 12 },
  { name: 'Clay', sex: 'male', age: 4 },
  { name: 'Arron', sex: 'male', age: 7 },
  { name: 'Bernard', sex: 'male', age: 6 }
]

COMPARATIVO DE RESPOSTAS

ENTRADA:
getAnimalMap();

SAIDA:
  {
    NE: ['lions', 'giraffes'],
    NW: ['tigers', 'bears', 'elephants'],
    SE: ['penguins', 'otters'],
    SW: ['frogs', 'snakes'],
  }

ENTRADA:
getAnimalMap({ sex: 'female' });

SAIDA:
   {
      NE: ['lions', 'giraffes'],
      NW: ['tigers', 'bears', 'elephants'],
      SE: ['penguins', 'otters'],
      SW: ['frogs', 'snakes'],
    };

ENTRADA:
getAnimalMap({ sex: 'female', sorted: true });

SAIDA:
{
      NE: ['lions', 'giraffes'],
      NW: ['tigers', 'bears', 'elephants'],
      SE: ['penguins', 'otters'],
      SW: ['frogs', 'snakes'],
    }

ENTRADA:
getAnimalMap({ includeNames: true });

SAIDA:
      {
      NE: [
        { lions: ['Zena', 'Maxwell', 'Faustino', 'Dee'] },
        { giraffes: ['Gracia', 'Antone', 'Vicky', 'Clay', 'Arron', 'Bernard'] },
      ],
      NW: [
        { tigers: ['Shu', 'Esther'] },
        { bears: ['Hiram', 'Edwardo', 'Milan'] },
        { elephants: ['Ilana', 'Orval', 'Bea', 'Jefferson'] },
      ],
      SE: [
        { penguins: ['Joe', 'Tad', 'Keri', 'Nicholas'] },
        { otters: ['Neville', 'Lloyd', 'Mercedes', 'Margherita'] },
      ],
      SW: [
        { frogs: ['Cathey', 'Annice'] },
        { snakes: ['Paulette', 'Bill'] },
      ],
    };
####### Cod test.

    const animalincludeNames = () => ({
  NE: data.species.filter((specie) =>
    (specie.location === 'NE')).map((specieName) => ({
    [specieName.name]: specieName.residents.map((resident) => resident.name),
  })),
  NW: data.species.filter((specie) =>
    (specie.location === 'NW')).map((specieName) => ({
    [specieName.name]: specieName.residents.map((resident) => resident.name),
  })),
  SE: data.species.filter((specie) =>
    (specie.location === 'SE')).map((specieName) => ({
    [specieName.name]: specieName.residents.map((resident) => resident.name),
  })),
  SW: data.species.filter((specie) =>
    (specie.location === 'SW')).map((specieName) => ({
    [specieName.name]: specieName.residents.map((resident) => resident.name),
  })),
});

*/
