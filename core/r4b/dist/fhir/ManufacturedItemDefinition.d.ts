import * as fhir from '../fhir.js';
import { PublicationStatusCodeType } from '../fhirValueSets/PublicationStatusCodes.js';
/**
 * Valid arguments for the ManufacturedItemDefinitionProperty type.
 */
export interface ManufacturedItemDefinitionPropertyArgs extends fhir.BackboneElementArgs {
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
export declare class ManufacturedItemDefinitionProperty extends fhir.BackboneElement {
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
     * Internal flag to properly serialize choice-type element ManufacturedItemDefinition.property.value[x]
     */
    protected static readonly _fts_valueIsChoice: true;
    /**
     * Default constructor for ManufacturedItemDefinitionProperty - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ManufacturedItemDefinitionPropertyArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ManufacturedItemDefinition type.
 */
export interface ManufacturedItemDefinitionArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "ManufacturedItemDefinition" | undefined;
    /**
     * Unique identifier.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * Allows filtering of manufactured items that are appropriate for use versus not.
     */
    status: fhir.FhirCode<PublicationStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: ManufacturedItemDefinition.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * Dose form as manufactured and before any transformation into the pharmaceutical product.
     */
    manufacturedDoseForm: fhir.CodeableConceptArgs | null;
    /**
     * The “real world” units in which the quantity of the manufactured item is described.
     */
    unitOfPresentation?: fhir.CodeableConceptArgs | undefined;
    /**
     * Manufacturer of the item (Note that this should be named "manufacturer" but it currently causes technical issues).
     */
    manufacturer?: fhir.ReferenceArgs[] | undefined;
    /**
     * The ingredients of this manufactured item. This is only needed if the ingredients are not specified by incoming references from the Ingredient resource.
     */
    ingredient?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * General characteristics of this item.
     */
    property?: fhir.ManufacturedItemDefinitionPropertyArgs[] | undefined;
}
/**
 * The definition and characteristics of a medicinal manufactured item, such as a tablet or capsule, as contained in a packaged medicinal product.
 */
export declare class ManufacturedItemDefinition extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "ManufacturedItemDefinition";
    /**
     * Unique identifier.
     */
    identifier: fhir.Identifier[];
    /**
     * Allows filtering of manufactured items that are appropriate for use versus not.
     */
    status: fhir.FhirCode<PublicationStatusCodeType> | null;
    /**
     * Dose form as manufactured and before any transformation into the pharmaceutical product.
     */
    manufacturedDoseForm: fhir.CodeableConcept | null;
    /**
     * The “real world” units in which the quantity of the manufactured item is described.
     */
    unitOfPresentation?: fhir.CodeableConcept | undefined;
    /**
     * Manufacturer of the item (Note that this should be named "manufacturer" but it currently causes technical issues).
     */
    manufacturer: fhir.Reference[];
    /**
     * The ingredients of this manufactured item. This is only needed if the ingredients are not specified by incoming references from the Ingredient resource.
     */
    ingredient: fhir.CodeableConcept[];
    /**
     * General characteristics of this item.
     */
    property: fhir.ManufacturedItemDefinitionProperty[];
    /**
     * Default constructor for ManufacturedItemDefinition - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ManufacturedItemDefinitionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=ManufacturedItemDefinition.d.ts.map