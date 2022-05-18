import * as fhir from '../fhirJson.js';
/**
 * The specific medication, food or laboratory test that interacts.
 */
export interface MedicinalProductInteractionInteractant extends fhir.BackboneElement {
    /**
     * The specific medication, food or laboratory test that interacts.
     */
    itemReference?: fhir.Reference | undefined;
    /**
     * The specific medication, food or laboratory test that interacts.
     */
    itemCodeableConcept?: fhir.CodeableConcept | undefined;
}
/**
 * The interactions of the medicinal product with other medicinal products, or other forms of interactions.
 */
export interface MedicinalProductInteraction extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "MedicinalProductInteraction";
    /**
     * The medication for which this is a described interaction.
     */
    subject?: fhir.Reference[] | undefined;
    /**
     * The interaction described.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: MedicinalProductInteraction.description
     */
    _description?: fhir.FhirElement;
    /**
     * The specific medication, food or laboratory test that interacts.
     */
    interactant?: fhir.MedicinalProductInteractionInteractant[] | undefined;
    /**
     * The type of the interaction e.g. drug-drug interaction, drug-food interaction, drug-lab test interaction.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * The effect of the interaction, for example "reduced gastric absorption of primary medication".
     */
    effect?: fhir.CodeableConcept | undefined;
    /**
     * The incidence of the interaction, e.g. theoretical, observed.
     */
    incidence?: fhir.CodeableConcept | undefined;
    /**
     * Actions for managing the interaction.
     */
    management?: fhir.CodeableConcept | undefined;
}
//# sourceMappingURL=MedicinalProductInteraction.d.ts.map