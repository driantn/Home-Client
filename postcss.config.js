/* eslint-disable import/no-extraneous-dependencies */
const prefixer = require('autoprefixer');

module.exports = {
  plugins: [
    prefixer({
      browsers: ['>= 0.1%'], // Global coverage:94.73% please check http://browserl.ist/
    }),
  ],
};
