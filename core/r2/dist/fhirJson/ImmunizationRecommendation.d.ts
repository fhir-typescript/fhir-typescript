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
 * Contains information about the protocol under which the vaccine was administered.
 */
export interface ImmunizationRecommendationRecommendationProtocol extends fhir.BackboneElement {
    /**
     * Indicates the nominal position in a series of the next dose.  This is the recommended dose number as per a specified protocol.
     */
    doseSequence?: number | undefined;
    /**
     * Extended properties for primitive element: ImmunizationRecommendation.recommendation.protocol.doseSequence
     */
    _doseSequence?: fhir.FhirElement;
    /**
     * Contains the description about the protocol under which the vaccine was administered.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: ImmunizationRecommendation.recommendation.protocol.description
     */
    _description?: fhir.FhirElement;
    /**
     * Indicates the authority who published the protocol.  For example, ACIP.
     */
    authority?: fhir.Reference | undefined;
    /**
     * One possible path to achieve presumed immunity against a disease - within the context of an authority.
     */
    series?: string | undefined;
    /**
     * Extended properties for primitive element: ImmunizationRecommendation.recommendation.protocol.series
     */
    _series?: fhir.FhirElement;
}
/**
 * Vaccine administration recommendations.
 */
export interface ImmunizationRecommendationRecommendation extends fhir.BackboneElement {
    /**
     * The date the immunization recommendation was created.
     */
    date: string | null;
    /**
     * Extended properties for primitive element: ImmunizationRecommendation.recommendation.date
     */
    _date?: fhir.FhirElement;
    /**
     * Vaccine that pertains to the recommendation.
     */
    vaccineCode: fhir.CodeableConcept | null;
    /**
     * This indicates the next recommended dose number (e.g. dose 2 is the next recommended dose).
     */
    doseNumber?: number | undefined;
    /**
     * Extended properties for primitive element: ImmunizationRecommendation.recommendation.doseNumber
     */
    _doseNumber?: fhir.FhirElement;
    /**
     * Vaccine administration status.
     */
    forecastStatus: fhir.CodeableConcept | null;
    /**
     * Vaccine date recommendations.  For example, earliest date to administer, latest date to administer, etc.
     */
    dateCriterion?: (fhir.ImmunizationRecommendationRecommendationDateCriterion | null)[] | undefined;
    /**
     * Contains information about the protocol under which the vaccine was administered.
     */
    protocol?: fhir.ImmunizationRecommendationRecommendationProtocol | undefined;
    /**
     * Immunization event history that supports the status and recommendation.
     */
    supportingImmunization?: (fhir.Reference | null)[] | undefined;
    /**
     * Patient Information that supports the status and recommendation.  This includes patient observations, adverse reactions and allergy/intolerance information.
     */
    supportingPatientInformation?: (fhir.Reference | null)[] | undefined;
}
/**
 * A patient's point-in-time immunization and recommendation (i.e. forecasting a patient's immunization eligibility according to a published schedule) with optional supporting justification.
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
     * The patient for whom the recommendations are for.
     */
    patient: fhir.Reference | null;
    /**
     * Vaccine administration recommendations.
     */
    recommendation: (fhir.ImmunizationRecommendationRecommendation | null)[] | null;
}
//# sourceMappingURL=ImmunizationRecommendation.d.ts.map