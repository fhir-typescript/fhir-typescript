import * as fhir from '../fhirJson.js';
/**
 * Substance may be used to describe a kind of substance, or a specific package/container of the substance: an instance.
 */
export interface SubstanceInstance extends fhir.BackboneElement {
    /**
     * Identifier associated with the package/container (usually a label affixed directly).
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * When the substance is no longer valid to use. For some substances, a single arbitrary date is used for expiry.
     */
    expiry?: string | undefined;
    /**
     * Extended properties for primitive element: Substance.instance.expiry
     */
    _expiry?: fhir.FhirElement;
    /**
     * The amount of the substance.
     */
    quantity?: fhir.Quantity | undefined;
}
/**
 * A substance can be composed of other substances.
 */
export interface SubstanceIngredient extends fhir.BackboneElement {
    /**
     * The amount of the ingredient in the substance - a concentration ratio.
     */
    quantity?: fhir.Ratio | undefined;
    /**
     * Another substance that is a component of this substance.
     */
    substance: fhir.Reference | null;
}
/**
 * A homogeneous material with a definite composition.
 */
export interface Substance extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "Substance" | null;
    /**
     * Unique identifier for the substance.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * A code that classifies the general type of substance.  This is used  for searching, sorting and display purposes.
     */
    category?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * A code (or set of codes) that identify this substance.
     */
    code: fhir.CodeableConcept | null;
    /**
     * A description of the substance - its appearance, handling requirements, and other usage notes.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: Substance.description
     */
    _description?: fhir.FhirElement;
    /**
     * Substance may be used to describe a kind of substance, or a specific package/container of the substance: an instance.
     */
    instance?: (fhir.SubstanceInstance | null)[] | undefined;
    /**
     * A substance can be composed of other substances.
     */
    ingredient?: (fhir.SubstanceIngredient | null)[] | undefined;
}
//# sourceMappingURL=Substance.d.ts.map