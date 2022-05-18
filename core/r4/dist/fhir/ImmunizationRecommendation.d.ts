import * as fhir from '../fhir.js';
/**
 * Valid arguments for the ImmunizationRecommendationRecommendationDateCriterion type.
 */
export interface ImmunizationRecommendationRecommendationDateCriterionArgs extends fhir.BackboneElementArgs {
    /**
     * Date classification of recommendation.  For example, earliest date to give, latest date to give, etc.
     */
    code: fhir.CodeableConceptArgs | null;
    /**
     * The date whose meaning is specified by dateCriterion.code.
     */
    value: fhir.FhirDateTime | string | undefined;
}
/**
 * Vaccine date recommendations.  For example, earliest date to administer, latest date to administer, etc.
 */
export declare class ImmunizationRecommendationRecommendationDateCriterion extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Date classification of recommendation.  For example, earliest date to give, latest date to give, etc.
     */
    code: fhir.CodeableConcept | null;
    /**
     * The date whose meaning is specified by dateCriterion.code.
     */
    value: fhir.FhirDateTime | null;
    /**
     * Default constructor for ImmunizationRecommendationRecommendationDateCriterion - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ImmunizationRecommendationRecommendationDateCriterionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the ImmunizationRecommendationRecommendation type.
 */
export interface ImmunizationRecommendationRecommendationArgs extends fhir.BackboneElementArgs {
    /**
     * Vaccine(s) or vaccine group that pertain to the recommendation.
     */
    vaccineCode?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The targeted disease for the recommendation.
     */
    targetDisease?: fhir.CodeableConceptArgs | undefined;
    /**
     * Vaccine(s) which should not be used to fulfill the recommendation.
     */
    contraindicatedVaccineCode?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Indicates the patient status with respect to the path to immunity for the target disease.
     */
    forecastStatus: fhir.CodeableConceptArgs | null;
    /**
     * The reason for the assigned forecast status.
     */
    forecastReason?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Vaccine date recommendations.  For example, earliest date to administer, latest date to administer, etc.
     */
    dateCriterion?: fhir.ImmunizationRecommendationRecommendationDateCriterionArgs[] | undefined;
    /**
     * Contains the description about the protocol under which the vaccine was administered.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * One possible path to achieve presumed immunity against a disease - within the context of an authority.
     */
    series?: fhir.FhirString | string | undefined;
    /**
     * The use of an integer is prefered if known. A string should only be used in cases where an interger is not available (such as when documenting a recurring booster dose).
     */
    doseNumber?: fhir.FhirPositiveInt | fhir.FhirString | undefined;
    /**
     * The use of an integer is prefered if known. A string should only be used in cases where an interger is not available (such as when documenting a recurring booster dose).
     */
    doseNumberPositiveInt?: fhir.FhirPositiveInt | number | undefined;
    /**
     * The use of an integer is prefered if known. A string should only be used in cases where an interger is not available (such as when documenting a recurring booster dose).
     */
    doseNumberString?: fhir.FhirString | string | undefined;
    /**
     * The use of an integer is prefered if known. A string should only be used in cases where an interger is not available (such as when documenting a recurring booster dose).
     */
    seriesDoses?: fhir.FhirPositiveInt | fhir.FhirString | undefined;
    /**
     * The use of an integer is prefered if known. A string should only be used in cases where an interger is not available (such as when documenting a recurring booster dose).
     */
    seriesDosesPositiveInt?: fhir.FhirPositiveInt | number | undefined;
    /**
     * The use of an integer is prefered if known. A string should only be used in cases where an interger is not available (such as when documenting a recurring booster dose).
     */
    seriesDosesString?: fhir.FhirString | string | undefined;
    /**
     * Immunization event history and/or evaluation that supports the status and recommendation.
     */
    supportingImmunization?: fhir.ReferenceArgs[] | undefined;
    /**
     * Patient Information that supports the status and recommendation.  This includes patient observations, adverse reactions and allergy/intolerance information.
     */
    supportingPatientInformation?: fhir.ReferenceArgs[] | undefined;
}
/**
 * Vaccine administration recommendations.
 */
