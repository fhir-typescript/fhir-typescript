// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: Coverage

import * as fhir from '../fhir.js';

// @ts-ignore
import { CoverageClassCodings, CoverageClassCodingType,} from '../fhirValueSets/CoverageClassCodings.js';
// @ts-ignore
import { CoverageClassCodes,  CoverageClassCodeType } from '../fhirValueSets/CoverageClassCodes.js';
// @ts-ignore
import { CoverageFinancialExceptionCodings, CoverageFinancialExceptionCodingType,} from '../fhirValueSets/CoverageFinancialExceptionCodings.js';
// @ts-ignore
import { CoverageFinancialExceptionCodes,  CoverageFinancialExceptionCodeType } from '../fhirValueSets/CoverageFinancialExceptionCodes.js';
// @ts-ignore
import { CoverageCopayTypeCodings, CoverageCopayTypeCodingType,} from '../fhirValueSets/CoverageCopayTypeCodings.js';
// @ts-ignore
import { CoverageCopayTypeCodes,  CoverageCopayTypeCodeType } from '../fhirValueSets/CoverageCopayTypeCodes.js';
// @ts-ignore
import { FmStatusCodings, FmStatusCodingType,} from '../fhirValueSets/FmStatusCodings.js';
// @ts-ignore
import { FmStatusCodes,  FmStatusCodeType } from '../fhirValueSets/FmStatusCodes.js';
// @ts-ignore
import { CoverageTypeCodings, CoverageTypeCodingType,} from '../fhirValueSets/CoverageTypeCodings.js';
// @ts-ignore
import { CoverageTypeCodes,  CoverageTypeCodeType } from '../fhirValueSets/CoverageTypeCodes.js';
// @ts-ignore
import { SubscriberRelationshipCodings, SubscriberRelationshipCodingType,} from '../fhirValueSets/SubscriberRelationshipCodings.js';
// @ts-ignore
import { SubscriberRelationshipCodes,  SubscriberRelationshipCodeType } from '../fhirValueSets/SubscriberRelationshipCodes.js';
/**
 * Valid arguments for the CoverageClass type.
 */
export interface CoverageClassArgs extends fhir.BackboneElementArgs {
  /**
   * The type of classification for which an insurer-specific class label or number and optional name is provided, for example may be used to identify a class of coverage or employer group, Policy, Plan.
   */
  type: fhir.CodeableConceptArgs|null;
  /**
   * For example, the Group or Plan number.
   */
  value: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Coverage.class.value
   */
  _value?:fhir.FhirElementArgs;
  /**
   * A short description for the class.
   */
  name?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Coverage.class.name
   */
  _name?:fhir.FhirElementArgs;
}

/**
 * For example may be used to identify a class of coverage or employer group, Policy, Plan.
 */
export class CoverageClass extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'CoverageClass';
  /**
   * The type of classification for which an insurer-specific class label or number and optional name is provided, for example may be used to identify a class of coverage or employer group, Policy, Plan.
   */
  public type: fhir.CodeableConcept|null;
  /**
   * For example, the Group or Plan number.
   */
  public value: fhir.FhirString|null;
  /**
   * A short description for the class.
   */
  public name?: fhir.FhirString|undefined;
  /**
   * Default constructor for CoverageClass - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<CoverageClassArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type); }
    else { this.type = null; }
    if (source['value']) { this.value = new fhir.FhirString({value: source.value}); }
    else { this.value = null; }
    if (source['_value']) {
      if (this.value) { this.value.addExtendedProperties(source._value!); }
      else { this.value = new fhir.FhirString(source._value as Partial<fhir.FhirStringArgs>); }
    }
    if (source['name']) { this.name = new fhir.FhirString({value: source.name}); }
    if (source['_name']) {
      if (this.name) { this.name.addExtendedProperties(source._name!); }
      else { this.name = new fhir.FhirString(source._name as Partial<fhir.FhirStringArgs>); }
    }
  }
  /**
   * Extensible-bound Value Set for type (Coverage.class.type)
   */
  public static get typeExtensibleCodings():CoverageClassCodingType {
    return CoverageClassCodings;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    if (!this['type']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property type:fhir.CodeableConcept fhir: Coverage.class.type:CodeableConcept' });
    }
    if (this["type"]) { issues.push(...this.type.doModelValidation()); }
    if (!this['value']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property value:fhir.FhirString fhir: Coverage.class.value:string' });
    }
    if (this["value"]) { issues.push(...this.value.doModelValidation()); }
    if (this["name"]) { issues.push(...this.name.doModelValidation()); }
    return issues;
  }
}
/**
 * Valid arguments for the CoverageCostToBeneficiaryException type.
 */
