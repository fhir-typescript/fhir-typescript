// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/restful-capability-mode|3.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * The mode of a RESTful capability statement.
 */
export type RestfulCapabilityModeCodingType = {
  /**
   * client: The application acts as a client for this resource.
   */
  Client: CodingArgs;
  /**
   * server: The application acts as a server for this resource.
   */
  Server: CodingArgs;
}

/**
 * The mode of a RESTful capability statement.
 */
export const RestfulCapabilityModeCodings:RestfulCapabilityModeCodingType = {
  /**
   * client: The application acts as a client for this resource.
   */
  Client: {
    display: "Client",
    code: "client",
    system: "http://hl7.org/fhir/restful-capability-mode",
  },
  /**
   * server: The application acts as a server for this resource.
   */
  Server: {
    display: "Server",
    code: "server",
    system: "http://hl7.org/fhir/restful-capability-mode",
  },
} as const;
