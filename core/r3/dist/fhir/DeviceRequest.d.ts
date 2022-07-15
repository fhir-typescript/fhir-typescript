import * as fhir from '../fhir.js';
import { RequestStatusCodeType } from '../fhirValueSets/RequestStatusCodes.js';
/**
 * Valid arguments for the DeviceRequestRequester type.
 */
export interface DeviceRequestRequesterArgs extends fhir.BackboneElementArgs {
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
export declare class DeviceRequestRequester extends fhir.BackboneElement {
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
     * Default constructor for DeviceRequestRequester - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<DeviceRequestRequesterArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the DeviceRequest type.
 */
export interface DeviceRequestArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "DeviceRequest" | undefined;
    /**
     * Identifiers assigned to this order by the orderer or by the receiver.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * Protocol or definition followed by this request. For example: The proposed act must be performed if the indicated conditions occur, e.g.., shortness of breath, SpO2 less than x%.
     */
    definition?: fhir.ReferenceArgs[] | undefined;
    /**
     * Plan/proposal/order fulfilled by this request.
     */
    basedOn?: fhir.ReferenceArgs[] | undefined;
    /**
     * The request takes the place of the referenced completed or terminated request(s).
     */
    priorRequest?: fhir.ReferenceArgs[] | undefined;
    /**
     * Composite request this is part of.
     */
    groupIdentifier?: fhir.IdentifierArgs | undefined;
    /**
     * This element is labeled as a modifier because the status contains the codes cancelled and entered-in-error that mark the request as not currently valid.
     */
    status?: fhir.FhirCode<RequestStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: DeviceRequest.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * Whether the request is a proposal, plan, an original order or a reflex order.
     */
    intent: fhir.CodeableConceptArgs | null;
    /**
     * Indicates how quickly the {{title}} should be addressed with respect to other requests.
     */
    priority?: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: DeviceRequest.priority
     */
    _priority?: fhir.FhirElementArgs;
    /**
     * The details of the device to be used.
     */
    code?: fhir.Reference | fhir.CodeableConcept | undefined;
    /**
     * The details of the device to be used.
     */
    codeReference?: fhir.ReferenceArgs | undefined;
    /**
     * The details of the device to be used.
     */
    codeCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * The patient who will use the device.
     */
    subject: fhir.ReferenceArgs | null;
    /**
     * An encounter that provides additional context in which this request is made.
     */
    context?: fhir.ReferenceArgs | undefined;
    /**
     * The timing schedule for the use of the device. The Schedule data type allows many different expressions, for example. "Every 8 hours"; "Three times a day"; "1/2 an hour before breakfast for 10 days from 23-Dec 2011:"; "15 Oct 2013, 17 Oct 2013 and 1 Nov 2013".
     */
    occurrence?: fhir.FhirDateTime | fhir.Period | fhir.Timing | undefined;
    /**
     * The timing schedule for the use of the device. The Schedule data type allows many different expressions, for example. "Every 8 hours"; "Three times a day"; "1/2 an hour before breakfast for 10 days from 23-Dec 2011:"; "15 Oct 2013, 17 Oct 2013 and 1 Nov 2013".
     */
    occurrenceDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * The timing schedule for the use of the device. The Schedule data type allows many different expressions, for example. "Every 8 hours"; "Three times a day"; "1/2 an hour before breakfast for 10 days from 23-Dec 2011:"; "15 Oct 2013, 17 Oct 2013 and 1 Nov 2013".
     */
    occurrencePeriod?: fhir.PeriodArgs | undefined;
    /**
     * The timing schedule for the use of the device. The Schedule data type allows many different expressions, for example. "Every 8 hours"; "Three times a day"; "1/2 an hour before breakfast for 10 days from 23-Dec 2011:"; "15 Oct 2013, 17 Oct 2013 and 1 Nov 2013".
     */
    occurrenceTiming?: fhir.TimingArgs | undefined;
    /**
     * When the request transitioned to being actionable.
     */
    authoredOn?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: DeviceRequest.authoredOn
     */
    _authoredOn?: fhir.FhirElementArgs;
    /**
     * The individual who initiated the request and has responsibility for its activation.
     */
    requester?: fhir.DeviceRequestRequesterArgs | undefined;
    /**
     * Desired type of performer for doing the diagnostic testing.
     */
    performerType?: fhir.CodeableConceptArgs | undefined;
    /**
     * The desired perfomer for doing the diagnostic testing.
     */
    performer?: fhir.ReferenceArgs | undefined;
    /**
     * Reason or justification for the use of this device.
     */
    reasonCode?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Reason or justification for the use of this device.
     */
    reasonReference?: fhir.ReferenceArgs[] | undefined;
    /**
     * Additional clinical information about the patient that may influence the request fulfilment.  For example, this may includes body where on the subject's the device will be used ( i.e. the target site).
     */
    supportingInfo?: fhir.ReferenceArgs[] | undefined;
    /**
     * Details about this request that were not represented at all or sufficiently in one of the attributes provided in a class. These may include for example a comment, an instruction, or a note associated with the statement.
     */
    note?: fhir.AnnotationArgs[] | undefined;
    /**
     * This may not include provenances for all versions of the request – only those deemed “relevant” or important.
     * This SHALL NOT include the Provenance associated with this current version of the resource.  (If that provenance is deemed to be a “relevant” change, it will need to be added as part of a later update.  Until then, it can be queried directly as the Provenance that points to this version using _revinclude
     * All Provenances should have some historical version of this Request as their subject.
     */
    relevantHistory?: fhir.ReferenceArgs[] | undefined;
}
/**
 * Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker.
 */
export declare class DeviceRequest extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "DeviceRequest";
    /**
     * Identifiers assigned to this order by the orderer or by the receiver.
     */
    identifier: fhir.Identifier[];
    /**
     * Protocol or definition followed by this request. For example: The proposed act must be performed if the indicated conditions occur, e.g.., shortness of breath, SpO2 less than x%.
     */
    definition: fhir.Reference[];
    /**
     * Plan/proposal/order fulfilled by this request.
     */
    basedOn: fhir.Reference[];
    /**
     * The request takes the place of the referenced completed or terminated request(s).
     */
    priorRequest: fhir.Reference[];
    /**
     * Composite request this is part of.
     */
    groupIdentifier?: fhir.Identifier | undefined;
    /**
     * This element is labeled as a modifier because the status contains the codes cancelled and entered-in-error that mark the request as not currently valid.
     */
    status?: fhir.FhirCode<RequestStatusCodeType> | undefined;
    /**
     * Whether the request is a proposal, plan, an original order or a reflex order.
     */
    intent: fhir.CodeableConcept | null;
    /**
     * Indicates how quickly the {{title}} should be addressed with respect to other requests.
     */
    priority?: fhir.FhirCode | undefined;
    /**
     * The details of the device to be used.
     */
    code: (fhir.Reference | fhir.CodeableConcept) | null;
    /**
     * Internal flag to properly serialize choice-type element DeviceRequest.code[x]
     */
    protected static readonly _fts_codeIsChoice: true;
    /**
     * The patient who will use the device.
     */
    subject: fhir.Reference | null;
    /**
     * An encounter that provides additional context in which this request is made.
     */
    context?: fhir.Reference | undefined;
    /**
     * The timing schedule for the use of the device. The Schedule data type allows many different expressions, for example. "Every 8 hours"; "Three times a day"; "1/2 an hour before breakfast for 10 days from 23-Dec 2011:"; "15 Oct 2013, 17 Oct 2013 and 1 Nov 2013".
     */
    occurrence?: (fhir.FhirDateTime | fhir.Period | fhir.Timing) | undefined;
    /**
     * Internal flag to properly serialize choice-type element DeviceRequest.occurrence[x]
     */
    protected static readonly _fts_occurrenceIsChoice: true;
    /**
     * When the request transitioned to being actionable.
     */
    authoredOn?: fhir.FhirDateTime | undefined;
    /**
     * The individual who initiated the request and has responsibility for its activation.
     */
    requester?: fhir.DeviceRequestRequester | undefined;
    /**
     * Desired type of performer for doing the diagnostic testing.
     */
    performerType?: fhir.CodeableConcept | undefined;
    /**
     * The desired perfomer for doing the diagnostic testing.
     */
    performer?: fhir.Reference | undefined;
    /**
     * Reason or justification for the use of this device.
     */
    reasonCode: fhir.CodeableConcept[];
    /**
     * Reason or justification for the use of this device.
     */
    reasonReference: fhir.Reference[];
    /**
     * Additional clinical information about the patient that may influence the request fulfilment.  For example, this may includes body where on the subject's the device will be used ( i.e. the target site).
     */
    supportingInfo: fhir.Reference[];
    /**
     * Details about this request that were not represented at all or sufficiently in one of the attributes provided in a class. These may include for example a comment, an instruction, or a note associated with the statement.
     */
    note: fhir.Annotation[];
    /**
     * This may not include provenances for all versions of the request – only those deemed “relevant” or important.
     * This SHALL NOT include the Provenance associated with this current version of the resource.  (If that provenance is deemed to be a “relevant” change, it will need to be added as part of a later update.  Until then, it can be queried directly as the Provenance that points to this version using _revinclude
     * All Provenances should have some historical version of this Request as their subject.
     */
    relevantHistory: fhir.Reference[];
    /**
     * Default constructor for DeviceRequest - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<DeviceRequestArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=DeviceRequest.d.ts.map