const data = require('./data.js');

const index = () => {
  const db = { ...data.getTemperature(), ...data.getHumidity(), ...data.getLight() };
  return db;
};

module.exports = index;
