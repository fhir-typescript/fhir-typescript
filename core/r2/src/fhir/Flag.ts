// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: Flag

import * as fhir from '../fhir.js';

// @ts-ignore
import { FlagStatusCodes,  FlagStatusCodeType } from '../fhirValueSets/FlagStatusCodes.js';
// @ts-ignore
import { FlagStatusVsValidation } from '../fhirValueSets/FlagStatusVsValidation.js';
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
   * Allows an flag to be divided into different categories like clinical, administrative etc. Intended to be used as a means of filtering which flags are displayed to particular user or in a given context.
   */
  category?: fhir.CodeableConceptArgs|undefined;
  /**
   * Supports basic workflow.
   */
  status: fhir.FhirCode<FlagStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: Flag.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * The period of time from the activation of the flag to inactivation of the flag. If the flag is active, the end of the period should be unspecified.
   */
  period?: fhir.PeriodArgs|undefined;
  /**
   * The patient, location, group , organization , or practitioner this is about record this flag is associated with.
   */
  subject: fhir.ReferenceArgs|null;
  /**
   * This alert is only relevant during the encounter.
   */
  encounter?: fhir.ReferenceArgs|undefined;
  /**
   * The person, organization or device that created the flag.
   */
  author?: fhir.ReferenceArgs|undefined;
  /**
   * The coded value or textual component of the flag to display to the user.
   */
  code: fhir.CodeableConceptArgs|null;
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
   * Allows an flag to be divided into different categories like clinical, administrative etc. Intended to be used as a means of filtering which flags are displayed to particular user or in a given context.
   */
  public category?: fhir.CodeableConcept|undefined;
  /**
   * Supports basic workflow.
   */
  public status: fhir.FhirCode<FlagStatusCodeType>|null;
  /**
   * The period of time from the activation of the flag to inactivation of the flag. If the flag is active, the end of the period should be unspecified.
   */
  public period?: fhir.Period|undefined;
  /**
   * The patient, location, group , organization , or practitioner this is about record this flag is associated with.
   */
  public subject: fhir.Reference|null;
  /**
   * This alert is only relevant during the encounter.
   */
  public encounter?: fhir.Reference|undefined;
  /**
   * The person, organization or device that created the flag.
   */
  public author?: fhir.Reference|undefined;
  /**
   * The coded value or textual component of the flag to display to the user.
   */
  public code: fhir.CodeableConcept|null;
  /**
   * Default constructor for Flag - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<FlagArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'Flag';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['category']) { this.category = new fhir.CodeableConcept(source.category); }
    if (source['status']) { this.status = new fhir.FhirCode<FlagStatusCodeType>({value: source.status}); }
    else { this.status = null; }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<FlagStatusCodeType>(source._status as Partial<fhir.FhirCode>); }
    }
    if (source['period']) { this.period = new fhir.Period(source.period); }
    if (source['subject']) { this.subject = new fhir.Reference(source.subject); }
    else { this.subject = null; }
    if (source['encounter']) { this.encounter = new fhir.Reference(source.encounter); }
    if (source['author']) { this.author = new fhir.Reference(source.author); }
    if (source['code']) { this.code = new fhir.CodeableConcept(source.code); }
    else { this.code = null; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Flag' }
    this.vRS('resourceType',exp)
    this.vOA('identifier',exp)
    this.vOS('category',exp)
    this.vRSV('status',exp,'FlagStatus',FlagStatusVsValidation,'r')
    this.vOS('period',exp)
    this.vRS('subject',exp)
    this.vOS('encounter',exp)
    this.vOS('author',exp)
    this.vRS('code',exp)
    return issues;
  }
}
