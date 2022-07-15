import * as fhir from '../fhirJson.js';
/**
 * This resource provides enrollment and plan details from the processing of an Enrollment resource.
 */
export interface EnrollmentResponse extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "EnrollmentResponse" | null;
    /**
     * The Response business identifier.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the response as not currently valid.
     */
    status?: 'active' | 'cancelled' | 'draft' | 'entered-in-error' | undefined;
    /**
     * Extended properties for primitive element: EnrollmentResponse.status
     */
    _status?: fhir.FhirElement;
    /**
     * Original request resource reference.
     */
    request?: fhir.Reference | undefined;
    /**
     * Processing status: error, complete.
     */
    outcome?: 'complete' | 'error' | 'partial' | undefined;
    /**
     * A description of the status of the adjudication.
     */
    disposition?: string | undefined;
    /**
     * Extended properties for primitive element: EnrollmentResponse.disposition
     */
    _disposition?: fhir.FhirElement;
    /**
     * The date when the enclosed suite of services were performed or completed.
     */
    created?: string | undefined;
    /**
     * Extended properties for primitive element: EnrollmentResponse.created
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
//# sourceMappingURL=EnrollmentResponse.d.ts.map