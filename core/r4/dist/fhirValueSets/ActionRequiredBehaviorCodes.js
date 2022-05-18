/*! @fhir-typescript/r4-core v0.0.11-beta.2 2022-05-18 */
'use strict';
// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/action-required-behavior|4.0.1
/**
 * Defines expectations around whether an action or action group is required.
 */
var ActionRequiredBehaviorCodes = {
    /**
     * could: An action with this behavior may be included in the set of actions processed by the end user.
     */
    Could: "could",
    /**
     * must: An action with this behavior must be included in the actions processed by the end user; the end user SHALL NOT choose not to include this action.
     */
    Must: "must",
    /**
     * must-unless-documented: An action with this behavior must be included in the set of actions processed by the end user, unless the end user provides documentation as to why the action was not included.
     */
    MustUnlessDocumented: "must-unless-documented",
};

export { ActionRequiredBehaviorCodes };
//# sourceMappingURL=ActionRequiredBehaviorCodes.js.map