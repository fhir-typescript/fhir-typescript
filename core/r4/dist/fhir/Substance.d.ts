import * as fhir from '../fhir.js';
import { SubstanceStatusCodingType } from '../fhirValueSets/SubstanceStatusCodings.js';
import { SubstanceStatusCodeType } from '../fhirValueSets/SubstanceStatusCodes.js';
import { SubstanceCategoryCodingType } from '../fhirValueSets/SubstanceCategoryCodings.js';
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
    doModelValidation(): fhir.FtsIssue[];
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
    substance?: fhir.CodeableConcept | fhir.Reference | undefined;
    /**
     * Another substance that is a component of this substance.
     */
    substanceCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * Another substance that is a component of this substance.
     */
    substanceReference?: fhir.ReferenceArgs | undefined;
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
    substance: (fhir.CodeableConcept | fhir.Reference) | null;
    /**
     * Internal flag to properly serialize choice-type element Substance.ingredient.substance[x]
     */
    protected static readonly _fts_substanceIsChoice: true;
    /**
     * Default constructor for SubstanceIngredient - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SubstanceIngredientArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
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
     * This identifier is associated with the kind of substance in contrast to the  Substance.instance.identifier which is associated with the package/container.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * A code to indicate if the substance is actively used.
     */
    status?: SubstanceStatusCodeType | undefined;
    /**
     * The level of granularity is defined by the category concepts in the value set.   More fine-grained filtering can be performed using the metadata and/or terminology hierarchy in Substance.code.
     */
    category?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * This could be a reference to an externally defined code.  It could also be a locally assigned code (e.g. a formulary),  optionally with translations to the standard drug codes.
     */
    code: fhir.CodeableConceptArgs | null;
    /**
     * A description of the substance - its appearance, handling requirements, and other usage notes.
     */
    description?: fhir.FhirString | string | undefined;
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
     * This identifier is associated with the kind of substance in contrast to the  Substance.instance.identifier which is associated with the package/container.
     */
    identifier?: fhir.Identifier[];
    /**
     * A code to indicate if the substance is actively used.
     */
    status?: SubstanceStatusCodeType | undefined;
    /**
     * The level of granularity is defined by the category concepts in the value set.   More fine-grained filtering can be performed using the metadata and/or terminology hierarchy in Substance.code.
     */
    category?: fhir.CodeableConcept[];
    /**
     * This could be a reference to an externally defined code.  It could also be a locally assigned code (e.g. a formulary),  optionally with translations to the standard drug codes.
     */
    code: fhir.CodeableConcept | null;
    /**
     * A description of the substance - its appearance, handling requirements, and other usage notes.
     */
    description?: fhir.FhirString | undefined;
    /**
     * Substance may be used to describe a kind of substance, or a specific package/container of the substance: an instance.
     */
    instance?: fhir.SubstanceInstance[];
    /**
     * A substance can be composed of other substances.
     */
    ingredient?: fhir.SubstanceIngredient[];
    /**
     * Default constructor for Substance - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<SubstanceArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for status (Substance.status)
     */
    static statusRequiredCoding(): SubstanceStatusCodingType;
    /**
     * Extensible-bound Value Set for category (Substance.category)
     */
    static categoryExtensibleCoding(): SubstanceCategoryCodingType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
//# sourceMappingURL=Substance.d.ts.map