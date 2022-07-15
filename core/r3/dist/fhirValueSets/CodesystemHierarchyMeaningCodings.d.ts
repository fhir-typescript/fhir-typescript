import { CodingArgs } from '../fhir/Coding.js';
/**
 * The meaning of the hierarchy of concepts in a code system
 */
export declare type CodesystemHierarchyMeaningCodingType = {
    /**
     * classified-with: Child concepts in the hierarchy may have only one parent, and there is a presumption that the code system is a "closed world" meaning all things must be in the hierarchy. This results in concepts such as "not otherwise classified."
     */
    ClassifiedWith: CodingArgs;
    /**
     * grouped-by: No particular relationship between the concepts can be assumed, except what can be determined by inspection of the definitions of the elements (possible reasons to use this: importing from a source where this is not defined, or where various parts of the hierarchy have different meanings)
     */
    GroupedBy: CodingArgs;
    /**
     * is-a: A hierarchy where the child concepts have an IS-A relationship with the parents - that is, all the properties of the parent are also true for its child concepts
     */
    IsA: CodingArgs;
    /**
     * part-of: Child elements list the individual parts of a composite whole (e.g. body site)
     */
    PartOf: CodingArgs;
};
/**
 * The meaning of the hierarchy of concepts in a code system
 */
export declare const CodesystemHierarchyMeaningCodings: CodesystemHierarchyMeaningCodingType;
//# sourceMappingURL=CodesystemHierarchyMeaningCodings.d.ts.map