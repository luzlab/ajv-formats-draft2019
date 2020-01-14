const formats = [];

formats.push(require('./iri'));
formats.push(require('./duration'));
formats.push(require('./idn-email'));

module.exports = formats;