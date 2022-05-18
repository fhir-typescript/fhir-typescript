// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: CoverageEligibilityResponse

import * as fhir from '../fhir.js';

// @ts-ignore
import { BenefitTypeCodings, BenefitTypeCodingType,} from '../fhirValueSets/BenefitTypeCodings.js';
// @ts-ignore
import { BenefitTypeCodes,  BenefitTypeCodeType } from '../fhirValueSets/BenefitTypeCodes.js';
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
import { BenefitNetworkCodings, BenefitNetworkCodingType,} from '../fhirValueSets/BenefitNetworkCodings.js';
// @ts-ignore
import { BenefitNetworkCodes,  BenefitNetworkCodeType } from '../fhirValueSets/BenefitNetworkCodes.js';
// @ts-ignore
import { BenefitUnitCodings, BenefitUnitCodingType,} from '../fhirValueSets/BenefitUnitCodings.js';
// @ts-ignore
import { BenefitUnitCodes,  BenefitUnitCodeType } from '../fhirValueSets/BenefitUnitCodes.js';
// @ts-ignore
import { BenefitTermCodings, BenefitTermCodingType,} from '../fhirValueSets/BenefitTermCodings.js';
// @ts-ignore
import { BenefitTermCodes,  BenefitTermCodeType } from '../fhirValueSets/BenefitTermCodes.js';
// @ts-ignore
import { CoverageeligibilityresponseExAuthSupportCodings, CoverageeligibilityresponseExAuthSupportCodingType,} from '../fhirValueSets/CoverageeligibilityresponseExAuthSupportCodings.js';
// @ts-ignore
import { CoverageeligibilityresponseExAuthSupportCodes,  CoverageeligibilityresponseExAuthSupportCodeType } from '../fhirValueSets/CoverageeligibilityresponseExAuthSupportCodes.js';
// @ts-ignore
import { AdjudicationErrorCodings, AdjudicationErrorCodingType,} from '../fhirValueSets/AdjudicationErrorCodings.js';
// @ts-ignore
import { AdjudicationErrorCodes,  AdjudicationErrorCodeType } from '../fhirValueSets/AdjudicationErrorCodes.js';
// @ts-ignore
import { FmStatusCodings, FmStatusCodingType,} from '../fhirValueSets/FmStatusCodings.js';
// @ts-ignore
import { FmStatusCodes,  FmStatusCodeType } from '../fhirValueSets/FmStatusCodes.js';
// @ts-ignore
import { EligibilityresponsePurposeCodings, EligibilityresponsePurposeCodingType,} from '../fhirValueSets/EligibilityresponsePurposeCodings.js';
// @ts-ignore
import { EligibilityresponsePurposeCodes,  EligibilityresponsePurposeCodeType } from '../fhirValueSets/EligibilityresponsePurposeCodes.js';
// @ts-ignore
import { RemittanceOutcomeCodings, RemittanceOutcomeCodingType,} from '../fhirValueSets/RemittanceOutcomeCodings.js';
// @ts-ignore
import { RemittanceOutcomeCodes,  RemittanceOutcomeCodeType } from '../fhirValueSets/RemittanceOutcomeCodes.js';
// @ts-ignore
import { FormsCodings, FormsCodingType,} from '../fhirValueSets/FormsCodings.js';
// @ts-ignore
import { FormsCodes,  FormsCodeType } from '../fhirValueSets/FormsCodes.js';
// @ts-ignore
import { IssueTypeCodes } from '../fhirValueSets/IssueTypeCodes.js';
// @ts-ignore
import { IssueSeverityCodes } from '../fhirValueSets/IssueSeverityCodes.js';
/**
 * Valid arguments for the CoverageEligibilityResponseInsuranceItemBenefit type.
 */
