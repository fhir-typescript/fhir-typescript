// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: ImmunizationRecommendation

import * as fhir from '../fhir.js';

// @ts-ignore
import { ImmunizationRecommendationDateCriterionCodings, ImmunizationRecommendationDateCriterionCodingType,} from '../fhirValueSets/ImmunizationRecommendationDateCriterionCodings.js';
// @ts-ignore
import { ImmunizationRecommendationDateCriterionCodes,  ImmunizationRecommendationDateCriterionCodeType } from '../fhirValueSets/ImmunizationRecommendationDateCriterionCodes.js';
// @ts-ignore
import { VaccineCodeCodings, VaccineCodeCodingType,} from '../fhirValueSets/VaccineCodeCodings.js';
// @ts-ignore
import { VaccineCodeCodes,  VaccineCodeCodeType } from '../fhirValueSets/VaccineCodeCodes.js';
// @ts-ignore
import { ImmunizationRecommendationTargetDiseaseCodings, ImmunizationRecommendationTargetDiseaseCodingType,} from '../fhirValueSets/ImmunizationRecommendationTargetDiseaseCodings.js';
// @ts-ignore
import { ImmunizationRecommendationTargetDiseaseCodes,  ImmunizationRecommendationTargetDiseaseCodeType } from '../fhirValueSets/ImmunizationRecommendationTargetDiseaseCodes.js';
// @ts-ignore
import { ImmunizationRecommendationStatusCodings, ImmunizationRecommendationStatusCodingType,} from '../fhirValueSets/ImmunizationRecommendationStatusCodings.js';
// @ts-ignore
import { ImmunizationRecommendationStatusCodes,  ImmunizationRecommendationStatusCodeType } from '../fhirValueSets/ImmunizationRecommendationStatusCodes.js';
// @ts-ignore
import { ImmunizationRecommendationReasonCodings, ImmunizationRecommendationReasonCodingType,} from '../fhirValueSets/ImmunizationRecommendationReasonCodings.js';
// @ts-ignore
import { ImmunizationRecommendationReasonCodes,  ImmunizationRecommendationReasonCodeType } from '../fhirValueSets/ImmunizationRecommendationReasonCodes.js';
// @ts-ignore
import { IssueTypeCodes } from '../fhirValueSets/IssueTypeCodes.js';
// @ts-ignore
import { IssueSeverityCodes } from '../fhirValueSets/IssueSeverityCodes.js';
/**
 * Valid arguments for the ImmunizationRecommendationRecommendationDateCriterion type.
 */
export interface ImmunizationRecommendationRecommendationDateCriterionArgs extends fhir.BackboneElementArgs {
  /**
   * Date classification of recommendation.  For example, earliest date to give, latest date to give, etc.
   */
  code: fhir.CodeableConceptArgs|null;
  /**
   * The date whose meaning is specified by dateCriterion.code.
   */
  value: fhir.FhirDateTime|string|undefined;
}

/**
 * Vaccine date recommendations.  For example, earliest date to administer, latest date to administer, etc.
 */
export class ImmunizationRecommendationRecommendationDateCriterion extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static readonly _fts_dataType:string = 'ImmunizationRecommendationRecommendationDateCriterion';
  /**
   * Date classification of recommendation.  For example, earliest date to give, latest date to give, etc.
   */
  public code: fhir.CodeableConcept|null;
  /**
   * The date whose meaning is specified by dateCriterion.code.
   */
  public value: fhir.FhirDateTime|null;
  /**
   * Default constructor for ImmunizationRecommendationRecommendationDateCriterion - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ImmunizationRecommendationRecommendationDateCriterionArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['code']) { this.code = new fhir.CodeableConcept(source.code); }
    else { this.code = null; }
    if (source['value']) { this.value = new fhir.FhirDateTime({value: source.value}); }
    else { this.value = null; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (!this['code']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property code:fhir.CodeableConcept fhir: ImmunizationRecommendation.recommendation.dateCriterion.code:CodeableConcept', }));
    }
    if (this["code"]) { outcome.issue!.push(...this.code.doModelValidation().issue!); }
    if (!this['value']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property value:fhir.FhirDateTime fhir: ImmunizationRecommendation.recommendation.dateCriterion.value:dateTime', }));
    }
    if (this["value"]) { outcome.issue!.push(...this.value.doModelValidation().issue!); }
    return outcome;
  }
}
/**
 * Valid arguments for the ImmunizationRecommendationRecommendation type.
 */
