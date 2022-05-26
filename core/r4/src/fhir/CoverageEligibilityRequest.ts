// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: CoverageEligibilityRequest

import * as fhir from '../fhir.js';

// @ts-ignore
import { ExBenefitcategoryCodings, ExBenefitcategoryCodingType,} from '../fhirValueSets/ExBenefitcategoryCodings.js';
// @ts-ignore
import { ExBenefitcategoryCodes,  ExBenefitcategoryCodeType } from '../fhirValueSets/ExBenefitcategoryCodes.js';
// @ts-ignore
import { ServiceUsclsCodings, ServiceUsclsCodingType,} from '../fhirValueSets/ServiceUsclsCodings.js';
// @ts-ignore
import { ServiceUsclsCodes,  ServiceUsclsCodeType } from '../fhirValueSets/ServiceUsclsCodes.js';
// @ts-ignore
import { ClaimModifiersCodings, ClaimModifiersCodingType,} from '../fhirValueSets/ClaimModifiersCodings.js';
// @ts-ignore
import { ClaimModifiersCodes,  ClaimModifiersCodeType } from '../fhirValueSets/ClaimModifiersCodes.js';
// @ts-ignore
import { FmStatusCodings, FmStatusCodingType,} from '../fhirValueSets/FmStatusCodings.js';
// @ts-ignore
import { FmStatusCodes,  FmStatusCodeType } from '../fhirValueSets/FmStatusCodes.js';
// @ts-ignore
import { ProcessPriorityCodings, ProcessPriorityCodingType,} from '../fhirValueSets/ProcessPriorityCodings.js';
// @ts-ignore
import { ProcessPriorityCodes,  ProcessPriorityCodeType } from '../fhirValueSets/ProcessPriorityCodes.js';
// @ts-ignore
import { EligibilityrequestPurposeCodings, EligibilityrequestPurposeCodingType,} from '../fhirValueSets/EligibilityrequestPurposeCodings.js';
// @ts-ignore
import { EligibilityrequestPurposeCodes,  EligibilityrequestPurposeCodeType } from '../fhirValueSets/EligibilityrequestPurposeCodes.js';
/**
 * Valid arguments for the CoverageEligibilityRequestSupportingInfo type.
 */
export interface CoverageEligibilityRequestSupportingInfoArgs extends fhir.BackboneElementArgs {
  /**
   * A number to uniquely identify supporting information entries.
   */
  sequence: fhir.FhirPositiveInt|number|undefined;
  /**
   * Extended properties for primitive element: CoverageEligibilityRequest.supportingInfo.sequence
   */
  _sequence?:fhir.FhirElementArgs;
  /**
   * Could be used to provide references to other resources, document. For example could contain a PDF in an Attachment of the Police Report for an Accident.
   */
  information: fhir.ReferenceArgs|null;
  /**
   * The supporting materials are applicable for all detail items, product/servce categories and specific billing codes.
   */
  appliesToAll?: fhir.FhirBoolean|boolean|undefined;
  /**
   * Extended properties for primitive element: CoverageEligibilityRequest.supportingInfo.appliesToAll
   */
  _appliesToAll?:fhir.FhirElementArgs;
}

/**
 * Often there are multiple jurisdiction specific valuesets which are required.
 */
