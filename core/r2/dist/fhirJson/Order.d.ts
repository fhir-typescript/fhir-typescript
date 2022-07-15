import * as fhir from '../fhirJson.js';
/**
 * When order should be fulfilled.
 */
export interface OrderWhen extends fhir.BackboneElement {
    /**
     * Code specifies when request should be done. The code may simply be a priority code.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * A formal schedule.
     */
    schedule?: fhir.Timing | undefined;
}
/**
 * A request to perform an action.
 */
export interface Order extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "Order" | null;
    /**
     * Identifiers assigned to this order by the orderer or by the receiver.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * When the order was made.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: Order.date
     */
    _date?: fhir.FhirElement;
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
    reasonCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Text - why the order was made.
     */
    reasonReference?: fhir.Reference | undefined;
    /**
     * When order should be fulfilled.
     */
    when?: fhir.OrderWhen | undefined;
    /**
     * What action is being ordered.
     */
    detail: (fhir.Reference | null)[] | null;
}
//# sourceMappingURL=Order.d.ts.map