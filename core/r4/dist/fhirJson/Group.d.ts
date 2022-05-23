import * as fhir from '../fhirJson.js';
/**
 * All the identified characteristics must be true for an entity to a member of the group.
 */
export interface GroupCharacteristic extends fhir.BackboneElement {
    /**
     * A code that identifies the kind of trait being asserted.
     */
    code: fhir.CodeableConcept | null;
    /**
     * For Range, it means members of the group have a value that falls somewhere within the specified range.
     */
    valueCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * For Range, it means members of the group have a value that falls somewhere within the specified range.
     */
    valueBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: Group.characteristic.value[x]
     */
    _valueBoolean?: fhir.FhirElement;
    /**
     * For Range, it means members of the group have a value that falls somewhere within the specified range.
     */
    valueQuantity?: fhir.Quantity | undefined;
    /**
     * For Range, it means members of the group have a value that falls somewhere within the specified range.
     */
    valueRange?: fhir.Range | undefined;
    /**
     * For Range, it means members of the group have a value that falls somewhere within the specified range.
     */
    valueReference?: fhir.Reference | undefined;
    /**
     * This is labeled as "Is Modifier" because applications cannot wrongly include excluded members as included or vice versa.
     */
    exclude: boolean | null;
    /**
     * Extended properties for primitive element: Group.characteristic.exclude
     */
    _exclude?: fhir.FhirElement;
    /**
     * The period over which the characteristic is tested; e.g. the patient had an operation during the month of June.
     */
    period?: fhir.Period | undefined;
}
/**
 * Identifies the resource instances that are members of the group.
 */
export interface GroupMember extends fhir.BackboneElement {
    /**
     * A reference to the entity that is a member of the group. Must be consistent with Group.type. If the entity is another group, then the type must be the same.
     */
    entity: fhir.Reference | null;
    /**
     * The period that the member was in the group, if known.
     */
    period?: fhir.Period | undefined;
    /**
     * A flag to indicate that the member is no longer in the group, but previously may have been a member.
     */
    inactive?: boolean | undefined;
    /**
     * Extended properties for primitive element: Group.member.inactive
     */
    _inactive?: fhir.FhirElement;
}
/**
 * Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization.
 */
export interface Group extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "Group";
    /**
     * A unique business identifier for this group.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * Indicates whether the record for the group is available for use or is merely being retained for historical purposes.
     */
    active?: boolean | undefined;
    /**
     * Extended properties for primitive element: Group.active
     */
    _active?: fhir.FhirElement;
    /**
     * Group members SHALL be of the appropriate resource type (Patient for person or animal; or Practitioner, Device, Medication or Substance for the other types.).
     */
    type: 'animal' | 'device' | 'medication' | 'person' | 'practitioner' | 'substance' | null;
    /**
     * Extended properties for primitive element: Group.type
     */
    _type?: fhir.FhirElement;
    /**
     * If true, indicates that the resource refers to a specific group of real individuals.  If false, the group defines a set of intended individuals.
     */
    actual: boolean | null;
    /**
     * Extended properties for primitive element: Group.actual
     */
    _actual?: fhir.FhirElement;
    /**
     * This would generally be omitted for Person resources.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * A label assigned to the group for human identification and communication.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: Group.name
     */
    _name?: fhir.FhirElement;
    /**
     * Note that the quantity may be less than the number of members if some of the members are not active.
     */
    quantity?: number | undefined;
    /**
     * Extended properties for primitive element: Group.quantity
     */
    _quantity?: fhir.FhirElement;
    /**
     * This does not strictly align with ownership of a herd or flock, but may suffice to represent that relationship in simple cases. More complex cases will require an extension.
     */
    managingEntity?: fhir.Reference | undefined;
    /**
     * All the identified characteristics must be true for an entity to a member of the group.
     */
    characteristic?: fhir.GroupCharacteristic[] | undefined;
    /**
     * Identifies the resource instances that are members of the group.
     */
    member?: fhir.GroupMember[] | undefined;
}
//# sourceMappingURL=Group.d.ts.map