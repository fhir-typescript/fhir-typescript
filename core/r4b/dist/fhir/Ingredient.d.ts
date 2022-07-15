import * as fhir from '../fhir.js';
import { IngredientManufacturerRoleCodeType } from '../fhirValueSets/IngredientManufacturerRoleCodes.js';
import { PublicationStatusCodeType } from '../fhirValueSets/PublicationStatusCodes.js';
/**
 * Valid arguments for the IngredientManufacturer type.
 */
export interface IngredientManufacturerArgs extends fhir.BackboneElementArgs {
    /**
     * The way in which this manufacturer is associated with the ingredient. For example whether it is a possible one (others allowed), or an exclusive authorized one for this ingredient. Note that this is not the manufacturing process role.
     */
    role?: fhir.FhirCode<IngredientManufacturerRoleCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Ingredient.manufacturer.role
     */
    _role?: fhir.FhirElementArgs;
    /**
     * An organization that manufactures this ingredient.
     */
    manufacturer: fhir.ReferenceArgs | null;
}
/**
 * The organization(s) that manufacture this ingredient. Can be used to indicate:         1) Organizations we are aware of that manufacture this ingredient         2) Specific Manufacturer(s) currently being used         3) Set of organisations allowed to manufacture this ingredient for this product         Users must be clear on the application of context relevant to their use case.
 */
export declare class IngredientManufacturer extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The way in which this manufacturer is associated with the ingredient. For example whether it is a possible one (others allowed), or an exclusive authorized one for this ingredient. Note that this is not the manufacturing process role.
     */
    role?: fhir.FhirCode<IngredientManufacturerRoleCodeType> | undefined;
    /**
     * An organization that manufactures this ingredient.
     */
    manufacturer: fhir.Reference | null;
    /**
     * Default constructor for IngredientManufacturer - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IngredientManufacturerArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the IngredientSubstanceStrengthReferenceStrength type.
 */
export interface IngredientSubstanceStrengthReferenceStrengthArgs extends fhir.BackboneElementArgs {
    /**
     * Relevant reference substance.
     */
    substance?: fhir.CodeableReferenceArgs | undefined;
    /**
     * Strength expressed in terms of a reference substance.
     */
    strength?: fhir.Ratio | fhir.RatioRange | undefined;
    /**
     * Strength expressed in terms of a reference substance.
     */
    strengthRatio?: fhir.RatioArgs | undefined;
    /**
     * Strength expressed in terms of a reference substance.
     */
    strengthRatioRange?: fhir.RatioRangeArgs | undefined;
    /**
     * For when strength is measured at a particular point or distance.
     */
    measurementPoint?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Ingredient.substance.strength.referenceStrength.measurementPoint
     */
    _measurementPoint?: fhir.FhirElementArgs;
    /**
     * The country or countries for which the strength range applies.
     */
    country?: fhir.CodeableConceptArgs[] | undefined;
}
/**
 * Strength expressed in terms of a reference substance. For when the ingredient strength is additionally expressed as equivalent to the strength of some other closely related substance (e.g. salt vs. base). Reference strength represents the strength (quantitative composition) of the active moiety of the active substance. There are situations when the active substance and active moiety are different, therefore both a strength and a reference strength are needed.
 */
export declare class IngredientSubstanceStrengthReferenceStrength extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Relevant reference substance.
     */
    substance?: fhir.CodeableReference | undefined;
    /**
     * Strength expressed in terms of a reference substance.
     */
    strength: (fhir.Ratio | fhir.RatioRange) | null;
    /**
     * Internal flag to properly serialize choice-type element Ingredient.substance.strength.referenceStrength.strength[x]
     */
    protected static readonly _fts_strengthIsChoice: true;
    /**
     * For when strength is measured at a particular point or distance.
     */
    measurementPoint?: fhir.FhirString | undefined;
    /**
     * The country or countries for which the strength range applies.
     */
    country: fhir.CodeableConcept[];
    /**
     * Default constructor for IngredientSubstanceStrengthReferenceStrength - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IngredientSubstanceStrengthReferenceStrengthArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the IngredientSubstanceStrength type.
 */
