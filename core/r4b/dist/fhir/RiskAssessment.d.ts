import * as fhir from '../fhir.js';
import { ObservationStatusCodeType } from '../fhirValueSets/ObservationStatusCodes.js';
/**
 * Valid arguments for the RiskAssessmentPrediction type.
 */
export interface RiskAssessmentPredictionArgs extends fhir.BackboneElementArgs {
    /**
     * One of the potential outcomes for the patient (e.g. remission, death,  a particular condition).
     */
    outcome?: fhir.CodeableConceptArgs | undefined;
    /**
     * If range is used, it represents the lower and upper bounds of certainty; e.g. 40-60%  Decimal values are expressed as percentages as well (max = 100).
     */
    probability?: fhir.FhirDecimal | fhir.Range | undefined;
    /**
     * If range is used, it represents the lower and upper bounds of certainty; e.g. 40-60%  Decimal values are expressed as percentages as well (max = 100).
     */
    probabilityDecimal?: fhir.FhirDecimal | number | undefined;
    /**
     * If range is used, it represents the lower and upper bounds of certainty; e.g. 40-60%  Decimal values are expressed as percentages as well (max = 100).
     */
    probabilityRange?: fhir.RangeArgs | undefined;
    /**
     * Indicates how likely the outcome is (in the specified timeframe), expressed as a qualitative value (e.g. low, medium, or high).
     */
    qualitativeRisk?: fhir.CodeableConceptArgs | undefined;
    /**
     * Indicates the risk for this particular subject (with their specific characteristics) divided by the risk of the population in general.  (Numbers greater than 1 = higher risk than the population, numbers less than 1 = lower risk.).
     */
    relativeRisk?: fhir.FhirDecimal | number | undefined;
    /**
     * Extended properties for primitive element: RiskAssessment.prediction.relativeRisk
     */
    _relativeRisk?: fhir.FhirElementArgs;
    /**
     * If not specified, the risk applies "over the subject's lifespan".
     */
    when?: fhir.Period | fhir.Range | undefined;
    /**
     * If not specified, the risk applies "over the subject's lifespan".
     */
    whenPeriod?: fhir.PeriodArgs | undefined;
    /**
     * If not specified, the risk applies "over the subject's lifespan".
     */
    whenRange?: fhir.RangeArgs | undefined;
    /**
     * Additional information explaining the basis for the prediction.
     */
    rationale?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: RiskAssessment.prediction.rationale
     */
    _rationale?: fhir.FhirElementArgs;
}
/**
 * Multiple repetitions can be used to identify the same type of outcome in different timeframes as well as different types of outcomes.
 */
export declare class RiskAssessmentPrediction extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * One of the potential outcomes for the patient (e.g. remission, death,  a particular condition).
     */
    outcome?: fhir.CodeableConcept | undefined;
    /**
     * If range is used, it represents the lower and upper bounds of certainty; e.g. 40-60%  Decimal values are expressed as percentages as well (max = 100).
     */
    probability?: (fhir.FhirDecimal | fhir.Range) | undefined;
    /**
     * Internal flag to properly serialize choice-type element RiskAssessment.prediction.probability[x]
     */
    protected static readonly _fts_probabilityIsChoice: true;
    /**
     * Indicates how likely the outcome is (in the specified timeframe), expressed as a qualitative value (e.g. low, medium, or high).
     */
    qualitativeRisk?: fhir.CodeableConcept | undefined;
    /**
     * Indicates the risk for this particular subject (with their specific characteristics) divided by the risk of the population in general.  (Numbers greater than 1 = higher risk than the population, numbers less than 1 = lower risk.).
     */
    relativeRisk?: fhir.FhirDecimal | undefined;
    /**
     * If not specified, the risk applies "over the subject's lifespan".
     */
    when?: (fhir.Period | fhir.Range) | undefined;
    /**
     * Internal flag to properly serialize choice-type element RiskAssessment.prediction.when[x]
     */
    protected static readonly _fts_whenIsChoice: true;
    /**
     * Additional information explaining the basis for the prediction.
     */
    rationale?: fhir.FhirString | undefined;
    /**
     * Default constructor for RiskAssessmentPrediction - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<RiskAssessmentPredictionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the RiskAssessment type.
 */
