import * as fhir from '../fhirJson.js';
/**
 * A reference to a code defined by a terminology system.
 */
export interface Coding extends fhir.FhirElement {
    /**
     * The URI may be an OID (urn:oid:...) or a UUID (urn:uuid:...).  OIDs and UUIDs SHALL be references to the HL7 OID registry. Otherwise, the URI should come from HL7's list of FHIR defined special URIs or it should reference to some definition that establishes the system clearly and unambiguously.
     */
    system?: string | undefined;
    /**
     * Extended properties for primitive element: Coding.system
     */
    _system?: fhir.FhirElement;
    /**
     * Where the terminology does not clearly define what string should be used to identify code system versions, the recommendation is to use the date (expressed in FHIR date format) on which that version was officially published as the version date.
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: Coding.version
     */
    _version?: fhir.FhirElement;
    /**
     * A symbol in syntax defined by the system. The symbol may be a predefined code or an expression in a syntax defined by the coding system (e.g. post-coordination).
     */
    code?: string | undefined;
    /**
     * Extended properties for primitive element: Coding.code
     */
    _code?: fhir.FhirElement;
    /**
     * A representation of the meaning of the code in the system, following the rules of the system.
     */
    display?: string | undefined;
    /**
     * Extended properties for primitive element: Coding.display
     */
    _display?: fhir.FhirElement;
    /**
     * Amongst a set of alternatives, a directly chosen code is the most appropriate starting point for new translations. There is some ambiguity about what exactly 'directly chosen' implies, and trading partner agreement may be needed to clarify the use of this element and its consequences more completely.
     */
    userSelected?: boolean | undefined;
    /**
     * Extended properties for primitive element: Coding.userSelected
     */
    _userSelected?: fhir.FhirElement;
}
//# sourceMappingURL=Coding.d.ts.map