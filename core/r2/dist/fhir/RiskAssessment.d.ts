import * as fhir from '../fhir.js';
/**
 * Valid arguments for the RiskAssessmentPrediction type.
 */
export interface RiskAssessmentPredictionArgs extends fhir.BackboneElementArgs {
    /**
     * One of the potential outcomes for the patient (e.g. remission, death,  a particular condition).
     */
    outcome: fhir.CodeableConceptArgs | null;
    /**
     * How likely is the outcome (in the specified timeframe).
     */
    probability?: fhir.FhirDecimal | fhir.Range | fhir.CodeableConcept | undefined;
    /**
     * How likely is the outcome (in the specified timeframe).
     */
    probabilityDecimal?: fhir.FhirDecimal | number | undefined;
    /**
     * How likely is the outcome (in the specified timeframe).
     */
    probabilityRange?: fhir.RangeArgs | undefined;
    /**
     * How likely is the outcome (in the specified timeframe).
     */
    probabilityCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * Absolute risk is less meaningful than relative risk.
     */
    relativeRisk?: fhir.FhirDecimal | number | undefined;
    /**
     * Extended properties for primitive element: RiskAssessment.prediction.relativeRisk
     */
    _relativeRisk?: fhir.FhirElementArgs;
    /**
     * Indicates the period of time or age range of the subject to which the specified probability applies.
     */
    when?: fhir.Period | fhir.Range | undefined;
    /**
     * Indicates the period of time or age range of the subject to which the specified probability applies.
     */
    whenPeriod?: fhir.PeriodArgs | undefined;
    /**
     * Indicates the period of time or age range of the subject to which the specified probability applies.
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
 * Describes the expected outcome for the subject.
 */
export declare class RiskAssessmentPrediction extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * One of the potential outcomes for the patient (e.g. remission, death,  a particular condition).
     */
    outcome: fhir.CodeableConcept | null;
    /**
     * How likely is the outcome (in the specified timeframe).
     */
    probability?: (fhir.FhirDecimal | fhir.Range | fhir.CodeableConcept) | undefined;
    /**
     * Internal flag to properly serialize choice-type element RiskAssessment.prediction.probability[x]
     */
    protected static readonly _fts_probabilityIsChoice: true;
    /**
     * Absolute risk is less meaningful than relative risk.
     */
    relativeRisk?: fhir.FhirDecimal | undefined;
    /**
     * Indicates the period of time or age range of the subject to which the specified probability applies.
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
     * The patient or group the risk assessment applies to.
     */
    subject?: fhir.ReferenceArgs | undefined;
    /**
     * The assessment results lose validity the more time elapses from when they are first made.
     */
    date?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: RiskAssessment.date
     */
    _date?: fhir.FhirElementArgs;
    /**
     * For assessments or prognosis specific to a particular condition, indicates the condition being assessed.
     */
    condition?: fhir.ReferenceArgs | undefined;
    /**
     * The encounter where the assessment was performed.
     */
    encounter?: fhir.ReferenceArgs | undefined;
    /**
     * The provider or software application that performed the assessment.
     */
    performer?: fhir.ReferenceArgs | undefined;
    /**
     * Business identifier assigned to the risk assessment.
     */
    identifier?: fhir.IdentifierArgs | undefined;
    /**
     * The method can influence the results of the assessment.
     */
    method?: fhir.CodeableConceptArgs | undefined;
    /**
     * Indicates the source data considered as part of the assessment (FamilyHistory, Observations, Procedures, Conditions, etc.).
     */
    basis?: fhir.ReferenceArgs[] | undefined;
    /**
     * Describes the expected outcome for the subject.
     */
    prediction?: fhir.RiskAssessmentPredictionArgs[] | undefined;
    /**
     * One of the main reasons for assessing risks is to identify whether interventional steps are needed to reduce risk.
     */
    mitigation?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: RiskAssessment.mitigation
     */
    _mitigation?: fhir.FhirElementArgs;
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
     * The patient or group the risk assessment applies to.
     */
    subject?: fhir.Reference | undefined;
    /**
     * The assessment results lose validity the more time elapses from when they are first made.
     */
    date?: fhir.FhirDateTime | undefined;
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
    basis: fhir.Reference[];
    /**
     * Describes the expected outcome for the subject.
     */
    prediction: fhir.RiskAssessmentPrediction[];
    /**
     * One of the main reasons for assessing risks is to identify whether interventional steps are needed to reduce risk.
     */
    mitigation?: fhir.FhirString | undefined;
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