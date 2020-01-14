# ajv-draft2019-formats
Plugin for AJV that adds support for **some** of draft2019 formats.

Currently, the `iri`, `idn-email`, and `duration` formats are supported.

## Installation

```
npm install ajv-draft2019-formats
```

## Usage

The main export is an `apply` function that patches an existing instance of `ajv`.

```
const Ajv = require('ajv');
const apply = require('ajv-draft2019-formats');
const ajv = new Ajv();
apply(ajv);

let schema = {
  type: 'string',
  format: 'idn-email'
};
ajv.validate(schema, 'квіточка@пошта.укр')  // returns true
```

Alternately, the formats can be passed as an option when creating a new `ajv` instance.

```
const Ajv = require('ajv');
const apply = require('ajv-draft2019-formats/formats');
const ajv = new Ajv();
apply(ajv);

let schema = {
  type: 'string',
  format: 'idn-email'
};
ajv.validate(schema, 'квіточка@пошта.укр')  // returns true
```

## Formats

### iri

Scheme are checked against the list of IANA schemes for a valid scheme and path only.
For 'mailto' schemes, all of the `to:` addresses are validated.

### idn-email

[`isemail`](https://www.npmjs.com/package/isemail) is used to check the validity of the email.

### duration

The string is checked against a regex.
