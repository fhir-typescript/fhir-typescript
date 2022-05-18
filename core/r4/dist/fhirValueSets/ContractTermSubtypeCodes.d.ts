/**
 * This value set includes sample Contract Term SubType codes.
 */
export declare const ContractTermSubtypeCodes: {
    /**
     * condition: Terms that go to the very root of a contract.
     */
    readonly Condition: "condition";
    /**
     * innominate: Breach of which might or might not go to the root of the contract depending upon the nature of the breach
     */
    readonly Innominate: "innominate";
    /**
     * warranty: Less imperative than a condition, so the contract will survive a breach
     */
    readonly Warranty: "warranty";
};
/**
 * This value set includes sample Contract Term SubType codes.
 */
export declare type ContractTermSubtypeCodeType = typeof ContractTermSubtypeCodes[keyof typeof ContractTermSubtypeCodes];
//# sourceMappingURL=ContractTermSubtypeCodes.d.ts.map