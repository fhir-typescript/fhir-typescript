// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/consent-data-meaning|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * How a resource reference is interpreted when testing consent restrictions.
 */
export type ConsentDataMeaningCodingType = {
  /**
   * authoredby: The consent applies to instances of resources that are authored by.
   */
  AuthoredBy: CodingArgs;
  /**
   * dependents: The consent applies directly to the instance of the resource and instances that refer to it.
   */
  Dependents: CodingArgs;
  /**
   * instance: The consent applies directly to the instance of the resource.
   */
  Instance: CodingArgs;
  /**
   * related: The consent applies directly to the instance of the resource and instances it refers to.
   */
  Related: CodingArgs;
}

/**
 * How a resource reference is interpreted when testing consent restrictions.
 */
export const ConsentDataMeaningCodings:ConsentDataMeaningCodingType = {
  /**
   * authoredby: The consent applies to instances of resources that are authored by.
   */
  AuthoredBy: {
    display: "AuthoredBy",
    code: "authoredby",
    system: "http://hl7.org/fhir/consent-data-meaning",
  },
  /**
   * dependents: The consent applies directly to the instance of the resource and instances that refer to it.
   */
  Dependents: {
    display: "Dependents",
    code: "dependents",
    system: "http://hl7.org/fhir/consent-data-meaning",
  },
  /**
   * instance: The consent applies directly to the instance of the resource.
   */
  Instance: {
    display: "Instance",
    code: "instance",
    system: "http://hl7.org/fhir/consent-data-meaning",
  },
  /**
   * related: The consent applies directly to the instance of the resource and instances it refers to.
   */
  Related: {
    display: "Related",
    code: "related",
    system: "http://hl7.org/fhir/consent-data-meaning",
  },
} as const;