export class CoverageEligibilityRequestSupportingInfo extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'CoverageEligibilityRequestSupportingInfo';
  /**
   * A number to uniquely identify supporting information entries.
   */
  public sequence: fhir.FhirPositiveInt|null;
  /**
   * Could be used to provide references to other resources, document. For example could contain a PDF in an Attachment of the Police Report for an Accident.
   */
  public information: fhir.Reference|null;
  /**
   * The supporting materials are applicable for all detail items, product/servce categories and specific billing codes.
   */
  public appliesToAll?: fhir.FhirBoolean|undefined;
  /**
   * Default constructor for CoverageEligibilityRequestSupportingInfo - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<CoverageEligibilityRequestSupportingInfoArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['sequence']) { this.sequence = new fhir.FhirPositiveInt({value: source.sequence}); }
    else { this.sequence = null; }
    if (source['_sequence']) {
      if (this.sequence) { this.sequence.addExtendedProperties(source._sequence!); }
      else { this.sequence = new fhir.FhirPositiveInt(source._sequence as Partial<fhir.FhirPositiveIntArgs>); }
    }
    if (source['information']) { this.information = new fhir.Reference(source.information); }
    else { this.information = null; }
    if (source['appliesToAll']) { this.appliesToAll = new fhir.FhirBoolean({value: source.appliesToAll}); }
    if (source['_appliesToAll']) {
      if (this.appliesToAll) { this.appliesToAll.addExtendedProperties(source._appliesToAll!); }
      else { this.appliesToAll = new fhir.FhirBoolean(source._appliesToAll as Partial<fhir.FhirBooleanArgs>); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    if (!this['sequence']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property sequence:fhir.FhirPositiveInt fhir: CoverageEligibilityRequest.supportingInfo.sequence:positiveInt' });
    }
    if (this["sequence"]) { issues.push(...this.sequence.doModelValidation()); }
    if (!this['information']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property information:fhir.Reference fhir: CoverageEligibilityRequest.supportingInfo.information:Reference' });
    }
    if (this["information"]) { issues.push(...this.information.doModelValidation()); }
    if (this["appliesToAll"]) { issues.push(...this.appliesToAll.doModelValidation()); }
    return issues;
  }
}
/**
 * Valid arguments for the CoverageEligibilityRequestInsurance type.
 */
export interface CoverageEligibilityRequestInsuranceArgs extends fhir.BackboneElementArgs {
  /**
   * A patient may (will) have multiple insurance policies which provide reimburement for healthcare services and products. For example a person may also be covered by their spouse's policy and both appear in the list (and may be from the same insurer). This flag will be set to true for only one of the listed policies and that policy will be used for evaluating this request. Other requests would be created to request evaluation against the other listed policies.
   */
  focal?: fhir.FhirBoolean|boolean|undefined;
  /**
   * Extended properties for primitive element: CoverageEligibilityRequest.insurance.focal
   */
  _focal?:fhir.FhirElementArgs;
  /**
   * Reference to the insurance card level information contained in the Coverage resource. The coverage issuing insurer will use these details to locate the patient's actual coverage within the insurer's information system.
   */
  coverage: fhir.ReferenceArgs|null;
  /**
   * A business agreement number established between the provider and the insurer for special business processing purposes.
   */
  businessArrangement?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: CoverageEligibilityRequest.insurance.businessArrangement
   */
  _businessArrangement?:fhir.FhirElementArgs;
}

/**
 * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
 */
export class CoverageEligibilityRequestInsurance extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'CoverageEligibilityRequestInsurance';
  /**
   * A patient may (will) have multiple insurance policies which provide reimburement for healthcare services and products. For example a person may also be covered by their spouse's policy and both appear in the list (and may be from the same insurer). This flag will be set to true for only one of the listed policies and that policy will be used for evaluating this request. Other requests would be created to request evaluation against the other listed policies.
   */
  public focal?: fhir.FhirBoolean|undefined;
  /**
   * Reference to the insurance card level information contained in the Coverage resource. The coverage issuing insurer will use these details to locate the patient's actual coverage within the insurer's information system.
   */
  public coverage: fhir.Reference|null;
  /**
   * A business agreement number established between the provider and the insurer for special business processing purposes.
   */
  public businessArrangement?: fhir.FhirString|undefined;
  /**
   * Default constructor for CoverageEligibilityRequestInsurance - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<CoverageEligibilityRequestInsuranceArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['focal']) { this.focal = new fhir.FhirBoolean({value: source.focal}); }
    if (source['_focal']) {
      if (this.focal) { this.focal.addExtendedProperties(source._focal!); }
      else { this.focal = new fhir.FhirBoolean(source._focal as Partial<fhir.FhirBooleanArgs>); }
    }
    if (source['coverage']) { this.coverage = new fhir.Reference(source.coverage); }
    else { this.coverage = null; }
    if (source['businessArrangement']) { this.businessArrangement = new fhir.FhirString({value: source.businessArrangement}); }
    if (source['_businessArrangement']) {
      if (this.businessArrangement) { this.businessArrangement.addExtendedProperties(source._businessArrangement!); }
      else { this.businessArrangement = new fhir.FhirString(source._businessArrangement as Partial<fhir.FhirStringArgs>); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    if (this["focal"]) { issues.push(...this.focal.doModelValidation()); }
    if (!this['coverage']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property coverage:fhir.Reference fhir: CoverageEligibilityRequest.insurance.coverage:Reference' });
    }
    if (this["coverage"]) { issues.push(...this.coverage.doModelValidation()); }
    if (this["businessArrangement"]) { issues.push(...this.businessArrangement.doModelValidation()); }
    return issues;
  }
}
/**
 * Valid arguments for the CoverageEligibilityRequestItemDiagnosis type.
 */
