import * as fhir from '../fhir.js';
/**
 * Valid arguments for the Coding type.
 */
export interface CodingArgs extends fhir.FhirElementArgs {
    /**
     * Need to be unambiguous about the source of the definition of the symbol.
     */
    system?: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: Coding.system
     */
    _system?: fhir.FhirElementArgs;
    /**
     * The version of the code system which was used when choosing this code. Note that a well-maintained code system does not need the version reported, because the meaning of codes is consistent across versions. However this cannot consistently be assured. and when the meaning is not guaranteed to be consistent, the version SHOULD be exchanged.
     */
    version?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Coding.version
     */
    _version?: fhir.FhirElementArgs;
    /**
     * Need to refer to a particular code in the system.
     */
    code?: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: Coding.code
     */
    _code?: fhir.FhirElementArgs;
    /**
     * Need to be able to carry a human-readable meaning of the code for readers that do not know  the system.
     */
    display?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Coding.display
     */
    _display?: fhir.FhirElementArgs;
    /**
     * This has been identified as a clinical safety criterium - that this exact system/code pair was chosen explicitly, rather than inferred by the system based on some rules or language processing.
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
     * Need to be unambiguous about the source of the definition of the symbol.
     */
    system?: fhir.FhirUri | undefined;
    /**
     * The version of the code system which was used when choosing this code. Note that a well-maintained code system does not need the version reported, because the meaning of codes is consistent across versions. However this cannot consistently be assured. and when the meaning is not guaranteed to be consistent, the version SHOULD be exchanged.
     */
    version?: fhir.FhirString | undefined;
    /**
     * Need to refer to a particular code in the system.
     */
    code?: fhir.FhirCode | undefined;
    /**
     * Need to be able to carry a human-readable meaning of the code for readers that do not know  the system.
     */
    display?: fhir.FhirString | undefined;
    /**
     * This has been identified as a clinical safety criterium - that this exact system/code pair was chosen explicitly, rather than inferred by the system based on some rules or language processing.
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