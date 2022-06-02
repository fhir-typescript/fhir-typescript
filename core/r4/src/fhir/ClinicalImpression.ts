// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: ClinicalImpression

import * as fhir from '../fhir.js';

// @ts-ignore
import { InvestigationSetsCodings, InvestigationSetsCodingType,} from '../fhirValueSets/InvestigationSetsCodings.js';
// @ts-ignore
import { InvestigationSetsCodes,  InvestigationSetsCodeType } from '../fhirValueSets/InvestigationSetsCodes.js';
// @ts-ignore
import { ConditionCodings, ConditionCodingType,} from '../fhirValueSets/ConditionCodings.js';
// @ts-ignore
import { ConditionCodes,  ConditionCodeType } from '../fhirValueSets/ConditionCodes.js';
// @ts-ignore
import { ClinicalimpressionStatusCodings, ClinicalimpressionStatusCodingType,} from '../fhirValueSets/ClinicalimpressionStatusCodings.js';
// @ts-ignore
import { ClinicalimpressionStatusCodes,  ClinicalimpressionStatusCodeType } from '../fhirValueSets/ClinicalimpressionStatusCodes.js';
// @ts-ignore
import { ClinicalimpressionPrognosisCodings, ClinicalimpressionPrognosisCodingType,} from '../fhirValueSets/ClinicalimpressionPrognosisCodings.js';
// @ts-ignore
import { ClinicalimpressionPrognosisCodes,  ClinicalimpressionPrognosisCodeType } from '../fhirValueSets/ClinicalimpressionPrognosisCodes.js';
/**
 * Valid arguments for the ClinicalImpressionInvestigation type.
 */
export interface ClinicalImpressionInvestigationArgs extends fhir.BackboneElementArgs {
  /**
   * A name/code for the group ("set") of investigations. Typically, this will be something like "signs", "symptoms", "clinical", "diagnostic", but the list is not constrained, and others such groups such as (exposure|family|travel|nutritional) history may be used.
   */
  code: fhir.CodeableConceptArgs|null;
  /**
   * Most investigations are observations of one kind or another but some other specific types of data collection resources can also be used.
   */
  item?: fhir.ReferenceArgs[]|undefined;
}

/**
 * One or more sets of investigations (signs, symptoms, etc.). The actual grouping of investigations varies greatly depending on the type and context of the assessment. These investigations may include data generated during the assessment process, or data previously generated and recorded that is pertinent to the outcomes.
 */
export class ClinicalImpressionInvestigation extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'ClinicalImpressionInvestigation';
  /**
   * A name/code for the group ("set") of investigations. Typically, this will be something like "signs", "symptoms", "clinical", "diagnostic", but the list is not constrained, and others such groups such as (exposure|family|travel|nutritional) history may be used.
   */
  public code: fhir.CodeableConcept|null;
  /**
   * Most investigations are observations of one kind or another but some other specific types of data collection resources can also be used.
   */
  public item: fhir.Reference[];
  /**
   * Default constructor for ClinicalImpressionInvestigation - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ClinicalImpressionInvestigationArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['code']) { this.code = new fhir.CodeableConcept(source.code); }
    else { this.code = null; }
    if (source['item']) { this.item = source.item.map((x) => new fhir.Reference(x)); }
    else { this.item = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(expression:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(expression);
    if (expression === '') { expression = 'ClinicalImpression.investigation' }
    if (!this['code']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property code fhir: ClinicalImpression.investigation.code:CodeableConcept', expression: [expression] });
    }
    if (this["code"]) { issues.push(...this.code.doModelValidation(expression+'.code')); }
    if (this["item"]) { this.item.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.item[${i}]`)); }) }
    return issues;
  }
}
/**
 * Valid arguments for the ClinicalImpressionFinding type.
 */
export interface ClinicalImpressionFindingArgs extends fhir.BackboneElementArgs {
  /**
   * Specific text or code for finding or diagnosis, which may include ruled-out or resolved conditions.
   */
  itemCodeableConcept?: fhir.CodeableConceptArgs|undefined;
  /**
   * Specific reference for finding or diagnosis, which may include ruled-out or resolved conditions.
   */
  itemReference?: fhir.ReferenceArgs|undefined;
  /**
   * Which investigations support finding or diagnosis.
   */
  basis?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: ClinicalImpression.finding.basis
   */
  _basis?:fhir.FhirElementArgs;
}

