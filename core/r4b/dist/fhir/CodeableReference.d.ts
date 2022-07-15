import * as fhir from '../fhir.js';
/**
 * Valid arguments for the CodeableReference type.
 */
export interface CodeableReferenceArgs extends fhir.FhirElementArgs {
    /**
     * A reference to a concept - e.g. the information is identified by its general class to the degree of precision found in the terminology.
     */
    concept?: fhir.CodeableConceptArgs | undefined;
    /**
     * A reference to a resource the provides exact details about the information being referenced.
     */
    reference?: fhir.ReferenceArgs | undefined;
}
/**
 * A reference to a resource (by instance), or instead, a reference to a concept defined in a terminology or ontology (by class).
 */
export declare class CodeableReference extends fhir.FhirElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A reference to a concept - e.g. the information is identified by its general class to the degree of precision found in the terminology.
     */
    concept?: fhir.CodeableConcept | undefined;
    /**
     * A reference to a resource the provides exact details about the information being referenced.
     */
    reference?: fhir.Reference | undefined;
    /**
     * Default constructor for CodeableReference - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<CodeableReferenceArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=CodeableReference.d.ts.map