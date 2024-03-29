// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/map-target-list-mode|4.3.0

import { CodingArgs } from '../fhir/Coding.js'

/**
 * If field is a list, how to manage the production.
 */
export type MapTargetListModeCodingType = {
  /**
   * collate: re-use the first item in the list, and keep adding content to it.
   */
  Collate: CodingArgs;
  /**
   * first: when the target list is being assembled, the items for this rule go first. If more than one rule defines a first item (for a given instance of mapping) then this is an error.
   */
  First: CodingArgs;
  /**
   * last: when the target list is being assembled, the items for this rule go last. If more than one rule defines a last item (for a given instance of mapping) then this is an error.
   */
  Last: CodingArgs;
  /**
   * share: the target instance is shared with the target instances generated by another rule (up to the first common n items, then create new ones).
   */
  Share: CodingArgs;
}

/**
 * If field is a list, how to manage the production.
 */
export const MapTargetListModeCodings:MapTargetListModeCodingType = {
  /**
   * collate: re-use the first item in the list, and keep adding content to it.
   */
  Collate: {
    display: "Collate",
    code: "collate",
    system: "http://hl7.org/fhir/map-target-list-mode",
  },
  /**
   * first: when the target list is being assembled, the items for this rule go first. If more than one rule defines a first item (for a given instance of mapping) then this is an error.
   */
  First: {
    display: "First",
    code: "first",
    system: "http://hl7.org/fhir/map-target-list-mode",
  },
  /**
   * last: when the target list is being assembled, the items for this rule go last. If more than one rule defines a last item (for a given instance of mapping) then this is an error.
   */
  Last: {
    display: "Last",
    code: "last",
    system: "http://hl7.org/fhir/map-target-list-mode",
  },
  /**
   * share: the target instance is shared with the target instances generated by another rule (up to the first common n items, then create new ones).
   */
  Share: {
    display: "Share",
    code: "share",
    system: "http://hl7.org/fhir/map-target-list-mode",
  },
} as const;