export interface CoverageCostToBeneficiaryExceptionArgs extends fhir.BackboneElementArgs {
  /**
   * The code for the specific exception.
   */
  type: fhir.CodeableConceptArgs|null;
  /**
   * The timeframe during when the exception is in force.
   */
  period?: fhir.PeriodArgs|undefined;
}

/**
 * A suite of codes indicating exceptions or reductions to patient costs and their effective periods.
 */
export class CoverageCostToBeneficiaryException extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'CoverageCostToBeneficiaryException';
  /**
   * The code for the specific exception.
   */
  public type: fhir.CodeableConcept|null;
  /**
   * The timeframe during when the exception is in force.
   */
  public period?: fhir.Period|undefined;
  /**
   * Default constructor for CoverageCostToBeneficiaryException - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<CoverageCostToBeneficiaryExceptionArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type); }
    else { this.type = null; }
    if (source['period']) { this.period = new fhir.Period(source.period); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    if (!this['type']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property type:fhir.CodeableConcept fhir: Coverage.costToBeneficiary.exception.type:CodeableConcept' });
    }
    if (this["type"]) { issues.push(...this.type.doModelValidation()); }
    if (this["period"]) { issues.push(...this.period.doModelValidation()); }
    return issues;
  }
}
/**
 * Valid arguments for the CoverageCostToBeneficiary type.
 */
export interface CoverageCostToBeneficiaryArgs extends fhir.BackboneElementArgs {
  /**
   * For example visit, specialist visits, emergency, inpatient care, etc.
   */
  type?: fhir.CodeableConceptArgs|undefined;
  /**
   * Amount may be expressed as a percentage of the service/product cost or a fixed amount of currency.
   */
  value?: fhir.Quantity|fhir.Money|undefined;
  /**
   * Amount may be expressed as a percentage of the service/product cost or a fixed amount of currency.
   */
  valueQuantity?: fhir.QuantityArgs|undefined;
  /**
   * Amount may be expressed as a percentage of the service/product cost or a fixed amount of currency.
   */
  valueMoney?: fhir.MoneyArgs|undefined;
  /**
   * A suite of codes indicating exceptions or reductions to patient costs and their effective periods.
   */
  exception?: fhir.CoverageCostToBeneficiaryExceptionArgs[]|undefined;
}

/**
 * For example by knowing the patient visit co-pay, the provider can collect the amount prior to undertaking treatment.
 */
export class CoverageCostToBeneficiary extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'CoverageCostToBeneficiary';
  /**
   * For example visit, specialist visits, emergency, inpatient care, etc.
   */
  public type?: fhir.CodeableConcept|undefined;
  /**
   * Amount may be expressed as a percentage of the service/product cost or a fixed amount of currency.
   */
  public value: (fhir.Quantity|fhir.Money)|null;
  /**
   * Internal flag to properly serialize choice-type element Coverage.costToBeneficiary.value[x]
   */
  protected static readonly _fts_valueIsChoice:true = true;
  /**
   * A suite of codes indicating exceptions or reductions to patient costs and their effective periods.
   */
  public exception: fhir.CoverageCostToBeneficiaryException[];
  /**
   * Default constructor for CoverageCostToBeneficiary - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<CoverageCostToBeneficiaryArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type); }
    if (source['value']) { this.value = source.value; }
    else if (source['valueQuantity']) { this.value = new fhir.Quantity(source.valueQuantity); }
    else if (source['valueMoney']) { this.value = new fhir.Money(source.valueMoney); }
    else { this.value = null; }
    if (source['exception']) { this.exception = source.exception.map((x) => new fhir.CoverageCostToBeneficiaryException(x)); }
    else { this.exception = []; }
  }
  /**
   * Extensible-bound Value Set for type (Coverage.costToBeneficiary.type)
   */
  public static get typeExtensibleCodings():CoverageCopayTypeCodingType {
    return CoverageCopayTypeCodings;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    if (this["type"]) { issues.push(...this.type.doModelValidation()); }
    if (!this['value']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property value: fhir: Coverage.costToBeneficiary.value[x]:' });
    }
    if (this["exception"]) { this.exception.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    return issues;
  }
}
/**
 * Valid arguments for the Coverage type.
 */
