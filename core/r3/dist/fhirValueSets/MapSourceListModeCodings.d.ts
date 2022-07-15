import { CodingArgs } from '../fhir/Coding.js';
/**
 * If field is a list, how to manage the source
 */
export declare type MapSourceListModeCodingType = {
    /**
     * first: Only process this rule for the first in the list
     */
    First: CodingArgs;
    /**
     * last: Only process this rule for the last in the list
     */
    Last: CodingArgs;
    /**
     * not_first: Process this rule for all but the first
     */
    AllButTheFirst: CodingArgs;
    /**
     * not_last: Process this rule for all but the last
     */
    AllButTheLast: CodingArgs;
    /**
     * only_one: Only process this rule is there is only item
     */
    EnforceOnlyOne: CodingArgs;
};
/**
 * If field is a list, how to manage the source
 */
export declare const MapSourceListModeCodings: MapSourceListModeCodingType;
//# sourceMappingURL=MapSourceListModeCodings.d.ts.map