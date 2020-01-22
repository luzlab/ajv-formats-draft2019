const { toASCII } = require('punycode');
const { parse } = require('uri-js');
const { tldExists } = require('tldjs');

module.exports.name = 'idn-hostname';
module.exports.validate = (value) => {
  const domain = toASCII(value);
  return tldExists(domain) && !domain.includes(':');
}


