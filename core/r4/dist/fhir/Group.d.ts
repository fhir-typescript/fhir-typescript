import * as fhir from '../fhir.js';
import { GroupTypeCodeType } from '../fhirValueSets/GroupTypeCodes.js';
/**
 * Valid arguments for the GroupCharacteristic type.
 */
export interface GroupCharacteristicArgs extends fhir.BackboneElementArgs {
    /**
     * A code that identifies the kind of trait being asserted.
     */
    code: fhir.CodeableConceptArgs | null;
    /**
     * For Range, it means members of the group have a value that falls somewhere within the specified range.
     */
    value?: fhir.CodeableConcept | fhir.FhirBoolean | fhir.Quantity | fhir.Range | fhir.Reference | undefined;
    /**
     * For Range, it means members of the group have a value that falls somewhere within the specified range.
     */
    valueCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * For Range, it means members of the group have a value that falls somewhere within the specified range.
     */
    valueBoolean?: fhir.FhirBoolean | boolean | undefined;
    /**
     * For Range, it means members of the group have a value that falls somewhere within the specified range.
     */
    valueQuantity?: fhir.QuantityArgs | undefined;
    /**
     * For Range, it means members of the group have a value that falls somewhere within the specified range.
     */
    valueRange?: fhir.RangeArgs | undefined;
    /**
     * For Range, it means members of the group have a value that falls somewhere within the specified range.
     */
    valueReference?: fhir.ReferenceArgs | undefined;
    /**
     * This is labeled as "Is Modifier" because applications cannot wrongly include excluded members as included or vice versa.
     */
    exclude: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: Group.characteristic.exclude
     */
    _exclude?: fhir.FhirElementArgs;
    /**
     * The period over which the characteristic is tested; e.g. the patient had an operation during the month of June.
     */
    period?: fhir.PeriodArgs | undefined;
}
/**
 * All the identified characteristics must be true for an entity to a member of the group.
 */
export declare class GroupCharacteristic extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A code that identifies the kind of trait being asserted.
     */
    code: fhir.CodeableConcept | null;
    /**
     * For Range, it means members of the group have a value that falls somewhere within the specified range.
     */
    value: (fhir.CodeableConcept | fhir.FhirBoolean | fhir.Quantity | fhir.Range | fhir.Reference) | null;
    /**
     * Internal flag to properly serialize choice-type element Group.characteristic.value[x]
     */
    protected static readonly _fts_valueIsChoice: true;
    /**
     * This is labeled as "Is Modifier" because applications cannot wrongly include excluded members as included or vice versa.
     */
    exclude: fhir.FhirBoolean | null;
    /**
     * The period over which the characteristic is tested; e.g. the patient had an operation during the month of June.
     */
    period?: fhir.Period | undefined;
    /**
     * Default constructor for GroupCharacteristic - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<GroupCharacteristicArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the GroupMember type.
 */
export interface GroupMemberArgs extends fhir.BackboneElementArgs {
    /**
     * A reference to the entity that is a member of the group. Must be consistent with Group.type. If the entity is another group, then the type must be the same.
     */
    entity: fhir.ReferenceArgs | null;
    /**
     * The period that the member was in the group, if known.
     */
    period?: fhir.PeriodArgs | undefined;
    /**
     * A flag to indicate that the member is no longer in the group, but previously may have been a member.
     */
    inactive?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: Group.member.inactive
     */
    _inactive?: fhir.FhirElementArgs;
}
/**
 * Identifies the resource instances that are members of the group.
 */
export declare class GroupMember extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
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
    inactive?: fhir.FhirBoolean | undefined;
    /**
     * Default constructor for GroupMember - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<GroupMemberArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the Group type.
 */
export interface GroupArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "Group" | undefined;
    /**
     * A unique business identifier for this group.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * Indicates whether the record for the group is available for use or is merely being retained for historical purposes.
     */
    active?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: Group.active
     */
    _active?: fhir.FhirElementArgs;
    /**
     * Group members SHALL be of the appropriate resource type (Patient for person or animal; or Practitioner, Device, Medication or Substance for the other types.).
     */
    type: fhir.FhirCode<GroupTypeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Group.type
     */
    _type?: fhir.FhirElementArgs;
    /**
     * If true, indicates that the resource refers to a specific group of real individuals.  If false, the group defines a set of intended individuals.
     */
    actual: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: Group.actual
     */
    _actual?: fhir.FhirElementArgs;
    /**
     * This would generally be omitted for Person resources.
     */
    code?: fhir.CodeableConceptArgs | undefined;
    /**
     * A label assigned to the group for human identification and communication.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Group.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * Note that the quantity may be less than the number of members if some of the members are not active.
     */
    quantity?: fhir.FhirUnsignedInt | number | undefined;
    /**
     * Extended properties for primitive element: Group.quantity
     */
    _quantity?: fhir.FhirElementArgs;
    /**
     * This does not strictly align with ownership of a herd or flock, but may suffice to represent that relationship in simple cases. More complex cases will require an extension.
     */
    managingEntity?: fhir.ReferenceArgs | undefined;
    /**
     * All the identified characteristics must be true for an entity to a member of the group.
     */
    characteristic?: fhir.GroupCharacteristicArgs[] | undefined;
    /**
     * Identifies the resource instances that are members of the group.
     */
    member?: fhir.GroupMemberArgs[] | undefined;
}
/**
 * Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization.
 */
export declare class Group extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "Group";
    /**
     * A unique business identifier for this group.
     */
    identifier: fhir.Identifier[];
    /**
     * Indicates whether the record for the group is available for use or is merely being retained for historical purposes.
     */
    active?: fhir.FhirBoolean | undefined;
    /**
     * Group members SHALL be of the appropriate resource type (Patient for person or animal; or Practitioner, Device, Medication or Substance for the other types.).
     */
    type: fhir.FhirCode<GroupTypeCodeType> | null;
    /**
     * If true, indicates that the resource refers to a specific group of real individuals.  If false, the group defines a set of intended individuals.
     */
    actual: fhir.FhirBoolean | null;
    /**
     * This would generally be omitted for Person resources.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * A label assigned to the group for human identification and communication.
     */
    name?: fhir.FhirString | undefined;
    /**
     * Note that the quantity may be less than the number of members if some of the members are not active.
     */
    quantity?: fhir.FhirUnsignedInt | undefined;
    /**
     * This does not strictly align with ownership of a herd or flock, but may suffice to represent that relationship in simple cases. More complex cases will require an extension.
     */
    managingEntity?: fhir.Reference | undefined;
    /**
     * All the identified characteristics must be true for an entity to a member of the group.
     */
    characteristic: fhir.GroupCharacteristic[];
    /**
     * Identifies the resource instances that are members of the group.
     */
    member: fhir.GroupMember[];
    /**
     * Default constructor for Group - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<GroupArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=Group.d.ts.map