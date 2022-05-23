import * as fhir from '../fhirJson.js';
/**
 * Multiple repetitions can be used to identify the same type of outcome in different timeframes as well as different types of outcomes.
 */
export interface RiskAssessmentPrediction extends fhir.BackboneElement {
    /**
     * One of the potential outcomes for the patient (e.g. remission, death,  a particular condition).
     */
    outcome?: fhir.CodeableConcept | undefined;
    /**
     * If range is used, it represents the lower and upper bounds of certainty; e.g. 40-60%  Decimal values are expressed as percentages as well (max = 100).
     */
    probabilityDecimal?: number | undefined;
    /**
     * Extended properties for primitive element: RiskAssessment.prediction.probability[x]
     */
    _probabilityDecimal?: fhir.FhirElement;
    /**
     * If range is used, it represents the lower and upper bounds of certainty; e.g. 40-60%  Decimal values are expressed as percentages as well (max = 100).
     */
    probabilityRange?: fhir.Range | undefined;
    /**
     * Indicates how likely the outcome is (in the specified timeframe), expressed as a qualitative value (e.g. low, medium, or high).
     */
    qualitativeRisk?: fhir.CodeableConcept | undefined;
    /**
     * Indicates the risk for this particular subject (with their specific characteristics) divided by the risk of the population in general.  (Numbers greater than 1 = higher risk than the population, numbers less than 1 = lower risk.).
     */
    relativeRisk?: number | undefined;
    /**
     * Extended properties for primitive element: RiskAssessment.prediction.relativeRisk
     */
    _relativeRisk?: fhir.FhirElement;
    /**
     * If not specified, the risk applies "over the subject's lifespan".
     */
    whenPeriod?: fhir.Period | undefined;
    /**
     * If not specified, the risk applies "over the subject's lifespan".
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
    resourceType: "RiskAssessment";
    /**
     * Business identifier assigned to the risk assessment.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * A reference to the request that is fulfilled by this risk assessment.
     */
    basedOn?: fhir.Reference | undefined;
    /**
     * A reference to a resource that this risk assessment is part of, such as a Procedure.
     */
    parent?: fhir.Reference | undefined;
    /**
     * The status of the RiskAssessment, using the same statuses as an Observation.
     */
    status: 'amended' | 'cancelled' | 'corrected' | 'entered-in-error' | 'final' | 'preliminary' | 'registered' | 'unknown' | null;
    /**
     * Extended properties for primitive element: RiskAssessment.status
     */
    _status?: fhir.FhirElement;
    /**
     * The algorithm, process or mechanism used to evaluate the risk.
     */
    method?: fhir.CodeableConcept | undefined;
    /**
     * The type of the risk assessment performed.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * The patient or group the risk assessment applies to.
     */
    subject: fhir.Reference | null;
    /**
     * The encounter where the assessment was performed.
     */
    encounter?: fhir.Reference | undefined;
    /**
     * The date (and possibly time) the risk assessment was performed.
     */
    occurrenceDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: RiskAssessment.occurrence[x]
     */
    _occurrenceDateTime?: fhir.FhirElement;
    /**
     * The date (and possibly time) the risk assessment was performed.
     */
    occurrencePeriod?: fhir.Period | undefined;
    /**
     * For assessments or prognosis specific to a particular condition, indicates the condition being assessed.
     */
    condition?: fhir.Reference | undefined;
    /**
     * The provider or software application that performed the assessment.
     */
    performer?: fhir.Reference | undefined;
    /**
     * The reason the risk assessment was performed.
     */
    reasonCode?: fhir.CodeableConcept[] | undefined;
    /**
     * Resources supporting the reason the risk assessment was performed.
     */
    reasonReference?: fhir.Reference[] | undefined;
    /**
     * Indicates the source data considered as part of the assessment (for example, FamilyHistory, Observations, Procedures, Conditions, etc.).
     */
    basis?: fhir.Reference[] | undefined;
    /**
     * Multiple repetitions can be used to identify the same type of outcome in different timeframes as well as different types of outcomes.
     */
    prediction?: fhir.RiskAssessmentPrediction[] | undefined;
    /**
     * A description of the steps that might be taken to reduce the identified risk(s).
     */
    mitigation?: string | undefined;
    /**
     * Extended properties for primitive element: RiskAssessment.mitigation
     */
    _mitigation?: fhir.FhirElement;
    /**
     * Additional comments about the risk assessment.
     */
    note?: fhir.Annotation[] | undefined;
}
//# sourceMappingURL=RiskAssessment.d.ts.map