const formats = require('./formats');

module.exports = ajv => {
  Object.keys(formats).forEach(key => {
    ajv.addFormat(key, formats[key]);
  });
};
