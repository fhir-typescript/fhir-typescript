import * as fhir from '../fhir.js';
import { FmStatusCodeType } from '../fhirValueSets/FmStatusCodes.js';
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
     * The ProcessRequest business identifier.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status?: fhir.FhirCode<FmStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: ProcessRequest.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * The type of processing action being requested, for example Reversal, Readjudication, StatusRequest,PendedRequest.
     */
    action?: fhir.FhirCode<ActionlistCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: ProcessRequest.action
     */
    _action?: fhir.FhirElementArgs;
    /**
     * The organization which is the target of the request.
     */
    target?: fhir.ReferenceArgs | undefined;
    /**
     * The date when this resource was created.
     */
    created?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: ProcessRequest.created
     */
    _created?: fhir.FhirElementArgs;
    /**
     * The practitioner who is responsible for the action specified in this request.
     */
    provider?: fhir.ReferenceArgs | undefined;
    /**
     * The organization which is responsible for the action speccified in this request.
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
     * If true remove all history excluding audit.
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
     * The ProcessRequest business identifier.
     */
    identifier: fhir.Identifier[];
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status?: fhir.FhirCode<FmStatusCodeType> | undefined;
    /**
     * The type of processing action being requested, for example Reversal, Readjudication, StatusRequest,PendedRequest.
     */
    action?: fhir.FhirCode<ActionlistCodeType> | undefined;
    /**
     * The organization which is the target of the request.
     */
    target?: fhir.Reference | undefined;
    /**
     * The date when this resource was created.
     */
    created?: fhir.FhirDateTime | undefined;
    /**
     * The practitioner who is responsible for the action specified in this request.
     */
    provider?: fhir.Reference | undefined;
    /**
     * The organization which is responsible for the action speccified in this request.
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
     * If true remove all history excluding audit.
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