// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: Condition

import * as fhir from '../fhir.js';

// @ts-ignore
import { ConditionStageCodings, ConditionStageCodingType,} from '../fhirValueSets/ConditionStageCodings.js';
// @ts-ignore
import { ConditionStageCodes,  ConditionStageCodeType } from '../fhirValueSets/ConditionStageCodes.js';
// @ts-ignore
import { ConditionStageTypeCodings, ConditionStageTypeCodingType,} from '../fhirValueSets/ConditionStageTypeCodings.js';
// @ts-ignore
import { ConditionStageTypeCodes,  ConditionStageTypeCodeType } from '../fhirValueSets/ConditionStageTypeCodes.js';
// @ts-ignore
import { ManifestationOrSymptomCodings, ManifestationOrSymptomCodingType,} from '../fhirValueSets/ManifestationOrSymptomCodings.js';
// @ts-ignore
import { ManifestationOrSymptomCodes,  ManifestationOrSymptomCodeType } from '../fhirValueSets/ManifestationOrSymptomCodes.js';
// @ts-ignore
import { ConditionClinicalCodings, ConditionClinicalCodingType,} from '../fhirValueSets/ConditionClinicalCodings.js';
// @ts-ignore
import { ConditionClinicalCodes,  ConditionClinicalCodeType } from '../fhirValueSets/ConditionClinicalCodes.js';
// @ts-ignore
import { ConditionVerStatusCodings, ConditionVerStatusCodingType,} from '../fhirValueSets/ConditionVerStatusCodings.js';
// @ts-ignore
import { ConditionVerStatusCodes,  ConditionVerStatusCodeType } from '../fhirValueSets/ConditionVerStatusCodes.js';
// @ts-ignore
import { ConditionCategoryCodings, ConditionCategoryCodingType,} from '../fhirValueSets/ConditionCategoryCodings.js';
// @ts-ignore
import { ConditionCategoryCodes,  ConditionCategoryCodeType } from '../fhirValueSets/ConditionCategoryCodes.js';
// @ts-ignore
import { ConditionSeverityCodings, ConditionSeverityCodingType,} from '../fhirValueSets/ConditionSeverityCodings.js';
// @ts-ignore
import { ConditionSeverityCodes,  ConditionSeverityCodeType } from '../fhirValueSets/ConditionSeverityCodes.js';
// @ts-ignore
import { ConditionCodeCodings, ConditionCodeCodingType,} from '../fhirValueSets/ConditionCodeCodings.js';
// @ts-ignore
import { ConditionCodeCodes,  ConditionCodeCodeType } from '../fhirValueSets/ConditionCodeCodes.js';
// @ts-ignore
import { BodySiteCodings, BodySiteCodingType,} from '../fhirValueSets/BodySiteCodings.js';
// @ts-ignore
import { BodySiteCodes,  BodySiteCodeType } from '../fhirValueSets/BodySiteCodes.js';
// @ts-ignore
import { IssueTypeCodes } from '../fhirValueSets/IssueTypeCodes.js';
// @ts-ignore
import { IssueSeverityCodes } from '../fhirValueSets/IssueSeverityCodes.js';
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
  /**
   * The kind of staging, such as pathological or clinical staging.
   */
  type?: fhir.CodeableConceptArgs|undefined;
}

/**
 * Clinical stage or grade of a condition. May include formal severity assessments.
 */
