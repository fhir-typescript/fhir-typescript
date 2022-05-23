import * as fhir from '../fhirJson.js';
/**
 * Specific parameters for the ordered item.  For example, the size of the indicated item.
 */
export interface SupplyRequestParameter extends fhir.BackboneElement {
    /**
     * A code or string that identifies the device detail being asserted.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * Range means device should have a value that falls somewhere within the specified range.
     */
    valueCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Range means device should have a value that falls somewhere within the specified range.
     */
    valueQuantity?: fhir.Quantity | undefined;
    /**
     * Range means device should have a value that falls somewhere within the specified range.
     */
    valueRange?: fhir.Range | undefined;
    /**
     * Range means device should have a value that falls somewhere within the specified range.
     */
    valueBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: SupplyRequest.parameter.value[x]
     */
    _valueBoolean?: fhir.FhirElement;
}
/**
 * A record of a request for a medication, substance or device used in the healthcare setting.
 */
export interface SupplyRequest extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "SupplyRequest";
    /**
     * The identifier.type element is used to distinguish between the identifiers assigned by the requester/placer and the performer/filler.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * Status of the supply request.
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
     * Note that there's a difference between a prescription - an instruction to take a medication, along with a (sometimes) implicit supply, and an explicit request to supply, with no explicit instructions.
     */
    itemCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Note that there's a difference between a prescription - an instruction to take a medication, along with a (sometimes) implicit supply, and an explicit request to supply, with no explicit instructions.
     */
    itemReference?: fhir.Reference | undefined;
    /**
     * The amount that is being ordered of the indicated item.
     */
    quantity: fhir.Quantity | null;
    /**
     * Specific parameters for the ordered item.  For example, the size of the indicated item.
     */
    parameter?: fhir.SupplyRequestParameter[] | undefined;
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
     * The device, practitioner, etc. who initiated the request.
     */
    requester?: fhir.Reference | undefined;
    /**
     * Who is intended to fulfill the request.
     */
    supplier?: fhir.Reference[] | undefined;
    /**
     * The reason why the supply item was requested.
     */
    reasonCode?: fhir.CodeableConcept[] | undefined;
    /**
     * The reason why the supply item was requested.
     */
    reasonReference?: fhir.Reference[] | undefined;
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