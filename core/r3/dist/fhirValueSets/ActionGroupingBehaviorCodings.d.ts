import { CodingArgs } from '../fhir/Coding.js';
/**
 * Defines organization behavior of a group
 */
export declare type ActionGroupingBehaviorCodingType = {
    /**
     * logical-group: A group with this behavior logically groups its sub-elements, and may be shown as a visual group to the end user, but it is not required to do so
     */
    LogicalGroup: CodingArgs;
    /**
     * sentence-group: A group of related alternative actions is a sentence group if the target referenced by the action is the same in all the actions and each action simply constitutes a different variation on how to specify the details for the target. For example, two actions that could be in a SentenceGroup are "aspirin, 500 mg, 2 times per day" and "aspirin, 300 mg, 3 times per day". In both cases, aspirin is the target referenced by the action, and the two actions represent different options for how aspirin might be ordered for the patient. Note that a SentenceGroup would almost always have an associated selection behavior of "AtMostOne", unless it's a required action, in which case, it would be "ExactlyOne"
     */
    SentenceGroup: CodingArgs;
    /**
     * visual-group: Any group marked with this behavior should be displayed as a visual group to the end user
     */
    VisualGroup: CodingArgs;
};
/**
 * Defines organization behavior of a group
 */
export declare const ActionGroupingBehaviorCodings: ActionGroupingBehaviorCodingType;
//# sourceMappingURL=ActionGroupingBehaviorCodings.d.ts.map