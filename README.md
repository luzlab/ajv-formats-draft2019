# ajv-draft2019-formats
Plugin for AJV that adds support for **some** of draft2019 formats.

Currently, the `iri`, `idn-email`, and `duration` formats are supported.

## Installation

```
npm install ajv-draft2019-formats
```

## Usage

```
const ajv = require('ajv');
const apply = require('ajv-draft2019-formats');
apply(ajv);

let schema = {
  type: 'string',
  format: 'idn-email'
};
ajv.validate(schema, 'квіточка@пошта.укр')  // returns true
```

See `index.test.js` for more usage examples.

## Formats

### iri

Scheme are checked against the list of IANA schemes for a valid scheme and path only.
For 'mailto' schemes, all of the `to:` addresses are validated as well.

### idn-email

[`isemail`](https://www.npmjs.com/package/isemail) is used to check the validity of the email.

### duration

The string is checked against a regex.
