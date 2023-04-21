const { parse } = require('uri-js');
const addressParser = require('smtp-address-parser').parse;
const { scheme} = require('./ini-abnf')

function validate(address) {
  try {
    addressParser(address);
    return true;
  } catch (err) {
    return false;
  }
}

module.exports = (value) => {
  const iri = parse(value);
  if (iri.scheme === 'mailto' && iri.to.every(validate)) {
    return true;
  }
  if ((iri.reference === 'absolute' || iri.reference === 'uri') && scheme.test(iri.scheme)) {
    return true;
  }
  return false;
};