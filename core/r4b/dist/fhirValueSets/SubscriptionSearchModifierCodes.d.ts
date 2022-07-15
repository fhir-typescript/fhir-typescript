/**
 * FHIR search modifiers allowed for use in Subscriptions and SubscriptionTopics.
 */
export declare const SubscriptionSearchModifierCodes: {
    /**
     * =: Used to match a value according to FHIR Search rules (e.g., Patient/123, Encounter/2002).
     */
    readonly Equals: "=";
    /**
     * above: The search parameter is a concept with the form [system]|[code], and the search parameter tests whether the coding in a resource subsumes the specified search code.
     */
    readonly Above: "above";
    /**
     * ap: The value for the parameter in the resource is approximately the same to the provided value. Note that the recommended value for the approximation is 10% of the stated value (or for a date, 10% of the gap between now and the date), but systems may choose other values where appropriate.
     */
    readonly Approximately: "ap";
    /**
     * below: The search parameter is a concept with the form [system]|[code], and the search parameter tests whether the coding in a resource is subsumed by the specified search code.
     */
    readonly Below: "below";
    /**
     * eb: The value for the parameter in the resource ends before the provided value.
     */
    readonly EndsBefore: "eb";
    /**
     * eq: The value for the parameter in the resource is equal to the provided value.
     */
    readonly Equal: "eq";
    /**
     * ge: The value for the parameter in the resource is greater or equal to the provided value.
     */
    readonly GreaterThanOrEqual: "ge";
    /**
     * gt: The value for the parameter in the resource is greater than the provided value.
     */
    readonly GreaterThan: "gt";
    /**
     * in: The search parameter is a member of a Group or List, or the search parameter is a URI (relative or absolute) that identifies a value set, and the search parameter tests whether the value is present in the specified Group, List, or Value Set.
     */
    readonly In: "in";
    /**
     * le: The value for the parameter in the resource is less or equal to the provided value.
     */
    readonly LessThanOrEqual: "le";
    /**
     * lt: The value for the parameter in the resource is less than the provided value.
     */
    readonly LessThan: "lt";
    /**
     * ne: The value for the parameter in the resource is not equal to the provided value.
     */
    readonly NotEqual: "ne";
    /**
     * not-in: The search parameter is a member of a Group or List, or the search parameter is a URI (relative or absolute) that identifies a value set, and the search parameter tests whether the value is NOT present in the specified Group, List, or Value Set.
     */
    readonly NotIn: "not-in";
    /**
     * of-type: The search parameter has the format system|code|value, where the system and code refer to a Identifier.type.coding.system and .code, and match if any of the type codes match. All 3 parts must be present.
     */
    readonly OfType: "of-type";
    /**
     * sa: The value for the parameter in the resource starts after the provided value.
     */
    readonly StartsAfter: "sa";
};
/**
 * FHIR search modifiers allowed for use in Subscriptions and SubscriptionTopics.
 */
export declare type SubscriptionSearchModifierCodeType = typeof SubscriptionSearchModifierCodes[keyof typeof SubscriptionSearchModifierCodes];
//# sourceMappingURL=SubscriptionSearchModifierCodes.d.ts.map