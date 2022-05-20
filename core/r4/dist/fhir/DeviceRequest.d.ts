import * as fhir from '../fhir.js';
import { RequestStatusCodingType } from '../fhirValueSets/RequestStatusCodings.js';
import { RequestStatusCodeType } from '../fhirValueSets/RequestStatusCodes.js';
import { RequestIntentCodingType } from '../fhirValueSets/RequestIntentCodings.js';
import { RequestIntentCodeType } from '../fhirValueSets/RequestIntentCodes.js';
import { RequestPriorityCodingType } from '../fhirValueSets/RequestPriorityCodings.js';
import { RequestPriorityCodeType } from '../fhirValueSets/RequestPriorityCodes.js';
/**
 * Valid arguments for the DeviceRequestParameter type.
 */
export interface DeviceRequestParameterArgs extends fhir.BackboneElementArgs {
    /**
     * A code or string that identifies the device detail being asserted.
     */
    code?: fhir.CodeableConceptArgs | undefined;
    /**
     * Range means device should have a value that falls somewhere within the specified range.
     */
    value?: fhir.CodeableConcept | fhir.Quantity | fhir.Range | fhir.FhirBoolean | undefined;
    /**
     * Range means device should have a value that falls somewhere within the specified range.
     */
    valueCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * Range means device should have a value that falls somewhere within the specified range.
     */
    valueQuantity?: fhir.QuantityArgs | undefined;
    /**
     * Range means device should have a value that falls somewhere within the specified range.
     */
    valueRange?: fhir.RangeArgs | undefined;
    /**
     * Range means device should have a value that falls somewhere within the specified range.
     */
    valueBoolean?: fhir.FhirBoolean | boolean | undefined;
}
/**
 * Specific parameters for the ordered item.  For example, the prism value for lenses.
 */
