const data = require('./data.js');

const index = () => {
	const db = {...data.getTemperature(), ...data.getHumidity()};
	return db;
}

module.exports = index;