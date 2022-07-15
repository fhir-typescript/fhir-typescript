import * as fhir from '../fhir.js';
/**
 * Valid arguments for the Annotation type.
 */
export interface AnnotationArgs extends fhir.FhirElementArgs {
    /**
     * The individual responsible for making the annotation.
     */
    author?: fhir.Reference | fhir.FhirString | undefined;
    /**
     * The individual responsible for making the annotation.
     */
    authorReference?: fhir.ReferenceArgs | undefined;
    /**
     * The individual responsible for making the annotation.
     */
    authorString?: fhir.FhirString | string | undefined;
    /**
     * Indicates when this particular annotation was made.
     */
    time?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: Annotation.time
     */
    _time?: fhir.FhirElementArgs;
    /**
     * The text of the annotation.
     */
    text: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Annotation.text
     */
    _text?: fhir.FhirElementArgs;
}
/**
 * A  text note which also  contains information about who made the statement and when.
 */
export declare class Annotation extends fhir.FhirElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The individual responsible for making the annotation.
     */
    author?: (fhir.Reference | fhir.FhirString) | undefined;
    /**
     * Internal flag to properly serialize choice-type element Annotation.author[x]
     */
    protected static readonly _fts_authorIsChoice: true;
    /**
     * Indicates when this particular annotation was made.
     */
    time?: fhir.FhirDateTime | undefined;
    /**
     * The text of the annotation.
     */
    text: fhir.FhirString | null;
    /**
     * Default constructor for Annotation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<AnnotationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=Annotation.d.ts.map