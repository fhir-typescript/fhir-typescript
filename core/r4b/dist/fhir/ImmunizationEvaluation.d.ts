import * as fhir from '../fhir.js';
import { ImmunizationEvaluationStatusCodeType } from '../fhirValueSets/ImmunizationEvaluationStatusCodes.js';
/**
 * Valid arguments for the ImmunizationEvaluation type.
 */
export interface ImmunizationEvaluationArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "ImmunizationEvaluation" | undefined;
    /**
     * A unique identifier assigned to this immunization evaluation record.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * Indicates the current status of the evaluation of the vaccination administration event.
     */
    status: fhir.FhirCode<ImmunizationEvaluationStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: ImmunizationEvaluation.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * The individual for whom the evaluation is being done.
     */
    patient: fhir.ReferenceArgs | null;
    /**
     * The date the evaluation of the vaccine administration event was performed.
     */
    date?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: ImmunizationEvaluation.date
     */
    _date?: fhir.FhirElementArgs;
    /**
     * Indicates the authority who published the protocol (e.g. ACIP).
     */
    authority?: fhir.ReferenceArgs | undefined;
    /**
     * The vaccine preventable disease the dose is being evaluated against.
     */
    targetDisease: fhir.CodeableConceptArgs | null;
    /**
     * The vaccine administration event being evaluated.
     */
    immunizationEvent: fhir.ReferenceArgs | null;
    /**
     * Indicates if the dose is valid or not valid with respect to the published recommendations.
     */
    doseStatus: fhir.CodeableConceptArgs | null;
    /**
     * Provides an explanation as to why the vaccine administration event is valid or not relative to the published recommendations.
     */
    doseStatusReason?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Additional information about the evaluation.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ImmunizationEvaluation.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * One possible path to achieve presumed immunity against a disease - within the context of an authority.
     */
    series?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: ImmunizationEvaluation.series
     */
    _series?: fhir.FhirElementArgs;
    /**
     * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
     */
    doseNumber?: fhir.FhirPositiveInt | fhir.FhirString | undefined;
    /**
     * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
     */
    doseNumberPositiveInt?: fhir.FhirPositiveInt | number | undefined;
    /**
     * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
     */
    doseNumberString?: fhir.FhirString | string | undefined;
    /**
     * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
     */
    seriesDoses?: fhir.FhirPositiveInt | fhir.FhirString | undefined;
    /**
     * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
     */
    seriesDosesPositiveInt?: fhir.FhirPositiveInt | number | undefined;
    /**
     * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
     */
    seriesDosesString?: fhir.FhirString | string | undefined;
}
/**
 * Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations.
 */
export declare class ImmunizationEvaluation extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "ImmunizationEvaluation";
    /**
     * A unique identifier assigned to this immunization evaluation record.
     */
    identifier: fhir.Identifier[];
    /**
     * Indicates the current status of the evaluation of the vaccination administration event.
     */
    status: fhir.FhirCode<ImmunizationEvaluationStatusCodeType> | null;
    /**
     * The individual for whom the evaluation is being done.
     */
    patient: fhir.Reference | null;
    /**
     * The date the evaluation of the vaccine administration event was performed.
     */
    date?: fhir.FhirDateTime | undefined;
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
    doseStatusReason: fhir.CodeableConcept[];
    /**
     * Additional information about the evaluation.
     */
    description?: fhir.FhirString | undefined;
    /**
     * One possible path to achieve presumed immunity against a disease - within the context of an authority.
     */
    series?: fhir.FhirString | undefined;
    /**
     * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
     */
    doseNumber?: (fhir.FhirPositiveInt | fhir.FhirString) | undefined;
    /**
     * Internal flag to properly serialize choice-type element ImmunizationEvaluation.doseNumber[x]
     */
    protected static readonly _fts_doseNumberIsChoice: true;
    /**
     * The use of an integer is preferred if known. A string should only be used in cases where an integer is not available (such as when documenting a recurring booster dose).
     */
    seriesDoses?: (fhir.FhirPositiveInt | fhir.FhirString) | undefined;
    /**
     * Internal flag to properly serialize choice-type element ImmunizationEvaluation.seriesDoses[x]
     */
    protected static readonly _fts_seriesDosesIsChoice: true;
    /**
     * Default constructor for ImmunizationEvaluation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ImmunizationEvaluationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=ImmunizationEvaluation.d.ts.map