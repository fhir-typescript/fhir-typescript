import * as fhir from '../fhirJson.js';
/**
 * List of top level items to be re-adjudicated, if none specified then the entire submission is re-adjudicated.
 */
export interface ProcessRequestItem extends fhir.BackboneElement {
    /**
     * A service line number.
     */
    sequenceLinkId: number | null;
    /**
     * Extended properties for primitive element: ProcessRequest.item.sequenceLinkId
     */
    _sequenceLinkId?: fhir.FhirElement;
}
/**
 * This resource provides the target, request and response, and action details for an action to be performed by the target on or about existing resources.
 */
export interface ProcessRequest extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "ProcessRequest" | null;
    /**
     * The ProcessRequest business identifier.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status?: 'active' | 'cancelled' | 'draft' | 'entered-in-error' | undefined;
    /**
     * Extended properties for primitive element: ProcessRequest.status
     */
    _status?: fhir.FhirElement;
    /**
     * The type of processing action being requested, for example Reversal, Readjudication, StatusRequest,PendedRequest.
     */
    action?: 'cancel' | 'poll' | 'reprocess' | 'status' | undefined;
    /**
     * Extended properties for primitive element: ProcessRequest.action
     */
    _action?: fhir.FhirElement;
    /**
     * The organization which is the target of the request.
     */
    target?: fhir.Reference | undefined;
    /**
     * The date when this resource was created.
     */
    created?: string | undefined;
    /**
     * Extended properties for primitive element: ProcessRequest.created
     */
    _created?: fhir.FhirElement;
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
    nullify?: boolean | undefined;
    /**
     * Extended properties for primitive element: ProcessRequest.nullify
     */
    _nullify?: fhir.FhirElement;
    /**
     * A reference to supply which authenticates the process.
     */
    reference?: string | undefined;
    /**
     * Extended properties for primitive element: ProcessRequest.reference
     */
    _reference?: fhir.FhirElement;
    /**
     * List of top level items to be re-adjudicated, if none specified then the entire submission is re-adjudicated.
     */
    item?: (fhir.ProcessRequestItem | null)[] | undefined;
    /**
     * Names of resource types to include.
     */
    include?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: ProcessRequest.include
     */
    _include?: (fhir.FhirElement | null)[];
    /**
     * Names of resource types to exclude.
     */
    exclude?: (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: ProcessRequest.exclude
     */
    _exclude?: (fhir.FhirElement | null)[];
    /**
     * A period of time during which the fulfilling resources would have been created.
     */
    period?: fhir.Period | undefined;
}
//# sourceMappingURL=ProcessRequest.d.ts.map