export interface IngredientSubstanceStrengthArgs extends fhir.BackboneElementArgs {
    /**
     * The quantity of substance in the unit of presentation, or in the volume (or mass) of the single pharmaceutical product or manufactured item. Unit of presentation refers to the quantity that the item occurs in e.g. a strength per tablet size, perhaps 'per 20mg' (the size of the tablet). It is not generally normalized as a unitary unit, which would be 'per mg').
     */
    presentation?: fhir.Ratio | fhir.RatioRange | undefined;
    /**
     * The quantity of substance in the unit of presentation, or in the volume (or mass) of the single pharmaceutical product or manufactured item. Unit of presentation refers to the quantity that the item occurs in e.g. a strength per tablet size, perhaps 'per 20mg' (the size of the tablet). It is not generally normalized as a unitary unit, which would be 'per mg').
     */
    presentationRatio?: fhir.RatioArgs | undefined;
    /**
     * The quantity of substance in the unit of presentation, or in the volume (or mass) of the single pharmaceutical product or manufactured item. Unit of presentation refers to the quantity that the item occurs in e.g. a strength per tablet size, perhaps 'per 20mg' (the size of the tablet). It is not generally normalized as a unitary unit, which would be 'per mg').
     */
    presentationRatioRange?: fhir.RatioRangeArgs | undefined;
    /**
     * A textual represention of either the whole of the presentation strength or a part of it - with the rest being in Strength.presentation as a ratio.
     */
    textPresentation?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Ingredient.substance.strength.textPresentation
     */
    _textPresentation?: fhir.FhirElementArgs;
    /**
     * The strength per unitary volume (or mass).
     */
    concentration?: fhir.Ratio | fhir.RatioRange | undefined;
    /**
     * The strength per unitary volume (or mass).
     */
    concentrationRatio?: fhir.RatioArgs | undefined;
    /**
     * The strength per unitary volume (or mass).
     */
    concentrationRatioRange?: fhir.RatioRangeArgs | undefined;
    /**
     * A textual represention of either the whole of the concentration strength or a part of it - with the rest being in Strength.concentration as a ratio.
     */
    textConcentration?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Ingredient.substance.strength.textConcentration
     */
    _textConcentration?: fhir.FhirElementArgs;
    /**
     * For when strength is measured at a particular point or distance. There are products where strength is measured at a particular point. For example, the strength of the ingredient in some inhalers is measured at a particular position relative to the point of aerosolization.
     */
    measurementPoint?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Ingredient.substance.strength.measurementPoint
     */
    _measurementPoint?: fhir.FhirElementArgs;
    /**
     * The country or countries for which the strength range applies.
     */
    country?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Strength expressed in terms of a reference substance. For when the ingredient strength is additionally expressed as equivalent to the strength of some other closely related substance (e.g. salt vs. base). Reference strength represents the strength (quantitative composition) of the active moiety of the active substance. There are situations when the active substance and active moiety are different, therefore both a strength and a reference strength are needed.
     */
    referenceStrength?: fhir.IngredientSubstanceStrengthReferenceStrengthArgs[] | undefined;
}
/**
 * The quantity of substance in the unit of presentation, or in the volume (or mass) of the single pharmaceutical product or manufactured item. The allowed repetitions do not represent different strengths, but are different representations - mathematically equivalent - of a single strength.
 */
export declare class IngredientSubstanceStrength extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The quantity of substance in the unit of presentation, or in the volume (or mass) of the single pharmaceutical product or manufactured item. Unit of presentation refers to the quantity that the item occurs in e.g. a strength per tablet size, perhaps 'per 20mg' (the size of the tablet). It is not generally normalized as a unitary unit, which would be 'per mg').
     */
    presentation?: (fhir.Ratio | fhir.RatioRange) | undefined;
    /**
     * Internal flag to properly serialize choice-type element Ingredient.substance.strength.presentation[x]
     */
    protected static readonly _fts_presentationIsChoice: true;
    /**
     * A textual represention of either the whole of the presentation strength or a part of it - with the rest being in Strength.presentation as a ratio.
     */
    textPresentation?: fhir.FhirString | undefined;
    /**
     * The strength per unitary volume (or mass).
     */
    concentration?: (fhir.Ratio | fhir.RatioRange) | undefined;
    /**
     * Internal flag to properly serialize choice-type element Ingredient.substance.strength.concentration[x]
     */
    protected static readonly _fts_concentrationIsChoice: true;
    /**
     * A textual represention of either the whole of the concentration strength or a part of it - with the rest being in Strength.concentration as a ratio.
     */
    textConcentration?: fhir.FhirString | undefined;
    /**
     * For when strength is measured at a particular point or distance. There are products where strength is measured at a particular point. For example, the strength of the ingredient in some inhalers is measured at a particular position relative to the point of aerosolization.
     */
    measurementPoint?: fhir.FhirString | undefined;
    /**
     * The country or countries for which the strength range applies.
     */
    country: fhir.CodeableConcept[];
    /**
     * Strength expressed in terms of a reference substance. For when the ingredient strength is additionally expressed as equivalent to the strength of some other closely related substance (e.g. salt vs. base). Reference strength represents the strength (quantitative composition) of the active moiety of the active substance. There are situations when the active substance and active moiety are different, therefore both a strength and a reference strength are needed.
     */
    referenceStrength: fhir.IngredientSubstanceStrengthReferenceStrength[];
    /**
     * Default constructor for IngredientSubstanceStrength - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IngredientSubstanceStrengthArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the IngredientSubstance type.
 */
