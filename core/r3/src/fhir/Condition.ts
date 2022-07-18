// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: Condition

import * as fhir from '../fhir.js';

// @ts-ignore
import { ConditionStageCodes,  ConditionStageCodeType } from '../fhirValueSets/ConditionStageCodes.js';
// @ts-ignore
import { ConditionStageVsValidation } from '../fhirValueSets/ConditionStageVsValidation.js';
// @ts-ignore
import { ManifestationOrSymptomCodes,  ManifestationOrSymptomCodeType } from '../fhirValueSets/ManifestationOrSymptomCodes.js';
// @ts-ignore
import { ManifestationOrSymptomVsValidation } from '../fhirValueSets/ManifestationOrSymptomVsValidation.js';
// @ts-ignore
import { ConditionClinicalCodes,  ConditionClinicalCodeType } from '../fhirValueSets/ConditionClinicalCodes.js';
// @ts-ignore
import { ConditionClinicalVsValidation } from '../fhirValueSets/ConditionClinicalVsValidation.js';
// @ts-ignore
import { ConditionVerStatusCodes,  ConditionVerStatusCodeType } from '../fhirValueSets/ConditionVerStatusCodes.js';
// @ts-ignore
import { ConditionVerStatusVsValidation } from '../fhirValueSets/ConditionVerStatusVsValidation.js';
// @ts-ignore
import { ConditionCategoryCodes,  ConditionCategoryCodeType } from '../fhirValueSets/ConditionCategoryCodes.js';
// @ts-ignore
import { ConditionCategoryVsValidation } from '../fhirValueSets/ConditionCategoryVsValidation.js';
// @ts-ignore
import { ConditionSeverityCodes,  ConditionSeverityCodeType } from '../fhirValueSets/ConditionSeverityCodes.js';
// @ts-ignore
import { ConditionSeverityVsValidation } from '../fhirValueSets/ConditionSeverityVsValidation.js';
// @ts-ignore
import { ConditionCodes,  ConditionCodeType } from '../fhirValueSets/ConditionCodes.js';
// @ts-ignore
import { ConditionVsValidation } from '../fhirValueSets/ConditionVsValidation.js';
// @ts-ignore
import { BodySiteCodes,  BodySiteCodeType } from '../fhirValueSets/BodySiteCodes.js';
// @ts-ignore
import { BodySiteVsValidation } from '../fhirValueSets/BodySiteVsValidation.js';
/**
 * Valid arguments for the ConditionStage type.
 */
export interface ConditionStageArgs extends fhir.BackboneElementArgs {
  /**
   * A simple summary of the stage such as "Stage 3". The determination of the stage is disease-specific.
   */
  summary?: fhir.CodeableConceptArgs|undefined;
  /**
   * Reference to a formal record of the evidence on which the staging assessment is based.
   */
  assessment?: fhir.ReferenceArgs[]|undefined;
}

/**
 * Clinical stage or grade of a condition. May include formal severity assessments.
 */
export class ConditionStage extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'ConditionStage';
  /**
   * A simple summary of the stage such as "Stage 3". The determination of the stage is disease-specific.
   */
  public summary?: fhir.CodeableConcept|undefined;
  /**
   * Reference to a formal record of the evidence on which the staging assessment is based.
   */
  public assessment: fhir.Reference[];
  /**
   * Default constructor for ConditionStage - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ConditionStageArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['summary']) { this.summary = new fhir.CodeableConcept(source.summary); }
    if (source['assessment']) { this.assessment = source.assessment.map((x) => new fhir.Reference(x)); }
    else { this.assessment = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Condition.stage' }
    iss.push(...this.vOS('summary',exp));
    iss.push(...this.vOA('assessment',exp));
    return iss;
  }
}
/**
 * Valid arguments for the ConditionEvidence type.
 */
export interface ConditionEvidenceArgs extends fhir.BackboneElementArgs {
  /**
   * A manifestation or symptom that led to the recording of this condition.
   */
  code?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Links to other relevant information, including pathology reports.
   */
  detail?: fhir.ReferenceArgs[]|undefined;
}

