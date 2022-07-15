import * as fhir from '../fhirJson.js';
/**
 * Used to record and send details about a request for referral service or transfer of a patient to the care of another provider or provider organization.
 */
export interface ReferralRequest extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "ReferralRequest" | null;
    /**
     * The workflow status of the referral or transfer of care request.
     */
    status: 'accepted' | 'active' | 'cancelled' | 'completed' | 'draft' | 'rejected' | 'requested' | null;
    /**
     * Extended properties for primitive element: ReferralRequest.status
     */
    _status?: fhir.FhirElement;
    /**
     * Business identifier that uniquely identifies the referral/care transfer request instance.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * Date/DateTime of creation for draft requests and date of activation for active requests.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: ReferralRequest.date
     */
    _date?: fhir.FhirElement;
    /**
     * An indication of the type of referral (or where applicable the type of transfer of care) request.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Indication of the clinical domain or discipline to which the referral or transfer of care request is sent.  For example: Cardiology Gastroenterology Diabetology.
     */
    specialty?: fhir.CodeableConcept | undefined;
    /**
     * An indication of the urgency of referral (or where applicable the type of transfer of care) request.
     */
    priority?: fhir.CodeableConcept | undefined;
    /**
     * The patient who is the subject of a referral or transfer of care request.
     */
    patient?: fhir.Reference | undefined;
    /**
     * The healthcare provider or provider organization who/which initiated the referral/transfer of care request. Can also be  Patient (a self referral).
     */
    requester?: fhir.Reference | undefined;
    /**
     * The healthcare provider(s) or provider organization(s) who/which is to receive the referral/transfer of care request.
     */
    recipient?: (fhir.Reference | null)[] | undefined;
    /**
     * The encounter at which the request for referral or transfer of care is initiated.
     */
    encounter?: fhir.Reference | undefined;
    /**
     * Date/DateTime the request for referral or transfer of care is sent by the author.
     */
    dateSent?: string | undefined;
    /**
     * Extended properties for primitive element: ReferralRequest.dateSent
     */
    _dateSent?: fhir.FhirElement;
    /**
     * Description of clinical condition indicating why referral/transfer of care is requested.  For example:  Pathological Anomalies, Disabled (physical or mental),  Behavioral Management.
     */
    reason?: fhir.CodeableConcept | undefined;
    /**
     * The reason element gives a short description of why the referral is being made, the description expands on this to support a more complete clinical summary.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: ReferralRequest.description
     */
    _description?: fhir.FhirElement;
    /**
     * The service(s) that is/are requested to be provided to the patient.  For example: cardiac pacemaker insertion.
     */
    serviceRequested?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Any additional (administrative, financial or clinical) information required to support request for referral or transfer of care.  For example: Presenting problems/chief complaints Medical History Family History Alerts Allergy/Intolerance and Adverse Reactions Medications Observations/Assessments (may include cognitive and fundtional assessments) Diagnostic Reports Care Plan.
     */
    supportingInformation?: (fhir.Reference | null)[] | undefined;
    /**
     * Use cases: (1) to indicate that the requested service is not to happen before a specified date, and saving the start date in Period.start; (2) to indicate that the requested service must happen before a specified date, and saving the end date in Period.end; (3) to indicate that the requested service must happen during the specified dates ("start" and "end" values).
     */
    fulfillmentTime?: fhir.Period | undefined;
}
//# sourceMappingURL=ReferralRequest.d.ts.map