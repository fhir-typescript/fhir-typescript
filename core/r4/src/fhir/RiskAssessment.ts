// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: RiskAssessment

import * as fhir from '../fhir.js';

// @ts-ignore
import { RiskProbabilityCodings, RiskProbabilityCodingType,} from '../fhirValueSets/RiskProbabilityCodings.js';
// @ts-ignore
import { RiskProbabilityCodes,  RiskProbabilityCodeType } from '../fhirValueSets/RiskProbabilityCodes.js';
// @ts-ignore
import { ObservationStatusCodings, ObservationStatusCodingType,} from '../fhirValueSets/ObservationStatusCodings.js';
// @ts-ignore
import { ObservationStatusCodes,  ObservationStatusCodeType } from '../fhirValueSets/ObservationStatusCodes.js';
/**
 * Valid arguments for the RiskAssessmentPrediction type.
 */
export interface RiskAssessmentPredictionArgs extends fhir.BackboneElementArgs {
  /**
   * One of the potential outcomes for the patient (e.g. remission, death,  a particular condition).
   */
  outcome?: fhir.CodeableConceptArgs|undefined;
  /**
   * If range is used, it represents the lower and upper bounds of certainty; e.g. 40-60%  Decimal values are expressed as percentages as well (max = 100).
   */
  probability?: fhir.FhirDecimal|fhir.Range|undefined;
  /**
   * If range is used, it represents the lower and upper bounds of certainty; e.g. 40-60%  Decimal values are expressed as percentages as well (max = 100).
   */
  probabilityDecimal?: fhir.FhirDecimal|number|undefined;
  /**
   * If range is used, it represents the lower and upper bounds of certainty; e.g. 40-60%  Decimal values are expressed as percentages as well (max = 100).
   */
  probabilityRange?: fhir.RangeArgs|undefined;
  /**
   * Indicates how likely the outcome is (in the specified timeframe), expressed as a qualitative value (e.g. low, medium, or high).
   */
  qualitativeRisk?: fhir.CodeableConceptArgs|undefined;
  /**
   * Indicates the risk for this particular subject (with their specific characteristics) divided by the risk of the population in general.  (Numbers greater than 1 = higher risk than the population, numbers less than 1 = lower risk.).
   */
  relativeRisk?: fhir.FhirDecimal|number|undefined;
  /**
   * Extended properties for primitive element: RiskAssessment.prediction.relativeRisk
   */
  _relativeRisk?:fhir.FhirElementArgs;
  /**
   * If not specified, the risk applies "over the subject's lifespan".
   */
  when?: fhir.Period|fhir.Range|undefined;
  /**
   * If not specified, the risk applies "over the subject's lifespan".
   */
  whenPeriod?: fhir.PeriodArgs|undefined;
  /**
   * If not specified, the risk applies "over the subject's lifespan".
   */
  whenRange?: fhir.RangeArgs|undefined;
  /**
   * Additional information explaining the basis for the prediction.
   */
  rationale?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: RiskAssessment.prediction.rationale
   */
  _rationale?:fhir.FhirElementArgs;
}

/**
 * Multiple repetitions can be used to identify the same type of outcome in different timeframes as well as different types of outcomes.
 */
