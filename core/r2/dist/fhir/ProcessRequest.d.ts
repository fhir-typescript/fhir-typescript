import * as fhir from '../fhir.js';
import { ActionlistCodeType } from '../fhirValueSets/ActionlistCodes.js';
/**
 * Valid arguments for the ProcessRequestItem type.
 */
export interface ProcessRequestItemArgs extends fhir.BackboneElementArgs {
    /**
     * A service line number.
     */
    sequenceLinkId: fhir.FhirInteger | number | undefined;
    /**
     * Extended properties for primitive element: ProcessRequest.item.sequenceLinkId
     */
    _sequenceLinkId?: fhir.FhirElementArgs;
}
/**
 * List of top level items to be re-adjudicated, if none specified then the entire submission is re-adjudicated.
 */
export declare class ProcessRequestItem extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A service line number.
     */
    sequenceLinkId: fhir.FhirInteger | null;
    /**
     * Default constructor for ProcessRequestItem - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ProcessRequestItemArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ProcessRequest type.
 */
export interface ProcessRequestArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "ProcessRequest" | undefined;
    /**
     * The type of processing action being requested, for example Reversal, Readjudication, StatusRequest,PendedRequest.
     */
    action: fhir.FhirCode<ActionlistCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: ProcessRequest.action
     */
    _action?: fhir.FhirElementArgs;
    /**
     * The ProcessRequest business identifier.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * The version of the style of resource contents. This should be mapped to the allowable profiles for this and supporting resources.
     */
    ruleset?: fhir.CodingArgs | undefined;
    /**
     * Knowledge of the original version can inform the processing of this instance so that information which is processable by the originating system may be generated.
     */
    originalRuleset?: fhir.CodingArgs | undefined;
    /**
     * The date when this resource was created.
     */
    created?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: ProcessRequest.created
     */
    _created?: fhir.FhirElementArgs;
    /**
     * The organization which is the target of the request.
     */
    target?: fhir.ReferenceArgs | undefined;
    /**
     * The practitioner who is responsible for the action specified in thise request.
     */
    provider?: fhir.ReferenceArgs | undefined;
    /**
     * The organization which is responsible for the action speccified in thise request.
     */
    organization?: fhir.ReferenceArgs | undefined;
    /**
     * Reference of resource which is the target or subject of this action.
     */
    request?: fhir.ReferenceArgs | undefined;
    /**
     * Reference of a prior response to resource which is the target or subject of this action.
     */
    response?: fhir.ReferenceArgs | undefined;
    /**
     * Some resources must not simply be reversed in a processing or accounting sense but rather must have all history removed, such as the accidental submission of sensitive and/or wrong information. If the receiver cannot comply with a Nullify request then they must reject the request.
     */
    nullify?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: ProcessRequest.nullify
     */
    _nullify?: fhir.FhirElementArgs;
    /**
     * A reference to supply which authenticates the process.
     */
    reference?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ProcessRequest.reference
     */
    _reference?: fhir.FhirElementArgs;
    /**
     * List of top level items to be re-adjudicated, if none specified then the entire submission is re-adjudicated.
     */
    item?: fhir.ProcessRequestItemArgs[] | undefined;
    /**
     * Names of resource types to include.
     */
    include?: fhir.FhirString[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: ProcessRequest.include
     */
    _include?: (fhir.FhirElementArgs | null)[];
    /**
     * Names of resource types to exclude.
     */
    exclude?: fhir.FhirString[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: ProcessRequest.exclude
     */
    _exclude?: (fhir.FhirElementArgs | null)[];
    /**
     * A period of time during which the fulfilling resources would have been created.
     */
    period?: fhir.PeriodArgs | undefined;
}
/**
 * This resource provides the target, request and response, and action details for an action to be performed by the target on or about existing resources.
 */
export declare class ProcessRequest extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "ProcessRequest";
    /**
     * The type of processing action being requested, for example Reversal, Readjudication, StatusRequest,PendedRequest.
     */
    action: fhir.FhirCode<ActionlistCodeType> | null;
    /**
     * The ProcessRequest business identifier.
     */
    identifier: fhir.Identifier[];
    /**
     * The version of the style of resource contents. This should be mapped to the allowable profiles for this and supporting resources.
     */
    ruleset?: fhir.Coding | undefined;
    /**
     * Knowledge of the original version can inform the processing of this instance so that information which is processable by the originating system may be generated.
     */
    originalRuleset?: fhir.Coding | undefined;
    /**
     * The date when this resource was created.
     */
    created?: fhir.FhirDateTime | undefined;
    /**
     * The organization which is the target of the request.
     */
    target?: fhir.Reference | undefined;
    /**
     * The practitioner who is responsible for the action specified in thise request.
     */
    provider?: fhir.Reference | undefined;
    /**
     * The organization which is responsible for the action speccified in thise request.
     */
    organization?: fhir.Reference | undefined;
    /**
     * Reference of resource which is the target or subject of this action.
     */
    request?: fhir.Reference | undefined;
    /**
     * Reference of a prior response to resource which is the target or subject of this action.
     */
    response?: fhir.Reference | undefined;
    /**
     * Some resources must not simply be reversed in a processing or accounting sense but rather must have all history removed, such as the accidental submission of sensitive and/or wrong information. If the receiver cannot comply with a Nullify request then they must reject the request.
     */
    nullify?: fhir.FhirBoolean | undefined;
    /**
     * A reference to supply which authenticates the process.
     */
    reference?: fhir.FhirString | undefined;
    /**
     * List of top level items to be re-adjudicated, if none specified then the entire submission is re-adjudicated.
     */
    item: fhir.ProcessRequestItem[];
    /**
     * Names of resource types to include.
     */
    include: fhir.FhirString[];
    /**
     * Names of resource types to exclude.
     */
    exclude: fhir.FhirString[];
    /**
     * A period of time during which the fulfilling resources would have been created.
     */
    period?: fhir.Period | undefined;
    /**
     * Default constructor for ProcessRequest - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ProcessRequestArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=ProcessRequest.d.ts.map