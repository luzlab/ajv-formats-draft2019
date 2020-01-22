const { toASCII } = require('punycode');
const { parse } = require('uri-js');
const { tldExists } = require('tldjs');

module.exports = value => {
  const domain = toASCII(value);
  return tldExists(domain) && !domain.includes(':');
};
