// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR ValueSet: http://hl7.org/fhir/ValueSet/account-type|4.3.0

/**
 * This examples value set defines the set of codes that can be used to represent the type of an account.
 */
export const AccountTypeCodes = {
  /**
   * Code: _ActAccountCode
   */
  ActAccountCode: "_ActAccountCode",
  /**
   * Code: _CreditCard
   */
  CreditCard: "_CreditCard",
  /**
   * Code: ACCTRECEIVABLE
   */
  AccountReceivable: "ACCTRECEIVABLE",
  /**
   * Code: AE
   */
  AmericanExpress: "AE",
  /**
   * Code: CASH
   */
  Cash: "CASH",
  /**
   * Code: CC
   */
  CreditCardCC: "CC",
  /**
   * Code: DN
   */
  DinerQuoteSClub: "DN",
  /**
   * Code: DV
   */
  DiscoverCard: "DV",
  /**
   * Code: MC
   */
  MasterCard: "MC",
  /**
   * Code: PBILLACCT
   */
  PatientBillingAccount: "PBILLACCT",
  /**
   * Code: V
   */
  Visa: "V",
} as const;

/**
 * This examples value set defines the set of codes that can be used to represent the type of an account.
 */
export type AccountTypeCodeType = typeof AccountTypeCodes[keyof typeof AccountTypeCodes];
