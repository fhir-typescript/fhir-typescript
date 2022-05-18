/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/identifier-use|4.0.1
/**
 * Identifies the purpose for this identifier, if known .
 */
var IdentifierUseCodes = {
    /**
     * official: The identifier considered to be most trusted for the identification of this item. Sometimes also known as "primary" and "main". The determination of "official" is subjective and implementation guides often provide additional guidelines for use.
     */
    Official: "official",
    /**
     * old: The identifier id no longer considered valid, but may be relevant for search purposes.  E.g. Changes to identifier schemes, account merges, etc.
     */
    Old: "old",
    /**
     * secondary: An identifier that was assigned in secondary use - it serves to identify the object in a relative context, but cannot be consistently assigned to the same object again in a different context.
     */
    Secondary: "secondary",
    /**
     * temp: A temporary identifier.
     */
    Temp: "temp",
    /**
     * usual: The identifier recommended for display and use in real-world interactions.
     */
    Usual: "usual",
};

export { IdentifierUseCodes };
//# sourceMappingURL=IdentifierUseCodes.js.map
