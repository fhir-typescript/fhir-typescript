// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: ClinicalImpression

import * as fhir from '../fhir.js';

// @ts-ignore
import { ClinicalImpressionStatusCodes,  ClinicalImpressionStatusCodeType } from '../fhirValueSets/ClinicalImpressionStatusCodes.js';
// @ts-ignore
import { ClinicalImpressionStatusVsValidation } from '../fhirValueSets/ClinicalImpressionStatusVsValidation.js';
/**
 * Valid arguments for the ClinicalImpressionInvestigations type.
 */
export interface ClinicalImpressionInvestigationsArgs extends fhir.BackboneElementArgs {
  /**
   * A name/code for the group ("set") of investigations. Typically, this will be something like "signs", "symptoms", "clinical", "diagnostic", but the list is not constrained, and others such groups such as (exposure|family|travel|nutitirional) history may be used.
   */
  code: fhir.CodeableConceptArgs|null;
  /**
   * A record of a specific investigation that was undertaken.
   */
  item?: fhir.ReferenceArgs[]|undefined;
}

/**
 * One or more sets of investigations (signs, symptions, etc.). The actual grouping of investigations vary greatly depending on the type and context of the assessment. These investigations may include data generated during the assessment process, or data previously generated and recorded that is pertinent to the outcomes.
 */
export class ClinicalImpressionInvestigations extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'ClinicalImpressionInvestigations';
  /**
   * A name/code for the group ("set") of investigations. Typically, this will be something like "signs", "symptoms", "clinical", "diagnostic", but the list is not constrained, and others such groups such as (exposure|family|travel|nutitirional) history may be used.
   */
  public code: fhir.CodeableConcept|null;
  /**
   * A record of a specific investigation that was undertaken.
   */
  public item: fhir.Reference[];
  /**
   * Default constructor for ClinicalImpressionInvestigations - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ClinicalImpressionInvestigationsArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['code']) { this.code = new fhir.CodeableConcept(source.code); }
    else { this.code = null; }
    if (source['item']) { this.item = source.item.map((x) => new fhir.Reference(x)); }
    else { this.item = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'ClinicalImpression.investigations' }
    iss.push(...this.vRS('code',exp));
    iss.push(...this.vOA('item',exp));
    return iss;
  }
}
/**
 * Valid arguments for the ClinicalImpressionFinding type.
 */
export interface ClinicalImpressionFindingArgs extends fhir.BackboneElementArgs {
  /**
   * Specific text of code for finding or diagnosis.
   */
  item: fhir.CodeableConceptArgs|null;
  /**
   * Which investigations support finding or diagnosis.
   */
  cause?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: ClinicalImpression.finding.cause
   */
  _cause?:fhir.FhirElementArgs;
}

/**
 * Specific findings or diagnoses that was considered likely or relevant to ongoing treatment.
 */
export class ClinicalImpressionFinding extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'ClinicalImpressionFinding';
  /**
   * Specific text of code for finding or diagnosis.
   */
  public item: fhir.CodeableConcept|null;
  /**
   * Which investigations support finding or diagnosis.
   */
  public cause?: fhir.FhirString|undefined;
  /**
   * Default constructor for ClinicalImpressionFinding - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ClinicalImpressionFindingArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['item']) { this.item = new fhir.CodeableConcept(source.item); }
    else { this.item = null; }
    if (source['cause']) { this.cause = new fhir.FhirString({value: source.cause}); }
    if (source['_cause']) {
      if (this.cause) { this.cause.addExtendedProperties(source._cause!); }
      else { this.cause = new fhir.FhirString(source._cause as Partial<fhir.FhirStringArgs>); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'ClinicalImpression.finding' }
    iss.push(...this.vRS('item',exp));
    iss.push(...this.vOS('cause',exp));
    return iss;
  }
}
/**
 * Valid arguments for the ClinicalImpressionRuledOut type.
 */
