import * as fhir from '../fhir.js';
import { GroupTypeCodeType } from '../fhirValueSets/GroupTypeCodes.js';
/**
 * Valid arguments for the GroupCharacteristic type.
 */
export interface GroupCharacteristicArgs extends fhir.BackboneElementArgs {
    /**
     * Need a formal way of identifying the characteristic being described.
     */
    code: fhir.CodeableConceptArgs | null;
    /**
     * The value of the characteristic is what determines group membership.
     */
    value?: fhir.CodeableConcept | fhir.FhirBoolean | fhir.Quantity | fhir.Range | undefined;
    /**
     * The value of the characteristic is what determines group membership.
     */
    valueCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * The value of the characteristic is what determines group membership.
     */
    valueBoolean?: fhir.FhirBoolean | boolean | undefined;
    /**
     * The value of the characteristic is what determines group membership.
     */
    valueQuantity?: fhir.QuantityArgs | undefined;
    /**
     * The value of the characteristic is what determines group membership.
     */
    valueRange?: fhir.RangeArgs | undefined;
    /**
     * Sometimes group membership is determined by characteristics not possessed.
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
 * Needs to be a generic mechanism for identifying what individuals can be part of a group.
 */
export declare class GroupCharacteristic extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Need a formal way of identifying the characteristic being described.
     */
    code: fhir.CodeableConcept | null;
    /**
     * The value of the characteristic is what determines group membership.
     */
    value: (fhir.CodeableConcept | fhir.FhirBoolean | fhir.Quantity | fhir.Range) | null;
    /**
     * Internal flag to properly serialize choice-type element Group.characteristic.value[x]
     */
    protected static readonly _fts_valueIsChoice: true;
    /**
     * Sometimes group membership is determined by characteristics not possessed.
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
     * A reference to the entity that is a member of the group. Must be consistent with Group.type.
     */
    entity: fhir.ReferenceArgs | null;
    /**
     * Need to track who was in a group at a  particular time.
     */
    period?: fhir.PeriodArgs | undefined;
    /**
     * Sometimes you don't know when someone stopped being in a group, but not when.
     */
    inactive?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: Group.member.inactive
     */
    _inactive?: fhir.FhirElementArgs;
}
/**
 * Often the only thing of interest about a group is "who's in it".
 */
export declare class GroupMember extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
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
     * Allows the group to be referenced from external specifications.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * Identifies what type of resources the group is made up of.
     */
    type: fhir.FhirCode<GroupTypeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Group.type
     */
    _type?: fhir.FhirElementArgs;
    /**
     * There are use-cases for groups that define specific collections of individuals, and other groups that define "types" of intended individuals.  The requirements for both kinds of groups are similar, so we use a single resource, distinguished by this flag.
     */
    actual: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: Group.actual
     */
    _actual?: fhir.FhirElementArgs;
    /**
     * Provides a specific type of resource the group includes; e.g. "cow", "syringe", etc.
     */
    code?: fhir.CodeableConceptArgs | undefined;
    /**
     * Used to identify the group in human communication.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Group.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * Group size is a common defining characteristic.
     */
    quantity?: fhir.FhirUnsignedInt | number | undefined;
    /**
     * Extended properties for primitive element: Group.quantity
     */
    _quantity?: fhir.FhirElementArgs;
    /**
     * Needs to be a generic mechanism for identifying what individuals can be part of a group.
     */
    characteristic?: fhir.GroupCharacteristicArgs[] | undefined;
    /**
     * Often the only thing of interest about a group is "who's in it".
     */
    member?: fhir.GroupMemberArgs[] | undefined;
}
/**
 * Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization.
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
     * Allows the group to be referenced from external specifications.
     */
    identifier: fhir.Identifier[];
    /**
     * Identifies what type of resources the group is made up of.
     */
    type: fhir.FhirCode<GroupTypeCodeType> | null;
    /**
     * There are use-cases for groups that define specific collections of individuals, and other groups that define "types" of intended individuals.  The requirements for both kinds of groups are similar, so we use a single resource, distinguished by this flag.
     */
    actual: fhir.FhirBoolean | null;
    /**
     * Provides a specific type of resource the group includes; e.g. "cow", "syringe", etc.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * Used to identify the group in human communication.
     */
    name?: fhir.FhirString | undefined;
    /**
     * Group size is a common defining characteristic.
     */
    quantity?: fhir.FhirUnsignedInt | undefined;
    /**
     * Needs to be a generic mechanism for identifying what individuals can be part of a group.
     */
    characteristic: fhir.GroupCharacteristic[];
    /**
     * Often the only thing of interest about a group is "who's in it".
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