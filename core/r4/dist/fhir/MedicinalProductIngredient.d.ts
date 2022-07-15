import * as fhir from '../fhir.js';
/**
 * Valid arguments for the MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength type.
 */
export interface MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrengthArgs extends fhir.BackboneElementArgs {
    /**
     * Relevant reference substance.
     */
    substance?: fhir.CodeableConceptArgs | undefined;
    /**
     * Strength expressed in terms of a reference substance.
     */
    strength: fhir.RatioArgs | null;
    /**
     * Strength expressed in terms of a reference substance.
     */
    strengthLowLimit?: fhir.RatioArgs | undefined;
    /**
     * For when strength is measured at a particular point or distance.
     */
    measurementPoint?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: MedicinalProductIngredient.specifiedSubstance.strength.referenceStrength.measurementPoint
     */
    _measurementPoint?: fhir.FhirElementArgs;
    /**
     * The country or countries for which the strength range applies.
     */
    country?: fhir.CodeableConceptArgs[] | undefined;
}
/**
 * Strength expressed in terms of a reference substance.
 */
export declare class MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Relevant reference substance.
     */
    substance?: fhir.CodeableConcept | undefined;
    /**
     * Strength expressed in terms of a reference substance.
     */
    strength: fhir.Ratio | null;
    /**
     * Strength expressed in terms of a reference substance.
     */
    strengthLowLimit?: fhir.Ratio | undefined;
    /**
     * For when strength is measured at a particular point or distance.
     */
    measurementPoint?: fhir.FhirString | undefined;
    /**
     * The country or countries for which the strength range applies.
     */
    country: fhir.CodeableConcept[];
    /**
     * Default constructor for MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrengthArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the MedicinalProductIngredientSpecifiedSubstanceStrength type.
 */
export interface MedicinalProductIngredientSpecifiedSubstanceStrengthArgs extends fhir.BackboneElementArgs {
    /**
     * The quantity of substance in the unit of presentation, or in the volume (or mass) of the single pharmaceutical product or manufactured item.
     */
    presentation: fhir.RatioArgs | null;
    /**
     * A lower limit for the quantity of substance in the unit of presentation. For use when there is a range of strengths, this is the lower limit, with the presentation attribute becoming the upper limit.
     */
    presentationLowLimit?: fhir.RatioArgs | undefined;
    /**
     * The strength per unitary volume (or mass).
     */
    concentration?: fhir.RatioArgs | undefined;
    /**
     * A lower limit for the strength per unitary volume (or mass), for when there is a range. The concentration attribute then becomes the upper limit.
     */
    concentrationLowLimit?: fhir.RatioArgs | undefined;
    /**
     * For when strength is measured at a particular point or distance.
     */
    measurementPoint?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: MedicinalProductIngredient.specifiedSubstance.strength.measurementPoint
     */
    _measurementPoint?: fhir.FhirElementArgs;
    /**
     * The country or countries for which the strength range applies.
     */
    country?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Strength expressed in terms of a reference substance.
     */
    referenceStrength?: fhir.MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrengthArgs[] | undefined;
}
/**
 * Quantity of the substance or specified substance present in the manufactured item or pharmaceutical product.
 */
export declare class MedicinalProductIngredientSpecifiedSubstanceStrength extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The quantity of substance in the unit of presentation, or in the volume (or mass) of the single pharmaceutical product or manufactured item.
     */
    presentation: fhir.Ratio | null;
    /**
     * A lower limit for the quantity of substance in the unit of presentation. For use when there is a range of strengths, this is the lower limit, with the presentation attribute becoming the upper limit.
     */
    presentationLowLimit?: fhir.Ratio | undefined;
    /**
     * The strength per unitary volume (or mass).
     */
    concentration?: fhir.Ratio | undefined;
    /**
     * A lower limit for the strength per unitary volume (or mass), for when there is a range. The concentration attribute then becomes the upper limit.
     */
    concentrationLowLimit?: fhir.Ratio | undefined;
    /**
     * For when strength is measured at a particular point or distance.
     */
    measurementPoint?: fhir.FhirString | undefined;
    /**
     * The country or countries for which the strength range applies.
     */
    country: fhir.CodeableConcept[];
    /**
     * Strength expressed in terms of a reference substance.
     */
    referenceStrength: fhir.MedicinalProductIngredientSpecifiedSubstanceStrengthReferenceStrength[];
    /**
     * Default constructor for MedicinalProductIngredientSpecifiedSubstanceStrength - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicinalProductIngredientSpecifiedSubstanceStrengthArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the MedicinalProductIngredientSpecifiedSubstance type.
 */
