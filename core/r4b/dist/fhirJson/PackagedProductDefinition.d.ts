import * as fhir from '../fhirJson.js';
/**
 * The legal status of supply of the packaged item as classified by the regulator.
 */
export interface PackagedProductDefinitionLegalStatusOfSupply extends fhir.BackboneElement {
    /**
     * The actual status of supply. Conveys in what situation this package type may be supplied for use.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * The place where the legal status of supply applies. When not specified, this indicates it is unknown in this context.
     */
    jurisdiction?: fhir.CodeableConcept | undefined;
}
/**
 * Shelf Life and storage information.
 */
export interface PackagedProductDefinitionPackageShelfLifeStorage extends fhir.BackboneElement {
    /**
     * This describes the shelf life, taking into account various scenarios such as shelf life of the packaged Medicinal Product itself, shelf life after transformation where necessary and shelf life after the first opening of a bottle, etc. The shelf life type shall be specified using an appropriate controlled vocabulary The controlled term and the controlled term identifier shall be specified.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * The shelf life time period can be specified using a numerical value for the period of time and its unit of time measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
     */
    periodDuration?: fhir.Duration | undefined;
    /**
     * The shelf life time period can be specified using a numerical value for the period of time and its unit of time measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
     */
    periodString?: string | undefined;
    /**
     * Extended properties for primitive element: PackagedProductDefinition.package.shelfLifeStorage.period[x]
     */
    _periodString?: fhir.FhirElement;
    /**
     * Special precautions for storage, if any, can be specified using an appropriate controlled vocabulary. The controlled term and the controlled term identifier shall be specified.
     */
    specialPrecautionsForStorage?: (fhir.CodeableConcept | null)[] | undefined;
}
/**
 * General characteristics of this item.
 */
export interface PackagedProductDefinitionPackageProperty extends fhir.BackboneElement {
    /**
     * A code expressing the type of characteristic.
     */
    type: fhir.CodeableConcept | null;
    /**
     * A value for the characteristic.
     */
    valueCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * A value for the characteristic.
     */
    valueQuantity?: fhir.Quantity | undefined;
    /**
     * A value for the characteristic.
     */
    valueDate?: string | undefined;
    /**
     * Extended properties for primitive element: PackagedProductDefinition.package.property.value[x]
     */
    _valueDate?: fhir.FhirElement;
    /**
     * A value for the characteristic.
     */
    valueBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: PackagedProductDefinition.package.property.value[x]
     */
    _valueBoolean?: fhir.FhirElement;
    /**
     * A value for the characteristic.
     */
    valueAttachment?: fhir.Attachment | undefined;
}
/**
 * The item(s) within the packaging.
 */
export interface PackagedProductDefinitionPackageContainedItem extends fhir.BackboneElement {
    /**
     * The actual item(s) of medication, as manufactured, or a device (typically, but not necessarily, a co-packaged one), or other medically related item (such as food, biologicals, raw materials, medical fluids, gases etc.), as contained in the package. This also allows another whole packaged product to be included, which is solely for the case where a package of other entire packages is wanted - such as a wholesale or distribution pack (for layers within one package, use PackagedProductDefinition.package.package).
     */
    item: fhir.CodeableReference | null;
    /**
     * The number of this type of item within this packaging.
     */
    amount?: fhir.Quantity | undefined;
}
/**
 * A packaging item, as a container for medically related items, possibly with other packaging items within, or a packaging component, such as bottle cap (which is not a device or a medication manufactured item).
 */
