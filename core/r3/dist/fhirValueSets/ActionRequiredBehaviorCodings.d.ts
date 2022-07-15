import { CodingArgs } from '../fhir/Coding.js';
/**
 * Defines requiredness behavior for selecting an action or an action group
 */
export declare type ActionRequiredBehaviorCodingType = {
    /**
     * could: An action with this behavior may be included in the set of actions processed by the end user
     */
    Could: CodingArgs;
    /**
     * must: An action with this behavior must be included in the actions processed by the end user; the end user may not choose not to include this action
     */
    Must: CodingArgs;
    /**
     * must-unless-documented: An action with this behavior must be included in the set of actions processed by the end user, unless the end user provides documentation as to why the action was not included
     */
    MustUnlessDocumented: CodingArgs;
};
/**
 * Defines requiredness behavior for selecting an action or an action group
 */
export declare const ActionRequiredBehaviorCodings: ActionRequiredBehaviorCodingType;
//# sourceMappingURL=ActionRequiredBehaviorCodings.d.ts.map