import * as fhir from '../fhir.js';
/**
 * Valid arguments for the MedicinalProductUndesirableEffect type.
 */
export interface MedicinalProductUndesirableEffectArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "MedicinalProductUndesirableEffect" | undefined;
    /**
     * The medication for which this is an indication.
     */
    subject?: fhir.ReferenceArgs[] | undefined;
    /**
     * The symptom, condition or undesirable effect.
     */
    symptomConditionEffect?: fhir.CodeableConceptArgs | undefined;
    /**
     * Classification of the effect.
     */
    classification?: fhir.CodeableConceptArgs | undefined;
    /**
     * The frequency of occurrence of the effect.
     */
    frequencyOfOccurrence?: fhir.CodeableConceptArgs | undefined;
    /**
     * The population group to which this applies.
     */
    population?: fhir.PopulationArgs[] | undefined;
}
/**
 * Describe the undesirable effects of the medicinal product.
 */
export declare class MedicinalProductUndesirableEffect extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "MedicinalProductUndesirableEffect";
    /**
     * The medication for which this is an indication.
     */
    subject?: fhir.Reference[];
    /**
     * The symptom, condition or undesirable effect.
     */
    symptomConditionEffect?: fhir.CodeableConcept | undefined;
    /**
     * Classification of the effect.
     */
    classification?: fhir.CodeableConcept | undefined;
    /**
     * The frequency of occurrence of the effect.
     */
    frequencyOfOccurrence?: fhir.CodeableConcept | undefined;
    /**
     * The population group to which this applies.
     */
    population?: fhir.Population[];
    /**
     * Default constructor for MedicinalProductUndesirableEffect - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicinalProductUndesirableEffectArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
//# sourceMappingURL=MedicinalProductUndesirableEffect.d.ts.map