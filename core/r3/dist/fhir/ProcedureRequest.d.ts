import * as fhir from '../fhir.js';
import { RequestStatusCodeType } from '../fhirValueSets/RequestStatusCodes.js';
import { RequestIntentCodeType } from '../fhirValueSets/RequestIntentCodes.js';
import { RequestPriorityCodeType } from '../fhirValueSets/RequestPriorityCodes.js';
/**
 * Valid arguments for the ProcedureRequestRequester type.
 */
export interface ProcedureRequestRequesterArgs extends fhir.BackboneElementArgs {
    /**
     * The device, practitioner or organization who initiated the request.
     */
    agent: fhir.ReferenceArgs | null;
    /**
     * The organization the device or practitioner was acting on behalf of.
     */
    onBehalfOf?: fhir.ReferenceArgs | undefined;
}
/**
 * This not the dispatcher, but rather who is the authorizer.
 */
export declare class ProcedureRequestRequester extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The device, practitioner or organization who initiated the request.
     */
    agent: fhir.Reference | null;
    /**
     * The organization the device or practitioner was acting on behalf of.
     */
    onBehalfOf?: fhir.Reference | undefined;
    /**
     * Default constructor for ProcedureRequestRequester - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ProcedureRequestRequesterArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ProcedureRequest type.
 */
