// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/map-target-list-mode|4.3.0

/**
 * If field is a list, how to manage the production.
 */
export const MapTargetListModeCodes = {
  /**
   * collate: re-use the first item in the list, and keep adding content to it.
   */
  Collate: "collate",
  /**
   * first: when the target list is being assembled, the items for this rule go first. If more than one rule defines a first item (for a given instance of mapping) then this is an error.
   */
  First: "first",
  /**
   * last: when the target list is being assembled, the items for this rule go last. If more than one rule defines a last item (for a given instance of mapping) then this is an error.
   */
  Last: "last",
  /**
   * share: the target instance is shared with the target instances generated by another rule (up to the first common n items, then create new ones).
   */
  Share: "share",
} as const;

/**
 * If field is a list, how to manage the production.
 */
export type MapTargetListModeCodeType = typeof MapTargetListModeCodes[keyof typeof MapTargetListModeCodes];