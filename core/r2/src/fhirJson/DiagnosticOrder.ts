// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: DiagnosticOrder

import * as fhir from '../fhirJson.js';


/**
 * A summary of the events of interest that have occurred as the request is processed; e.g. when the order was made, various processing steps (specimens received), when it was completed.
 */
export interface DiagnosticOrderEvent extends fhir.BackboneElement { 
  /**
   * The status for the event.
   */
  status: 'accepted'|'cancelled'|'completed'|'draft'|'failed'|'in-progress'|'planned'|'proposed'|'received'|'rejected'|'requested'|'review'|'suspended'|null;
  /**
   * Extended properties for primitive element: DiagnosticOrder.event.status
   */
  _status?:fhir.FhirElement;
  /**
   * Additional information about the event that occurred - e.g. if the status remained unchanged.
   */
  description?: fhir.CodeableConcept|undefined;
  /**
   * The date/time at which the event occurred.
   */
  dateTime: string|null;
  /**
   * Extended properties for primitive element: DiagnosticOrder.event.dateTime
   */
  _dateTime?:fhir.FhirElement;
  /**
   * The person responsible for performing or recording the action.
   */
  actor?: fhir.Reference|undefined;
}

/**
 * The specific diagnostic investigations that are requested as part of this request. Sometimes, there can only be one item per request, but in most contexts, more than one investigation can be requested.
 */
export interface DiagnosticOrderItem extends fhir.BackboneElement { 
  /**
   * A code that identifies a particular diagnostic investigation, or panel of investigations, that have been requested.
   */
  code: fhir.CodeableConcept|null;
  /**
   * If the item is related to a specific specimen.
   */
  specimen?: (fhir.Reference|null)[]|undefined;
  /**
   * Anatomical location where the request test should be performed.  This is the target site.
   */
  bodySite?: fhir.CodeableConcept|undefined;
  /**
   * The status of this individual item within the order.
   */
  status?: 'accepted'|'cancelled'|'completed'|'draft'|'failed'|'in-progress'|'planned'|'proposed'|'received'|'rejected'|'requested'|'review'|'suspended'|undefined;
  /**
   * Extended properties for primitive element: DiagnosticOrder.item.status
   */
  _status?:fhir.FhirElement;
  /**
   * A summary of the events of interest that have occurred as this item of the request is processed.
   */
  event?: (fhir.DiagnosticOrderEvent|null)[]|undefined;
}

/**
 * A record of a request for a diagnostic investigation service to be performed.
 */
export interface DiagnosticOrder extends fhir.DomainResource { 
  /**
   * Resource Type Name
   */
  resourceType: "DiagnosticOrder"|null;
  /**
   * Who or what the investigation is to be performed on. This is usually a human patient, but diagnostic tests can also be requested on animals, groups of humans or animals, devices such as dialysis machines, or even locations (typically for environmental scans).
   */
  subject: fhir.Reference|null;
  /**
   * The practitioner that holds legal responsibility for ordering the investigation.
   */
  orderer?: fhir.Reference|undefined;
  /**
   * Identifiers assigned to this order instance by the orderer and/or  the receiver and/or order fulfiller.
   */
  identifier?: (fhir.Identifier|null)[]|undefined;
  /**
   * An encounter that provides additional information about the healthcare context in which this request is made.
   */
  encounter?: fhir.Reference|undefined;
  /**
   * An explanation or justification for why this diagnostic investigation is being requested.   This is often for billing purposes.  May relate to the resources referred to in supportingInformation.
   */
  reason?: (fhir.CodeableConcept|null)[]|undefined;
  /**
   * Additional clinical information about the patient or specimen that may influence test interpretations.  This includes observations explicitly requested by the producer(filler) to provide context or supporting information needed to complete the order.
   */
  supportingInformation?: (fhir.Reference|null)[]|undefined;
  /**
   * One or more specimens that the diagnostic investigation is about.
   */
  specimen?: (fhir.Reference|null)[]|undefined;
  /**
   * The status of the order.
   */
  status?: 'accepted'|'cancelled'|'completed'|'draft'|'failed'|'in-progress'|'planned'|'proposed'|'received'|'rejected'|'requested'|'review'|'suspended'|undefined;
  /**
   * Extended properties for primitive element: DiagnosticOrder.status
   */
  _status?:fhir.FhirElement;
  /**
   * The clinical priority associated with this order.
   */
  priority?: 'asap'|'routine'|'stat'|'urgent'|undefined;
  /**
   * Extended properties for primitive element: DiagnosticOrder.priority
   */
  _priority?:fhir.FhirElement;
  /**
   * A summary of the events of interest that have occurred as the request is processed; e.g. when the order was made, various processing steps (specimens received), when it was completed.
   */
  event?: (fhir.DiagnosticOrderEvent|null)[]|undefined;
  /**
   * The specific diagnostic investigations that are requested as part of this request. Sometimes, there can only be one item per request, but in most contexts, more than one investigation can be requested.
   */
  item?: (fhir.DiagnosticOrderItem|null)[]|undefined;
  /**
   * Any other notes associated with this patient, specimen or order (e.g. "patient hates needles").
   */
  note?: (fhir.Annotation|null)[]|undefined;
}
