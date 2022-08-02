// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: Flag

import * as fhir from '../fhir.js';

// @ts-ignore
import { FlagStatusCodes,  FlagStatusCodeType } from '../fhirValueSets/FlagStatusCodes.js';
// @ts-ignore
import { FlagStatusVsValidation } from '../fhirValueSets/FlagStatusVsValidation.js';
// @ts-ignore
import { FlagCategoryCodes,  FlagCategoryCodeType } from '../fhirValueSets/FlagCategoryCodes.js';
// @ts-ignore
import { FlagCategoryVsValidation } from '../fhirValueSets/FlagCategoryVsValidation.js';
// @ts-ignore
import { FlagCodes,  FlagCodeType } from '../fhirValueSets/FlagCodes.js';
// @ts-ignore
import { FlagVsValidation } from '../fhirValueSets/FlagVsValidation.js';
/**
 * Valid arguments for the Flag type.
 */
export interface FlagArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "Flag"|undefined;
  /**
   * Identifier assigned to the flag for external use (outside the FHIR environment).
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
   * Allows an flag to be divided into different categories like clinical, administrative etc. Intended to be used as a means of filtering which flags are displayed to particular user or in a given context.
   */
  category?: fhir.CodeableConceptArgs|undefined;
  /**
   * If non coded, use CodeableConcept.text.  This element should always be included in the narrative.
   */
  code: fhir.CodeableConceptArgs|null;
  /**
   * The patient, location, group , organization , or practitioner, etc. this is about record this flag is associated with.
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
   * Identifier assigned to the flag for external use (outside the FHIR environment).
   */
  public identifier: fhir.Identifier[];
  /**
   * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
   */
  public status: fhir.FhirCode<FlagStatusCodeType>|null;
  /**
   * Allows an flag to be divided into different categories like clinical, administrative etc. Intended to be used as a means of filtering which flags are displayed to particular user or in a given context.
   */
  public category?: fhir.CodeableConcept|undefined;
  /**
   * If non coded, use CodeableConcept.text.  This element should always be included in the narrative.
   */
  public code: fhir.CodeableConcept|null;
  /**
   * The patient, location, group , organization , or practitioner, etc. this is about record this flag is associated with.
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
    if (source['category']) { this.category = new fhir.CodeableConcept(source.category); }
    if (source['code']) { this.code = new fhir.CodeableConcept(source.code); }
    else { this.code = null; }
    if (source['subject']) { this.subject = new fhir.Reference(source.subject); }
    else { this.subject = null; }
    if (source['period']) { this.period = new fhir.Period(source.period); }
    if (source['encounter']) { this.encounter = new fhir.Reference(source.encounter); }
    if (source['author']) { this.author = new fhir.Reference(source.author); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Flag' }
    iss.push(...this.vOA('identifier',exp));
    iss.push(...this.vRSV('status',exp,'FlagStatus',FlagStatusVsValidation,'r'));
    iss.push(...this.vOS('category',exp));
    iss.push(...this.vRS('code',exp));
    iss.push(...this.vRS('subject',exp));
    iss.push(...this.vOS('period',exp));
    iss.push(...this.vOS('encounter',exp));
    iss.push(...this.vOS('author',exp));
    return iss;
  }
}
