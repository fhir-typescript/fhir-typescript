import { CodingArgs } from '../fhir/Coding.js';
/**
 * The type of relations between entries.
 */
export declare type RelationTypeCodingType = {
    /**
     * is-replaced-by: the related entry represents an item that replaces the current retired item.
     */
    ReplacedBy: CodingArgs;
    /**
     * triggers: the related entry represents an activity that may be triggered by the current item.
     */
    Triggers: CodingArgs;
};
/**
 * The type of relations between entries.
 */
export declare const RelationTypeCodings: RelationTypeCodingType;
//# sourceMappingURL=RelationTypeCodings.d.ts.map