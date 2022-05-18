import { Coding } from '../fhir/Coding.js';
/**
 * EnteralFormulaAdditiveType: Codes for the type of modular component such as protein, carbohydrate or fiber to be provided in addition to or mixed with the base formula. This value set is provided as a suggestive example.
 */
export declare const EntformulaAdditiveCodings: {
    /**
     * carbohydrate: Modular carbohydrate enteral formula component
     */
    readonly Carbohydrate: Coding;
    /**
     * fiber: Modular fiber enteral formula component
     */
    readonly Fiber: Coding;
    /**
     * lipid: Modular lipid enteral formula component
     */
    readonly Lipid: Coding;
    /**
     * protein: Modular protein enteral formula component
     */
    readonly Protein: Coding;
    /**
     * water: Added water
     */
    readonly Water: Coding;
};
/**
 * EnteralFormulaAdditiveType: Codes for the type of modular component such as protein, carbohydrate or fiber to be provided in addition to or mixed with the base formula. This value set is provided as a suggestive example.
 */
export declare type EntformulaAdditiveCodingType = typeof EntformulaAdditiveCodings;
//# sourceMappingURL=EntformulaAdditiveCodings.d.ts.map