export interface CoverageEligibilityResponseInsuranceItemBenefitArgs extends fhir.BackboneElementArgs {
  /**
   * For example: deductible, visits, benefit amount.
   */
  type: fhir.CodeableConceptArgs|null;
  /**
   * The quantity of the benefit which is permitted under the coverage.
   */
  allowed?: fhir.FhirUnsignedInt|fhir.FhirString|fhir.Money|undefined;
  /**
   * The quantity of the benefit which is permitted under the coverage.
   */
  allowedUnsignedInt?: fhir.FhirUnsignedInt|number|undefined;
  /**
   * The quantity of the benefit which is permitted under the coverage.
   */
  allowedString?: fhir.FhirString|string|undefined;
  /**
   * The quantity of the benefit which is permitted under the coverage.
   */
  allowedMoney?: fhir.MoneyArgs|undefined;
  /**
   * The quantity of the benefit which have been consumed to date.
   */
  used?: fhir.FhirUnsignedInt|fhir.FhirString|fhir.Money|undefined;
  /**
   * The quantity of the benefit which have been consumed to date.
   */
  usedUnsignedInt?: fhir.FhirUnsignedInt|number|undefined;
  /**
   * The quantity of the benefit which have been consumed to date.
   */
  usedString?: fhir.FhirString|string|undefined;
  /**
   * The quantity of the benefit which have been consumed to date.
   */
  usedMoney?: fhir.MoneyArgs|undefined;
}

/**
 * Benefits used to date.
 */
export class CoverageEligibilityResponseInsuranceItemBenefit extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static readonly _fts_dataType:string = 'CoverageEligibilityResponseInsuranceItemBenefit';
  /**
   * For example: deductible, visits, benefit amount.
   */
  public type: fhir.CodeableConcept|null;
  /**
   * The quantity of the benefit which is permitted under the coverage.
   */
  public allowed?: (fhir.FhirUnsignedInt|fhir.FhirString|fhir.Money)|undefined;
  /**
   * Internal flag to properly serialize choice-type element CoverageEligibilityResponse.insurance.item.benefit.allowed[x]
   */
  protected static readonly _fts_allowedIsChoice:true = true;
  /**
   * The quantity of the benefit which have been consumed to date.
   */
  public used?: (fhir.FhirUnsignedInt|fhir.FhirString|fhir.Money)|undefined;
  /**
   * Internal flag to properly serialize choice-type element CoverageEligibilityResponse.insurance.item.benefit.used[x]
   */
  protected static readonly _fts_usedIsChoice:true = true;
  /**
   * Default constructor for CoverageEligibilityResponseInsuranceItemBenefit - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<CoverageEligibilityResponseInsuranceItemBenefitArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type); }
    else { this.type = null; }
    if (source['allowed']) { this.allowed = source.allowed; }
    else if (source['allowedUnsignedInt']) { this.allowed = new fhir.FhirUnsignedInt({value: source.allowedUnsignedInt}); }
    else if (source['allowedString']) { this.allowed = new fhir.FhirString({value: source.allowedString}); }
    else if (source['allowedMoney']) { this.allowed = new fhir.Money(source.allowedMoney); }
    if (source['used']) { this.used = source.used; }
    else if (source['usedUnsignedInt']) { this.used = new fhir.FhirUnsignedInt({value: source.usedUnsignedInt}); }
    else if (source['usedString']) { this.used = new fhir.FhirString({value: source.usedString}); }
    else if (source['usedMoney']) { this.used = new fhir.Money(source.usedMoney); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (!this['type']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property type:fhir.CodeableConcept fhir: CoverageEligibilityResponse.insurance.item.benefit.type:CodeableConcept', }));
    }
    if (this["type"]) { outcome.issue!.push(...this.type.doModelValidation().issue!); }
    return outcome;
  }
}
/**
 * Valid arguments for the CoverageEligibilityResponseInsuranceItem type.
 */
