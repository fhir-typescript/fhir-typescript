import * as fhir from '../fhirJson.js';
/**
 * This not the dispatcher, but rather who is the authorizer.
 */
export interface ProcedureRequestRequester extends fhir.BackboneElement {
    /**
     * The device, practitioner or organization who initiated the request.
     */
    agent: fhir.Reference | null;
    /**
     * The organization the device or practitioner was acting on behalf of.
     */
    onBehalfOf?: fhir.Reference | undefined;
}
/**
 * A record of a request for diagnostic investigations, treatments, or operations to be performed.
 */
export interface ProcedureRequest extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "ProcedureRequest" | null;
    /**
     * The identifier.type element is used to distinguish between the identifiers assigned by the orderer (known as the 'Placer' in HL7 v2) and the producer of the observations in response to the order (known as the 'Filler' in HL7 v2).  For further discussion and examples see the resource notes section below.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * Protocol or definition followed by this request.
     */
    definition?: (fhir.Reference | null)[] | undefined;
    /**
     * Plan/proposal/order fulfilled by this request.
     */
    basedOn?: (fhir.Reference | null)[] | undefined;
    /**
     * The request takes the place of the referenced completed or terminated request(s).
     */
    replaces?: (fhir.Reference | null)[] | undefined;
    /**
     * Requests are linked either by a "basedOn" relationship (i.e. one request is fulfilling another) or by having a common requisition. Requests that are part of the same requisition are generally treated independently from the perspective of changing their state or maintaining them after initial creation.
     */
    requisition?: fhir.Identifier | undefined;
    /**
     * The status is generally fully in the control of the requester - they determine whether the order is draft or active and, after it has been activated, competed, cancelled or suspended. States relating to the activities of the performer are reflected on either the corresponding event (see [Event Pattern](event.html) for general discussion) or using the [Task](task.html) resource.
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: 'active' | 'cancelled' | 'completed' | 'draft' | 'entered-in-error' | 'suspended' | 'unknown' | null;
    /**
     * Extended properties for primitive element: ProcedureRequest.status
     */
    _status?: fhir.FhirElement;
    /**
     * This element is labeled as a modifier because the intent alters when and how the resource is actually applicable.
     */
    intent: 'filler-order' | 'instance-order' | 'option' | 'order' | 'original-order' | 'plan' | 'proposal' | 'reflex-order' | null;
    /**
     * Extended properties for primitive element: ProcedureRequest.intent
     */
    _intent?: fhir.FhirElement;
    /**
     * Indicates how quickly the ProcedureRequest should be addressed with respect to other requests.
     */
    priority?: 'asap' | 'routine' | 'stat' | 'urgent' | undefined;
    /**
     * Extended properties for primitive element: ProcedureRequest.priority
     */
    _priority?: fhir.FhirElement;
    /**
     * This element is labeled as a [modifier](conformance-rules.html#isModifier.html) because it indicates that a procedure shouldn't happen, instead of a request for it to happen.  In general, only the code and timeframe will be present, though occasional additional qualifiers such as body site or even performer could be included to narrow the scope of the prohibition.  If the ProcedureRequest.code and ProcedureRequest.doNotPerform both contain negation, that will reinforce prohibition and should not have a double negative interpretation.
     */
    doNotPerform?: boolean | undefined;
    /**
     * Extended properties for primitive element: ProcedureRequest.doNotPerform
     */
    _doNotPerform?: fhir.FhirElement;
    /**
     * There may be multiple axis of categorization depending on the context or use case for retrieving or displaying the resource.  The level of granularity is defined by the category concepts in the value set.
     */
    category?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Many laboratory and radiology procedure codes embed the specimen/organ system in the test ordeer name, for example,  serum or serum/plasma glucose, or a chest xray. The specimen may not be recorded separately from the test code.
     */
    code: fhir.CodeableConcept | null;
    /**
     * On whom or what the procedure or diagnostic is to be performed. This is usually a human patient, but can also be requested on animals, groups of humans or animals, devices such as dialysis machines, or even locations (typically for environmental scans).
     */
    subject: fhir.Reference | null;
    /**
     * An encounter or episode of care that provides additional information about the healthcare context in which this request is made.
     */
    context?: fhir.Reference | undefined;
    /**
     * The date/time at which the diagnostic testing should occur.
     */
    occurrenceDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: ProcedureRequest.occurrence[x]
     */
    _occurrenceDateTime?: fhir.FhirElement;
    /**
     * The date/time at which the diagnostic testing should occur.
     */
    occurrencePeriod?: fhir.Period | undefined;
    /**
     * The date/time at which the diagnostic testing should occur.
     */
    occurrenceTiming?: fhir.Timing | undefined;
    /**
     * If a CodeableConcept is present, it indicates the pre-condition for performing the procedure.  For example "pain", "on flare-up", etc.
     */
    asNeededBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: ProcedureRequest.asNeeded[x]
     */
    _asNeededBoolean?: fhir.FhirElement;
    /**
     * If a CodeableConcept is present, it indicates the pre-condition for performing the procedure.  For example "pain", "on flare-up", etc.
     */
    asNeededCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * When the request transitioned to being actionable.
     */
    authoredOn?: string | undefined;
    /**
     * Extended properties for primitive element: ProcedureRequest.authoredOn
     */
    _authoredOn?: fhir.FhirElement;
    /**
     * This not the dispatcher, but rather who is the authorizer.
     */
    requester?: fhir.ProcedureRequestRequester | undefined;
    /**
     * this is a  role, not  a participation type.  I.e. does not describe the task, but describes the capacity.  For example, “compounding pharmacy” or “psychiatrist” or “internal referral”.
     */
    performerType?: fhir.CodeableConcept | undefined;
    /**
     * If needed, use an [extension](extensibility.html) for listing alternative performers and/or roles and/or preference.
     */
    performer?: fhir.Reference | undefined;
    /**
     * This may be used to decide how the diagnostic investigation will be performed, or even if it will be performed at all.   Use CodeableConcept text element if the data is free (uncoded) text as shown in the [CT Scan example](procedurerequest-example-di.html).
     */
    reasonCode?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * This may be used to decide how the diagnostic investigation will be performed, or even if it will be performed at all.   Use CodeableConcept text element if the data is free (uncoded) text as shown in the [CT Scan example](procedurerequest-example-di.html).
     */
    reasonReference?: (fhir.Reference | null)[] | undefined;
    /**
     * Additional clinical information about the patient or specimen that may influence the procedure or diagnostics or their interpretations.     This information includes diagnosis, clinical findings and other observations.  In laboratory ordering these are typically referred to as "ask at order entry questions (AOEs)".  This includes observations explicitly requested by the producer (filler) to provide context or supporting information needed to complete the order. For example,  reporting the amount of inspired oxygen for blood gas measurements.
     */
    supportingInfo?: (fhir.Reference | null)[] | undefined;
    /**
     * Many diagnostic procedures need a specimen, but the request itself is not actually about the specimen. This element is for when the diagnostic is requested on already existing specimens and the request points to the specimen it applies to.    Conversely, If the request is entered first with an unknown specimen, The [Specimen](specimen.html) resource references to the ProcedureRequest.
     */
    specimen?: (fhir.Reference | null)[] | undefined;
    /**
     * Only used if not implicit in the code found in ProcedureRequest.type.  If the use case requires BodySite to be handled as a separate resource instead of an inline coded element (e.g. to identify and track separately)  then use the standard extension [procedurerequest-targetBodySite](extension-procedurerequest-targetbodysite.html).
     */
    bodySite?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Any other notes and comments made about the service request. For example, letting provider know that "patient hates needles" or other provider instructions.
     */
    note?: (fhir.Annotation | null)[] | undefined;
    /**
     * This may not include provenances for all versions of the request – only those deemed “relevant” or important.
     * This SHALL NOT include the Provenance associated with this current version of the resource.  (If that provenance is deemed to be a “relevant” change, it will need to be added as part of a later update.  Until then, it can be queried directly as the Provenance that points to this version using _revinclude
     * All Provenances should have some historical version of this Request as their subject.
     */
    relevantHistory?: (fhir.Reference | null)[] | undefined;
}
//# sourceMappingURL=ProcedureRequest.d.ts.map