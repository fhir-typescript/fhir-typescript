import * as fhir from '../fhirJson.js';
/**
 * Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker.
 */
export interface DeviceUseRequest extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "DeviceUseRequest" | null;
    /**
     * Knowing where the device is targeted is important for tracking if multiple sites are possible.
     */
    bodySiteCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Knowing where the device is targeted is important for tracking if multiple sites are possible.
     */
    bodySiteReference?: fhir.Reference | undefined;
    /**
     * The status of the request.
     */
    status?: 'aborted' | 'accepted' | 'completed' | 'in-progress' | 'planned' | 'proposed' | 'received' | 'rejected' | 'requested' | 'suspended' | undefined;
    /**
     * Extended properties for primitive element: DeviceUseRequest.status
     */
    _status?: fhir.FhirElement;
    /**
     * The details of the device  to be used.
     */
    device: fhir.Reference | null;
    /**
     * An encounter that provides additional context in which this request is made.
     */
    encounter?: fhir.Reference | undefined;
    /**
     * Identifiers assigned to this order by the orderer or by the receiver.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * Reason or justification for the use of this device.
     */
    indication?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Details about this request that were not represented at all or sufficiently in one of the attributes provided in a class. These may include for example a comment, an instruction, or a note associated with the statement.
     */
    notes?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: DeviceUseRequest.notes
     */
    _notes?: (fhir.FhirElement | null)[];
    /**
     * The proposed act must be performed if the indicated conditions occur, e.g.., shortness of breath, SpO2 less than x%.
     */
    prnReason?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * The time when the request was made.
     */
    orderedOn?: string | undefined;
    /**
     * Extended properties for primitive element: DeviceUseRequest.orderedOn
     */
    _orderedOn?: fhir.FhirElement;
    /**
     * The time at which the request was made/recorded.
     */
    recordedOn?: string | undefined;
    /**
     * Extended properties for primitive element: DeviceUseRequest.recordedOn
     */
    _recordedOn?: fhir.FhirElement;
    /**
     * The patient who will use the device.
     */
    subject: fhir.Reference | null;
    /**
     * The timing schedule for the use of the device The Schedule data type allows many different expressions, for example. "Every 8 hours"; "Three times a day"; "1/2 an hour before breakfast for 10 days from 23-Dec 2011:"; "15 Oct 2013, 17 Oct 2013 and 1 Nov 2013".
     */
    timingTiming?: fhir.Timing | undefined;
    /**
     * The timing schedule for the use of the device The Schedule data type allows many different expressions, for example. "Every 8 hours"; "Three times a day"; "1/2 an hour before breakfast for 10 days from 23-Dec 2011:"; "15 Oct 2013, 17 Oct 2013 and 1 Nov 2013".
     */
    timingPeriod?: fhir.Period | undefined;
    /**
     * The timing schedule for the use of the device The Schedule data type allows many different expressions, for example. "Every 8 hours"; "Three times a day"; "1/2 an hour before breakfast for 10 days from 23-Dec 2011:"; "15 Oct 2013, 17 Oct 2013 and 1 Nov 2013".
     */
    timingDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: DeviceUseRequest.timing[x]
     */
    _timingDateTime?: fhir.FhirElement;
    /**
     * Characterizes how quickly the  use of device must be initiated. Includes concepts such as stat, urgent, routine.
     */
    priority?: 'asap' | 'routine' | 'stat' | 'urgent' | undefined;
    /**
     * Extended properties for primitive element: DeviceUseRequest.priority
     */
    _priority?: fhir.FhirElement;
}
//# sourceMappingURL=DeviceUseRequest.d.ts.map