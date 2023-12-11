const path = require('path');
const fs = require('fs');

/*-------------------*/

module.exports = {
  common: { index: ['./src/assets/js/index.js', './src/assets/styles/index.scss'] },

  /* environment parts fix */
  environment: fs
    .readdirSync(path.resolve(__dirname, '../src/parts'))
    .map((filepath) => path.resolve(__dirname, path.join('../src/parts', filepath))),
};
