/**
 * This value set defines the set of codes that can be used to indicate the marital status of a person.
 */
export declare const MaritalStatusCodes: {
    /**
     * A: Marriage contract has been declared null and to not have existed
     */
    readonly Annulled: "A";
    /**
     * D: Marriage contract has been declared dissolved and inactive
     */
    readonly Divorced: "D";
    /**
     * I: Subject to an Interlocutory Decree.
     */
    readonly Interlocutory: "I";
    /**
     * L: Legally Separated
     */
    readonly LegallySeparated: "L";
    /**
     * M: A current marriage contract is active
     */
    readonly Married: "M";
    /**
     * P: More than 1 current spouse
     */
    readonly Polygamous: "P";
    /**
     * S: No marriage contract has ever been entered
     */
    readonly NeverMarried: "S";
    /**
     * T: Person declares that a domestic partner relationship exists.
     */
    readonly DomesticPartner: "T";
    /**
     * U: Currently not in a marriage contract.
     */
    readonly Unmarried: "U";
    /**
     * UNK: Description:A proper value is applicable, but not known.
     *
     *
     *                            Usage Notes: This means the actual value is not known.  If the only thing that is unknown is how to properly express the value in the necessary constraints (value set, datatype, etc.), then the OTH or UNC flavor should be used.  No properties should be included for a datatype with this property unless:
     *
     *
     *                            Those properties themselves directly translate to a semantic of "unknown".  (E.g. a local code sent as a translation that conveys 'unknown')
     *                            Those properties further qualify the nature of what is unknown.  (E.g. specifying a use code of "H" and a URL prefix of "tel:" to convey that it is the home phone number that is unknown.)
     */
    readonly Unknown: "UNK";
    /**
     * W: The spouse has died
     */
    readonly Widowed: "W";
};
/**
 * This value set defines the set of codes that can be used to indicate the marital status of a person.
 */
export declare type MaritalStatusCodeType = typeof MaritalStatusCodes[keyof typeof MaritalStatusCodes];
//# sourceMappingURL=MaritalStatusCodes.d.ts.map