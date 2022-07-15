import * as fhir from '../fhir.js';
import { MedicationStatusCodeType } from '../fhirValueSets/MedicationStatusCodes.js';
/**
 * Valid arguments for the MedicationIngredient type.
 */
export interface MedicationIngredientArgs extends fhir.BackboneElementArgs {
    /**
     * The actual ingredient - either a substance (simple ingredient) or another medication.
     */
    item?: fhir.CodeableConcept | fhir.Reference | undefined;
    /**
     * The actual ingredient - either a substance (simple ingredient) or another medication.
     */
    itemCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * The actual ingredient - either a substance (simple ingredient) or another medication.
     */
    itemReference?: fhir.ReferenceArgs | undefined;
    /**
     * Indication of whether this ingredient affects the therapeutic action of the drug.
     */
    isActive?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: Medication.ingredient.isActive
     */
    _isActive?: fhir.FhirElementArgs;
    /**
     * Specifies how many (or how much) of the items there are in this Medication.  For example, 250 mg per tablet.  This is expressed as a ratio where the numerator is 250mg and the denominator is 1 tablet.
     */
    amount?: fhir.RatioArgs | undefined;
}
/**
 * The ingredients need not be a complete list.  If an ingredient is not specified, this does not indicate whether an ingredient is present or absent.  If an ingredient is specified it does not mean that all ingredients are specified.  It is possible to specify both inactive and active ingredients.
 */
export declare class MedicationIngredient extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The actual ingredient - either a substance (simple ingredient) or another medication.
     */
    item: (fhir.CodeableConcept | fhir.Reference) | null;
    /**
     * Internal flag to properly serialize choice-type element Medication.ingredient.item[x]
     */
    protected static readonly _fts_itemIsChoice: true;
    /**
     * Indication of whether this ingredient affects the therapeutic action of the drug.
     */
    isActive?: fhir.FhirBoolean | undefined;
    /**
     * Specifies how many (or how much) of the items there are in this Medication.  For example, 250 mg per tablet.  This is expressed as a ratio where the numerator is 250mg and the denominator is 1 tablet.
     */
    amount?: fhir.Ratio | undefined;
    /**
     * Default constructor for MedicationIngredient - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicationIngredientArgs>, options?: fhir.FhirConstructorOptions);
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
    item?: fhir.CodeableConcept | fhir.Reference | undefined;
    /**
     * Identifies one of the items in the package.
     */
    itemCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * Identifies one of the items in the package.
     */
    itemReference?: fhir.ReferenceArgs | undefined;
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
    item: (fhir.CodeableConcept | fhir.Reference) | null;
    /**
     * Internal flag to properly serialize choice-type element Medication.package.content.item[x]
     */
    protected static readonly _fts_itemIsChoice: true;
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
 * Valid arguments for the MedicationPackageBatch type.
 */
export interface MedicationPackageBatchArgs extends fhir.BackboneElementArgs {
    /**
     * The assigned lot number of a batch of the specified product.
     */
    lotNumber?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Medication.package.batch.lotNumber
     */
    _lotNumber?: fhir.FhirElementArgs;
    /**
     * When this specific batch of product will expire.
     */
    expirationDate?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: Medication.package.batch.expirationDate
     */
    _expirationDate?: fhir.FhirElementArgs;
}
/**
 * Information about a group of medication produced or packaged from one production run.
 */
export declare class MedicationPackageBatch extends fhir.BackboneElement {
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
     * Default constructor for MedicationPackageBatch - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicationPackageBatchArgs>, options?: fhir.FhirConstructorOptions);
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
    /**
     * Information about a group of medication produced or packaged from one production run.
     */
    batch?: fhir.MedicationPackageBatchArgs[] | undefined;
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
     * Information about a group of medication produced or packaged from one production run.
     */
    batch: fhir.MedicationPackageBatch[];
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
     * Depending on the context of use, the code that was actually selected by the user (prescriber, dispenser, etc.) will have the coding.userSelected set to true.  As described in the coding datatype: "A coding may be marked as a "userSelected" if a user selected the particular coded value in a user interface (e.g. the user selects an item in a pick-list). If a user selected coding exists, it is the preferred choice for performing translations etc.
     */
    code?: fhir.CodeableConceptArgs | undefined;
    /**
     * This status is not intended to specify if a medication is part of a formulary.
     */
    status?: fhir.FhirCode<MedicationStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Medication.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * Set to true if the item is attributable to a specific manufacturer.
     */
    isBrand?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: Medication.isBrand
     */
    _isBrand?: fhir.FhirElementArgs;
    /**
     * Set to true if the medication can be obtained without an order from a prescriber.
     */
    isOverTheCounter?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: Medication.isOverTheCounter
     */
    _isOverTheCounter?: fhir.FhirElementArgs;
    /**
     * Describes the details of the manufacturer of the medication product.  This is not intended to represent the distributor of a medication product.
     */
    manufacturer?: fhir.ReferenceArgs | undefined;
    /**
     * When Medication is referenced from MedicationRequest, this is the ordered form.  When Medication is referenced within MedicationDispense, this is the dispensed form.  When Medication is referenced within MedicationAdministration, this is administered form.
     */
    form?: fhir.CodeableConceptArgs | undefined;
    /**
     * The ingredients need not be a complete list.  If an ingredient is not specified, this does not indicate whether an ingredient is present or absent.  If an ingredient is specified it does not mean that all ingredients are specified.  It is possible to specify both inactive and active ingredients.
     */
    ingredient?: fhir.MedicationIngredientArgs[] | undefined;
    /**
     * Information that only applies to packages (not products).
     */
    package?: fhir.MedicationPackageArgs | undefined;
    /**
     * Photo(s) or graphic representation(s) of the medication.
     */
    image?: fhir.AttachmentArgs[] | undefined;
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
     * Depending on the context of use, the code that was actually selected by the user (prescriber, dispenser, etc.) will have the coding.userSelected set to true.  As described in the coding datatype: "A coding may be marked as a "userSelected" if a user selected the particular coded value in a user interface (e.g. the user selects an item in a pick-list). If a user selected coding exists, it is the preferred choice for performing translations etc.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * This status is not intended to specify if a medication is part of a formulary.
     */
    status?: fhir.FhirCode<MedicationStatusCodeType> | undefined;
    /**
     * Set to true if the item is attributable to a specific manufacturer.
     */
    isBrand?: fhir.FhirBoolean | undefined;
    /**
     * Set to true if the medication can be obtained without an order from a prescriber.
     */
    isOverTheCounter?: fhir.FhirBoolean | undefined;
    /**
     * Describes the details of the manufacturer of the medication product.  This is not intended to represent the distributor of a medication product.
     */
    manufacturer?: fhir.Reference | undefined;
    /**
     * When Medication is referenced from MedicationRequest, this is the ordered form.  When Medication is referenced within MedicationDispense, this is the dispensed form.  When Medication is referenced within MedicationAdministration, this is administered form.
     */
    form?: fhir.CodeableConcept | undefined;
    /**
     * The ingredients need not be a complete list.  If an ingredient is not specified, this does not indicate whether an ingredient is present or absent.  If an ingredient is specified it does not mean that all ingredients are specified.  It is possible to specify both inactive and active ingredients.
     */
    ingredient: fhir.MedicationIngredient[];
    /**
     * Information that only applies to packages (not products).
     */
    package?: fhir.MedicationPackage | undefined;
    /**
     * Photo(s) or graphic representation(s) of the medication.
     */
    image: fhir.Attachment[];
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