export class RiskAssessmentPrediction extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'RiskAssessmentPrediction';
  /**
   * One of the potential outcomes for the patient (e.g. remission, death,  a particular condition).
   */
  public outcome?: fhir.CodeableConcept|undefined;
  /**
   * If range is used, it represents the lower and upper bounds of certainty; e.g. 40-60%  Decimal values are expressed as percentages as well (max = 100).
   */
  public probability?: (fhir.FhirDecimal|fhir.Range)|undefined;
  /**
   * Internal flag to properly serialize choice-type element RiskAssessment.prediction.probability[x]
   */
  protected static readonly _fts_probabilityIsChoice:true = true;
  /**
   * Indicates how likely the outcome is (in the specified timeframe), expressed as a qualitative value (e.g. low, medium, or high).
   */
  public qualitativeRisk?: fhir.CodeableConcept|undefined;
  /**
   * Indicates the risk for this particular subject (with their specific characteristics) divided by the risk of the population in general.  (Numbers greater than 1 = higher risk than the population, numbers less than 1 = lower risk.).
   */
  public relativeRisk?: fhir.FhirDecimal|undefined;
  /**
   * If not specified, the risk applies "over the subject's lifespan".
   */
  public when?: (fhir.Period|fhir.Range)|undefined;
  /**
   * Internal flag to properly serialize choice-type element RiskAssessment.prediction.when[x]
   */
  protected static readonly _fts_whenIsChoice:true = true;
  /**
   * Additional information explaining the basis for the prediction.
   */
  public rationale?: fhir.FhirString|undefined;
  /**
   * Default constructor for RiskAssessmentPrediction - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<RiskAssessmentPredictionArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['outcome']) { this.outcome = new fhir.CodeableConcept(source.outcome); }
    if (source['probability']) { this.probability = source.probability; }
    else if (source['probabilityDecimal']) { this.probability = new fhir.FhirDecimal({value: source.probabilityDecimal}); }
    else if (source['probabilityRange']) { this.probability = new fhir.Range(source.probabilityRange); }
    if (source['qualitativeRisk']) { this.qualitativeRisk = new fhir.CodeableConcept(source.qualitativeRisk); }
    if (source['relativeRisk']) { this.relativeRisk = new fhir.FhirDecimal({value: source.relativeRisk}); }
    if (source['_relativeRisk']) {
      if (this.relativeRisk) { this.relativeRisk.addExtendedProperties(source._relativeRisk!); }
      else { this.relativeRisk = new fhir.FhirDecimal(source._relativeRisk as Partial<fhir.FhirDecimalArgs>); }
    }
    if (source['when']) { this.when = source.when; }
    else if (source['whenPeriod']) { this.when = new fhir.Period(source.whenPeriod); }
    else if (source['whenRange']) { this.when = new fhir.Range(source.whenRange); }
    if (source['rationale']) { this.rationale = new fhir.FhirString({value: source.rationale}); }
    if (source['_rationale']) {
      if (this.rationale) { this.rationale.addExtendedProperties(source._rationale!); }
      else { this.rationale = new fhir.FhirString(source._rationale as Partial<fhir.FhirStringArgs>); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(expression:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(expression);
    if (expression === '') { expression = 'RiskAssessment.prediction' }
    if (this["outcome"]) { issues.push(...this.outcome.doModelValidation(expression+'.outcome')); }
    if (this["qualitativeRisk"]) { issues.push(...this.qualitativeRisk.doModelValidation(expression+'.qualitativeRisk')); }
    if (this["relativeRisk"]) { issues.push(...this.relativeRisk.doModelValidation(expression+'.relativeRisk')); }
    if (this["rationale"]) { issues.push(...this.rationale.doModelValidation(expression+'.rationale')); }
    return issues;
  }
}
/**
 * Valid arguments for the RiskAssessment type.
 */
export interface RiskAssessmentArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "RiskAssessment"|undefined;
  /**
   * Business identifier assigned to the risk assessment.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * A reference to the request that is fulfilled by this risk assessment.
   */
  basedOn?: fhir.ReferenceArgs|undefined;
  /**
   * A reference to a resource that this risk assessment is part of, such as a Procedure.
   */
  parent?: fhir.ReferenceArgs|undefined;
  /**
   * The status of the RiskAssessment, using the same statuses as an Observation.
   */
  status: fhir.FhirCode<ObservationStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: RiskAssessment.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * The algorithm, process or mechanism used to evaluate the risk.
   */
  method?: fhir.CodeableConceptArgs|undefined;
  /**
   * The type of the risk assessment performed.
   */
  code?: fhir.CodeableConceptArgs|undefined;
  /**
   * The patient or group the risk assessment applies to.
   */
  subject: fhir.ReferenceArgs|null;
  /**
   * The encounter where the assessment was performed.
   */
  encounter?: fhir.ReferenceArgs|undefined;
  /**
   * The date (and possibly time) the risk assessment was performed.
   */
  occurrence?: fhir.FhirDateTime|fhir.Period|undefined;
  /**
   * The date (and possibly time) the risk assessment was performed.
   */
  occurrenceDateTime?: fhir.FhirDateTime|string|undefined;
  /**
   * The date (and possibly time) the risk assessment was performed.
   */
  occurrencePeriod?: fhir.PeriodArgs|undefined;
  /**
   * For assessments or prognosis specific to a particular condition, indicates the condition being assessed.
   */
  condition?: fhir.ReferenceArgs|undefined;
  /**
   * The provider or software application that performed the assessment.
   */
  performer?: fhir.ReferenceArgs|undefined;
  /**
   * The reason the risk assessment was performed.
   */
  reasonCode?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Resources supporting the reason the risk assessment was performed.
   */
  reasonReference?: fhir.ReferenceArgs[]|undefined;
  /**
   * Indicates the source data considered as part of the assessment (for example, FamilyHistory, Observations, Procedures, Conditions, etc.).
   */
  basis?: fhir.ReferenceArgs[]|undefined;
  /**
   * Multiple repetitions can be used to identify the same type of outcome in different timeframes as well as different types of outcomes.
   */
  prediction?: fhir.RiskAssessmentPredictionArgs[]|undefined;
  /**
   * A description of the steps that might be taken to reduce the identified risk(s).
   */
  mitigation?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: RiskAssessment.mitigation
   */
  _mitigation?:fhir.FhirElementArgs;
  /**
   * Additional comments about the risk assessment.
   */
  note?: fhir.AnnotationArgs[]|undefined;
}

