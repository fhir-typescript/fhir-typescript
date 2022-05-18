import * as fhir from '../fhir.js';
import { ContributorTypeCodingType } from '../fhirValueSets/ContributorTypeCodings.js';
import { ContributorTypeCodeType } from '../fhirValueSets/ContributorTypeCodes.js';
/**
 * Valid arguments for the Contributor type.
 */
export interface ContributorArgs extends fhir.FhirElementArgs {
    /**
     * The type of contributor.
     */
    type: ContributorTypeCodeType | null;
    /**
     * The name of the individual or organization responsible for the contribution.
     */
    name: fhir.FhirString | string | undefined;
    /**
     * Contact details to assist a user in finding and communicating with the contributor.
     */
    contact?: fhir.ContactDetailArgs[] | undefined;
}
/**
 * A contributor to the content of a knowledge asset, including authors, editors, reviewers, and endorsers.
 */
export declare class Contributor extends fhir.FhirElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The type of contributor.
     */
    type: ContributorTypeCodeType | null;
    /**
     * The name of the individual or organization responsible for the contribution.
     */
    name: fhir.FhirString | null;
    /**
     * Contact details to assist a user in finding and communicating with the contributor.
     */
    contact?: fhir.ContactDetail[];
    /**
     * Default constructor for Contributor - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ContributorArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for type (Contributor.type)
     */
    static typeRequiredCoding(): ContributorTypeCodingType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
//# sourceMappingURL=Contributor.d.ts.map