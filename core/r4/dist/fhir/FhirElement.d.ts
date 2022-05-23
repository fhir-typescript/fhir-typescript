import * as fhir from '../fhir.js';
/**
 * Valid arguments for the FhirElement type.
 */
export interface FhirElementArgs extends fhir.FhirBaseArgs {
    /**
     * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
     */
    id?: fhir.FhirString | string | undefined;
    /**
     * There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.
     */
    extension?: fhir.ExtensionArgs[] | undefined;
}
/**
 * Base definition for all elements in a resource.
 */
export declare class FhirElement extends fhir.FhirBase {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
     */
    id?: fhir.FhirString | undefined;
    /**
     * There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.
     */
    extension: fhir.Extension[];
    /**
     * Default constructor for FhirElement - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<FhirElementArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
//# sourceMappingURL=FhirElement.d.ts.map