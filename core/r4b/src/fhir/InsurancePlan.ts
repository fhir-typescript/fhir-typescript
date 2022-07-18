// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR Resource: InsurancePlan

import * as fhir from '../fhir.js';

// @ts-ignore
import { ContactentityTypeCodes,  ContactentityTypeCodeType } from '../fhirValueSets/ContactentityTypeCodes.js';
// @ts-ignore
import { ContactentityTypeVsValidation } from '../fhirValueSets/ContactentityTypeVsValidation.js';
// @ts-ignore
import { InsuranceplanApplicabilityCodes,  InsuranceplanApplicabilityCodeType } from '../fhirValueSets/InsuranceplanApplicabilityCodes.js';
// @ts-ignore
import { InsuranceplanApplicabilityVsValidation } from '../fhirValueSets/InsuranceplanApplicabilityVsValidation.js';
// @ts-ignore
import { PublicationStatusCodes,  PublicationStatusCodeType } from '../fhirValueSets/PublicationStatusCodes.js';
// @ts-ignore
import { PublicationStatusVsValidation } from '../fhirValueSets/PublicationStatusVsValidation.js';
// @ts-ignore
import { InsuranceplanTypeCodes,  InsuranceplanTypeCodeType } from '../fhirValueSets/InsuranceplanTypeCodes.js';
// @ts-ignore
import { InsuranceplanTypeVsValidation } from '../fhirValueSets/InsuranceplanTypeVsValidation.js';
/**
 * Valid arguments for the InsurancePlanContact type.
 */
export interface InsurancePlanContactArgs extends fhir.BackboneElementArgs {
  /**
   * Indicates a purpose for which the contact can be reached.
   */
  purpose?: fhir.CodeableConceptArgs|undefined;
  /**
   * A name associated with the contact.
   */
  name?: fhir.HumanNameArgs|undefined;
  /**
   * A contact detail (e.g. a telephone number or an email address) by which the party may be contacted.
   */
  telecom?: fhir.ContactPointArgs[]|undefined;
  /**
   * Visiting or postal addresses for the contact.
   */
  address?: fhir.AddressArgs|undefined;
}

/**
 * Where multiple contacts for the same purpose are provided there is a standard extension that can be used to determine which one is the preferred contact to use.
 */
export class InsurancePlanContact extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'InsurancePlanContact';
  /**
   * Indicates a purpose for which the contact can be reached.
   */
  public purpose?: fhir.CodeableConcept|undefined;
  /**
   * A name associated with the contact.
   */
  public name?: fhir.HumanName|undefined;
  /**
   * A contact detail (e.g. a telephone number or an email address) by which the party may be contacted.
   */
  public telecom: fhir.ContactPoint[];
  /**
   * Visiting or postal addresses for the contact.
   */
  public address?: fhir.Address|undefined;
  /**
   * Default constructor for InsurancePlanContact - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<InsurancePlanContactArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['purpose']) { this.purpose = new fhir.CodeableConcept(source.purpose); }
    if (source['name']) { this.name = new fhir.HumanName(source.name); }
    if (source['telecom']) { this.telecom = source.telecom.map((x) => new fhir.ContactPoint(x)); }
    else { this.telecom = []; }
    if (source['address']) { this.address = new fhir.Address(source.address); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'InsurancePlan.contact' }
    iss.push(...this.vOS('purpose',exp));
    iss.push(...this.vOS('name',exp));
    iss.push(...this.vOA('telecom',exp));
    iss.push(...this.vOS('address',exp));
    return iss;
  }
}
/**
 * Valid arguments for the InsurancePlanCoverageBenefitLimit type.
 */
export interface InsurancePlanCoverageBenefitLimitArgs extends fhir.BackboneElementArgs {
  /**
   * May also be called “eligible expense,” “payment allowance,” or “negotiated rate.”.
   */
  value?: fhir.QuantityArgs|undefined;
  /**
   * Use `CodeableConcept.text` element if the data is free (uncoded) text.
   */
  code?: fhir.CodeableConceptArgs|undefined;
}

