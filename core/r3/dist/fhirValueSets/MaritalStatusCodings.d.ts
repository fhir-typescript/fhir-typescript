import { CodingArgs } from '../fhir/Coding.js';
/**
 * This value set defines the set of codes that can be used to indicate the marital status of a person.
 */
export declare type MaritalStatusCodingType = {
    /**
     * A: Marriage contract has been declared null and to not have existed
     */
    Annulled: CodingArgs;
    /**
     * D: Marriage contract has been declared dissolved and inactive
     */
    Divorced: CodingArgs;
    /**
     * I: Subject to an Interlocutory Decree.
     */
    Interlocutory: CodingArgs;
    /**
     * L: Legally Separated
     */
    LegallySeparated: CodingArgs;
    /**
     * M: A current marriage contract is active
     */
    Married: CodingArgs;
    /**
     * P: More than 1 current spouse
     */
    Polygamous: CodingArgs;
    /**
     * S: No marriage contract has ever been entered
     */
    NeverMarried: CodingArgs;
    /**
     * T: Person declares that a domestic partner relationship exists.
     */
    DomesticPartner: CodingArgs;
    /**
     * U: Currently not in a marriage contract.
     */
    Unmarried: CodingArgs;
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
    Unknown: CodingArgs;
    /**
     * W: The spouse has died
     */
    Widowed: CodingArgs;
};
/**
 * This value set defines the set of codes that can be used to indicate the marital status of a person.
 */
export declare const MaritalStatusCodings: MaritalStatusCodingType;
//# sourceMappingURL=MaritalStatusCodings.d.ts.map