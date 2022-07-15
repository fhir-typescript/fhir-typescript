import * as fhir from '../fhir.js';
/**
 * Valid arguments for the PackagedProductDefinitionLegalStatusOfSupply type.
 */
export interface PackagedProductDefinitionLegalStatusOfSupplyArgs extends fhir.BackboneElementArgs {
    /**
     * The actual status of supply. Conveys in what situation this package type may be supplied for use.
     */
    code?: fhir.CodeableConceptArgs | undefined;
    /**
     * The place where the legal status of supply applies. When not specified, this indicates it is unknown in this context.
     */
    jurisdiction?: fhir.CodeableConceptArgs | undefined;
}
/**
 * The legal status of supply of the packaged item as classified by the regulator.
 */
export declare class PackagedProductDefinitionLegalStatusOfSupply extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The actual status of supply. Conveys in what situation this package type may be supplied for use.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * The place where the legal status of supply applies. When not specified, this indicates it is unknown in this context.
     */
    jurisdiction?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for PackagedProductDefinitionLegalStatusOfSupply - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<PackagedProductDefinitionLegalStatusOfSupplyArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the PackagedProductDefinitionPackageShelfLifeStorage type.
 */
export interface PackagedProductDefinitionPackageShelfLifeStorageArgs extends fhir.BackboneElementArgs {
    /**
     * This describes the shelf life, taking into account various scenarios such as shelf life of the packaged Medicinal Product itself, shelf life after transformation where necessary and shelf life after the first opening of a bottle, etc. The shelf life type shall be specified using an appropriate controlled vocabulary The controlled term and the controlled term identifier shall be specified.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * The shelf life time period can be specified using a numerical value for the period of time and its unit of time measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
     */
    period?: fhir.Duration | fhir.FhirString | undefined;
    /**
     * The shelf life time period can be specified using a numerical value for the period of time and its unit of time measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
     */
    periodDuration?: fhir.DurationArgs | undefined;
    /**
     * The shelf life time period can be specified using a numerical value for the period of time and its unit of time measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
     */
    periodString?: fhir.FhirString | string | undefined;
    /**
     * Special precautions for storage, if any, can be specified using an appropriate controlled vocabulary. The controlled term and the controlled term identifier shall be specified.
     */
    specialPrecautionsForStorage?: fhir.CodeableConceptArgs[] | undefined;
}
/**
 * Shelf Life and storage information.
 */
export declare class PackagedProductDefinitionPackageShelfLifeStorage extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * This describes the shelf life, taking into account various scenarios such as shelf life of the packaged Medicinal Product itself, shelf life after transformation where necessary and shelf life after the first opening of a bottle, etc. The shelf life type shall be specified using an appropriate controlled vocabulary The controlled term and the controlled term identifier shall be specified.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * The shelf life time period can be specified using a numerical value for the period of time and its unit of time measurement The unit of measurement shall be specified in accordance with ISO 11240 and the resulting terminology The symbol and the symbol identifier shall be used.
     */
    period?: (fhir.Duration | fhir.FhirString) | undefined;
    /**
     * Internal flag to properly serialize choice-type element PackagedProductDefinition.package.shelfLifeStorage.period[x]
     */
    protected static readonly _fts_periodIsChoice: true;
    /**
     * Special precautions for storage, if any, can be specified using an appropriate controlled vocabulary. The controlled term and the controlled term identifier shall be specified.
     */
    specialPrecautionsForStorage: fhir.CodeableConcept[];
    /**
     * Default constructor for PackagedProductDefinitionPackageShelfLifeStorage - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<PackagedProductDefinitionPackageShelfLifeStorageArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the PackagedProductDefinitionPackageProperty type.
 */
export interface PackagedProductDefinitionPackagePropertyArgs extends fhir.BackboneElementArgs {
    /**
     * A code expressing the type of characteristic.
     */
    type: fhir.CodeableConceptArgs | null;
    /**
     * A value for the characteristic.
     */
    value?: fhir.CodeableConcept | fhir.Quantity | fhir.FhirDate | fhir.FhirBoolean | fhir.Attachment | undefined;
    /**
     * A value for the characteristic.
     */
    valueCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * A value for the characteristic.
     */
    valueQuantity?: fhir.QuantityArgs | undefined;
    /**
     * A value for the characteristic.
     */
    valueDate?: fhir.FhirDate | string | undefined;
    /**
     * A value for the characteristic.
     */
    valueBoolean?: fhir.FhirBoolean | boolean | undefined;
    /**
     * A value for the characteristic.
     */
    valueAttachment?: fhir.AttachmentArgs | undefined;
}
/**
 * General characteristics of this item.
 */
