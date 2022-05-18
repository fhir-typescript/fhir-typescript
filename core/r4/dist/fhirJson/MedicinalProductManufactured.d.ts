import * as fhir from '../fhirJson.js';
/**
 * The manufactured item as contained in the packaged medicinal product.
 */
export interface MedicinalProductManufactured extends fhir.DomainResource {
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
    manufacturer?: fhir.Reference[] | undefined;
    /**
     * Ingredient.
     */
    ingredient?: fhir.Reference[] | undefined;
    /**
     * Dimensions, color etc.
     */
    physicalCharacteristics?: fhir.ProdCharacteristic | undefined;
    /**
     * Other codeable characteristics.
     */
    otherCharacteristics?: fhir.CodeableConcept[] | undefined;
}
//# sourceMappingURL=MedicinalProductManufactured.d.ts.map