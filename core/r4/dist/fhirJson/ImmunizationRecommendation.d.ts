import * as fhir from '../fhirJson.js';
/**
 * Vaccine date recommendations.  For example, earliest date to administer, latest date to administer, etc.
 */
export interface ImmunizationRecommendationRecommendationDateCriterion extends fhir.BackboneElement {
    /**
     * Date classification of recommendation.  For example, earliest date to give, latest date to give, etc.
     */
    code: fhir.CodeableConcept | null;
    /**
     * The date whose meaning is specified by dateCriterion.code.
     */
    value: string | null;
    /**
     * Extended properties for primitive element: ImmunizationRecommendation.recommendation.dateCriterion.value
     */
    _value?: fhir.FhirElement;
}
/**
 * Vaccine administration recommendations.
 */
export interface ImmunizationRecommendationRecommendation extends fhir.BackboneElement {
    /**
     * Vaccine(s) or vaccine group that pertain to the recommendation.
     */
    vaccineCode?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * The targeted disease for the recommendation.
     */
    targetDisease?: fhir.CodeableConcept | undefined;
    /**
     * Vaccine(s) which should not be used to fulfill the recommendation.
     */
    contraindicatedVaccineCode?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Indicates the patient status with respect to the path to immunity for the target disease.
     */
    forecastStatus: fhir.CodeableConcept | null;
    /**
     * The reason for the assigned forecast status.
     */
    forecastReason?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Vaccine date recommendations.  For example, earliest date to administer, latest date to administer, etc.
     */
    dateCriterion?: (fhir.ImmunizationRecommendationRecommendationDateCriterion | null)[] | undefined;
    /**
     * Contains the description about the protocol under which the vaccine was administered.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: ImmunizationRecommendation.recommendation.description
     */
    _description?: fhir.FhirElement;
    /**
     * One possible path to achieve presumed immunity against a disease - within the context of an authority.
     */
    series?: string | undefined;
    /**
     * Extended properties for primitive element: ImmunizationRecommendation.recommendation.series
     */
    _series?: fhir.FhirElement;
    /**
     * The use of an integer is prefered if known. A string should only be used in cases where an interger is not available (such as when documenting a recurring booster dose).
     */
    doseNumberPositiveInt?: number | undefined;
    /**
     * Extended properties for primitive element: ImmunizationRecommendation.recommendation.doseNumber[x]
     */
    _doseNumberPositiveInt?: fhir.FhirElement;
    /**
     * The use of an integer is prefered if known. A string should only be used in cases where an interger is not available (such as when documenting a recurring booster dose).
     */
    doseNumberString?: string | undefined;
    /**
     * Extended properties for primitive element: ImmunizationRecommendation.recommendation.doseNumber[x]
     */
    _doseNumberString?: fhir.FhirElement;
    /**
     * The use of an integer is prefered if known. A string should only be used in cases where an interger is not available (such as when documenting a recurring booster dose).
     */
    seriesDosesPositiveInt?: number | undefined;
    /**
     * Extended properties for primitive element: ImmunizationRecommendation.recommendation.seriesDoses[x]
     */
    _seriesDosesPositiveInt?: fhir.FhirElement;
    /**
     * The use of an integer is prefered if known. A string should only be used in cases where an interger is not available (such as when documenting a recurring booster dose).
     */
    seriesDosesString?: string | undefined;
    /**
     * Extended properties for primitive element: ImmunizationRecommendation.recommendation.seriesDoses[x]
     */
    _seriesDosesString?: fhir.FhirElement;
    /**
     * Immunization event history and/or evaluation that supports the status and recommendation.
     */
    supportingImmunization?: (fhir.Reference | null)[] | undefined;
    /**
     * Patient Information that supports the status and recommendation.  This includes patient observations, adverse reactions and allergy/intolerance information.
     */
    supportingPatientInformation?: (fhir.Reference | null)[] | undefined;
}
/**
 * A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification.
 */
export interface ImmunizationRecommendation extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "ImmunizationRecommendation" | null;
    /**
     * A unique identifier assigned to this particular recommendation record.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * The patient the recommendation(s) are for.
     */
    patient: fhir.Reference | null;
    /**
     * The date the immunization recommendation(s) were created.
     */
    date: string | null;
    /**
     * Extended properties for primitive element: ImmunizationRecommendation.date
     */
    _date?: fhir.FhirElement;
    /**
     * Indicates the authority who published the protocol (e.g. ACIP).
     */
    authority?: fhir.Reference | undefined;
    /**
     * Vaccine administration recommendations.
     */
    recommendation: (fhir.ImmunizationRecommendationRecommendation | null)[] | null;
}
//# sourceMappingURL=ImmunizationRecommendation.d.ts.map