export interface ProcedureRequestArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "ProcedureRequest" | undefined;
    /**
     * The identifier.type element is used to distinguish between the identifiers assigned by the orderer (known as the 'Placer' in HL7 v2) and the producer of the observations in response to the order (known as the 'Filler' in HL7 v2).  For further discussion and examples see the resource notes section below.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * Protocol or definition followed by this request.
     */
    definition?: fhir.ReferenceArgs[] | undefined;
    /**
     * Plan/proposal/order fulfilled by this request.
     */
    basedOn?: fhir.ReferenceArgs[] | undefined;
    /**
     * The request takes the place of the referenced completed or terminated request(s).
     */
    replaces?: fhir.ReferenceArgs[] | undefined;
    /**
     * Requests are linked either by a "basedOn" relationship (i.e. one request is fulfilling another) or by having a common requisition. Requests that are part of the same requisition are generally treated independently from the perspective of changing their state or maintaining them after initial creation.
     */
    requisition?: fhir.IdentifierArgs | undefined;
    /**
     * The status is generally fully in the control of the requester - they determine whether the order is draft or active and, after it has been activated, competed, cancelled or suspended. States relating to the activities of the performer are reflected on either the corresponding event (see [Event Pattern](event.html) for general discussion) or using the [Task](task.html) resource.
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: fhir.FhirCode<RequestStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: ProcedureRequest.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * This element is labeled as a modifier because the intent alters when and how the resource is actually applicable.
     */
    intent: fhir.FhirCode<RequestIntentCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: ProcedureRequest.intent
     */
    _intent?: fhir.FhirElementArgs;
    /**
     * Indicates how quickly the ProcedureRequest should be addressed with respect to other requests.
     */
    priority?: fhir.FhirCode<RequestPriorityCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: ProcedureRequest.priority
     */
    _priority?: fhir.FhirElementArgs;
    /**
     * This element is labeled as a [modifier](conformance-rules.html#isModifier.html) because it indicates that a procedure shouldn't happen, instead of a request for it to happen.  In general, only the code and timeframe will be present, though occasional additional qualifiers such as body site or even performer could be included to narrow the scope of the prohibition.  If the ProcedureRequest.code and ProcedureRequest.doNotPerform both contain negation, that will reinforce prohibition and should not have a double negative interpretation.
     */
    doNotPerform?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: ProcedureRequest.doNotPerform
     */
    _doNotPerform?: fhir.FhirElementArgs;
    /**
     * There may be multiple axis of categorization depending on the context or use case for retrieving or displaying the resource.  The level of granularity is defined by the category concepts in the value set.
     */
    category?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Many laboratory and radiology procedure codes embed the specimen/organ system in the test ordeer name, for example,  serum or serum/plasma glucose, or a chest xray. The specimen may not be recorded separately from the test code.
     */
    code: fhir.CodeableConceptArgs | null;
    /**
     * On whom or what the procedure or diagnostic is to be performed. This is usually a human patient, but can also be requested on animals, groups of humans or animals, devices such as dialysis machines, or even locations (typically for environmental scans).
     */
    subject: fhir.ReferenceArgs | null;
    /**
     * An encounter or episode of care that provides additional information about the healthcare context in which this request is made.
     */
    context?: fhir.ReferenceArgs | undefined;
    /**
     * The date/time at which the diagnostic testing should occur.
     */
    occurrence?: fhir.FhirDateTime | fhir.Period | fhir.Timing | undefined;
    /**
     * The date/time at which the diagnostic testing should occur.
     */
    occurrenceDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * The date/time at which the diagnostic testing should occur.
     */
    occurrencePeriod?: fhir.PeriodArgs | undefined;
    /**
     * The date/time at which the diagnostic testing should occur.
     */
    occurrenceTiming?: fhir.TimingArgs | undefined;
    /**
     * If a CodeableConcept is present, it indicates the pre-condition for performing the procedure.  For example "pain", "on flare-up", etc.
     */
    asNeeded?: fhir.FhirBoolean | fhir.CodeableConcept | undefined;
    /**
     * If a CodeableConcept is present, it indicates the pre-condition for performing the procedure.  For example "pain", "on flare-up", etc.
     */
    asNeededBoolean?: fhir.FhirBoolean | boolean | undefined;
    /**
     * If a CodeableConcept is present, it indicates the pre-condition for performing the procedure.  For example "pain", "on flare-up", etc.
     */
    asNeededCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * When the request transitioned to being actionable.
     */
    authoredOn?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: ProcedureRequest.authoredOn
     */
    _authoredOn?: fhir.FhirElementArgs;
    /**
     * This not the dispatcher, but rather who is the authorizer.
     */
    requester?: fhir.ProcedureRequestRequesterArgs | undefined;
    /**
     * this is a  role, not  a participation type.  I.e. does not describe the task, but describes the capacity.  For example, “compounding pharmacy” or “psychiatrist” or “internal referral”.
     */
    performerType?: fhir.CodeableConceptArgs | undefined;
    /**
     * If needed, use an [extension](extensibility.html) for listing alternative performers and/or roles and/or preference.
     */
    performer?: fhir.ReferenceArgs | undefined;
    /**
     * This may be used to decide how the diagnostic investigation will be performed, or even if it will be performed at all.   Use CodeableConcept text element if the data is free (uncoded) text as shown in the [CT Scan example](procedurerequest-example-di.html).
     */
    reasonCode?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * This may be used to decide how the diagnostic investigation will be performed, or even if it will be performed at all.   Use CodeableConcept text element if the data is free (uncoded) text as shown in the [CT Scan example](procedurerequest-example-di.html).
     */
    reasonReference?: fhir.ReferenceArgs[] | undefined;
    /**
     * Additional clinical information about the patient or specimen that may influence the procedure or diagnostics or their interpretations.     This information includes diagnosis, clinical findings and other observations.  In laboratory ordering these are typically referred to as "ask at order entry questions (AOEs)".  This includes observations explicitly requested by the producer (filler) to provide context or supporting information needed to complete the order. For example,  reporting the amount of inspired oxygen for blood gas measurements.
     */
    supportingInfo?: fhir.ReferenceArgs[] | undefined;
    /**
     * Many diagnostic procedures need a specimen, but the request itself is not actually about the specimen. This element is for when the diagnostic is requested on already existing specimens and the request points to the specimen it applies to.    Conversely, If the request is entered first with an unknown specimen, The [Specimen](specimen.html) resource references to the ProcedureRequest.
     */
    specimen?: fhir.ReferenceArgs[] | undefined;
    /**
     * Only used if not implicit in the code found in ProcedureRequest.type.  If the use case requires BodySite to be handled as a separate resource instead of an inline coded element (e.g. to identify and track separately)  then use the standard extension [procedurerequest-targetBodySite](extension-procedurerequest-targetbodysite.html).
     */
    bodySite?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Any other notes and comments made about the service request. For example, letting provider know that "patient hates needles" or other provider instructions.
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
 * A record of a request for diagnostic investigations, treatments, or operations to be performed.
 */
