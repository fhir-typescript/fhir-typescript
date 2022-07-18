// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: ImmunizationEvaluation

import * as fhir from '../fhir.js';

// @ts-ignore
import { ImmunizationEvaluationStatusCodes,  ImmunizationEvaluationStatusCodeType } from '../fhirValueSets/ImmunizationEvaluationStatusCodes.js';
// @ts-ignore
import { ImmunizationEvaluationStatusVsValidation } from '../fhirValueSets/ImmunizationEvaluationStatusVsValidation.js';
// @ts-ignore
import { ImmunizationEvaluationTargetDiseaseCodes,  ImmunizationEvaluationTargetDiseaseCodeType } from '../fhirValueSets/ImmunizationEvaluationTargetDiseaseCodes.js';
// @ts-ignore
import { ImmunizationEvaluationTargetDiseaseVsValidation } from '../fhirValueSets/ImmunizationEvaluationTargetDiseaseVsValidation.js';
// @ts-ignore
import { ImmunizationEvaluationDoseStatusCodes,  ImmunizationEvaluationDoseStatusCodeType } from '../fhirValueSets/ImmunizationEvaluationDoseStatusCodes.js';
// @ts-ignore
import { ImmunizationEvaluationDoseStatusVsValidation } from '../fhirValueSets/ImmunizationEvaluationDoseStatusVsValidation.js';
// @ts-ignore
import { ImmunizationEvaluationDoseStatusReasonCodes,  ImmunizationEvaluationDoseStatusReasonCodeType } from '../fhirValueSets/ImmunizationEvaluationDoseStatusReasonCodes.js';
// @ts-ignore
import { ImmunizationEvaluationDoseStatusReasonVsValidation } from '../fhirValueSets/ImmunizationEvaluationDoseStatusReasonVsValidation.js';
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
  status: fhir.FhirCode<ImmunizationEvaluationStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: ImmunizationEvaluation.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * The individual for whom the evaluation is being done.
   */
  patient: fhir.ReferenceArgs|null;
  /**
   * The date the evaluation of the vaccine administration event was performed.
   */
  date?: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: ImmunizationEvaluation.date
   */
  _date?:fhir.FhirElementArgs;
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
   * Extended properties for primitive element: ImmunizationEvaluation.description
   */
  _description?:fhir.FhirElementArgs;
  /**
   * One possible path to achieve presumed immunity against a disease - within the context of an authority.
   */
  series?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: ImmunizationEvaluation.series
   */
  _series?:fhir.FhirElementArgs;
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
  public static override readonly _fts_dataType:string = 'ImmunizationEvaluation';
  /**
   * Resource Type Name
   */
  public override resourceType: "ImmunizationEvaluation";
  /**
   * A unique identifier assigned to this immunization evaluation record.
   */
  public identifier: fhir.Identifier[];
  /**
   * Indicates the current status of the evaluation of the vaccination administration event.
   */
  public status: fhir.FhirCode<ImmunizationEvaluationStatusCodeType>|null;
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
  public doseStatusReason: fhir.CodeableConcept[];
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
    if (source['status']) { this.status = new fhir.FhirCode<ImmunizationEvaluationStatusCodeType>({value: source.status}); }
    else { this.status = null; }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<ImmunizationEvaluationStatusCodeType>(source._status as Partial<fhir.FhirCode>); }
    }
    if (source['patient']) { this.patient = new fhir.Reference(source.patient); }
    else { this.patient = null; }
    if (source['date']) { this.date = new fhir.FhirDateTime({value: source.date}); }
    if (source['_date']) {
      if (this.date) { this.date.addExtendedProperties(source._date!); }
      else { this.date = new fhir.FhirDateTime(source._date as Partial<fhir.FhirDateTimeArgs>); }
    }
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
    if (source['_description']) {
      if (this.description) { this.description.addExtendedProperties(source._description!); }
      else { this.description = new fhir.FhirString(source._description as Partial<fhir.FhirStringArgs>); }
    }
    if (source['series']) { this.series = new fhir.FhirString({value: source.series}); }
    if (source['_series']) {
      if (this.series) { this.series.addExtendedProperties(source._series!); }
      else { this.series = new fhir.FhirString(source._series as Partial<fhir.FhirStringArgs>); }
    }
    if (source['doseNumber']) { this.doseNumber = source.doseNumber; }
    else if (source['doseNumberPositiveInt']) { this.doseNumber = new fhir.FhirPositiveInt({value: source.doseNumberPositiveInt}); }
    else if (source['doseNumberString']) { this.doseNumber = new fhir.FhirString({value: source.doseNumberString}); }
    if (source['seriesDoses']) { this.seriesDoses = source.seriesDoses; }
    else if (source['seriesDosesPositiveInt']) { this.seriesDoses = new fhir.FhirPositiveInt({value: source.seriesDosesPositiveInt}); }
    else if (source['seriesDosesString']) { this.seriesDoses = new fhir.FhirString({value: source.seriesDosesString}); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'ImmunizationEvaluation' }
    iss.push(...this.vRPS('resourceType',exp));
    iss.push(...this.vOA('identifier',exp));
    iss.push(...this.vRSV('status',exp,'ImmunizationEvaluationStatus',ImmunizationEvaluationStatusVsValidation,'r'));
    iss.push(...this.vRS('patient',exp));
    iss.push(...this.vOS('date',exp));
    iss.push(...this.vOS('authority',exp));
    iss.push(...this.vRS('targetDisease',exp));
    iss.push(...this.vRS('immunizationEvent',exp));
    iss.push(...this.vRS('doseStatus',exp));
    iss.push(...this.vOA('doseStatusReason',exp));
    iss.push(...this.vOS('description',exp));
    iss.push(...this.vOS('series',exp));
    iss.push(...this.vOS('doseNumber',exp));
    iss.push(...this.vOS('seriesDoses',exp));
    return iss;
  }
}
