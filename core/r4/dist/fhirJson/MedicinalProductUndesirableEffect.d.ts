import * as fhir from '../fhirJson.js';
/**
 * Describe the undesirable effects of the medicinal product.
 */
export interface MedicinalProductUndesirableEffect extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "MedicinalProductUndesirableEffect";
    /**
     * The medication for which this is an indication.
     */
    subject?: fhir.Reference[] | undefined;
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
    population?: fhir.Population[] | undefined;
}
//# sourceMappingURL=MedicinalProductUndesirableEffect.d.ts.map