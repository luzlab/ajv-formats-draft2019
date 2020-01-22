const { validate } = require('isemail');

module.exports = value => {
  return validate(value);
};