export declare class DeviceRequestParameter extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A code or string that identifies the device detail being asserted.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * Range means device should have a value that falls somewhere within the specified range.
     */
    value?: (fhir.CodeableConcept | fhir.Quantity | fhir.Range | fhir.FhirBoolean) | undefined;
    /**
     * Internal flag to properly serialize choice-type element DeviceRequest.parameter.value[x]
     */
    protected static readonly _fts_valueIsChoice: true;
    /**
     * Default constructor for DeviceRequestParameter - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<DeviceRequestParameterArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
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
     * Note: This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
     */
    instantiatesCanonical?: fhir.FhirCanonical[] | string[] | undefined;
    /**
     * This might be an HTML page, PDF, etc. or could just be a non-resolvable URI identifier.
     */
    instantiatesUri?: fhir.FhirUri[] | string[] | undefined;
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
    status?: RequestStatusCodeType | undefined;
    /**
     * Whether the request is a proposal, plan, an original order or a reflex order.
     */
    intent: RequestIntentCodeType | null;
    /**
     * Indicates how quickly the {{title}} should be addressed with respect to other requests.
     */
    priority?: RequestPriorityCodeType | undefined;
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
     * Specific parameters for the ordered item.  For example, the prism value for lenses.
     */
    parameter?: fhir.DeviceRequestParameterArgs[] | undefined;
    /**
     * The patient who will use the device.
     */
    subject: fhir.ReferenceArgs | null;
    /**
     * An encounter that provides additional context in which this request is made.
     */
    encounter?: fhir.ReferenceArgs | undefined;
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
     * The individual who initiated the request and has responsibility for its activation.
     */
    requester?: fhir.ReferenceArgs | undefined;
    /**
     * Desired type of performer for doing the diagnostic testing.
     */
    performerType?: fhir.CodeableConceptArgs | undefined;
    /**
     * The desired performer for doing the diagnostic testing.
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
     * Insurance plans, coverage extensions, pre-authorizations and/or pre-determinations that may be required for delivering the requested service.
     */
    insurance?: fhir.ReferenceArgs[] | undefined;
    /**
     * Additional clinical information about the patient that may influence the request fulfilment.  For example, this may include where on the subject's body the device will be used (i.e. the target site).
     */
    supportingInfo?: fhir.ReferenceArgs[] | undefined;
    /**
     * Details about this request that were not represented at all or sufficiently in one of the attributes provided in a class. These may include for example a comment, an instruction, or a note associated with the statement.
     */
    note?: fhir.AnnotationArgs[] | undefined;
    /**
     * This might not include provenances for all versions of the request - only those deemed "relevant" or important.
     * This SHALL NOT include the Provenance associated with this current version of the resource.  (If that provenance is deemed to be a "relevant" change, it will need to be added as part of a later update.  Until then, it can be queried directly as the Provenance that points to this version using _revinclude
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
    identifier?: fhir.Identifier[];
    /**
     * Note: This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
     */
    instantiatesCanonical?: fhir.FhirCanonical[];
    /**
     * This might be an HTML page, PDF, etc. or could just be a non-resolvable URI identifier.
     */
    instantiatesUri?: fhir.FhirUri[];
    /**
     * Plan/proposal/order fulfilled by this request.
     */
    basedOn?: fhir.Reference[];
    /**
     * The request takes the place of the referenced completed or terminated request(s).
     */
    priorRequest?: fhir.Reference[];
    /**
     * Composite request this is part of.
     */
    groupIdentifier?: fhir.Identifier | undefined;
    /**
     * This element is labeled as a modifier because the status contains the codes cancelled and entered-in-error that mark the request as not currently valid.
     */
    status?: RequestStatusCodeType | undefined;
    /**
     * Whether the request is a proposal, plan, an original order or a reflex order.
     */
    intent: RequestIntentCodeType | null;
    /**
     * Indicates how quickly the {{title}} should be addressed with respect to other requests.
     */
    priority?: RequestPriorityCodeType | undefined;
    /**
     * The details of the device to be used.
     */
    code: (fhir.Reference | fhir.CodeableConcept) | null;
    /**
     * Internal flag to properly serialize choice-type element DeviceRequest.code[x]
     */
    protected static readonly _fts_codeIsChoice: true;
    /**
     * Specific parameters for the ordered item.  For example, the prism value for lenses.
     */
    parameter?: fhir.DeviceRequestParameter[];
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
    reasonCode?: fhir.CodeableConcept[];
    /**
     * Reason or justification for the use of this device.
     */
    reasonReference?: fhir.Reference[];
    /**
     * Insurance plans, coverage extensions, pre-authorizations and/or pre-determinations that may be required for delivering the requested service.
     */
    insurance?: fhir.Reference[];
    /**
     * Additional clinical information about the patient that may influence the request fulfilment.  For example, this may include where on the subject's body the device will be used (i.e. the target site).
     */
    supportingInfo?: fhir.Reference[];
    /**
     * Details about this request that were not represented at all or sufficiently in one of the attributes provided in a class. These may include for example a comment, an instruction, or a note associated with the statement.
     */
    note?: fhir.Annotation[];
    /**
     * This might not include provenances for all versions of the request - only those deemed "relevant" or important.
     * This SHALL NOT include the Provenance associated with this current version of the resource.  (If that provenance is deemed to be a "relevant" change, it will need to be added as part of a later update.  Until then, it can be queried directly as the Provenance that points to this version using _revinclude
     * All Provenances should have some historical version of this Request as their subject.
     */
    relevantHistory?: fhir.Reference[];
    /**
     * Default constructor for DeviceRequest - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<DeviceRequestArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for status (DeviceRequest.status)
     */
    static statusRequiredCoding(): RequestStatusCodingType;
    /**
     * Required-bound Value Set for intent (DeviceRequest.intent)
     */
    static intentRequiredCoding(): RequestIntentCodingType;
    /**
     * Required-bound Value Set for priority (DeviceRequest.priority)
     */
    static priorityRequiredCoding(): RequestPriorityCodingType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
//# sourceMappingURL=DeviceRequest.d.ts.map