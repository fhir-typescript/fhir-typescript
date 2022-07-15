import { CodingArgs } from '../fhir/Coding.js';
/**
 * How the issue affects the success of the action.
 */
export declare type IssueSeverityCodingType = {
    /**
     * error: The issue is sufficiently important to cause the action to fail.
     */
    Error: CodingArgs;
    /**
     * fatal: The issue caused the action to fail, and no further checking could be performed.
     */
    Fatal: CodingArgs;
    /**
     * information: The issue has no relation to the degree of success of the action.
     */
    Information: CodingArgs;
    /**
     * warning: The issue is not important enough to cause the action to fail, but may cause it to be performed suboptimally or in a way that is not as desired.
     */
    Warning: CodingArgs;
};
/**
 * How the issue affects the success of the action.
 */
export declare const IssueSeverityCodings: IssueSeverityCodingType;
//# sourceMappingURL=IssueSeverityCodings.d.ts.map