const faker = require('faker');

module.exports = {
	getTemperature: (limit = 50) => {
	let tempArray = [];
	for ( let temp = 0; temp < limit; temp++ ) {
		let data = {
			id: temp,
			value: faker.random.number()
		};

		tempArray.push(data);
	}
	return { temperatures: tempArray };
	},

	getHumidity: (limit = 50) => {
		let humArray = [];
		for ( let temp = 0; temp < limit; temp++) {
			let data = {
				id: temp,
				value: `${faker.random.number() / 1000}%`
			};

			humArray.push(data);
		}
		return { humidity: humArray };
	}
};
