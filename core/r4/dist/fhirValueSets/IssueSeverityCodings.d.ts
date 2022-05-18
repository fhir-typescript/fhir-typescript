import { Coding } from '../fhir/Coding.js';
/**
 * How the issue affects the success of the action.
 */
export declare const IssueSeverityCodings: {
    /**
     * error: The issue is sufficiently important to cause the action to fail.
     */
    readonly Error: Coding;
    /**
     * fatal: The issue caused the action to fail and no further checking could be performed.
     */
    readonly Fatal: Coding;
    /**
     * information: The issue has no relation to the degree of success of the action.
     */
    readonly Information: Coding;
    /**
     * warning: The issue is not important enough to cause the action to fail but may cause it to be performed suboptimally or in a way that is not as desired.
     */
    readonly Warning: Coding;
};
/**
 * How the issue affects the success of the action.
 */
export declare type IssueSeverityCodingType = typeof IssueSeverityCodings;
//# sourceMappingURL=IssueSeverityCodings.d.ts.map