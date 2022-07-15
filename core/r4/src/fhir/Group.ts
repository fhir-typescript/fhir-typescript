// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: Group

import * as fhir from '../fhir.js';

// @ts-ignore
import { GroupTypeCodes,  GroupTypeCodeType } from '../fhirValueSets/GroupTypeCodes.js';
// @ts-ignore
import { GroupTypeVsValidation } from '../fhirValueSets/GroupTypeVsValidation.js';
/**
 * Valid arguments for the GroupCharacteristic type.
 */
export interface GroupCharacteristicArgs extends fhir.BackboneElementArgs {
  /**
   * A code that identifies the kind of trait being asserted.
   */
  code: fhir.CodeableConceptArgs|null;
  /**
   * For Range, it means members of the group have a value that falls somewhere within the specified range.
   */
  value?: fhir.CodeableConcept|fhir.FhirBoolean|fhir.Quantity|fhir.Range|fhir.Reference|undefined;
  /**
   * For Range, it means members of the group have a value that falls somewhere within the specified range.
   */
  valueCodeableConcept?: fhir.CodeableConceptArgs|undefined;
  /**
   * For Range, it means members of the group have a value that falls somewhere within the specified range.
   */
  valueBoolean?: fhir.FhirBoolean|boolean|undefined;
  /**
   * For Range, it means members of the group have a value that falls somewhere within the specified range.
   */
  valueQuantity?: fhir.QuantityArgs|undefined;
  /**
   * For Range, it means members of the group have a value that falls somewhere within the specified range.
   */
  valueRange?: fhir.RangeArgs|undefined;
  /**
   * For Range, it means members of the group have a value that falls somewhere within the specified range.
   */
  valueReference?: fhir.ReferenceArgs|undefined;
  /**
   * This is labeled as "Is Modifier" because applications cannot wrongly include excluded members as included or vice versa.
   */
  exclude: fhir.FhirBoolean|boolean|undefined;
  /**
   * Extended properties for primitive element: Group.characteristic.exclude
   */
  _exclude?:fhir.FhirElementArgs;
  /**
   * The period over which the characteristic is tested; e.g. the patient had an operation during the month of June.
   */
  period?: fhir.PeriodArgs|undefined;
}

/**
 * All the identified characteristics must be true for an entity to a member of the group.
 */
export class GroupCharacteristic extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'GroupCharacteristic';
  /**
   * A code that identifies the kind of trait being asserted.
   */
  public code: fhir.CodeableConcept|null;
  /**
   * For Range, it means members of the group have a value that falls somewhere within the specified range.
   */
  public value: (fhir.CodeableConcept|fhir.FhirBoolean|fhir.Quantity|fhir.Range|fhir.Reference)|null;
  /**
   * Internal flag to properly serialize choice-type element Group.characteristic.value[x]
   */
  protected static readonly _fts_valueIsChoice:true = true;
  /**
   * This is labeled as "Is Modifier" because applications cannot wrongly include excluded members as included or vice versa.
   */
  public exclude: fhir.FhirBoolean|null;
  /**
   * The period over which the characteristic is tested; e.g. the patient had an operation during the month of June.
   */
  public period?: fhir.Period|undefined;
  /**
   * Default constructor for GroupCharacteristic - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<GroupCharacteristicArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['code']) { this.code = new fhir.CodeableConcept(source.code); }
    else { this.code = null; }
    if (source['value']) { this.value = source.value; }
    else if (source['valueCodeableConcept']) { this.value = new fhir.CodeableConcept(source.valueCodeableConcept); }
    else if (source['valueBoolean']) { this.value = new fhir.FhirBoolean({value: source.valueBoolean}); }
    else if (source['valueQuantity']) { this.value = new fhir.Quantity(source.valueQuantity); }
    else if (source['valueRange']) { this.value = new fhir.Range(source.valueRange); }
    else if (source['valueReference']) { this.value = new fhir.Reference(source.valueReference); }
    else { this.value = null; }
    if (source['exclude']) { this.exclude = new fhir.FhirBoolean({value: source.exclude}); }
    else { this.exclude = null; }
    if (source['_exclude']) {
      if (this.exclude) { this.exclude.addExtendedProperties(source._exclude!); }
      else { this.exclude = new fhir.FhirBoolean(source._exclude as Partial<fhir.FhirBooleanArgs>); }
    }
    if (source['period']) { this.period = new fhir.Period(source.period); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Group.characteristic' }
    this.vRS('code',exp)
    this.vRS('value',exp)
    this.vRS('exclude',exp)
    this.vOS('period',exp)
    return issues;
  }
}
/**
 * Valid arguments for the GroupMember type.
 */
