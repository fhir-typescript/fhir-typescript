import * as fhir from '../fhirJson.js';
/**
 * Identifies one of the records that is considered to refer to the same real-world occurrence as well as how the items hould be evaluated within the collection of linked items.
 */
export interface LinkageItem extends fhir.BackboneElement {
    /**
     * Distinguishes which item is "source of truth" (if any) and which items are no longer considered to be current representations.
     */
    type: 'alternate' | 'historical' | 'source' | null;
    /**
     * Extended properties for primitive element: Linkage.item.type
     */
    _type?: fhir.FhirElement;
    /**
     * The resource instance being linked as part of the group.
     */
    resource: fhir.Reference | null;
}
/**
 * Identifies two or more records (resource instances) that are referring to the same real-world "occurrence".
 */
export interface Linkage extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "Linkage" | null;
    /**
     * If false, any asserted linkages should not be considered current/relevant/applicable.
     */
    active?: boolean | undefined;
    /**
     * Extended properties for primitive element: Linkage.active
     */
    _active?: fhir.FhirElement;
    /**
     * Identifies the user or organization responsible for asserting the linkages and who establishes the context for evaluating the nature of each linkage.
     */
    author?: fhir.Reference | undefined;
    /**
     * Identifies one of the records that is considered to refer to the same real-world occurrence as well as how the items hould be evaluated within the collection of linked items.
     */
    item: (fhir.LinkageItem | null)[] | null;
}
//# sourceMappingURL=Linkage.d.ts.map