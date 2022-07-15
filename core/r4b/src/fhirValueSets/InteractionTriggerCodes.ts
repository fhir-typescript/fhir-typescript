// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/interaction-trigger|4.3.0

/**
 * FHIR RESTful interaction codes used for SubscriptionTopic trigger.
 */
export const InteractionTriggerCodes = {
  /**
   * create: Create a new resource with a server assigned id.
   */
  Create: "create",
  /**
   * delete: Delete a resource.
   */
  Delete: "delete",
  /**
   * update: Update an existing resource by its id (or create it if it is new).
   */
  Update: "update",
} as const;

/**
 * FHIR RESTful interaction codes used for SubscriptionTopic trigger.
 */
export type InteractionTriggerCodeType = typeof InteractionTriggerCodes[keyof typeof InteractionTriggerCodes];