export interface PackagedProductDefinitionPackage extends fhir.BackboneElement {
    /**
     * An identifier that is specific to this particular part of the packaging. Including possibly Data Carrier Identifier (a GS1 barcode).
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * The physical type of the container of the items.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * The quantity of this level of packaging in the package that contains it. If specified, the outermost level is always 1.
     */
    quantity?: number | undefined;
    /**
     * Extended properties for primitive element: PackagedProductDefinition.package.quantity
     */
    _quantity?: fhir.FhirElement;
    /**
     * Material type of the package item.
     */
    material?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * A possible alternate material for this part of the packaging, that is allowed to be used instead of the usual material (e.g. different types of plastic for a blister sleeve).
     */
    alternateMaterial?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Shelf Life and storage information.
     */
    shelfLifeStorage?: (fhir.PackagedProductDefinitionPackageShelfLifeStorage | null)[] | undefined;
    /**
     * Manufacturer of this package Item. When there are multiple it means these are all possible manufacturers.
     */
    manufacturer?: (fhir.Reference | null)[] | undefined;
    /**
     * General characteristics of this item.
     */
    property?: (fhir.PackagedProductDefinitionPackageProperty | null)[] | undefined;
    /**
     * The item(s) within the packaging.
     */
    containedItem?: (fhir.PackagedProductDefinitionPackageContainedItem | null)[] | undefined;
    /**
     * Allows containers (and parts of containers) parwithin containers, still a single packaged product.  See also PackagedProductDefinition.package.containedItem.item(PackagedProductDefinition).
     */
    package?: (fhir.PackagedProductDefinitionPackage | null)[] | undefined;
}
/**
 * A medically related item or items, in a container or package.
 */
export interface PackagedProductDefinition extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "PackagedProductDefinition" | null;
    /**
     * A unique identifier for this package as whole. Unique instance identifiers assigned to a package by manufacturers, regulators, drug catalogue custodians or other organizations.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * A name for this package. Typically what it would be listed as in a drug formulary or catalogue, inventory etc.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: PackagedProductDefinition.name
     */
    _name?: fhir.FhirElement;
    /**
     * A high level category e.g. medicinal product, raw material, shipping/transport container, etc.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * The product that this is a pack for.
     */
    packageFor?: (fhir.Reference | null)[] | undefined;
    /**
     * The status within the lifecycle of this item. A high level status, this is not intended to duplicate details carried elsewhere such as legal status, or authorization or marketing status.
     */
    status?: fhir.CodeableConcept | undefined;
    /**
     * The date at which the given status became applicable.
     */
    statusDate?: string | undefined;
    /**
     * Extended properties for primitive element: PackagedProductDefinition.statusDate
     */
    _statusDate?: fhir.FhirElement;
    /**
     * A total of the complete count of contained items of a particular type/form, independent of sub-packaging or organization. This can be considered as the pack size. This attribute differs from containedItem.amount in that it can give a single aggregated count of all tablet types in a pack, even when these are different manufactured items. For example a pill pack of 21 tablets plus 7 sugar tablets, can be denoted here as '28 tablets'. This attribute is repeatable so that the different item types in one pack type can be counted (e.g. a count of vials and count of syringes). Each repeat must have different units, so that it is clear what the different sets of counted items are, and it is not intended to allow different counts of similar items (e.g. not '2 tubes and 3 tubes'). Repeats are not to be used to represent different pack sizes (e.g. 20 pack vs. 50 pack) - which would be different instances of this resource.
     */
    containedItemQuantity?: (fhir.Quantity | null)[] | undefined;
    /**
     * Textual description. Note that this is not the name of the package or product.
     */
    description?: string | undefined;
    /**
     * Extended properties for primitive element: PackagedProductDefinition.description
     */
    _description?: fhir.FhirElement;
    /**
     * The legal status of supply of the packaged item as classified by the regulator.
     */
    legalStatusOfSupply?: (fhir.PackagedProductDefinitionLegalStatusOfSupply | null)[] | undefined;
    /**
     * Allows specifying that an item is on the market for sale, or that it is not available, and the dates and locations associated.
     */
    marketingStatus?: (fhir.MarketingStatus | null)[] | undefined;
    /**
     * Allows the key features to be recorded, such as "hospital pack", "nurse prescribable", "calendar pack".
     */
    characteristic?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * States whether a drug product is supplied with another item such as a diluent or adjuvant.
     */
    copackagedIndicator?: boolean | undefined;
    /**
     * Extended properties for primitive element: PackagedProductDefinition.copackagedIndicator
     */
    _copackagedIndicator?: fhir.FhirElement;
    /**
     * Manufacturer of this package type. When there are multiple it means these are all possible manufacturers.
     */
    manufacturer?: (fhir.Reference | null)[] | undefined;
    /**
     * A packaging item, as a container for medically related items, possibly with other packaging items within, or a packaging component, such as bottle cap (which is not a device or a medication manufactured item).
     */
    package?: fhir.PackagedProductDefinitionPackage | undefined;
}
//# sourceMappingURL=PackagedProductDefinition.d.ts.map