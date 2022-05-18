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
  severity: IssueSeverityCodeType|null;
  /**
   * Describes the type of the issue. The system that creates an OperationOutcome SHALL choose the most applicable code from the IssueType value set, and may additional provide its own code for the error in the details element.
   */
  code: fhir.FhirCode|string|undefined;
  /**
   * A human readable description of the error issue SHOULD be placed in details.text.
   */
  details?: fhir.CodeableConceptArgs|undefined;
  /**
   * This may be a description of how a value is erroneous, a stack dump to help trace the issue or other troubleshooting information.
   */
  diagnostics?: fhir.FhirString|string|undefined;
  /**
   * The root of the XPath is the resource or bundle that generated OperationOutcome.  Each XPath SHALL resolve to a single node.  This element is deprecated, and is being replaced by expression.
   */
  location?: fhir.FhirString[]|string[]|undefined;
  /**
   * The root of the FHIRPath is the resource or bundle that generated OperationOutcome.  Each FHIRPath SHALL resolve to a single node.
   */
  expression?: fhir.FhirString[]|string[]|undefined;
}

/**
 * An error, warning, or information message that results from a system action.
 */
export class OperationOutcomeIssue extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static readonly _fts_dataType:string = 'OperationOutcomeIssue';
  /**
   * This is labeled as "Is Modifier" because applications should not confuse hints and warnings with errors.
   */
  public severity: IssueSeverityCodeType|null;
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
  public location?: fhir.FhirString[];
  /**
   * The root of the FHIRPath is the resource or bundle that generated OperationOutcome.  Each FHIRPath SHALL resolve to a single node.
   */
  public expression?: fhir.FhirString[];
  /**
   * Default constructor for OperationOutcomeIssue - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<OperationOutcomeIssueArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['severity']) { this.severity = source.severity; }
    else { this.severity = null; }
    if (source['code']) { this.code = new fhir.FhirCode({value: source.code}); }
    else { this.code = null; }
    if (source['details']) { this.details = new fhir.CodeableConcept(source.details); }
    if (source['diagnostics']) { this.diagnostics = new fhir.FhirString({value: source.diagnostics}); }
    if (source['location']) { this.location = source.location.map((x) => new fhir.FhirString({value: x})); }
    else { this.location = []; }
    if (source['expression']) { this.expression = source.expression.map((x) => new fhir.FhirString({value: x})); }
    else { this.expression = []; }
  }
  /**
   * Required-bound Value Set for severity (OperationOutcome.issue.severity)
   */
  public static severityRequiredCoding():IssueSeverityCodingType {
    return IssueSeverityCodings;
  }
  /**
   * Required-bound Value Set for code (OperationOutcome.issue.code)
   */
  public static codeRequiredCoding():IssueTypeCodingType {
    return IssueTypeCodings;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (!this['severity']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property severity:IssueSeverityCodeType fhir: OperationOutcome.issue.severity:code', }));
    }
    if (!this['code']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property code:fhir.FhirCode fhir: OperationOutcome.issue.code:code', }));
    }
    if (this["code"]) { outcome.issue!.push(...this.code.doModelValidation().issue!); }
    if (this["details"]) { outcome.issue!.push(...this.details.doModelValidation().issue!); }
    if (this["diagnostics"]) { outcome.issue!.push(...this.diagnostics.doModelValidation().issue!); }
    if (this["location"]) { this.location.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["expression"]) { this.expression.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    return outcome;
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
  public static readonly _fts_dataType:string = 'OperationOutcome';
  /**
   * Resource Type Name
   */
  public resourceType: "OperationOutcome";
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
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (!this['resourceType']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property resourceType:"OperationOutcome" fhir: OperationOutcome.resourceType:"OperationOutcome"', }));
    }
    if (!this['issue']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property issue:fhir.OperationOutcomeIssue[] fhir: OperationOutcome.issue:issue', }));
    } else if (!Array.isArray(this.issue)) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.StructuralIssue,  diagnostics: 'Found scalar in array property issue:fhir.OperationOutcomeIssue[] fhir: OperationOutcome.issue:issue', }));
    } else if (this.issue.length === 0) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property issue:fhir.OperationOutcomeIssue[] fhir: OperationOutcome.issue:issue', }));
    }
    if (this["issue"]) { this.issue.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    return outcome;
  }
}
