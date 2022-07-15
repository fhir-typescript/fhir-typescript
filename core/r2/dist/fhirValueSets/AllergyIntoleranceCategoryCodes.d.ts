/**
 * Category of an identified Substance.
 */
export declare const AllergyIntoleranceCategoryCodes: {
    /**
     * environment: Substances that are encountered in the environment.
     */
    readonly Environment: "environment";
    /**
     * food: Any substance consumed to provide nutritional support for the body.
     */
    readonly Food: "food";
    /**
     * medication: Substances administered to achieve a physiological effect.
     */
    readonly Medication: "medication";
    /**
     * other: Other substances that are not covered by any other category.
     */
    readonly Other: "other";
};
/**
 * Category of an identified Substance.
 */
export declare type AllergyIntoleranceCategoryCodeType = typeof AllergyIntoleranceCategoryCodes[keyof typeof AllergyIntoleranceCategoryCodes];
//# sourceMappingURL=AllergyIntoleranceCategoryCodes.d.ts.map