export declare class ProcedureRequest extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "ProcedureRequest";
    /**
     * The identifier.type element is used to distinguish between the identifiers assigned by the orderer (known as the 'Placer' in HL7 v2) and the producer of the observations in response to the order (known as the 'Filler' in HL7 v2).  For further discussion and examples see the resource notes section below.
     */
    identifier: fhir.Identifier[];
    /**
     * Protocol or definition followed by this request.
     */
    definition: fhir.Reference[];
    /**
     * Plan/proposal/order fulfilled by this request.
     */
    basedOn: fhir.Reference[];
    /**
     * The request takes the place of the referenced completed or terminated request(s).
     */
    replaces: fhir.Reference[];
    /**
     * Requests are linked either by a "basedOn" relationship (i.e. one request is fulfilling another) or by having a common requisition. Requests that are part of the same requisition are generally treated independently from the perspective of changing their state or maintaining them after initial creation.
     */
    requisition?: fhir.Identifier | undefined;
    /**
     * The status is generally fully in the control of the requester - they determine whether the order is draft or active and, after it has been activated, competed, cancelled or suspended. States relating to the activities of the performer are reflected on either the corresponding event (see [Event Pattern](event.html) for general discussion) or using the [Task](task.html) resource.
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: fhir.FhirCode<RequestStatusCodeType> | null;
    /**
     * This element is labeled as a modifier because the intent alters when and how the resource is actually applicable.
     */
    intent: fhir.FhirCode<RequestIntentCodeType> | null;
    /**
     * Indicates how quickly the ProcedureRequest should be addressed with respect to other requests.
     */
    priority?: fhir.FhirCode<RequestPriorityCodeType> | undefined;
    /**
     * This element is labeled as a [modifier](conformance-rules.html#isModifier.html) because it indicates that a procedure shouldn't happen, instead of a request for it to happen.  In general, only the code and timeframe will be present, though occasional additional qualifiers such as body site or even performer could be included to narrow the scope of the prohibition.  If the ProcedureRequest.code and ProcedureRequest.doNotPerform both contain negation, that will reinforce prohibition and should not have a double negative interpretation.
     */
    doNotPerform?: fhir.FhirBoolean | undefined;
    /**
     * There may be multiple axis of categorization depending on the context or use case for retrieving or displaying the resource.  The level of granularity is defined by the category concepts in the value set.
     */
    category: fhir.CodeableConcept[];
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
    occurrence?: (fhir.FhirDateTime | fhir.Period | fhir.Timing) | undefined;
    /**
     * Internal flag to properly serialize choice-type element ProcedureRequest.occurrence[x]
     */
    protected static readonly _fts_occurrenceIsChoice: true;
    /**
     * If a CodeableConcept is present, it indicates the pre-condition for performing the procedure.  For example "pain", "on flare-up", etc.
     */
    asNeeded?: (fhir.FhirBoolean | fhir.CodeableConcept) | undefined;
    /**
     * Internal flag to properly serialize choice-type element ProcedureRequest.asNeeded[x]
     */
    protected static readonly _fts_asNeededIsChoice: true;
    /**
     * When the request transitioned to being actionable.
     */
    authoredOn?: fhir.FhirDateTime | undefined;
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
    reasonCode: fhir.CodeableConcept[];
    /**
     * This may be used to decide how the diagnostic investigation will be performed, or even if it will be performed at all.   Use CodeableConcept text element if the data is free (uncoded) text as shown in the [CT Scan example](procedurerequest-example-di.html).
     */
    reasonReference: fhir.Reference[];
    /**
     * Additional clinical information about the patient or specimen that may influence the procedure or diagnostics or their interpretations.     This information includes diagnosis, clinical findings and other observations.  In laboratory ordering these are typically referred to as "ask at order entry questions (AOEs)".  This includes observations explicitly requested by the producer (filler) to provide context or supporting information needed to complete the order. For example,  reporting the amount of inspired oxygen for blood gas measurements.
     */
    supportingInfo: fhir.Reference[];
    /**
     * Many diagnostic procedures need a specimen, but the request itself is not actually about the specimen. This element is for when the diagnostic is requested on already existing specimens and the request points to the specimen it applies to.    Conversely, If the request is entered first with an unknown specimen, The [Specimen](specimen.html) resource references to the ProcedureRequest.
     */
    specimen: fhir.Reference[];
    /**
     * Only used if not implicit in the code found in ProcedureRequest.type.  If the use case requires BodySite to be handled as a separate resource instead of an inline coded element (e.g. to identify and track separately)  then use the standard extension [procedurerequest-targetBodySite](extension-procedurerequest-targetbodysite.html).
     */
    bodySite: fhir.CodeableConcept[];
    /**
     * Any other notes and comments made about the service request. For example, letting provider know that "patient hates needles" or other provider instructions.
     */
    note: fhir.Annotation[];
    /**
     * This may not include provenances for all versions of the request – only those deemed “relevant” or important.
     * This SHALL NOT include the Provenance associated with this current version of the resource.  (If that provenance is deemed to be a “relevant” change, it will need to be added as part of a later update.  Until then, it can be queried directly as the Provenance that points to this version using _revinclude
     * All Provenances should have some historical version of this Request as their subject.
     */
    relevantHistory: fhir.Reference[];
    /**
     * Default constructor for ProcedureRequest - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ProcedureRequestArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=ProcedureRequest.d.ts.map