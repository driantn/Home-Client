const faker = require('faker');

module.exports = {
  getTemperature: (limit = 50) => {
    const tempArray = [];
    for (let temp = 0; temp < limit; temp++) {
      const data = {
        id: temp,
        value: (faker.random.number() / 1000),
        timestamp: Date.now(),
      };

      tempArray.push(data);
    }
    return { temperatures: tempArray };
  },

  getHumidity: (limit = 50) => {
    const humArray = [];
    for (let temp = 0; temp < limit; temp++) {
      const data = {
        id: temp,
        value: (faker.random.number() / 1000),
        timestamp: Date.now(),
      };

      humArray.push(data);
    }
    return { humidity: humArray };
  },

  getLight: (limit = 50) => {
    const lightArray = [];
    for (let light = 0; light < limit; light++) {
      const data = {
        id: light,
        value: (faker.random.number() / 1000),
        timestamp: Date.now(),
      };

      lightArray.push(data);
    }
    return { light: lightArray };
  },
};
