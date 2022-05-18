// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: ImmunizationEvaluation

import * as fhir from '../fhir.js';

// @ts-ignore
import { ImmunizationEvaluationStatusCodings, ImmunizationEvaluationStatusCodingType,} from '../fhirValueSets/ImmunizationEvaluationStatusCodings.js';
// @ts-ignore
import { ImmunizationEvaluationStatusCodes,  ImmunizationEvaluationStatusCodeType } from '../fhirValueSets/ImmunizationEvaluationStatusCodes.js';
// @ts-ignore
import { ImmunizationEvaluationTargetDiseaseCodings, ImmunizationEvaluationTargetDiseaseCodingType,} from '../fhirValueSets/ImmunizationEvaluationTargetDiseaseCodings.js';
// @ts-ignore
import { ImmunizationEvaluationTargetDiseaseCodes,  ImmunizationEvaluationTargetDiseaseCodeType } from '../fhirValueSets/ImmunizationEvaluationTargetDiseaseCodes.js';
// @ts-ignore
import { ImmunizationEvaluationDoseStatusCodings, ImmunizationEvaluationDoseStatusCodingType,} from '../fhirValueSets/ImmunizationEvaluationDoseStatusCodings.js';
// @ts-ignore
import { ImmunizationEvaluationDoseStatusCodes,  ImmunizationEvaluationDoseStatusCodeType } from '../fhirValueSets/ImmunizationEvaluationDoseStatusCodes.js';
// @ts-ignore
import { ImmunizationEvaluationDoseStatusReasonCodings, ImmunizationEvaluationDoseStatusReasonCodingType,} from '../fhirValueSets/ImmunizationEvaluationDoseStatusReasonCodings.js';
// @ts-ignore
import { ImmunizationEvaluationDoseStatusReasonCodes,  ImmunizationEvaluationDoseStatusReasonCodeType } from '../fhirValueSets/ImmunizationEvaluationDoseStatusReasonCodes.js';
// @ts-ignore
import { IssueTypeCodes } from '../fhirValueSets/IssueTypeCodes.js';
// @ts-ignore
import { IssueSeverityCodes } from '../fhirValueSets/IssueSeverityCodes.js';
/**
 * Valid arguments for the ImmunizationEvaluation type.
 */
export interface ImmunizationEvaluationArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "ImmunizationEvaluation"|undefined;
  /**
   * A unique identifier assigned to this immunization evaluation record.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * Indicates the current status of the evaluation of the vaccination administration event.
   */
  status: ImmunizationEvaluationStatusCodeType|null;
  /**
   * The individual for whom the evaluation is being done.
   */
  patient: fhir.ReferenceArgs|null;
  /**
   * The date the evaluation of the vaccine administration event was performed.
   */
  date?: fhir.FhirDateTime|string|undefined;
  /**
   * Indicates the authority who published the protocol (e.g. ACIP).
   */
  authority?: fhir.ReferenceArgs|undefined;
  /**
   * The vaccine preventable disease the dose is being evaluated against.
   */
  targetDisease: fhir.CodeableConceptArgs|null;
  /**
   * The vaccine administration event being evaluated.
   */
  immunizationEvent: fhir.ReferenceArgs|null;
  /**
   * Indicates if the dose is valid or not valid with respect to the published recommendations.
   */
  doseStatus: fhir.CodeableConceptArgs|null;
  /**
   * Provides an explanation as to why the vaccine administration event is valid or not relative to the published recommendations.
   */
  doseStatusReason?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Additional information about the evaluation.
   */
  description?: fhir.FhirString|string|undefined;
  /**
   * One possible path to achieve presumed immunity against a disease - within the context of an authority.
   */
  series?: fhir.FhirString|string|undefined;
  /**
   * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
   */
  doseNumber?: fhir.FhirPositiveInt|fhir.FhirString|undefined;
  /**
   * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
   */
  doseNumberPositiveInt?: fhir.FhirPositiveInt|number|undefined;
  /**
   * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
   */
  doseNumberString?: fhir.FhirString|string|undefined;
  /**
   * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
   */
  seriesDoses?: fhir.FhirPositiveInt|fhir.FhirString|undefined;
  /**
   * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
   */
  seriesDosesPositiveInt?: fhir.FhirPositiveInt|number|undefined;
  /**
   * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
   */
  seriesDosesString?: fhir.FhirString|string|undefined;
}

/**
 * Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations.
 */