export declare class PackagedProductDefinitionPackageProperty extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A code expressing the type of characteristic.
     */
    type: fhir.CodeableConcept | null;
    /**
     * A value for the characteristic.
     */
    value?: (fhir.CodeableConcept | fhir.Quantity | fhir.FhirDate | fhir.FhirBoolean | fhir.Attachment) | undefined;
    /**
     * Internal flag to properly serialize choice-type element PackagedProductDefinition.package.property.value[x]
     */
    protected static readonly _fts_valueIsChoice: true;
    /**
     * Default constructor for PackagedProductDefinitionPackageProperty - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<PackagedProductDefinitionPackagePropertyArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the PackagedProductDefinitionPackageContainedItem type.
 */
export interface PackagedProductDefinitionPackageContainedItemArgs extends fhir.BackboneElementArgs {
    /**
     * The actual item(s) of medication, as manufactured, or a device (typically, but not necessarily, a co-packaged one), or other medically related item (such as food, biologicals, raw materials, medical fluids, gases etc.), as contained in the package. This also allows another whole packaged product to be included, which is solely for the case where a package of other entire packages is wanted - such as a wholesale or distribution pack (for layers within one package, use PackagedProductDefinition.package.package).
     */
    item: fhir.CodeableReferenceArgs | null;
    /**
     * The number of this type of item within this packaging.
     */
    amount?: fhir.QuantityArgs | undefined;
}
/**
 * The item(s) within the packaging.
 */
export declare class PackagedProductDefinitionPackageContainedItem extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The actual item(s) of medication, as manufactured, or a device (typically, but not necessarily, a co-packaged one), or other medically related item (such as food, biologicals, raw materials, medical fluids, gases etc.), as contained in the package. This also allows another whole packaged product to be included, which is solely for the case where a package of other entire packages is wanted - such as a wholesale or distribution pack (for layers within one package, use PackagedProductDefinition.package.package).
     */
    item: fhir.CodeableReference | null;
    /**
     * The number of this type of item within this packaging.
     */
    amount?: fhir.Quantity | undefined;
    /**
     * Default constructor for PackagedProductDefinitionPackageContainedItem - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<PackagedProductDefinitionPackageContainedItemArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the PackagedProductDefinitionPackage type.
 */
export interface PackagedProductDefinitionPackageArgs extends fhir.BackboneElementArgs {
    /**
     * An identifier that is specific to this particular part of the packaging. Including possibly Data Carrier Identifier (a GS1 barcode).
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * The physical type of the container of the items.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * The quantity of this level of packaging in the package that contains it. If specified, the outermost level is always 1.
     */
    quantity?: fhir.FhirInteger | number | undefined;
    /**
     * Extended properties for primitive element: PackagedProductDefinition.package.quantity
     */
    _quantity?: fhir.FhirElementArgs;
    /**
     * Material type of the package item.
     */
    material?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * A possible alternate material for this part of the packaging, that is allowed to be used instead of the usual material (e.g. different types of plastic for a blister sleeve).
     */
    alternateMaterial?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Shelf Life and storage information.
     */
    shelfLifeStorage?: fhir.PackagedProductDefinitionPackageShelfLifeStorageArgs[] | undefined;
    /**
     * Manufacturer of this package Item. When there are multiple it means these are all possible manufacturers.
     */
    manufacturer?: fhir.ReferenceArgs[] | undefined;
    /**
     * General characteristics of this item.
     */
    property?: fhir.PackagedProductDefinitionPackagePropertyArgs[] | undefined;
    /**
     * The item(s) within the packaging.
     */
    containedItem?: fhir.PackagedProductDefinitionPackageContainedItemArgs[] | undefined;
    /**
     * Allows containers (and parts of containers) parwithin containers, still a single packaged product.  See also PackagedProductDefinition.package.containedItem.item(PackagedProductDefinition).
     */
    package?: fhir.PackagedProductDefinitionPackageArgs[] | undefined;
}
/**
 * A packaging item, as a container for medically related items, possibly with other packaging items within, or a packaging component, such as bottle cap (which is not a device or a medication manufactured item).
 */
