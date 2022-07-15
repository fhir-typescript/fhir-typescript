import * as fhir from '../fhirJson.js';
/**
 * When the request should be fulfilled.
 */
export interface SupplyRequestWhen extends fhir.BackboneElement {
    /**
     * Code indicating when the request should be fulfilled.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * Formal fulfillment schedule.
     */
    schedule?: fhir.Timing | undefined;
}
/**
 * A record of a request for a medication, substance or device used in the healthcare setting.
 */
export interface SupplyRequest extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "SupplyRequest" | null;
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
    date?: string | undefined;
    /**
     * Extended properties for primitive element: SupplyRequest.date
     */
    _date?: fhir.FhirElement;
    /**
     * Unique identifier for this supply request.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * Status of the supply request.
     */
    status?: 'cancelled' | 'completed' | 'failed' | 'requested' | undefined;
    /**
     * Extended properties for primitive element: SupplyRequest.status
     */
    _status?: fhir.FhirElement;
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
    supplier?: (fhir.Reference | null)[] | undefined;
    /**
     * Why the supply item was requested.
     */
    reasonCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Why the supply item was requested.
     */
    reasonReference?: fhir.Reference | undefined;
    /**
     * When the request should be fulfilled.
     */
    when?: fhir.SupplyRequestWhen | undefined;
}
//# sourceMappingURL=SupplyRequest.d.ts.map