export interface ImmunizationRecommendationRecommendationArgs extends fhir.BackboneElementArgs {
  /**
   * Vaccine(s) or vaccine group that pertain to the recommendation.
   */
  vaccineCode?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * The targeted disease for the recommendation.
   */
  targetDisease?: fhir.CodeableConceptArgs|undefined;
  /**
   * Vaccine(s) which should not be used to fulfill the recommendation.
   */
  contraindicatedVaccineCode?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Indicates the patient status with respect to the path to immunity for the target disease.
   */
  forecastStatus: fhir.CodeableConceptArgs|null;
  /**
   * The reason for the assigned forecast status.
   */
  forecastReason?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Vaccine date recommendations.  For example, earliest date to administer, latest date to administer, etc.
   */
  dateCriterion?: fhir.ImmunizationRecommendationRecommendationDateCriterionArgs[]|undefined;
  /**
   * Contains the description about the protocol under which the vaccine was administered.
   */
  description?: fhir.FhirString|string|undefined;
  /**
   * One possible path to achieve presumed immunity against a disease - within the context of an authority.
   */
  series?: fhir.FhirString|string|undefined;
  /**
   * The use of an integer is prefered if known. A string should only be used in cases where an interger is not available (such as when documenting a recurring booster dose).
   */
  doseNumber?: fhir.FhirPositiveInt|fhir.FhirString|undefined;
  /**
   * The use of an integer is prefered if known. A string should only be used in cases where an interger is not available (such as when documenting a recurring booster dose).
   */
  doseNumberPositiveInt?: fhir.FhirPositiveInt|number|undefined;
  /**
   * The use of an integer is prefered if known. A string should only be used in cases where an interger is not available (such as when documenting a recurring booster dose).
   */
  doseNumberString?: fhir.FhirString|string|undefined;
  /**
   * The use of an integer is prefered if known. A string should only be used in cases where an interger is not available (such as when documenting a recurring booster dose).
   */
  seriesDoses?: fhir.FhirPositiveInt|fhir.FhirString|undefined;
  /**
   * The use of an integer is prefered if known. A string should only be used in cases where an interger is not available (such as when documenting a recurring booster dose).
   */
  seriesDosesPositiveInt?: fhir.FhirPositiveInt|number|undefined;
  /**
   * The use of an integer is prefered if known. A string should only be used in cases where an interger is not available (such as when documenting a recurring booster dose).
   */
  seriesDosesString?: fhir.FhirString|string|undefined;
  /**
   * Immunization event history and/or evaluation that supports the status and recommendation.
   */
  supportingImmunization?: fhir.ReferenceArgs[]|undefined;
  /**
   * Patient Information that supports the status and recommendation.  This includes patient observations, adverse reactions and allergy/intolerance information.
   */
  supportingPatientInformation?: fhir.ReferenceArgs[]|undefined;
}

/**
 * Vaccine administration recommendations.
 */