export interface GroupMemberArgs extends fhir.BackboneElementArgs {
  /**
   * A reference to the entity that is a member of the group. Must be consistent with Group.type. If the entity is another group, then the type must be the same.
   */
  entity: fhir.ReferenceArgs|null;
  /**
   * The period that the member was in the group, if known.
   */
  period?: fhir.PeriodArgs|undefined;
  /**
   * A flag to indicate that the member is no longer in the group, but previously may have been a member.
   */
  inactive?: fhir.FhirBoolean|boolean|undefined;
  /**
   * Extended properties for primitive element: Group.member.inactive
   */
  _inactive?:fhir.FhirElementArgs;
}

/**
 * Identifies the resource instances that are members of the group.
 */
export class GroupMember extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'GroupMember';
  /**
   * A reference to the entity that is a member of the group. Must be consistent with Group.type. If the entity is another group, then the type must be the same.
   */
  public entity: fhir.Reference|null;
  /**
   * The period that the member was in the group, if known.
   */
  public period?: fhir.Period|undefined;
  /**
   * A flag to indicate that the member is no longer in the group, but previously may have been a member.
   */
  public inactive?: fhir.FhirBoolean|undefined;
  /**
   * Default constructor for GroupMember - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<GroupMemberArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['entity']) { this.entity = new fhir.Reference(source.entity); }
    else { this.entity = null; }
    if (source['period']) { this.period = new fhir.Period(source.period); }
    if (source['inactive']) { this.inactive = new fhir.FhirBoolean({value: source.inactive}); }
    if (source['_inactive']) {
      if (this.inactive) { this.inactive.addExtendedProperties(source._inactive!); }
      else { this.inactive = new fhir.FhirBoolean(source._inactive as Partial<fhir.FhirBooleanArgs>); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Group.member' }
    this.vRS('entity',exp)
    this.vOS('period',exp)
    this.vOS('inactive',exp)
    return issues;
  }
}
/**
 * Valid arguments for the Group type.
 */
export interface GroupArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "Group"|undefined;
  /**
   * A unique business identifier for this group.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * Indicates whether the record for the group is available for use or is merely being retained for historical purposes.
   */
  active?: fhir.FhirBoolean|boolean|undefined;
  /**
   * Extended properties for primitive element: Group.active
   */
  _active?:fhir.FhirElementArgs;
  /**
   * Group members SHALL be of the appropriate resource type (Patient for person or animal; or Practitioner, Device, Medication or Substance for the other types.).
   */
  type: fhir.FhirCode<GroupTypeCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: Group.type
   */
  _type?:fhir.FhirElementArgs;
  /**
   * If true, indicates that the resource refers to a specific group of real individuals.  If false, the group defines a set of intended individuals.
   */
  actual: fhir.FhirBoolean|boolean|undefined;
  /**
   * Extended properties for primitive element: Group.actual
   */
  _actual?:fhir.FhirElementArgs;
  /**
   * This would generally be omitted for Person resources.
   */
  code?: fhir.CodeableConceptArgs|undefined;
  /**
   * A label assigned to the group for human identification and communication.
   */
  name?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Group.name
   */
  _name?:fhir.FhirElementArgs;
  /**
   * Note that the quantity may be less than the number of members if some of the members are not active.
   */
  quantity?: fhir.FhirUnsignedInt|number|undefined;
  /**
   * Extended properties for primitive element: Group.quantity
   */
  _quantity?:fhir.FhirElementArgs;
  /**
   * This does not strictly align with ownership of a herd or flock, but may suffice to represent that relationship in simple cases. More complex cases will require an extension.
   */
  managingEntity?: fhir.ReferenceArgs|undefined;
  /**
   * All the identified characteristics must be true for an entity to a member of the group.
   */
  characteristic?: fhir.GroupCharacteristicArgs[]|undefined;
  /**
   * Identifies the resource instances that are members of the group.
   */
  member?: fhir.GroupMemberArgs[]|undefined;
}

/**
 * Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization.
 */