export interface ClinicalImpressionRuledOutArgs extends fhir.BackboneElementArgs {
  /**
   * Specific text of code for diagnosis.
   */
  item: fhir.CodeableConceptArgs|null;
  /**
   * Grounds for elimination.
   */
  reason?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: ClinicalImpression.ruledOut.reason
   */
  _reason?:fhir.FhirElementArgs;
}

/**
 * Diagnosis considered not possible.
 */
export class ClinicalImpressionRuledOut extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'ClinicalImpressionRuledOut';
  /**
   * Specific text of code for diagnosis.
   */
  public item: fhir.CodeableConcept|null;
  /**
   * Grounds for elimination.
   */
  public reason?: fhir.FhirString|undefined;
  /**
   * Default constructor for ClinicalImpressionRuledOut - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ClinicalImpressionRuledOutArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['item']) { this.item = new fhir.CodeableConcept(source.item); }
    else { this.item = null; }
    if (source['reason']) { this.reason = new fhir.FhirString({value: source.reason}); }
    if (source['_reason']) {
      if (this.reason) { this.reason.addExtendedProperties(source._reason!); }
      else { this.reason = new fhir.FhirString(source._reason as Partial<fhir.FhirStringArgs>); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'ClinicalImpression.ruledOut' }
    iss.push(...this.vRS('item',exp));
    iss.push(...this.vOS('reason',exp));
    return iss;
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
   * The patient being assessed.
   */
  patient: fhir.ReferenceArgs|null;
  /**
   * The clinician performing the assessment.
   */
  assessor?: fhir.ReferenceArgs|undefined;
  /**
   * Identifies the workflow status of the assessment.
   */
  status: fhir.FhirCode<ClinicalImpressionStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: ClinicalImpression.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * The point in time at which the assessment was concluded (not when it was recorded).
   */
  date?: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: ClinicalImpression.date
   */
  _date?:fhir.FhirElementArgs;
  /**
   * A summary of the context and/or cause of the assessment - why / where was it peformed, and what patient events/sstatus prompted it.
   */
  description?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: ClinicalImpression.description
   */
  _description?:fhir.FhirElementArgs;
  /**
   * A reference to the last assesment that was conducted bon this patient. Assessments are often/usually ongoing in nature; a care provider (practitioner or team) will make new assessments on an ongoing basis as new data arises or the patient's conditions changes.
   */
  previous?: fhir.ReferenceArgs|undefined;
  /**
   * This a list of the general problems/conditions for a patient.
   */
  problem?: fhir.ReferenceArgs[]|undefined;
  /**
   * The request or event that necessitated this assessment. This may be a diagnosis, a Care Plan, a Request Referral, or some other resource.
   */
  trigger?: fhir.CodeableConcept|fhir.Reference|undefined;
  /**
   * The request or event that necessitated this assessment. This may be a diagnosis, a Care Plan, a Request Referral, or some other resource.
   */
  triggerCodeableConcept?: fhir.CodeableConceptArgs|undefined;
  /**
   * The request or event that necessitated this assessment. This may be a diagnosis, a Care Plan, a Request Referral, or some other resource.
   */
  triggerReference?: fhir.ReferenceArgs|undefined;
  /**
   * One or more sets of investigations (signs, symptions, etc.). The actual grouping of investigations vary greatly depending on the type and context of the assessment. These investigations may include data generated during the assessment process, or data previously generated and recorded that is pertinent to the outcomes.
   */
  investigations?: fhir.ClinicalImpressionInvestigationsArgs[]|undefined;
  /**
   * Reference to a specific published clinical protocol that was followed during this assessment, and/or that provides evidence in support of the diagnosis.
   */
  protocol?: fhir.FhirUri|string|undefined;
  /**
   * Extended properties for primitive element: ClinicalImpression.protocol
   */
  _protocol?:fhir.FhirElementArgs;
  /**
   * A text summary of the investigations and the diagnosis.
   */
  summary?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: ClinicalImpression.summary
   */
  _summary?:fhir.FhirElementArgs;
  /**
   * Specific findings or diagnoses that was considered likely or relevant to ongoing treatment.
   */
  finding?: fhir.ClinicalImpressionFindingArgs[]|undefined;
  /**
   * Diagnoses/conditions resolved since the last assessment.
   */
  resolved?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Diagnosis considered not possible.
   */
  ruledOut?: fhir.ClinicalImpressionRuledOutArgs[]|undefined;
  /**
   * Estimate of likely outcome.
   */
  prognosis?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: ClinicalImpression.prognosis
   */
  _prognosis?:fhir.FhirElementArgs;
  /**
   * Plan of action after assessment.
   */
  plan?: fhir.ReferenceArgs[]|undefined;
  /**
   * Actions taken during assessment.
   */
  action?: fhir.ReferenceArgs[]|undefined;
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
   * The patient being assessed.
   */
  public patient: fhir.Reference|null;
  /**
   * The clinician performing the assessment.
   */
  public assessor?: fhir.Reference|undefined;
  /**
   * Identifies the workflow status of the assessment.
   */
  public status: fhir.FhirCode<ClinicalImpressionStatusCodeType>|null;
  /**
   * The point in time at which the assessment was concluded (not when it was recorded).
   */
  public date?: fhir.FhirDateTime|undefined;
  /**
   * A summary of the context and/or cause of the assessment - why / where was it peformed, and what patient events/sstatus prompted it.
   */
  public description?: fhir.FhirString|undefined;
  /**
   * A reference to the last assesment that was conducted bon this patient. Assessments are often/usually ongoing in nature; a care provider (practitioner or team) will make new assessments on an ongoing basis as new data arises or the patient's conditions changes.
   */
  public previous?: fhir.Reference|undefined;
  /**
   * This a list of the general problems/conditions for a patient.
   */
  public problem: fhir.Reference[];
  /**
   * The request or event that necessitated this assessment. This may be a diagnosis, a Care Plan, a Request Referral, or some other resource.
   */
  public trigger?: (fhir.CodeableConcept|fhir.Reference)|undefined;
  /**
   * Internal flag to properly serialize choice-type element ClinicalImpression.trigger[x]
   */
  protected static readonly _fts_triggerIsChoice:true = true;
  /**
   * One or more sets of investigations (signs, symptions, etc.). The actual grouping of investigations vary greatly depending on the type and context of the assessment. These investigations may include data generated during the assessment process, or data previously generated and recorded that is pertinent to the outcomes.
   */
  public investigations: fhir.ClinicalImpressionInvestigations[];
  /**
   * Reference to a specific published clinical protocol that was followed during this assessment, and/or that provides evidence in support of the diagnosis.
   */
  public protocol?: fhir.FhirUri|undefined;
  /**
   * A text summary of the investigations and the diagnosis.
   */
  public summary?: fhir.FhirString|undefined;
  /**
   * Specific findings or diagnoses that was considered likely or relevant to ongoing treatment.
   */
  public finding: fhir.ClinicalImpressionFinding[];
  /**
   * Diagnoses/conditions resolved since the last assessment.
   */
  public resolved: fhir.CodeableConcept[];
  /**
   * Diagnosis considered not possible.
   */
  public ruledOut: fhir.ClinicalImpressionRuledOut[];
  /**
   * Estimate of likely outcome.
   */
  public prognosis?: fhir.FhirString|undefined;
  /**
   * Plan of action after assessment.
   */
  public plan: fhir.Reference[];
  /**
   * Actions taken during assessment.
   */
  public action: fhir.Reference[];
  /**
   * Default constructor for ClinicalImpression - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ClinicalImpressionArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'ClinicalImpression';
    if (source['patient']) { this.patient = new fhir.Reference(source.patient); }
    else { this.patient = null; }
    if (source['assessor']) { this.assessor = new fhir.Reference(source.assessor); }
    if (source['status']) { this.status = new fhir.FhirCode<ClinicalImpressionStatusCodeType>({value: source.status}); }
    else { this.status = null; }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<ClinicalImpressionStatusCodeType>(source._status as Partial<fhir.FhirCode>); }
    }
    if (source['date']) { this.date = new fhir.FhirDateTime({value: source.date}); }
    if (source['_date']) {
      if (this.date) { this.date.addExtendedProperties(source._date!); }
      else { this.date = new fhir.FhirDateTime(source._date as Partial<fhir.FhirDateTimeArgs>); }
    }
    if (source['description']) { this.description = new fhir.FhirString({value: source.description}); }
    if (source['_description']) {
      if (this.description) { this.description.addExtendedProperties(source._description!); }
      else { this.description = new fhir.FhirString(source._description as Partial<fhir.FhirStringArgs>); }
    }
    if (source['previous']) { this.previous = new fhir.Reference(source.previous); }
    if (source['problem']) { this.problem = source.problem.map((x) => new fhir.Reference(x)); }
    else { this.problem = []; }
    if (source['trigger']) { this.trigger = source.trigger; }
    else if (source['triggerCodeableConcept']) { this.trigger = new fhir.CodeableConcept(source.triggerCodeableConcept); }
    else if (source['triggerReference']) { this.trigger = new fhir.Reference(source.triggerReference); }
    if (source['investigations']) { this.investigations = source.investigations.map((x) => new fhir.ClinicalImpressionInvestigations(x)); }
    else { this.investigations = []; }
    if (source['protocol']) { this.protocol = new fhir.FhirUri({value: source.protocol}); }
    if (source['_protocol']) {
      if (this.protocol) { this.protocol.addExtendedProperties(source._protocol!); }
      else { this.protocol = new fhir.FhirUri(source._protocol as Partial<fhir.FhirUriArgs>); }
    }
    if (source['summary']) { this.summary = new fhir.FhirString({value: source.summary}); }
    if (source['_summary']) {
      if (this.summary) { this.summary.addExtendedProperties(source._summary!); }
      else { this.summary = new fhir.FhirString(source._summary as Partial<fhir.FhirStringArgs>); }
    }
    if (source['finding']) { this.finding = source.finding.map((x) => new fhir.ClinicalImpressionFinding(x)); }
    else { this.finding = []; }
    if (source['resolved']) { this.resolved = source.resolved.map((x) => new fhir.CodeableConcept(x)); }
    else { this.resolved = []; }
    if (source['ruledOut']) { this.ruledOut = source.ruledOut.map((x) => new fhir.ClinicalImpressionRuledOut(x)); }
    else { this.ruledOut = []; }
    if (source['prognosis']) { this.prognosis = new fhir.FhirString({value: source.prognosis}); }
    if (source['_prognosis']) {
      if (this.prognosis) { this.prognosis.addExtendedProperties(source._prognosis!); }
      else { this.prognosis = new fhir.FhirString(source._prognosis as Partial<fhir.FhirStringArgs>); }
    }
    if (source['plan']) { this.plan = source.plan.map((x) => new fhir.Reference(x)); }
    else { this.plan = []; }
    if (source['action']) { this.action = source.action.map((x) => new fhir.Reference(x)); }
    else { this.action = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'ClinicalImpression' }
    iss.push(...this.vRS('patient',exp));
    iss.push(...this.vOS('assessor',exp));
    iss.push(...this.vRSV('status',exp,'ClinicalImpressionStatus',ClinicalImpressionStatusVsValidation,'r'));
    iss.push(...this.vOS('date',exp));
    iss.push(...this.vOS('description',exp));
    iss.push(...this.vOS('previous',exp));
    iss.push(...this.vOA('problem',exp));
    iss.push(...this.vOS('trigger',exp));
    iss.push(...this.vOA('investigations',exp));
    iss.push(...this.vOS('protocol',exp));
    iss.push(...this.vOS('summary',exp));
    iss.push(...this.vOA('finding',exp));
    iss.push(...this.vOA('resolved',exp));
    iss.push(...this.vOA('ruledOut',exp));
    iss.push(...this.vOS('prognosis',exp));
    iss.push(...this.vOA('plan',exp));
    iss.push(...this.vOA('action',exp));
    return iss;
  }
}
