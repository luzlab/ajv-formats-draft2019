const draft2019formats = require('./formats');

const idnFormat = {};

const idnFormatKeywords = ['idn-email', 'iri', 'iri-reference', 'idn-hostname'];

idnFormatKeywords.forEach(keyword => {
  idnFormat[keyword] = draft2019formats[keyword];
});

module.exports = idnFormat;
