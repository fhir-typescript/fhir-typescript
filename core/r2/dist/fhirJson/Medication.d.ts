import * as fhir from '../fhirJson.js';
/**
 * Identifies a particular constituent of interest in the product.
 */
export interface MedicationProductIngredient extends fhir.BackboneElement {
    /**
     * The actual ingredient - either a substance (simple ingredient) or another medication.
     */
    item: fhir.Reference | null;
    /**
     * Specifies how many (or how much) of the items there are in this Medication.  For example, 250 mg per tablet.
     */
    amount?: fhir.Ratio | undefined;
}
/**
 * Information about a group of medication produced or packaged from one production run.
 */
export interface MedicationProductBatch extends fhir.BackboneElement {
    /**
     * The assigned lot number of a batch of the specified product.
     */
    lotNumber?: string | undefined;
    /**
     * Extended properties for primitive element: Medication.product.batch.lotNumber
     */
    _lotNumber?: fhir.FhirElement;
    /**
     * When this specific batch of product will expire.
     */
    expirationDate?: string | undefined;
    /**
     * Extended properties for primitive element: Medication.product.batch.expirationDate
     */
    _expirationDate?: fhir.FhirElement;
}
/**
 * Information that only applies to products (not packages).
 */
export interface MedicationProduct extends fhir.BackboneElement {
    /**
     * Describes the form of the item.  Powder; tablets; carton.
     */
    form?: fhir.CodeableConcept | undefined;
    /**
     * Identifies a particular constituent of interest in the product.
     */
    ingredient?: (fhir.MedicationProductIngredient | null)[] | undefined;
    /**
     * Information about a group of medication produced or packaged from one production run.
     */
    batch?: (fhir.MedicationProductBatch | null)[] | undefined;
}
/**
 * A set of components that go to make up the described item.
 */
export interface MedicationPackageContent extends fhir.BackboneElement {
    /**
     * Identifies one of the items in the package.
     */
    item: fhir.Reference | null;
    /**
     * The amount of the product that is in the package.
     */
    amount?: fhir.Quantity | undefined;
}
/**
 * Information that only applies to packages (not products).
 */
export interface MedicationPackage extends fhir.BackboneElement {
    /**
     * The kind of container that this package comes as.
     */
    container?: fhir.CodeableConcept | undefined;
    /**
     * A set of components that go to make up the described item.
     */
    content?: (fhir.MedicationPackageContent | null)[] | undefined;
}
/**
 * This resource is primarily used for the identification and definition of a medication. It covers the ingredients and the packaging for a medication.
 */
export interface Medication extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "Medication" | null;
    /**
     * A code (or set of codes) that specify this medication, or a textual description if no code is available. Usage note: This could be a standard medication code such as a code from RxNorm, SNOMED CT, IDMP etc. It could also be a national or local formulary code, optionally with translations to other code systems.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * Set to true if the item is attributable to a specific manufacturer.
     */
    isBrand?: boolean | undefined;
    /**
     * Extended properties for primitive element: Medication.isBrand
     */
    _isBrand?: fhir.FhirElement;
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
}
//# sourceMappingURL=Medication.d.ts.map