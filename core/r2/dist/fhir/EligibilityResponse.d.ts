import * as fhir from '../fhir.js';
import { RemittanceOutcomeCodeType } from '../fhirValueSets/RemittanceOutcomeCodes.js';
/**
 * Valid arguments for the EligibilityResponse type.
 */
export interface EligibilityResponseArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "EligibilityResponse" | undefined;
    /**
     * The Response business identifier.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * Original request resource reference.
     */
    request?: fhir.ReferenceArgs | undefined;
    /**
     * Transaction status: error, complete.
     */
    outcome?: fhir.FhirCode<RemittanceOutcomeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: EligibilityResponse.outcome
     */
    _outcome?: fhir.FhirElementArgs;
    /**
     * A description of the status of the adjudication.
     */
    disposition?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: EligibilityResponse.disposition
     */
    _disposition?: fhir.FhirElementArgs;
    /**
     * The version of the style of resource contents. This should be mapped to the allowable profiles for this and supporting resources.
     */
    ruleset?: fhir.CodingArgs | undefined;
    /**
     * Knowledge of the original version can inform the processing of this instance so that information which is processable by the originating system may be generated.
     */
    originalRuleset?: fhir.CodingArgs | undefined;
    /**
     * The date when the enclosed suite of services were performed or completed.
     */
    created?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: EligibilityResponse.created
     */
    _created?: fhir.FhirElementArgs;
    /**
     * The Insurer who produced this adjudicated response.
     */
    organization?: fhir.ReferenceArgs | undefined;
    /**
     * The practitioner who is responsible for the services rendered to the patient.
     */
    requestProvider?: fhir.ReferenceArgs | undefined;
    /**
     * The organization which is responsible for the services rendered to the patient.
     */
    requestOrganization?: fhir.ReferenceArgs | undefined;
}
/**
 * This resource provides eligibility and plan details from the processing of an Eligibility resource.
 */
export declare class EligibilityResponse extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "EligibilityResponse";
    /**
     * The Response business identifier.
     */
    identifier: fhir.Identifier[];
    /**
     * Original request resource reference.
     */
    request?: fhir.Reference | undefined;
    /**
     * Transaction status: error, complete.
     */
    outcome?: fhir.FhirCode<RemittanceOutcomeCodeType> | undefined;
    /**
     * A description of the status of the adjudication.
     */
    disposition?: fhir.FhirString | undefined;
    /**
     * The version of the style of resource contents. This should be mapped to the allowable profiles for this and supporting resources.
     */
    ruleset?: fhir.Coding | undefined;
    /**
     * Knowledge of the original version can inform the processing of this instance so that information which is processable by the originating system may be generated.
     */
    originalRuleset?: fhir.Coding | undefined;
    /**
     * The date when the enclosed suite of services were performed or completed.
     */
    created?: fhir.FhirDateTime | undefined;
    /**
     * The Insurer who produced this adjudicated response.
     */
    organization?: fhir.Reference | undefined;
    /**
     * The practitioner who is responsible for the services rendered to the patient.
     */
    requestProvider?: fhir.Reference | undefined;
    /**
     * The organization which is responsible for the services rendered to the patient.
     */
    requestOrganization?: fhir.Reference | undefined;
    /**
     * Default constructor for EligibilityResponse - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<EligibilityResponseArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=EligibilityResponse.d.ts.map