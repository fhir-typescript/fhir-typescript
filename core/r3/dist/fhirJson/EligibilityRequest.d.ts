import * as fhir from '../fhirJson.js';
/**
 * The EligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an EligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy.
 */
export interface EligibilityRequest extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "EligibilityRequest" | null;
    /**
     * The Response business identifier.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * The status of the resource instance.
     */
    status?: 'active' | 'cancelled' | 'draft' | 'entered-in-error' | undefined;
    /**
     * Extended properties for primitive element: EligibilityRequest.status
     */
    _status?: fhir.FhirElement;
    /**
     * Immediate (STAT), best effort (NORMAL), deferred (DEFER).
     */
    priority?: fhir.CodeableConcept | undefined;
    /**
     * 1..1.
     */
    patient?: fhir.Reference | undefined;
    /**
     * The date or dates when the enclosed suite of services were performed or completed.
     */
    servicedDate?: string | undefined;
    /**
     * Extended properties for primitive element: EligibilityRequest.serviced[x]
     */
    _servicedDate?: fhir.FhirElement;
    /**
     * The date or dates when the enclosed suite of services were performed or completed.
     */
    servicedPeriod?: fhir.Period | undefined;
    /**
     * The date when this resource was created.
     */
    created?: string | undefined;
    /**
     * Extended properties for primitive element: EligibilityRequest.created
     */
    _created?: fhir.FhirElement;
    /**
     * Person who created the invoice/claim/pre-determination or pre-authorization.
     */
    enterer?: fhir.Reference | undefined;
    /**
     * The practitioner who is responsible for the services rendered to the patient.
     */
    provider?: fhir.Reference | undefined;
    /**
     * The organization which is responsible for the services rendered to the patient.
     */
    organization?: fhir.Reference | undefined;
    /**
     * The Insurer who is target  of the request.
     */
    insurer?: fhir.Reference | undefined;
    /**
     * Facility where the services were provided.
     */
    facility?: fhir.Reference | undefined;
    /**
     * 1..1.
     */
    coverage?: fhir.Reference | undefined;
    /**
     * The contract number of a business agreement which describes the terms and conditions.
     */
    businessArrangement?: string | undefined;
    /**
     * Extended properties for primitive element: EligibilityRequest.businessArrangement
     */
    _businessArrangement?: fhir.FhirElement;
    /**
     * Dental, Vision, Medical, Pharmacy, Rehab etc.
     */
    benefitCategory?: fhir.CodeableConcept | undefined;
    /**
     * Dental: basic, major, ortho; Vision exam, glasses, contacts; etc.
     */
    benefitSubCategory?: fhir.CodeableConcept | undefined;
}
//# sourceMappingURL=EligibilityRequest.d.ts.map