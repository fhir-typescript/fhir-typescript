import { CodingArgs } from '../fhir/Coding.js';
/**
 * This examples value set defines the set of codes that can be used to represent the type of an account.
 */
export declare type AccountTypeCodingType = {
    /**
     * _ActAccountCode: An account represents a grouping of financial transactions that are tracked and reported together with a single balance. 	 	Examples of account codes (types) are Patient billing accounts (collection of charges), Cost centers; Cash.
     */
    ActAccountCode: CodingArgs;
    /**
     * ACCTRECEIVABLE: An account for collecting charges, reversals, adjustments and payments, including deductibles, copayments, coinsurance (financial transactions) credited or debited to the account receivable account for a patient's encounter.
     */
    AccountReceivable: CodingArgs;
    /**
     * AE: American Express
     */
    AmericanExpress: CodingArgs;
    /**
     * CASH: Cash
     */
    Cash: CodingArgs;
    /**
     * CC: Description: Types of advance payment to be made on a plastic card usually issued by a financial institution used of purchasing services and/or products.
     */
    CreditCard: CodingArgs;
    /**
     * DN: Diner's Club
     */
    DinerQuoteSClub: CodingArgs;
    /**
     * DV: Discover Card
     */
    DiscoverCard: CodingArgs;
    /**
     * MC: Master Card
     */
    MasterCard: CodingArgs;
    /**
     * PBILLACCT: An account representing charges and credits (financial transactions) for a patient's encounter.
     */
    PatientBillingAccount: CodingArgs;
    /**
     * V: Visa
     */
    Visa: CodingArgs;
};
/**
 * This examples value set defines the set of codes that can be used to represent the type of an account.
 */
export declare const AccountTypeCodings: AccountTypeCodingType;
//# sourceMappingURL=AccountTypeCodings.d.ts.map