import { CodingArgs } from '../fhir/Coding.js';
/**
 * A categorisation for an interaction between two substances.
 */
export declare type InteractionTypeCodingType = {
    /**
     * Code: drug-drug
     */
    DrugToDrugInteraction: CodingArgs;
    /**
     * Code: drug-food
     */
    DrugToFoodInteraction: CodingArgs;
    /**
     * Code: drug-test
     */
    DrugToLaboratoryTestInteraction: CodingArgs;
    /**
     * Code: other
     */
    OtherInteraction: CodingArgs;
};
/**
 * A categorisation for an interaction between two substances.
 */
export declare const InteractionTypeCodings: InteractionTypeCodingType;
//# sourceMappingURL=InteractionTypeCodings.d.ts.map