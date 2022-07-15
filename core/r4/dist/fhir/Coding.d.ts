import * as fhir from '../fhir.js';
/**
 * Valid arguments for the Coding type.
 */
export interface CodingArgs extends fhir.FhirElementArgs {
    /**
     * The URI may be an OID (urn:oid:...) or a UUID (urn:uuid:...).  OIDs and UUIDs SHALL be references to the HL7 OID registry. Otherwise, the URI should come from HL7's list of FHIR defined special URIs or it should reference to some definition that establishes the system clearly and unambiguously.
     */
    system?: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: Coding.system
     */
    _system?: fhir.FhirElementArgs;
    /**
     * Where the terminology does not clearly define what string should be used to identify code system versions, the recommendation is to use the date (expressed in FHIR date format) on which that version was officially published as the version date.
     */
    version?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Coding.version
     */
    _version?: fhir.FhirElementArgs;
    /**
     * A symbol in syntax defined by the system. The symbol may be a predefined code or an expression in a syntax defined by the coding system (e.g. post-coordination).
     */
    code?: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: Coding.code
     */
    _code?: fhir.FhirElementArgs;
    /**
     * A representation of the meaning of the code in the system, following the rules of the system.
     */
    display?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Coding.display
     */
    _display?: fhir.FhirElementArgs;
    /**
     * Amongst a set of alternatives, a directly chosen code is the most appropriate starting point for new translations. There is some ambiguity about what exactly 'directly chosen' implies, and trading partner agreement may be needed to clarify the use of this element and its consequences more completely.
     */
    userSelected?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: Coding.userSelected
     */
    _userSelected?: fhir.FhirElementArgs;
}
/**
 * A reference to a code defined by a terminology system.
 */
export declare class Coding extends fhir.FhirElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The URI may be an OID (urn:oid:...) or a UUID (urn:uuid:...).  OIDs and UUIDs SHALL be references to the HL7 OID registry. Otherwise, the URI should come from HL7's list of FHIR defined special URIs or it should reference to some definition that establishes the system clearly and unambiguously.
     */
    system?: fhir.FhirUri | undefined;
    /**
     * Where the terminology does not clearly define what string should be used to identify code system versions, the recommendation is to use the date (expressed in FHIR date format) on which that version was officially published as the version date.
     */
    version?: fhir.FhirString | undefined;
    /**
     * A symbol in syntax defined by the system. The symbol may be a predefined code or an expression in a syntax defined by the coding system (e.g. post-coordination).
     */
    code?: fhir.FhirCode | undefined;
    /**
     * A representation of the meaning of the code in the system, following the rules of the system.
     */
    display?: fhir.FhirString | undefined;
    /**
     * Amongst a set of alternatives, a directly chosen code is the most appropriate starting point for new translations. There is some ambiguity about what exactly 'directly chosen' implies, and trading partner agreement may be needed to clarify the use of this element and its consequences more completely.
     */
    userSelected?: fhir.FhirBoolean | undefined;
    /**
     * Default constructor for Coding - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CodingArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=Coding.d.ts.map