/**
 * The evidence may be a simple list of coded symptoms/manifestations, or references to observations or formal assessments, or both.
 */
export class ConditionEvidence extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'ConditionEvidence';
  /**
   * A manifestation or symptom that led to the recording of this condition.
   */
  public code: fhir.CodeableConcept[];
  /**
   * Links to other relevant information, including pathology reports.
   */
  public detail: fhir.Reference[];
  /**
   * Default constructor for ConditionEvidence - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ConditionEvidenceArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['code']) { this.code = source.code.map((x) => new fhir.CodeableConcept(x)); }
    else { this.code = []; }
    if (source['detail']) { this.detail = source.detail.map((x) => new fhir.Reference(x)); }
    else { this.detail = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Condition.evidence' }
    iss.push(...this.vOA('code',exp));
    iss.push(...this.vOA('detail',exp));
    return iss;
  }
}
/**
 * Valid arguments for the Condition type.
 */
export interface ConditionArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "Condition"|undefined;
  /**
   * This records identifiers associated with this condition that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * This element is labeled as a modifier because the status contains codes that mark the condition as not currently valid or of concern.
   */
  clinicalStatus?: fhir.FhirCode<ConditionClinicalCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: Condition.clinicalStatus
   */
  _clinicalStatus?:fhir.FhirElementArgs;
  /**
   * verificationStatus is not required.  For example, when a patient has abdominal pain in the ED, there is not likely going to be a verification status.
   * This element is labeled as a modifier because the status contains the code refuted and entered-in-error that mark the Condition as not currently valid.
   */
  verificationStatus?: fhir.FhirCode<ConditionVerStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: Condition.verificationStatus
   */
  _verificationStatus?:fhir.FhirElementArgs;
  /**
   * The categorization is often highly contextual and may appear poorly differentiated or not very useful in other contexts.
   */
  category?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Coding of the severity with a terminology is preferred, where possible.
   */
  severity?: fhir.CodeableConceptArgs|undefined;
  /**
   * Identification of the condition, problem or diagnosis.
   */
  code?: fhir.CodeableConceptArgs|undefined;
  /**
   * Only used if not implicit in code found in Condition.code. If the use case requires attributes from the BodySite resource (e.g. to identify and track separately) then use the standard extension [body-site-instance](extension-body-site-instance.html).  May be a summary code, or a reference to a very precise definition of the location, or both.
   */
  bodySite?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Indicates the patient or group who the condition record is associated with.
   */
  subject: fhir.ReferenceArgs|null;
  /**
   * This record indicates the encounter this particular record is associated with.  In the case of a "new" diagnosis reflecting ongoing/revised information about the condition, this might be distinct from the first encounter in which the underlying condition was first "known".
   */
  context?: fhir.ReferenceArgs|undefined;
  /**
   * Age is generally used when the patient reports an age at which the Condition began to occur.
   */
  onset?: fhir.FhirDateTime|fhir.Age|fhir.Period|fhir.Range|fhir.FhirString|undefined;
  /**
   * Age is generally used when the patient reports an age at which the Condition began to occur.
   */
  onsetDateTime?: fhir.FhirDateTime|string|undefined;
  /**
   * Age is generally used when the patient reports an age at which the Condition began to occur.
   */
  onsetAge?: fhir.AgeArgs|undefined;
  /**
   * Age is generally used when the patient reports an age at which the Condition began to occur.
   */
  onsetPeriod?: fhir.PeriodArgs|undefined;
  /**
   * Age is generally used when the patient reports an age at which the Condition began to occur.
   */
  onsetRange?: fhir.RangeArgs|undefined;
  /**
   * Age is generally used when the patient reports an age at which the Condition began to occur.
   */
  onsetString?: fhir.FhirString|string|undefined;
  /**
   * There is no explicit distinction between resolution and remission because in many cases the distinction is not clear. Age is generally used when the patient reports an age at which the Condition abated.  If there is no abatement element, it is unknown whether the condition has resolved or entered remission; applications and users should generally assume that the condition is still valid.  When abatementString exists, it implies the condition is abated.
   */
  abatement?: fhir.FhirDateTime|fhir.Age|fhir.FhirBoolean|fhir.Period|fhir.Range|fhir.FhirString|undefined;
  /**
   * There is no explicit distinction between resolution and remission because in many cases the distinction is not clear. Age is generally used when the patient reports an age at which the Condition abated.  If there is no abatement element, it is unknown whether the condition has resolved or entered remission; applications and users should generally assume that the condition is still valid.  When abatementString exists, it implies the condition is abated.
   */
  abatementDateTime?: fhir.FhirDateTime|string|undefined;
  /**
   * There is no explicit distinction between resolution and remission because in many cases the distinction is not clear. Age is generally used when the patient reports an age at which the Condition abated.  If there is no abatement element, it is unknown whether the condition has resolved or entered remission; applications and users should generally assume that the condition is still valid.  When abatementString exists, it implies the condition is abated.
   */
  abatementAge?: fhir.AgeArgs|undefined;
  /**
   * There is no explicit distinction between resolution and remission because in many cases the distinction is not clear. Age is generally used when the patient reports an age at which the Condition abated.  If there is no abatement element, it is unknown whether the condition has resolved or entered remission; applications and users should generally assume that the condition is still valid.  When abatementString exists, it implies the condition is abated.
   */
  abatementBoolean?: fhir.FhirBoolean|boolean|undefined;
  /**
   * There is no explicit distinction between resolution and remission because in many cases the distinction is not clear. Age is generally used when the patient reports an age at which the Condition abated.  If there is no abatement element, it is unknown whether the condition has resolved or entered remission; applications and users should generally assume that the condition is still valid.  When abatementString exists, it implies the condition is abated.
   */
  abatementPeriod?: fhir.PeriodArgs|undefined;
  /**
   * There is no explicit distinction between resolution and remission because in many cases the distinction is not clear. Age is generally used when the patient reports an age at which the Condition abated.  If there is no abatement element, it is unknown whether the condition has resolved or entered remission; applications and users should generally assume that the condition is still valid.  When abatementString exists, it implies the condition is abated.
   */
  abatementRange?: fhir.RangeArgs|undefined;
  /**
   * There is no explicit distinction between resolution and remission because in many cases the distinction is not clear. Age is generally used when the patient reports an age at which the Condition abated.  If there is no abatement element, it is unknown whether the condition has resolved or entered remission; applications and users should generally assume that the condition is still valid.  When abatementString exists, it implies the condition is abated.
   */
  abatementString?: fhir.FhirString|string|undefined;
  /**
   * The assertedDate represents the date when this particular Condition record was created in the EHR, not the date of the most recent update in terms of when severity, abatement, etc. were specified.  The date of the last record modification can be retrieved from the resource metadata.
   */
  assertedDate?: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: Condition.assertedDate
   */
  _assertedDate?:fhir.FhirElementArgs;
  /**
   * Individual who is making the condition statement.
   */
  asserter?: fhir.ReferenceArgs|undefined;
  /**
   * Clinical stage or grade of a condition. May include formal severity assessments.
   */
  stage?: fhir.ConditionStageArgs|undefined;
  /**
   * The evidence may be a simple list of coded symptoms/manifestations, or references to observations or formal assessments, or both.
   */
  evidence?: fhir.ConditionEvidenceArgs[]|undefined;
  /**
   * Additional information about the Condition. This is a general notes/comments entry  for description of the Condition, its diagnosis and prognosis.
   */
  note?: fhir.AnnotationArgs[]|undefined;
}

