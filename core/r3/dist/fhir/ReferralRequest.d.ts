import * as fhir from '../fhir.js';
import { RequestStatusCodeType } from '../fhirValueSets/RequestStatusCodes.js';
import { RequestIntentCodeType } from '../fhirValueSets/RequestIntentCodes.js';
/**
 * Valid arguments for the ReferralRequestRequester type.
 */
export interface ReferralRequestRequesterArgs extends fhir.BackboneElementArgs {
    /**
     * The device, practitioner, etc. who initiated the request.
     */
    agent: fhir.ReferenceArgs | null;
    /**
     * The organization the device or practitioner was acting on behalf of.
     */
    onBehalfOf?: fhir.ReferenceArgs | undefined;
}
/**
 * The individual who initiated the request and has responsibility for its activation.
 */
export declare class ReferralRequestRequester extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The device, practitioner, etc. who initiated the request.
     */
    agent: fhir.Reference | null;
    /**
     * The organization the device or practitioner was acting on behalf of.
     */
    onBehalfOf?: fhir.Reference | undefined;
    /**
     * Default constructor for ReferralRequestRequester - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ReferralRequestRequesterArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ReferralRequest type.
 */
export interface ReferralRequestArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "ReferralRequest" | undefined;
    /**
     * Business identifier that uniquely identifies the referral/care transfer request instance.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * A protocol, guideline, orderset or other definition that is adhered to in whole or in part by this request.
     */
    definition?: fhir.ReferenceArgs[] | undefined;
    /**
     * Indicates any plans, proposals or orders that this request is intended to satisfy - in whole or in part.
     */
    basedOn?: fhir.ReferenceArgs[] | undefined;
    /**
     * The replacement could be because the initial request was immediately rejected (due to an issue) or because the previous request was completed, but the need for the action described by the request remains ongoing.
     */
    replaces?: fhir.ReferenceArgs[] | undefined;
    /**
     * The business identifier of the logical "grouping" request/order that this referral is a part of.
     */
    groupIdentifier?: fhir.IdentifierArgs | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: fhir.FhirCode<RequestStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: ReferralRequest.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * Distinguishes the "level" of authorization/demand implicit in this request.
     */
    intent: fhir.FhirCode<RequestIntentCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: ReferralRequest.intent
     */
    _intent?: fhir.FhirElementArgs;
    /**
     * An indication of the type of referral (or where applicable the type of transfer of care) request.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * An indication of the urgency of referral (or where applicable the type of transfer of care) request.
     */
    priority?: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: ReferralRequest.priority
     */
    _priority?: fhir.FhirElementArgs;
    /**
     * The service(s) that is/are requested to be provided to the patient.  For example: cardiac pacemaker insertion.
     */
    serviceRequested?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Referral of family, group or community is to be catered for by profiles.
     */
    subject: fhir.ReferenceArgs | null;
    /**
     * The encounter at which the request for referral or transfer of care is initiated.
     */
    context?: fhir.ReferenceArgs | undefined;
    /**
     * When the occurrenceDateTime is used, then it is indicating that the requested service must happen before the specified date.
     */
    occurrence?: fhir.FhirDateTime | fhir.Period | undefined;
    /**
     * When the occurrenceDateTime is used, then it is indicating that the requested service must happen before the specified date.
     */
    occurrenceDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * When the occurrenceDateTime is used, then it is indicating that the requested service must happen before the specified date.
     */
    occurrencePeriod?: fhir.PeriodArgs | undefined;
    /**
     * Date/DateTime of creation for draft requests and date of activation for active requests.
     */
    authoredOn?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: ReferralRequest.authoredOn
     */
    _authoredOn?: fhir.FhirElementArgs;
    /**
     * The individual who initiated the request and has responsibility for its activation.
     */
    requester?: fhir.ReferralRequestRequesterArgs | undefined;
    /**
     * Indication of the clinical domain or discipline to which the referral or transfer of care request is sent.  For example: Cardiology Gastroenterology Diabetology.
     */
    specialty?: fhir.CodeableConceptArgs | undefined;
    /**
     * There will be a primary receiver. But the request can be received by any number of "copied to" providers or organizations.
     */
    recipient?: fhir.ReferenceArgs[] | undefined;
    /**
     * Description of clinical condition indicating why referral/transfer of care is requested.  For example:  Pathological Anomalies, Disabled (physical or mental),  Behavioral Management.
     */
    reasonCode?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Indicates another resource whose existence justifies this request.
     */
    reasonReference?: fhir.ReferenceArgs[] | undefined;
    /**
     * The reason element gives a short description of why the referral is being made, the description expands on this to support a more complete clinical summary.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ReferralRequest.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * Any additional (administrative, financial or clinical) information required to support request for referral or transfer of care.  For example: Presenting problems/chief complaints Medical History Family History Alerts Allergy/Intolerance and Adverse Reactions Medications Observations/Assessments (may include cognitive and fundtional assessments) Diagnostic Reports Care Plan.
     */
    supportingInfo?: fhir.ReferenceArgs[] | undefined;
    /**
     * Comments made about the referral request by any of the participants.
     */
    note?: fhir.AnnotationArgs[] | undefined;
    /**
     * This element does not point to the Provenance associated with the *current* version of the resource - as it would be created after this version existed.  The Provenance for the current version can be retrieved with a _revinclude.
     */
    relevantHistory?: fhir.ReferenceArgs[] | undefined;
}
/**
 * Used to record and send details about a request for referral service or transfer of a patient to the care of another provider or provider organization.
 */