export interface CoverageArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "Coverage"|undefined;
  /**
   * The main (and possibly only) identifier for the coverage - often referred to as a Member Id, Certificate number, Personal Health Number or Case ID. May be constructed as the concatenation of the Coverage.SubscriberID and the Coverage.dependant.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * This element is labeled as a modifier because the status contains the code entered-in-error that marks the coverage as not currently valid.
   */
  status: fhir.FhirCode<FmStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: Coverage.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * The type of coverage: social program, medical plan, accident coverage (workers compensation, auto), group health or payment by an individual or organization.
   */
  type?: fhir.CodeableConceptArgs|undefined;
  /**
   * For example: may be an individual, corporation or the subscriber's employer.
   */
  policyHolder?: fhir.ReferenceArgs|undefined;
  /**
   * May be self or a parent in the case of dependants.
   */
  subscriber?: fhir.ReferenceArgs|undefined;
  /**
   * The insurer assigned ID for the Subscriber.
   */
  subscriberId?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Coverage.subscriberId
   */
  _subscriberId?:fhir.FhirElementArgs;
  /**
   * The party who benefits from the insurance coverage; the patient when products and/or services are provided.
   */
  beneficiary: fhir.ReferenceArgs|null;
  /**
   * Periodically the member number is constructed from the subscriberId and the dependant number.
   */
  dependent?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Coverage.dependent
   */
  _dependent?:fhir.FhirElementArgs;
  /**
   * Typically, an individual uses policies which are theirs (relationship='self') before policies owned by others.
   */
  relationship?: fhir.CodeableConceptArgs|undefined;
  /**
   * Time period during which the coverage is in force. A missing start date indicates the start date isn't known, a missing end date means the coverage is continuing to be in force.
   */
  period?: fhir.PeriodArgs|undefined;
  /**
   * May provide multiple identifiers such as insurance company identifier or business identifier (BIN number).
   * For selfpay it may provide multiple paying persons and/or organizations.
   */
  payor: fhir.ReferenceArgs[]|null;
  /**
   * For example may be used to identify a class of coverage or employer group, Policy, Plan.
   */
  class?: fhir.CoverageClassArgs[]|undefined;
  /**
   * The order of applicability of this coverage relative to other coverages which are currently in force. Note, there may be gaps in the numbering and this does not imply primary, secondary etc. as the specific positioning of coverages depends upon the episode of care.
   */
  order?: fhir.FhirPositiveInt|number|undefined;
  /**
   * Extended properties for primitive element: Coverage.order
   */
  _order?:fhir.FhirElementArgs;
  /**
   * The insurer-specific identifier for the insurer-defined network of providers to which the beneficiary may seek treatment which will be covered at the 'in-network' rate, otherwise 'out of network' terms and conditions apply.
   */
  network?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Coverage.network
   */
  _network?:fhir.FhirElementArgs;
  /**
   * For example by knowing the patient visit co-pay, the provider can collect the amount prior to undertaking treatment.
   */
  costToBeneficiary?: fhir.CoverageCostToBeneficiaryArgs[]|undefined;
  /**
   * Typically, automotive and worker's compensation policies would be flagged with 'subrogation=true' to enable healthcare payors to collect against accident claims.
   */
  subrogation?: fhir.FhirBoolean|boolean|undefined;
  /**
   * Extended properties for primitive element: Coverage.subrogation
   */
  _subrogation?:fhir.FhirElementArgs;
  /**
   * The policy(s) which constitute this insurance coverage.
   */
  contract?: fhir.ReferenceArgs[]|undefined;
}

/**
 * Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment.
 */
