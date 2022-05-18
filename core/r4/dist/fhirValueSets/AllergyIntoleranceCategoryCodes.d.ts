/**
 * Category of an identified substance associated with allergies or intolerances.
 */
export declare const AllergyIntoleranceCategoryCodes: {
    /**
     * biologic: A preparation that is synthesized from living organisms or their products, especially a human or animal protein, such as a hormone or antitoxin, that is used as a diagnostic, preventive, or therapeutic agent. Examples of biologic medications include: vaccines; allergenic extracts, which are used for both diagnosis and treatment (for example, allergy shots); gene therapies; cellular therapies.  There are other biologic products, such as tissues, which are not typically associated with allergies.
     */
    readonly Biologic: "biologic";
    /**
     * environment: Any substances that are encountered in the environment, including any substance not already classified as food, medication, or biologic.
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
};
/**
 * Category of an identified substance associated with allergies or intolerances.
 */
export declare type AllergyIntoleranceCategoryCodeType = typeof AllergyIntoleranceCategoryCodes[keyof typeof AllergyIntoleranceCategoryCodes];
//# sourceMappingURL=AllergyIntoleranceCategoryCodes.d.ts.map