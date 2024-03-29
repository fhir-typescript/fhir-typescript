// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/account-type|3.0.2

import { CodingArgs } from '../fhir/Coding.js'

/**
 * This examples value set defines the set of codes that can be used to represent the type of an account.
 */
export type AccountTypeCodingType = {
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
}

/**
 * This examples value set defines the set of codes that can be used to represent the type of an account.
 */
export const AccountTypeCodings:AccountTypeCodingType = {
  /**
   * _ActAccountCode: An account represents a grouping of financial transactions that are tracked and reported together with a single balance. 	 	Examples of account codes (types) are Patient billing accounts (collection of charges), Cost centers; Cash.
   */
  ActAccountCode: {
    display: "ActAccountCode",
    code: "_ActAccountCode",
    system: "http://hl7.org/fhir/v3/ActCode",
  },
  /**
   * ACCTRECEIVABLE: An account for collecting charges, reversals, adjustments and payments, including deductibles, copayments, coinsurance (financial transactions) credited or debited to the account receivable account for a patient's encounter.
   */
  AccountReceivable: {
    display: "account receivable",
    code: "ACCTRECEIVABLE",
    system: "http://hl7.org/fhir/v3/ActCode",
  },
  /**
   * AE: American Express
   */
  AmericanExpress: {
    display: "American Express",
    code: "AE",
    system: "http://hl7.org/fhir/v3/ActCode",
  },
  /**
   * CASH: Cash
   */
  Cash: {
    display: "Cash",
    code: "CASH",
    system: "http://hl7.org/fhir/v3/ActCode",
  },
  /**
   * CC: Description: Types of advance payment to be made on a plastic card usually issued by a financial institution used of purchasing services and/or products.
   */
  CreditCard: {
    display: "credit card",
    code: "CC",
    system: "http://hl7.org/fhir/v3/ActCode",
  },
  /**
   * DN: Diner's Club
   */
  DinerQuoteSClub: {
    display: "Diner's Club",
    code: "DN",
    system: "http://hl7.org/fhir/v3/ActCode",
  },
  /**
   * DV: Discover Card
   */
  DiscoverCard: {
    display: "Discover Card",
    code: "DV",
    system: "http://hl7.org/fhir/v3/ActCode",
  },
  /**
   * MC: Master Card
   */
  MasterCard: {
    display: "Master Card",
    code: "MC",
    system: "http://hl7.org/fhir/v3/ActCode",
  },
  /**
   * PBILLACCT: An account representing charges and credits (financial transactions) for a patient's encounter.
   */
  PatientBillingAccount: {
    display: "patient billing account",
    code: "PBILLACCT",
    system: "http://hl7.org/fhir/v3/ActCode",
  },
  /**
   * V: Visa
   */
  Visa: {
    display: "Visa",
    code: "V",
    system: "http://hl7.org/fhir/v3/ActCode",
  },
} as const;
