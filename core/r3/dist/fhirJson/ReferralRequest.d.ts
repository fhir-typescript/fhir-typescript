import * as fhir from '../fhirJson.js';
/**
 * The individual who initiated the request and has responsibility for its activation.
 */
export interface ReferralRequestRequester extends fhir.BackboneElement {
    /**
     * The device, practitioner, etc. who initiated the request.
     */
    agent: fhir.Reference | null;
    /**
     * The organization the device or practitioner was acting on behalf of.
     */
    onBehalfOf?: fhir.Reference | undefined;
}
/**
 * Used to record and send details about a request for referral service or transfer of a patient to the care of another provider or provider organization.
 */
export interface ReferralRequest extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "ReferralRequest" | null;
    /**
     * Business identifier that uniquely identifies the referral/care transfer request instance.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * A protocol, guideline, orderset or other definition that is adhered to in whole or in part by this request.
     */
    definition?: (fhir.Reference | null)[] | undefined;
    /**
     * Indicates any plans, proposals or orders that this request is intended to satisfy - in whole or in part.
     */
    basedOn?: (fhir.Reference | null)[] | undefined;
    /**
     * The replacement could be because the initial request was immediately rejected (due to an issue) or because the previous request was completed, but the need for the action described by the request remains ongoing.
     */
    replaces?: (fhir.Reference | null)[] | undefined;
    /**
     * The business identifier of the logical "grouping" request/order that this referral is a part of.
     */
    groupIdentifier?: fhir.Identifier | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: 'active' | 'cancelled' | 'completed' | 'draft' | 'entered-in-error' | 'suspended' | 'unknown' | null;
    /**
     * Extended properties for primitive element: ReferralRequest.status
     */
    _status?: fhir.FhirElement;
    /**
     * Distinguishes the "level" of authorization/demand implicit in this request.
     */
    intent: 'filler-order' | 'instance-order' | 'option' | 'order' | 'original-order' | 'plan' | 'proposal' | 'reflex-order' | null;
    /**
     * Extended properties for primitive element: ReferralRequest.intent
     */
    _intent?: fhir.FhirElement;
    /**
     * An indication of the type of referral (or where applicable the type of transfer of care) request.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * An indication of the urgency of referral (or where applicable the type of transfer of care) request.
     */
    priority?: 'asap' | 'routine' | 'stat' | 'urgent' | undefined;
    /**
     * Extended properties for primitive element: ReferralRequest.priority
     */
    _priority?: fhir.FhirElement;
    /**
     * The service(s) that is/are requested to be provided to the patient.  For example: cardiac pacemaker insertion.
     */
    serviceRequested?: (fhir.CodeableConcept | null)[] | undefined;
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
    occurrenceDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: ReferralRequest.occurrence[x]
     */
    _occurrenceDateTime?: fhir.FhirElement;
    /**
     * When the occurrenceDateTime is used, then it is indicating that the requested service must happen before the specified date.
     */
    occurrencePeriod?: fhir.Period | undefined;
    /**
     * Date/DateTime of creation for draft requests and date of activation for active requests.
     */
    authoredOn?: string | undefined;
    /**
     * Extended properties for primitive element: ReferralRequest.authoredOn
     */
    _authoredOn?: fhir.FhirElement;
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
    recipient?: (fhir.Reference | null)[] | undefined;
    /**
     * Description of clinical condition indicating why referral/transfer of care is requested.  For example:  Pathological Anomalies, Disabled (physical or mental),  Behavioral Management.
     */
    reasonCode?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Indicates another resource whose existence justifies this request.
     */
    reasonReference?: (fhir.Reference | null)[] | undefined;
    /**
     * The reason element gives a short description of why the referral is being made, the description expands on this to support a more complete clinical summary.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: ReferralRequest.description
     */
    _description?: fhir.FhirElement;
    /**
     * Any additional (administrative, financial or clinical) information required to support request for referral or transfer of care.  For example: Presenting problems/chief complaints Medical History Family History Alerts Allergy/Intolerance and Adverse Reactions Medications Observations/Assessments (may include cognitive and fundtional assessments) Diagnostic Reports Care Plan.
     */
    supportingInfo?: (fhir.Reference | null)[] | undefined;
    /**
     * Comments made about the referral request by any of the participants.
     */
    note?: (fhir.Annotation | null)[] | undefined;
    /**
     * This element does not point to the Provenance associated with the *current* version of the resource - as it would be created after this version existed.  The Provenance for the current version can be retrieved with a _revinclude.
     */
    relevantHistory?: (fhir.Reference | null)[] | undefined;
}
//# sourceMappingURL=ReferralRequest.d.ts.map