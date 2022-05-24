import { CodingArgs } from '../fhir/Coding.js';
/**
 * This value set includes sample Contract Term SubType codes.
 */
export declare type ContractTermSubtypeCodingType = {
    /**
     * condition: Terms that go to the very root of a contract.
     */
    Condition: CodingArgs;
    /**
     * innominate: Breach of which might or might not go to the root of the contract depending upon the nature of the breach
     */
    Innominate: CodingArgs;
    /**
     * warranty: Less imperative than a condition, so the contract will survive a breach
     */
    Warranty: CodingArgs;
};
/**
 * This value set includes sample Contract Term SubType codes.
 */
export declare const ContractTermSubtypeCodings: ContractTermSubtypeCodingType;
//# sourceMappingURL=ContractTermSubtypeCodings.d.ts.map