export interface CoverageEligibilityResponseInsuranceItemArgs extends fhir.BackboneElementArgs {
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
   * The practitioner who is eligible for the provision of the product or service.
   */
  provider?: fhir.ReferenceArgs|undefined;
  /**
   * True if the indicated class of service is excluded from the plan, missing or False indicates the product or service is included in the coverage.
   */
  excluded?: fhir.FhirBoolean|boolean|undefined;
  /**
   * For example: MED01, or DENT2.
   */
  name?: fhir.FhirString|string|undefined;
  /**
   * For example 'DENT2 covers 100% of basic, 50% of major but excludes Ortho, Implants and Cosmetic services'.
   */
  description?: fhir.FhirString|string|undefined;
  /**
   * Is a flag to indicate whether the benefits refer to in-network providers or out-of-network providers.
   */
  network?: fhir.CodeableConceptArgs|undefined;
  /**
   * Indicates if the benefits apply to an individual or to the family.
   */
  unit?: fhir.CodeableConceptArgs|undefined;
  /**
   * The term or period of the values such as 'maximum lifetime benefit' or 'maximum annual visits'.
   */
  term?: fhir.CodeableConceptArgs|undefined;
  /**
   * Benefits used to date.
   */
  benefit?: fhir.CoverageEligibilityResponseInsuranceItemBenefitArgs[]|undefined;
  /**
   * A boolean flag indicating whether a preauthorization is required prior to actual service delivery.
   */
  authorizationRequired?: fhir.FhirBoolean|boolean|undefined;
  /**
   * Codes or comments regarding information or actions associated with the preauthorization.
   */
  authorizationSupporting?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * A web location for obtaining requirements or descriptive information regarding the preauthorization.
   */
  authorizationUrl?: fhir.FhirUri|string|undefined;
}

/**
 * Benefits and optionally current balances, and authorization details by category or service.
 */
export class CoverageEligibilityResponseInsuranceItem extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static readonly _fts_dataType:string = 'CoverageEligibilityResponseInsuranceItem';
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
  public modifier?: fhir.CodeableConcept[];
  /**
   * The practitioner who is eligible for the provision of the product or service.
   */
  public provider?: fhir.Reference|undefined;
  /**
   * True if the indicated class of service is excluded from the plan, missing or False indicates the product or service is included in the coverage.
   */
  public excluded?: fhir.FhirBoolean|undefined;
  /**
   * For example: MED01, or DENT2.
   */
  public name?: fhir.FhirString|undefined;
  /**
   * For example 'DENT2 covers 100% of basic, 50% of major but excludes Ortho, Implants and Cosmetic services'.
   */
  public description?: fhir.FhirString|undefined;
  /**
   * Is a flag to indicate whether the benefits refer to in-network providers or out-of-network providers.
   */
  public network?: fhir.CodeableConcept|undefined;
  /**
   * Indicates if the benefits apply to an individual or to the family.
   */
  public unit?: fhir.CodeableConcept|undefined;
  /**
   * The term or period of the values such as 'maximum lifetime benefit' or 'maximum annual visits'.
   */
  public term?: fhir.CodeableConcept|undefined;
  /**
   * Benefits used to date.
   */
  public benefit?: fhir.CoverageEligibilityResponseInsuranceItemBenefit[];
  /**
   * A boolean flag indicating whether a preauthorization is required prior to actual service delivery.
   */
  public authorizationRequired?: fhir.FhirBoolean|undefined;
  /**
   * Codes or comments regarding information or actions associated with the preauthorization.
   */
  public authorizationSupporting?: fhir.CodeableConcept[];
  /**
   * A web location for obtaining requirements or descriptive information regarding the preauthorization.
   */
  public authorizationUrl?: fhir.FhirUri|undefined;
  /**
   * Default constructor for CoverageEligibilityResponseInsuranceItem - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<CoverageEligibilityResponseInsuranceItemArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['category']) { this.category = new fhir.CodeableConcept(source.category); }
    if (source['productOrService']) { this.productOrService = new fhir.CodeableConcept(source.productOrService); }
    if (source['modifier']) { this.modifier = source.modifier.map((x) => new fhir.CodeableConcept(x)); }
    else { this.modifier = []; }
    if (source['provider']) { this.provider = new fhir.Reference(source.provider); }
    if (source['excluded']) { this.excluded = new fhir.FhirBoolean({value: source.excluded}); }
    if (source['name']) { this.name = new fhir.FhirString({value: source.name}); }
    if (source['description']) { this.description = new fhir.FhirString({value: source.description}); }
    if (source['network']) { this.network = new fhir.CodeableConcept(source.network); }
    if (source['unit']) { this.unit = new fhir.CodeableConcept(source.unit); }
    if (source['term']) { this.term = new fhir.CodeableConcept(source.term); }
    if (source['benefit']) { this.benefit = source.benefit.map((x) => new fhir.CoverageEligibilityResponseInsuranceItemBenefit(x)); }
    else { this.benefit = []; }
    if (source['authorizationRequired']) { this.authorizationRequired = new fhir.FhirBoolean({value: source.authorizationRequired}); }
    if (source['authorizationSupporting']) { this.authorizationSupporting = source.authorizationSupporting.map((x) => new fhir.CodeableConcept(x)); }
    else { this.authorizationSupporting = []; }
    if (source['authorizationUrl']) { this.authorizationUrl = new fhir.FhirUri({value: source.authorizationUrl}); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (this["category"]) { outcome.issue!.push(...this.category.doModelValidation().issue!); }
    if (this["productOrService"]) { outcome.issue!.push(...this.productOrService.doModelValidation().issue!); }
    if (this["modifier"]) { this.modifier.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["provider"]) { outcome.issue!.push(...this.provider.doModelValidation().issue!); }
    if (this["excluded"]) { outcome.issue!.push(...this.excluded.doModelValidation().issue!); }
    if (this["name"]) { outcome.issue!.push(...this.name.doModelValidation().issue!); }
    if (this["description"]) { outcome.issue!.push(...this.description.doModelValidation().issue!); }
    if (this["network"]) { outcome.issue!.push(...this.network.doModelValidation().issue!); }
    if (this["unit"]) { outcome.issue!.push(...this.unit.doModelValidation().issue!); }
    if (this["term"]) { outcome.issue!.push(...this.term.doModelValidation().issue!); }
    if (this["benefit"]) { this.benefit.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["authorizationRequired"]) { outcome.issue!.push(...this.authorizationRequired.doModelValidation().issue!); }
    if (this["authorizationSupporting"]) { this.authorizationSupporting.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["authorizationUrl"]) { outcome.issue!.push(...this.authorizationUrl.doModelValidation().issue!); }
    return outcome;
  }
}
/**
 * Valid arguments for the CoverageEligibilityResponseInsurance type.
 */
