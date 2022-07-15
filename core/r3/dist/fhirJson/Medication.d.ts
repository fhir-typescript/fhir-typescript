import * as fhir from '../fhirJson.js';
/**
 * The ingredients need not be a complete list.  If an ingredient is not specified, this does not indicate whether an ingredient is present or absent.  If an ingredient is specified it does not mean that all ingredients are specified.  It is possible to specify both inactive and active ingredients.
 */
export interface MedicationIngredient extends fhir.BackboneElement {
    /**
     * The actual ingredient - either a substance (simple ingredient) or another medication.
     */
    itemCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * The actual ingredient - either a substance (simple ingredient) or another medication.
     */
    itemReference?: fhir.Reference | undefined;
    /**
     * Indication of whether this ingredient affects the therapeutic action of the drug.
     */
    isActive?: boolean | undefined;
    /**
     * Extended properties for primitive element: Medication.ingredient.isActive
     */
    _isActive?: fhir.FhirElement;
    /**
     * Specifies how many (or how much) of the items there are in this Medication.  For example, 250 mg per tablet.  This is expressed as a ratio where the numerator is 250mg and the denominator is 1 tablet.
     */
    amount?: fhir.Ratio | undefined;
}
/**
 * A set of components that go to make up the described item.
 */
export interface MedicationPackageContent extends fhir.BackboneElement {
    /**
     * Identifies one of the items in the package.
     */
    itemCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Identifies one of the items in the package.
     */
    itemReference?: fhir.Reference | undefined;
    /**
     * The amount of the product that is in the package.
     */
    amount?: fhir.Quantity | undefined;
}
/**
 * Information about a group of medication produced or packaged from one production run.
 */
export interface MedicationPackageBatch extends fhir.BackboneElement {
    /**
     * The assigned lot number of a batch of the specified product.
     */
    lotNumber?: string | undefined;
    /**
     * Extended properties for primitive element: Medication.package.batch.lotNumber
     */
    _lotNumber?: fhir.FhirElement;
    /**
     * When this specific batch of product will expire.
     */
    expirationDate?: string | undefined;
    /**
     * Extended properties for primitive element: Medication.package.batch.expirationDate
     */
    _expirationDate?: fhir.FhirElement;
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
    /**
     * Information about a group of medication produced or packaged from one production run.
     */
    batch?: (fhir.MedicationPackageBatch | null)[] | undefined;
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
     * Depending on the context of use, the code that was actually selected by the user (prescriber, dispenser, etc.) will have the coding.userSelected set to true.  As described in the coding datatype: "A coding may be marked as a "userSelected" if a user selected the particular coded value in a user interface (e.g. the user selects an item in a pick-list). If a user selected coding exists, it is the preferred choice for performing translations etc.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * This status is not intended to specify if a medication is part of a formulary.
     */
    status?: 'active' | 'entered-in-error' | 'inactive' | undefined;
    /**
     * Extended properties for primitive element: Medication.status
     */
    _status?: fhir.FhirElement;
    /**
     * Set to true if the item is attributable to a specific manufacturer.
     */
    isBrand?: boolean | undefined;
    /**
     * Extended properties for primitive element: Medication.isBrand
     */
    _isBrand?: fhir.FhirElement;
    /**
     * Set to true if the medication can be obtained without an order from a prescriber.
     */
    isOverTheCounter?: boolean | undefined;
    /**
     * Extended properties for primitive element: Medication.isOverTheCounter
     */
    _isOverTheCounter?: fhir.FhirElement;
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
    ingredient?: (fhir.MedicationIngredient | null)[] | undefined;
    /**
     * Information that only applies to packages (not products).
     */
    package?: fhir.MedicationPackage | undefined;
    /**
     * Photo(s) or graphic representation(s) of the medication.
     */
    image?: (fhir.Attachment | null)[] | undefined;
}
//# sourceMappingURL=Medication.d.ts.map