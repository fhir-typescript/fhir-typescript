// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: Flag

import * as fhir from '../fhir.js';

// @ts-ignore
import { FlagStatusCodings, FlagStatusCodingType,} from '../fhirValueSets/FlagStatusCodings.js';
// @ts-ignore
import { FlagStatusCodes,  FlagStatusCodeType } from '../fhirValueSets/FlagStatusCodes.js';
// @ts-ignore
import { FlagCategoryCodings, FlagCategoryCodingType,} from '../fhirValueSets/FlagCategoryCodings.js';
// @ts-ignore
import { FlagCategoryCodes,  FlagCategoryCodeType } from '../fhirValueSets/FlagCategoryCodes.js';
// @ts-ignore
import { FlagCodings, FlagCodingType,} from '../fhirValueSets/FlagCodings.js';
// @ts-ignore
import { FlagCodes,  FlagCodeType } from '../fhirValueSets/FlagCodes.js';
/**
 * Valid arguments for the Flag type.
 */
export interface FlagArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "Flag"|undefined;
  /**
   * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  status: fhir.FhirCode<FlagStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: Flag.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * The value set will often need to be adjusted based on local business rules and usage context.
   */
  category?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * If non-coded, use CodeableConcept.text.  This element should always be included in the narrative.
   */
  code: fhir.CodeableConceptArgs|null;
  /**
   * The patient, location, group, organization, or practitioner etc. this is about record this flag is associated with.
   */
  subject: fhir.ReferenceArgs|null;
  /**
   * The period of time from the activation of the flag to inactivation of the flag. If the flag is active, the end of the period should be unspecified.
   */
  period?: fhir.PeriodArgs|undefined;
  /**
   * If both Flag.encounter and Flag.period are valued, then Flag.period.start shall not be before Encounter.period.start and Flag.period.end shall not be after Encounter.period.end.
   */
  encounter?: fhir.ReferenceArgs|undefined;
  /**
   * The person, organization or device that created the flag.
   */
  author?: fhir.ReferenceArgs|undefined;
}

/**
 * Prospective warnings of potential issues when providing care to the patient.
 */
export class Flag extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'Flag';
  /**
   * Resource Type Name
   */
  public override resourceType: "Flag";
  /**
   * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
   */
  public identifier: fhir.Identifier[];
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  public status: fhir.FhirCode<FlagStatusCodeType>|null;
  /**
   * The value set will often need to be adjusted based on local business rules and usage context.
   */
  public category: fhir.CodeableConcept[];
  /**
   * If non-coded, use CodeableConcept.text.  This element should always be included in the narrative.
   */
  public code: fhir.CodeableConcept|null;
  /**
   * The patient, location, group, organization, or practitioner etc. this is about record this flag is associated with.
   */
  public subject: fhir.Reference|null;
  /**
   * The period of time from the activation of the flag to inactivation of the flag. If the flag is active, the end of the period should be unspecified.
   */
  public period?: fhir.Period|undefined;
  /**
   * If both Flag.encounter and Flag.period are valued, then Flag.period.start shall not be before Encounter.period.start and Flag.period.end shall not be after Encounter.period.end.
   */
  public encounter?: fhir.Reference|undefined;
  /**
   * The person, organization or device that created the flag.
   */
  public author?: fhir.Reference|undefined;
  /**
   * Default constructor for Flag - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<FlagArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'Flag';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['status']) { this.status = new fhir.FhirCode<FlagStatusCodeType>({value: source.status}); }
    else { this.status = null; }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<FlagStatusCodeType>(source._status as Partial<fhir.FhirCode>); }
    }
    if (source['category']) { this.category = source.category.map((x) => new fhir.CodeableConcept(x)); }
    else { this.category = []; }
    if (source['code']) { this.code = new fhir.CodeableConcept(source.code); }
    else { this.code = null; }
    if (source['subject']) { this.subject = new fhir.Reference(source.subject); }
    else { this.subject = null; }
    if (source['period']) { this.period = new fhir.Period(source.period); }
    if (source['encounter']) { this.encounter = new fhir.Reference(source.encounter); }
    if (source['author']) { this.author = new fhir.Reference(source.author); }
  }
  /**
   * Required-bound Value Set for status (Flag.status)
   */
  public static get statusRequiredCodes() {
    return FlagStatusCodes;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(expression:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(expression);
    if (expression === '') { expression = 'Flag' }
    if (!this['resourceType']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property resourceType fhir: Flag.resourceType:"Flag"', expression: [expression] });
    }
    if (this["identifier"]) { this.identifier.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.identifier[${i}]`)); }) }
    if (!this['status']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property status fhir: Flag.status:code', expression: [expression] });
    }
    if (this['status'] && (!Object.values(FlagStatusCodes).includes(this.status.value as any))) {
      issues.push({ severity: 'error', code: 'code-invalid', diagnostics: 'status (Flag.status) of type code is missing code for Required binding to: FlagStatus', expression: [expression] });
    }
    if (this["status"]) { issues.push(...this.status.doModelValidation(expression+'.status')); }
    if (this["category"]) { this.category.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.category[${i}]`)); }) }
    if (!this['code']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property code fhir: Flag.code:CodeableConcept', expression: [expression] });
    }
    if (this["code"]) { issues.push(...this.code.doModelValidation(expression+'.code')); }
    if (!this['subject']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property subject fhir: Flag.subject:Reference', expression: [expression] });
    }
    if (this["subject"]) { issues.push(...this.subject.doModelValidation(expression+'.subject')); }
    if (this["period"]) { issues.push(...this.period.doModelValidation(expression+'.period')); }
    if (this["encounter"]) { issues.push(...this.encounter.doModelValidation(expression+'.encounter')); }
    if (this["author"]) { issues.push(...this.author.doModelValidation(expression+'.author')); }
    return issues;
  }
}