export class ImmunizationRecommendationRecommendation extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static readonly _fts_dataType:string = 'ImmunizationRecommendationRecommendation';
  /**
   * Vaccine(s) or vaccine group that pertain to the recommendation.
   */
  public vaccineCode?: fhir.CodeableConcept[];
  /**
   * The targeted disease for the recommendation.
   */
  public targetDisease?: fhir.CodeableConcept|undefined;
  /**
   * Vaccine(s) which should not be used to fulfill the recommendation.
   */
  public contraindicatedVaccineCode?: fhir.CodeableConcept[];
  /**
   * Indicates the patient status with respect to the path to immunity for the target disease.
   */
  public forecastStatus: fhir.CodeableConcept|null;
  /**
   * The reason for the assigned forecast status.
   */
  public forecastReason?: fhir.CodeableConcept[];
  /**
   * Vaccine date recommendations.  For example, earliest date to administer, latest date to administer, etc.
   */
  public dateCriterion?: fhir.ImmunizationRecommendationRecommendationDateCriterion[];
  /**
   * Contains the description about the protocol under which the vaccine was administered.
   */
  public description?: fhir.FhirString|undefined;
  /**
   * One possible path to achieve presumed immunity against a disease - within the context of an authority.
   */
  public series?: fhir.FhirString|undefined;
  /**
   * The use of an integer is prefered if known. A string should only be used in cases where an interger is not available (such as when documenting a recurring booster dose).
   */
  public doseNumber?: (fhir.FhirPositiveInt|fhir.FhirString)|undefined;
  /**
   * Internal flag to properly serialize choice-type element ImmunizationRecommendation.recommendation.doseNumber[x]
   */
  protected static readonly _fts_doseNumberIsChoice:true = true;
  /**
   * The use of an integer is prefered if known. A string should only be used in cases where an interger is not available (such as when documenting a recurring booster dose).
   */
  public seriesDoses?: (fhir.FhirPositiveInt|fhir.FhirString)|undefined;
  /**
   * Internal flag to properly serialize choice-type element ImmunizationRecommendation.recommendation.seriesDoses[x]
   */
  protected static readonly _fts_seriesDosesIsChoice:true = true;
  /**
   * Immunization event history and/or evaluation that supports the status and recommendation.
   */
  public supportingImmunization?: fhir.Reference[];
  /**
   * Patient Information that supports the status and recommendation.  This includes patient observations, adverse reactions and allergy/intolerance information.
   */
  public supportingPatientInformation?: fhir.Reference[];
  /**
   * Default constructor for ImmunizationRecommendationRecommendation - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ImmunizationRecommendationRecommendationArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['vaccineCode']) { this.vaccineCode = source.vaccineCode.map((x) => new fhir.CodeableConcept(x)); }
    else { this.vaccineCode = []; }
    if (source['targetDisease']) { this.targetDisease = new fhir.CodeableConcept(source.targetDisease); }
    if (source['contraindicatedVaccineCode']) { this.contraindicatedVaccineCode = source.contraindicatedVaccineCode.map((x) => new fhir.CodeableConcept(x)); }
    else { this.contraindicatedVaccineCode = []; }
    if (source['forecastStatus']) { this.forecastStatus = new fhir.CodeableConcept(source.forecastStatus); }
    else { this.forecastStatus = null; }
    if (source['forecastReason']) { this.forecastReason = source.forecastReason.map((x) => new fhir.CodeableConcept(x)); }
    else { this.forecastReason = []; }
    if (source['dateCriterion']) { this.dateCriterion = source.dateCriterion.map((x) => new fhir.ImmunizationRecommendationRecommendationDateCriterion(x)); }
    else { this.dateCriterion = []; }
    if (source['description']) { this.description = new fhir.FhirString({value: source.description}); }
    if (source['series']) { this.series = new fhir.FhirString({value: source.series}); }
    if (source['doseNumber']) { this.doseNumber = source.doseNumber; }
    else if (source['doseNumberPositiveInt']) { this.doseNumber = new fhir.FhirPositiveInt({value: source.doseNumberPositiveInt}); }
    else if (source['doseNumberString']) { this.doseNumber = new fhir.FhirString({value: source.doseNumberString}); }
    if (source['seriesDoses']) { this.seriesDoses = source.seriesDoses; }
    else if (source['seriesDosesPositiveInt']) { this.seriesDoses = new fhir.FhirPositiveInt({value: source.seriesDosesPositiveInt}); }
    else if (source['seriesDosesString']) { this.seriesDoses = new fhir.FhirString({value: source.seriesDosesString}); }
    if (source['supportingImmunization']) { this.supportingImmunization = source.supportingImmunization.map((x) => new fhir.Reference(x)); }
    else { this.supportingImmunization = []; }
    if (source['supportingPatientInformation']) { this.supportingPatientInformation = source.supportingPatientInformation.map((x) => new fhir.Reference(x)); }
    else { this.supportingPatientInformation = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (this["vaccineCode"]) { this.vaccineCode.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["targetDisease"]) { outcome.issue!.push(...this.targetDisease.doModelValidation().issue!); }
    if (this["contraindicatedVaccineCode"]) { this.contraindicatedVaccineCode.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (!this['forecastStatus']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property forecastStatus:fhir.CodeableConcept fhir: ImmunizationRecommendation.recommendation.forecastStatus:CodeableConcept', }));
    }
    if (this["forecastStatus"]) { outcome.issue!.push(...this.forecastStatus.doModelValidation().issue!); }
    if (this["forecastReason"]) { this.forecastReason.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["dateCriterion"]) { this.dateCriterion.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["description"]) { outcome.issue!.push(...this.description.doModelValidation().issue!); }
    if (this["series"]) { outcome.issue!.push(...this.series.doModelValidation().issue!); }
    if (this["supportingImmunization"]) { this.supportingImmunization.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (this["supportingPatientInformation"]) { this.supportingPatientInformation.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    return outcome;
  }
}
/**
 * Valid arguments for the ImmunizationRecommendation type.
 */