export interface RiskAssessmentArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "RiskAssessment" | undefined;
    /**
     * Business identifier assigned to the risk assessment.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * A reference to the request that is fulfilled by this risk assessment.
     */
    basedOn?: fhir.ReferenceArgs | undefined;
    /**
     * A reference to a resource that this risk assessment is part of, such as a Procedure.
     */
    parent?: fhir.ReferenceArgs | undefined;
    /**
     * The status of the RiskAssessment, using the same statuses as an Observation.
     */
    status: fhir.FhirCode<ObservationStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: RiskAssessment.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * The algorithm, process or mechanism used to evaluate the risk.
     */
    method?: fhir.CodeableConceptArgs | undefined;
    /**
     * The type of the risk assessment performed.
     */
    code?: fhir.CodeableConceptArgs | undefined;
    /**
     * The patient or group the risk assessment applies to.
     */
    subject: fhir.ReferenceArgs | null;
    /**
     * The encounter where the assessment was performed.
     */
    encounter?: fhir.ReferenceArgs | undefined;
    /**
     * The date (and possibly time) the risk assessment was performed.
     */
    occurrence?: fhir.FhirDateTime | fhir.Period | undefined;
    /**
     * The date (and possibly time) the risk assessment was performed.
     */
    occurrenceDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * The date (and possibly time) the risk assessment was performed.
     */
    occurrencePeriod?: fhir.PeriodArgs | undefined;
    /**
     * For assessments or prognosis specific to a particular condition, indicates the condition being assessed.
     */
    condition?: fhir.ReferenceArgs | undefined;
    /**
     * The provider or software application that performed the assessment.
     */
    performer?: fhir.ReferenceArgs | undefined;
    /**
     * The reason the risk assessment was performed.
     */
    reasonCode?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Resources supporting the reason the risk assessment was performed.
     */
    reasonReference?: fhir.ReferenceArgs[] | undefined;
    /**
     * Indicates the source data considered as part of the assessment (for example, FamilyHistory, Observations, Procedures, Conditions, etc.).
     */
    basis?: fhir.ReferenceArgs[] | undefined;
    /**
     * Multiple repetitions can be used to identify the same type of outcome in different timeframes as well as different types of outcomes.
     */
    prediction?: fhir.RiskAssessmentPredictionArgs[] | undefined;
    /**
     * A description of the steps that might be taken to reduce the identified risk(s).
     */
    mitigation?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: RiskAssessment.mitigation
     */
    _mitigation?: fhir.FhirElementArgs;
    /**
     * Additional comments about the risk assessment.
     */
    note?: fhir.AnnotationArgs[] | undefined;
}
/**
 * An assessment of the likely outcome(s) for a patient or other subject as well as the likelihood of each outcome.
 */
export declare class RiskAssessment extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "RiskAssessment";
    /**
     * Business identifier assigned to the risk assessment.
     */
    identifier: fhir.Identifier[];
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
    status: fhir.FhirCode<ObservationStatusCodeType> | null;
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
    occurrence?: (fhir.FhirDateTime | fhir.Period) | undefined;
    /**
     * Internal flag to properly serialize choice-type element RiskAssessment.occurrence[x]
     */
    protected static readonly _fts_occurrenceIsChoice: true;
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
    reasonCode: fhir.CodeableConcept[];
    /**
     * Resources supporting the reason the risk assessment was performed.
     */
    reasonReference: fhir.Reference[];
    /**
     * Indicates the source data considered as part of the assessment (for example, FamilyHistory, Observations, Procedures, Conditions, etc.).
     */
    basis: fhir.Reference[];
    /**
     * Multiple repetitions can be used to identify the same type of outcome in different timeframes as well as different types of outcomes.
     */
    prediction: fhir.RiskAssessmentPrediction[];
    /**
     * A description of the steps that might be taken to reduce the identified risk(s).
     */
    mitigation?: fhir.FhirString | undefined;
    /**
     * Additional comments about the risk assessment.
     */
    note: fhir.Annotation[];
    /**
     * Default constructor for RiskAssessment - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<RiskAssessmentArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=RiskAssessment.d.ts.map