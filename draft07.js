const draft2019formats = require('./formats');

const draft07Formats = {};

const draft07FormatsKeywords = ['idn-email', 'iri', 'iri-reference', 'idn-hostname']

draft07FormatsKeywords.forEach((keyword) => {
  draft07Formats[keyword] = draft2019formats[keyword]
});

module.exports = draft07Formats;
