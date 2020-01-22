const { parse } = require('uri-js');
const { validate } = require('isemail');
const schemes = require('schemes');

module.exports = value => {
  const iri = parse(value);
  if (iri.scheme === 'mailto' && iri.to.every(validate)) {
    return true;
  }
  if (iri.reference === 'absolute' && schemes.allByName[iri.scheme]) {
    return true;
  }
  return false;
};
