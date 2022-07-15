/**
 * This examples value set defines the set of codes that can be used to represent the type of an account.
 */
export declare const AccountTypeCodes: {
    /**
     * _ActAccountCode: An account represents a grouping of financial transactions that are tracked and reported together with a single balance. 	 	Examples of account codes (types) are Patient billing accounts (collection of charges), Cost centers; Cash.
     */
    readonly ActAccountCode: "_ActAccountCode";
    /**
     * ACCTRECEIVABLE: An account for collecting charges, reversals, adjustments and payments, including deductibles, copayments, coinsurance (financial transactions) credited or debited to the account receivable account for a patient's encounter.
     */
    readonly AccountReceivable: "ACCTRECEIVABLE";
    /**
     * AE: American Express
     */
    readonly AmericanExpress: "AE";
    /**
     * CASH: Cash
     */
    readonly Cash: "CASH";
    /**
     * CC: Description: Types of advance payment to be made on a plastic card usually issued by a financial institution used of purchasing services and/or products.
     */
    readonly CreditCard: "CC";
    /**
     * DN: Diner's Club
     */
    readonly DinerQuoteSClub: "DN";
    /**
     * DV: Discover Card
     */
    readonly DiscoverCard: "DV";
    /**
     * MC: Master Card
     */
    readonly MasterCard: "MC";
    /**
     * PBILLACCT: An account representing charges and credits (financial transactions) for a patient's encounter.
     */
    readonly PatientBillingAccount: "PBILLACCT";
    /**
     * V: Visa
     */
    readonly Visa: "V";
};
/**
 * This examples value set defines the set of codes that can be used to represent the type of an account.
 */
export declare type AccountTypeCodeType = typeof AccountTypeCodes[keyof typeof AccountTypeCodes];
//# sourceMappingURL=AccountTypeCodes.d.ts.map