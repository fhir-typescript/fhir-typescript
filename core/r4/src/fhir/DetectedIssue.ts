// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: DetectedIssue

import * as fhir from '../fhir.js';

// @ts-ignore
import { ManifestationOrSymptomCodes,  ManifestationOrSymptomCodeType } from '../fhirValueSets/ManifestationOrSymptomCodes.js';
// @ts-ignore
import { ManifestationOrSymptomVsValidation } from '../fhirValueSets/ManifestationOrSymptomVsValidation.js';
// @ts-ignore
import { DetectedissueMitigationActionCodes,  DetectedissueMitigationActionCodeType } from '../fhirValueSets/DetectedissueMitigationActionCodes.js';
// @ts-ignore
import { DetectedissueMitigationActionVsValidation } from '../fhirValueSets/DetectedissueMitigationActionVsValidation.js';
// @ts-ignore
import { ObservationStatusCodes,  ObservationStatusCodeType } from '../fhirValueSets/ObservationStatusCodes.js';
// @ts-ignore
import { ObservationStatusVsValidation } from '../fhirValueSets/ObservationStatusVsValidation.js';
// @ts-ignore
import { DetectedissueCategoryCodes,  DetectedissueCategoryCodeType } from '../fhirValueSets/DetectedissueCategoryCodes.js';
// @ts-ignore
import { DetectedissueCategoryVsValidation } from '../fhirValueSets/DetectedissueCategoryVsValidation.js';
// @ts-ignore
import { DetectedissueSeverityCodes,  DetectedissueSeverityCodeType } from '../fhirValueSets/DetectedissueSeverityCodes.js';
// @ts-ignore
import { DetectedissueSeverityVsValidation } from '../fhirValueSets/DetectedissueSeverityVsValidation.js';
/**
 * Valid arguments for the DetectedIssueEvidence type.
 */
export interface DetectedIssueEvidenceArgs extends fhir.BackboneElementArgs {
  /**
   * A manifestation that led to the recording of this detected issue.
   */
  code?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Links to resources that constitute evidence for the detected issue such as a GuidanceResponse or MeasureReport.
   */
  detail?: fhir.ReferenceArgs[]|undefined;
}

/**
 * Supporting evidence or manifestations that provide the basis for identifying the detected issue such as a GuidanceResponse or MeasureReport.
 */
export class DetectedIssueEvidence extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'DetectedIssueEvidence';
  /**
   * A manifestation that led to the recording of this detected issue.
   */
  public code: fhir.CodeableConcept[];
  /**
   * Links to resources that constitute evidence for the detected issue such as a GuidanceResponse or MeasureReport.
   */
  public detail: fhir.Reference[];
  /**
   * Default constructor for DetectedIssueEvidence - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<DetectedIssueEvidenceArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['code']) { this.code = source.code.map((x) => new fhir.CodeableConcept(x, options)); }
    else { this.code = []; }
    if (source['detail']) { this.detail = source.detail.map((x) => new fhir.Reference(x, options)); }
    else { this.detail = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'DetectedIssue.evidence' }
    iss.push(...this.vOA('code',exp));
    iss.push(...this.vOA('detail',exp));
    return iss;
  }
}
/**
 * Valid arguments for the DetectedIssueMitigation type.
 */
export interface DetectedIssueMitigationArgs extends fhir.BackboneElementArgs {
  /**
   * The "text" component can be used for detail or when no appropriate code exists.
   */
  action: fhir.CodeableConceptArgs|null;
  /**
   * This might not be the same as when the mitigating step was actually taken.
   */
  date?: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: DetectedIssue.mitigation.date
   */
  _date?:fhir.FhirElementArgs;
  /**
   * Identifies the practitioner who determined the mitigation and takes responsibility for the mitigation step occurring.
   */
  author?: fhir.ReferenceArgs|undefined;
}

/**
 * Indicates an action that has been taken or is committed to reduce or eliminate the likelihood of the risk identified by the detected issue from manifesting.  Can also reflect an observation of known mitigating factors that may reduce/eliminate the need for any action.
 */
