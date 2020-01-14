const formats = require("./formats");

module.exports = ajv => {
  formats.forEach(format => {
    ajv.addFormat(format.name, format.validate);
  });
};
