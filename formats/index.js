const formatters = [];

formatters.push(require('./iri'));
formatters.push(require('./duration'));
formatters.push(require('./idn-email'));
formatters.push(require('./idn-hostname'))
formatters.push(require('./iri-reference'))

const formats = {};
formatters.forEach(value => formats[value.name] = value.validate)

module.exports = formats;