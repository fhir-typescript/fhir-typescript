import { Coding } from '../fhir/Coding.js';
/**
 * This examples value set defines the set of codes that can be used to represent the type of an account.
 */
export declare const AccountTypeCodings: {
    /**
     * _ActAccountCode: An account represents a grouping of financial transactions that are tracked and reported together with a single balance. 	 	Examples of account codes (types) are Patient billing accounts (collection of charges), Cost centers; Cash.
     */
    readonly ActAccountCode: Coding;
    /**
     * ACCTRECEIVABLE: An account for collecting charges, reversals, adjustments and payments, including deductibles, copayments, coinsurance (financial transactions) credited or debited to the account receivable account for a patient's encounter.
     */
    readonly AccountReceivable: Coding;
    /**
     * AE: American Express
     */
    readonly AmericanExpress: Coding;
    /**
     * CASH: Cash
     */
    readonly Cash: Coding;
    /**
     * CC: Description: Types of advance payment to be made on a plastic card usually issued by a financial institution used of purchasing services and/or products.
     */
    readonly CreditCard: Coding;
    /**
     * DN: Diner's Club
     */
    readonly DinerQuoteSClub: Coding;
    /**
     * DV: Discover Card
     */
    readonly DiscoverCard: Coding;
    /**
     * MC: Master Card
     */
    readonly MasterCard: Coding;
    /**
     * PBILLACCT: An account representing charges and credits (financial transactions) for a patient's encounter.
     */
    readonly PatientBillingAccount: Coding;
    /**
     * V: Visa
     */
    readonly Visa: Coding;
};
/**
 * This examples value set defines the set of codes that can be used to represent the type of an account.
 */
export declare type AccountTypeCodingType = typeof AccountTypeCodings;
//# sourceMappingURL=AccountTypeCodings.d.ts.map