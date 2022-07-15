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
    /**
     * Extended properties for primitive element: ImmunizationRecommendation.recommendation.dateCriterion.value
     */
    _value?: fhir.FhirElementArgs;
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
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ImmunizationRecommendationRecommendationProtocol type.
 */
export interface ImmunizationRecommendationRecommendationProtocolArgs extends fhir.BackboneElementArgs {
    /**
     * Indicates the nominal position in a series of the next dose.  This is the recommended dose number as per a specified protocol.
     */
    doseSequence?: fhir.FhirInteger | number | undefined;
    /**
     * Extended properties for primitive element: ImmunizationRecommendation.recommendation.protocol.doseSequence
     */
    _doseSequence?: fhir.FhirElementArgs;
    /**
     * Contains the description about the protocol under which the vaccine was administered.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ImmunizationRecommendation.recommendation.protocol.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * Indicates the authority who published the protocol.  For example, ACIP.
     */
    authority?: fhir.ReferenceArgs | undefined;
    /**
     * One possible path to achieve presumed immunity against a disease - within the context of an authority.
     */
    series?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ImmunizationRecommendation.recommendation.protocol.series
     */
    _series?: fhir.FhirElementArgs;
}
/**
 * Contains information about the protocol under which the vaccine was administered.
 */
export declare class ImmunizationRecommendationRecommendationProtocol extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Indicates the nominal position in a series of the next dose.  This is the recommended dose number as per a specified protocol.
     */
    doseSequence?: fhir.FhirInteger | undefined;
    /**
     * Contains the description about the protocol under which the vaccine was administered.
     */
    description?: fhir.FhirString | undefined;
    /**
     * Indicates the authority who published the protocol.  For example, ACIP.
     */
    authority?: fhir.Reference | undefined;
    /**
     * One possible path to achieve presumed immunity against a disease - within the context of an authority.
     */
    series?: fhir.FhirString | undefined;
    /**
     * Default constructor for ImmunizationRecommendationRecommendationProtocol - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ImmunizationRecommendationRecommendationProtocolArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ImmunizationRecommendationRecommendation type.
 */
export interface ImmunizationRecommendationRecommendationArgs extends fhir.BackboneElementArgs {
    /**
     * The date the immunization recommendation was created.
     */
    date: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: ImmunizationRecommendation.recommendation.date
     */
    _date?: fhir.FhirElementArgs;
    /**
     * Vaccine that pertains to the recommendation.
     */
    vaccineCode: fhir.CodeableConceptArgs | null;
    /**
     * This indicates the next recommended dose number (e.g. dose 2 is the next recommended dose).
     */
    doseNumber?: fhir.FhirPositiveInt | number | undefined;
    /**
     * Extended properties for primitive element: ImmunizationRecommendation.recommendation.doseNumber
     */
    _doseNumber?: fhir.FhirElementArgs;
    /**
     * Vaccine administration status.
     */
    forecastStatus: fhir.CodeableConceptArgs | null;
    /**
     * Vaccine date recommendations.  For example, earliest date to administer, latest date to administer, etc.
     */
    dateCriterion?: fhir.ImmunizationRecommendationRecommendationDateCriterionArgs[] | undefined;
    /**
     * Contains information about the protocol under which the vaccine was administered.
     */
    protocol?: fhir.ImmunizationRecommendationRecommendationProtocolArgs | undefined;
    /**
     * Immunization event history that supports the status and recommendation.
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
     * The date the immunization recommendation was created.
     */
    date: fhir.FhirDateTime | null;
    /**
     * Vaccine that pertains to the recommendation.
     */
    vaccineCode: fhir.CodeableConcept | null;
    /**
     * This indicates the next recommended dose number (e.g. dose 2 is the next recommended dose).
     */
    doseNumber?: fhir.FhirPositiveInt | undefined;
    /**
     * Vaccine administration status.
     */
    forecastStatus: fhir.CodeableConcept | null;
    /**
     * Vaccine date recommendations.  For example, earliest date to administer, latest date to administer, etc.
     */
    dateCriterion: fhir.ImmunizationRecommendationRecommendationDateCriterion[];
    /**
     * Contains information about the protocol under which the vaccine was administered.
     */
    protocol?: fhir.ImmunizationRecommendationRecommendationProtocol | undefined;
    /**
     * Immunization event history that supports the status and recommendation.
     */
    supportingImmunization: fhir.Reference[];
    /**
     * Patient Information that supports the status and recommendation.  This includes patient observations, adverse reactions and allergy/intolerance information.
     */
    supportingPatientInformation: fhir.Reference[];
    /**
     * Default constructor for ImmunizationRecommendationRecommendation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ImmunizationRecommendationRecommendationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
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
     * The patient for whom the recommendations are for.
     */
    patient: fhir.ReferenceArgs | null;
    /**
     * Vaccine administration recommendations.
     */
    recommendation: fhir.ImmunizationRecommendationRecommendationArgs[] | null;
}
/**
 * A patient's point-in-time immunization and recommendation (i.e. forecasting a patient's immunization eligibility according to a published schedule) with optional supporting justification.
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
    identifier: fhir.Identifier[];
    /**
     * The patient for whom the recommendations are for.
     */
    patient: fhir.Reference | null;
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
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=ImmunizationRecommendation.d.ts.map