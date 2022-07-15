// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: DomainResource

import * as fhir from '../fhirJson.js';


/**
 * A resource that includes narrative, extensions, and contained resources.
 */
export interface DomainResource extends fhir.Resource { 
  /**
   * Contained resources do not have narrative. Resources that are not contained SHOULD have a narrative. In some cases, a resource may only have text with little or no additional discrete data (as long as all minOccurs=1 elements are satisfied).  This may be necessary for data from legacy systems where information is captured as a "text blob" or where text is additionally entered raw or narrated and encoded in formation is added later.
   */
  text?: fhir.Narrative|undefined;
  /**
   * This should never be done when the content can be identified properly, as once identification is lost, it is extremely difficult (and context dependent) to restore it again.
   */
  contained?: (fhir.FhirResource|null)[]|undefined;
  /**
   * There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.
   */
  extension?: (fhir.Extension|null)[]|undefined;
  /**
   * There can be no stigma associated with the use of extensions by any application, project, or standard - regardless of the institution or jurisdiction that uses or defines the extensions.  The use of extensions is what allows the FHIR specification to retain a core level of simplicity for everyone.
   */
  modifierExtension?: (fhir.Extension|null)[]|undefined;
}