/**
 * An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome.
 */
export class RiskAssessment extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'RiskAssessment';
  /**
   * Resource Type Name
   */
  public override resourceType: "RiskAssessment";
  /**
   * Business identifier assigned to the risk assessment.
   */
  public identifier: fhir.Identifier[];
  /**
   * A reference to the request that is fulfilled by this risk assessment.
   */
  public basedOn?: fhir.Reference|undefined;
  /**
   * A reference to a resource that this risk assessment is part of, such as a Procedure.
   */
  public parent?: fhir.Reference|undefined;
  /**
   * The status of the RiskAssessment, using the same statuses as an Observation.
   */
  public status: fhir.FhirCode<ObservationStatusCodeType>|null;
  /**
   * The algorithm, process or mechanism used to evaluate the risk.
   */
  public method?: fhir.CodeableConcept|undefined;
  /**
   * The type of the risk assessment performed.
   */
  public code?: fhir.CodeableConcept|undefined;
  /**
   * The patient or group the risk assessment applies to.
   */
  public subject: fhir.Reference|null;
  /**
   * The encounter where the assessment was performed.
   */
  public encounter?: fhir.Reference|undefined;
  /**
   * The date (and possibly time) the risk assessment was performed.
   */
  public occurrence?: (fhir.FhirDateTime|fhir.Period)|undefined;
  /**
   * Internal flag to properly serialize choice-type element RiskAssessment.occurrence[x]
   */
  protected static readonly _fts_occurrenceIsChoice:true = true;
  /**
   * For assessments or prognosis specific to a particular condition, indicates the condition being assessed.
   */
  public condition?: fhir.Reference|undefined;
  /**
   * The provider or software application that performed the assessment.
   */
  public performer?: fhir.Reference|undefined;
  /**
   * The reason the risk assessment was performed.
   */
  public reasonCode: fhir.CodeableConcept[];
  /**
   * Resources supporting the reason the risk assessment was performed.
   */
  public reasonReference: fhir.Reference[];
  /**
   * Indicates the source data considered as part of the assessment (for example, FamilyHistory, Observations, Procedures, Conditions, etc.).
   */
  public basis: fhir.Reference[];
  /**
   * Multiple repetitions can be used to identify the same type of outcome in different timeframes as well as different types of outcomes.
   */
  public prediction: fhir.RiskAssessmentPrediction[];
  /**
   * A description of the steps that might be taken to reduce the identified risk(s).
   */
  public mitigation?: fhir.FhirString|undefined;
  /**
   * Additional comments about the risk assessment.
   */
  public note: fhir.Annotation[];
  /**
   * Default constructor for RiskAssessment - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<RiskAssessmentArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'RiskAssessment';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['basedOn']) { this.basedOn = new fhir.Reference(source.basedOn); }
    if (source['parent']) { this.parent = new fhir.Reference(source.parent); }
    if (source['status']) { this.status = new fhir.FhirCode<ObservationStatusCodeType>({value: source.status}); }
    else { this.status = null; }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<ObservationStatusCodeType>(source._status as Partial<fhir.FhirCode>); }
    }
    if (source['method']) { this.method = new fhir.CodeableConcept(source.method); }
    if (source['code']) { this.code = new fhir.CodeableConcept(source.code); }
    if (source['subject']) { this.subject = new fhir.Reference(source.subject); }
    else { this.subject = null; }
    if (source['encounter']) { this.encounter = new fhir.Reference(source.encounter); }
    if (source['occurrence']) { this.occurrence = source.occurrence; }
    else if (source['occurrenceDateTime']) { this.occurrence = new fhir.FhirDateTime({value: source.occurrenceDateTime}); }
    else if (source['occurrencePeriod']) { this.occurrence = new fhir.Period(source.occurrencePeriod); }
    if (source['condition']) { this.condition = new fhir.Reference(source.condition); }
    if (source['performer']) { this.performer = new fhir.Reference(source.performer); }
    if (source['reasonCode']) { this.reasonCode = source.reasonCode.map((x) => new fhir.CodeableConcept(x)); }
    else { this.reasonCode = []; }
    if (source['reasonReference']) { this.reasonReference = source.reasonReference.map((x) => new fhir.Reference(x)); }
    else { this.reasonReference = []; }
    if (source['basis']) { this.basis = source.basis.map((x) => new fhir.Reference(x)); }
    else { this.basis = []; }
    if (source['prediction']) { this.prediction = source.prediction.map((x) => new fhir.RiskAssessmentPrediction(x)); }
    else { this.prediction = []; }
    if (source['mitigation']) { this.mitigation = new fhir.FhirString({value: source.mitigation}); }
    if (source['_mitigation']) {
      if (this.mitigation) { this.mitigation.addExtendedProperties(source._mitigation!); }
      else { this.mitigation = new fhir.FhirString(source._mitigation as Partial<fhir.FhirStringArgs>); }
    }
    if (source['note']) { this.note = source.note.map((x) => new fhir.Annotation(x)); }
    else { this.note = []; }
  }
  /**
   * Required-bound Value Set for status (RiskAssessment.status)
   */
  public static get statusRequiredCodes() {
    return ObservationStatusCodes;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(expression:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(expression);
    if (expression === '') { expression = 'RiskAssessment' }
    if (!this['resourceType']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property resourceType fhir: RiskAssessment.resourceType:"RiskAssessment"', expression: [expression] });
    }
    if (this["identifier"]) { this.identifier.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.identifier[${i}]`)); }) }
    if (this["basedOn"]) { issues.push(...this.basedOn.doModelValidation(expression+'.basedOn')); }
    if (this["parent"]) { issues.push(...this.parent.doModelValidation(expression+'.parent')); }
    if (!this['status']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property status fhir: RiskAssessment.status:code', expression: [expression] });
    }
    if (this['status'] && (!Object.values(ObservationStatusCodes).includes(this.status.value as any))) {
      issues.push({ severity: 'error', code: 'code-invalid', diagnostics: 'Invalid code property status fhir: RiskAssessment.status:code Required binding to: ObservationStatus', expression: [expression] });
    }
    if (this["status"]) { issues.push(...this.status.doModelValidation(expression+'.status')); }
    if (this["method"]) { issues.push(...this.method.doModelValidation(expression+'.method')); }
    if (this["code"]) { issues.push(...this.code.doModelValidation(expression+'.code')); }
    if (!this['subject']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property subject fhir: RiskAssessment.subject:Reference', expression: [expression] });
    }
    if (this["subject"]) { issues.push(...this.subject.doModelValidation(expression+'.subject')); }
    if (this["encounter"]) { issues.push(...this.encounter.doModelValidation(expression+'.encounter')); }
    if (this["condition"]) { issues.push(...this.condition.doModelValidation(expression+'.condition')); }
    if (this["performer"]) { issues.push(...this.performer.doModelValidation(expression+'.performer')); }
    if (this["reasonCode"]) { this.reasonCode.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.reasonCode[${i}]`)); }) }
    if (this["reasonReference"]) { this.reasonReference.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.reasonReference[${i}]`)); }) }
    if (this["basis"]) { this.basis.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.basis[${i}]`)); }) }
    if (this["prediction"]) { this.prediction.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.prediction[${i}]`)); }) }
    if (this["mitigation"]) { issues.push(...this.mitigation.doModelValidation(expression+'.mitigation')); }
    if (this["note"]) { this.note.forEach((x,i) => { issues.push(...x.doModelValidation(expression+`.note[${i}]`)); }) }
    return issues;
  }
}
