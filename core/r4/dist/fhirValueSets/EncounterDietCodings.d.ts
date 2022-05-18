import { Coding } from '../fhir/Coding.js';
/**
 * This value set defines a set of codes that can be used to indicate dietary preferences or restrictions a patient may have.
 */
export declare const EncounterDietCodings: {
    /**
     * dairy-free: Excludes dairy products.
     */
    readonly DairyFree: Coding;
    /**
     * gluten-free: Excludes ingredients containing gluten.
     */
    readonly GlutenFree: Coding;
    /**
     * halal: Foods that conform to Islamic law.
     */
    readonly Halal: Coding;
    /**
     * kosher: Foods that conform to Jewish dietary law.
     */
    readonly Kosher: Coding;
    /**
     * nut-free: Excludes ingredients containing nuts.
     */
    readonly NutFree: Coding;
    /**
     * vegan: Food without meat, poultry, seafood, eggs, dairy products and other animal-derived substances.
     */
    readonly Vegan: Coding;
    /**
     * vegetarian: Food without meat, poultry or seafood.
     */
    readonly Vegetarian: Coding;
};
/**
 * This value set defines a set of codes that can be used to indicate dietary preferences or restrictions a patient may have.
 */
export declare type EncounterDietCodingType = typeof EncounterDietCodings;
//# sourceMappingURL=EncounterDietCodings.d.ts.map