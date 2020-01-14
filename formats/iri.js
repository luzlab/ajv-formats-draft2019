const { parse } = require('uri-js');
const { validate } = require('isemail');
const schemes = require('schemes');

module.exports.name = 'iri'
module.exports.validate = (value) => {
  const uri = parse(value);
  if (uri.scheme === 'mailto' && uri.to.every(validate)) {
    return true;
  };  if (schemes.allByName[uri.scheme] && uri.reference === 'absolute') {
    return true;
  }
  return false;
}