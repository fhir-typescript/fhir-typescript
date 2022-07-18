// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: DetectedIssue

import * as fhir from '../fhir.js';

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
 * Valid arguments for the DetectedIssueMitigation type.
 */
export interface DetectedIssueMitigationArgs extends fhir.BackboneElementArgs {
  /**
   * The "text" component can be used for detail or when no appropriate code exists.
   */
  action: fhir.CodeableConceptArgs|null;
  /**
   * This may not be the same as when the mitigating step was actually taken.
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
 * Indicates an action that has been taken or is committed to to reduce or eliminate the likelihood of the risk identified by the detected issue from manifesting.  Can also reflect an observation of known mitigating factors that may reduce/eliminate the need for any action.
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
   * This may not be the same as when the mitigating step was actually taken.
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
    if (source['action']) { this.action = new fhir.CodeableConcept(source.action); }
    else { this.action = null; }
    if (source['date']) { this.date = new fhir.FhirDateTime({value: source.date}); }
    if (source['_date']) {
      if (this.date) { this.date.addExtendedProperties(source._date!); }
      else { this.date = new fhir.FhirDateTime(source._date as Partial<fhir.FhirDateTimeArgs>); }
    }
    if (source['author']) { this.author = new fhir.Reference(source.author); }
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
  identifier?: fhir.IdentifierArgs|undefined;
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
  category?: fhir.CodeableConceptArgs|undefined;
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
   * The date or date-time when the detected issue was initially identified.
   */
  date?: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: DetectedIssue.date
   */
  _date?:fhir.FhirElementArgs;
  /**
   * Individual or device responsible for the issue being raised.  For example, a decision support application or a pharmacist conducting a medication review.
   */
  author?: fhir.ReferenceArgs|undefined;
  /**
   * There's an implicit constraint on the number of implicated resources based on DetectedIssue.type; e.g. For drug-drug, there would be more than one.  For timing, there would typically only be one.
   */
  implicated?: fhir.ReferenceArgs[]|undefined;
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
   * Indicates an action that has been taken or is committed to to reduce or eliminate the likelihood of the risk identified by the detected issue from manifesting.  Can also reflect an observation of known mitigating factors that may reduce/eliminate the need for any action.
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
  public identifier?: fhir.Identifier|undefined;
  /**
   * This element is labeled as a modifier because the status contains the codes cancelled and entered-in-error that mark the issue as not currently valid.
   */
  public status: fhir.FhirCode<ObservationStatusCodeType>|null;
  /**
   * Identifies the general type of issue identified.
   */
  public category?: fhir.CodeableConcept|undefined;
  /**
   * Indicates the degree of importance associated with the identified issue based on the potential impact on the patient.
   */
  public severity?: fhir.FhirCode<DetectedissueSeverityCodeType>|undefined;
  /**
   * Indicates the patient whose record the detected issue is associated with.
   */
  public patient?: fhir.Reference|undefined;
  /**
   * The date or date-time when the detected issue was initially identified.
   */
  public date?: fhir.FhirDateTime|undefined;
  /**
   * Individual or device responsible for the issue being raised.  For example, a decision support application or a pharmacist conducting a medication review.
   */
  public author?: fhir.Reference|undefined;
  /**
   * There's an implicit constraint on the number of implicated resources based on DetectedIssue.type; e.g. For drug-drug, there would be more than one.  For timing, there would typically only be one.
   */
  public implicated: fhir.Reference[];
  /**
   * Should focus on information not covered elsewhere as discrete data - no need to duplicate the narrative.
   */
  public detail?: fhir.FhirString|undefined;
  /**
   * The literature, knowledge-base or similar reference that describes the propensity for the detected issue identified.
   */
  public reference?: fhir.FhirUri|undefined;
  /**
   * Indicates an action that has been taken or is committed to to reduce or eliminate the likelihood of the risk identified by the detected issue from manifesting.  Can also reflect an observation of known mitigating factors that may reduce/eliminate the need for any action.
   */
  public mitigation: fhir.DetectedIssueMitigation[];
  /**
   * Default constructor for DetectedIssue - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<DetectedIssueArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'DetectedIssue';
    if (source['identifier']) { this.identifier = new fhir.Identifier(source.identifier); }
    if (source['status']) { this.status = new fhir.FhirCode<ObservationStatusCodeType>({value: source.status}); }
    else { this.status = null; }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<ObservationStatusCodeType>(source._status as Partial<fhir.FhirCode>); }
    }
    if (source['category']) { this.category = new fhir.CodeableConcept(source.category); }
    if (source['severity']) { this.severity = new fhir.FhirCode<DetectedissueSeverityCodeType>({value: source.severity}); }
    if (source['_severity']) {
      if (this.severity) { this.severity.addExtendedProperties(source._severity!); }
      else { this.severity = new fhir.FhirCode<DetectedissueSeverityCodeType>(source._severity as Partial<fhir.FhirCode>); }
    }
    if (source['patient']) { this.patient = new fhir.Reference(source.patient); }
    if (source['date']) { this.date = new fhir.FhirDateTime({value: source.date}); }
    if (source['_date']) {
      if (this.date) { this.date.addExtendedProperties(source._date!); }
      else { this.date = new fhir.FhirDateTime(source._date as Partial<fhir.FhirDateTimeArgs>); }
    }
    if (source['author']) { this.author = new fhir.Reference(source.author); }
    if (source['implicated']) { this.implicated = source.implicated.map((x) => new fhir.Reference(x)); }
    else { this.implicated = []; }
    if (source['detail']) { this.detail = new fhir.FhirString({value: source.detail}); }
    if (source['_detail']) {
      if (this.detail) { this.detail.addExtendedProperties(source._detail!); }
      else { this.detail = new fhir.FhirString(source._detail as Partial<fhir.FhirStringArgs>); }
    }
    if (source['reference']) { this.reference = new fhir.FhirUri({value: source.reference}); }
    if (source['_reference']) {
      if (this.reference) { this.reference.addExtendedProperties(source._reference!); }
      else { this.reference = new fhir.FhirUri(source._reference as Partial<fhir.FhirUriArgs>); }
    }
    if (source['mitigation']) { this.mitigation = source.mitigation.map((x) => new fhir.DetectedIssueMitigation(x)); }
    else { this.mitigation = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'DetectedIssue' }
    iss.push(...this.vRPS('resourceType',exp));
    iss.push(...this.vOS('identifier',exp));
    iss.push(...this.vRSV('status',exp,'ObservationStatus',ObservationStatusVsValidation,'r'));
    iss.push(...this.vOS('category',exp));
    iss.push(...this.vOSV('severity',exp,'DetectedissueSeverity',DetectedissueSeverityVsValidation,'r'));
    iss.push(...this.vOS('patient',exp));
    iss.push(...this.vOS('date',exp));
    iss.push(...this.vOS('author',exp));
    iss.push(...this.vOA('implicated',exp));
    iss.push(...this.vOS('detail',exp));
    iss.push(...this.vOS('reference',exp));
    iss.push(...this.vOA('mitigation',exp));
    return iss;
  }
}