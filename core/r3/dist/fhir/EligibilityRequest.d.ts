import * as fhir from '../fhir.js';
import { FmStatusCodeType } from '../fhirValueSets/FmStatusCodes.js';
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
     * The status of the resource instance.
     */
    status?: fhir.FhirCode<FmStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: EligibilityRequest.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * Immediate (STAT), best effort (NORMAL), deferred (DEFER).
     */
    priority?: fhir.CodeableConceptArgs | undefined;
    /**
     * 1..1.
     */
    patient?: fhir.ReferenceArgs | undefined;
    /**
     * The date or dates when the enclosed suite of services were performed or completed.
     */
    serviced?: fhir.FhirDate | fhir.Period | undefined;
    /**
     * The date or dates when the enclosed suite of services were performed or completed.
     */
    servicedDate?: fhir.FhirDate | string | undefined;
    /**
     * The date or dates when the enclosed suite of services were performed or completed.
     */
    servicedPeriod?: fhir.PeriodArgs | undefined;
    /**
     * The date when this resource was created.
     */
    created?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: EligibilityRequest.created
     */
    _created?: fhir.FhirElementArgs;
    /**
     * Person who created the invoice/claim/pre-determination or pre-authorization.
     */
    enterer?: fhir.ReferenceArgs | undefined;
    /**
     * The practitioner who is responsible for the services rendered to the patient.
     */
    provider?: fhir.ReferenceArgs | undefined;
    /**
     * The organization which is responsible for the services rendered to the patient.
     */
    organization?: fhir.ReferenceArgs | undefined;
    /**
     * The Insurer who is target  of the request.
     */
    insurer?: fhir.ReferenceArgs | undefined;
    /**
     * Facility where the services were provided.
     */
    facility?: fhir.ReferenceArgs | undefined;
    /**
     * 1..1.
     */
    coverage?: fhir.ReferenceArgs | undefined;
    /**
     * The contract number of a business agreement which describes the terms and conditions.
     */
    businessArrangement?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: EligibilityRequest.businessArrangement
     */
    _businessArrangement?: fhir.FhirElementArgs;
    /**
     * Dental, Vision, Medical, Pharmacy, Rehab etc.
     */
    benefitCategory?: fhir.CodeableConceptArgs | undefined;
    /**
     * Dental: basic, major, ortho; Vision exam, glasses, contacts; etc.
     */
    benefitSubCategory?: fhir.CodeableConceptArgs | undefined;
}
/**
 * The EligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an EligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy.
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
     * The status of the resource instance.
     */
    status?: fhir.FhirCode<FmStatusCodeType> | undefined;
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
    serviced?: (fhir.FhirDate | fhir.Period) | undefined;
    /**
     * Internal flag to properly serialize choice-type element EligibilityRequest.serviced[x]
     */
    protected static readonly _fts_servicedIsChoice: true;
    /**
     * The date when this resource was created.
     */
    created?: fhir.FhirDateTime | undefined;
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
    businessArrangement?: fhir.FhirString | undefined;
    /**
     * Dental, Vision, Medical, Pharmacy, Rehab etc.
     */
    benefitCategory?: fhir.CodeableConcept | undefined;
    /**
     * Dental: basic, major, ortho; Vision exam, glasses, contacts; etc.
     */
    benefitSubCategory?: fhir.CodeableConcept | undefined;
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