export class Coverage extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'Coverage';
  /**
   * Resource Type Name
   */
  public override resourceType: "Coverage";
  /**
   * The main (and possibly only) identifier for the coverage - often referred to as a Member Id, Certificate number, Personal Health Number or Case ID. May be constructed as the concatenation of the Coverage.SubscriberID and the Coverage.dependant.
   */
  public identifier: fhir.Identifier[];
  /**
   * This element is labeled as a modifier because the status contains the code entered-in-error that marks the coverage as not currently valid.
   */
  public status: fhir.FhirCode<FmStatusCodeType>|null;
  /**
   * The type of coverage: social program, medical plan, accident coverage (workers compensation, auto), group health or payment by an individual or organization.
   */
  public type?: fhir.CodeableConcept|undefined;
  /**
   * For example: may be an individual, corporation or the subscriber's employer.
   */
  public policyHolder?: fhir.Reference|undefined;
  /**
   * May be self or a parent in the case of dependants.
   */
  public subscriber?: fhir.Reference|undefined;
  /**
   * The insurer assigned ID for the Subscriber.
   */
  public subscriberId?: fhir.FhirString|undefined;
  /**
   * The party who benefits from the insurance coverage; the patient when products and/or services are provided.
   */
  public beneficiary: fhir.Reference|null;
  /**
   * Periodically the member number is constructed from the subscriberId and the dependant number.
   */
  public dependent?: fhir.FhirString|undefined;
  /**
   * Typically, an individual uses policies which are theirs (relationship='self') before policies owned by others.
   */
  public relationship?: fhir.CodeableConcept|undefined;
  /**
   * Time period during which the coverage is in force. A missing start date indicates the start date isn't known, a missing end date means the coverage is continuing to be in force.
   */
  public period?: fhir.Period|undefined;
  /**
   * May provide multiple identifiers such as insurance company identifier or business identifier (BIN number).
   * For selfpay it may provide multiple paying persons and/or organizations.
   */
  public payor: fhir.Reference[];
  /**
   * For example may be used to identify a class of coverage or employer group, Policy, Plan.
   */
  public class: fhir.CoverageClass[];
  /**
   * The order of applicability of this coverage relative to other coverages which are currently in force. Note, there may be gaps in the numbering and this does not imply primary, secondary etc. as the specific positioning of coverages depends upon the episode of care.
   */
  public order?: fhir.FhirPositiveInt|undefined;
  /**
   * The insurer-specific identifier for the insurer-defined network of providers to which the beneficiary may seek treatment which will be covered at the 'in-network' rate, otherwise 'out of network' terms and conditions apply.
   */
  public network?: fhir.FhirString|undefined;
  /**
   * For example by knowing the patient visit co-pay, the provider can collect the amount prior to undertaking treatment.
   */
  public costToBeneficiary: fhir.CoverageCostToBeneficiary[];
  /**
   * Typically, automotive and worker's compensation policies would be flagged with 'subrogation=true' to enable healthcare payors to collect against accident claims.
   */
  public subrogation?: fhir.FhirBoolean|undefined;
  /**
   * The policy(s) which constitute this insurance coverage.
   */
  public contract: fhir.Reference[];
  /**
   * Default constructor for Coverage - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<CoverageArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'Coverage';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['status']) { this.status = new fhir.FhirCode<FmStatusCodeType>({value: source.status}); }
    else { this.status = null; }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<FmStatusCodeType>(source._status as Partial<fhir.FhirCode>); }
    }
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type); }
    if (source['policyHolder']) { this.policyHolder = new fhir.Reference(source.policyHolder); }
    if (source['subscriber']) { this.subscriber = new fhir.Reference(source.subscriber); }
    if (source['subscriberId']) { this.subscriberId = new fhir.FhirString({value: source.subscriberId}); }
    if (source['_subscriberId']) {
      if (this.subscriberId) { this.subscriberId.addExtendedProperties(source._subscriberId!); }
      else { this.subscriberId = new fhir.FhirString(source._subscriberId as Partial<fhir.FhirStringArgs>); }
    }
    if (source['beneficiary']) { this.beneficiary = new fhir.Reference(source.beneficiary); }
    else { this.beneficiary = null; }
    if (source['dependent']) { this.dependent = new fhir.FhirString({value: source.dependent}); }
    if (source['_dependent']) {
      if (this.dependent) { this.dependent.addExtendedProperties(source._dependent!); }
      else { this.dependent = new fhir.FhirString(source._dependent as Partial<fhir.FhirStringArgs>); }
    }
    if (source['relationship']) { this.relationship = new fhir.CodeableConcept(source.relationship); }
    if (source['period']) { this.period = new fhir.Period(source.period); }
    if (source['payor']) { this.payor = source.payor.map((x) => new fhir.Reference(x)); }
    else { this.payor = []; }
    if (source['class']) { this.class = source.class.map((x) => new fhir.CoverageClass(x)); }
    else { this.class = []; }
    if (source['order']) { this.order = new fhir.FhirPositiveInt({value: source.order}); }
    if (source['_order']) {
      if (this.order) { this.order.addExtendedProperties(source._order!); }
      else { this.order = new fhir.FhirPositiveInt(source._order as Partial<fhir.FhirPositiveIntArgs>); }
    }
    if (source['network']) { this.network = new fhir.FhirString({value: source.network}); }
    if (source['_network']) {
      if (this.network) { this.network.addExtendedProperties(source._network!); }
      else { this.network = new fhir.FhirString(source._network as Partial<fhir.FhirStringArgs>); }
    }
    if (source['costToBeneficiary']) { this.costToBeneficiary = source.costToBeneficiary.map((x) => new fhir.CoverageCostToBeneficiary(x)); }
    else { this.costToBeneficiary = []; }
    if (source['subrogation']) { this.subrogation = new fhir.FhirBoolean({value: source.subrogation}); }
    if (source['_subrogation']) {
      if (this.subrogation) { this.subrogation.addExtendedProperties(source._subrogation!); }
      else { this.subrogation = new fhir.FhirBoolean(source._subrogation as Partial<fhir.FhirBooleanArgs>); }
    }
    if (source['contract']) { this.contract = source.contract.map((x) => new fhir.Reference(x)); }
    else { this.contract = []; }
  }
  /**
   * Required-bound Value Set for status (Coverage.status)
   */
  public static get statusRequiredCodes() {
    return FmStatusCodes;
  }
  /**
   * Preferred-bound Value Set for type (Coverage.type)
   */
  public static get typePreferredCodings():CoverageTypeCodingType {
    return CoverageTypeCodings;
  }
  /**
   * Extensible-bound Value Set for relationship (Coverage.relationship)
   */
  public static get relationshipExtensibleCodings():SubscriberRelationshipCodingType {
    return SubscriberRelationshipCodings;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    if (!this['resourceType']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property resourceType:"Coverage" fhir: Coverage.resourceType:"Coverage"' });
    }
    if (this["identifier"]) { this.identifier.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (!this['status']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property status:fhir.FhirCode<FmStatusCodeType> fhir: Coverage.status:code' });
    }
    if (this['status'] && (!Object.values(FmStatusCodes).includes(this.status as any))) {
      issues.push({ severity: 'error', code: 'code-invalid', diagnostics: 'Invalid code property status:fhir.FhirCode<FmStatusCodeType> fhir: Coverage.status:code Required binding to: FmStatus' });
    }
    if (this["status"]) { issues.push(...this.status.doModelValidation()); }
    if (this["type"]) { issues.push(...this.type.doModelValidation()); }
    if (this["policyHolder"]) { issues.push(...this.policyHolder.doModelValidation()); }
    if (this["subscriber"]) { issues.push(...this.subscriber.doModelValidation()); }
    if (this["subscriberId"]) { issues.push(...this.subscriberId.doModelValidation()); }
    if (!this['beneficiary']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property beneficiary:fhir.Reference fhir: Coverage.beneficiary:Reference' });
    }
    if (this["beneficiary"]) { issues.push(...this.beneficiary.doModelValidation()); }
    if (this["dependent"]) { issues.push(...this.dependent.doModelValidation()); }
    if (this["relationship"]) { issues.push(...this.relationship.doModelValidation()); }
    if (this["period"]) { issues.push(...this.period.doModelValidation()); }
    if (!this['payor']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property payor:fhir.Reference[] fhir: Coverage.payor:Reference' });
    } else if (!Array.isArray(this.payor)) {
      issues.push({ severity: 'error', code: 'structure', diagnostics: 'Found scalar in array property payor:fhir.Reference[] fhir: Coverage.payor:Reference' });
    } else if (this.payor.length === 0) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property payor:fhir.Reference[] fhir: Coverage.payor:Reference' });
    }
    if (this["payor"]) { this.payor.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["class"]) { this.class.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["order"]) { issues.push(...this.order.doModelValidation()); }
    if (this["network"]) { issues.push(...this.network.doModelValidation()); }
    if (this["costToBeneficiary"]) { this.costToBeneficiary.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["subrogation"]) { issues.push(...this.subrogation.doModelValidation()); }
    if (this["contract"]) { this.contract.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    return issues;
  }
}
