// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/account-type|3.0.2

/**
 * This examples value set defines the set of codes that can be used to represent the type of an account.
 */
export const AccountTypeCodes = {
  /**
   * _ActAccountCode: An account represents a grouping of financial transactions that are tracked and reported together with a single balance. 	 	Examples of account codes (types) are Patient billing accounts (collection of charges), Cost centers; Cash.
   */
  ActAccountCode: "_ActAccountCode",
  /**
   * ACCTRECEIVABLE: An account for collecting charges, reversals, adjustments and payments, including deductibles, copayments, coinsurance (financial transactions) credited or debited to the account receivable account for a patient's encounter.
   */
  AccountReceivable: "ACCTRECEIVABLE",
  /**
   * AE: American Express
   */
  AmericanExpress: "AE",
  /**
   * CASH: Cash
   */
  Cash: "CASH",
  /**
   * CC: Description: Types of advance payment to be made on a plastic card usually issued by a financial institution used of purchasing services and/or products.
   */
  CreditCard: "CC",
  /**
   * DN: Diner's Club
   */
  DinerQuoteSClub: "DN",
  /**
   * DV: Discover Card
   */
  DiscoverCard: "DV",
  /**
   * MC: Master Card
   */
  MasterCard: "MC",
  /**
   * PBILLACCT: An account representing charges and credits (financial transactions) for a patient's encounter.
   */
  PatientBillingAccount: "PBILLACCT",
  /**
   * V: Visa
   */
  Visa: "V",
} as const;

/**
 * This examples value set defines the set of codes that can be used to represent the type of an account.
 */
export type AccountTypeCodeType = typeof AccountTypeCodes[keyof typeof AccountTypeCodes];