/**
 * The specific limits on the benefit.
 */
export class InsurancePlanCoverageBenefitLimit extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'InsurancePlanCoverageBenefitLimit';
  /**
   * May also be called “eligible expense,” “payment allowance,” or “negotiated rate.”.
   */
  public value?: fhir.Quantity|undefined;
  /**
   * Use `CodeableConcept.text` element if the data is free (uncoded) text.
   */
  public code?: fhir.CodeableConcept|undefined;
  /**
   * Default constructor for InsurancePlanCoverageBenefitLimit - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<InsurancePlanCoverageBenefitLimitArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['value']) { this.value = new fhir.Quantity(source.value); }
    if (source['code']) { this.code = new fhir.CodeableConcept(source.code); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'InsurancePlan.coverage.benefit.limit' }
    iss.push(...this.vOS('value',exp));
    iss.push(...this.vOS('code',exp));
    return iss;
  }
}
/**
 * Valid arguments for the InsurancePlanCoverageBenefit type.
 */
export interface InsurancePlanCoverageBenefitArgs extends fhir.BackboneElementArgs {
  /**
   * Type of benefit (primary care; speciality care; inpatient; outpatient).
   */
  type: fhir.CodeableConceptArgs|null;
  /**
   * The referral requirements to have access/coverage for this benefit.
   */
  requirement?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: InsurancePlan.coverage.benefit.requirement
   */
  _requirement?:fhir.FhirElementArgs;
  /**
   * The specific limits on the benefit.
   */
  limit?: fhir.InsurancePlanCoverageBenefitLimitArgs[]|undefined;
}

/**
 * Specific benefits under this type of coverage.
 */
export class InsurancePlanCoverageBenefit extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'InsurancePlanCoverageBenefit';
  /**
   * Type of benefit (primary care; speciality care; inpatient; outpatient).
   */
  public type: fhir.CodeableConcept|null;
  /**
   * The referral requirements to have access/coverage for this benefit.
   */
  public requirement?: fhir.FhirString|undefined;
  /**
   * The specific limits on the benefit.
   */
  public limit: fhir.InsurancePlanCoverageBenefitLimit[];
  /**
   * Default constructor for InsurancePlanCoverageBenefit - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<InsurancePlanCoverageBenefitArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type); }
    else { this.type = null; }
    if (source['requirement']) { this.requirement = new fhir.FhirString({value: source.requirement}); }
    if (source['_requirement']) {
      if (this.requirement) { this.requirement.addExtendedProperties(source._requirement!); }
      else { this.requirement = new fhir.FhirString(source._requirement as Partial<fhir.FhirStringArgs>); }
    }
    if (source['limit']) { this.limit = source.limit.map((x) => new fhir.InsurancePlanCoverageBenefitLimit(x)); }
    else { this.limit = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'InsurancePlan.coverage.benefit' }
    iss.push(...this.vRS('type',exp));
    iss.push(...this.vOS('requirement',exp));
    iss.push(...this.vOA('limit',exp));
    return iss;
  }
}
/**
 * Valid arguments for the InsurancePlanCoverage type.
 */
export interface InsurancePlanCoverageArgs extends fhir.BackboneElementArgs {
  /**
   * Type of coverage  (Medical; Dental; Mental Health; Substance Abuse; Vision; Drug; Short Term; Long Term Care; Hospice; Home Health).
   */
  type: fhir.CodeableConceptArgs|null;
  /**
   * Networks are represented as a hierarchy of organization resources.
   */
  network?: fhir.ReferenceArgs[]|undefined;
  /**
   * Specific benefits under this type of coverage.
   */
  benefit: fhir.InsurancePlanCoverageBenefitArgs[]|null;
}

/**
 * Details about the coverage offered by the insurance product.
 */
