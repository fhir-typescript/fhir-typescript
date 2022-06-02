// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: SupplyDelivery

import * as fhir from '../fhir.js';

// @ts-ignore
import { SupplydeliveryStatusCodings, SupplydeliveryStatusCodingType,} from '../fhirValueSets/SupplydeliveryStatusCodings.js';
// @ts-ignore
import { SupplydeliveryStatusCodes,  SupplydeliveryStatusCodeType } from '../fhirValueSets/SupplydeliveryStatusCodes.js';
// @ts-ignore
import { SupplydeliveryTypeCodings, SupplydeliveryTypeCodingType,} from '../fhirValueSets/SupplydeliveryTypeCodings.js';
// @ts-ignore
import { SupplydeliveryTypeCodes,  SupplydeliveryTypeCodeType } from '../fhirValueSets/SupplydeliveryTypeCodes.js';
/**
 * Valid arguments for the SupplyDeliverySuppliedItem type.
 */
export interface SupplyDeliverySuppliedItemArgs extends fhir.BackboneElementArgs {
  /**
   * The amount of supply that has been dispensed. Includes unit of measure.
   */
  quantity?: fhir.QuantityArgs|undefined;
  /**
   * Identifies the medication, substance or device being dispensed. This is either a link to a resource representing the details of the item or a code that identifies the item from a known list.
   */
  item?: fhir.CodeableConcept|fhir.Reference|undefined;
  /**
   * Identifies the medication, substance or device being dispensed. This is either a link to a resource representing the details of the item or a code that identifies the item from a known list.
   */
  itemCodeableConcept?: fhir.CodeableConceptArgs|undefined;
  /**
   * Identifies the medication, substance or device being dispensed. This is either a link to a resource representing the details of the item or a code that identifies the item from a known list.
   */
  itemReference?: fhir.ReferenceArgs|undefined;
}

/**
 * The item that is being delivered or has been supplied.
 */
export class SupplyDeliverySuppliedItem extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'SupplyDeliverySuppliedItem';
  /**
   * The amount of supply that has been dispensed. Includes unit of measure.
   */
  public quantity?: fhir.Quantity|undefined;
  /**
   * Identifies the medication, substance or device being dispensed. This is either a link to a resource representing the details of the item or a code that identifies the item from a known list.
   */
  public item?: (fhir.CodeableConcept|fhir.Reference)|undefined;
  /**
   * Internal flag to properly serialize choice-type element SupplyDelivery.suppliedItem.item[x]
   */
  protected static readonly _fts_itemIsChoice:true = true;
  /**
   * Default constructor for SupplyDeliverySuppliedItem - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<SupplyDeliverySuppliedItemArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['quantity']) { this.quantity = new fhir.Quantity(source.quantity); }
    if (source['item']) { this.item = source.item; }
    else if (source['itemCodeableConcept']) { this.item = new fhir.CodeableConcept(source.itemCodeableConcept); }
    else if (source['itemReference']) { this.item = new fhir.Reference(source.itemReference); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(expression:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(expression);
    if (expression === '') { expression = 'SupplyDelivery.suppliedItem' }
    if (this["quantity"]) { issues.push(...this.quantity.doModelValidation(expression+'.quantity')); }
    return issues;
  }
}
/**
 * Valid arguments for the SupplyDelivery type.
 */
export interface SupplyDeliveryArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "SupplyDelivery"|undefined;
  /**
   * This identifier is typically assigned by the dispenser, and may be used to reference the delivery when exchanging information about it with other systems.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * A plan, proposal or order that is fulfilled in whole or in part by this event.
   */
  basedOn?: fhir.ReferenceArgs[]|undefined;
  /**
   * Not to be used to link an event to an Encounter - use Event.context for that.
   * [The allowed reference resources may be adjusted as appropriate for the event resource].
   */
  partOf?: fhir.ReferenceArgs[]|undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status?: fhir.FhirCode<SupplydeliveryStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: SupplyDelivery.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * A link to a resource representing the person whom the delivered item is for.
   */
  patient?: fhir.ReferenceArgs|undefined;
  /**
   * Indicates the type of dispensing event that is performed. Examples include: Trial Fill, Completion of Trial, Partial Fill, Emergency Fill, Samples, etc.
   */
  type?: fhir.CodeableConceptArgs|undefined;
  /**
   * The item that is being delivered or has been supplied.
   */
  suppliedItem?: fhir.SupplyDeliverySuppliedItemArgs|undefined;
  /**
   * [The list of types may be constrained as appropriate for the type of event].
   */
  occurrence?: fhir.FhirDateTime|fhir.Period|fhir.Timing|undefined;
  /**
   * [The list of types may be constrained as appropriate for the type of event].
   */
  occurrenceDateTime?: fhir.FhirDateTime|string|undefined;
  /**
   * [The list of types may be constrained as appropriate for the type of event].
   */
  occurrencePeriod?: fhir.PeriodArgs|undefined;
  /**
   * [The list of types may be constrained as appropriate for the type of event].
   */
  occurrenceTiming?: fhir.TimingArgs|undefined;
  /**
   * The individual responsible for dispensing the medication, supplier or device.
   */
  supplier?: fhir.ReferenceArgs|undefined;
  /**
   * Identification of the facility/location where the Supply was shipped to, as part of the dispense event.
   */
  destination?: fhir.ReferenceArgs|undefined;
  /**
   * Identifies the person who picked up the Supply.
   */
  receiver?: fhir.ReferenceArgs[]|undefined;
}