export interface CoverageEligibilityRequestItemDiagnosisArgs extends fhir.BackboneElementArgs {
  /**
   * The nature of illness or problem in a coded form or as a reference to an external defined Condition.
   */
  diagnosis?: fhir.CodeableConcept|fhir.Reference|undefined;
  /**
   * The nature of illness or problem in a coded form or as a reference to an external defined Condition.
   */
  diagnosisCodeableConcept?: fhir.CodeableConceptArgs|undefined;
  /**
   * The nature of illness or problem in a coded form or as a reference to an external defined Condition.
   */
  diagnosisReference?: fhir.ReferenceArgs|undefined;
}

/**
 * Patient diagnosis for which care is sought.
 */
export class CoverageEligibilityRequestItemDiagnosis extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'CoverageEligibilityRequestItemDiagnosis';
  /**
   * The nature of illness or problem in a coded form or as a reference to an external defined Condition.
   */
  public diagnosis?: (fhir.CodeableConcept|fhir.Reference)|undefined;
  /**
   * Internal flag to properly serialize choice-type element CoverageEligibilityRequest.item.diagnosis.diagnosis[x]
   */
  protected static readonly _fts_diagnosisIsChoice:true = true;
  /**
   * Default constructor for CoverageEligibilityRequestItemDiagnosis - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<CoverageEligibilityRequestItemDiagnosisArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['diagnosis']) { this.diagnosis = source.diagnosis; }
    else if (source['diagnosisCodeableConcept']) { this.diagnosis = new fhir.CodeableConcept(source.diagnosisCodeableConcept); }
    else if (source['diagnosisReference']) { this.diagnosis = new fhir.Reference(source.diagnosisReference); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    return issues;
  }
}
/**
 * Valid arguments for the CoverageEligibilityRequestItem type.
 */
export interface CoverageEligibilityRequestItemArgs extends fhir.BackboneElementArgs {
  /**
   * Exceptions, special conditions and supporting information applicable for this service or product line.
   */
  supportingInfoSequence?: fhir.FhirPositiveInt[]|number[]|undefined;
  /**
   * Extended properties for primitive element: CoverageEligibilityRequest.item.supportingInfoSequence
   */
  _supportingInfoSequence?:(fhir.FhirElementArgs|null)[];
  /**
   * Examples include Medical Care, Periodontics, Renal Dialysis, Vision Coverage.
   */
  category?: fhir.CodeableConceptArgs|undefined;
  /**
   * Code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI).
   */
  productOrService?: fhir.CodeableConceptArgs|undefined;
  /**
   * For example in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
   */
  modifier?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * The practitioner who is responsible for the product or service to be rendered to the patient.
   */
  provider?: fhir.ReferenceArgs|undefined;
  /**
   * The number of repetitions of a service or product.
   */
  quantity?: fhir.QuantityArgs|undefined;
  /**
   * The amount charged to the patient by the provider for a single unit.
   */
  unitPrice?: fhir.MoneyArgs|undefined;
  /**
   * Facility where the services will be provided.
   */
  facility?: fhir.ReferenceArgs|undefined;
  /**
   * Patient diagnosis for which care is sought.
   */
  diagnosis?: fhir.CoverageEligibilityRequestItemDiagnosisArgs[]|undefined;
  /**
   * The plan/proposal/order describing the proposed service in detail.
   */
  detail?: fhir.ReferenceArgs[]|undefined;
}