export class InsurancePlanCoverage extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'InsurancePlanCoverage';
  /**
   * Type of coverage  (Medical; Dental; Mental Health; Substance Abuse; Vision; Drug; Short Term; Long Term Care; Hospice; Home Health).
   */
  public type: fhir.CodeableConcept|null;
  /**
   * Networks are represented as a hierarchy of organization resources.
   */
  public network: fhir.Reference[];
  /**
   * Specific benefits under this type of coverage.
   */
  public benefit: fhir.InsurancePlanCoverageBenefit[];
  /**
   * Default constructor for InsurancePlanCoverage - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<InsurancePlanCoverageArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type); }
    else { this.type = null; }
    if (source['network']) { this.network = source.network.map((x) => new fhir.Reference(x)); }
    else { this.network = []; }
    if (source['benefit']) { this.benefit = source.benefit.map((x) => new fhir.InsurancePlanCoverageBenefit(x)); }
    else { this.benefit = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'InsurancePlan.coverage' }
    iss.push(...this.vRS('type',exp));
    iss.push(...this.vOA('network',exp));
    iss.push(...this.vRA('benefit',exp));
    return iss;
  }
}
/**
 * Valid arguments for the InsurancePlanPlanGeneralCost type.
 */
export interface InsurancePlanPlanGeneralCostArgs extends fhir.BackboneElementArgs {
  /**
   * Type of cost.
   */
  type?: fhir.CodeableConceptArgs|undefined;
  /**
   * Number of participants enrolled in the plan.
   */
  groupSize?: fhir.FhirPositiveInt|number|undefined;
  /**
   * Extended properties for primitive element: InsurancePlan.plan.generalCost.groupSize
   */
  _groupSize?:fhir.FhirElementArgs;
  /**
   * Value of the cost.
   */
  cost?: fhir.MoneyArgs|undefined;
  /**
   * Additional information about the general costs associated with this plan.
   */
  comment?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: InsurancePlan.plan.generalCost.comment
   */
  _comment?:fhir.FhirElementArgs;
}

/**
 * Overall costs associated with the plan.
 */
export class InsurancePlanPlanGeneralCost extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'InsurancePlanPlanGeneralCost';
  /**
   * Type of cost.
   */
  public type?: fhir.CodeableConcept|undefined;
  /**
   * Number of participants enrolled in the plan.
   */
  public groupSize?: fhir.FhirPositiveInt|undefined;
  /**
   * Value of the cost.
   */
  public cost?: fhir.Money|undefined;
  /**
   * Additional information about the general costs associated with this plan.
   */
  public comment?: fhir.FhirString|undefined;
  /**
   * Default constructor for InsurancePlanPlanGeneralCost - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<InsurancePlanPlanGeneralCostArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type); }
    if (source['groupSize']) { this.groupSize = new fhir.FhirPositiveInt({value: source.groupSize}); }
    if (source['_groupSize']) {
      if (this.groupSize) { this.groupSize.addExtendedProperties(source._groupSize!); }
      else { this.groupSize = new fhir.FhirPositiveInt(source._groupSize as Partial<fhir.FhirPositiveIntArgs>); }
    }
    if (source['cost']) { this.cost = new fhir.Money(source.cost); }
    if (source['comment']) { this.comment = new fhir.FhirString({value: source.comment}); }
    if (source['_comment']) {
      if (this.comment) { this.comment.addExtendedProperties(source._comment!); }
      else { this.comment = new fhir.FhirString(source._comment as Partial<fhir.FhirStringArgs>); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'InsurancePlan.plan.generalCost' }
    iss.push(...this.vOS('type',exp));
    iss.push(...this.vOS('groupSize',exp));
    iss.push(...this.vOS('cost',exp));
    iss.push(...this.vOS('comment',exp));
    return iss;
  }
}
/**
 * Valid arguments for the InsurancePlanPlanSpecificCostBenefitCost type.
 */
export interface InsurancePlanPlanSpecificCostBenefitCostArgs extends fhir.BackboneElementArgs {
  /**
   * Type of cost (copay; individual cap; family cap; coinsurance; deductible).
   */
  type: fhir.CodeableConceptArgs|null;
  /**
   * Whether the cost applies to in-network or out-of-network providers (in-network; out-of-network; other).
   */
  applicability?: fhir.CodeableConceptArgs|undefined;
  /**
   * Additional information about the cost, such as information about funding sources (e.g. HSA, HRA, FSA, RRA).
   */
  qualifiers?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * The actual cost value. (some of the costs may be represented as percentages rather than currency, e.g. 10% coinsurance).
   */
  value?: fhir.QuantityArgs|undefined;
}

