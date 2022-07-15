import * as fhir from '../fhirJson.js';
/**
 * Specific parameters for the ordered item.  For example, the prism value for lenses.
 */
export interface DeviceRequestParameter extends fhir.BackboneElement {
    /**
     * A code or string that identifies the device detail being asserted.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * Range means device should have a value that falls somewhere within the specified range.
     */
    valueCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Range means device should have a value that falls somewhere within the specified range.
     */
    valueQuantity?: fhir.Quantity | undefined;
    /**
     * Range means device should have a value that falls somewhere within the specified range.
     */
    valueRange?: fhir.Range | undefined;
    /**
     * Range means device should have a value that falls somewhere within the specified range.
     */
    valueBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: DeviceRequest.parameter.value[x]
     */
    _valueBoolean?: fhir.FhirElement;
}
/**
 * Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker.
 */
export interface DeviceRequest extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "DeviceRequest" | null;
    /**
     * Identifiers assigned to this order by the orderer or by the receiver.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * Note: This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
     */
    instantiatesCanonical?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: DeviceRequest.instantiatesCanonical
     */
    _instantiatesCanonical?: (fhir.FhirElement | null)[];
    /**
     * This might be an HTML page, PDF, etc. or could just be a non-resolvable URI identifier.
     */
    instantiatesUri?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: DeviceRequest.instantiatesUri
     */
    _instantiatesUri?: (fhir.FhirElement | null)[];
    /**
     * Plan/proposal/order fulfilled by this request.
     */
    basedOn?: (fhir.Reference | null)[] | undefined;
    /**
     * The request takes the place of the referenced completed or terminated request(s).
     */
    priorRequest?: (fhir.Reference | null)[] | undefined;
    /**
     * Composite request this is part of.
     */
    groupIdentifier?: fhir.Identifier | undefined;
    /**
     * This element is labeled as a modifier because the status contains the codes cancelled and entered-in-error that mark the request as not currently valid.
     */
    status?: 'active' | 'completed' | 'draft' | 'entered-in-error' | 'on-hold' | 'revoked' | 'unknown' | undefined;
    /**
     * Extended properties for primitive element: DeviceRequest.status
     */
    _status?: fhir.FhirElement;
    /**
     * Whether the request is a proposal, plan, an original order or a reflex order.
     */
    intent: 'directive' | 'filler-order' | 'instance-order' | 'option' | 'order' | 'original-order' | 'plan' | 'proposal' | 'reflex-order' | null;
    /**
     * Extended properties for primitive element: DeviceRequest.intent
     */
    _intent?: fhir.FhirElement;
    /**
     * Indicates how quickly the {{title}} should be addressed with respect to other requests.
     */
    priority?: 'asap' | 'routine' | 'stat' | 'urgent' | undefined;
    /**
     * Extended properties for primitive element: DeviceRequest.priority
     */
    _priority?: fhir.FhirElement;
    /**
     * The details of the device to be used.
     */
    codeReference?: fhir.Reference | undefined;
    /**
     * The details of the device to be used.
     */
    codeCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Specific parameters for the ordered item.  For example, the prism value for lenses.
     */
    parameter?: (fhir.DeviceRequestParameter | null)[] | undefined;
    /**
     * The patient who will use the device.
     */
    subject: fhir.Reference | null;
    /**
     * An encounter that provides additional context in which this request is made.
     */
    encounter?: fhir.Reference | undefined;
    /**
     * The timing schedule for the use of the device. The Schedule data type allows many different expressions, for example. "Every 8 hours"; "Three times a day"; "1/2 an hour before breakfast for 10 days from 23-Dec 2011:"; "15 Oct 2013, 17 Oct 2013 and 1 Nov 2013".
     */
    occurrenceDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: DeviceRequest.occurrence[x]
     */
    _occurrenceDateTime?: fhir.FhirElement;
    /**
     * The timing schedule for the use of the device. The Schedule data type allows many different expressions, for example. "Every 8 hours"; "Three times a day"; "1/2 an hour before breakfast for 10 days from 23-Dec 2011:"; "15 Oct 2013, 17 Oct 2013 and 1 Nov 2013".
     */
    occurrencePeriod?: fhir.Period | undefined;
    /**
     * The timing schedule for the use of the device. The Schedule data type allows many different expressions, for example. "Every 8 hours"; "Three times a day"; "1/2 an hour before breakfast for 10 days from 23-Dec 2011:"; "15 Oct 2013, 17 Oct 2013 and 1 Nov 2013".
     */
    occurrenceTiming?: fhir.Timing | undefined;
    /**
     * When the request transitioned to being actionable.
     */
    authoredOn?: string | undefined;
    /**
     * Extended properties for primitive element: DeviceRequest.authoredOn
     */
    _authoredOn?: fhir.FhirElement;
    /**
     * The individual who initiated the request and has responsibility for its activation.
     */
    requester?: fhir.Reference | undefined;
    /**
     * Desired type of performer for doing the diagnostic testing.
     */
    performerType?: fhir.CodeableConcept | undefined;
    /**
     * The desired performer for doing the diagnostic testing.
     */
    performer?: fhir.Reference | undefined;
    /**
     * Reason or justification for the use of this device.
     */
    reasonCode?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Reason or justification for the use of this device.
     */
    reasonReference?: (fhir.Reference | null)[] | undefined;
    /**
     * Insurance plans, coverage extensions, pre-authorizations and/or pre-determinations that may be required for delivering the requested service.
     */
    insurance?: (fhir.Reference | null)[] | undefined;
    /**
     * Additional clinical information about the patient that may influence the request fulfilment.  For example, this may include where on the subject's body the device will be used (i.e. the target site).
     */
    supportingInfo?: (fhir.Reference | null)[] | undefined;
    /**
     * Details about this request that were not represented at all or sufficiently in one of the attributes provided in a class. These may include for example a comment, an instruction, or a note associated with the statement.
     */
    note?: (fhir.Annotation | null)[] | undefined;
    /**
     * This might not include provenances for all versions of the request - only those deemed "relevant" or important.
     * This SHALL NOT include the Provenance associated with this current version of the resource.  (If that provenance is deemed to be a "relevant" change, it will need to be added as part of a later update.  Until then, it can be queried directly as the Provenance that points to this version using _revinclude
     * All Provenances should have some historical version of this Request as their subject.
     */
    relevantHistory?: (fhir.Reference | null)[] | undefined;
}
//# sourceMappingURL=DeviceRequest.d.ts.map