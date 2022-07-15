import * as fhir from '../fhir.js';
import { DeviceUseRequestStatusCodeType } from '../fhirValueSets/DeviceUseRequestStatusCodes.js';
import { DeviceUseRequestPriorityCodeType } from '../fhirValueSets/DeviceUseRequestPriorityCodes.js';
/**
 * Valid arguments for the DeviceUseRequest type.
 */
export interface DeviceUseRequestArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "DeviceUseRequest" | undefined;
    /**
     * Knowing where the device is targeted is important for tracking if multiple sites are possible.
     */
    bodySite?: fhir.CodeableConcept | fhir.Reference | undefined;
    /**
     * Knowing where the device is targeted is important for tracking if multiple sites are possible.
     */
    bodySiteCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * Knowing where the device is targeted is important for tracking if multiple sites are possible.
     */
    bodySiteReference?: fhir.ReferenceArgs | undefined;
    /**
     * The status of the request.
     */
    status?: fhir.FhirCode<DeviceUseRequestStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: DeviceUseRequest.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * The details of the device  to be used.
     */
    device: fhir.ReferenceArgs | null;
    /**
     * An encounter that provides additional context in which this request is made.
     */
    encounter?: fhir.ReferenceArgs | undefined;
    /**
     * Identifiers assigned to this order by the orderer or by the receiver.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * Reason or justification for the use of this device.
     */
    indication?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Details about this request that were not represented at all or sufficiently in one of the attributes provided in a class. These may include for example a comment, an instruction, or a note associated with the statement.
     */
    notes?: fhir.FhirString[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: DeviceUseRequest.notes
     */
    _notes?: (fhir.FhirElementArgs | null)[];
    /**
     * The proposed act must be performed if the indicated conditions occur, e.g.., shortness of breath, SpO2 less than x%.
     */
    prnReason?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The time when the request was made.
     */
    orderedOn?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: DeviceUseRequest.orderedOn
     */
    _orderedOn?: fhir.FhirElementArgs;
    /**
     * The time at which the request was made/recorded.
     */
    recordedOn?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: DeviceUseRequest.recordedOn
     */
    _recordedOn?: fhir.FhirElementArgs;
    /**
     * The patient who will use the device.
     */
    subject: fhir.ReferenceArgs | null;
    /**
     * The timing schedule for the use of the device The Schedule data type allows many different expressions, for example. "Every 8 hours"; "Three times a day"; "1/2 an hour before breakfast for 10 days from 23-Dec 2011:"; "15 Oct 2013, 17 Oct 2013 and 1 Nov 2013".
     */
    timing?: fhir.Timing | fhir.Period | fhir.FhirDateTime | undefined;
    /**
     * The timing schedule for the use of the device The Schedule data type allows many different expressions, for example. "Every 8 hours"; "Three times a day"; "1/2 an hour before breakfast for 10 days from 23-Dec 2011:"; "15 Oct 2013, 17 Oct 2013 and 1 Nov 2013".
     */
    timingTiming?: fhir.TimingArgs | undefined;
    /**
     * The timing schedule for the use of the device The Schedule data type allows many different expressions, for example. "Every 8 hours"; "Three times a day"; "1/2 an hour before breakfast for 10 days from 23-Dec 2011:"; "15 Oct 2013, 17 Oct 2013 and 1 Nov 2013".
     */
    timingPeriod?: fhir.PeriodArgs | undefined;
    /**
     * The timing schedule for the use of the device The Schedule data type allows many different expressions, for example. "Every 8 hours"; "Three times a day"; "1/2 an hour before breakfast for 10 days from 23-Dec 2011:"; "15 Oct 2013, 17 Oct 2013 and 1 Nov 2013".
     */
    timingDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * Characterizes how quickly the  use of device must be initiated. Includes concepts such as stat, urgent, routine.
     */
    priority?: fhir.FhirCode<DeviceUseRequestPriorityCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: DeviceUseRequest.priority
     */
    _priority?: fhir.FhirElementArgs;
}
/**
 * Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker.
 */
export declare class DeviceUseRequest extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "DeviceUseRequest";
    /**
     * Knowing where the device is targeted is important for tracking if multiple sites are possible.
     */
    bodySite?: (fhir.CodeableConcept | fhir.Reference) | undefined;
    /**
     * Internal flag to properly serialize choice-type element DeviceUseRequest.bodySite[x]
     */
    protected static readonly _fts_bodySiteIsChoice: true;
    /**
     * The status of the request.
     */
    status?: fhir.FhirCode<DeviceUseRequestStatusCodeType> | undefined;
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
    identifier: fhir.Identifier[];
    /**
     * Reason or justification for the use of this device.
     */
    indication: fhir.CodeableConcept[];
    /**
     * Details about this request that were not represented at all or sufficiently in one of the attributes provided in a class. These may include for example a comment, an instruction, or a note associated with the statement.
     */
    notes: fhir.FhirString[];
    /**
     * The proposed act must be performed if the indicated conditions occur, e.g.., shortness of breath, SpO2 less than x%.
     */
    prnReason: fhir.CodeableConcept[];
    /**
     * The time when the request was made.
     */
    orderedOn?: fhir.FhirDateTime | undefined;
    /**
     * The time at which the request was made/recorded.
     */
    recordedOn?: fhir.FhirDateTime | undefined;
    /**
     * The patient who will use the device.
     */
    subject: fhir.Reference | null;
    /**
     * The timing schedule for the use of the device The Schedule data type allows many different expressions, for example. "Every 8 hours"; "Three times a day"; "1/2 an hour before breakfast for 10 days from 23-Dec 2011:"; "15 Oct 2013, 17 Oct 2013 and 1 Nov 2013".
     */
    timing?: (fhir.Timing | fhir.Period | fhir.FhirDateTime) | undefined;
    /**
     * Internal flag to properly serialize choice-type element DeviceUseRequest.timing[x]
     */
    protected static readonly _fts_timingIsChoice: true;
    /**
     * Characterizes how quickly the  use of device must be initiated. Includes concepts such as stat, urgent, routine.
     */
    priority?: fhir.FhirCode<DeviceUseRequestPriorityCodeType> | undefined;
    /**
     * Default constructor for DeviceUseRequest - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<DeviceUseRequestArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=DeviceUseRequest.d.ts.map