/**
 * List of the costs associated with a specific benefit.
 */
export class InsurancePlanPlanSpecificCostBenefitCost extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'InsurancePlanPlanSpecificCostBenefitCost';
  /**
   * Type of cost (copay; individual cap; family cap; coinsurance; deductible).
   */
  public type: fhir.CodeableConcept|null;
  /**
   * Whether the cost applies to in-network or out-of-network providers (in-network; out-of-network; other).
   */
  public applicability?: fhir.CodeableConcept|undefined;
  /**
   * Additional information about the cost, such as information about funding sources (e.g. HSA, HRA, FSA, RRA).
   */
  public qualifiers: fhir.CodeableConcept[];
  /**
   * The actual cost value. (some of the costs may be represented as percentages rather than currency, e.g. 10% coinsurance).
   */
  public value?: fhir.Quantity|undefined;
  /**
   * Default constructor for InsurancePlanPlanSpecificCostBenefitCost - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<InsurancePlanPlanSpecificCostBenefitCostArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type); }
    else { this.type = null; }
    if (source['applicability']) { this.applicability = new fhir.CodeableConcept(source.applicability); }
    if (source['qualifiers']) { this.qualifiers = source.qualifiers.map((x) => new fhir.CodeableConcept(x)); }
    else { this.qualifiers = []; }
    if (source['value']) { this.value = new fhir.Quantity(source.value); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'InsurancePlan.plan.specificCost.benefit.cost' }
    iss.push(...this.vRS('type',exp));
    iss.push(...this.vOSV('applicability',exp,'InsuranceplanApplicability',InsuranceplanApplicabilityVsValidation,'r'));
    iss.push(...this.vOA('qualifiers',exp));
    iss.push(...this.vOS('value',exp));
    return iss;
  }
}
/**
 * Valid arguments for the InsurancePlanPlanSpecificCostBenefit type.
 */
export interface InsurancePlanPlanSpecificCostBenefitArgs extends fhir.BackboneElementArgs {
  /**
   * Type of specific benefit (preventative; primary care office visit; speciality office visit; hospitalization; emergency room; urgent care).
   */
  type: fhir.CodeableConceptArgs|null;
  /**
   * List of the costs associated with a specific benefit.
   */
  cost?: fhir.InsurancePlanPlanSpecificCostBenefitCostArgs[]|undefined;
}

/**
 * List of the specific benefits under this category of benefit.
 */
export class InsurancePlanPlanSpecificCostBenefit extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'InsurancePlanPlanSpecificCostBenefit';
  /**
   * Type of specific benefit (preventative; primary care office visit; speciality office visit; hospitalization; emergency room; urgent care).
   */
  public type: fhir.CodeableConcept|null;
  /**
   * List of the costs associated with a specific benefit.
   */
  public cost: fhir.InsurancePlanPlanSpecificCostBenefitCost[];
  /**
   * Default constructor for InsurancePlanPlanSpecificCostBenefit - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<InsurancePlanPlanSpecificCostBenefitArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type); }
    else { this.type = null; }
    if (source['cost']) { this.cost = source.cost.map((x) => new fhir.InsurancePlanPlanSpecificCostBenefitCost(x)); }
    else { this.cost = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'InsurancePlan.plan.specificCost.benefit' }
    iss.push(...this.vRS('type',exp));
    iss.push(...this.vOA('cost',exp));
    return iss;
  }
}
/**
 * Valid arguments for the InsurancePlanPlanSpecificCost type.
 */
export interface InsurancePlanPlanSpecificCostArgs extends fhir.BackboneElementArgs {
  /**
   * General category of benefit (Medical; Dental; Vision; Drug; Mental Health; Substance Abuse; Hospice, Home Health).
   */
  category: fhir.CodeableConceptArgs|null;
  /**
   * List of the specific benefits under this category of benefit.
   */
  benefit?: fhir.InsurancePlanPlanSpecificCostBenefitArgs[]|undefined;
}

