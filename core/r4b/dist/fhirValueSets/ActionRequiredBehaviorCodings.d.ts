import { CodingArgs } from '../fhir/Coding.js';
/**
 * Defines expectations around whether an action or action group is required.
 */
export declare type ActionRequiredBehaviorCodingType = {
    /**
     * could: An action with this behavior may be included in the set of actions processed by the end user.
     */
    Could: CodingArgs;
    /**
     * must: An action with this behavior must be included in the actions processed by the end user; the end user SHALL NOT choose not to include this action.
     */
    Must: CodingArgs;
    /**
     * must-unless-documented: An action with this behavior must be included in the set of actions processed by the end user, unless the end user provides documentation as to why the action was not included.
     */
    MustUnlessDocumented: CodingArgs;
};
/**
 * Defines expectations around whether an action or action group is required.
 */
export declare const ActionRequiredBehaviorCodings: ActionRequiredBehaviorCodingType;
//# sourceMappingURL=ActionRequiredBehaviorCodings.d.ts.map