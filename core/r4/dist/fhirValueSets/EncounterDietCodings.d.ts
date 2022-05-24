import { CodingArgs } from '../fhir/Coding.js';
/**
 * This value set defines a set of codes that can be used to indicate dietary preferences or restrictions a patient may have.
 */
export declare type EncounterDietCodingType = {
    /**
     * dairy-free: Excludes dairy products.
     */
    DairyFree: CodingArgs;
    /**
     * gluten-free: Excludes ingredients containing gluten.
     */
    GlutenFree: CodingArgs;
    /**
     * halal: Foods that conform to Islamic law.
     */
    Halal: CodingArgs;
    /**
     * kosher: Foods that conform to Jewish dietary law.
     */
    Kosher: CodingArgs;
    /**
     * nut-free: Excludes ingredients containing nuts.
     */
    NutFree: CodingArgs;
    /**
     * vegan: Food without meat, poultry, seafood, eggs, dairy products and other animal-derived substances.
     */
    Vegan: CodingArgs;
    /**
     * vegetarian: Food without meat, poultry or seafood.
     */
    Vegetarian: CodingArgs;
};
/**
 * This value set defines a set of codes that can be used to indicate dietary preferences or restrictions a patient may have.
 */
export declare const EncounterDietCodings: EncounterDietCodingType;
//# sourceMappingURL=EncounterDietCodings.d.ts.map