/**
 * Specific findings or diagnoses that were considered likely or relevant to ongoing treatment.
 */
export class ClinicalImpressionFinding extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'ClinicalImpressionFinding';
  /**
   * Specific text or code for finding or diagnosis, which may include ruled-out or resolved conditions.
   */
  public itemCodeableConcept?: fhir.CodeableConcept|undefined;
  /**
   * Specific reference for finding or diagnosis, which may include ruled-out or resolved conditions.
   */
  public itemReference?: fhir.Reference|undefined;
  /**
   * Which investigations support finding or diagnosis.
   */
  public basis?: fhir.FhirString|undefined;
  /**
   * Default constructor for ClinicalImpressionFinding - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ClinicalImpressionFindingArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['itemCodeableConcept']) { this.itemCodeableConcept = new fhir.CodeableConcept(source.itemCodeableConcept); }
    if (source['itemReference']) { this.itemReference = new fhir.Reference(source.itemReference); }
    if (source['basis']) { this.basis = new fhir.FhirString({value: source.basis}); }
    if (source['_basis']) {
      if (this.basis) { this.basis.addExtendedProperties(source._basis!); }
      else { this.basis = new fhir.FhirString(source._basis as Partial<fhir.FhirStringArgs>); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(expression:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(expression);
    if (expression === '') { expression = 'ClinicalImpression.finding' }
    if (this["itemCodeableConcept"]) { issues.push(...this.itemCodeableConcept.doModelValidation(expression+'.itemCodeableConcept')); }
    if (this["itemReference"]) { issues.push(...this.itemReference.doModelValidation(expression+'.itemReference')); }
    if (this["basis"]) { issues.push(...this.basis.doModelValidation(expression+'.basis')); }
    return issues;
  }
}
/**
 * Valid arguments for the ClinicalImpression type.
 */
export interface ClinicalImpressionArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "ClinicalImpression"|undefined;
  /**
   * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * This element is labeled as a modifier because the status contains the code entered-in-error that marks the clinical impression as not currently valid.
   */
  status: fhir.FhirCode<ClinicalimpressionStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: ClinicalImpression.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * This is generally only used for "exception" statuses such as "not-done", "suspended" or "cancelled".
   * [distinct reason codes for different statuses can be enforced using invariants if they are universal bindings].
   */
  statusReason?: fhir.CodeableConceptArgs|undefined;
  /**
   * This is present as a place-holder only and may be removed based on feedback/work group opinion.
   */
  code?: fhir.CodeableConceptArgs|undefined;
  /**
   * A summary of the context and/or cause of the assessment - why / where it was performed, and what patient events/status prompted it.
   */
  description?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: ClinicalImpression.description
   */
  _description?:fhir.FhirElementArgs;
  /**
   * The patient or group of individuals assessed as part of this record.
   */
  subject: fhir.ReferenceArgs|null;
  /**
   * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter.
   */
  encounter?: fhir.ReferenceArgs|undefined;
  /**
   * This SHOULD be accurate to at least the minute, though some assessments only have a known date.
   */
  effective?: fhir.FhirDateTime|fhir.Period|undefined;
  /**
   * This SHOULD be accurate to at least the minute, though some assessments only have a known date.
   */
  effectiveDateTime?: fhir.FhirDateTime|string|undefined;
  /**
   * This SHOULD be accurate to at least the minute, though some assessments only have a known date.
   */
  effectivePeriod?: fhir.PeriodArgs|undefined;
  /**
   * Indicates when the documentation of the assessment was complete.
   */
  date?: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: ClinicalImpression.date
   */
  _date?:fhir.FhirElementArgs;
  /**
   * The clinician performing the assessment.
   */
  assessor?: fhir.ReferenceArgs|undefined;
  /**
   * It is always likely that multiple previous assessments exist for a patient. The point of quoting a previous assessment is that this assessment is relative to it (see resolved).
   */
  previous?: fhir.ReferenceArgs|undefined;
  /**
   * e.g. The patient is a pregnant, has congestive heart failure, has an ‎Adenocarcinoma, and is allergic to penicillin.
   */
  problem?: fhir.ReferenceArgs[]|undefined;
  /**
   * One or more sets of investigations (signs, symptoms, etc.). The actual grouping of investigations varies greatly depending on the type and context of the assessment. These investigations may include data generated during the assessment process, or data previously generated and recorded that is pertinent to the outcomes.
   */
  investigation?: fhir.ClinicalImpressionInvestigationArgs[]|undefined;
  /**
   * Reference to a specific published clinical protocol that was followed during this assessment, and/or that provides evidence in support of the diagnosis.
   */
  protocol?: fhir.FhirUri[]|string[]|undefined;
  /**
   * Extended properties for primitive element: ClinicalImpression.protocol
   */
  _protocol?:(fhir.FhirElementArgs|null)[];
  /**
   * A text summary of the investigations and the diagnosis.
   */
  summary?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: ClinicalImpression.summary
   */
  _summary?:fhir.FhirElementArgs;
  /**
   * Specific findings or diagnoses that were considered likely or relevant to ongoing treatment.
   */
  finding?: fhir.ClinicalImpressionFindingArgs[]|undefined;
  /**
   * Estimate of likely outcome.
   */
  prognosisCodeableConcept?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * RiskAssessment expressing likely outcome.
   */
  prognosisReference?: fhir.ReferenceArgs[]|undefined;
  /**
   * Information supporting the clinical impression.
   */
  supportingInfo?: fhir.ReferenceArgs[]|undefined;
  /**
   * Don't use this element for content that should more properly appear as one of the specific elements of the impression.
   */
  note?: fhir.AnnotationArgs[]|undefined;
}

