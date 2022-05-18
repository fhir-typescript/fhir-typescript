// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/action-type|4.0.1

/**
 * The type of action to be performed.
 */
export const ActionTypeCodes = {
  /**
   * create: The action is to create a new resource.
   */
  Create: "create",
  /**
   * fire-event: The action is to fire a specific event.
   */
  FireEvent: "fire-event",
  /**
   * remove: The action is to remove an existing resource.
   */
  Remove: "remove",
  /**
   * update: The action is to update an existing resource.
   */
  Update: "update",
} as const;

/**
 * The type of action to be performed.
 */
export type ActionTypeCodeType = typeof ActionTypeCodes[keyof typeof ActionTypeCodes];