export class DetectedIssueMitigation extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'DetectedIssueMitigation';
  /**
   * The "text" component can be used for detail or when no appropriate code exists.
   */
  public action: fhir.CodeableConcept|null;
  /**
   * This might not be the same as when the mitigating step was actually taken.
   */
  public date?: fhir.FhirDateTime|undefined;
  /**
   * Identifies the practitioner who determined the mitigation and takes responsibility for the mitigation step occurring.
   */
  public author?: fhir.Reference|undefined;
  /**
   * Default constructor for DetectedIssueMitigation - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<DetectedIssueMitigationArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['action']) { this.action = new fhir.CodeableConcept(source.action, options); }
    else { this.action = null; }
    if (source['date'] !== undefined) { this.date = new fhir.FhirDateTime({value: source.date}, options); }
    if (source['_date']) {
      if (this.date) { this.date.addExtendedProperties(source._date!); }
      else { this.date = new fhir.FhirDateTime(source._date as Partial<fhir.FhirDateTimeArgs>, options); }
    }
    if (source['author']) { this.author = new fhir.Reference(source.author, options); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'DetectedIssue.mitigation' }
    iss.push(...this.vRS('action',exp));
    iss.push(...this.vOS('date',exp));
    iss.push(...this.vOS('author',exp));
    return iss;
  }
}
/**
 * Valid arguments for the DetectedIssue type.
 */
export interface DetectedIssueArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "DetectedIssue"|undefined;
  /**
   * Business identifier associated with the detected issue record.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * This element is labeled as a modifier because the status contains the codes cancelled and entered-in-error that mark the issue as not currently valid.
   */
  status: fhir.FhirCode<ObservationStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: DetectedIssue.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * Identifies the general type of issue identified.
   */
  code?: fhir.CodeableConceptArgs|undefined;
  /**
   * Indicates the degree of importance associated with the identified issue based on the potential impact on the patient.
   */
  severity?: fhir.FhirCode<DetectedissueSeverityCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: DetectedIssue.severity
   */
  _severity?:fhir.FhirElementArgs;
  /**
   * Indicates the patient whose record the detected issue is associated with.
   */
  patient?: fhir.ReferenceArgs|undefined;
  /**
   * The date or period when the detected issue was initially identified.
   */
  identified?: fhir.FhirDateTime|fhir.Period|undefined;
  /**
   * The date or period when the detected issue was initially identified.
   */
  identifiedDateTime?: fhir.FhirDateTime|string|undefined;
  /**
   * The date or period when the detected issue was initially identified.
   */
  identifiedPeriod?: fhir.PeriodArgs|undefined;
  /**
   * Individual or device responsible for the issue being raised.  For example, a decision support application or a pharmacist conducting a medication review.
   */
  author?: fhir.ReferenceArgs|undefined;
  /**
   * There's an implicit constraint on the number of implicated resources based on DetectedIssue.type; e.g. For drug-drug, there would be more than one.  For timing, there would typically only be one.
   */
  implicated?: fhir.ReferenceArgs[]|undefined;
  /**
   * Supporting evidence or manifestations that provide the basis for identifying the detected issue such as a GuidanceResponse or MeasureReport.
   */
  evidence?: fhir.DetectedIssueEvidenceArgs[]|undefined;
  /**
   * Should focus on information not covered elsewhere as discrete data - no need to duplicate the narrative.
   */
  detail?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: DetectedIssue.detail
   */
  _detail?:fhir.FhirElementArgs;
  /**
   * The literature, knowledge-base or similar reference that describes the propensity for the detected issue identified.
   */
  reference?: fhir.FhirUri|string|undefined;
  /**
   * Extended properties for primitive element: DetectedIssue.reference
   */
  _reference?:fhir.FhirElementArgs;
  /**
   * Indicates an action that has been taken or is committed to reduce or eliminate the likelihood of the risk identified by the detected issue from manifesting.  Can also reflect an observation of known mitigating factors that may reduce/eliminate the need for any action.
   */
  mitigation?: fhir.DetectedIssueMitigationArgs[]|undefined;
}

/**
 * Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, Ineffective treatment frequency, Procedure-condition conflict, etc.
 */
