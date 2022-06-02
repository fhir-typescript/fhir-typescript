// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: OperationOutcome

import * as fhir from '../fhir.js';

// @ts-ignore
import { IssueSeverityCodings, IssueSeverityCodingType,} from '../fhirValueSets/IssueSeverityCodings.js';
// @ts-ignore
import { IssueSeverityCodes,  IssueSeverityCodeType } from '../fhirValueSets/IssueSeverityCodes.js';
// @ts-ignore
import { IssueTypeCodings, IssueTypeCodingType,} from '../fhirValueSets/IssueTypeCodings.js';
// @ts-ignore
import { IssueTypeCodes,  IssueTypeCodeType } from '../fhirValueSets/IssueTypeCodes.js';
// @ts-ignore
import { OperationOutcomeCodings, OperationOutcomeCodingType,} from '../fhirValueSets/OperationOutcomeCodings.js';
// @ts-ignore
import { OperationOutcomeCodes,  OperationOutcomeCodeType } from '../fhirValueSets/OperationOutcomeCodes.js';
/**
 * Valid arguments for the OperationOutcomeIssue type.
 */
export interface OperationOutcomeIssueArgs extends fhir.BackboneElementArgs {
  /**
   * This is labeled as "Is Modifier" because applications should not confuse hints and warnings with errors.
   */
  severity: fhir.FhirCode<IssueSeverityCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: OperationOutcome.issue.severity
   */
  _severity?:fhir.FhirElementArgs;
  /**
   * Describes the type of the issue. The system that creates an OperationOutcome SHALL choose the most applicable code from the IssueType value set, and may additional provide its own code for the error in the details element.
   */
  code: fhir.FhirCode|string|undefined;
  /**
   * Extended properties for primitive element: OperationOutcome.issue.code
   */
  _code?:fhir.FhirElementArgs;
  /**
   * A human readable description of the error issue SHOULD be placed in details.text.
   */
  details?: fhir.CodeableConceptArgs|undefined;
  /**
   * This may be a description of how a value is erroneous, a stack dump to help trace the issue or other troubleshooting information.
   */
  diagnostics?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: OperationOutcome.issue.diagnostics
   */
  _diagnostics?:fhir.FhirElementArgs;
  /**
   * The root of the XPath is the resource or bundle that generated OperationOutcome.  Each XPath SHALL resolve to a single node.  This element is deprecated, and is being replaced by expression.
   */
  location?: fhir.FhirString[]|(string|null)[]|undefined;
  /**
   * Extended properties for primitive element: OperationOutcome.issue.location
   */
  _location?:(fhir.FhirElementArgs|null)[];
  /**
   * The root of the FHIRPath is the resource or bundle that generated OperationOutcome.  Each FHIRPath SHALL resolve to a single node.
   */
  expression?: fhir.FhirString[]|(string|null)[]|undefined;
  /**
   * Extended properties for primitive element: OperationOutcome.issue.expression
   */
  _expression?:(fhir.FhirElementArgs|null)[];
}

/**
 * An error, warning, or information message that results from a system action.
 */
export class OperationOutcomeIssue extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'OperationOutcomeIssue';
  /**
   * This is labeled as "Is Modifier" because applications should not confuse hints and warnings with errors.
   */
  public severity: fhir.FhirCode<IssueSeverityCodeType>|null;
  /**
   * Describes the type of the issue. The system that creates an OperationOutcome SHALL choose the most applicable code from the IssueType value set, and may additional provide its own code for the error in the details element.
   */
  public code: fhir.FhirCode|null;
  /**
   * A human readable description of the error issue SHOULD be placed in details.text.
   */
  public details?: fhir.CodeableConcept|undefined;
  /**
   * This may be a description of how a value is erroneous, a stack dump to help trace the issue or other troubleshooting information.
   */
  public diagnostics?: fhir.FhirString|undefined;
  /**
   * The root of the XPath is the resource or bundle that generated OperationOutcome.  Each XPath SHALL resolve to a single node.  This element is deprecated, and is being replaced by expression.
   */
  public location: fhir.FhirString[];
  /**
   * The root of the FHIRPath is the resource or bundle that generated OperationOutcome.  Each FHIRPath SHALL resolve to a single node.
   */
  public expression: fhir.FhirString[];
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
    if (source['expression']) { this.expression = source.expression.map((x) => new fhir.FhirString({value: x})); }
    else { this.expression = []; }
    if (source['_expression']) {
      source._expression.forEach((x,i) => {
        if (this.expression.length >= i) { if (x) { this.expression[i].addExtendedProperties(x); } }
        else { if (x) { this.expression.push(new fhir.FhirString(x as Partial<fhir.FhirStringArgs>)); } }
      });
    }
  }
  /**
   * Required-bound Value Set for severity (OperationOutcome.issue.severity)
   */
  public static get severityRequiredCodes() {
    return IssueSeverityCodes;
  }
  /**
   * Required-bound Value Set for code (OperationOutcome.issue.code)
   */
  public static get codeRequiredCodes() {
    return IssueTypeCodes;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(expression:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(expression);
    if (expression === '') { expression = 'OperationOutcome.issue' }
    if (!this['severity']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property severity fhir: OperationOutcome.issue.severity:code', expression: [expression] });
    }
    if (this['severity'] && (!Object.values(IssueSeverityCodes).includes(this.severity.value as any))) {
      issues.push({ severity: 'error', code: 'code-invalid', diagnostics: 'severity (OperationOutcome.issue.severity) of type code is missing code for Required binding to: IssueSeverity', expression: [expression] });
    }
    if (this["severity"]) { issues.push(...this.severity.doModelValidation(expression+'.severity')); }
    if (!this['code']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property code fhir: OperationOutcome.issue.code:code', expression: [expression] });
    }
    if (this['code'] && (!Object.values(IssueTypeCodes).includes(this.code.value as any))) {
      issues.push({ severity: 'error', code: 'code-invalid', diagnostics: 'code (OperationOutcome.issue.code) of type code is missing code for Required binding to: IssueType', expression: [expression] });
    }
    if (this["code"]) { issues.push(...this.code.doModelValidation(expression+'.code')); }
    if (this["details"]) { issues.push(...this.details.doModelValidation(expression+'.details')); }
    if (this["diagnostics"]) { issues.push(...this.diagnostics.doModelValidation(expression+'.diagnostics')); }
    if (this["location"]) { this.location.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.location[${i}]`)); }) }
    if (this["expression"]) { this.expression.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.expression[${i}]`)); }) }
    return issues;
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
   * An error, warning, or information message that results from a system action.
   */
  issue: fhir.OperationOutcomeIssueArgs[]|null;
}

/**
 * A collection of error, warning, or information messages that result from a system action.
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
   * An error, warning, or information message that results from a system action.
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
  public override doModelValidation(expression:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(expression);
    if (expression === '') { expression = 'OperationOutcome' }
    if (!this['resourceType']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property resourceType fhir: OperationOutcome.resourceType:"OperationOutcome"', expression: [expression] });
    }
    if (!this['issue']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property issue fhir: OperationOutcome.issue:issue', expression: [expression] });
    } else if (!Array.isArray(this.issue)) {
      issues.push({ severity: 'error', code: 'structure', diagnostics: 'Found scalar in array property issue fhir: OperationOutcome.issue:issue', expression: [expression] });
    } else if (this.issue.length === 0) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property issue fhir: OperationOutcome.issue:issue', expression: [expression] });
    }
    if (this["issue"]) { this.issue.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.issue[${i}]`)); }) }
    return issues;
  }
}