export interface IngredientSubstanceArgs extends fhir.BackboneElementArgs {
    /**
     * A code or full resource that represents the ingredient's substance.
     */
    code: fhir.CodeableReferenceArgs | null;
    /**
     * The quantity of substance in the unit of presentation, or in the volume (or mass) of the single pharmaceutical product or manufactured item. The allowed repetitions do not represent different strengths, but are different representations - mathematically equivalent - of a single strength.
     */
    strength?: fhir.IngredientSubstanceStrengthArgs[] | undefined;
}
/**
 * The substance that comprises this ingredient.
 */
export declare class IngredientSubstance extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A code or full resource that represents the ingredient's substance.
     */
    code: fhir.CodeableReference | null;
    /**
     * The quantity of substance in the unit of presentation, or in the volume (or mass) of the single pharmaceutical product or manufactured item. The allowed repetitions do not represent different strengths, but are different representations - mathematically equivalent - of a single strength.
     */
    strength: fhir.IngredientSubstanceStrength[];
    /**
     * Default constructor for IngredientSubstance - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IngredientSubstanceArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the Ingredient type.
 */
export interface IngredientArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "Ingredient" | undefined;
    /**
     * The identifier(s) of this Ingredient that are assigned by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate.
     */
    identifier?: fhir.IdentifierArgs | undefined;
    /**
     * Allows filtering of ingredient that are appropriate for use versus not.
     */
    status: fhir.FhirCode<PublicationStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Ingredient.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * The product which this ingredient is a constituent part of.
     */
    for?: fhir.ReferenceArgs[] | undefined;
    /**
     * A classification of the ingredient identifying its purpose within the product, e.g. active, inactive.
     */
    role: fhir.CodeableConceptArgs | null;
    /**
     * A classification of the ingredient identifying its precise purpose(s) in the drug product. This extends the Ingredient.role to add more detail. Example: antioxidant, alkalizing agent.
     */
    function?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * If the ingredient is a known or suspected allergen. Note that this is a property of the substance, so if a reference to a SubstanceDefinition is used to decribe that (rather than just a code), the allergen information should go there, not here.
     */
    allergenicIndicator?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: Ingredient.allergenicIndicator
     */
    _allergenicIndicator?: fhir.FhirElementArgs;
    /**
     * The organization(s) that manufacture this ingredient. Can be used to indicate:         1) Organizations we are aware of that manufacture this ingredient         2) Specific Manufacturer(s) currently being used         3) Set of organisations allowed to manufacture this ingredient for this product         Users must be clear on the application of context relevant to their use case.
     */
    manufacturer?: fhir.IngredientManufacturerArgs[] | undefined;
    /**
     * The substance that comprises this ingredient.
     */
    substance: fhir.IngredientSubstanceArgs | null;
}
/**
 * An ingredient of a manufactured item or pharmaceutical product.
 */
export declare class Ingredient extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "Ingredient";
    /**
     * The identifier(s) of this Ingredient that are assigned by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * Allows filtering of ingredient that are appropriate for use versus not.
     */
    status: fhir.FhirCode<PublicationStatusCodeType> | null;
    /**
     * The product which this ingredient is a constituent part of.
     */
    for: fhir.Reference[];
    /**
     * A classification of the ingredient identifying its purpose within the product, e.g. active, inactive.
     */
    role: fhir.CodeableConcept | null;
    /**
     * A classification of the ingredient identifying its precise purpose(s) in the drug product. This extends the Ingredient.role to add more detail. Example: antioxidant, alkalizing agent.
     */
    function: fhir.CodeableConcept[];
    /**
     * If the ingredient is a known or suspected allergen. Note that this is a property of the substance, so if a reference to a SubstanceDefinition is used to decribe that (rather than just a code), the allergen information should go there, not here.
     */
    allergenicIndicator?: fhir.FhirBoolean | undefined;
    /**
     * The organization(s) that manufacture this ingredient. Can be used to indicate:         1) Organizations we are aware of that manufacture this ingredient         2) Specific Manufacturer(s) currently being used         3) Set of organisations allowed to manufacture this ingredient for this product         Users must be clear on the application of context relevant to their use case.
     */
    manufacturer: fhir.IngredientManufacturer[];
    /**
     * The substance that comprises this ingredient.
     */
    substance: fhir.IngredientSubstance | null;
    /**
     * Default constructor for Ingredient - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<IngredientArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=Ingredient.d.ts.map