const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const weekDays = Object.keys(data.hours);
const animals = data.species.map(({ name }) => name);

function showAllDay(userDay) {
  const schedule = {};
  weekDays.forEach((day) => {
    schedule[day] = {};
    schedule[day].officeHour = `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`;
    schedule[day].exhibition = data.species.filter((specie) =>
      specie.availability.includes(day)).map((animalName) => animalName.name);
    if (day === 'Monday') {
      schedule[day].officeHour = 'CLOSED';
      schedule[day].exhibition = 'The zoo will be closed!';
    }
  });
  if (!userDay) {
    return schedule;
  } return { [userDay]: schedule[userDay] };
}

function showAnimalsPerWeekDay(userAnimal) {
  return data.species.find((specie) =>
    specie.name === userAnimal).availability;
}

function getSchedule(scheduleTarget) {
  if (weekDays.includes(scheduleTarget)) {
    return showAllDay(scheduleTarget);
  }
  if (animals.includes(scheduleTarget)) {
    return showAnimalsPerWeekDay(scheduleTarget);
  }
  return showAllDay();
}

// console.log(getSchedule('qualquercoisa'));
// console.log(showAnimalsPerWeekDay('penguins'));

module.exports = getSchedule;
