// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: SupplyDelivery

import * as fhir from '../fhirJson.js';


/**
 * The item that is being delivered or has been supplied.
 */
export interface SupplyDeliverySuppliedItem extends fhir.BackboneElement { 
  /**
   * The amount of supply that has been dispensed. Includes unit of measure.
   */
  quantity?: fhir.Quantity|undefined;
  /**
   * Identifies the medication, substance or device being dispensed. This is either a link to a resource representing the details of the item or a code that identifies the item from a known list.
   */
  itemCodeableConcept?: fhir.CodeableConcept|undefined;
  /**
   * Identifies the medication, substance or device being dispensed. This is either a link to a resource representing the details of the item or a code that identifies the item from a known list.
   */
  itemReference?: fhir.Reference|undefined;
}

/**
 * Record of delivery of what is supplied.
 */
export interface SupplyDelivery extends fhir.DomainResource { 
  /**
   * Resource Type Name
   */
  resourceType: "SupplyDelivery"|null;
  /**
   * This identifier is typically assigned by the dispenser, and may be used to reference the delivery when exchanging information about it with other systems.
   */
  identifier?: (fhir.Identifier|null)[]|undefined;
  /**
   * A plan, proposal or order that is fulfilled in whole or in part by this event.
   */
  basedOn?: (fhir.Reference|null)[]|undefined;
  /**
   * Not to be used to link an event to an Encounter - use Event.context for that.
   * [The allowed reference resources may be adjusted as appropriate for the event resource].
   */
  partOf?: (fhir.Reference|null)[]|undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status?: 'abandoned'|'completed'|'entered-in-error'|'in-progress'|undefined;
  /**
   * Extended properties for primitive element: SupplyDelivery.status
   */
  _status?:fhir.FhirElement;
  /**
   * A link to a resource representing the person whom the delivered item is for.
   */
  patient?: fhir.Reference|undefined;
  /**
   * Indicates the type of dispensing event that is performed. Examples include: Trial Fill, Completion of Trial, Partial Fill, Emergency Fill, Samples, etc.
   */
  type?: 'device'|'medication'|undefined;
  /**
   * The item that is being delivered or has been supplied.
   */
  suppliedItem?: fhir.SupplyDeliverySuppliedItem|undefined;
  /**
   * [The list of types may be constrained as appropriate for the type of event].
   */
  occurrenceDateTime?: string|undefined;
  /**
   * Extended properties for primitive element: SupplyDelivery.occurrence[x]
   */
  _occurrenceDateTime?:fhir.FhirElement;
  /**
   * [The list of types may be constrained as appropriate for the type of event].
   */
  occurrencePeriod?: fhir.Period|undefined;
  /**
   * [The list of types may be constrained as appropriate for the type of event].
   */
  occurrenceTiming?: fhir.Timing|undefined;
  /**
   * The individual responsible for dispensing the medication, supplier or device.
   */
  supplier?: fhir.Reference|undefined;
  /**
   * Identification of the facility/location where the Supply was shipped to, as part of the dispense event.
   */
  destination?: fhir.Reference|undefined;
  /**
   * Identifies the person who picked up the Supply.
   */
  receiver?: (fhir.Reference|null)[]|undefined;
}