/**
 * Costs associated with the coverage provided by the product.
 */
export class InsurancePlanPlanSpecificCost extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'InsurancePlanPlanSpecificCost';
  /**
   * General category of benefit (Medical; Dental; Vision; Drug; Mental Health; Substance Abuse; Hospice, Home Health).
   */
  public category: fhir.CodeableConcept|null;
  /**
   * List of the specific benefits under this category of benefit.
   */
  public benefit: fhir.InsurancePlanPlanSpecificCostBenefit[];
  /**
   * Default constructor for InsurancePlanPlanSpecificCost - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<InsurancePlanPlanSpecificCostArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['category']) { this.category = new fhir.CodeableConcept(source.category); }
    else { this.category = null; }
    if (source['benefit']) { this.benefit = source.benefit.map((x) => new fhir.InsurancePlanPlanSpecificCostBenefit(x)); }
    else { this.benefit = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'InsurancePlan.plan.specificCost' }
    iss.push(...this.vRS('category',exp));
    iss.push(...this.vOA('benefit',exp));
    return iss;
  }
}
/**
 * Valid arguments for the InsurancePlanPlan type.
 */
export interface InsurancePlanPlanArgs extends fhir.BackboneElementArgs {
  /**
   * Business identifiers assigned to this health insurance plan which remain constant as the resource is updated and propagates from server to server.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * Type of plan. For example, "Platinum" or "High Deductable".
   */
  type?: fhir.CodeableConceptArgs|undefined;
  /**
   * The geographic region in which a health insurance plan's benefits apply.
   */
  coverageArea?: fhir.ReferenceArgs[]|undefined;
  /**
   * Networks are represented as a hierarchy of organization resources.
   */
  network?: fhir.ReferenceArgs[]|undefined;
  /**
   * Overall costs associated with the plan.
   */
  generalCost?: fhir.InsurancePlanPlanGeneralCostArgs[]|undefined;
  /**
   * Costs associated with the coverage provided by the product.
   */
  specificCost?: fhir.InsurancePlanPlanSpecificCostArgs[]|undefined;
}

/**
 * Details about an insurance plan.
 */
export class InsurancePlanPlan extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'InsurancePlanPlan';
  /**
   * Business identifiers assigned to this health insurance plan which remain constant as the resource is updated and propagates from server to server.
   */
  public identifier: fhir.Identifier[];
  /**
   * Type of plan. For example, "Platinum" or "High Deductable".
   */
  public type?: fhir.CodeableConcept|undefined;
  /**
   * The geographic region in which a health insurance plan's benefits apply.
   */
  public coverageArea: fhir.Reference[];
  /**
   * Networks are represented as a hierarchy of organization resources.
   */
  public network: fhir.Reference[];
  /**
   * Overall costs associated with the plan.
   */
  public generalCost: fhir.InsurancePlanPlanGeneralCost[];
  /**
   * Costs associated with the coverage provided by the product.
   */
  public specificCost: fhir.InsurancePlanPlanSpecificCost[];
  /**
   * Default constructor for InsurancePlanPlan - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<InsurancePlanPlanArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type); }
    if (source['coverageArea']) { this.coverageArea = source.coverageArea.map((x) => new fhir.Reference(x)); }
    else { this.coverageArea = []; }
    if (source['network']) { this.network = source.network.map((x) => new fhir.Reference(x)); }
    else { this.network = []; }
    if (source['generalCost']) { this.generalCost = source.generalCost.map((x) => new fhir.InsurancePlanPlanGeneralCost(x)); }
    else { this.generalCost = []; }
    if (source['specificCost']) { this.specificCost = source.specificCost.map((x) => new fhir.InsurancePlanPlanSpecificCost(x)); }
    else { this.specificCost = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'InsurancePlan.plan' }
    iss.push(...this.vOA('identifier',exp));
    iss.push(...this.vOS('type',exp));
    iss.push(...this.vOA('coverageArea',exp));
    iss.push(...this.vOA('network',exp));
    iss.push(...this.vOA('generalCost',exp));
    iss.push(...this.vOA('specificCost',exp));
    return iss;
  }
}
/**
 * Valid arguments for the InsurancePlan type.
 */
