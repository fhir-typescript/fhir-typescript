/**
 * This value set defines the set of codes that can be used to indicate the marital status of a person.
 */
export declare const MaritalStatusCodes: {
    /**
     * Code: A
     */
    readonly Annulled: "A";
    /**
     * Code: C
     */
    readonly CommonLaw: "C";
    /**
     * Code: D
     */
    readonly Divorced: "D";
    /**
     * Code: I
     */
    readonly Interlocutory: "I";
    /**
     * Code: L
     */
    readonly LegallySeparated: "L";
    /**
     * Code: M
     */
    readonly Married: "M";
    /**
     * Code: P
     */
    readonly Polygamous: "P";
    /**
     * Code: S
     */
    readonly NeverMarried: "S";
    /**
     * Code: T
     */
    readonly DomesticPartner: "T";
    /**
     * Code: U
     */
    readonly Unmarried: "U";
    /**
     * Code: UNK
     */
    readonly UNK: "UNK";
    /**
     * Code: W
     */
    readonly Widowed: "W";
};
/**
 * This value set defines the set of codes that can be used to indicate the marital status of a person.
 */
export declare type MaritalStatusCodeType = typeof MaritalStatusCodes[keyof typeof MaritalStatusCodes];
//# sourceMappingURL=MaritalStatusCodes.d.ts.map