/**
 * Service categories or billable services for which benefit details and/or an authorization prior to service delivery may be required by the payor.
 */
export class CoverageEligibilityRequestItem extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'CoverageEligibilityRequestItem';
  /**
   * Exceptions, special conditions and supporting information applicable for this service or product line.
   */
  public supportingInfoSequence: fhir.FhirPositiveInt[];
  /**
   * Examples include Medical Care, Periodontics, Renal Dialysis, Vision Coverage.
   */
  public category?: fhir.CodeableConcept|undefined;
  /**
   * Code to indicate the Professional Service or Product supplied (e.g. CTP, HCPCS, USCLS, ICD10, NCPDP, DIN, RxNorm, ACHI, CCI).
   */
  public productOrService?: fhir.CodeableConcept|undefined;
  /**
   * For example in Oral whether the treatment is cosmetic or associated with TMJ, or for Medical whether the treatment was outside the clinic or out of office hours.
   */
  public modifier: fhir.CodeableConcept[];
  /**
   * The practitioner who is responsible for the product or service to be rendered to the patient.
   */
  public provider?: fhir.Reference|undefined;
  /**
   * The number of repetitions of a service or product.
   */
  public quantity?: fhir.Quantity|undefined;
  /**
   * The amount charged to the patient by the provider for a single unit.
   */
  public unitPrice?: fhir.Money|undefined;
  /**
   * Facility where the services will be provided.
   */
  public facility?: fhir.Reference|undefined;
  /**
   * Patient diagnosis for which care is sought.
   */
  public diagnosis: fhir.CoverageEligibilityRequestItemDiagnosis[];
  /**
   * The plan/proposal/order describing the proposed service in detail.
   */
  public detail: fhir.Reference[];
  /**
   * Default constructor for CoverageEligibilityRequestItem - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<CoverageEligibilityRequestItemArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['supportingInfoSequence']) { this.supportingInfoSequence = source.supportingInfoSequence.map((x) => new fhir.FhirPositiveInt({value: x})); }
    else { this.supportingInfoSequence = []; }
    if (source['_supportingInfoSequence']) {
      source._supportingInfoSequence.forEach((x,i) => {
        if (this.supportingInfoSequence.length >= i) { if (x) { this.supportingInfoSequence[i].addExtendedProperties(x); } }
        else { if (x) { this.supportingInfoSequence.push(new fhir.FhirPositiveInt(x as Partial<fhir.FhirPositiveIntArgs>)); } }
      });
    }
    if (source['category']) { this.category = new fhir.CodeableConcept(source.category); }
    if (source['productOrService']) { this.productOrService = new fhir.CodeableConcept(source.productOrService); }
    if (source['modifier']) { this.modifier = source.modifier.map((x) => new fhir.CodeableConcept(x)); }
    else { this.modifier = []; }
    if (source['provider']) { this.provider = new fhir.Reference(source.provider); }
    if (source['quantity']) { this.quantity = new fhir.Quantity(source.quantity); }
    if (source['unitPrice']) { this.unitPrice = new fhir.Money(source.unitPrice); }
    if (source['facility']) { this.facility = new fhir.Reference(source.facility); }
    if (source['diagnosis']) { this.diagnosis = source.diagnosis.map((x) => new fhir.CoverageEligibilityRequestItemDiagnosis(x)); }
    else { this.diagnosis = []; }
    if (source['detail']) { this.detail = source.detail.map((x) => new fhir.Reference(x)); }
    else { this.detail = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    if (this["supportingInfoSequence"]) { this.supportingInfoSequence.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["category"]) { issues.push(...this.category.doModelValidation()); }
    if (this["productOrService"]) { issues.push(...this.productOrService.doModelValidation()); }
    if (this["modifier"]) { this.modifier.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["provider"]) { issues.push(...this.provider.doModelValidation()); }
    if (this["quantity"]) { issues.push(...this.quantity.doModelValidation()); }
    if (this["unitPrice"]) { issues.push(...this.unitPrice.doModelValidation()); }
    if (this["facility"]) { issues.push(...this.facility.doModelValidation()); }
    if (this["diagnosis"]) { this.diagnosis.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["detail"]) { this.detail.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    return issues;
  }
}
/**
 * Valid arguments for the CoverageEligibilityRequest type.
 */
export interface CoverageEligibilityRequestArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "CoverageEligibilityRequest"|undefined;
  /**
   * A unique identifier assigned to this coverage eligiblity request.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status: fhir.FhirCode<FmStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: CoverageEligibilityRequest.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * When the requestor expects the processor to complete processing.
   */
  priority?: fhir.CodeableConceptArgs|undefined;
  /**
   * Code to specify whether requesting: prior authorization requirements for some service categories or billing codes; benefits for coverages specified or discovered; discovery and return of coverages for the patient; and/or validation that the specified coverage is in-force at the date/period specified or 'now' if not specified.
   */
  purpose: fhir.FhirCode<EligibilityrequestPurposeCodeType>[]|string[]|undefined;
  /**
   * Extended properties for primitive element: CoverageEligibilityRequest.purpose
   */
  _purpose?:(fhir.FhirElementArgs|null)[];
  /**
   * 1..1.
   */
  patient: fhir.ReferenceArgs|null;
  /**
   * The date or dates when the enclosed suite of services were performed or completed.
   */
  serviced?: fhir.FhirDate|fhir.Period|undefined;
  /**
   * The date or dates when the enclosed suite of services were performed or completed.
   */
  servicedDate?: fhir.FhirDate|string|undefined;
  /**
   * The date or dates when the enclosed suite of services were performed or completed.
   */
  servicedPeriod?: fhir.PeriodArgs|undefined;
  /**
   * The date when this resource was created.
   */
  created: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: CoverageEligibilityRequest.created
   */
  _created?:fhir.FhirElementArgs;
  /**
   * Person who created the request.
   */
  enterer?: fhir.ReferenceArgs|undefined;
  /**
   * Typically this field would be 1..1 where this party is responsible for the eligibility request but not necessarily professionally responsible for the provision of the individual products and services listed below.
   */
  provider?: fhir.ReferenceArgs|undefined;
  /**
   * The Insurer who issued the coverage in question and is the recipient of the request.
   */
  insurer: fhir.ReferenceArgs|null;
  /**
   * Facility where the services are intended to be provided.
   */
  facility?: fhir.ReferenceArgs|undefined;
  /**
   * Often there are multiple jurisdiction specific valuesets which are required.
   */
  supportingInfo?: fhir.CoverageEligibilityRequestSupportingInfoArgs[]|undefined;
  /**
   * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
   */
  insurance?: fhir.CoverageEligibilityRequestInsuranceArgs[]|undefined;
  /**
   * Service categories or billable services for which benefit details and/or an authorization prior to service delivery may be required by the payor.
   */
  item?: fhir.CoverageEligibilityRequestItemArgs[]|undefined;
}

/**
 * The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy.
 */