export interface MedicinalProductIngredientSpecifiedSubstanceArgs extends fhir.BackboneElementArgs {
    /**
     * The specified substance.
     */
    code: fhir.CodeableConceptArgs | null;
    /**
     * The group of specified substance, e.g. group 1 to 4.
     */
    group: fhir.CodeableConceptArgs | null;
    /**
     * Confidentiality level of the specified substance as the ingredient.
     */
    confidentiality?: fhir.CodeableConceptArgs | undefined;
    /**
     * Quantity of the substance or specified substance present in the manufactured item or pharmaceutical product.
     */
    strength?: fhir.MedicinalProductIngredientSpecifiedSubstanceStrengthArgs[] | undefined;
}
/**
 * A specified substance that comprises this ingredient.
 */
export declare class MedicinalProductIngredientSpecifiedSubstance extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The specified substance.
     */
    code: fhir.CodeableConcept | null;
    /**
     * The group of specified substance, e.g. group 1 to 4.
     */
    group: fhir.CodeableConcept | null;
    /**
     * Confidentiality level of the specified substance as the ingredient.
     */
    confidentiality?: fhir.CodeableConcept | undefined;
    /**
     * Quantity of the substance or specified substance present in the manufactured item or pharmaceutical product.
     */
    strength: fhir.MedicinalProductIngredientSpecifiedSubstanceStrength[];
    /**
     * Default constructor for MedicinalProductIngredientSpecifiedSubstance - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicinalProductIngredientSpecifiedSubstanceArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the MedicinalProductIngredientSubstance type.
 */
export interface MedicinalProductIngredientSubstanceArgs extends fhir.BackboneElementArgs {
    /**
     * The ingredient substance.
     */
    code: fhir.CodeableConceptArgs | null;
    /**
     * Quantity of the substance or specified substance present in the manufactured item or pharmaceutical product.
     */
    strength?: fhir.MedicinalProductIngredientSpecifiedSubstanceStrengthArgs[] | undefined;
}
/**
 * The ingredient substance.
 */
export declare class MedicinalProductIngredientSubstance extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The ingredient substance.
     */
    code: fhir.CodeableConcept | null;
    /**
     * Quantity of the substance or specified substance present in the manufactured item or pharmaceutical product.
     */
    strength: fhir.MedicinalProductIngredientSpecifiedSubstanceStrength[];
    /**
     * Default constructor for MedicinalProductIngredientSubstance - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicinalProductIngredientSubstanceArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the MedicinalProductIngredient type.
 */
export interface MedicinalProductIngredientArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "MedicinalProductIngredient" | undefined;
    /**
     * The identifier(s) of this Ingredient that are assigned by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate.
     */
    identifier?: fhir.IdentifierArgs | undefined;
    /**
     * Ingredient role e.g. Active ingredient, excipient.
     */
    role: fhir.CodeableConceptArgs | null;
    /**
     * If the ingredient is a known or suspected allergen.
     */
    allergenicIndicator?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: MedicinalProductIngredient.allergenicIndicator
     */
    _allergenicIndicator?: fhir.FhirElementArgs;
    /**
     * Manufacturer of this Ingredient.
     */
    manufacturer?: fhir.ReferenceArgs[] | undefined;
    /**
     * A specified substance that comprises this ingredient.
     */
    specifiedSubstance?: fhir.MedicinalProductIngredientSpecifiedSubstanceArgs[] | undefined;
    /**
     * The ingredient substance.
     */
    substance?: fhir.MedicinalProductIngredientSubstanceArgs | undefined;
}
/**
 * An ingredient of a manufactured item or pharmaceutical product.
 */
export declare class MedicinalProductIngredient extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "MedicinalProductIngredient";
    /**
     * The identifier(s) of this Ingredient that are assigned by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate.
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * Ingredient role e.g. Active ingredient, excipient.
     */
    role: fhir.CodeableConcept | null;
    /**
     * If the ingredient is a known or suspected allergen.
     */
    allergenicIndicator?: fhir.FhirBoolean | undefined;
    /**
     * Manufacturer of this Ingredient.
     */
    manufacturer: fhir.Reference[];
    /**
     * A specified substance that comprises this ingredient.
     */
    specifiedSubstance: fhir.MedicinalProductIngredientSpecifiedSubstance[];
    /**
     * The ingredient substance.
     */
    substance?: fhir.MedicinalProductIngredientSubstance | undefined;
    /**
     * Default constructor for MedicinalProductIngredient - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicinalProductIngredientArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=MedicinalProductIngredient.d.ts.map