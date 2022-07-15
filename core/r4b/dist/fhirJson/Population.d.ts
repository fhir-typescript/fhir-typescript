import * as fhir from '../fhirJson.js';
/**
 * A populatioof people with some set of grouping criteria.
 */
export interface Population extends fhir.BackboneElement {
    /**
     * The age of the specific population.
     */
    ageRange?: fhir.Range | undefined;
    /**
     * The age of the specific population.
     */
    ageCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * The gender of the specific population.
     */
    gender?: fhir.CodeableConcept | undefined;
    /**
     * Race of the specific population.
     */
    race?: fhir.CodeableConcept | undefined;
    /**
     * The existing physiological conditions of the specific population to which this applies.
     */
    physiologicalCondition?: fhir.CodeableConcept | undefined;
}
//# sourceMappingURL=Population.d.ts.map