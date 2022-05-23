import * as fhir from '../fhir.js';
/**
 * Valid arguments for the MedicinalProductManufactured type.
 */
export interface MedicinalProductManufacturedArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "MedicinalProductManufactured" | undefined;
    /**
     * Dose form as manufactured and before any transformation into the pharmaceutical product.
     */
    manufacturedDoseForm: fhir.CodeableConceptArgs | null;
    /**
     * The “real world” units in which the quantity of the manufactured item is described.
     */
    unitOfPresentation?: fhir.CodeableConceptArgs | undefined;
    /**
     * The quantity or "count number" of the manufactured item.
     */
    quantity: fhir.QuantityArgs | null;
    /**
     * Manufacturer of the item (Note that this should be named "manufacturer" but it currently causes technical issues).
     */
    manufacturer?: fhir.ReferenceArgs[] | undefined;
    /**
     * Ingredient.
     */
    ingredient?: fhir.ReferenceArgs[] | undefined;
    /**
     * Dimensions, color etc.
     */
    physicalCharacteristics?: fhir.ProdCharacteristicArgs | undefined;
    /**
     * Other codeable characteristics.
     */
    otherCharacteristics?: fhir.CodeableConceptArgs[] | undefined;
}
/**
 * The manufactured item as contained in the packaged medicinal product.
 */
export declare class MedicinalProductManufactured extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "MedicinalProductManufactured";
    /**
     * Dose form as manufactured and before any transformation into the pharmaceutical product.
     */
    manufacturedDoseForm: fhir.CodeableConcept | null;
    /**
     * The “real world” units in which the quantity of the manufactured item is described.
     */
    unitOfPresentation?: fhir.CodeableConcept | undefined;
    /**
     * The quantity or "count number" of the manufactured item.
     */
    quantity: fhir.Quantity | null;
    /**
     * Manufacturer of the item (Note that this should be named "manufacturer" but it currently causes technical issues).
     */
    manufacturer: fhir.Reference[];
    /**
     * Ingredient.
     */
    ingredient: fhir.Reference[];
    /**
     * Dimensions, color etc.
     */
    physicalCharacteristics?: fhir.ProdCharacteristic | undefined;
    /**
     * Other codeable characteristics.
     */
    otherCharacteristics: fhir.CodeableConcept[];
    /**
     * Default constructor for MedicinalProductManufactured - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<MedicinalProductManufacturedArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
//# sourceMappingURL=MedicinalProductManufactured.d.ts.map