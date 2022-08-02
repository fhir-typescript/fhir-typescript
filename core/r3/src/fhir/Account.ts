// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: Account

import * as fhir from '../fhir.js';

// @ts-ignore
import { AccountStatusCodes,  AccountStatusCodeType } from '../fhirValueSets/AccountStatusCodes.js';
// @ts-ignore
import { AccountStatusVsValidation } from '../fhirValueSets/AccountStatusVsValidation.js';
// @ts-ignore
import { AccountTypeCodes,  AccountTypeCodeType } from '../fhirValueSets/AccountTypeCodes.js';
// @ts-ignore
import { AccountTypeVsValidation } from '../fhirValueSets/AccountTypeVsValidation.js';
/**
 * Valid arguments for the AccountCoverage type.
 */
export interface AccountCoverageArgs extends fhir.BackboneElementArgs {
  /**
   * The party(s) that are responsible for payment (or part of) of charges applied to this account (including self-pay).
   * A coverage may only be resposible for specific types of charges, and the sequence of the coverages in the account could be important when processing billing.
   */
  coverage: fhir.ReferenceArgs|null;
  /**
   * It is common in some jurisdictions for there to be multiple coverages allocated to an account, and a sequence is required to order the settling of the account (often with insurance claiming).
   */
  priority?: fhir.FhirPositiveInt|number|undefined;
  /**
   * Extended properties for primitive element: Account.coverage.priority
   */
  _priority?:fhir.FhirElementArgs;
}

/**
 * Typically this may be some form of insurance, internal charges, or self-pay.
 * Local or jurisdicational business rules may determine which coverage covers which types of billable items charged to the account, and in which order.
 * Where the order is important, a local/jurisdicational extension may be defined to specify the order for the type of charge.
 */
export class AccountCoverage extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'AccountCoverage';
  /**
   * The party(s) that are responsible for payment (or part of) of charges applied to this account (including self-pay).
   * A coverage may only be resposible for specific types of charges, and the sequence of the coverages in the account could be important when processing billing.
   */
  public coverage: fhir.Reference|null;
  /**
   * It is common in some jurisdictions for there to be multiple coverages allocated to an account, and a sequence is required to order the settling of the account (often with insurance claiming).
   */
  public priority?: fhir.FhirPositiveInt|undefined;
  /**
   * Default constructor for AccountCoverage - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<AccountCoverageArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['coverage']) { this.coverage = new fhir.Reference(source.coverage); }
    else { this.coverage = null; }
    if (source['priority']) { this.priority = new fhir.FhirPositiveInt({value: source.priority}); }
    if (source['_priority']) {
      if (this.priority) { this.priority.addExtendedProperties(source._priority!); }
      else { this.priority = new fhir.FhirPositiveInt(source._priority as Partial<fhir.FhirPositiveIntArgs>); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Account.coverage' }
    iss.push(...this.vRS('coverage',exp));
    iss.push(...this.vOS('priority',exp));
    return iss;
  }
}
/**
 * Valid arguments for the AccountGuarantor type.
 */
export interface AccountGuarantorArgs extends fhir.BackboneElementArgs {
  /**
   * The entity who is responsible.
   */
  party: fhir.ReferenceArgs|null;
  /**
   * A guarantor may be placed on credit hold or otherwise have their role temporarily suspended.
   */
  onHold?: fhir.FhirBoolean|boolean|undefined;
  /**
   * Extended properties for primitive element: Account.guarantor.onHold
   */
  _onHold?:fhir.FhirElementArgs;
  /**
   * The timeframe during which the guarantor accepts responsibility for the account.
   */
  period?: fhir.PeriodArgs|undefined;
}

/**
 * Parties financially responsible for the account.
 */
export class AccountGuarantor extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'AccountGuarantor';
  /**
   * The entity who is responsible.
   */
  public party: fhir.Reference|null;
  /**
   * A guarantor may be placed on credit hold or otherwise have their role temporarily suspended.
   */
  public onHold?: fhir.FhirBoolean|undefined;
  /**
   * The timeframe during which the guarantor accepts responsibility for the account.
   */
  public period?: fhir.Period|undefined;
  /**
   * Default constructor for AccountGuarantor - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<AccountGuarantorArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['party']) { this.party = new fhir.Reference(source.party); }
    else { this.party = null; }
    if (source['onHold']) { this.onHold = new fhir.FhirBoolean({value: source.onHold}); }
    if (source['_onHold']) {
      if (this.onHold) { this.onHold.addExtendedProperties(source._onHold!); }
      else { this.onHold = new fhir.FhirBoolean(source._onHold as Partial<fhir.FhirBooleanArgs>); }
    }
    if (source['period']) { this.period = new fhir.Period(source.period); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Account.guarantor' }
    iss.push(...this.vRS('party',exp));
    iss.push(...this.vOS('onHold',exp));
    iss.push(...this.vOS('period',exp));
    return iss;
  }
}
/**
 * Valid arguments for the Account type.
 */
