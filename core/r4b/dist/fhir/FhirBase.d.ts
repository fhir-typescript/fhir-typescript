export interface FhirConstructorOptions {
    /** If instantiated objects should allow non-FHIR defined properties */
    allowUnknownElements?: boolean | undefined;
}
/**
 * Internal Element - equivalent to a FHIR JSON Element (Complex DataType), without extensions
 */
export interface FtsElement {
    /**
     * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
     */
    id?: string | undefined;
}
/**
 * Internal coding - equivalent to a FHIR JSON Coding (Complex DataType), without extensions
 */
export interface FtsCoding extends FtsElement {
    /**
     * The URI may be an OID (urn:oid:...) or a UUID (urn:uuid:...).  OIDs and UUIDs SHALL be references to the HL7 OID registry. Otherwise, the URI should come from HL7's list of FHIR defined special URIs or it should reference to some definition that establishes the system clearly and unambiguously.
     */
    system?: string | undefined;
    /**
     * Where the terminology does not clearly define what string should be used to identify code system versions, the recommendation is to use the date (expressed in FHIR date format) on which that version was officially published as the version date.
     */
    version?: string | undefined;
    /**
     * A symbol in syntax defined by the system. The symbol may be a predefined code or an expression in a syntax defined by the coding system (e.g. post-coordination).
     */
    code?: string | undefined;
    /**
     * A representation of the meaning of the code in the system, following the rules of the system.
     */
    display?: string | undefined;
    /**
     * Amongst a set of alternatives, a directly chosen code is the most appropriate starting point for new translations. There is some ambiguity about what exactly 'directly chosen' implies, and trading partner agreement may be needed to clarify the use of this element and its consequences more completely.
     */
    userSelected?: boolean | undefined;
}
/**
 * Internal CodeableConcept - equivalent to a FHIR JSON CodeableConcept (Complex DataType), without extensions
 */
export interface FtsCodeableConcept extends FtsElement {
    /**
     * Codes may be defined very casually in enumerations, or code lists, up to very formal definitions such as SNOMED CT - see the HL7 v3 Core Principles for more information.  Ordering of codings is undefined and SHALL NOT be used to infer meaning. Generally, at most only one of the coding values will be labeled as UserSelected = true.
     */
    coding?: FtsCoding[] | undefined;
    /**
     * Very often the text is the same as a displayName of one of the codings.
     */
    text?: string | undefined;
}
/**
 * Internal OperationOutcomeIssue - equivalent to OperationOutcome.issue (Backbone Element), without extensions
 */
export interface FtsIssue extends FtsElement {
    /**
     * This is labeled as "Is Modifier" because applications should not confuse hints and warnings with errors.
     */
    severity: 'error' | 'fatal' | 'information' | 'warning' | null;
    /**
     * Describes the type of the issue. The system that creates an OperationOutcome SHALL choose the most applicable code from the IssueType value set, and may additional provide its own code for the error in the details element.
     */
    code: 'business-rule' | 'code-invalid' | 'conflict' | 'deleted' | 'duplicate' | 'exception' | 'expired' | 'extension' | 'forbidden' | 'incomplete' | 'informational' | 'invalid' | 'invariant' | 'lock-error' | 'login' | 'multiple-matches' | 'no-store' | 'not-found' | 'not-supported' | 'processing' | 'required' | 'security' | 'structure' | 'suppressed' | 'throttled' | 'timeout' | 'too-costly' | 'too-long' | 'transient' | 'unknown' | 'value' | null;
    /**
     * A human readable description of the error issue SHOULD be placed in details.text.
     */
    details?: FtsCodeableConcept | undefined;
    /**
     * This may be a description of how a value is erroneous, a stack dump to help trace the issue or other troubleshooting information.
     */
    diagnostics?: string | undefined;
    /**
     * The root of the FHIRPath is the resource or bundle that generated OperationOutcome.  Each FHIRPath SHALL resolve to a single node.
     */
    expression?: string[] | undefined;
}
export interface FhirBaseArgs {
}
export declare class FhirBase {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    static readonly _fts_regex: RegExp;
    /** Default constructor */
    constructor(source?: Partial<FhirBaseArgs>, options?: FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(_exp?: string): FtsIssue[];
    /**
     * FNV-1a implementation from https://github.com/tjwebb/fnv-plus
     * @param str
     * @returns
     */
    static _hash52_1a_fast(str: string): number;
    /**
     * Validate an Optional Scalar element
     * @param p
     * @param exp
     * @returns
     */
    vOS(p: Readonly<string>, exp: Readonly<string>): FtsIssue[];
    /**
     * Validate an Optional Scalar element bound to a Value set
     * @param p
     * @param exp
     * @param vsN
     * @param vsV
     * @param vsS
     * @returns
     */
    vOSV(p: Readonly<string>, exp: Readonly<string>, vsN: string, vsV: Readonly<string[]>, vsS: Readonly<string>): FtsIssue[];
    /**
     * Validate an Optional Array element
     * @param p
     * @param exp
     * @returns
     */
    vOA(p: Readonly<string>, exp: Readonly<string>): FtsIssue[];
    /**
     * Validate an Optional Array element bound to a Value set
     * @param p
     * @param exp
     * @param vsN
     * @param vsV
     * @param vsS
     * @returns
     */
    vOAV(p: Readonly<string>, exp: Readonly<string>, vsN: string, vsV: Readonly<string[]>, vsS: Readonly<string>): FtsIssue[];
    /**
     * Validate a Required Scalar element
     * @param p
     * @param exp
     * @returns
     */
    vRS(p: Readonly<string>, exp: Readonly<string>): FtsIssue[];
    /**
     * Validate a Required Scalar element bound to a Value set
     * @param p
     * @param exp
     * @param vsN
     * @param vsV
     * @param vsS
     * @returns
     */
    vRSV(p: Readonly<string>, exp: Readonly<string>, vsN: string, vsV: Readonly<string[]>, vsS: Readonly<string>): FtsIssue[];
    /**
     * Validate a Required Array element
     * @param p
     * @param exp
     * @returns
     */
    vRA(p: Readonly<string>, exp: Readonly<string>): FtsIssue[];
    /**
     * Validate a Required Array element bound to a Value set
     * @param p
     * @param exp
     * @param vsN
     * @param vsV
     * @param vsS
     * @returns
     */
    vRAV(p: Readonly<string>, exp: Readonly<string>, vsN: string, vsV: Readonly<string[]>, vsS: Readonly<string>): FtsIssue[];
    /**
     * Function to strip invalid element values for serialization.
     */
    toJSON(): any;
}
//# sourceMappingURL=FhirBase.d.ts.map