export interface InsurancePlanArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "InsurancePlan"|undefined;
  /**
   * Business identifiers assigned to this health insurance product which remain constant as the resource is updated and propagates from server to server.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * The current state of the health insurance product.
   */
  status?: fhir.FhirCode<PublicationStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: InsurancePlan.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * The kind of health insurance product.
   */
  type?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * If the name of the product/plan changes, consider putting the old name in the alias column so that it can still be located through searches.
   */
  name?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: InsurancePlan.name
   */
  _name?:fhir.FhirElementArgs;
  /**
   * There are no dates associated with the alias/historic names, as this is not intended to track when names were used, but to assist in searching so that older names can still result in identifying the product/plan.
   */
  alias?: fhir.FhirString[]|(string|null)[]|undefined;
  /**
   * Extended properties for primitive element: InsurancePlan.alias
   */
  _alias?:(fhir.FhirElementArgs|null)[];
  /**
   * The period of time that the health insurance product is available.
   */
  period?: fhir.PeriodArgs|undefined;
  /**
   * The entity that is providing  the health insurance product and underwriting the risk.  This is typically an insurance carriers, other third-party payers, or health plan sponsors comonly referred to as 'payers'.
   */
  ownedBy?: fhir.ReferenceArgs|undefined;
  /**
   * An organization which administer other services such as underwriting, customer service and/or claims processing on behalf of the health insurance product owner.
   */
  administeredBy?: fhir.ReferenceArgs|undefined;
  /**
   * The geographic region in which a health insurance product's benefits apply.
   */
  coverageArea?: fhir.ReferenceArgs[]|undefined;
  /**
   * Where multiple contacts for the same purpose are provided there is a standard extension that can be used to determine which one is the preferred contact to use.
   */
  contact?: fhir.InsurancePlanContactArgs[]|undefined;
  /**
   * The technical endpoints providing access to services operated for the health insurance product.
   */
  endpoint?: fhir.ReferenceArgs[]|undefined;
  /**
   * Networks are represented as a hierarchy of organization resources.
   */
  network?: fhir.ReferenceArgs[]|undefined;
  /**
   * Details about the coverage offered by the insurance product.
   */
  coverage?: fhir.InsurancePlanCoverageArgs[]|undefined;
  /**
   * Details about an insurance plan.
   */
  plan?: fhir.InsurancePlanPlanArgs[]|undefined;
}

/**
 * Details of a Health Insurance product/plan provided by an organization.
 */