export declare class ImmunizationRecommendationRecommendation extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Vaccine(s) or vaccine group that pertain to the recommendation.
     */
    vaccineCode?: fhir.CodeableConcept[];
    /**
     * The targeted disease for the recommendation.
     */
    targetDisease?: fhir.CodeableConcept | undefined;
    /**
     * Vaccine(s) which should not be used to fulfill the recommendation.
     */
    contraindicatedVaccineCode?: fhir.CodeableConcept[];
    /**
     * Indicates the patient status with respect to the path to immunity for the target disease.
     */
    forecastStatus: fhir.CodeableConcept | null;
    /**
     * The reason for the assigned forecast status.
     */
    forecastReason?: fhir.CodeableConcept[];
    /**
     * Vaccine date recommendations.  For example, earliest date to administer, latest date to administer, etc.
     */
    dateCriterion?: fhir.ImmunizationRecommendationRecommendationDateCriterion[];
    /**
     * Contains the description about the protocol under which the vaccine was administered.
     */
    description?: fhir.FhirString | undefined;
    /**
     * One possible path to achieve presumed immunity against a disease - within the context of an authority.
     */
    series?: fhir.FhirString | undefined;
    /**
     * The use of an integer is prefered if known. A string should only be used in cases where an interger is not available (such as when documenting a recurring booster dose).
     */
    doseNumber?: (fhir.FhirPositiveInt | fhir.FhirString) | undefined;
    /**
     * Internal flag to properly serialize choice-type element ImmunizationRecommendation.recommendation.doseNumber[x]
     */
    protected static readonly _fts_doseNumberIsChoice: true;
    /**
     * The use of an integer is prefered if known. A string should only be used in cases where an interger is not available (such as when documenting a recurring booster dose).
     */
    seriesDoses?: (fhir.FhirPositiveInt | fhir.FhirString) | undefined;
    /**
     * Internal flag to properly serialize choice-type element ImmunizationRecommendation.recommendation.seriesDoses[x]
     */
    protected static readonly _fts_seriesDosesIsChoice: true;
    /**
     * Immunization event history and/or evaluation that supports the status and recommendation.
     */
    supportingImmunization?: fhir.Reference[];
    /**
     * Patient Information that supports the status and recommendation.  This includes patient observations, adverse reactions and allergy/intolerance information.
     */
    supportingPatientInformation?: fhir.Reference[];
    /**
     * Default constructor for ImmunizationRecommendationRecommendation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ImmunizationRecommendationRecommendationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the ImmunizationRecommendation type.
 */
export interface ImmunizationRecommendationArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "ImmunizationRecommendation" | undefined;
    /**
     * A unique identifier assigned to this particular recommendation record.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * The patient the recommendation(s) are for.
     */
    patient: fhir.ReferenceArgs | null;
    /**
     * The date the immunization recommendation(s) were created.
     */
    date: fhir.FhirDateTime | string | undefined;
    /**
     * Indicates the authority who published the protocol (e.g. ACIP).
     */
    authority?: fhir.ReferenceArgs | undefined;
    /**
     * Vaccine administration recommendations.
     */
    recommendation: fhir.ImmunizationRecommendationRecommendationArgs[] | null;
}
/**
 * A patient's point-in-time set of recommendations (i.e. forecasting) according to a published schedule with optional supporting justification.
 */
export declare class ImmunizationRecommendation extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "ImmunizationRecommendation";
    /**
     * A unique identifier assigned to this particular recommendation record.
     */
    identifier?: fhir.Identifier[];
    /**
     * The patient the recommendation(s) are for.
     */
    patient: fhir.Reference | null;
    /**
     * The date the immunization recommendation(s) were created.
     */
    date: fhir.FhirDateTime | null;
    /**
     * Indicates the authority who published the protocol (e.g. ACIP).
     */
    authority?: fhir.Reference | undefined;
    /**
     * Vaccine administration recommendations.
     */
    recommendation: fhir.ImmunizationRecommendationRecommendation[];
    /**
     * Default constructor for ImmunizationRecommendation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ImmunizationRecommendationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
//# sourceMappingURL=ImmunizationRecommendation.d.ts.map