export class Group extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'Group';
  /**
   * Resource Type Name
   */
  public override resourceType: "Group";
  /**
   * A unique business identifier for this group.
   */
  public identifier: fhir.Identifier[];
  /**
   * Indicates whether the record for the group is available for use or is merely being retained for historical purposes.
   */
  public active?: fhir.FhirBoolean|undefined;
  /**
   * Group members SHALL be of the appropriate resource type (Patient for person or animal; or Practitioner, Device, Medication or Substance for the other types.).
   */
  public type: fhir.FhirCode<GroupTypeCodeType>|null;
  /**
   * If true, indicates that the resource refers to a specific group of real individuals.  If false, the group defines a set of intended individuals.
   */
  public actual: fhir.FhirBoolean|null;
  /**
   * This would generally be omitted for Person resources.
   */
  public code?: fhir.CodeableConcept|undefined;
  /**
   * A label assigned to the group for human identification and communication.
   */
  public name?: fhir.FhirString|undefined;
  /**
   * Note that the quantity may be less than the number of members if some of the members are not active.
   */
  public quantity?: fhir.FhirUnsignedInt|undefined;
  /**
   * This does not strictly align with ownership of a herd or flock, but may suffice to represent that relationship in simple cases. More complex cases will require an extension.
   */
  public managingEntity?: fhir.Reference|undefined;
  /**
   * All the identified characteristics must be true for an entity to a member of the group.
   */
  public characteristic: fhir.GroupCharacteristic[];
  /**
   * Identifies the resource instances that are members of the group.
   */
  public member: fhir.GroupMember[];
  /**
   * Default constructor for Group - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<GroupArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'Group';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['active']) { this.active = new fhir.FhirBoolean({value: source.active}); }
    if (source['_active']) {
      if (this.active) { this.active.addExtendedProperties(source._active!); }
      else { this.active = new fhir.FhirBoolean(source._active as Partial<fhir.FhirBooleanArgs>); }
    }
    if (source['type']) { this.type = new fhir.FhirCode<GroupTypeCodeType>({value: source.type}); }
    else { this.type = null; }
    if (source['_type']) {
      if (this.type) { this.type.addExtendedProperties(source._type!); }
      else { this.type = new fhir.FhirCode<GroupTypeCodeType>(source._type as Partial<fhir.FhirCode>); }
    }
    if (source['actual']) { this.actual = new fhir.FhirBoolean({value: source.actual}); }
    else { this.actual = null; }
    if (source['_actual']) {
      if (this.actual) { this.actual.addExtendedProperties(source._actual!); }
      else { this.actual = new fhir.FhirBoolean(source._actual as Partial<fhir.FhirBooleanArgs>); }
    }
    if (source['code']) { this.code = new fhir.CodeableConcept(source.code); }
    if (source['name']) { this.name = new fhir.FhirString({value: source.name}); }
    if (source['_name']) {
      if (this.name) { this.name.addExtendedProperties(source._name!); }
      else { this.name = new fhir.FhirString(source._name as Partial<fhir.FhirStringArgs>); }
    }
    if (source['quantity']) { this.quantity = new fhir.FhirUnsignedInt({value: source.quantity}); }
    if (source['_quantity']) {
      if (this.quantity) { this.quantity.addExtendedProperties(source._quantity!); }
      else { this.quantity = new fhir.FhirUnsignedInt(source._quantity as Partial<fhir.FhirUnsignedIntArgs>); }
    }
    if (source['managingEntity']) { this.managingEntity = new fhir.Reference(source.managingEntity); }
    if (source['characteristic']) { this.characteristic = source.characteristic.map((x) => new fhir.GroupCharacteristic(x)); }
    else { this.characteristic = []; }
    if (source['member']) { this.member = source.member.map((x) => new fhir.GroupMember(x)); }
    else { this.member = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Group' }
    this.vRS('resourceType',exp)
    this.vOA('identifier',exp)
    this.vOS('active',exp)
    this.vRSV('type',exp,'GroupType',GroupTypeVsValidation,'r')
    this.vRS('actual',exp)
    this.vOS('code',exp)
    this.vOS('name',exp)
    this.vOS('quantity',exp)
    this.vOS('managingEntity',exp)
    this.vOA('characteristic',exp)
    this.vOA('member',exp)
    return issues;
  }
}