export interface CoverageEligibilityResponseInsuranceArgs extends fhir.BackboneElementArgs {
  /**
   * Reference to the insurance card level information contained in the Coverage resource. The coverage issuing insurer will use these details to locate the patient's actual coverage within the insurer's information system.
   */
  coverage: fhir.ReferenceArgs|null;
  /**
   * Flag indicating if the coverage provided is inforce currently if no service date(s) specified or for the whole duration of the service dates.
   */
  inforce?: fhir.FhirBoolean|boolean|undefined;
  /**
   * The term of the benefits documented in this response.
   */
  benefitPeriod?: fhir.PeriodArgs|undefined;
  /**
   * Benefits and optionally current balances, and authorization details by category or service.
   */
  item?: fhir.CoverageEligibilityResponseInsuranceItemArgs[]|undefined;
}

/**
 * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
 */
export class CoverageEligibilityResponseInsurance extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static readonly _fts_dataType:string = 'CoverageEligibilityResponseInsurance';
  /**
   * Reference to the insurance card level information contained in the Coverage resource. The coverage issuing insurer will use these details to locate the patient's actual coverage within the insurer's information system.
   */
  public coverage: fhir.Reference|null;
  /**
   * Flag indicating if the coverage provided is inforce currently if no service date(s) specified or for the whole duration of the service dates.
   */
  public inforce?: fhir.FhirBoolean|undefined;
  /**
   * The term of the benefits documented in this response.
   */
  public benefitPeriod?: fhir.Period|undefined;
  /**
   * Benefits and optionally current balances, and authorization details by category or service.
   */
  public item?: fhir.CoverageEligibilityResponseInsuranceItem[];
  /**
   * Default constructor for CoverageEligibilityResponseInsurance - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<CoverageEligibilityResponseInsuranceArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['coverage']) { this.coverage = new fhir.Reference(source.coverage); }
    else { this.coverage = null; }
    if (source['inforce']) { this.inforce = new fhir.FhirBoolean({value: source.inforce}); }
    if (source['benefitPeriod']) { this.benefitPeriod = new fhir.Period(source.benefitPeriod); }
    if (source['item']) { this.item = source.item.map((x) => new fhir.CoverageEligibilityResponseInsuranceItem(x)); }
    else { this.item = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (!this['coverage']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property coverage:fhir.Reference fhir: CoverageEligibilityResponse.insurance.coverage:Reference', }));
    }
    if (this["coverage"]) { outcome.issue!.push(...this.coverage.doModelValidation().issue!); }
    if (this["inforce"]) { outcome.issue!.push(...this.inforce.doModelValidation().issue!); }
    if (this["benefitPeriod"]) { outcome.issue!.push(...this.benefitPeriod.doModelValidation().issue!); }
    if (this["item"]) { this.item.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    return outcome;
  }
}
/**
 * Valid arguments for the CoverageEligibilityResponseError type.
 */
