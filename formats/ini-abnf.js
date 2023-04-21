/**
 * iri ABNF
 * @see https://datatracker.ietf.org/doc/html/rfc3987#section-2.2
 * @internal
 */
module.exports = Object.freeze({
    scheme: /^[a-zA-Z0-9][a-zA-Z0-9.+-]+$/,
})

