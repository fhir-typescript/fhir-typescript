import { Coding } from '../fhir/Coding.js';
/**
 * This value set includes sample Contract Term SubType codes.
 */
export declare const ContractTermSubtypeCodings: {
    /**
     * condition: Terms that go to the very root of a contract.
     */
    readonly Condition: Coding;
    /**
     * innominate: Breach of which might or might not go to the root of the contract depending upon the nature of the breach
     */
    readonly Innominate: Coding;
    /**
     * warranty: Less imperative than a condition, so the contract will survive a breach
     */
    readonly Warranty: Coding;
};
/**
 * This value set includes sample Contract Term SubType codes.
 */
export declare type ContractTermSubtypeCodingType = typeof ContractTermSubtypeCodings;
//# sourceMappingURL=ContractTermSubtypeCodings.d.ts.map