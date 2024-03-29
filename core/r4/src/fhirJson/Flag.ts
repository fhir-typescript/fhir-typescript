// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: Flag

import * as fhir from '../fhirJson.js';


/**
 * Prospective warnings of potential issues when providing care to the patient.
 */
export interface Flag extends fhir.DomainResource { 
  /**
   * Resource Type Name
   */
  resourceType: "Flag"|null;
  /**
   * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
   */
  identifier?: (fhir.Identifier|null)[]|undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status: 'active'|'entered-in-error'|'inactive'|null;
  /**
   * Extended properties for primitive element: Flag.status
   */
  _status?:fhir.FhirElement;
  /**
   * The value set will often need to be adjusted based on local business rules and usage context.
   */
  category?: (fhir.CodeableConcept|null)[]|undefined;
  /**
   * If non-coded, use CodeableConcept.text.  This element should always be included in the narrative.
   */
  code: fhir.CodeableConcept|null;
  /**
   * The patient, location, group, organization, or practitioner etc. this is about record this flag is associated with.
   */
  subject: fhir.Reference|null;
  /**
   * The period of time from the activation of the flag to inactivation of the flag. If the flag is active, the end of the period should be unspecified.
   */
  period?: fhir.Period|undefined;
  /**
   * If both Flag.encounter and Flag.period are valued, then Flag.period.start shall not be before Encounter.period.start and Flag.period.end shall not be after Encounter.period.end.
   */
  encounter?: fhir.Reference|undefined;
  /**
   * The person, organization or device that created the flag.
   */
  author?: fhir.Reference|undefined;
}