export class ImmunizationEvaluation extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static readonly _fts_dataType:string = 'ImmunizationEvaluation';
  /**
   * Resource Type Name
   */
  public resourceType: "ImmunizationEvaluation";
  /**
   * A unique identifier assigned to this immunization evaluation record.
   */
  public identifier?: fhir.Identifier[];
  /**
   * Indicates the current status of the evaluation of the vaccination administration event.
   */
  public status: ImmunizationEvaluationStatusCodeType|null;
  /**
   * The individual for whom the evaluation is being done.
   */
  public patient: fhir.Reference|null;
  /**
   * The date the evaluation of the vaccine administration event was performed.
   */
  public date?: fhir.FhirDateTime|undefined;
  /**
   * Indicates the authority who published the protocol (e.g. ACIP).
   */
  public authority?: fhir.Reference|undefined;
  /**
   * The vaccine preventable disease the dose is being evaluated against.
   */
  public targetDisease: fhir.CodeableConcept|null;
  /**
   * The vaccine administration event being evaluated.
   */
  public immunizationEvent: fhir.Reference|null;
  /**
   * Indicates if the dose is valid or not valid with respect to the published recommendations.
   */
  public doseStatus: fhir.CodeableConcept|null;
  /**
   * Provides an explanation as to why the vaccine administration event is valid or not relative to the published recommendations.
   */
  public doseStatusReason?: fhir.CodeableConcept[];
  /**
   * Additional information about the evaluation.
   */
  public description?: fhir.FhirString|undefined;
  /**
   * One possible path to achieve presumed immunity against a disease - within the context of an authority.
   */
  public series?: fhir.FhirString|undefined;
  /**
   * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
   */
  public doseNumber?: (fhir.FhirPositiveInt|fhir.FhirString)|undefined;
  /**
   * Internal flag to properly serialize choice-type element ImmunizationEvaluation.doseNumber[x]
   */
  protected static readonly _fts_doseNumberIsChoice:true = true;
  /**
   * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
   */
  public seriesDoses?: (fhir.FhirPositiveInt|fhir.FhirString)|undefined;
  /**
   * Internal flag to properly serialize choice-type element ImmunizationEvaluation.seriesDoses[x]
   */
  protected static readonly _fts_seriesDosesIsChoice:true = true;
  /**
   * Default constructor for ImmunizationEvaluation - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ImmunizationEvaluationArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'ImmunizationEvaluation';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['status']) { this.status = source.status; }
    else { this.status = null; }
    if (source['patient']) { this.patient = new fhir.Reference(source.patient); }
    else { this.patient = null; }
    if (source['date']) { this.date = new fhir.FhirDateTime({value: source.date}); }
    if (source['authority']) { this.authority = new fhir.Reference(source.authority); }
    if (source['targetDisease']) { this.targetDisease = new fhir.CodeableConcept(source.targetDisease); }
    else { this.targetDisease = null; }
    if (source['immunizationEvent']) { this.immunizationEvent = new fhir.Reference(source.immunizationEvent); }
    else { this.immunizationEvent = null; }
    if (source['doseStatus']) { this.doseStatus = new fhir.CodeableConcept(source.doseStatus); }
    else { this.doseStatus = null; }
    if (source['doseStatusReason']) { this.doseStatusReason = source.doseStatusReason.map((x) => new fhir.CodeableConcept(x)); }
    else { this.doseStatusReason = []; }
    if (source['description']) { this.description = new fhir.FhirString({value: source.description}); }
    if (source['series']) { this.series = new fhir.FhirString({value: source.series}); }
    if (source['doseNumber']) { this.doseNumber = source.doseNumber; }
    else if (source['doseNumberPositiveInt']) { this.doseNumber = new fhir.FhirPositiveInt({value: source.doseNumberPositiveInt}); }
    else if (source['doseNumberString']) { this.doseNumber = new fhir.FhirString({value: source.doseNumberString}); }
    if (source['seriesDoses']) { this.seriesDoses = source.seriesDoses; }
    else if (source['seriesDosesPositiveInt']) { this.seriesDoses = new fhir.FhirPositiveInt({value: source.seriesDosesPositiveInt}); }
    else if (source['seriesDosesString']) { this.seriesDoses = new fhir.FhirString({value: source.seriesDosesString}); }
  }
  /**
   * Required-bound Value Set for status (ImmunizationEvaluation.status)
   */
  public static statusRequiredCoding():ImmunizationEvaluationStatusCodingType {
    return ImmunizationEvaluationStatusCodings;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (!this['resourceType']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property resourceType:"ImmunizationEvaluation" fhir: ImmunizationEvaluation.resourceType:"ImmunizationEvaluation"', }));
    }
    if (this["identifier"]) { this.identifier.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (!this['status']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property status:ImmunizationEvaluationStatusCodeType fhir: ImmunizationEvaluation.status:code', }));
    }
    if (!this['patient']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property patient:fhir.Reference fhir: ImmunizationEvaluation.patient:Reference', }));
    }
    if (this["patient"]) { outcome.issue!.push(...this.patient.doModelValidation().issue!); }
    if (this["date"]) { outcome.issue!.push(...this.date.doModelValidation().issue!); }
    if (this["authority"]) { outcome.issue!.push(...this.authority.doModelValidation().issue!); }
    if (!this['targetDisease']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property targetDisease:fhir.CodeableConcept fhir: ImmunizationEvaluation.targetDisease:CodeableConcept', }));
    }
    if (this["targetDisease"]) { outcome.issue!.push(...this.targetDisease.doModelValidation().issue!); }
    if (!this['immunizationEvent']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property immunizationEvent:fhir.Reference fhir: ImmunizationEvaluation.immunizationEvent:Reference', }));
    }
    if (this["immunizationEvent"]) { outcome.issue!.push(...this.immunizationEvent.doModelValidation().issue!); }
    if (!this['doseStatus']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property doseStatus:fhir.CodeableConcept fhir: ImmunizationEvaluation.doseStatus:CodeableConcept', }));
    }
    if (this["doseStatus"]) { outcome.issue!.push(...this.doseStatus.doModelValidation().issue!); }
    if (this["doseStatusReason"]) { this.doseStatusReason.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["description"]) { outcome.issue!.push(...this.description.doModelValidation().issue!); }
    if (this["series"]) { outcome.issue!.push(...this.series.doModelValidation().issue!); }
    return outcome;
  }
}
