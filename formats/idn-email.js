const { parse } = require('smtp-address-parser');

module.exports = value => {
  try {
    parse(value);
    return true;
  }
  catch {
    return false;
  }
};
