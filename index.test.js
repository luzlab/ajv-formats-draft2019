const assert = require('assert');
const apply = require('./index.js');
const formats = require('./formats');
const Ajv = require('ajv');

describe('load types', function() {
  it('add the types to ajv', function() {
    const ajv = new Ajv();
    apply(ajv);
    assert.ok(ajv._formats.duration);
    assert.ok(ajv._formats.iri);
  });

  it('accept valid IRIs', function() {
    const ajv = new Ajv();
    apply(ajv);
    const schema = {
      type: 'string',
      format: 'iri'
    };
    const validate = ajv.compile(schema);

    // examples from https://tools.ietf.org/html/rfc2396#section-1.3
    assert.ok(validate('http://www.ietf.org/rfc/rfc2396.txt'));
    assert.ok(validate('https://пошта.укр/russian'));
    assert.ok(validate('ldap://[2001:db8::7]/c=GB?objectClass?one'));
    assert.ok(validate('mailto:John.Doe@example.com'));
    assert.ok(validate('news:comp.infosystems.www.servers.unix'));
    assert.ok(validate('tel:+1-816-555-1212'));
    assert.ok(validate('telnet://192.0.2.16:80/'));
    assert.ok(validate('urn:oasis:names:specification:docbook:dtd:xml:4.1.2'));
  });

  it('reject invalid IRIs', function() {
    const ajv = new Ajv();
    apply(ajv);

    const schema = {
      type: 'string',
      format: 'iri'
    };
    var validate = ajv.compile(schema);
    assert.ok(!validate('example.com')); // missing a scheme
    assert.ok(!validate('invalidScheme://example.com'));  // an invalid scheme
  });

  it('accept a valid duration', function() {
    const ajv = new Ajv();
    apply(ajv);

    const schema = {
      type: 'string',
      format: 'duration'
    };
    var validate = ajv.compile(schema);
    assert.ok(validate('P1Y2M4DT20H44M12.67S'));
  });

  it('reject an invalid duration', function() {
    const ajv = new Ajv();
    apply(ajv);

    const schema = {
      type: 'string',
      format: 'duration'
    };
    var validate = ajv.compile(schema);
    assert.ok(!validate('10 seconds'));
  });

  it('accept valid idn-emails', function() {
    const ajv = new Ajv();
    apply(ajv);

    const schema = {
      type: 'string',
      format: 'idn-email'
    };
    const validate = ajv.compile(schema);

    // examples from https://en.wikipedia.org/wiki/International_email
    assert.ok(validate('квіточка@пошта.укр'));
    assert.ok(validate('Dörte@Sörensen.example.com'));
    assert.ok(validate('John.Doe@example.com'));
  });

  it('reject invalid idn-emails', function() {
    const ajv = new Ajv();
    apply(ajv);

    const schema = {
      type: 'string',
      format: 'idn-email'
    };
    var validate = ajv.compile(schema);
    assert.ok(!validate('johndoe'));
    assert.ok(!validate('valid@somewhere.com?asdf'));
  });
});
