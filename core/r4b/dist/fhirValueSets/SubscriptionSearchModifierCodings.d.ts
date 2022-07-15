import { CodingArgs } from '../fhir/Coding.js';
/**
 * FHIR search modifiers allowed for use in Subscriptions and SubscriptionTopics.
 */
export declare type SubscriptionSearchModifierCodingType = {
    /**
     * =: Used to match a value according to FHIR Search rules (e.g., Patient/123, Encounter/2002).
     */
    Equals: CodingArgs;
    /**
     * above: The search parameter is a concept with the form [system]|[code], and the search parameter tests whether the coding in a resource subsumes the specified search code.
     */
    Above: CodingArgs;
    /**
     * ap: The value for the parameter in the resource is approximately the same to the provided value. Note that the recommended value for the approximation is 10% of the stated value (or for a date, 10% of the gap between now and the date), but systems may choose other values where appropriate.
     */
    Approximately: CodingArgs;
    /**
     * below: The search parameter is a concept with the form [system]|[code], and the search parameter tests whether the coding in a resource is subsumed by the specified search code.
     */
    Below: CodingArgs;
    /**
     * eb: The value for the parameter in the resource ends before the provided value.
     */
    EndsBefore: CodingArgs;
    /**
     * eq: The value for the parameter in the resource is equal to the provided value.
     */
    Equal: CodingArgs;
    /**
     * ge: The value for the parameter in the resource is greater or equal to the provided value.
     */
    GreaterThanOrEqual: CodingArgs;
    /**
     * gt: The value for the parameter in the resource is greater than the provided value.
     */
    GreaterThan: CodingArgs;
    /**
     * in: The search parameter is a member of a Group or List, or the search parameter is a URI (relative or absolute) that identifies a value set, and the search parameter tests whether the value is present in the specified Group, List, or Value Set.
     */
    In: CodingArgs;
    /**
     * le: The value for the parameter in the resource is less or equal to the provided value.
     */
    LessThanOrEqual: CodingArgs;
    /**
     * lt: The value for the parameter in the resource is less than the provided value.
     */
    LessThan: CodingArgs;
    /**
     * ne: The value for the parameter in the resource is not equal to the provided value.
     */
    NotEqual: CodingArgs;
    /**
     * not-in: The search parameter is a member of a Group or List, or the search parameter is a URI (relative or absolute) that identifies a value set, and the search parameter tests whether the value is NOT present in the specified Group, List, or Value Set.
     */
    NotIn: CodingArgs;
    /**
     * of-type: The search parameter has the format system|code|value, where the system and code refer to a Identifier.type.coding.system and .code, and match if any of the type codes match. All 3 parts must be present.
     */
    OfType: CodingArgs;
    /**
     * sa: The value for the parameter in the resource starts after the provided value.
     */
    StartsAfter: CodingArgs;
};
/**
 * FHIR search modifiers allowed for use in Subscriptions and SubscriptionTopics.
 */
export declare const SubscriptionSearchModifierCodings: SubscriptionSearchModifierCodingType;
//# sourceMappingURL=SubscriptionSearchModifierCodings.d.ts.map