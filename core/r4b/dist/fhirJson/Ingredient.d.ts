import * as fhir from '../fhirJson.js';
/**
 * The organization(s) that manufacture this ingredient. Can be used to indicate:         1) Organizations we are aware of that manufacture this ingredient         2) Specific Manufacturer(s) currently being used         3) Set of organisations allowed to manufacture this ingredient for this product         Users must be clear on the application of context relevant to their use case.
 */
export interface IngredientManufacturer extends fhir.BackboneElement {
    /**
     * The way in which this manufacturer is associated with the ingredient. For example whether it is a possible one (others allowed), or an exclusive authorized one for this ingredient. Note that this is not the manufacturing process role.
     */
    role?: 'actual' | 'allowed' | 'possible' | undefined;
    /**
     * Extended properties for primitive element: Ingredient.manufacturer.role
     */
    _role?: fhir.FhirElement;
    /**
     * An organization that manufactures this ingredient.
     */
    manufacturer: fhir.Reference | null;
}
/**
 * Strength expressed in terms of a reference substance. For when the ingredient strength is additionally expressed as equivalent to the strength of some other closely related substance (e.g. salt vs. base). Reference strength represents the strength (quantitative composition) of the active moiety of the active substance. There are situations when the active substance and active moiety are different, therefore both a strength and a reference strength are needed.
 */
export interface IngredientSubstanceStrengthReferenceStrength extends fhir.BackboneElement {
    /**
     * Relevant reference substance.
     */
    substance?: fhir.CodeableReference | undefined;
    /**
     * Strength expressed in terms of a reference substance.
     */
    strengthRatio?: fhir.Ratio | undefined;
    /**
     * Strength expressed in terms of a reference substance.
     */
    strengthRatioRange?: fhir.RatioRange | undefined;
    /**
     * For when strength is measured at a particular point or distance.
     */
    measurementPoint?: string | undefined;
    /**
     * Extended properties for primitive element: Ingredient.substance.strength.referenceStrength.measurementPoint
     */
    _measurementPoint?: fhir.FhirElement;
    /**
     * The country or countries for which the strength range applies.
     */
    country?: (fhir.CodeableConcept | null)[] | undefined;
}
/**
 * The quantity of substance in the unit of presentation, or in the volume (or mass) of the single pharmaceutical product or manufactured item. The allowed repetitions do not represent different strengths, but are different representations - mathematically equivalent - of a single strength.
 */
export interface IngredientSubstanceStrength extends fhir.BackboneElement {
    /**
     * The quantity of substance in the unit of presentation, or in the volume (or mass) of the single pharmaceutical product or manufactured item. Unit of presentation refers to the quantity that the item occurs in e.g. a strength per tablet size, perhaps 'per 20mg' (the size of the tablet). It is not generally normalized as a unitary unit, which would be 'per mg').
     */
    presentationRatio?: fhir.Ratio | undefined;
    /**
     * The quantity of substance in the unit of presentation, or in the volume (or mass) of the single pharmaceutical product or manufactured item. Unit of presentation refers to the quantity that the item occurs in e.g. a strength per tablet size, perhaps 'per 20mg' (the size of the tablet). It is not generally normalized as a unitary unit, which would be 'per mg').
     */
    presentationRatioRange?: fhir.RatioRange | undefined;
    /**
     * A textual represention of either the whole of the presentation strength or a part of it - with the rest being in Strength.presentation as a ratio.
     */
    textPresentation?: string | undefined;
    /**
     * Extended properties for primitive element: Ingredient.substance.strength.textPresentation
     */
    _textPresentation?: fhir.FhirElement;
    /**
     * The strength per unitary volume (or mass).
     */
    concentrationRatio?: fhir.Ratio | undefined;
    /**
     * The strength per unitary volume (or mass).
     */
    concentrationRatioRange?: fhir.RatioRange | undefined;
    /**
     * A textual represention of either the whole of the concentration strength or a part of it - with the rest being in Strength.concentration as a ratio.
     */
    textConcentration?: string | undefined;
    /**
     * Extended properties for primitive element: Ingredient.substance.strength.textConcentration
     */
    _textConcentration?: fhir.FhirElement;
    /**
     * For when strength is measured at a particular point or distance. There are products where strength is measured at a particular point. For example, the strength of the ingredient in some inhalers is measured at a particular position relative to the point of aerosolization.
     */
    measurementPoint?: string | undefined;
    /**
     * Extended properties for primitive element: Ingredient.substance.strength.measurementPoint
     */
    _measurementPoint?: fhir.FhirElement;
    /**
     * The country or countries for which the strength range applies.
     */
    country?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Strength expressed in terms of a reference substance. For when the ingredient strength is additionally expressed as equivalent to the strength of some other closely related substance (e.g. salt vs. base). Reference strength represents the strength (quantitative composition) of the active moiety of the active substance. There are situations when the active substance and active moiety are different, therefore both a strength and a reference strength are needed.
     */
    referenceStrength?: (fhir.IngredientSubstanceStrengthReferenceStrength | null)[] | undefined;
}
/**
 * The substance that comprises this ingredient.
 */
export interface IngredientSubstance extends fhir.BackboneElement {
    /**
     * A code or full resource that represents the ingredient's substance.
     */
    code: fhir.CodeableReference | null;
    /**
     * The quantity of substance in the unit of presentation, or in the volume (or mass) of the single pharmaceutical product or manufactured item. The allowed repetitions do not represent different strengths, but are different representations - mathematically equivalent - of a single strength.
     */
    strength?: (fhir.IngredientSubstanceStrength | null)[] | undefined;
}
/**
 * An ingredient of a manufactured item or pharmaceutical product.
 */
export interface Ingredient extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "Ingredient" | null;
    /**
     * The identifier(s) of this Ingredient that are assigned by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * Allows filtering of ingredient that are appropriate for use versus not.
     */
    status: 'active' | 'draft' | 'retired' | 'unknown' | null;
    /**
     * Extended properties for primitive element: Ingredient.status
     */
    _status?: fhir.FhirElement;
    /**
     * The product which this ingredient is a constituent part of.
     */
    for?: (fhir.Reference | null)[] | undefined;
    /**
     * A classification of the ingredient identifying its purpose within the product, e.g. active, inactive.
     */
    role: fhir.CodeableConcept | null;
    /**
     * A classification of the ingredient identifying its precise purpose(s) in the drug product. This extends the Ingredient.role to add more detail. Example: antioxidant, alkalizing agent.
     */
    function?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * If the ingredient is a known or suspected allergen. Note that this is a property of the substance, so if a reference to a SubstanceDefinition is used to decribe that (rather than just a code), the allergen information should go there, not here.
     */
    allergenicIndicator?: boolean | undefined;
    /**
     * Extended properties for primitive element: Ingredient.allergenicIndicator
     */
    _allergenicIndicator?: fhir.FhirElement;
    /**
     * The organization(s) that manufacture this ingredient. Can be used to indicate:         1) Organizations we are aware of that manufacture this ingredient         2) Specific Manufacturer(s) currently being used         3) Set of organisations allowed to manufacture this ingredient for this product         Users must be clear on the application of context relevant to their use case.
     */
    manufacturer?: (fhir.IngredientManufacturer | null)[] | undefined;
    /**
     * The substance that comprises this ingredient.
     */
    substance: fhir.IngredientSubstance | null;
}
//# sourceMappingURL=Ingredient.d.ts.map