export interface AccountArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "Account"|undefined;
  /**
   * Unique identifier used to reference the account.  May or may not be intended for human use (e.g. credit card number).
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * This element is labeled as a modifier because the status contains the codes inactive and entered-in-error that mark the Account as not currently valid.
   */
  status?: fhir.FhirCode<AccountStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: Account.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * Categorizes the account for reporting and searching purposes.
   */
  type?: fhir.CodeableConceptArgs|undefined;
  /**
   * Name used for the account when displaying it to humans in reports, etc.
   */
  name?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Account.name
   */
  _name?:fhir.FhirElementArgs;
  /**
   * Accounts can be applied to non patients for tracking other non patient related activities, such as group services (patients not tracked, and costs charged to another body), or may not be allocated.
   */
  subject?: fhir.ReferenceArgs|undefined;
  /**
   * It is possible for transactions relevant to a coverage period to be posted to the account before or after the coverage period, however the services that are being charged for must be within this period.
   */
  period?: fhir.PeriodArgs|undefined;
  /**
   * Indicates the period of time over which the account is allowed to have transactions posted to it.
   * This period may be different to the coveragePeriod which is the duration of time that services may occur.
   */
  active?: fhir.PeriodArgs|undefined;
  /**
   * Represents the sum of all credits less all debits associated with the account.  Might be positive, zero or negative.
   */
  balance?: fhir.MoneyArgs|undefined;
  /**
   * Typically this may be some form of insurance, internal charges, or self-pay.
   * Local or jurisdicational business rules may determine which coverage covers which types of billable items charged to the account, and in which order.
   * Where the order is important, a local/jurisdicational extension may be defined to specify the order for the type of charge.
   */
  coverage?: fhir.AccountCoverageArgs[]|undefined;
  /**
   * Indicates the organization, department, etc. with responsibility for the account.
   */
  owner?: fhir.ReferenceArgs|undefined;
  /**
   * Provides additional information about what the account tracks and how it is used.
   */
  description?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Account.description
   */
  _description?:fhir.FhirElementArgs;
  /**
   * Parties financially responsible for the account.
   */
  guarantor?: fhir.AccountGuarantorArgs[]|undefined;
}

/**
 * A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc.
 */
export class Account extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'Account';
  /**
   * Resource Type Name
   */
  public override resourceType: "Account";
  /**
   * Unique identifier used to reference the account.  May or may not be intended for human use (e.g. credit card number).
   */
  public identifier: fhir.Identifier[];
  /**
   * This element is labeled as a modifier because the status contains the codes inactive and entered-in-error that mark the Account as not currently valid.
   */
  public status?: fhir.FhirCode<AccountStatusCodeType>|undefined;
  /**
   * Categorizes the account for reporting and searching purposes.
   */
  public type?: fhir.CodeableConcept|undefined;
  /**
   * Name used for the account when displaying it to humans in reports, etc.
   */
  public name?: fhir.FhirString|undefined;
  /**
   * Accounts can be applied to non patients for tracking other non patient related activities, such as group services (patients not tracked, and costs charged to another body), or may not be allocated.
   */
  public subject?: fhir.Reference|undefined;
  /**
   * It is possible for transactions relevant to a coverage period to be posted to the account before or after the coverage period, however the services that are being charged for must be within this period.
   */
  public period?: fhir.Period|undefined;
  /**
   * Indicates the period of time over which the account is allowed to have transactions posted to it.
   * This period may be different to the coveragePeriod which is the duration of time that services may occur.
   */
  public active?: fhir.Period|undefined;
  /**
   * Represents the sum of all credits less all debits associated with the account.  Might be positive, zero or negative.
   */
  public balance?: fhir.Money|undefined;
  /**
   * Typically this may be some form of insurance, internal charges, or self-pay.
   * Local or jurisdicational business rules may determine which coverage covers which types of billable items charged to the account, and in which order.
   * Where the order is important, a local/jurisdicational extension may be defined to specify the order for the type of charge.
   */
  public coverage: fhir.AccountCoverage[];
  /**
   * Indicates the organization, department, etc. with responsibility for the account.
   */
  public owner?: fhir.Reference|undefined;
  /**
   * Provides additional information about what the account tracks and how it is used.
   */
  public description?: fhir.FhirString|undefined;
  /**
   * Parties financially responsible for the account.
   */
  public guarantor: fhir.AccountGuarantor[];
  /**
   * Default constructor for Account - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<AccountArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'Account';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['status']) { this.status = new fhir.FhirCode<AccountStatusCodeType>({value: source.status}); }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<AccountStatusCodeType>(source._status as Partial<fhir.FhirCode>); }
    }
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type); }
    if (source['name']) { this.name = new fhir.FhirString({value: source.name}); }
    if (source['_name']) {
      if (this.name) { this.name.addExtendedProperties(source._name!); }
      else { this.name = new fhir.FhirString(source._name as Partial<fhir.FhirStringArgs>); }
    }
    if (source['subject']) { this.subject = new fhir.Reference(source.subject); }
    if (source['period']) { this.period = new fhir.Period(source.period); }
    if (source['active']) { this.active = new fhir.Period(source.active); }
    if (source['balance']) { this.balance = new fhir.Money(source.balance); }
    if (source['coverage']) { this.coverage = source.coverage.map((x) => new fhir.AccountCoverage(x)); }
    else { this.coverage = []; }
    if (source['owner']) { this.owner = new fhir.Reference(source.owner); }
    if (source['description']) { this.description = new fhir.FhirString({value: source.description}); }
    if (source['_description']) {
      if (this.description) { this.description.addExtendedProperties(source._description!); }
      else { this.description = new fhir.FhirString(source._description as Partial<fhir.FhirStringArgs>); }
    }
    if (source['guarantor']) { this.guarantor = source.guarantor.map((x) => new fhir.AccountGuarantor(x)); }
    else { this.guarantor = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Account' }
    iss.push(...this.vOA('identifier',exp));
    iss.push(...this.vOSV('status',exp,'AccountStatus',AccountStatusVsValidation,'r'));
    iss.push(...this.vOS('type',exp));
    iss.push(...this.vOS('name',exp));
    iss.push(...this.vOS('subject',exp));
    iss.push(...this.vOS('period',exp));
    iss.push(...this.vOS('active',exp));
    iss.push(...this.vOS('balance',exp));
    iss.push(...this.vOA('coverage',exp));
    iss.push(...this.vOS('owner',exp));
    iss.push(...this.vOS('description',exp));
    iss.push(...this.vOA('guarantor',exp));
    return iss;
  }
}
