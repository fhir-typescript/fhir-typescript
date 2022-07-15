import * as fhir from '../fhirJson.js';
/**
 * A response to an order.
 */
export interface OrderResponse extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "OrderResponse" | null;
    /**
     * Identifiers assigned to this order. The identifiers are usually assigned by the system responding to the order, but they may be provided or added to by other systems.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * A reference to the order that this is in response to.
     */
    request: fhir.Reference | null;
    /**
     * The date and time at which this order response was made (created/posted).
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: OrderResponse.date
     */
    _date?: fhir.FhirElement;
    /**
     * The person, organization, or device credited with making the response.
     */
    who?: fhir.Reference | undefined;
    /**
     * What this response says about the status of the original order.
     */
    orderStatus: 'aborted' | 'accepted' | 'cancelled' | 'completed' | 'error' | 'pending' | 'rejected' | 'replaced' | 'review' | null;
    /**
     * Extended properties for primitive element: OrderResponse.orderStatus
     */
    _orderStatus?: fhir.FhirElement;
    /**
     * Additional description about the response - e.g. a text description provided by a human user when making decisions about the order.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: OrderResponse.description
     */
    _description?: fhir.FhirElement;
    /**
     * Links to resources that provide details of the outcome of performing the order; e.g. Diagnostic Reports in a response that is made to an order that referenced a diagnostic order.
     */
    fulfillment?: (fhir.Reference | null)[] | undefined;
}
//# sourceMappingURL=OrderResponse.d.ts.map