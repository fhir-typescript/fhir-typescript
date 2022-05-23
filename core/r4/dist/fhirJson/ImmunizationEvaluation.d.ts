import * as fhir from '../fhirJson.js';
/**
 * Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations.
 */
export interface ImmunizationEvaluation extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "ImmunizationEvaluation";
    /**
     * A unique identifier assigned to this immunization evaluation record.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * Indicates the current status of the evaluation of the vaccination administration event.
     */
    status: 'completed' | 'entered-in-error' | null;
    /**
     * Extended properties for primitive element: ImmunizationEvaluation.status
     */
    _status?: fhir.FhirElement;
    /**
     * The individual for whom the evaluation is being done.
     */
    patient: fhir.Reference | null;
    /**
     * The date the evaluation of the vaccine administration event was performed.
     */
    date?: string | undefined;
    /**
     * Extended properties for primitive element: ImmunizationEvaluation.date
     */
    _date?: fhir.FhirElement;
    /**
     * Indicates the authority who published the protocol (e.g. ACIP).
     */
    authority?: fhir.Reference | undefined;
    /**
     * The vaccine preventable disease the dose is being evaluated against.
     */
    targetDisease: fhir.CodeableConcept | null;
    /**
     * The vaccine administration event being evaluated.
     */
    immunizationEvent: fhir.Reference | null;
    /**
     * Indicates if the dose is valid or not valid with respect to the published recommendations.
     */
    doseStatus: fhir.CodeableConcept | null;
    /**
     * Provides an explanation as to why the vaccine administration event is valid or not relative to the published recommendations.
     */
    doseStatusReason?: fhir.CodeableConcept[] | undefined;
    /**
     * Additional information about the evaluation.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: ImmunizationEvaluation.description
     */
    _description?: fhir.FhirElement;
    /**
     * One possible path to achieve presumed immunity against a disease - within the context of an authority.
     */
    series?: string | undefined;
    /**
     * Extended properties for primitive element: ImmunizationEvaluation.series
     */
    _series?: fhir.FhirElement;
    /**
     * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
     */
    doseNumberPositiveInt?: number | undefined;
    /**
     * Extended properties for primitive element: ImmunizationEvaluation.doseNumber[x]
     */
    _doseNumberPositiveInt?: fhir.FhirElement;
    /**
     * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
     */
    doseNumberString?: string | undefined;
    /**
     * Extended properties for primitive element: ImmunizationEvaluation.doseNumber[x]
     */
    _doseNumberString?: fhir.FhirElement;
    /**
     * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
     */
    seriesDosesPositiveInt?: number | undefined;
    /**
     * Extended properties for primitive element: ImmunizationEvaluation.seriesDoses[x]
     */
    _seriesDosesPositiveInt?: fhir.FhirElement;
    /**
     * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
     */
    seriesDosesString?: string | undefined;
    /**
     * Extended properties for primitive element: ImmunizationEvaluation.seriesDoses[x]
     */
    _seriesDosesString?: fhir.FhirElement;
}
//# sourceMappingURL=ImmunizationEvaluation.d.ts.map