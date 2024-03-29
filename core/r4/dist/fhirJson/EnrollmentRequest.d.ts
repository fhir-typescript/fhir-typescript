import * as fhir from '../fhirJson.js';
/**
 * This resource provides the insurance enrollment details to the insurer regarding a specified coverage.
 */
export interface EnrollmentRequest extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "EnrollmentRequest" | null;
    /**
     * The Response business identifier.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the request as not currently valid.
     */
    status?: 'active' | 'cancelled' | 'draft' | 'entered-in-error' | undefined;
    /**
     * Extended properties for primitive element: EnrollmentRequest.status
     */
    _status?: fhir.FhirElement;
    /**
     * The date when this resource was created.
     */
    created?: string | undefined;
    /**
     * Extended properties for primitive element: EnrollmentRequest.created
     */
    _created?: fhir.FhirElement;
    /**
     * The Insurer who is target  of the request.
     */
    insurer?: fhir.Reference | undefined;
    /**
     * The practitioner who is responsible for the services rendered to the patient.
     */
    provider?: fhir.Reference | undefined;
    /**
     * Patient Resource.
     */
    candidate?: fhir.Reference | undefined;
    /**
     * Reference to the program or plan identification, underwriter or payor.
     */
    coverage?: fhir.Reference | undefined;
}
//# sourceMappingURL=EnrollmentRequest.d.ts.map