import * as fhir from '../fhir.js';
/**
 * Valid arguments for the EligibilityRequest type.
 */
export interface EligibilityRequestArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "EligibilityRequest" | undefined;
    /**
     * The Response business identifier.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * The version of the style of resource contents. This should be mapped to the allowable profiles for this and supporting resources.
     */
    ruleset?: fhir.CodingArgs | undefined;
    /**
     * Knowledge of the original version can inform the processing of this instance so that information which is processable by the originating system may be generated.
     */
    originalRuleset?: fhir.CodingArgs | undefined;
    /**
     * The date when this resource was created.
     */
    created?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: EligibilityRequest.created
     */
    _created?: fhir.FhirElementArgs;
    /**
     * The Insurer who is target  of the request.
     */
    target?: fhir.ReferenceArgs | undefined;
    /**
     * The practitioner who is responsible for the services rendered to the patient.
     */
    provider?: fhir.ReferenceArgs | undefined;
    /**
     * The organization which is responsible for the services rendered to the patient.
     */
    organization?: fhir.ReferenceArgs | undefined;
}
/**
 * This resource provides the insurance eligibility details from the insurer regarding a specified coverage and optionally some class of service.
 */
export declare class EligibilityRequest extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "EligibilityRequest";
    /**
     * The Response business identifier.
     */
    identifier: fhir.Identifier[];
    /**
     * The version of the style of resource contents. This should be mapped to the allowable profiles for this and supporting resources.
     */
    ruleset?: fhir.Coding | undefined;
    /**
     * Knowledge of the original version can inform the processing of this instance so that information which is processable by the originating system may be generated.
     */
    originalRuleset?: fhir.Coding | undefined;
    /**
     * The date when this resource was created.
     */
    created?: fhir.FhirDateTime | undefined;
    /**
     * The Insurer who is target  of the request.
     */
    target?: fhir.Reference | undefined;
    /**
     * The practitioner who is responsible for the services rendered to the patient.
     */
    provider?: fhir.Reference | undefined;
    /**
     * The organization which is responsible for the services rendered to the patient.
     */
    organization?: fhir.Reference | undefined;
    /**
     * Default constructor for EligibilityRequest - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<EligibilityRequestArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=EligibilityRequest.d.ts.map