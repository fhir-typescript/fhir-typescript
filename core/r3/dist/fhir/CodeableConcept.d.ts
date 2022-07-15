import * as fhir from '../fhir.js';
/**
 * Valid arguments for the CodeableConcept type.
 */
export interface CodeableConceptArgs extends fhir.FhirElementArgs {
    /**
     * Codes may be defined very casually in enumerations, or code lists, up to very formal definitions such as SNOMED CT - see the HL7 v3 Core Principles for more information.  Ordering of codings is undefined and SHALL NOT be used to infer meaning. Generally, at most only one of the coding values will be labeled as UserSelected = true.
     */
    coding?: fhir.CodingArgs[] | undefined;
    /**
     * Very often the text is the same as a displayName of one of the codings.
     */
    text?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: CodeableConcept.text
     */
    _text?: fhir.FhirElementArgs;
}
/**
 * A concept that may be defined by a formal reference to a terminology or ontology or may be provided by text.
 */
export declare class CodeableConcept extends fhir.FhirElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Codes may be defined very casually in enumerations, or code lists, up to very formal definitions such as SNOMED CT - see the HL7 v3 Core Principles for more information.  Ordering of codings is undefined and SHALL NOT be used to infer meaning. Generally, at most only one of the coding values will be labeled as UserSelected = true.
     */
    coding: fhir.Coding[];
    /**
     * Very often the text is the same as a displayName of one of the codings.
     */
    text?: fhir.FhirString | undefined;
    /**
     * Default constructor for CodeableConcept - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CodeableConceptArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
    /**
     * Fluent-style function to add codings
     * @param coding
     * @returns this CodeableConcept, with the additional coding
     */
    addCoding(coding: fhir.CodingArgs): CodeableConcept;
    /**
     * Fluent-style function to remove ALL instances of codings with a system and/or code
     * @param system
     * @param code
     * @returns this CodeableConcept, updated without the requesting coding
     */
    removeCoding(system: fhir.FhirString | string, code: fhir.FhirString | string): CodeableConcept;
    /**
     * Find the first coding with a matching system and/or code
     * @param system
     * @param code
     * @returns A matching Coding or undefined.
     */
    findCoding(system: fhir.FhirString | string, code: fhir.FhirString | string): fhir.Coding | undefined;
    /**
     * Find all instances of an extension with a matching URL, optionally recurse into extension.extension.
     * @param url URL to search for
     * @param searchNested If the search should nest into extensions
     * @returns A new array of FHIR Extensions, with just the desired extensions
     */
    filterCodings(system: fhir.FhirString | string, code: fhir.FhirString | string): fhir.Coding[];
    /**
     * Test whether this CodeableConcept contains a specific coding.
     * @param system System to search for, empty string will match any system.
     * @param code Code to search for, empty string will match any code.
     * @returns True if this concept contains the specified coding, false if it does not.
     */
    hasCoding(system: fhir.FhirString | string, code: fhir.FhirString | string): boolean;
    /**
     * Test whether this CodeableConcept contains a specific coding.
     * @param system System to search for, empty string will match any system.
     * @param code Code to search for, empty string will match any code.
     * @returns True if this concept contains the specified coding, false if it does not.
     */
    hasCodingFromObject(codings: any): boolean;
    /**
     * Test whether this CodeableConcept contains a specific coding.
     * @param system System to search for, empty string will match any system.
     * @param code Code to search for, empty string will match any code.
     * @returns True if this concept contains the specified coding, false if it does not.
     */
    hasCodingFromValidationObj(vsValidation: Readonly<string[]>): boolean;
    /**
     * Test whether this CodeableConcept contains a specific coding.
     * @param system System to search for, empty string will match any system.
     * @param code Code to search for, empty string will match any code.
     * @returns True if this concept contains the specified coding, false if it does not.
     */
    hasCodingFromValidationHash(vsValidation: Readonly<number[]>): boolean;
}
//# sourceMappingURL=CodeableConcept.d.ts.map