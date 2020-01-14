const { validate } = require('isemail');

module.exports.name = 'idn-email'
module.exports.validate = (value) => {
  return validate(value);
}