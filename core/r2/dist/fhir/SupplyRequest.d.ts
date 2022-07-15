import * as fhir from '../fhir.js';
import { SupplyrequestStatusCodeType } from '../fhirValueSets/SupplyrequestStatusCodes.js';
/**
 * Valid arguments for the SupplyRequestWhen type.
 */
export interface SupplyRequestWhenArgs extends fhir.BackboneElementArgs {
    /**
     * Code indicating when the request should be fulfilled.
     */
    code?: fhir.CodeableConceptArgs | undefined;
    /**
     * Formal fulfillment schedule.
     */
    schedule?: fhir.TimingArgs | undefined;
}
/**
 * When the request should be fulfilled.
 */
export declare class SupplyRequestWhen extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Code indicating when the request should be fulfilled.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * Formal fulfillment schedule.
     */
    schedule?: fhir.Timing | undefined;
    /**
     * Default constructor for SupplyRequestWhen - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SupplyRequestWhenArgs>, options?: fhir.FhirConstructorOptions);
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
     * A link to a resource representing the person whom the ordered item is for.
     */
    patient?: fhir.ReferenceArgs | undefined;
    /**
     * The Practitioner , Organization or Patient who initiated this order for the supply.
     */
    source?: fhir.ReferenceArgs | undefined;
    /**
     * When the request was made.
     */
    date?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: SupplyRequest.date
     */
    _date?: fhir.FhirElementArgs;
    /**
     * Unique identifier for this supply request.
     */
    identifier?: fhir.IdentifierArgs | undefined;
    /**
     * Status of the supply request.
     */
    status?: fhir.FhirCode<SupplyrequestStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: SupplyRequest.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * Category of supply, e.g.  central, non-stock, etc. This is used to support work flows associated with the supply process.
     */
    kind?: fhir.CodeableConceptArgs | undefined;
    /**
     * The item that is requested to be supplied.
     */
    orderedItem?: fhir.ReferenceArgs | undefined;
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
     * When the request should be fulfilled.
     */
    when?: fhir.SupplyRequestWhenArgs | undefined;
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
     * A link to a resource representing the person whom the ordered item is for.
     */
    patient?: fhir.Reference | undefined;
    /**
     * The Practitioner , Organization or Patient who initiated this order for the supply.
     */
    source?: fhir.Reference | undefined;
    /**
     * When the request was made.
     */
    date?: fhir.FhirDateTime | undefined;
    /**
     * Unique identifier for this supply request.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * Status of the supply request.
     */
    status?: fhir.FhirCode<SupplyrequestStatusCodeType> | undefined;
    /**
     * Category of supply, e.g.  central, non-stock, etc. This is used to support work flows associated with the supply process.
     */
    kind?: fhir.CodeableConcept | undefined;
    /**
     * The item that is requested to be supplied.
     */
    orderedItem?: fhir.Reference | undefined;
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
     * When the request should be fulfilled.
     */
    when?: fhir.SupplyRequestWhen | undefined;
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