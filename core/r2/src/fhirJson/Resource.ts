// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: Resource

import * as fhir from '../fhirJson.js';


/**
 * This is the base resource type for everything.
 */
export interface Resource {
  /**
   * Resource Type Name
   */
  resourceType: string|null;
  /**
   * The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.
   */
  id?: string|undefined;
  /**
   * Extended properties for primitive element: Resource.id
   */
  _id?:fhir.FhirElement;
  /**
   * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content may not always be associated with version changes to the resource.
   */
  meta?: fhir.Meta|undefined;
  /**
   * A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.
   */
  implicitRules?: string|undefined;
  /**
   * Extended properties for primitive element: Resource.implicitRules
   */
  _implicitRules?:fhir.FhirElement;
  /**
   * The base language in which the resource is written.
   */
  language?: string|undefined;
  /**
   * Extended properties for primitive element: Resource.language
   */
  _language?:fhir.FhirElement;
}
