# ajv-formats
Plugin for AJV that adds support for additional international formats and formats
added in draft2019.

Currently, `iri`, `iri-reference`, `idn-email`, `idn-hostname`, and `duration` formats
(added in draft 2019) are supported.

## Installation

```
npm install ajv-formats
```

## Usage

The main export is an `apply` function that patches an existing instance of `ajv`.

```
const Ajv = require('ajv');
const apply = require('ajv-formats');
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
const formats = require('ajv-formats/formats');
const ajv = new Ajv({formats});

let schema = {
  type: 'string',
  format: 'idn-email'
};
ajv.validate(schema, 'квіточка@пошта.укр')  // returns true
```

## Draft07

The library also provides a `draft07` export to load only the formats relevant to
draft07.

```
const Ajv = require('ajv');
const formats = require('ajv-formats/draft07');
const ajv = new Ajv({formats});
```

## Formats

### iri

The string is parsed with 'uri-js' and the scheme is checked against the list of known IANA schemes.
If it's a 'mailto' schemes, all of the `to:` addresses are validated, otherwise we check there IRI 
includes a path and is an absolute reference.

### iri-reference

All valid IRIs are valid. Fragments must have a valid path and of type "relative", "same-document"
or "uri". If there is a scheme, it must be valid.

### idn-email

[`isemail`](https://www.npmjs.com/package/isemail) is used to check the validity of the email.

### idn-hostname

The hostname is converted to ascii with punycode and checked for a valid tld.

### duration

The string is checked against a regex.
