import * as fhir from '../fhir.js';
/**
 * Valid arguments for the OrderWhen type.
 */
export interface OrderWhenArgs extends fhir.BackboneElementArgs {
    /**
     * Code specifies when request should be done. The code may simply be a priority code.
     */
    code?: fhir.CodeableConceptArgs | undefined;
    /**
     * A formal schedule.
     */
    schedule?: fhir.TimingArgs | undefined;
}
/**
 * When order should be fulfilled.
 */
export declare class OrderWhen extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Code specifies when request should be done. The code may simply be a priority code.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * A formal schedule.
     */
    schedule?: fhir.Timing | undefined;
    /**
     * Default constructor for OrderWhen - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<OrderWhenArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the Order type.
 */
export interface OrderArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "Order" | undefined;
    /**
     * Identifiers assigned to this order by the orderer or by the receiver.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * When the order was made.
     */
    date?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: Order.date
     */
    _date?: fhir.FhirElementArgs;
    /**
     * Patient this order is about.
     */
    subject?: fhir.ReferenceArgs | undefined;
    /**
     * Who initiated the order.
     */
    source?: fhir.ReferenceArgs | undefined;
    /**
     * Who is intended to fulfill the order.
     */
    target?: fhir.ReferenceArgs | undefined;
    /**
     * Text - why the order was made.
     */
    reason?: fhir.CodeableConcept | fhir.Reference | undefined;
    /**
     * Text - why the order was made.
     */
    reasonCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * Text - why the order was made.
     */
    reasonReference?: fhir.ReferenceArgs | undefined;
    /**
     * When order should be fulfilled.
     */
    when?: fhir.OrderWhenArgs | undefined;
    /**
     * What action is being ordered.
     */
    detail: fhir.ReferenceArgs[] | null;
}
/**
 * A request to perform an action.
 */
export declare class Order extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "Order";
    /**
     * Identifiers assigned to this order by the orderer or by the receiver.
     */
    identifier: fhir.Identifier[];
    /**
     * When the order was made.
     */
    date?: fhir.FhirDateTime | undefined;
    /**
     * Patient this order is about.
     */
    subject?: fhir.Reference | undefined;
    /**
     * Who initiated the order.
     */
    source?: fhir.Reference | undefined;
    /**
     * Who is intended to fulfill the order.
     */
    target?: fhir.Reference | undefined;
    /**
     * Text - why the order was made.
     */
    reason?: (fhir.CodeableConcept | fhir.Reference) | undefined;
    /**
     * Internal flag to properly serialize choice-type element Order.reason[x]
     */
    protected static readonly _fts_reasonIsChoice: true;
    /**
     * When order should be fulfilled.
     */
    when?: fhir.OrderWhen | undefined;
    /**
     * What action is being ordered.
     */
    detail: fhir.Reference[];
    /**
     * Default constructor for Order - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<OrderArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=Order.d.ts.map