export declare class ReferralRequest extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "ReferralRequest";
    /**
     * Business identifier that uniquely identifies the referral/care transfer request instance.
     */
    identifier: fhir.Identifier[];
    /**
     * A protocol, guideline, orderset or other definition that is adhered to in whole or in part by this request.
     */
    definition: fhir.Reference[];
    /**
     * Indicates any plans, proposals or orders that this request is intended to satisfy - in whole or in part.
     */
    basedOn: fhir.Reference[];
    /**
     * The replacement could be because the initial request was immediately rejected (due to an issue) or because the previous request was completed, but the need for the action described by the request remains ongoing.
     */
    replaces: fhir.Reference[];
    /**
     * The business identifier of the logical "grouping" request/order that this referral is a part of.
     */
    groupIdentifier?: fhir.Identifier | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: fhir.FhirCode<RequestStatusCodeType> | null;
    /**
     * Distinguishes the "level" of authorization/demand implicit in this request.
     */
    intent: fhir.FhirCode<RequestIntentCodeType> | null;
    /**
     * An indication of the type of referral (or where applicable the type of transfer of care) request.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * An indication of the urgency of referral (or where applicable the type of transfer of care) request.
     */
    priority?: fhir.FhirCode | undefined;
    /**
     * The service(s) that is/are requested to be provided to the patient.  For example: cardiac pacemaker insertion.
     */
    serviceRequested: fhir.CodeableConcept[];
    /**
     * Referral of family, group or community is to be catered for by profiles.
     */
    subject: fhir.Reference | null;
    /**
     * The encounter at which the request for referral or transfer of care is initiated.
     */
    context?: fhir.Reference | undefined;
    /**
     * When the occurrenceDateTime is used, then it is indicating that the requested service must happen before the specified date.
     */
    occurrence?: (fhir.FhirDateTime | fhir.Period) | undefined;
    /**
     * Internal flag to properly serialize choice-type element ReferralRequest.occurrence[x]
     */
    protected static readonly _fts_occurrenceIsChoice: true;
    /**
     * Date/DateTime of creation for draft requests and date of activation for active requests.
     */
    authoredOn?: fhir.FhirDateTime | undefined;
    /**
     * The individual who initiated the request and has responsibility for its activation.
     */
    requester?: fhir.ReferralRequestRequester | undefined;
    /**
     * Indication of the clinical domain or discipline to which the referral or transfer of care request is sent.  For example: Cardiology Gastroenterology Diabetology.
     */
    specialty?: fhir.CodeableConcept | undefined;
    /**
     * There will be a primary receiver. But the request can be received by any number of "copied to" providers or organizations.
     */
    recipient: fhir.Reference[];
    /**
     * Description of clinical condition indicating why referral/transfer of care is requested.  For example:  Pathological Anomalies, Disabled (physical or mental),  Behavioral Management.
     */
    reasonCode: fhir.CodeableConcept[];
    /**
     * Indicates another resource whose existence justifies this request.
     */
    reasonReference: fhir.Reference[];
    /**
     * The reason element gives a short description of why the referral is being made, the description expands on this to support a more complete clinical summary.
     */
    description?: fhir.FhirString | undefined;
    /**
     * Any additional (administrative, financial or clinical) information required to support request for referral or transfer of care.  For example: Presenting problems/chief complaints Medical History Family History Alerts Allergy/Intolerance and Adverse Reactions Medications Observations/Assessments (may include cognitive and fundtional assessments) Diagnostic Reports Care Plan.
     */
    supportingInfo: fhir.Reference[];
    /**
     * Comments made about the referral request by any of the participants.
     */
    note: fhir.Annotation[];
    /**
     * This element does not point to the Provenance associated with the *current* version of the resource - as it would be created after this version existed.  The Provenance for the current version can be retrieved with a _revinclude.
     */
    relevantHistory: fhir.Reference[];
    /**
     * Default constructor for ReferralRequest - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ReferralRequestArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=ReferralRequest.d.ts.map