import * as fhir from '../fhir.js';
/**
 * Valid arguments for the MedicationProductIngredient type.
 */
export interface MedicationProductIngredientArgs extends fhir.BackboneElementArgs {
    /**
     * The actual ingredient - either a substance (simple ingredient) or another medication.
     */
    item: fhir.ReferenceArgs | null;
    /**
     * Specifies how many (or how much) of the items there are in this Medication.  For example, 250 mg per tablet.
     */
    amount?: fhir.RatioArgs | undefined;
}
/**
 * Identifies a particular constituent of interest in the product.
 */
export declare class MedicationProductIngredient extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The actual ingredient - either a substance (simple ingredient) or another medication.
     */
    item: fhir.Reference | null;
    /**
     * Specifies how many (or how much) of the items there are in this Medication.  For example, 250 mg per tablet.
     */
    amount?: fhir.Ratio | undefined;
    /**
     * Default constructor for MedicationProductIngredient - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicationProductIngredientArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the MedicationProductBatch type.
 */
export interface MedicationProductBatchArgs extends fhir.BackboneElementArgs {
    /**
     * The assigned lot number of a batch of the specified product.
     */
    lotNumber?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Medication.product.batch.lotNumber
     */
    _lotNumber?: fhir.FhirElementArgs;
    /**
     * When this specific batch of product will expire.
     */
    expirationDate?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: Medication.product.batch.expirationDate
     */
    _expirationDate?: fhir.FhirElementArgs;
}
/**
 * Information about a group of medication produced or packaged from one production run.
 */
export declare class MedicationProductBatch extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The assigned lot number of a batch of the specified product.
     */
    lotNumber?: fhir.FhirString | undefined;
    /**
     * When this specific batch of product will expire.
     */
    expirationDate?: fhir.FhirDateTime | undefined;
    /**
     * Default constructor for MedicationProductBatch - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicationProductBatchArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the MedicationProduct type.
 */
export interface MedicationProductArgs extends fhir.BackboneElementArgs {
    /**
     * Describes the form of the item.  Powder; tablets; carton.
     */
    form?: fhir.CodeableConceptArgs | undefined;
    /**
     * Identifies a particular constituent of interest in the product.
     */
    ingredient?: fhir.MedicationProductIngredientArgs[] | undefined;
    /**
     * Information about a group of medication produced or packaged from one production run.
     */
    batch?: fhir.MedicationProductBatchArgs[] | undefined;
}
/**
 * Information that only applies to products (not packages).
 */
export declare class MedicationProduct extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Describes the form of the item.  Powder; tablets; carton.
     */
    form?: fhir.CodeableConcept | undefined;
    /**
     * Identifies a particular constituent of interest in the product.
     */
    ingredient: fhir.MedicationProductIngredient[];
    /**
     * Information about a group of medication produced or packaged from one production run.
     */
    batch: fhir.MedicationProductBatch[];
    /**
     * Default constructor for MedicationProduct - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicationProductArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the MedicationPackageContent type.
 */
export interface MedicationPackageContentArgs extends fhir.BackboneElementArgs {
    /**
     * Identifies one of the items in the package.
     */
    item: fhir.ReferenceArgs | null;
    /**
     * The amount of the product that is in the package.
     */
    amount?: fhir.QuantityArgs | undefined;
}
/**
 * A set of components that go to make up the described item.
 */
export declare class MedicationPackageContent extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Identifies one of the items in the package.
     */
    item: fhir.Reference | null;
    /**
     * The amount of the product that is in the package.
     */
    amount?: fhir.Quantity | undefined;
    /**
     * Default constructor for MedicationPackageContent - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicationPackageContentArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the MedicationPackage type.
 */
export interface MedicationPackageArgs extends fhir.BackboneElementArgs {
    /**
     * The kind of container that this package comes as.
     */
    container?: fhir.CodeableConceptArgs | undefined;
    /**
     * A set of components that go to make up the described item.
     */
    content?: fhir.MedicationPackageContentArgs[] | undefined;
}
/**
 * Information that only applies to packages (not products).
 */
export declare class MedicationPackage extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The kind of container that this package comes as.
     */
    container?: fhir.CodeableConcept | undefined;
    /**
     * A set of components that go to make up the described item.
     */
    content: fhir.MedicationPackageContent[];
    /**
     * Default constructor for MedicationPackage - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicationPackageArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the Medication type.
 */
export interface MedicationArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "Medication" | undefined;
    /**
     * A code (or set of codes) that specify this medication, or a textual description if no code is available. Usage note: This could be a standard medication code such as a code from RxNorm, SNOMED CT, IDMP etc. It could also be a national or local formulary code, optionally with translations to other code systems.
     */
    code?: fhir.CodeableConceptArgs | undefined;
    /**
     * Set to true if the item is attributable to a specific manufacturer.
     */
    isBrand?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: Medication.isBrand
     */
    _isBrand?: fhir.FhirElementArgs;
    /**
     * Describes the details of the manufacturer.
     */
    manufacturer?: fhir.ReferenceArgs | undefined;
    /**
     * Information that only applies to products (not packages).
     */
    product?: fhir.MedicationProductArgs | undefined;
    /**
     * Information that only applies to packages (not products).
     */
    package?: fhir.MedicationPackageArgs | undefined;
}
/**
 * This resource is primarily used for the identification and definition of a medication. It covers the ingredients and the packaging for a medication.
 */
export declare class Medication extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "Medication";
    /**
     * A code (or set of codes) that specify this medication, or a textual description if no code is available. Usage note: This could be a standard medication code such as a code from RxNorm, SNOMED CT, IDMP etc. It could also be a national or local formulary code, optionally with translations to other code systems.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * Set to true if the item is attributable to a specific manufacturer.
     */
    isBrand?: fhir.FhirBoolean | undefined;
    /**
     * Describes the details of the manufacturer.
     */
    manufacturer?: fhir.Reference | undefined;
    /**
     * Information that only applies to products (not packages).
     */
    product?: fhir.MedicationProduct | undefined;
    /**
     * Information that only applies to packages (not products).
     */
    package?: fhir.MedicationPackage | undefined;
    /**
     * Default constructor for Medication - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=Medication.d.ts.map