export interface CoverageEligibilityResponseErrorArgs extends fhir.BackboneElementArgs {
  /**
   * An error code,from a specified code system, which details why the eligibility check could not be performed.
   */
  code: fhir.CodeableConceptArgs|null;
}

/**
 * Errors encountered during the processing of the request.
 */
export class CoverageEligibilityResponseError extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static readonly _fts_dataType:string = 'CoverageEligibilityResponseError';
  /**
   * An error code,from a specified code system, which details why the eligibility check could not be performed.
   */
  public code: fhir.CodeableConcept|null;
  /**
   * Default constructor for CoverageEligibilityResponseError - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<CoverageEligibilityResponseErrorArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['code']) { this.code = new fhir.CodeableConcept(source.code); }
    else { this.code = null; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (!this['code']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property code:fhir.CodeableConcept fhir: CoverageEligibilityResponse.error.code:CodeableConcept', }));
    }
    if (this["code"]) { outcome.issue!.push(...this.code.doModelValidation().issue!); }
    return outcome;
  }
}
/**
 * Valid arguments for the CoverageEligibilityResponse type.
 */
export interface CoverageEligibilityResponseArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "CoverageEligibilityResponse"|undefined;
  /**
   * A unique identifier assigned to this coverage eligiblity request.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status: FmStatusCodeType|null;
  /**
   * Code to specify whether requesting: prior authorization requirements for some service categories or billing codes; benefits for coverages specified or discovered; discovery and return of coverages for the patient; and/or validation that the specified coverage is in-force at the date/period specified or 'now' if not specified.
   */
  purpose: EligibilityresponsePurposeCodeType[]|null;
  /**
   * The party who is the beneficiary of the supplied coverage and for whom eligibility is sought.
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
   * The date this resource was created.
   */
  created: fhir.FhirDateTime|string|undefined;
  /**
   * Typically this field would be 1..1 where this party is responsible for the claim but not necessarily professionally responsible for the provision of the individual products and services listed below.
   */
  requestor?: fhir.ReferenceArgs|undefined;
  /**
   * Reference to the original request resource.
   */
  request: fhir.ReferenceArgs|null;
  /**
   * The resource may be used to indicate that: the request has been held (queued) for processing; that it has been processed and errors found (error); that no errors were found and that some of the adjudication has been undertaken (partial) or that all of the adjudication has been undertaken (complete).
   */
  outcome: RemittanceOutcomeCodeType|null;
  /**
   * A human readable description of the status of the adjudication.
   */
  disposition?: fhir.FhirString|string|undefined;
  /**
   * The Insurer who issued the coverage in question and is the author of the response.
   */
  insurer: fhir.ReferenceArgs|null;
  /**
   * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
   */
  insurance?: fhir.CoverageEligibilityResponseInsuranceArgs[]|undefined;
  /**
   * A reference from the Insurer to which these services pertain to be used on further communication and as proof that the request occurred.
   */
  preAuthRef?: fhir.FhirString|string|undefined;
  /**
   * May be needed to identify specific jurisdictional forms.
   */
  form?: fhir.CodeableConceptArgs|undefined;
  /**
   * Errors encountered during the processing of the request.
   */
  error?: fhir.CoverageEligibilityResponseErrorArgs[]|undefined;
}

