const formats = require("./formats");

// console.dir(Object.keys(formats));
module.exports = ajv => {
  Object.keys(formats).forEach(key => {
    ajv.addFormat(key, formats[key]);
  });
};
