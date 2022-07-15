import * as fhir from '../fhirJson.js';
/**
 * A slot of time on a schedule that may be available for booking appointments.
 */
export interface Slot extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "Slot" | null;
    /**
     * External Ids for this item.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * The type of appointments that can be booked into this slot (ideally this would be an identifiable service - which is at a location, rather than the location itself). If provided then this overrides the value provided on the availability resource.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * The schedule resource that this slot defines an interval of status information.
     */
    schedule: fhir.Reference | null;
    /**
     * busy | free | busy-unavailable | busy-tentative.
     */
    freeBusyType: 'busy' | 'busy-tentative' | 'busy-unavailable' | 'free' | null;
    /**
     * Extended properties for primitive element: Slot.freeBusyType
     */
    _freeBusyType?: fhir.FhirElement;
    /**
     * Date/Time that the slot is to begin.
     */
    start: string | null;
    /**
     * Extended properties for primitive element: Slot.start
     */
    _start?: fhir.FhirElement;
    /**
     * Date/Time that the slot is to conclude.
     */
    end: string | null;
    /**
     * Extended properties for primitive element: Slot.end
     */
    _end?: fhir.FhirElement;
    /**
     * This slot has already been overbooked, appointments are unlikely to be accepted for this time.
     */
    overbooked?: boolean | undefined;
    /**
     * Extended properties for primitive element: Slot.overbooked
     */
    _overbooked?: fhir.FhirElement;
    /**
     * Comments on the slot to describe any extended information. Such as custom constraints on the slot.
     */
    comment?: string | undefined;
    /**
     * Extended properties for primitive element: Slot.comment
     */
    _comment?: fhir.FhirElement;
}
//# sourceMappingURL=Slot.d.ts.map