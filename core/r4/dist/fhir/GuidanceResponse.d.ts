import * as fhir from '../fhir.js';
import { GuidanceResponseStatusCodeType } from '../fhirValueSets/GuidanceResponseStatusCodes.js';
/**
 * Valid arguments for the GuidanceResponse type.
 */
export interface GuidanceResponseArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "GuidanceResponse" | undefined;
    /**
     * The identifier of the request associated with this response. If an identifier was given as part of the request, it will be reproduced here to enable the requester to more easily identify the response in a multi-request scenario.
     */
    requestIdentifier?: fhir.IdentifierArgs | undefined;
    /**
     * Allows a service to provide  unique, business identifiers for the response.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * An identifier, CodeableConcept or canonical reference to the guidance that was requested.
     */
    module?: fhir.FhirUri | fhir.FhirCanonical | fhir.CodeableConcept | undefined;
    /**
     * An identifier, CodeableConcept or canonical reference to the guidance that was requested.
     */
    moduleUri?: fhir.FhirUri | string | undefined;
    /**
     * An identifier, CodeableConcept or canonical reference to the guidance that was requested.
     */
    moduleCanonical?: fhir.FhirCanonical | string | undefined;
    /**
     * An identifier, CodeableConcept or canonical reference to the guidance that was requested.
     */
    moduleCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: fhir.FhirCode<GuidanceResponseStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: GuidanceResponse.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * The patient for which the request was processed.
     */
    subject?: fhir.ReferenceArgs | undefined;
    /**
     * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official copmletion of an encounter but still be tied to the context of the encounter.
     */
    encounter?: fhir.ReferenceArgs | undefined;
    /**
     * Indicates when the guidance response was processed.
     */
    occurrenceDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: GuidanceResponse.occurrenceDateTime
     */
    _occurrenceDateTime?: fhir.FhirElementArgs;
    /**
     * Provides a reference to the device that performed the guidance.
     */
    performer?: fhir.ReferenceArgs | undefined;
    /**
     * Describes the reason for the guidance response in coded or textual form.
     */
    reasonCode?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Indicates the reason the request was initiated. This is typically provided as a parameter to the evaluation and echoed by the service, although for some use cases, such as subscription- or event-based scenarios, it may provide an indication of the cause for the response.
     */
    reasonReference?: fhir.ReferenceArgs[] | undefined;
    /**
     * Provides a mechanism to communicate additional information about the response.
     */
    note?: fhir.AnnotationArgs[] | undefined;
    /**
     * Messages resulting from the evaluation of the artifact or artifacts. As part of evaluating the request, the engine may produce informational or warning messages. These messages will be provided by this element.
     */
    evaluationMessage?: fhir.ReferenceArgs[] | undefined;
    /**
     * The output parameters of the evaluation, if any. Many modules will result in the return of specific resources such as procedure or communication requests that are returned as part of the operation result. However, modules may define specific outputs that would be returned as the result of the evaluation, and these would be returned in this element.
     */
    outputParameters?: fhir.ReferenceArgs | undefined;
    /**
     * The actions, if any, produced by the evaluation of the artifact.
     */
    result?: fhir.ReferenceArgs | undefined;
    /**
     * If the evaluation could not be completed due to lack of information, or additional information would potentially result in a more accurate response, this element will a description of the data required in order to proceed with the evaluation. A subsequent request to the service should include this data.
     */
    dataRequirement?: fhir.DataRequirementArgs[] | undefined;
}
/**
 * A guidance response is the formal response to a guidance request, including any output parameters returned by the evaluation, as well as the description of any proposed actions to be taken.
 */
export declare class GuidanceResponse extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "GuidanceResponse";
    /**
     * The identifier of the request associated with this response. If an identifier was given as part of the request, it will be reproduced here to enable the requester to more easily identify the response in a multi-request scenario.
     */
    requestIdentifier?: fhir.Identifier | undefined;
    /**
     * Allows a service to provide  unique, business identifiers for the response.
     */
    identifier: fhir.Identifier[];
    /**
     * An identifier, CodeableConcept or canonical reference to the guidance that was requested.
     */
    module: (fhir.FhirUri | fhir.FhirCanonical | fhir.CodeableConcept) | null;
    /**
     * Internal flag to properly serialize choice-type element GuidanceResponse.module[x]
     */
    protected static readonly _fts_moduleIsChoice: true;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: fhir.FhirCode<GuidanceResponseStatusCodeType> | null;
    /**
     * The patient for which the request was processed.
     */
    subject?: fhir.Reference | undefined;
    /**
     * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official copmletion of an encounter but still be tied to the context of the encounter.
     */
    encounter?: fhir.Reference | undefined;
    /**
     * Indicates when the guidance response was processed.
     */
    occurrenceDateTime?: fhir.FhirDateTime | undefined;
    /**
     * Provides a reference to the device that performed the guidance.
     */
    performer?: fhir.Reference | undefined;
    /**
     * Describes the reason for the guidance response in coded or textual form.
     */
    reasonCode: fhir.CodeableConcept[];
    /**
     * Indicates the reason the request was initiated. This is typically provided as a parameter to the evaluation and echoed by the service, although for some use cases, such as subscription- or event-based scenarios, it may provide an indication of the cause for the response.
     */
    reasonReference: fhir.Reference[];
    /**
     * Provides a mechanism to communicate additional information about the response.
     */
    note: fhir.Annotation[];
    /**
     * Messages resulting from the evaluation of the artifact or artifacts. As part of evaluating the request, the engine may produce informational or warning messages. These messages will be provided by this element.
     */
    evaluationMessage: fhir.Reference[];
    /**
     * The output parameters of the evaluation, if any. Many modules will result in the return of specific resources such as procedure or communication requests that are returned as part of the operation result. However, modules may define specific outputs that would be returned as the result of the evaluation, and these would be returned in this element.
     */
    outputParameters?: fhir.Reference | undefined;
    /**
     * The actions, if any, produced by the evaluation of the artifact.
     */
    result?: fhir.Reference | undefined;
    /**
     * If the evaluation could not be completed due to lack of information, or additional information would potentially result in a more accurate response, this element will a description of the data required in order to proceed with the evaluation. A subsequent request to the service should include this data.
     */
    dataRequirement: fhir.DataRequirement[];
    /**
     * Default constructor for GuidanceResponse - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<GuidanceResponseArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(expression?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=GuidanceResponse.d.ts.map