import * as fhir from '../fhir.js';
import { FmStatusCodeType } from '../fhirValueSets/FmStatusCodes.js';
import { RemittanceOutcomeCodeType } from '../fhirValueSets/RemittanceOutcomeCodes.js';
/**
 * Valid arguments for the EnrollmentResponse type.
 */
export interface EnrollmentResponseArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "EnrollmentResponse" | undefined;
    /**
     * The Response business identifier.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the response as not currently valid.
     */
    status?: fhir.FhirCode<FmStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: EnrollmentResponse.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * Original request resource reference.
     */
    request?: fhir.ReferenceArgs | undefined;
    /**
     * Processing status: error, complete.
     */
    outcome?: fhir.FhirCode<RemittanceOutcomeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: EnrollmentResponse.outcome
     */
    _outcome?: fhir.FhirElementArgs;
    /**
     * A description of the status of the adjudication.
     */
    disposition?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: EnrollmentResponse.disposition
     */
    _disposition?: fhir.FhirElementArgs;
    /**
     * The date when the enclosed suite of services were performed or completed.
     */
    created?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: EnrollmentResponse.created
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
}
/**
 * This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource.
 */
export declare class EnrollmentResponse extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "EnrollmentResponse";
    /**
     * The Response business identifier.
     */
    identifier: fhir.Identifier[];
    /**
     * This element is labeled as a modifier because the status contains codes that mark the response as not currently valid.
     */
    status?: fhir.FhirCode<FmStatusCodeType> | undefined;
    /**
     * Original request resource reference.
     */
    request?: fhir.Reference | undefined;
    /**
     * Processing status: error, complete.
     */
    outcome?: fhir.FhirCode<RemittanceOutcomeCodeType> | undefined;
    /**
     * A description of the status of the adjudication.
     */
    disposition?: fhir.FhirString | undefined;
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
     * Default constructor for EnrollmentResponse - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<EnrollmentResponseArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=EnrollmentResponse.d.ts.map