export interface ImmunizationRecommendationArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "ImmunizationRecommendation"|undefined;
  /**
   * A unique identifier assigned to this particular recommendation record.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * The patient the recommendation(s) are for.
   */
  patient: fhir.ReferenceArgs|null;
  /**
   * The date the immunization recommendation(s) were created.
   */
  date: fhir.FhirDateTime|string|undefined;
  /**
   * Indicates the authority who published the protocol (e.g. ACIP).
   */
  authority?: fhir.ReferenceArgs|undefined;
  /**
   * Vaccine administration recommendations.
   */
  recommendation: fhir.ImmunizationRecommendationRecommendationArgs[]|null;
}

/**
 * A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification.
 */
export class ImmunizationRecommendation extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static readonly _fts_dataType:string = 'ImmunizationRecommendation';
  /**
   * Resource Type Name
   */
  public resourceType: "ImmunizationRecommendation";
  /**
   * A unique identifier assigned to this particular recommendation record.
   */
  public identifier?: fhir.Identifier[];
  /**
   * The patient the recommendation(s) are for.
   */
  public patient: fhir.Reference|null;
  /**
   * The date the immunization recommendation(s) were created.
   */
  public date: fhir.FhirDateTime|null;
  /**
   * Indicates the authority who published the protocol (e.g. ACIP).
   */
  public authority?: fhir.Reference|undefined;
  /**
   * Vaccine administration recommendations.
   */
  public recommendation: fhir.ImmunizationRecommendationRecommendation[];
  /**
   * Default constructor for ImmunizationRecommendation - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ImmunizationRecommendationArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'ImmunizationRecommendation';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['patient']) { this.patient = new fhir.Reference(source.patient); }
    else { this.patient = null; }
    if (source['date']) { this.date = new fhir.FhirDateTime({value: source.date}); }
    else { this.date = null; }
    if (source['authority']) { this.authority = new fhir.Reference(source.authority); }
    if (source['recommendation']) { this.recommendation = source.recommendation.map((x) => new fhir.ImmunizationRecommendationRecommendation(x)); }
    else { this.recommendation = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.OperationOutcome {
    var outcome:fhir.OperationOutcome = super.doModelValidation();
    if (!this['resourceType']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property resourceType:"ImmunizationRecommendation" fhir: ImmunizationRecommendation.resourceType:"ImmunizationRecommendation"', }));
    }
    if (this["identifier"]) { this.identifier.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    if (!this['patient']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property patient:fhir.Reference fhir: ImmunizationRecommendation.patient:Reference', }));
    }
    if (this["patient"]) { outcome.issue!.push(...this.patient.doModelValidation().issue!); }
    if (!this['date']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property date:fhir.FhirDateTime fhir: ImmunizationRecommendation.date:dateTime', }));
    }
    if (this["date"]) { outcome.issue!.push(...this.date.doModelValidation().issue!); }
    if (this["authority"]) { outcome.issue!.push(...this.authority.doModelValidation().issue!); }
    if (!this['recommendation']) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property recommendation:fhir.ImmunizationRecommendationRecommendation[] fhir: ImmunizationRecommendation.recommendation:recommendation', }));
    } else if (!Array.isArray(this.recommendation)) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.StructuralIssue,  diagnostics: 'Found scalar in array property recommendation:fhir.ImmunizationRecommendationRecommendation[] fhir: ImmunizationRecommendation.recommendation:recommendation', }));
    } else if (this.recommendation.length === 0) {
      outcome.issue!.push(new fhir.OperationOutcomeIssue({ severity: IssueSeverityCodes.Error, code: IssueTypeCodes.RequiredElementMissing,  diagnostics: 'Missing required property recommendation:fhir.ImmunizationRecommendationRecommendation[] fhir: ImmunizationRecommendation.recommendation:recommendation', }));
    }
    if (this["recommendation"]) { this.recommendation.forEach((x) => { outcome.issue!.push(...x.doModelValidation().issue!); }) }
    return outcome;
  }
}