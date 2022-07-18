// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/interaction-trigger|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * FHIR RESTful interaction codes used for SubscriptionTopic trigger.
 */
export type InteractionTriggerCodingType = {
  /**
   * create: Create a new resource with a server assigned id.
   */
  Create: CodingArgs;
  /**
   * delete: Delete a resource.
   */
  Delete: CodingArgs;
  /**
   * update: Update an existing resource by its id (or create it if it is new).
   */
  Update: CodingArgs;
}

/**
 * FHIR RESTful interaction codes used for SubscriptionTopic trigger.
 */
export const InteractionTriggerCodings:InteractionTriggerCodingType = {
  /**
   * create: Create a new resource with a server assigned id.
   */
  Create: {
    display: "create",
    code: "create",
    system: "http://hl7.org/fhir/restful-interaction",
  },
  /**
   * delete: Delete a resource.
   */
  Delete: {
    display: "delete",
    code: "delete",
    system: "http://hl7.org/fhir/restful-interaction",
  },
  /**
   * update: Update an existing resource by its id (or create it if it is new).
   */
  Update: {
    display: "update",
    code: "update",
    system: "http://hl7.org/fhir/restful-interaction",
  },
} as const;