export class InsurancePlan extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'InsurancePlan';
  /**
   * Resource Type Name
   */
  public override resourceType: "InsurancePlan";
  /**
   * Business identifiers assigned to this health insurance product which remain constant as the resource is updated and propagates from server to server.
   */
  public identifier: fhir.Identifier[];
  /**
   * The current state of the health insurance product.
   */
  public status?: fhir.FhirCode<PublicationStatusCodeType>|undefined;
  /**
   * The kind of health insurance product.
   */
  public type: fhir.CodeableConcept[];
  /**
   * If the name of the product/plan changes, consider putting the old name in the alias column so that it can still be located through searches.
   */
  public name?: fhir.FhirString|undefined;
  /**
   * There are no dates associated with the alias/historic names, as this is not intended to track when names were used, but to assist in searching so that older names can still result in identifying the product/plan.
   */
  public alias: fhir.FhirString[];
  /**
   * The period of time that the health insurance product is available.
   */
  public period?: fhir.Period|undefined;
  /**
   * The entity that is providing  the health insurance product and underwriting the risk.  This is typically an insurance carriers, other third-party payers, or health plan sponsors comonly referred to as 'payers'.
   */
  public ownedBy?: fhir.Reference|undefined;
  /**
   * An organization which administer other services such as underwriting, customer service and/or claims processing on behalf of the health insurance product owner.
   */
  public administeredBy?: fhir.Reference|undefined;
  /**
   * The geographic region in which a health insurance product's benefits apply.
   */
  public coverageArea: fhir.Reference[];
  /**
   * Where multiple contacts for the same purpose are provided there is a standard extension that can be used to determine which one is the preferred contact to use.
   */
  public contact: fhir.InsurancePlanContact[];
  /**
   * The technical endpoints providing access to services operated for the health insurance product.
   */
  public endpoint: fhir.Reference[];
  /**
   * Networks are represented as a hierarchy of organization resources.
   */
  public network: fhir.Reference[];
  /**
   * Details about the coverage offered by the insurance product.
   */
  public coverage: fhir.InsurancePlanCoverage[];
  /**
   * Details about an insurance plan.
   */
  public plan: fhir.InsurancePlanPlan[];
  /**
   * Default constructor for InsurancePlan - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<InsurancePlanArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'InsurancePlan';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['status']) { this.status = new fhir.FhirCode<PublicationStatusCodeType>({value: source.status}); }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<PublicationStatusCodeType>(source._status as Partial<fhir.FhirCode>); }
    }
    if (source['type']) { this.type = source.type.map((x) => new fhir.CodeableConcept(x)); }
    else { this.type = []; }
    if (source['name']) { this.name = new fhir.FhirString({value: source.name}); }
    if (source['_name']) {
      if (this.name) { this.name.addExtendedProperties(source._name!); }
      else { this.name = new fhir.FhirString(source._name as Partial<fhir.FhirStringArgs>); }
    }
    if (source['alias']) { this.alias = source.alias.map((x) => new fhir.FhirString({value: x})); }
    else { this.alias = []; }
    if (source['_alias']) {
      source._alias.forEach((x,i) => {
        if (this.alias.length >= i) { if (x) { this.alias[i].addExtendedProperties(x); } }
        else { if (x) { this.alias.push(new fhir.FhirString(x as Partial<fhir.FhirStringArgs>)); } }
      });
    }
    if (source['period']) { this.period = new fhir.Period(source.period); }
    if (source['ownedBy']) { this.ownedBy = new fhir.Reference(source.ownedBy); }
    if (source['administeredBy']) { this.administeredBy = new fhir.Reference(source.administeredBy); }
    if (source['coverageArea']) { this.coverageArea = source.coverageArea.map((x) => new fhir.Reference(x)); }
    else { this.coverageArea = []; }
    if (source['contact']) { this.contact = source.contact.map((x) => new fhir.InsurancePlanContact(x)); }
    else { this.contact = []; }
    if (source['endpoint']) { this.endpoint = source.endpoint.map((x) => new fhir.Reference(x)); }
    else { this.endpoint = []; }
    if (source['network']) { this.network = source.network.map((x) => new fhir.Reference(x)); }
    else { this.network = []; }
    if (source['coverage']) { this.coverage = source.coverage.map((x) => new fhir.InsurancePlanCoverage(x)); }
    else { this.coverage = []; }
    if (source['plan']) { this.plan = source.plan.map((x) => new fhir.InsurancePlanPlan(x)); }
    else { this.plan = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'InsurancePlan' }
    iss.push(...this.vRPS('resourceType',exp));
    iss.push(...this.vOA('identifier',exp));
    iss.push(...this.vOSV('status',exp,'PublicationStatus',PublicationStatusVsValidation,'r'));
    iss.push(...this.vOA('type',exp));
    iss.push(...this.vOS('name',exp));
    iss.push(...this.vOA('alias',exp));
    iss.push(...this.vOS('period',exp));
    iss.push(...this.vOS('ownedBy',exp));
    iss.push(...this.vOS('administeredBy',exp));
    iss.push(...this.vOA('coverageArea',exp));
    iss.push(...this.vOA('contact',exp));
    iss.push(...this.vOA('endpoint',exp));
    iss.push(...this.vOA('network',exp));
    iss.push(...this.vOA('coverage',exp));
    iss.push(...this.vOA('plan',exp));
    return iss;
  }
}