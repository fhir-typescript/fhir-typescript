import * as fhir from '../fhirJson.js';
/**
 * A technical identifier - identifies some entity uniquely and unambiguously.
 */
export interface Identifier extends fhir.FhirElement {
    /**
     * This is labeled as "Is Modifier" because applications should not mistake a temporary id for a permanent one. Applications can assume that an identifier is permanent unless it explicitly says that it is temporary.
     */
    use?: 'official' | 'secondary' | 'temp' | 'usual' | undefined;
    /**
     * Extended properties for primitive element: Identifier.use
     */
    _use?: fhir.FhirElement;
    /**
     * This element deals only with general categories of identifiers.  It SHOULD not be used for codes that correspond 1..1 with the Identifier.system. Some identifiers may fall into multiple categories due to common usage.
     * Where the system is known, a type is unnecessary because the type is always part of the system definition. However systems often need to handle identifiers where the system is not known. There is not a 1:1 relationship between type and system, since many different systems have the same type.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Establishes the namespace for the value - that is, a URL that describes a set values that are unique.
     */
    system?: string | undefined;
    /**
     * Extended properties for primitive element: Identifier.system
     */
    _system?: fhir.FhirElement;
    /**
     * If the value is a full URI, then the system SHALL be urn:ietf:rfc:3986.  The value's primary purpose is computational mapping.  As a result, it may be normalized for comparison purposes (e.g. removing non-significant whitespace, dashes, etc.)  A value formatted for human display can be conveyed using the [Rendered Value extension](extension-rendered-value.html).
     */
    value?: string | undefined;
    /**
     * Extended properties for primitive element: Identifier.value
     */
    _value?: fhir.FhirElement;
    /**
     * Time period during which identifier is/was valid for use.
     */
    period?: fhir.Period | undefined;
    /**
     * The Identifier.assigner may omit the .reference element and only contain a .display element reflecting the name or other textual information about the assigning organization.
     */
    assigner?: fhir.Reference | undefined;
}
//# sourceMappingURL=Identifier.d.ts.map