/**
 * This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource.
 */
export class CoverageEligibilityResponse extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static readonly _fts_dataType:string = 'CoverageEligibilityResponse';
  /**
   * Resource Type Name
   */
  public resourceType: "CoverageEligibilityResponse";
  /**
   * A unique identifier assigned to this coverage eligiblity request.
   */
  public identifier?: fhir.Identifier[];
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  public status: FmStatusCodeType|null;
  /**
   * Code to specify whether requesting: prior authorization requirements for some service categories or billing codes; benefits for coverages specified or discovered; discovery and return of coverages for the patient; and/or validation that the specified coverage is in-force at the date/period specified or 'now' if not specified.
   */
  public purpose: EligibilityresponsePurposeCodeType[];
  /**
   * The party who is the beneficiary of the supplied coverage and for whom eligibility is sought.
   */
  public patient: fhir.Reference|null;
  /**
   * The date or dates when the enclosed suite of services were performed or completed.
   */
  public serviced?: (fhir.FhirDate|fhir.Period)|undefined;
  /**
   * Internal flag to properly serialize choice-type element CoverageEligibilityResponse.serviced[x]
   */
  protected static readonly _fts_servicedIsChoice:true = true;
  /**
   * The date this resource was created.
   */
  public created: fhir.FhirDateTime|null;
  /**
   * Typically this field would be 1..1 where this party is responsible for the claim but not necessarily professionally responsible for the provision of the individual products and services listed below.
   */
  public requestor?: fhir.Reference|undefined;
  /**
   * Reference to the original request resource.
   */
  public request: fhir.Reference|null;
  /**
   * The resource may be used to indicate that: the request has been held (queued) for processing; that it has been processed and errors found (error); that no errors were found and that some of the adjudication has been undertaken (partial) or that all of the adjudication has been undertaken (complete).
   */
  public outcome: RemittanceOutcomeCodeType|null;
  /**
   * A human readable description of the status of the adjudication.
   */
  public disposition?: fhir.FhirString|undefined;
  /**
   * The Insurer who issued the coverage in question and is the author of the response.
   */
  public insurer: fhir.Reference|null;
  /**
   * All insurance coverages for the patient which may be applicable for reimbursement, of the products and services listed in the claim, are typically provided in the claim to allow insurers to confirm the ordering of the insurance coverages relative to local 'coordination of benefit' rules. One coverage (and only one) with 'focal=true' is to be used in the adjudication of this claim. Coverages appearing before the focal Coverage in the list, and where 'subrogation=false', should provide a reference to the ClaimResponse containing the adjudication results of the prior claim.
   */
  public insurance?: fhir.CoverageEligibilityResponseInsurance[];
  /**
   * A reference from the Insurer to which these services pertain to be used on further communication and as proof that the request occurred.
   */
  public preAuthRef?: fhir.FhirString|undefined;
  /**
   * May be needed to identify specific jurisdictional forms.
   */
  public form?: fhir.CodeableConcept|undefined;
  /**
   * Errors encountered during the processing of the request.
   */
  public error?: fhir.CoverageEligibilityResponseError[];
  /**
   * Default constructor for CoverageEligibilityResponse - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<CoverageEligibilityResponseArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'CoverageEligibilityResponse';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['status']) { this.status = source.status; }
    else { this.status = null; }
    if (source['purpose']) { this.purpose = source.purpose.map((x) => x); }
    else { this.purpose = []; }
    if (source['patient']) { this.patient = new fhir.Reference(source.patient); }
    else { this.patient = null; }
    if (source['serviced']) { this.serviced = source.serviced; }
    else if (source['servicedDate']) { this.serviced = new fhir.FhirDate({value: source.servicedDate}); }
    else if (source['servicedPeriod']) { this.serviced = new fhir.Period(source.servicedPeriod); }
    if (source['created']) { this.created = new fhir.FhirDateTime({value: source.created}); }
    else { this.created = null; }
    if (source['requestor']) { this.requestor = new fhir.Reference(source.requestor); }
    if (source['request']) { this.request = new fhir.Reference(source.request); }
    else { this.request = null; }
    if (source['outcome']) { this.outcome = source.outcome; }
    else { this.outcome = null; }
    if (source['disposition']) { this.disposition = new fhir.FhirString({value: source.disposition}); }
    if (source['insurer']) { this.insurer = new fhir.Reference(source.insurer); }
    else { this.insurer = null; }
    if (source['insurance']) { this.insurance = source.insurance.map((x) => new fhir.CoverageEligibilityResponseInsurance(x)); }
    else { this.insurance = []; }
    if (source['preAuthRef']) { this.preAuthRef = new fhir.FhirString({value: source.preAuthRef}); }
    if (source['form']) { this.form = new fhir.CodeableConcept(source.form); }
    if (source['error']) { this.error = source.error.map((x) => new fhir.CoverageEligibilityResponseError(x)); }
    else { this.error = []; }
  }
  /**
   * Required-bound Value Set for status (CoverageEligibilityResponse.status)
   */
  public static statusRequiredCoding():FmStatusCodingType {
    return FmStatusCodings;
  }
  /**
   * Required-bound Value Set for purpose (CoverageEligibilityResponse.purpose)
   */
  public static purposeRequiredCoding():EligibilityresponsePurposeCodingType {
    return EligibilityresponsePurposeCodings;
  }
  /**
   * Required-bound Value Set for outcome (CoverageEligibilityResponse.outcome)
   */
  public static outcomeRequiredCoding():RemittanceOutcomeCodingType {
    return RemittanceOutcomeCodings;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (!this['resourceType']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property resourceType:"CoverageEligibilityResponse" fhir: CoverageEligibilityResponse.resourceType:"CoverageEligibilityResponse"', }));
    }
    if (this["identifier"]) { this.identifier.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (!this['status']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property status:FmStatusCodeType fhir: CoverageEligibilityResponse.status:code', }));
    }
    if (!this['purpose']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property purpose:EligibilityresponsePurposeCodeType[] fhir: CoverageEligibilityResponse.purpose:code', }));
    } else if (!Array.isArray(this.purpose)) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.StructuralIssue,  diagnostics: 'Found scalar in array property purpose:EligibilityresponsePurposeCodeType[] fhir: CoverageEligibilityResponse.purpose:code', }));
    } else if (this.purpose.length === 0) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property purpose:EligibilityresponsePurposeCodeType[] fhir: CoverageEligibilityResponse.purpose:code', }));
    }
    if (!this['patient']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property patient:fhir.Reference fhir: CoverageEligibilityResponse.patient:Reference', }));
    }
    if (this["patient"]) { outcome.issue!.push(...this.patient.doModelValidation().issue!); }
    if (!this['created']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property created:fhir.FhirDateTime fhir: CoverageEligibilityResponse.created:dateTime', }));
    }
    if (this["created"]) { outcome.issue!.push(...this.created.doModelValidation().issue!); }
    if (this["requestor"]) { outcome.issue!.push(...this.requestor.doModelValidation().issue!); }
    if (!this['request']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property request:fhir.Reference fhir: CoverageEligibilityResponse.request:Reference', }));
    }
    if (this["request"]) { outcome.issue!.push(...this.request.doModelValidation().issue!); }
    if (!this['outcome']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property outcome:RemittanceOutcomeCodeType fhir: CoverageEligibilityResponse.outcome:code', }));
    }
    if (this["disposition"]) { outcome.issue!.push(...this.disposition.doModelValidation().issue!); }
    if (!this['insurer']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property insurer:fhir.Reference fhir: CoverageEligibilityResponse.insurer:Reference', }));
    }
    if (this["insurer"]) { outcome.issue!.push(...this.insurer.doModelValidation().issue!); }
    if (this["insurance"]) { this.insurance.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["preAuthRef"]) { outcome.issue!.push(...this.preAuthRef.doModelValidation().issue!); }
    if (this["form"]) { outcome.issue!.push(...this.form.doModelValidation().issue!); }
    if (this["error"]) { this.error.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    return outcome;
  }
}