/**
 * A clinical condition, problem, diagnosis, or other event, situation, issue, or clinical concept that has risen to a level of concern.
 */
export class Condition extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'Condition';
  /**
   * Resource Type Name
   */
  public override resourceType: "Condition";
  /**
   * This records identifiers associated with this condition that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate (e.g. in CDA documents, or in written / printed documentation).
   */
  public identifier: fhir.Identifier[];
  /**
   * This element is labeled as a modifier because the status contains codes that mark the condition as not currently valid or of concern.
   */
  public clinicalStatus?: fhir.FhirCode<ConditionClinicalCodeType>|undefined;
  /**
   * verificationStatus is not required.  For example, when a patient has abdominal pain in the ED, there is not likely going to be a verification status.
   * This element is labeled as a modifier because the status contains the code refuted and entered-in-error that mark the Condition as not currently valid.
   */
  public verificationStatus?: fhir.FhirCode<ConditionVerStatusCodeType>|undefined;
  /**
   * The categorization is often highly contextual and may appear poorly differentiated or not very useful in other contexts.
   */
  public category: fhir.CodeableConcept[];
  /**
   * Coding of the severity with a terminology is preferred, where possible.
   */
  public severity?: fhir.CodeableConcept|undefined;
  /**
   * Identification of the condition, problem or diagnosis.
   */
  public code?: fhir.CodeableConcept|undefined;
  /**
   * Only used if not implicit in code found in Condition.code. If the use case requires attributes from the BodySite resource (e.g. to identify and track separately) then use the standard extension [body-site-instance](extension-body-site-instance.html).  May be a summary code, or a reference to a very precise definition of the location, or both.
   */
  public bodySite: fhir.CodeableConcept[];
  /**
   * Indicates the patient or group who the condition record is associated with.
   */
  public subject: fhir.Reference|null;
  /**
   * This record indicates the encounter this particular record is associated with.  In the case of a "new" diagnosis reflecting ongoing/revised information about the condition, this might be distinct from the first encounter in which the underlying condition was first "known".
   */
  public context?: fhir.Reference|undefined;
  /**
   * Age is generally used when the patient reports an age at which the Condition began to occur.
   */
  public onset?: (fhir.FhirDateTime|fhir.Age|fhir.Period|fhir.Range|fhir.FhirString)|undefined;
  /**
   * Internal flag to properly serialize choice-type element Condition.onset[x]
   */
  protected static readonly _fts_onsetIsChoice:true = true;
  /**
   * There is no explicit distinction between resolution and remission because in many cases the distinction is not clear. Age is generally used when the patient reports an age at which the Condition abated.  If there is no abatement element, it is unknown whether the condition has resolved or entered remission; applications and users should generally assume that the condition is still valid.  When abatementString exists, it implies the condition is abated.
   */
  public abatement?: (fhir.FhirDateTime|fhir.Age|fhir.FhirBoolean|fhir.Period|fhir.Range|fhir.FhirString)|undefined;
  /**
   * Internal flag to properly serialize choice-type element Condition.abatement[x]
   */
  protected static readonly _fts_abatementIsChoice:true = true;
  /**
   * The assertedDate represents the date when this particular Condition record was created in the EHR, not the date of the most recent update in terms of when severity, abatement, etc. were specified.  The date of the last record modification can be retrieved from the resource metadata.
   */
  public assertedDate?: fhir.FhirDateTime|undefined;
  /**
   * Individual who is making the condition statement.
   */
  public asserter?: fhir.Reference|undefined;
  /**
   * Clinical stage or grade of a condition. May include formal severity assessments.
   */
  public stage?: fhir.ConditionStage|undefined;
  /**
   * The evidence may be a simple list of coded symptoms/manifestations, or references to observations or formal assessments, or both.
   */
  public evidence: fhir.ConditionEvidence[];
  /**
   * Additional information about the Condition. This is a general notes/comments entry  for description of the Condition, its diagnosis and prognosis.
   */
  public note: fhir.Annotation[];
  /**
   * Default constructor for Condition - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ConditionArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'Condition';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['clinicalStatus']) { this.clinicalStatus = new fhir.FhirCode<ConditionClinicalCodeType>({value: source.clinicalStatus}); }
    if (source['_clinicalStatus']) {
      if (this.clinicalStatus) { this.clinicalStatus.addExtendedProperties(source._clinicalStatus!); }
      else { this.clinicalStatus = new fhir.FhirCode<ConditionClinicalCodeType>(source._clinicalStatus as Partial<fhir.FhirCode>); }
    }
    if (source['verificationStatus']) { this.verificationStatus = new fhir.FhirCode<ConditionVerStatusCodeType>({value: source.verificationStatus}); }
    if (source['_verificationStatus']) {
      if (this.verificationStatus) { this.verificationStatus.addExtendedProperties(source._verificationStatus!); }
      else { this.verificationStatus = new fhir.FhirCode<ConditionVerStatusCodeType>(source._verificationStatus as Partial<fhir.FhirCode>); }
    }
    if (source['category']) { this.category = source.category.map((x) => new fhir.CodeableConcept(x)); }
    else { this.category = []; }
    if (source['severity']) { this.severity = new fhir.CodeableConcept(source.severity); }
    if (source['code']) { this.code = new fhir.CodeableConcept(source.code); }
    if (source['bodySite']) { this.bodySite = source.bodySite.map((x) => new fhir.CodeableConcept(x)); }
    else { this.bodySite = []; }
    if (source['subject']) { this.subject = new fhir.Reference(source.subject); }
    else { this.subject = null; }
    if (source['context']) { this.context = new fhir.Reference(source.context); }
    if (source['onset']) { this.onset = source.onset; }
    else if (source['onsetDateTime']) { this.onset = new fhir.FhirDateTime({value: source.onsetDateTime}); }
    else if (source['onsetAge']) { this.onset = new fhir.Age(source.onsetAge); }
    else if (source['onsetPeriod']) { this.onset = new fhir.Period(source.onsetPeriod); }
    else if (source['onsetRange']) { this.onset = new fhir.Range(source.onsetRange); }
    else if (source['onsetString']) { this.onset = new fhir.FhirString({value: source.onsetString}); }
    if (source['abatement']) { this.abatement = source.abatement; }
    else if (source['abatementDateTime']) { this.abatement = new fhir.FhirDateTime({value: source.abatementDateTime}); }
    else if (source['abatementAge']) { this.abatement = new fhir.Age(source.abatementAge); }
    else if (source['abatementBoolean']) { this.abatement = new fhir.FhirBoolean({value: source.abatementBoolean}); }
    else if (source['abatementPeriod']) { this.abatement = new fhir.Period(source.abatementPeriod); }
    else if (source['abatementRange']) { this.abatement = new fhir.Range(source.abatementRange); }
    else if (source['abatementString']) { this.abatement = new fhir.FhirString({value: source.abatementString}); }
    if (source['assertedDate']) { this.assertedDate = new fhir.FhirDateTime({value: source.assertedDate}); }
    if (source['_assertedDate']) {
      if (this.assertedDate) { this.assertedDate.addExtendedProperties(source._assertedDate!); }
      else { this.assertedDate = new fhir.FhirDateTime(source._assertedDate as Partial<fhir.FhirDateTimeArgs>); }
    }
    if (source['asserter']) { this.asserter = new fhir.Reference(source.asserter); }
    if (source['stage']) { this.stage = new fhir.ConditionStage(source.stage); }
    if (source['evidence']) { this.evidence = source.evidence.map((x) => new fhir.ConditionEvidence(x)); }
    else { this.evidence = []; }
    if (source['note']) { this.note = source.note.map((x) => new fhir.Annotation(x)); }
    else { this.note = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Condition' }
    iss.push(...this.vRPS('resourceType',exp));
    iss.push(...this.vOA('identifier',exp));
    iss.push(...this.vOSV('clinicalStatus',exp,'ConditionClinical',ConditionClinicalVsValidation,'r'));
    iss.push(...this.vOSV('verificationStatus',exp,'ConditionVerStatus',ConditionVerStatusVsValidation,'r'));
    iss.push(...this.vOA('category',exp));
    iss.push(...this.vOS('severity',exp));
    iss.push(...this.vOS('code',exp));
    iss.push(...this.vOA('bodySite',exp));
    iss.push(...this.vRS('subject',exp));
    iss.push(...this.vOS('context',exp));
    iss.push(...this.vOS('onset',exp));
    iss.push(...this.vOS('abatement',exp));
    iss.push(...this.vOS('assertedDate',exp));
    iss.push(...this.vOS('asserter',exp));
    iss.push(...this.vOS('stage',exp));
    iss.push(...this.vOA('evidence',exp));
    iss.push(...this.vOA('note',exp));
    return iss;
  }
}