export declare class PackagedProductDefinitionPackage extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * An identifier that is specific to this particular part of the packaging. Including possibly Data Carrier Identifier (a GS1 barcode).
     */
    identifier: fhir.Identifier[];
    /**
     * The physical type of the container of the items.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * The quantity of this level of packaging in the package that contains it. If specified, the outermost level is always 1.
     */
    quantity?: fhir.FhirInteger | undefined;
    /**
     * Material type of the package item.
     */
    material: fhir.CodeableConcept[];
    /**
     * A possible alternate material for this part of the packaging, that is allowed to be used instead of the usual material (e.g. different types of plastic for a blister sleeve).
     */
    alternateMaterial: fhir.CodeableConcept[];
    /**
     * Shelf Life and storage information.
     */
    shelfLifeStorage: fhir.PackagedProductDefinitionPackageShelfLifeStorage[];
    /**
     * Manufacturer of this package Item. When there are multiple it means these are all possible manufacturers.
     */
    manufacturer: fhir.Reference[];
    /**
     * General characteristics of this item.
     */
    property: fhir.PackagedProductDefinitionPackageProperty[];
    /**
     * The item(s) within the packaging.
     */
    containedItem: fhir.PackagedProductDefinitionPackageContainedItem[];
    /**
     * Allows containers (and parts of containers) parwithin containers, still a single packaged product.  See also PackagedProductDefinition.package.containedItem.item(PackagedProductDefinition).
     */
    package: fhir.PackagedProductDefinitionPackage[];
    /**
     * Default constructor for PackagedProductDefinitionPackage - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<PackagedProductDefinitionPackageArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the PackagedProductDefinition type.
 */
export interface PackagedProductDefinitionArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "PackagedProductDefinition" | undefined;
    /**
     * A unique identifier for this package as whole. Unique instance identifiers assigned to a package by manufacturers, regulators, drug catalogue custodians or other organizations.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * A name for this package. Typically what it would be listed as in a drug formulary or catalogue, inventory etc.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: PackagedProductDefinition.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * A high level category e.g. medicinal product, raw material, shipping/transport container, etc.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * The product that this is a pack for.
     */
    packageFor?: fhir.ReferenceArgs[] | undefined;
    /**
     * The status within the lifecycle of this item. A high level status, this is not intended to duplicate details carried elsewhere such as legal status, or authorization or marketing status.
     */
    status?: fhir.CodeableConceptArgs | undefined;
    /**
     * The date at which the given status became applicable.
     */
    statusDate?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: PackagedProductDefinition.statusDate
     */
    _statusDate?: fhir.FhirElementArgs;
    /**
     * A total of the complete count of contained items of a particular type/form, independent of sub-packaging or organization. This can be considered as the pack size. This attribute differs from containedItem.amount in that it can give a single aggregated count of all tablet types in a pack, even when these are different manufactured items. For example a pill pack of 21 tablets plus 7 sugar tablets, can be denoted here as '28 tablets'. This attribute is repeatable so that the different item types in one pack type can be counted (e.g. a count of vials and count of syringes). Each repeat must have different units, so that it is clear what the different sets of counted items are, and it is not intended to allow different counts of similar items (e.g. not '2 tubes and 3 tubes'). Repeats are not to be used to represent different pack sizes (e.g. 20 pack vs. 50 pack) - which would be different instances of this resource.
     */
    containedItemQuantity?: fhir.QuantityArgs[] | undefined;
    /**
     * Textual description. Note that this is not the name of the package or product.
     */
    description?: fhir.FhirMarkdown | string | undefined;
    /**
     * Extended properties for primitive element: PackagedProductDefinition.description
     */
    _description?: fhir.FhirElementArgs;
    /**
     * The legal status of supply of the packaged item as classified by the regulator.
     */
    legalStatusOfSupply?: fhir.PackagedProductDefinitionLegalStatusOfSupplyArgs[] | undefined;
    /**
     * Allows specifying that an item is on the market for sale, or that it is not available, and the dates and locations associated.
     */
    marketingStatus?: fhir.MarketingStatusArgs[] | undefined;
    /**
     * Allows the key features to be recorded, such as "hospital pack", "nurse prescribable", "calendar pack".
     */
    characteristic?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * States whether a drug product is supplied with another item such as a diluent or adjuvant.
     */
    copackagedIndicator?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Extended properties for primitive element: PackagedProductDefinition.copackagedIndicator
     */
    _copackagedIndicator?: fhir.FhirElementArgs;
    /**
     * Manufacturer of this package type. When there are multiple it means these are all possible manufacturers.
     */
    manufacturer?: fhir.ReferenceArgs[] | undefined;
    /**
     * A packaging item, as a container for medically related items, possibly with other packaging items within, or a packaging component, such as bottle cap (which is not a device or a medication manufactured item).
     */
    package?: fhir.PackagedProductDefinitionPackageArgs | undefined;
}
/**
 * A medically related item or items, in a container or package.
 */
