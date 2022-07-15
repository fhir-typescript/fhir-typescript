import * as fhir from '../fhirJson.js';
/**
 * This resource provides eligibility and plan details from the processing of an Eligibility resource.
 */
export interface EligibilityResponse extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "EligibilityResponse" | null;
    /**
     * The Response business identifier.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * Original request resource reference.
     */
    request?: fhir.Reference | undefined;
    /**
     * Transaction status: error, complete.
     */
    outcome?: 'complete' | 'error' | undefined;
    /**
     * Extended properties for primitive element: EligibilityResponse.outcome
     */
    _outcome?: fhir.FhirElement;
    /**
     * A description of the status of the adjudication.
     */
    disposition?: string | undefined;
    /**
     * Extended properties for primitive element: EligibilityResponse.disposition
     */
    _disposition?: fhir.FhirElement;
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
    created?: string | undefined;
    /**
     * Extended properties for primitive element: EligibilityResponse.created
     */
    _created?: fhir.FhirElement;
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
}
//# sourceMappingURL=EligibilityResponse.d.ts.map