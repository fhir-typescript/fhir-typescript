import { Coding } from '../fhir/Coding.js';
/**
 * The meaning of the hierarchy of concepts in a code system.
 */
export declare const CodesystemHierarchyMeaningCodings: {
    /**
     * classified-with: Child concepts in the hierarchy may have only one parent, and there is a presumption that the code system is a "closed world" meaning all things must be in the hierarchy. This results in concepts such as "not otherwise classified.".
     */
    readonly ClassifiedWith: Coding;
    /**
     * grouped-by: No particular relationship between the concepts can be assumed, except what can be determined by inspection of the definitions of the elements (possible reasons to use this: importing from a source where this is not defined, or where various parts of the hierarchy have different meanings).
     */
    readonly GroupedBy: Coding;
    /**
     * is-a: A hierarchy where the child concepts have an IS-A relationship with the parents - that is, all the properties of the parent are also true for its child concepts. Not that is-a is a property of the concepts, so additional subsumption relationships may be defined using properties or the [subsumes](extension-codesystem-subsumes.html) extension.
     */
    readonly IsA: Coding;
    /**
     * part-of: Child elements list the individual parts of a composite whole (e.g. body site).
     */
    readonly PartOf: Coding;
};
/**
 * The meaning of the hierarchy of concepts in a code system.
 */
export declare type CodesystemHierarchyMeaningCodingType = typeof CodesystemHierarchyMeaningCodings;
//# sourceMappingURL=CodesystemHierarchyMeaningCodings.d.ts.map