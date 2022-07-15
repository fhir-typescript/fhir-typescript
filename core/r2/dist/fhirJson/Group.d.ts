import * as fhir from '../fhirJson.js';
/**
 * Needs to be a generic mechanism for identifying what individuals can be part of a group.
 */
export interface GroupCharacteristic extends fhir.BackboneElement {
    /**
     * Need a formal way of identifying the characteristic being described.
     */
    code: fhir.CodeableConcept | null;
    /**
     * The value of the characteristic is what determines group membership.
     */
    valueCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * The value of the characteristic is what determines group membership.
     */
    valueBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: Group.characteristic.value[x]
     */
    _valueBoolean?: fhir.FhirElement;
    /**
     * The value of the characteristic is what determines group membership.
     */
    valueQuantity?: fhir.Quantity | undefined;
    /**
     * The value of the characteristic is what determines group membership.
     */
    valueRange?: fhir.Range | undefined;
    /**
     * Sometimes group membership is determined by characteristics not possessed.
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
 * Often the only thing of interest about a group is "who's in it".
 */
export interface GroupMember extends fhir.BackboneElement {
    /**
     * A reference to the entity that is a member of the group. Must be consistent with Group.type.
     */
    entity: fhir.Reference | null;
    /**
     * Need to track who was in a group at a  particular time.
     */
    period?: fhir.Period | undefined;
    /**
     * Sometimes you don't know when someone stopped being in a group, but not when.
     */
    inactive?: boolean | undefined;
    /**
     * Extended properties for primitive element: Group.member.inactive
     */
    _inactive?: fhir.FhirElement;
}
/**
 * Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization.
 */
export interface Group extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "Group" | null;
    /**
     * Allows the group to be referenced from external specifications.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * Identifies what type of resources the group is made up of.
     */
    type: 'animal' | 'device' | 'medication' | 'person' | 'practitioner' | 'substance' | null;
    /**
     * Extended properties for primitive element: Group.type
     */
    _type?: fhir.FhirElement;
    /**
     * There are use-cases for groups that define specific collections of individuals, and other groups that define "types" of intended individuals.  The requirements for both kinds of groups are similar, so we use a single resource, distinguished by this flag.
     */
    actual: boolean | null;
    /**
     * Extended properties for primitive element: Group.actual
     */
    _actual?: fhir.FhirElement;
    /**
     * Provides a specific type of resource the group includes; e.g. "cow", "syringe", etc.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * Used to identify the group in human communication.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: Group.name
     */
    _name?: fhir.FhirElement;
    /**
     * Group size is a common defining characteristic.
     */
    quantity?: number | undefined;
    /**
     * Extended properties for primitive element: Group.quantity
     */
    _quantity?: fhir.FhirElement;
    /**
     * Needs to be a generic mechanism for identifying what individuals can be part of a group.
     */
    characteristic?: (fhir.GroupCharacteristic | null)[] | undefined;
    /**
     * Often the only thing of interest about a group is "who's in it".
     */
    member?: (fhir.GroupMember | null)[] | undefined;
}
//# sourceMappingURL=Group.d.ts.map