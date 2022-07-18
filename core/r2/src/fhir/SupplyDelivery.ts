// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: SupplyDelivery

import * as fhir from '../fhir.js';

// @ts-ignore
import { SupplydeliveryStatusCodes,  SupplydeliveryStatusCodeType } from '../fhirValueSets/SupplydeliveryStatusCodes.js';
// @ts-ignore
import { SupplydeliveryStatusVsValidation } from '../fhirValueSets/SupplydeliveryStatusVsValidation.js';
/**
 * Valid arguments for the SupplyDelivery type.
 */
export interface SupplyDeliveryArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "SupplyDelivery"|undefined;
  /**
   * Identifier assigned by the dispensing facility when the item(s) is dispensed.
   */
  identifier?: fhir.IdentifierArgs|undefined;
  /**
   * A code specifying the state of the dispense event.
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
   * The amount of supply that has been dispensed. Includes unit of measure.
   */
  quantity?: fhir.QuantityArgs|undefined;
  /**
   * Identifies the medication, substance or device being dispensed. This is either a link to a resource representing the details of the item or a simple attribute carrying a code that identifies the item from a known list.
   */
  suppliedItem?: fhir.ReferenceArgs|undefined;
  /**
   * The individual responsible for dispensing the medication, supplier or device.
   */
  supplier?: fhir.ReferenceArgs|undefined;
  /**
   * The time the dispense event occurred.
   */
  whenPrepared?: fhir.PeriodArgs|undefined;
  /**
   * The time the dispensed item was sent or handed to the patient (or agent).
   */
  time?: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: SupplyDelivery.time
   */
  _time?:fhir.FhirElementArgs;
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
   * Identifier assigned by the dispensing facility when the item(s) is dispensed.
   */
  public identifier?: fhir.Identifier|undefined;
  /**
   * A code specifying the state of the dispense event.
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
   * The amount of supply that has been dispensed. Includes unit of measure.
   */
  public quantity?: fhir.Quantity|undefined;
  /**
   * Identifies the medication, substance or device being dispensed. This is either a link to a resource representing the details of the item or a simple attribute carrying a code that identifies the item from a known list.
   */
  public suppliedItem?: fhir.Reference|undefined;
  /**
   * The individual responsible for dispensing the medication, supplier or device.
   */
  public supplier?: fhir.Reference|undefined;
  /**
   * The time the dispense event occurred.
   */
  public whenPrepared?: fhir.Period|undefined;
  /**
   * The time the dispensed item was sent or handed to the patient (or agent).
   */
  public time?: fhir.FhirDateTime|undefined;
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
    if (source['identifier']) { this.identifier = new fhir.Identifier(source.identifier); }
    if (source['status']) { this.status = new fhir.FhirCode<SupplydeliveryStatusCodeType>({value: source.status}); }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<SupplydeliveryStatusCodeType>(source._status as Partial<fhir.FhirCode>); }
    }
    if (source['patient']) { this.patient = new fhir.Reference(source.patient); }
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type); }
    if (source['quantity']) { this.quantity = new fhir.Quantity(source.quantity); }
    if (source['suppliedItem']) { this.suppliedItem = new fhir.Reference(source.suppliedItem); }
    if (source['supplier']) { this.supplier = new fhir.Reference(source.supplier); }
    if (source['whenPrepared']) { this.whenPrepared = new fhir.Period(source.whenPrepared); }
    if (source['time']) { this.time = new fhir.FhirDateTime({value: source.time}); }
    if (source['_time']) {
      if (this.time) { this.time.addExtendedProperties(source._time!); }
      else { this.time = new fhir.FhirDateTime(source._time as Partial<fhir.FhirDateTimeArgs>); }
    }
    if (source['destination']) { this.destination = new fhir.Reference(source.destination); }
    if (source['receiver']) { this.receiver = source.receiver.map((x) => new fhir.Reference(x)); }
    else { this.receiver = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'SupplyDelivery' }
    iss.push(...this.vRPS('resourceType',exp));
    iss.push(...this.vOS('identifier',exp));
    iss.push(...this.vOSV('status',exp,'SupplydeliveryStatus',SupplydeliveryStatusVsValidation,'r'));
    iss.push(...this.vOS('patient',exp));
    iss.push(...this.vOS('type',exp));
    iss.push(...this.vOS('quantity',exp));
    iss.push(...this.vOS('suppliedItem',exp));
    iss.push(...this.vOS('supplier',exp));
    iss.push(...this.vOS('whenPrepared',exp));
    iss.push(...this.vOS('time',exp));
    iss.push(...this.vOS('destination',exp));
    iss.push(...this.vOA('receiver',exp));
    return iss;
  }
}