export class CoverageEligibilityRequest extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'CoverageEligibilityRequest';
  /**
   * Resource Type Name
   */
  public override resourceType: "CoverageEligibilityRequest";
  /**
   * A unique identifier assigned to this coverage eligiblity request.
   */
  public identifier: fhir.Identifier[];
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  public status: fhir.FhirCode<FmStatusCodeType>|null;
  /**
   * When the requestor expects the processor to complete processing.
   */
  public priority?: fhir.CodeableConcept|undefined;
  /**
   * Code to specify whether requesting: prior authorization requirements for some service categories or billing codes; benefits for coverages specified or discovered; discovery and return of coverages for the patient; and/or validation that the specified coverage is in-force at the date/period specified or 'now' if not specified.
   */
  public purpose: fhir.FhirCode<EligibilityrequestPurposeCodeType>[];
  /**
   * 1..1.
   */
  public patient: fhir.Reference|null;
  /**
   * The date or dates when the enclosed suite of services were performed or completed.
   */
  public serviced?: (fhir.FhirDate|fhir.Period)|undefined;
  /**
   * Internal flag to properly serialize choice-type element CoverageEligibilityRequest.serviced[x]
   */
  protected static readonly _fts_servicedIsChoice:true = true;
  /**
   * The date when this resource was created.
   */
  public created: fhir.FhirDateTime|null;
  /**
   * Person who created the request.
   */
  public enterer?: fhir.Reference|undefined;
  /**
   * Typically this field would be 1..1 where this party is responsible for the eligibility request but not necessarily professionally responsible for the provision of the individual products and services listed below.
   */
  public provider?: fhir.Reference|undefined;
  /**
   * The Insurer who issued the coverage in question and is the recipient of the request.
   */
  public insurer: fhir.Reference|null;
  /**
   * Facility where the services are intended to be provided.
   */
  public facility?: fhir.Reference|undefined;
  /**
   * Often there are multiple jurisdiction specific valuesets which are required.
   */
  public supportingInfo: fhir.CoverageEligibilityRequestSupportingInfo[];
  /**
   * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
   */
  public insurance: fhir.CoverageEligibilityRequestInsurance[];
  /**
   * Service categories or billable services for which benefit details and/or an authorization prior to service delivery may be required by the payor.
   */
  public item: fhir.CoverageEligibilityRequestItem[];
  /**
   * Default constructor for CoverageEligibilityRequest - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<CoverageEligibilityRequestArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'CoverageEligibilityRequest';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['status']) { this.status = new fhir.FhirCode<FmStatusCodeType>({value: source.status}); }
    else { this.status = null; }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<FmStatusCodeType>(source._status as Partial<fhir.FhirCode>); }
    }
    if (source['priority']) { this.priority = new fhir.CodeableConcept(source.priority); }
    if (source['purpose']) { this.purpose = source.purpose.map((x) => new fhir.FhirCode<EligibilityrequestPurposeCodeType>({value: x})); }
    else { this.purpose = []; }
    if (source['_purpose']) {
      source._purpose.forEach((x,i) => {
        if (this.purpose.length >= i) { if (x) { this.purpose[i].addExtendedProperties(x); } }
        else { if (x) { this.purpose.push(new fhir.FhirCode<EligibilityrequestPurposeCodeType>(x as Partial<fhir.FhirCode>)); } }
      });
    }
    if (source['patient']) { this.patient = new fhir.Reference(source.patient); }
    else { this.patient = null; }
    if (source['serviced']) { this.serviced = source.serviced; }
    else if (source['servicedDate']) { this.serviced = new fhir.FhirDate({value: source.servicedDate}); }
    else if (source['servicedPeriod']) { this.serviced = new fhir.Period(source.servicedPeriod); }
    if (source['created']) { this.created = new fhir.FhirDateTime({value: source.created}); }
    else { this.created = null; }
    if (source['_created']) {
      if (this.created) { this.created.addExtendedProperties(source._created!); }
      else { this.created = new fhir.FhirDateTime(source._created as Partial<fhir.FhirDateTimeArgs>); }
    }
    if (source['enterer']) { this.enterer = new fhir.Reference(source.enterer); }
    if (source['provider']) { this.provider = new fhir.Reference(source.provider); }
    if (source['insurer']) { this.insurer = new fhir.Reference(source.insurer); }
    else { this.insurer = null; }
    if (source['facility']) { this.facility = new fhir.Reference(source.facility); }
    if (source['supportingInfo']) { this.supportingInfo = source.supportingInfo.map((x) => new fhir.CoverageEligibilityRequestSupportingInfo(x)); }
    else { this.supportingInfo = []; }
    if (source['insurance']) { this.insurance = source.insurance.map((x) => new fhir.CoverageEligibilityRequestInsurance(x)); }
    else { this.insurance = []; }
    if (source['item']) { this.item = source.item.map((x) => new fhir.CoverageEligibilityRequestItem(x)); }
    else { this.item = []; }
  }
  /**
   * Required-bound Value Set for status (CoverageEligibilityRequest.status)
   */
  public static get statusRequiredCodes() {
    return FmStatusCodes;
  }
  /**
   * Required-bound Value Set for purpose (CoverageEligibilityRequest.purpose)
   */
  public static get purposeRequiredCodes() {
    return EligibilityrequestPurposeCodes;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    if (!this['resourceType']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property resourceType:"CoverageEligibilityRequest" fhir: CoverageEligibilityRequest.resourceType:"CoverageEligibilityRequest"' });
    }
    if (this["identifier"]) { this.identifier.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (!this['status']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property status:fhir.FhirCode<FmStatusCodeType> fhir: CoverageEligibilityRequest.status:code' });
    }
    if (this['status'] && (!Object.values(FmStatusCodes).includes(this.status as any))) {
      issues.push({ severity: 'error', code: 'code-invalid', diagnostics: 'Invalid code property status:fhir.FhirCode<FmStatusCodeType> fhir: CoverageEligibilityRequest.status:code Required binding to: FmStatus' });
    }
    if (this["status"]) { issues.push(...this.status.doModelValidation()); }
    if (this["priority"]) { issues.push(...this.priority.doModelValidation()); }
    if (!this['purpose']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property purpose:fhir.FhirCode<EligibilityrequestPurposeCodeType>[] fhir: CoverageEligibilityRequest.purpose:code' });
    } else if (!Array.isArray(this.purpose)) {
      issues.push({ severity: 'error', code: 'structure', diagnostics: 'Found scalar in array property purpose:fhir.FhirCode<EligibilityrequestPurposeCodeType>[] fhir: CoverageEligibilityRequest.purpose:code' });
    } else if (this.purpose.length === 0) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property purpose:fhir.FhirCode<EligibilityrequestPurposeCodeType>[] fhir: CoverageEligibilityRequest.purpose:code' });
    }
    if (this['purpose']) {
      this.purpose.forEach((v) => {
        if (!Object.values(EligibilityrequestPurposeCodes).includes(v as any)) {
          issues.push({ severity: 'error', code: 'code-invalid', diagnostics: 'Invalid code property purpose:fhir.FhirCode<EligibilityrequestPurposeCodeType>[] fhir: CoverageEligibilityRequest.purpose:code Required binding to: EligibilityrequestPurpose' });
        }
      });
    }
    if (this["purpose"]) { this.purpose.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (!this['patient']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property patient:fhir.Reference fhir: CoverageEligibilityRequest.patient:Reference' });
    }
    if (this["patient"]) { issues.push(...this.patient.doModelValidation()); }
    if (!this['created']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property created:fhir.FhirDateTime fhir: CoverageEligibilityRequest.created:dateTime' });
    }
    if (this["created"]) { issues.push(...this.created.doModelValidation()); }
    if (this["enterer"]) { issues.push(...this.enterer.doModelValidation()); }
    if (this["provider"]) { issues.push(...this.provider.doModelValidation()); }
    if (!this['insurer']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property insurer:fhir.Reference fhir: CoverageEligibilityRequest.insurer:Reference' });
    }
    if (this["insurer"]) { issues.push(...this.insurer.doModelValidation()); }
    if (this["facility"]) { issues.push(...this.facility.doModelValidation()); }
    if (this["supportingInfo"]) { this.supportingInfo.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["insurance"]) { this.insurance.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["item"]) { this.item.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    return issues;
  }
}
