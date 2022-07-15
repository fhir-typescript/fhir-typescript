import * as fhir from '../fhir.js';
/**
 * Valid arguments for the SubstanceInstance type.
 */
export interface SubstanceInstanceArgs extends fhir.BackboneElementArgs {
    /**
     * Identifier associated with the package/container (usually a label affixed directly).
     */
    identifier?: fhir.IdentifierArgs | undefined;
    /**
     * When the substance is no longer valid to use. For some substances, a single arbitrary date is used for expiry.
     */
    expiry?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: Substance.instance.expiry
     */
    _expiry?: fhir.FhirElementArgs;
    /**
     * The amount of the substance.
     */
    quantity?: fhir.QuantityArgs | undefined;
}
/**
 * Substance may be used to describe a kind of substance, or a specific package/container of the substance: an instance.
 */
export declare class SubstanceInstance extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Identifier associated with the package/container (usually a label affixed directly).
     */
    identifier?: fhir.Identifier | undefined;
    /**
     * When the substance is no longer valid to use. For some substances, a single arbitrary date is used for expiry.
     */
    expiry?: fhir.FhirDateTime | undefined;
    /**
     * The amount of the substance.
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * Default constructor for SubstanceInstance - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SubstanceInstanceArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the SubstanceIngredient type.
 */
export interface SubstanceIngredientArgs extends fhir.BackboneElementArgs {
    /**
     * The amount of the ingredient in the substance - a concentration ratio.
     */
    quantity?: fhir.RatioArgs | undefined;
    /**
     * Another substance that is a component of this substance.
     */
    substance: fhir.ReferenceArgs | null;
}
/**
 * A substance can be composed of other substances.
 */
export declare class SubstanceIngredient extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The amount of the ingredient in the substance - a concentration ratio.
     */
    quantity?: fhir.Ratio | undefined;
    /**
     * Another substance that is a component of this substance.
     */
    substance: fhir.Reference | null;
    /**
     * Default constructor for SubstanceIngredient - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SubstanceIngredientArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the Substance type.
 */
export interface SubstanceArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "Substance" | undefined;
    /**
     * Unique identifier for the substance.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * A code that classifies the general type of substance.  This is used  for searching, sorting and display purposes.
     */
    category?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * A code (or set of codes) that identify this substance.
     */
    code: fhir.CodeableConceptArgs | null;
    /**
     * A description of the substance - its appearance, handling requirements, and other usage notes.
     */
    description?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Substance.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * Substance may be used to describe a kind of substance, or a specific package/container of the substance: an instance.
     */
    instance?: fhir.SubstanceInstanceArgs[] | undefined;
    /**
     * A substance can be composed of other substances.
     */
    ingredient?: fhir.SubstanceIngredientArgs[] | undefined;
}
/**
 * A homogeneous material with a definite composition.
 */
export declare class Substance extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "Substance";
    /**
     * Unique identifier for the substance.
     */
    identifier: fhir.Identifier[];
    /**
     * A code that classifies the general type of substance.  This is used  for searching, sorting and display purposes.
     */
    category: fhir.CodeableConcept[];
    /**
     * A code (or set of codes) that identify this substance.
     */
    code: fhir.CodeableConcept | null;
    /**
     * A description of the substance - its appearance, handling requirements, and other usage notes.
     */
    description?: fhir.FhirString | undefined;
    /**
     * Substance may be used to describe a kind of substance, or a specific package/container of the substance: an instance.
     */
    instance: fhir.SubstanceInstance[];
    /**
     * A substance can be composed of other substances.
     */
    ingredient: fhir.SubstanceIngredient[];
    /**
     * Default constructor for Substance - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SubstanceArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=Substance.d.ts.map