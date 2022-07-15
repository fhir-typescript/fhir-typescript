import * as fhir from '../fhir.js';
import { SlotstatusCodeType } from '../fhirValueSets/SlotstatusCodes.js';
/**
 * Valid arguments for the Slot type.
 */
export interface SlotArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "Slot" | undefined;
    /**
     * External Ids for this item.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * The type of appointments that can be booked into this slot (ideally this would be an identifiable service - which is at a location, rather than the location itself). If provided then this overrides the value provided on the availability resource.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * The schedule resource that this slot defines an interval of status information.
     */
    schedule: fhir.ReferenceArgs | null;
    /**
     * busy | free | busy-unavailable | busy-tentative.
     */
    freeBusyType: fhir.FhirCode<SlotstatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Slot.freeBusyType
     */
    _freeBusyType?: fhir.FhirElementArgs;
    /**
     * Date/Time that the slot is to begin.
     */
    start: fhir.FhirInstant | string | undefined;
    /**
     * Extended properties for primitive element: Slot.start
     */
    _start?: fhir.FhirElementArgs;
    /**
     * Date/Time that the slot is to conclude.
     */
    end: fhir.FhirInstant | string | undefined;
    /**
     * Extended properties for primitive element: Slot.end
     */
    _end?: fhir.FhirElementArgs;
    /**
     * This slot has already been overbooked, appointments are unlikely to be accepted for this time.
     */
    overbooked?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: Slot.overbooked
     */
    _overbooked?: fhir.FhirElementArgs;
    /**
     * Comments on the slot to describe any extended information. Such as custom constraints on the slot.
     */
    comment?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Slot.comment
     */
    _comment?: fhir.FhirElementArgs;
}
/**
 * A slot of time on a schedule that may be available for booking appointments.
 */
export declare class Slot extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "Slot";
    /**
     * External Ids for this item.
     */
    identifier: fhir.Identifier[];
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
    freeBusyType: fhir.FhirCode<SlotstatusCodeType> | null;
    /**
     * Date/Time that the slot is to begin.
     */
    start: fhir.FhirInstant | null;
    /**
     * Date/Time that the slot is to conclude.
     */
    end: fhir.FhirInstant | null;
    /**
     * This slot has already been overbooked, appointments are unlikely to be accepted for this time.
     */
    overbooked?: fhir.FhirBoolean | undefined;
    /**
     * Comments on the slot to describe any extended information. Such as custom constraints on the slot.
     */
    comment?: fhir.FhirString | undefined;
    /**
     * Default constructor for Slot - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SlotArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=Slot.d.ts.map