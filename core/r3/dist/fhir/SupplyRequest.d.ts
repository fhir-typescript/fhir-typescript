import * as fhir from '../fhir.js';
import { SupplyrequestStatusCodeType } from '../fhirValueSets/SupplyrequestStatusCodes.js';
import { RequestPriorityCodeType } from '../fhirValueSets/RequestPriorityCodes.js';
/**
 * Valid arguments for the SupplyRequestOrderedItem type.
 */
export interface SupplyRequestOrderedItemArgs extends fhir.BackboneElementArgs {
    /**
     * The amount that is being ordered of the indicated item.
     */
    quantity: fhir.QuantityArgs | null;
    /**
     * Note that there's a difference between a prescription - an instruction to take a medication, along with a (sometimes) implicit supply, and an explicit request to supply, with no explicit instructions.
     */
    item?: fhir.CodeableConcept | fhir.Reference | undefined;
    /**
     * Note that there's a difference between a prescription - an instruction to take a medication, along with a (sometimes) implicit supply, and an explicit request to supply, with no explicit instructions.
     */
    itemCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * Note that there's a difference between a prescription - an instruction to take a medication, along with a (sometimes) implicit supply, and an explicit request to supply, with no explicit instructions.
     */
    itemReference?: fhir.ReferenceArgs | undefined;
}
/**
 * The item being requested.
 */
export declare class SupplyRequestOrderedItem extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The amount that is being ordered of the indicated item.
     */
    quantity: fhir.Quantity | null;
    /**
     * Note that there's a difference between a prescription - an instruction to take a medication, along with a (sometimes) implicit supply, and an explicit request to supply, with no explicit instructions.
     */
    item?: (fhir.CodeableConcept | fhir.Reference) | undefined;
    /**
     * Internal flag to properly serialize choice-type element SupplyRequest.orderedItem.item[x]
     */
    protected static readonly _fts_itemIsChoice: true;
    /**
     * Default constructor for SupplyRequestOrderedItem - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SupplyRequestOrderedItemArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the SupplyRequestRequester type.
 */
export interface SupplyRequestRequesterArgs extends fhir.BackboneElementArgs {
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
export declare class SupplyRequestRequester extends fhir.BackboneElement {
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
     * Default constructor for SupplyRequestRequester - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SupplyRequestRequesterArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the SupplyRequest type.
 */
export interface SupplyRequestArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "SupplyRequest" | undefined;
    /**
     * This is assigned by the requester, and used to refer to this order in other external standards.
     */
    identifier?: fhir.IdentifierArgs | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status?: fhir.FhirCode<SupplyrequestStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: SupplyRequest.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * Category of supply, e.g.  central, non-stock, etc. This is used to support work flows associated with the supply process.
     */
    category?: fhir.CodeableConceptArgs | undefined;
    /**
     * Indicates how quickly this SupplyRequest should be addressed with respect to other requests.
     */
    priority?: fhir.FhirCode<RequestPriorityCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: SupplyRequest.priority
     */
    _priority?: fhir.FhirElementArgs;
    /**
     * The item being requested.
     */
    orderedItem?: fhir.SupplyRequestOrderedItemArgs | undefined;
    /**
     * When the request should be fulfilled.
     */
    occurrence?: fhir.FhirDateTime | fhir.Period | fhir.Timing | undefined;
    /**
     * When the request should be fulfilled.
     */
    occurrenceDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * When the request should be fulfilled.
     */
    occurrencePeriod?: fhir.PeriodArgs | undefined;
    /**
     * When the request should be fulfilled.
     */
    occurrenceTiming?: fhir.TimingArgs | undefined;
    /**
     * When the request was made.
     */
    authoredOn?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: SupplyRequest.authoredOn
     */
    _authoredOn?: fhir.FhirElementArgs;
    /**
     * The individual who initiated the request and has responsibility for its activation.
     */
    requester?: fhir.SupplyRequestRequesterArgs | undefined;
    /**
     * Who is intended to fulfill the request.
     */
    supplier?: fhir.ReferenceArgs[] | undefined;
    /**
     * Why the supply item was requested.
     */
    reason?: fhir.CodeableConcept | fhir.Reference | undefined;
    /**
     * Why the supply item was requested.
     */
    reasonCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * Why the supply item was requested.
     */
    reasonReference?: fhir.ReferenceArgs | undefined;
    /**
     * Where the supply is expected to come from.
     */
    deliverFrom?: fhir.ReferenceArgs | undefined;
    /**
     * Where the supply is destined to go.
     */
    deliverTo?: fhir.ReferenceArgs | undefined;
}
/**
 * A record of a request for a medication, substance or device used in the healthcare setting.
 */
export declare class SupplyRequest extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "SupplyRequest";
    /**
     * This is assigned by the requester, and used to refer to this order in other external standards.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status?: fhir.FhirCode<SupplyrequestStatusCodeType> | undefined;
    /**
     * Category of supply, e.g.  central, non-stock, etc. This is used to support work flows associated with the supply process.
     */
    category?: fhir.CodeableConcept | undefined;
    /**
     * Indicates how quickly this SupplyRequest should be addressed with respect to other requests.
     */
    priority?: fhir.FhirCode<RequestPriorityCodeType> | undefined;
    /**
     * The item being requested.
     */
    orderedItem?: fhir.SupplyRequestOrderedItem | undefined;
    /**
     * When the request should be fulfilled.
     */
    occurrence?: (fhir.FhirDateTime | fhir.Period | fhir.Timing) | undefined;
    /**
     * Internal flag to properly serialize choice-type element SupplyRequest.occurrence[x]
     */
    protected static readonly _fts_occurrenceIsChoice: true;
    /**
     * When the request was made.
     */
    authoredOn?: fhir.FhirDateTime | undefined;
    /**
     * The individual who initiated the request and has responsibility for its activation.
     */
    requester?: fhir.SupplyRequestRequester | undefined;
    /**
     * Who is intended to fulfill the request.
     */
    supplier: fhir.Reference[];
    /**
     * Why the supply item was requested.
     */
    reason?: (fhir.CodeableConcept | fhir.Reference) | undefined;
    /**
     * Internal flag to properly serialize choice-type element SupplyRequest.reason[x]
     */
    protected static readonly _fts_reasonIsChoice: true;
    /**
     * Where the supply is expected to come from.
     */
    deliverFrom?: fhir.Reference | undefined;
    /**
     * Where the supply is destined to go.
     */
    deliverTo?: fhir.Reference | undefined;
    /**
     * Default constructor for SupplyRequest - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SupplyRequestArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=SupplyRequest.d.ts.map