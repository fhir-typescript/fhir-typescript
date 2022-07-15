import * as fhir from '../fhirJson.js';
/**
 * The item being requested.
 */
export interface SupplyRequestOrderedItem extends fhir.BackboneElement {
    /**
     * The amount that is being ordered of the indicated item.
     */
    quantity: fhir.Quantity | null;
    /**
     * Note that there's a difference between a prescription - an instruction to take a medication, along with a (sometimes) implicit supply, and an explicit request to supply, with no explicit instructions.
     */
    itemCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Note that there's a difference between a prescription - an instruction to take a medication, along with a (sometimes) implicit supply, and an explicit request to supply, with no explicit instructions.
     */
    itemReference?: fhir.Reference | undefined;
}
/**
 * The individual who initiated the request and has responsibility for its activation.
 */
export interface SupplyRequestRequester extends fhir.BackboneElement {
    /**
     * The device, practitioner, etc. who initiated the request.
     */
    agent: fhir.Reference | null;
    /**
     * The organization the device or practitioner was acting on behalf of.
     */
    onBehalfOf?: fhir.Reference | undefined;
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
     * This is assigned by the requester, and used to refer to this order in other external standards.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status?: 'active' | 'cancelled' | 'completed' | 'draft' | 'entered-in-error' | 'suspended' | 'unknown' | undefined;
    /**
     * Extended properties for primitive element: SupplyRequest.status
     */
    _status?: fhir.FhirElement;
    /**
     * Category of supply, e.g.  central, non-stock, etc. This is used to support work flows associated with the supply process.
     */
    category?: fhir.CodeableConcept | undefined;
    /**
     * Indicates how quickly this SupplyRequest should be addressed with respect to other requests.
     */
    priority?: 'asap' | 'routine' | 'stat' | 'urgent' | undefined;
    /**
     * Extended properties for primitive element: SupplyRequest.priority
     */
    _priority?: fhir.FhirElement;
    /**
     * The item being requested.
     */
    orderedItem?: fhir.SupplyRequestOrderedItem | undefined;
    /**
     * When the request should be fulfilled.
     */
    occurrenceDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: SupplyRequest.occurrence[x]
     */
    _occurrenceDateTime?: fhir.FhirElement;
    /**
     * When the request should be fulfilled.
     */
    occurrencePeriod?: fhir.Period | undefined;
    /**
     * When the request should be fulfilled.
     */
    occurrenceTiming?: fhir.Timing | undefined;
    /**
     * When the request was made.
     */
    authoredOn?: string | undefined;
    /**
     * Extended properties for primitive element: SupplyRequest.authoredOn
     */
    _authoredOn?: fhir.FhirElement;
    /**
     * The individual who initiated the request and has responsibility for its activation.
     */
    requester?: fhir.SupplyRequestRequester | undefined;
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
     * Where the supply is expected to come from.
     */
    deliverFrom?: fhir.Reference | undefined;
    /**
     * Where the supply is destined to go.
     */
    deliverTo?: fhir.Reference | undefined;
}
//# sourceMappingURL=SupplyRequest.d.ts.map