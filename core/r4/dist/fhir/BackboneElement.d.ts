import * as fhir from '../fhir.js';
/**
 * Valid arguments for the BackboneElement type.
 */
export interface BackboneElementArgs extends fhir.FhirElementArgs {
    /**
     * There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.
     */
    modifierExtension?: fhir.ExtensionArgs[] | undefined;
}
/**
 * Base definition for all elements that are defined inside a resource - but not those in a data type.
 */
export declare class BackboneElement extends fhir.FhirElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.
     */
    modifierExtension: fhir.Extension[];
    /**
     * Default constructor for BackboneElement - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<BackboneElementArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
//# sourceMappingURL=BackboneElement.d.ts.map