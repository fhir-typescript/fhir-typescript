/**
 * Identifies the purpose for this identifier, if known .
 */
export declare const IdentifierUseCodes: {
    /**
     * official: The identifier considered to be most trusted for the identification of this item. Sometimes also known as "primary" and "main". The determination of "official" is subjective and implementation guides often provide additional guidelines for use.
     */
    readonly Official: "official";
    /**
     * old: The identifier id no longer considered valid, but may be relevant for search purposes.  E.g. Changes to identifier schemes, account merges, etc.
     */
    readonly Old: "old";
    /**
     * secondary: An identifier that was assigned in secondary use - it serves to identify the object in a relative context, but cannot be consistently assigned to the same object again in a different context.
     */
    readonly Secondary: "secondary";
    /**
     * temp: A temporary identifier.
     */
    readonly Temp: "temp";
    /**
     * usual: The identifier recommended for display and use in real-world interactions.
     */
    readonly Usual: "usual";
};
/**
 * Identifies the purpose for this identifier, if known .
 */
export declare type IdentifierUseCodeType = typeof IdentifierUseCodes[keyof typeof IdentifierUseCodes];
//# sourceMappingURL=IdentifierUseCodes.d.ts.map