export class ConditionStage extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static readonly _fts_dataType:string = 'ConditionStage';
  /**
   * A simple summary of the stage such as "Stage 3". The determination of the stage is disease-specific.
   */
  public summary?: fhir.CodeableConcept|undefined;
  /**
   * Reference to a formal record of the evidence on which the staging assessment is based.
   */
  public assessment?: fhir.Reference[];
  /**
   * The kind of staging, such as pathological or clinical staging.
   */
  public type?: fhir.CodeableConcept|undefined;
  /**
   * Default constructor for ConditionStage - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ConditionStageArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['summary']) { this.summary = new fhir.CodeableConcept(source.summary); }
    if (source['assessment']) { this.assessment = source.assessment.map((x) => new fhir.Reference(x)); }
    else { this.assessment = []; }
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (this["summary"]) { outcome.issue!.push(...this.summary.doModelValidation().issue!); }
    if (this["assessment"]) { this.assessment.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["type"]) { outcome.issue!.push(...this.type.doModelValidation().issue!); }
    return outcome;
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
  public static readonly _fts_dataType:string = 'ConditionEvidence';
  /**
   * A manifestation or symptom that led to the recording of this condition.
   */
  public code?: fhir.CodeableConcept[];
  /**
   * Links to other relevant information, including pathology reports.
   */
  public detail?: fhir.Reference[];
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
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (this["code"]) { this.code.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["detail"]) { this.detail.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    return outcome;
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
   * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * The data type is CodeableConcept because clinicalStatus has some clinical judgment involved, such that there might need to be more specificity than the required FHIR value set allows. For example, a SNOMED coding might allow for additional specificity.
   */
  clinicalStatus?: fhir.CodeableConceptArgs|undefined;
  /**
   * verificationStatus is not required.  For example, when a patient has abdominal pain in the ED, there is not likely going to be a verification status.
   * The data type is CodeableConcept because verificationStatus has some clinical judgment involved, such that there might need to be more specificity than the required FHIR value set allows. For example, a SNOMED coding might allow for additional specificity.
   */
  verificationStatus?: fhir.CodeableConceptArgs|undefined;
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
   * Only used if not implicit in code found in Condition.code. If the use case requires attributes from the BodySite resource (e.g. to identify and track separately) then use the standard extension [bodySite](extension-bodysite.html).  May be a summary code, or a reference to a very precise definition of the location, or both.
   */
  bodySite?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Indicates the patient or group who the condition record is associated with.
   */
  subject: fhir.ReferenceArgs|null;
  /**
   * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter. This record indicates the encounter this particular record is associated with.  In the case of a "new" diagnosis reflecting ongoing/revised information about the condition, this might be distinct from the first encounter in which the underlying condition was first "known".
   */
  encounter?: fhir.ReferenceArgs|undefined;
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
  abatement?: fhir.FhirDateTime|fhir.Age|fhir.Period|fhir.Range|fhir.FhirString|undefined;
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
   * The recordedDate represents when this particular Condition record was created in the system, which is often a system-generated date.
   */
  recordedDate?: fhir.FhirDateTime|string|undefined;
  /**
   * Individual who recorded the record and takes responsibility for its content.
   */
  recorder?: fhir.ReferenceArgs|undefined;
  /**
   * Individual who is making the condition statement.
   */
  asserter?: fhir.ReferenceArgs|undefined;
  /**
   * Clinical stage or grade of a condition. May include formal severity assessments.
   */
  stage?: fhir.ConditionStageArgs[]|undefined;
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
  public static readonly _fts_dataType:string = 'Condition';
  /**
   * Resource Type Name
   */
  public resourceType: "Condition";
  /**
   * This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
   */
  public identifier?: fhir.Identifier[];
  /**
   * The data type is CodeableConcept because clinicalStatus has some clinical judgment involved, such that there might need to be more specificity than the required FHIR value set allows. For example, a SNOMED coding might allow for additional specificity.
   */
  public clinicalStatus?: fhir.CodeableConcept|undefined;
  /**
   * verificationStatus is not required.  For example, when a patient has abdominal pain in the ED, there is not likely going to be a verification status.
   * The data type is CodeableConcept because verificationStatus has some clinical judgment involved, such that there might need to be more specificity than the required FHIR value set allows. For example, a SNOMED coding might allow for additional specificity.
   */
  public verificationStatus?: fhir.CodeableConcept|undefined;
  /**
   * The categorization is often highly contextual and may appear poorly differentiated or not very useful in other contexts.
   */
  public category?: fhir.CodeableConcept[];
  /**
   * Coding of the severity with a terminology is preferred, where possible.
   */
  public severity?: fhir.CodeableConcept|undefined;
  /**
   * Identification of the condition, problem or diagnosis.
   */
  public code?: fhir.CodeableConcept|undefined;
  /**
   * Only used if not implicit in code found in Condition.code. If the use case requires attributes from the BodySite resource (e.g. to identify and track separately) then use the standard extension [bodySite](extension-bodysite.html).  May be a summary code, or a reference to a very precise definition of the location, or both.
   */
  public bodySite?: fhir.CodeableConcept[];
  /**
   * Indicates the patient or group who the condition record is associated with.
   */
  public subject: fhir.Reference|null;
  /**
   * This will typically be the encounter the event occurred within, but some activities may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter. This record indicates the encounter this particular record is associated with.  In the case of a "new" diagnosis reflecting ongoing/revised information about the condition, this might be distinct from the first encounter in which the underlying condition was first "known".
   */
  public encounter?: fhir.Reference|undefined;
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
  public abatement?: (fhir.FhirDateTime|fhir.Age|fhir.Period|fhir.Range|fhir.FhirString)|undefined;
  /**
   * Internal flag to properly serialize choice-type element Condition.abatement[x]
   */
  protected static readonly _fts_abatementIsChoice:true = true;
  /**
   * The recordedDate represents when this particular Condition record was created in the system, which is often a system-generated date.
   */
  public recordedDate?: fhir.FhirDateTime|undefined;
  /**
   * Individual who recorded the record and takes responsibility for its content.
   */
  public recorder?: fhir.Reference|undefined;
  /**
   * Individual who is making the condition statement.
   */
  public asserter?: fhir.Reference|undefined;
  /**
   * Clinical stage or grade of a condition. May include formal severity assessments.
   */
  public stage?: fhir.ConditionStage[];
  /**
   * The evidence may be a simple list of coded symptoms/manifestations, or references to observations or formal assessments, or both.
   */
  public evidence?: fhir.ConditionEvidence[];
  /**
   * Additional information about the Condition. This is a general notes/comments entry  for description of the Condition, its diagnosis and prognosis.
   */
  public note?: fhir.Annotation[];
  /**
   * Default constructor for Condition - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ConditionArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'Condition';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['clinicalStatus']) { this.clinicalStatus = new fhir.CodeableConcept(source.clinicalStatus); }
    if (source['verificationStatus']) { this.verificationStatus = new fhir.CodeableConcept(source.verificationStatus); }
    if (source['category']) { this.category = source.category.map((x) => new fhir.CodeableConcept(x)); }
    else { this.category = []; }
    if (source['severity']) { this.severity = new fhir.CodeableConcept(source.severity); }
    if (source['code']) { this.code = new fhir.CodeableConcept(source.code); }
    if (source['bodySite']) { this.bodySite = source.bodySite.map((x) => new fhir.CodeableConcept(x)); }
    else { this.bodySite = []; }
    if (source['subject']) { this.subject = new fhir.Reference(source.subject); }
    else { this.subject = null; }
    if (source['encounter']) { this.encounter = new fhir.Reference(source.encounter); }
    if (source['onset']) { this.onset = source.onset; }
    else if (source['onsetDateTime']) { this.onset = new fhir.FhirDateTime({value: source.onsetDateTime}); }
    else if (source['onsetAge']) { this.onset = new fhir.Age(source.onsetAge); }
    else if (source['onsetPeriod']) { this.onset = new fhir.Period(source.onsetPeriod); }
    else if (source['onsetRange']) { this.onset = new fhir.Range(source.onsetRange); }
    else if (source['onsetString']) { this.onset = new fhir.FhirString({value: source.onsetString}); }
    if (source['abatement']) { this.abatement = source.abatement; }
    else if (source['abatementDateTime']) { this.abatement = new fhir.FhirDateTime({value: source.abatementDateTime}); }
    else if (source['abatementAge']) { this.abatement = new fhir.Age(source.abatementAge); }
    else if (source['abatementPeriod']) { this.abatement = new fhir.Period(source.abatementPeriod); }
    else if (source['abatementRange']) { this.abatement = new fhir.Range(source.abatementRange); }
    else if (source['abatementString']) { this.abatement = new fhir.FhirString({value: source.abatementString}); }
    if (source['recordedDate']) { this.recordedDate = new fhir.FhirDateTime({value: source.recordedDate}); }
    if (source['recorder']) { this.recorder = new fhir.Reference(source.recorder); }
    if (source['asserter']) { this.asserter = new fhir.Reference(source.asserter); }
    if (source['stage']) { this.stage = source.stage.map((x) => new fhir.ConditionStage(x)); }
    else { this.stage = []; }
    if (source['evidence']) { this.evidence = source.evidence.map((x) => new fhir.ConditionEvidence(x)); }
    else { this.evidence = []; }
    if (source['note']) { this.note = source.note.map((x) => new fhir.Annotation(x)); }
    else { this.note = []; }
  }
  /**
   * Required-bound Value Set for clinicalStatus (Condition.clinicalStatus)
   */
  public static clinicalStatusRequiredCoding():ConditionClinicalCodingType {
    return ConditionClinicalCodings;
  }
  /**
   * Required-bound Value Set for verificationStatus (Condition.verificationStatus)
   */
  public static verificationStatusRequiredCoding():ConditionVerStatusCodingType {
    return ConditionVerStatusCodings;
  }
  /**
   * Extensible-bound Value Set for category (Condition.category)
   */
  public static categoryExtensibleCoding():ConditionCategoryCodingType {
    return ConditionCategoryCodings;
  }
  /**
   * Preferred-bound Value Set for severity (Condition.severity)
   */
  public static severityPreferredCoding():ConditionSeverityCodingType {
    return ConditionSeverityCodings;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (!this['resourceType']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property resourceType:"Condition" fhir: Condition.resourceType:"Condition"', }));
    }
    if (this["identifier"]) { this.identifier.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["clinicalStatus"]) { outcome.issue!.push(...this.clinicalStatus.doModelValidation().issue!); }
    if (this["verificationStatus"]) { outcome.issue!.push(...this.verificationStatus.doModelValidation().issue!); }
    if (this["category"]) { this.category.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["severity"]) { outcome.issue!.push(...this.severity.doModelValidation().issue!); }
    if (this["code"]) { outcome.issue!.push(...this.code.doModelValidation().issue!); }
    if (this["bodySite"]) { this.bodySite.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (!this['subject']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property subject:fhir.Reference fhir: Condition.subject:Reference', }));
    }
    if (this["subject"]) { outcome.issue!.push(...this.subject.doModelValidation().issue!); }
    if (this["encounter"]) { outcome.issue!.push(...this.encounter.doModelValidation().issue!); }
    if (this["recordedDate"]) { outcome.issue!.push(...this.recordedDate.doModelValidation().issue!); }
    if (this["recorder"]) { outcome.issue!.push(...this.recorder.doModelValidation().issue!); }
    if (this["asserter"]) { outcome.issue!.push(...this.asserter.doModelValidation().issue!); }
    if (this["stage"]) { this.stage.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["evidence"]) { this.evidence.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["note"]) { this.note.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    return outcome;
  }
}