/**
 * A record of a clinical assessment performed to determine what problem(s) may affect the patient and before planning the treatments or management strategies that are best to manage a patient's condition. Assessments are often 1:1 with a clinical consultation / encounter,  but this varies greatly depending on the clinical workflow. This resource is called "ClinicalImpression" rather than "ClinicalAssessment" to avoid confusion with the recording of assessment tools such as Apgar score.
 */
export class ClinicalImpression extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'ClinicalImpression';
  /**
   * Resource Type Name
   */
  public override resourceType: "ClinicalImpression";
  /**
   * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
   */
  public identifier: fhir.Identifier[];
  /**
   * This element is labeled as a modifier because the status contains the code entered-in-error that marks the clinical impression as not currently valid.
   */
  public status: fhir.FhirCode<ClinicalimpressionStatusCodeType>|null;
  /**
   * This is generally only used for "exception" statuses such as "not-done", "suspended" or "cancelled".
   * [distinct reason codes for different statuses can be enforced using invariants if they are universal bindings].
   */
  public statusReason?: fhir.CodeableConcept|undefined;
  /**
   * This is present as a place-holder only and may be removed based on feedback/work group opinion.
   */
  public code?: fhir.CodeableConcept|undefined;
  /**
   * A summary of the context and/or cause of the assessment - why / where it was performed, and what patient events/status prompted it.
   */
  public description?: fhir.FhirString|undefined;
  /**
   * The patient or group of individuals assessed as part of this record.
   */
  public subject: fhir.Reference|null;
  /**
   * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter.
   */
  public encounter?: fhir.Reference|undefined;
  /**
   * This SHOULD be accurate to at least the minute, though some assessments only have a known date.
   */
  public effective?: (fhir.FhirDateTime|fhir.Period)|undefined;
  /**
   * Internal flag to properly serialize choice-type element ClinicalImpression.effective[x]
   */
  protected static readonly _fts_effectiveIsChoice:true = true;
  /**
   * Indicates when the documentation of the assessment was complete.
   */
  public date?: fhir.FhirDateTime|undefined;
  /**
   * The clinician performing the assessment.
   */
  public assessor?: fhir.Reference|undefined;
  /**
   * It is always likely that multiple previous assessments exist for a patient. The point of quoting a previous assessment is that this assessment is relative to it (see resolved).
   */
  public previous?: fhir.Reference|undefined;
  /**
   * e.g. The patient is a pregnant, has congestive heart failure, has an ‎Adenocarcinoma, and is allergic to penicillin.
   */
  public problem: fhir.Reference[];
  /**
   * One or more sets of investigations (signs, symptoms, etc.). The actual grouping of investigations varies greatly depending on the type and context of the assessment. These investigations may include data generated during the assessment process, or data previously generated and recorded that is pertinent to the outcomes.
   */
  public investigation: fhir.ClinicalImpressionInvestigation[];
  /**
   * Reference to a specific published clinical protocol that was followed during this assessment, and/or that provides evidence in support of the diagnosis.
   */
  public protocol: fhir.FhirUri[];
  /**
   * A text summary of the investigations and the diagnosis.
   */
  public summary?: fhir.FhirString|undefined;
  /**
   * Specific findings or diagnoses that were considered likely or relevant to ongoing treatment.
   */
  public finding: fhir.ClinicalImpressionFinding[];
  /**
   * Estimate of likely outcome.
   */
  public prognosisCodeableConcept: fhir.CodeableConcept[];
  /**
   * RiskAssessment expressing likely outcome.
   */
  public prognosisReference: fhir.Reference[];
  /**
   * Information supporting the clinical impression.
   */
  public supportingInfo: fhir.Reference[];
  /**
   * Don't use this element for content that should more properly appear as one of the specific elements of the impression.
   */
  public note: fhir.Annotation[];
  /**
   * Default constructor for ClinicalImpression - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ClinicalImpressionArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'ClinicalImpression';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['status']) { this.status = new fhir.FhirCode<ClinicalimpressionStatusCodeType>({value: source.status}); }
    else { this.status = null; }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<ClinicalimpressionStatusCodeType>(source._status as Partial<fhir.FhirCode>); }
    }
    if (source['statusReason']) { this.statusReason = new fhir.CodeableConcept(source.statusReason); }
    if (source['code']) { this.code = new fhir.CodeableConcept(source.code); }
    if (source['description']) { this.description = new fhir.FhirString({value: source.description}); }
    if (source['_description']) {
      if (this.description) { this.description.addExtendedProperties(source._description!); }
      else { this.description = new fhir.FhirString(source._description as Partial<fhir.FhirStringArgs>); }
    }
    if (source['subject']) { this.subject = new fhir.Reference(source.subject); }
    else { this.subject = null; }
    if (source['encounter']) { this.encounter = new fhir.Reference(source.encounter); }
    if (source['effective']) { this.effective = source.effective; }
    else if (source['effectiveDateTime']) { this.effective = new fhir.FhirDateTime({value: source.effectiveDateTime}); }
    else if (source['effectivePeriod']) { this.effective = new fhir.Period(source.effectivePeriod); }
    if (source['date']) { this.date = new fhir.FhirDateTime({value: source.date}); }
    if (source['_date']) {
      if (this.date) { this.date.addExtendedProperties(source._date!); }
      else { this.date = new fhir.FhirDateTime(source._date as Partial<fhir.FhirDateTimeArgs>); }
    }
    if (source['assessor']) { this.assessor = new fhir.Reference(source.assessor); }
    if (source['previous']) { this.previous = new fhir.Reference(source.previous); }
    if (source['problem']) { this.problem = source.problem.map((x) => new fhir.Reference(x)); }
    else { this.problem = []; }
    if (source['investigation']) { this.investigation = source.investigation.map((x) => new fhir.ClinicalImpressionInvestigation(x)); }
    else { this.investigation = []; }
    if (source['protocol']) { this.protocol = source.protocol.map((x) => new fhir.FhirUri({value: x})); }
    else { this.protocol = []; }
    if (source['_protocol']) {
      source._protocol.forEach((x,i) => {
        if (this.protocol.length >= i) { if (x) { this.protocol[i].addExtendedProperties(x); } }
        else { if (x) { this.protocol.push(new fhir.FhirUri(x as Partial<fhir.FhirUriArgs>)); } }
      });
    }
    if (source['summary']) { this.summary = new fhir.FhirString({value: source.summary}); }
    if (source['_summary']) {
      if (this.summary) { this.summary.addExtendedProperties(source._summary!); }
      else { this.summary = new fhir.FhirString(source._summary as Partial<fhir.FhirStringArgs>); }
    }
    if (source['finding']) { this.finding = source.finding.map((x) => new fhir.ClinicalImpressionFinding(x)); }
    else { this.finding = []; }
    if (source['prognosisCodeableConcept']) { this.prognosisCodeableConcept = source.prognosisCodeableConcept.map((x) => new fhir.CodeableConcept(x)); }
    else { this.prognosisCodeableConcept = []; }
    if (source['prognosisReference']) { this.prognosisReference = source.prognosisReference.map((x) => new fhir.Reference(x)); }
    else { this.prognosisReference = []; }
    if (source['supportingInfo']) { this.supportingInfo = source.supportingInfo.map((x) => new fhir.Reference(x)); }
    else { this.supportingInfo = []; }
    if (source['note']) { this.note = source.note.map((x) => new fhir.Annotation(x)); }
    else { this.note = []; }
  }
  /**
   * Required-bound Value Set for status (ClinicalImpression.status)
   */
  public static get statusRequiredCodes() {
    return ClinicalimpressionStatusCodes;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(expression:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(expression);
    if (expression === '') { expression = 'ClinicalImpression' }
    if (!this['resourceType']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property resourceType fhir: ClinicalImpression.resourceType:"ClinicalImpression"', expression: [expression] });
    }
    if (this["identifier"]) { this.identifier.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.identifier[${i}]`)); }) }
    if (!this['status']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property status fhir: ClinicalImpression.status:code', expression: [expression] });
    }
    if (this['status'] && (!Object.values(ClinicalimpressionStatusCodes).includes(this.status.value as any))) {
      issues.push({ severity: 'error', code: 'code-invalid', diagnostics: 'status (ClinicalImpression.status) of type code is missing code for Required binding to: ClinicalimpressionStatus', expression: [expression] });
    }
    if (this["status"]) { issues.push(...this.status.doModelValidation(expression+'.status')); }
    if (this["statusReason"]) { issues.push(...this.statusReason.doModelValidation(expression+'.statusReason')); }
    if (this["code"]) { issues.push(...this.code.doModelValidation(expression+'.code')); }
    if (this["description"]) { issues.push(...this.description.doModelValidation(expression+'.description')); }
    if (!this['subject']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property subject fhir: ClinicalImpression.subject:Reference', expression: [expression] });
    }
    if (this["subject"]) { issues.push(...this.subject.doModelValidation(expression+'.subject')); }
    if (this["encounter"]) { issues.push(...this.encounter.doModelValidation(expression+'.encounter')); }
    if (this["date"]) { issues.push(...this.date.doModelValidation(expression+'.date')); }
    if (this["assessor"]) { issues.push(...this.assessor.doModelValidation(expression+'.assessor')); }
    if (this["previous"]) { issues.push(...this.previous.doModelValidation(expression+'.previous')); }
    if (this["problem"]) { this.problem.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.problem[${i}]`)); }) }
    if (this["investigation"]) { this.investigation.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.investigation[${i}]`)); }) }
    if (this["protocol"]) { this.protocol.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.protocol[${i}]`)); }) }
    if (this["summary"]) { issues.push(...this.summary.doModelValidation(expression+'.summary')); }
    if (this["finding"]) { this.finding.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.finding[${i}]`)); }) }
    if (this["prognosisCodeableConcept"]) { this.prognosisCodeableConcept.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.prognosisCodeableConcept[${i}]`)); }) }
    if (this["prognosisReference"]) { this.prognosisReference.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.prognosisReference[${i}]`)); }) }
    if (this["supportingInfo"]) { this.supportingInfo.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.supportingInfo[${i}]`)); }) }
    if (this["note"]) { this.note.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.note[${i}]`)); }) }
    return issues;
  }
}
