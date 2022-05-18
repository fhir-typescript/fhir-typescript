/**
 * This value set defines a set of codes that can be used to indicate dietary preferences or restrictions a patient may have.
 */
export declare const EncounterDietCodes: {
    /**
     * dairy-free: Excludes dairy products.
     */
    readonly DairyFree: "dairy-free";
    /**
     * gluten-free: Excludes ingredients containing gluten.
     */
    readonly GlutenFree: "gluten-free";
    /**
     * halal: Foods that conform to Islamic law.
     */
    readonly Halal: "halal";
    /**
     * kosher: Foods that conform to Jewish dietary law.
     */
    readonly Kosher: "kosher";
    /**
     * nut-free: Excludes ingredients containing nuts.
     */
    readonly NutFree: "nut-free";
    /**
     * vegan: Food without meat, poultry, seafood, eggs, dairy products and other animal-derived substances.
     */
    readonly Vegan: "vegan";
    /**
     * vegetarian: Food without meat, poultry or seafood.
     */
    readonly Vegetarian: "vegetarian";
};
/**
 * This value set defines a set of codes that can be used to indicate dietary preferences or restrictions a patient may have.
 */
export declare type EncounterDietCodeType = typeof EncounterDietCodes[keyof typeof EncounterDietCodes];
//# sourceMappingURL=EncounterDietCodes.d.ts.map