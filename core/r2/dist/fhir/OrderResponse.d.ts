import * as fhir from '../fhir.js';
import { OrderStatusCodeType } from '../fhirValueSets/OrderStatusCodes.js';
/**
 * Valid arguments for the OrderResponse type.
 */
export interface OrderResponseArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "OrderResponse" | undefined;
    /**
     * Identifiers assigned to this order. The identifiers are usually assigned by the system responding to the order, but they may be provided or added to by other systems.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * A reference to the order that this is in response to.
     */
    request: fhir.ReferenceArgs | null;
    /**
     * The date and time at which this order response was made (created/posted).
     */
    date?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: OrderResponse.date
     */
    _date?: fhir.FhirElementArgs;
    /**
     * The person, organization, or device credited with making the response.
     */
    who?: fhir.ReferenceArgs | undefined;
    /**
     * What this response says about the status of the original order.
     */
    orderStatus: fhir.FhirCode<OrderStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: OrderResponse.orderStatus
     */
    _orderStatus?: fhir.FhirElementArgs;
    /**
     * Additional description about the response - e.g. a text description provided by a human user when making decisions about the order.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: OrderResponse.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * Links to resources that provide details of the outcome of performing the order; e.g. Diagnostic Reports in a response that is made to an order that referenced a diagnostic order.
     */
    fulfillment?: fhir.ReferenceArgs[] | undefined;
}
/**
 * A response to an order.
 */
export declare class OrderResponse extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "OrderResponse";
    /**
     * Identifiers assigned to this order. The identifiers are usually assigned by the system responding to the order, but they may be provided or added to by other systems.
     */
    identifier: fhir.Identifier[];
    /**
     * A reference to the order that this is in response to.
     */
    request: fhir.Reference | null;
    /**
     * The date and time at which this order response was made (created/posted).
     */
    date?: fhir.FhirDateTime | undefined;
    /**
     * The person, organization, or device credited with making the response.
     */
    who?: fhir.Reference | undefined;
    /**
     * What this response says about the status of the original order.
     */
    orderStatus: fhir.FhirCode<OrderStatusCodeType> | null;
    /**
     * Additional description about the response - e.g. a text description provided by a human user when making decisions about the order.
     */
    description?: fhir.FhirString | undefined;
    /**
     * Links to resources that provide details of the outcome of performing the order; e.g. Diagnostic Reports in a response that is made to an order that referenced a diagnostic order.
     */
    fulfillment: fhir.Reference[];
    /**
     * Default constructor for OrderResponse - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<OrderResponseArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=OrderResponse.d.ts.map