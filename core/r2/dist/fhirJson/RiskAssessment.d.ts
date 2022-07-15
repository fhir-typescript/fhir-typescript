import * as fhir from '../fhirJson.js';
/**
 * Describes the expected outcome for the subject.
 */
export interface RiskAssessmentPrediction extends fhir.BackboneElement {
    /**
     * One of the potential outcomes for the patient (e.g. remission, death,  a particular condition).
     */
    outcome: fhir.CodeableConcept | null;
    /**
     * How likely is the outcome (in the specified timeframe).
     */
    probabilityDecimal?: number | undefined;
    /**
     * Extended properties for primitive element: RiskAssessment.prediction.probability[x]
     */
    _probabilityDecimal?: fhir.FhirElement;
    /**
     * How likely is the outcome (in the specified timeframe).
     */
    probabilityRange?: fhir.Range | undefined;
    /**
     * How likely is the outcome (in the specified timeframe).
     */
    probabilityCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Absolute risk is less meaningful than relative risk.
     */
    relativeRisk?: number | undefined;
    /**
     * Extended properties for primitive element: RiskAssessment.prediction.relativeRisk
     */
    _relativeRisk?: fhir.FhirElement;
    /**
     * Indicates the period of time or age range of the subject to which the specified probability applies.
     */
    whenPeriod?: fhir.Period | undefined;
    /**
     * Indicates the period of time or age range of the subject to which the specified probability applies.
     */
    whenRange?: fhir.Range | undefined;
    /**
     * Additional information explaining the basis for the prediction.
     */
    rationale?: string | undefined;
    /**
     * Extended properties for primitive element: RiskAssessment.prediction.rationale
     */
    _rationale?: fhir.FhirElement;
}
/**
 * An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome.
 */
export interface RiskAssessment extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "RiskAssessment" | null;
    /**
     * The patient or group the risk assessment applies to.
     */
    subject?: fhir.Reference | undefined;
    /**
     * The assessment results lose validity the more time elapses from when they are first made.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: RiskAssessment.date
     */
    _date?: fhir.FhirElement;
    /**
     * For assessments or prognosis specific to a particular condition, indicates the condition being assessed.
     */
    condition?: fhir.Reference | undefined;
    /**
     * The encounter where the assessment was performed.
     */
    encounter?: fhir.Reference | undefined;
    /**
     * The provider or software application that performed the assessment.
     */
    performer?: fhir.Reference | undefined;
    /**
     * Business identifier assigned to the risk assessment.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * The method can influence the results of the assessment.
     */
    method?: fhir.CodeableConcept | undefined;
    /**
     * Indicates the source data considered as part of the assessment (FamilyHistory, Observations, Procedures, Conditions, etc.).
     */
    basis?: (fhir.Reference | null)[] | undefined;
    /**
     * Describes the expected outcome for the subject.
     */
    prediction?: (fhir.RiskAssessmentPrediction | null)[] | undefined;
    /**
     * One of the main reasons for assessing risks is to identify whether interventional steps are needed to reduce risk.
     */
    mitigation?: string | undefined;
    /**
     * Extended properties for primitive element: RiskAssessment.mitigation
     */
    _mitigation?: fhir.FhirElement;
}
//# sourceMappingURL=RiskAssessment.d.ts.map