export class DetectedIssue extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'DetectedIssue';
  /**
   * Resource Type Name
   */
  public override resourceType: "DetectedIssue";
  /**
   * Business identifier associated with the detected issue record.
   */
  public identifier: fhir.Identifier[];
  /**
   * This element is labeled as a modifier because the status contains the codes cancelled and entered-in-error that mark the issue as not currently valid.
   */
  public status: fhir.FhirCode<ObservationStatusCodeType>|null;
  /**
   * Identifies the general type of issue identified.
   */
  public code?: fhir.CodeableConcept|undefined;
  /**
   * Indicates the degree of importance associated with the identified issue based on the potential impact on the patient.
   */
  public severity?: fhir.FhirCode<DetectedissueSeverityCodeType>|undefined;
  /**
   * Indicates the patient whose record the detected issue is associated with.
   */
  public patient?: fhir.Reference|undefined;
  /**
   * The date or period when the detected issue was initially identified.
   */
  public identified?: (fhir.FhirDateTime|fhir.Period)|undefined;
  /**
   * Internal flag to properly serialize choice-type element DetectedIssue.identified[x]
   */
  protected static readonly _fts_identifiedIsChoice:true = true;
  /**
   * Individual or device responsible for the issue being raised.  For example, a decision support application or a pharmacist conducting a medication review.
   */
  public author?: fhir.Reference|undefined;
  /**
   * There's an implicit constraint on the number of implicated resources based on DetectedIssue.type; e.g. For drug-drug, there would be more than one.  For timing, there would typically only be one.
   */
  public implicated: fhir.Reference[];
  /**
   * Supporting evidence or manifestations that provide the basis for identifying the detected issue such as a GuidanceResponse or MeasureReport.
   */
  public evidence: fhir.DetectedIssueEvidence[];
  /**
   * Should focus on information not covered elsewhere as discrete data - no need to duplicate the narrative.
   */
  public detail?: fhir.FhirString|undefined;
  /**
   * The literature, knowledge-base or similar reference that describes the propensity for the detected issue identified.
   */
  public reference?: fhir.FhirUri|undefined;
  /**
   * Indicates an action that has been taken or is committed to reduce or eliminate the likelihood of the risk identified by the detected issue from manifesting.  Can also reflect an observation of known mitigating factors that may reduce/eliminate the need for any action.
   */
  public mitigation: fhir.DetectedIssueMitigation[];
  /**
   * Default constructor for DetectedIssue - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<DetectedIssueArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'DetectedIssue';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x, options)); }
    else { this.identifier = []; }
    if (source['status'] !== undefined) { this.status = new fhir.FhirCode<ObservationStatusCodeType>({value: source.status}, options); }
    else { this.status = null; }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<ObservationStatusCodeType>(source._status as Partial<fhir.FhirCode>, options); }
    }
    if (source['code']) { this.code = new fhir.CodeableConcept(source.code, options); }
    if (source['severity'] !== undefined) { this.severity = new fhir.FhirCode<DetectedissueSeverityCodeType>({value: source.severity}, options); }
    if (source['_severity']) {
      if (this.severity) { this.severity.addExtendedProperties(source._severity!); }
      else { this.severity = new fhir.FhirCode<DetectedissueSeverityCodeType>(source._severity as Partial<fhir.FhirCode>, options); }
    }
    if (source['patient']) { this.patient = new fhir.Reference(source.patient, options); }
    if (source['identified']) { this.identified = source.identified; }
    else if (source['identifiedDateTime'] !== undefined) { this.identified = new fhir.FhirDateTime({value: source.identifiedDateTime}, options); }
    else if (source['identifiedPeriod']) { this.identified = new fhir.Period(source.identifiedPeriod, options); }
    if (source['author']) { this.author = new fhir.Reference(source.author, options); }
    if (source['implicated']) { this.implicated = source.implicated.map((x) => new fhir.Reference(x, options)); }
    else { this.implicated = []; }
    if (source['evidence']) { this.evidence = source.evidence.map((x) => new fhir.DetectedIssueEvidence(x, options)); }
    else { this.evidence = []; }
    if (source['detail'] !== undefined) { this.detail = new fhir.FhirString({value: source.detail}, options); }
    if (source['_detail']) {
      if (this.detail) { this.detail.addExtendedProperties(source._detail!); }
      else { this.detail = new fhir.FhirString(source._detail as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['reference'] !== undefined) { this.reference = new fhir.FhirUri({value: source.reference}, options); }
    if (source['_reference']) {
      if (this.reference) { this.reference.addExtendedProperties(source._reference!); }
      else { this.reference = new fhir.FhirUri(source._reference as Partial<fhir.FhirUriArgs>, options); }
    }
    if (source['mitigation']) { this.mitigation = source.mitigation.map((x) => new fhir.DetectedIssueMitigation(x, options)); }
    else { this.mitigation = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'DetectedIssue' }
    iss.push(...this.vOA('identifier',exp));
    iss.push(...this.vRSV('status',exp,'ObservationStatus',ObservationStatusVsValidation,'r'));
    iss.push(...this.vOS('code',exp));
    iss.push(...this.vOSV('severity',exp,'DetectedissueSeverity',DetectedissueSeverityVsValidation,'r'));
    iss.push(...this.vOS('patient',exp));
    iss.push(...this.vOS('identified',exp));
    iss.push(...this.vOS('author',exp));
    iss.push(...this.vOA('implicated',exp));
    iss.push(...this.vOA('evidence',exp));
    iss.push(...this.vOS('detail',exp));
    iss.push(...this.vOS('reference',exp));
    iss.push(...this.vOA('mitigation',exp));
    return iss;
  }
}
