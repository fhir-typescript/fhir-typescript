// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: DetectedIssue

import * as fhir from '../fhir.js';

// @ts-ignore
import { DetectedissueSeverityCodes,  DetectedissueSeverityCodeType } from '../fhirValueSets/DetectedissueSeverityCodes.js';
// @ts-ignore
import { DetectedissueSeverityVsValidation } from '../fhirValueSets/DetectedissueSeverityVsValidation.js';
/**
 * Valid arguments for the DetectedIssueMitigation type.
 */
export interface DetectedIssueMitigationArgs extends fhir.BackboneElementArgs {
  /**
   * Describes the action that was taken or the observation that was made that reduces/eliminates the risk associated with the identified issue.
   */
  action: fhir.CodeableConceptArgs|null;
  /**
   * Indicates when the mitigating action was documented.
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
   * Describes the action that was taken or the observation that was made that reduces/eliminates the risk associated with the identified issue.
   */
  public action: fhir.CodeableConcept|null;
  /**
   * Indicates when the mitigating action was documented.
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
   * While the subject could be inferred by tracing the subject of the implicated resources, it's useful to have a direct link for query purposes.
   */
  patient?: fhir.ReferenceArgs|undefined;
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
   * Indicates the resource representing the current activity or proposed activity that is potentially problematic.
   */
  implicated?: fhir.ReferenceArgs[]|undefined;
  /**
   * A textual explanation of the detected issue.
   */
  detail?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: DetectedIssue.detail
   */
  _detail?:fhir.FhirElementArgs;
  /**
   * No-one can be responsible for mitigation prior to the issue being identified.
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
   * Allows linking instances of the same detected issue found on different servers.
   */
  identifier?: fhir.IdentifierArgs|undefined;
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
   * While the subject could be inferred by tracing the subject of the implicated resources, it's useful to have a direct link for query purposes.
   */
  public patient?: fhir.Reference|undefined;
  /**
   * Identifies the general type of issue identified.
   */
  public category?: fhir.CodeableConcept|undefined;
  /**
   * Indicates the degree of importance associated with the identified issue based on the potential impact on the patient.
   */
  public severity?: fhir.FhirCode<DetectedissueSeverityCodeType>|undefined;
  /**
   * Indicates the resource representing the current activity or proposed activity that is potentially problematic.
   */
  public implicated: fhir.Reference[];
  /**
   * A textual explanation of the detected issue.
   */
  public detail?: fhir.FhirString|undefined;
  /**
   * No-one can be responsible for mitigation prior to the issue being identified.
   */
  public date?: fhir.FhirDateTime|undefined;
  /**
   * Individual or device responsible for the issue being raised.  For example, a decision support application or a pharmacist conducting a medication review.
   */
  public author?: fhir.Reference|undefined;
  /**
   * Allows linking instances of the same detected issue found on different servers.
   */
  public identifier?: fhir.Identifier|undefined;
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
    if (source['patient']) { this.patient = new fhir.Reference(source.patient, options); }
    if (source['category']) { this.category = new fhir.CodeableConcept(source.category, options); }
    if (source['severity'] !== undefined) { this.severity = new fhir.FhirCode<DetectedissueSeverityCodeType>({value: source.severity}, options); }
    if (source['_severity']) {
      if (this.severity) { this.severity.addExtendedProperties(source._severity!); }
      else { this.severity = new fhir.FhirCode<DetectedissueSeverityCodeType>(source._severity as Partial<fhir.FhirCode>, options); }
    }
    if (source['implicated']) { this.implicated = source.implicated.map((x) => new fhir.Reference(x, options)); }
    else { this.implicated = []; }
    if (source['detail'] !== undefined) { this.detail = new fhir.FhirString({value: source.detail}, options); }
    if (source['_detail']) {
      if (this.detail) { this.detail.addExtendedProperties(source._detail!); }
      else { this.detail = new fhir.FhirString(source._detail as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['date'] !== undefined) { this.date = new fhir.FhirDateTime({value: source.date}, options); }
    if (source['_date']) {
      if (this.date) { this.date.addExtendedProperties(source._date!); }
      else { this.date = new fhir.FhirDateTime(source._date as Partial<fhir.FhirDateTimeArgs>, options); }
    }
    if (source['author']) { this.author = new fhir.Reference(source.author, options); }
    if (source['identifier']) { this.identifier = new fhir.Identifier(source.identifier, options); }
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
    iss.push(...this.vOS('patient',exp));
    iss.push(...this.vOS('category',exp));
    iss.push(...this.vOSV('severity',exp,'DetectedissueSeverity',DetectedissueSeverityVsValidation,'r'));
    iss.push(...this.vOA('implicated',exp));
    iss.push(...this.vOS('detail',exp));
    iss.push(...this.vOS('date',exp));
    iss.push(...this.vOS('author',exp));
    iss.push(...this.vOS('identifier',exp));
    iss.push(...this.vOS('reference',exp));
    iss.push(...this.vOA('mitigation',exp));
    return iss;
  }
}
