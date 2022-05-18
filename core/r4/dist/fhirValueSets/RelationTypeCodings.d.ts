import { Coding } from '../fhir/Coding.js';
/**
 * The type of relations between entries.
 */
export declare const RelationTypeCodings: {
    /**
     * is-replaced-by: the related entry represents an item that replaces the current retired item.
     */
    readonly ReplacedBy: Coding;
    /**
     * triggers: the related entry represents an activity that may be triggered by the current item.
     */
    readonly Triggers: Coding;
};
/**
 * The type of relations between entries.
 */
export declare type RelationTypeCodingType = typeof RelationTypeCodings;
//# sourceMappingURL=RelationTypeCodings.d.ts.map