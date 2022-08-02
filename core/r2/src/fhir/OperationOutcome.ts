// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: OperationOutcome

import * as fhir from '../fhir.js';

// @ts-ignore
import { IssueSeverityCodes,  IssueSeverityCodeType } from '../fhirValueSets/IssueSeverityCodes.js';
// @ts-ignore
import { IssueSeverityVsValidation } from '../fhirValueSets/IssueSeverityVsValidation.js';
// @ts-ignore
import { IssueTypeCodes,  IssueTypeCodeType } from '../fhirValueSets/IssueTypeCodes.js';
// @ts-ignore
import { IssueTypeVsValidation } from '../fhirValueSets/IssueTypeVsValidation.js';
/**
 * Valid arguments for the OperationOutcomeIssue type.
 */
export interface OperationOutcomeIssueArgs extends fhir.BackboneElementArgs {
  /**
   * Indicates how relevant the issue is to the overall success of the action.
   */
  severity: fhir.FhirCode<IssueSeverityCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: OperationOutcome.issue.severity
   */
  _severity?:fhir.FhirElementArgs;
  /**
   * Expresses the issue in a human and computer-friendly way, allowing the requesting system to behave differently based on the type of issue.
   */
  code: fhir.FhirCode|string|undefined;
  /**
   * Extended properties for primitive element: OperationOutcome.issue.code
   */
  _code?:fhir.FhirElementArgs;
  /**
   * Additional details about the error. This may be a text description of the error, or a system code that identifies the error.
   */
  details?: fhir.CodeableConceptArgs|undefined;
  /**
   * Additional diagnostic information about the issue.  Typically, this may be a description of how a value is erroneous, or a stack dump to help trace the issue.
   */
  diagnostics?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: OperationOutcome.issue.diagnostics
   */
  _diagnostics?:fhir.FhirElementArgs;
  /**
   * Allows systems to highlight or otherwise guide users to elements implicated in issues to allow them to be fixed more easily.
   */
  location?: fhir.FhirString[]|(string|null)[]|undefined;
  /**
   * Extended properties for primitive element: OperationOutcome.issue.location
   */
  _location?:(fhir.FhirElementArgs|null)[];
}

/**
 * An error, warning or information message that results from a system action.
 */
export class OperationOutcomeIssue extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'OperationOutcomeIssue';
  /**
   * Indicates how relevant the issue is to the overall success of the action.
   */
  public severity: fhir.FhirCode<IssueSeverityCodeType>|null;
  /**
   * Expresses the issue in a human and computer-friendly way, allowing the requesting system to behave differently based on the type of issue.
   */
  public code: fhir.FhirCode|null;
  /**
   * Additional details about the error. This may be a text description of the error, or a system code that identifies the error.
   */
  public details?: fhir.CodeableConcept|undefined;
  /**
   * Additional diagnostic information about the issue.  Typically, this may be a description of how a value is erroneous, or a stack dump to help trace the issue.
   */
  public diagnostics?: fhir.FhirString|undefined;
  /**
   * Allows systems to highlight or otherwise guide users to elements implicated in issues to allow them to be fixed more easily.
   */
  public location: fhir.FhirString[];
  /**
   * Default constructor for OperationOutcomeIssue - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<OperationOutcomeIssueArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['severity']) { this.severity = new fhir.FhirCode<IssueSeverityCodeType>({value: source.severity}); }
    else { this.severity = null; }
    if (source['_severity']) {
      if (this.severity) { this.severity.addExtendedProperties(source._severity!); }
      else { this.severity = new fhir.FhirCode<IssueSeverityCodeType>(source._severity as Partial<fhir.FhirCode>); }
    }
    if (source['code']) { this.code = new fhir.FhirCode({value: source.code}); }
    else { this.code = null; }
    if (source['_code']) {
      if (this.code) { this.code.addExtendedProperties(source._code!); }
      else { this.code = new fhir.FhirCode(source._code as Partial<fhir.FhirCodeArgs>); }
    }
    if (source['details']) { this.details = new fhir.CodeableConcept(source.details); }
    if (source['diagnostics']) { this.diagnostics = new fhir.FhirString({value: source.diagnostics}); }
    if (source['_diagnostics']) {
      if (this.diagnostics) { this.diagnostics.addExtendedProperties(source._diagnostics!); }
      else { this.diagnostics = new fhir.FhirString(source._diagnostics as Partial<fhir.FhirStringArgs>); }
    }
    if (source['location']) { this.location = source.location.map((x) => new fhir.FhirString({value: x})); }
    else { this.location = []; }
    if (source['_location']) {
      source._location.forEach((x,i) => {
        if (this.location.length >= i) { if (x) { this.location[i].addExtendedProperties(x); } }
        else { if (x) { this.location.push(new fhir.FhirString(x as Partial<fhir.FhirStringArgs>)); } }
      });
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'OperationOutcome.issue' }
    iss.push(...this.vRSV('severity',exp,'IssueSeverity',IssueSeverityVsValidation,'r'));
    iss.push(...this.vRSV('code',exp,'IssueType',IssueTypeVsValidation,'r'));
    iss.push(...this.vOS('details',exp));
    iss.push(...this.vOS('diagnostics',exp));
    iss.push(...this.vOA('location',exp));
    return iss;
  }
}
/**
 * Valid arguments for the OperationOutcome type.
 */
export interface OperationOutcomeArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "OperationOutcome"|undefined;
  /**
   * An error, warning or information message that results from a system action.
   */
  issue: fhir.OperationOutcomeIssueArgs[]|null;
}

/**
 * A collection of error, warning or information messages that result from a system action.
 */
export class OperationOutcome extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'OperationOutcome';
  /**
   * Resource Type Name
   */
  public override resourceType: "OperationOutcome";
  /**
   * An error, warning or information message that results from a system action.
   */
  public issue: fhir.OperationOutcomeIssue[];
  /**
   * Default constructor for OperationOutcome - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<OperationOutcomeArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'OperationOutcome';
    if (source['issue']) { this.issue = source.issue.map((x) => new fhir.OperationOutcomeIssue(x)); }
    else { this.issue = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'OperationOutcome' }
    iss.push(...this.vRA('issue',exp));
    return iss;
  }
}
