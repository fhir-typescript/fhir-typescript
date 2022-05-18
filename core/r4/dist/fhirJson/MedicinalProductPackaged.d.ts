import * as fhir from '../fhirJson.js';
/**
 * Batch numbering.
 */
export interface MedicinalProductPackagedBatchIdentifier extends fhir.BackboneElement {
    /**
     * A number appearing on the outer packaging of a specific batch.
     */
    outerPackaging: fhir.Identifier | null;
    /**
     * A number appearing on the immediate packaging (and not the outer packaging).
     */
    immediatePackaging?: fhir.Identifier | undefined;
}
/**
 * A packaging item, as a contained for medicine, possibly with other packaging items within.
 */
export interface MedicinalProductPackagedPackageItem extends fhir.BackboneElement {
    /**
     * Including possibly Data Carrier Identifier.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * The physical type of the container of the medicine.
     */
    type: fhir.CodeableConcept | null;
    /**
     * The quantity of this package in the medicinal product, at the current level of packaging. The outermost is always 1.
     */
    quantity: fhir.Quantity | null;
    /**
     * Material type of the package item.
     */
    material?: fhir.CodeableConcept[] | undefined;
    /**
     * A possible alternate material for the packaging.
     */
    alternateMaterial?: fhir.CodeableConcept[] | undefined;
    /**
     * A device accompanying a medicinal product.
     */
    device?: fhir.Reference[] | undefined;
    /**
     * The manufactured item as contained in the packaged medicinal product.
     */
    manufacturedItem?: fhir.Reference[] | undefined;
    /**
     * Allows containers within containers.
     */
    packageItem?: fhir.MedicinalProductPackagedPackageItem[] | undefined;
    /**
     * Dimensions, color etc.
     */
    physicalCharacteristics?: fhir.ProdCharacteristic | undefined;
    /**
     * Other codeable characteristics.
     */
    otherCharacteristics?: fhir.CodeableConcept[] | undefined;
    /**
     * Shelf Life and storage information.
     */
    shelfLifeStorage?: fhir.ProductShelfLife[] | undefined;
    /**
     * Manufacturer of this Package Item.
     */
    manufacturer?: fhir.Reference[] | undefined;
}
/**
 * A medicinal product in a container or package.
 */
export interface MedicinalProductPackaged extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "MedicinalProductPackaged";
    /**
     * Unique identifier.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * The product with this is a pack for.
     */
    subject?: fhir.Reference[] | undefined;
    /**
     * Textual description.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: MedicinalProductPackaged.description
     */
    _description?: fhir.FhirElement;
    /**
     * The legal status of supply of the medicinal product as classified by the regulator.
     */
    legalStatusOfSupply?: fhir.CodeableConcept | undefined;
    /**
     * Marketing information.
     */
    marketingStatus?: fhir.MarketingStatus[] | undefined;
    /**
     * Manufacturer of this Package Item.
     */
    marketingAuthorization?: fhir.Reference | undefined;
    /**
     * Manufacturer of this Package Item.
     */
    manufacturer?: fhir.Reference[] | undefined;
    /**
     * Batch numbering.
     */
    batchIdentifier?: fhir.MedicinalProductPackagedBatchIdentifier[] | undefined;
    /**
     * A packaging item, as a contained for medicine, possibly with other packaging items within.
     */
    packageItem: fhir.MedicinalProductPackagedPackageItem[] | null;
}
//# sourceMappingURL=MedicinalProductPackaged.d.ts.map