/**
 * Record of delivery of what is supplied.
 */
export class SupplyDelivery extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'SupplyDelivery';
  /**
   * Resource Type Name
   */
  public override resourceType: "SupplyDelivery";
  /**
   * This identifier is typically assigned by the dispenser, and may be used to reference the delivery when exchanging information about it with other systems.
   */
  public identifier: fhir.Identifier[];
  /**
   * A plan, proposal or order that is fulfilled in whole or in part by this event.
   */
  public basedOn: fhir.Reference[];
  /**
   * Not to be used to link an event to an Encounter - use Event.context for that.
   * [The allowed reference resources may be adjusted as appropriate for the event resource].
   */
  public partOf: fhir.Reference[];
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  public status?: fhir.FhirCode<SupplydeliveryStatusCodeType>|undefined;
  /**
   * A link to a resource representing the person whom the delivered item is for.
   */
  public patient?: fhir.Reference|undefined;
  /**
   * Indicates the type of dispensing event that is performed. Examples include: Trial Fill, Completion of Trial, Partial Fill, Emergency Fill, Samples, etc.
   */
  public type?: fhir.CodeableConcept|undefined;
  /**
   * The item that is being delivered or has been supplied.
   */
  public suppliedItem?: fhir.SupplyDeliverySuppliedItem|undefined;
  /**
   * [The list of types may be constrained as appropriate for the type of event].
   */
  public occurrence?: (fhir.FhirDateTime|fhir.Period|fhir.Timing)|undefined;
  /**
   * Internal flag to properly serialize choice-type element SupplyDelivery.occurrence[x]
   */
  protected static readonly _fts_occurrenceIsChoice:true = true;
  /**
   * The individual responsible for dispensing the medication, supplier or device.
   */
  public supplier?: fhir.Reference|undefined;
  /**
   * Identification of the facility/location where the Supply was shipped to, as part of the dispense event.
   */
  public destination?: fhir.Reference|undefined;
  /**
   * Identifies the person who picked up the Supply.
   */
  public receiver: fhir.Reference[];
  /**
   * Default constructor for SupplyDelivery - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<SupplyDeliveryArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'SupplyDelivery';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['basedOn']) { this.basedOn = source.basedOn.map((x) => new fhir.Reference(x)); }
    else { this.basedOn = []; }
    if (source['partOf']) { this.partOf = source.partOf.map((x) => new fhir.Reference(x)); }
    else { this.partOf = []; }
    if (source['status']) { this.status = new fhir.FhirCode<SupplydeliveryStatusCodeType>({value: source.status}); }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<SupplydeliveryStatusCodeType>(source._status as Partial<fhir.FhirCode>); }
    }
    if (source['patient']) { this.patient = new fhir.Reference(source.patient); }
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type); }
    if (source['suppliedItem']) { this.suppliedItem = new fhir.SupplyDeliverySuppliedItem(source.suppliedItem); }
    if (source['occurrence']) { this.occurrence = source.occurrence; }
    else if (source['occurrenceDateTime']) { this.occurrence = new fhir.FhirDateTime({value: source.occurrenceDateTime}); }
    else if (source['occurrencePeriod']) { this.occurrence = new fhir.Period(source.occurrencePeriod); }
    else if (source['occurrenceTiming']) { this.occurrence = new fhir.Timing(source.occurrenceTiming); }
    if (source['supplier']) { this.supplier = new fhir.Reference(source.supplier); }
    if (source['destination']) { this.destination = new fhir.Reference(source.destination); }
    if (source['receiver']) { this.receiver = source.receiver.map((x) => new fhir.Reference(x)); }
    else { this.receiver = []; }
  }
  /**
   * Required-bound Value Set for status (SupplyDelivery.status)
   */
  public static get statusRequiredCodes() {
    return SupplydeliveryStatusCodes;
  }
  /**
   * Required-bound Value Set for type (SupplyDelivery.type)
   */
  public static get typeRequiredCodes() {
    return SupplydeliveryTypeCodes;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(expression:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(expression);
    if (expression === '') { expression = 'SupplyDelivery' }
    if (!this['resourceType']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property resourceType fhir: SupplyDelivery.resourceType:"SupplyDelivery"', expression: [expression] });
    }
    if (this["identifier"]) { this.identifier.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.identifier[${i}]`)); }) }
    if (this["basedOn"]) { this.basedOn.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.basedOn[${i}]`)); }) }
    if (this["partOf"]) { this.partOf.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.partOf[${i}]`)); }) }
    if (this['status'] && (!Object.values(SupplydeliveryStatusCodes).includes(this.status.value as any))) {
      issues.push({ severity: 'error', code: 'code-invalid', diagnostics: 'Invalid code property status fhir: SupplyDelivery.status:code Required binding to: SupplydeliveryStatus', expression: [expression] });
    }
    if (this["status"]) { issues.push(...this.status.doModelValidation(expression+'.status')); }
    if (this["patient"]) { issues.push(...this.patient.doModelValidation(expression+'.patient')); }
    if (this["type"]) { issues.push(...this.type.doModelValidation(expression+'.type')); }
    if (this["suppliedItem"]) { issues.push(...this.suppliedItem.doModelValidation(expression+'.suppliedItem')); }
    if (this["supplier"]) { issues.push(...this.supplier.doModelValidation(expression+'.supplier')); }
    if (this["destination"]) { issues.push(...this.destination.doModelValidation(expression+'.destination')); }
    if (this["receiver"]) { this.receiver.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.receiver[${i}]`)); }) }
    return issues;
  }
}