export declare class PackagedProductDefinition extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "PackagedProductDefinition";
    /**
     * A unique identifier for this package as whole. Unique instance identifiers assigned to a package by manufacturers, regulators, drug catalogue custodians or other organizations.
     */
    identifier: fhir.Identifier[];
    /**
     * A name for this package. Typically what it would be listed as in a drug formulary or catalogue, inventory etc.
     */
    name?: fhir.FhirString | undefined;
    /**
     * A high level category e.g. medicinal product, raw material, shipping/transport container, etc.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * The product that this is a pack for.
     */
    packageFor: fhir.Reference[];
    /**
     * The status within the lifecycle of this item. A high level status, this is not intended to duplicate details carried elsewhere such as legal status, or authorization or marketing status.
     */
    status?: fhir.CodeableConcept | undefined;
    /**
     * The date at which the given status became applicable.
     */
    statusDate?: fhir.FhirDateTime | undefined;
    /**
     * A total of the complete count of contained items of a particular type/form, independent of sub-packaging or organization. This can be considered as the pack size. This attribute differs from containedItem.amount in that it can give a single aggregated count of all tablet types in a pack, even when these are different manufactured items. For example a pill pack of 21 tablets plus 7 sugar tablets, can be denoted here as '28 tablets'. This attribute is repeatable so that the different item types in one pack type can be counted (e.g. a count of vials and count of syringes). Each repeat must have different units, so that it is clear what the different sets of counted items are, and it is not intended to allow different counts of similar items (e.g. not '2 tubes and 3 tubes'). Repeats are not to be used to represent different pack sizes (e.g. 20 pack vs. 50 pack) - which would be different instances of this resource.
     */
    containedItemQuantity: fhir.Quantity[];
    /**
     * Textual description. Note that this is not the name of the package or product.
     */
    description?: fhir.FhirMarkdown | undefined;
    /**
     * The legal status of supply of the packaged item as classified by the regulator.
     */
    legalStatusOfSupply: fhir.PackagedProductDefinitionLegalStatusOfSupply[];
    /**
     * Allows specifying that an item is on the market for sale, or that it is not available, and the dates and locations associated.
     */
    marketingStatus: fhir.MarketingStatus[];
    /**
     * Allows the key features to be recorded, such as "hospital pack", "nurse prescribable", "calendar pack".
     */
    characteristic: fhir.CodeableConcept[];
    /**
     * States whether a drug product is supplied with another item such as a diluent or adjuvant.
     */
    copackagedIndicator?: fhir.FhirBoolean | undefined;
    /**
     * Manufacturer of this package type. When there are multiple it means these are all possible manufacturers.
     */
    manufacturer: fhir.Reference[];
    /**
     * A packaging item, as a container for medically related items, possibly with other packaging items within, or a packaging component, such as bottle cap (which is not a device or a medication manufactured item).
     */
    package?: fhir.PackagedProductDefinitionPackage | undefined;
    /**
     * Default constructor for PackagedProductDefinition - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<PackagedProductDefinitionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=PackagedProductDefinition.d.ts.map