import * as fhir from '../fhir.js';
import { NutritionproductStatusCodeType } from '../fhirValueSets/NutritionproductStatusCodes.js';
/**
 * Valid arguments for the NutritionProductNutrient type.
 */
export interface NutritionProductNutrientArgs extends fhir.BackboneElementArgs {
    /**
     * The (relevant) nutrients in the product.
     */
    item?: fhir.CodeableReferenceArgs | undefined;
    /**
     * The amount of nutrient expressed in one or more units: X per pack / per serving / per dose.
     */
    amount?: fhir.RatioArgs[] | undefined;
}
/**
 * Note: This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
 */
export declare class NutritionProductNutrient extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The (relevant) nutrients in the product.
     */
    item?: fhir.CodeableReference | undefined;
    /**
     * The amount of nutrient expressed in one or more units: X per pack / per serving / per dose.
     */
    amount: fhir.Ratio[];
    /**
     * Default constructor for NutritionProductNutrient - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<NutritionProductNutrientArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the NutritionProductIngredient type.
 */
export interface NutritionProductIngredientArgs extends fhir.BackboneElementArgs {
    /**
     * The ingredient contained in the product.
     */
    item: fhir.CodeableReferenceArgs | null;
    /**
     * The amount of ingredient that is in the product.
     */
    amount?: fhir.RatioArgs[] | undefined;
}
/**
 * Ingredients contained in this product.
 */
export declare class NutritionProductIngredient extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The ingredient contained in the product.
     */
    item: fhir.CodeableReference | null;
    /**
     * The amount of ingredient that is in the product.
     */
    amount: fhir.Ratio[];
    /**
     * Default constructor for NutritionProductIngredient - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<NutritionProductIngredientArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the NutritionProductProductCharacteristic type.
 */
export interface NutritionProductProductCharacteristicArgs extends fhir.BackboneElementArgs {
    /**
     * A code specifying which characteristic of the product is being described (for example, colour, shape).
     */
    type: fhir.CodeableConceptArgs | null;
    /**
     * The description should be provided as a CodeableConcept, SimpleQuantity or an image.  The description can be a string only when these others are not available.
     */
    value?: fhir.CodeableConcept | fhir.FhirString | fhir.Quantity | fhir.FhirBase64Binary | fhir.Attachment | fhir.FhirBoolean | undefined;
    /**
     * The description should be provided as a CodeableConcept, SimpleQuantity or an image.  The description can be a string only when these others are not available.
     */
    valueCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * The description should be provided as a CodeableConcept, SimpleQuantity or an image.  The description can be a string only when these others are not available.
     */
    valueString?: fhir.FhirString | string | undefined;
    /**
     * The description should be provided as a CodeableConcept, SimpleQuantity or an image.  The description can be a string only when these others are not available.
     */
    valueQuantity?: fhir.QuantityArgs | undefined;
    /**
     * The description should be provided as a CodeableConcept, SimpleQuantity or an image.  The description can be a string only when these others are not available.
     */
    valueBase64Binary?: fhir.FhirBase64Binary | string | undefined;
    /**
     * The description should be provided as a CodeableConcept, SimpleQuantity or an image.  The description can be a string only when these others are not available.
     */
    valueAttachment?: fhir.AttachmentArgs | undefined;
    /**
     * The description should be provided as a CodeableConcept, SimpleQuantity or an image.  The description can be a string only when these others are not available.
     */
    valueBoolean?: fhir.FhirBoolean | boolean | undefined;
}
/**
 * Specifies descriptive properties of the nutrition product.
 */
export declare class NutritionProductProductCharacteristic extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * A code specifying which characteristic of the product is being described (for example, colour, shape).
     */
    type: fhir.CodeableConcept | null;
    /**
     * The description should be provided as a CodeableConcept, SimpleQuantity or an image.  The description can be a string only when these others are not available.
     */
    value: (fhir.CodeableConcept | fhir.FhirString | fhir.Quantity | fhir.FhirBase64Binary | fhir.Attachment | fhir.FhirBoolean) | null;
    /**
     * Internal flag to properly serialize choice-type element NutritionProduct.productCharacteristic.value[x]
     */
    protected static readonly _fts_valueIsChoice: true;
    /**
     * Default constructor for NutritionProductProductCharacteristic - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<NutritionProductProductCharacteristicArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the NutritionProductInstance type.
 */
export interface NutritionProductInstanceArgs extends fhir.BackboneElementArgs {
    /**
     * The amount of items or instances that the resource considers, for instance when referring to 2 identical units together.
     */
    quantity?: fhir.QuantityArgs | undefined;
    /**
     * The identifier for the physical instance, typically a serial number.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * The identification of the batch or lot of the product.
     */
    lotNumber?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: NutritionProduct.instance.lotNumber
     */
    _lotNumber?: fhir.FhirElementArgs;
    /**
     * The time after which the product is no longer expected to be in proper condition, or its use is not advised or not allowed.
     */
    expiry?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: NutritionProduct.instance.expiry
     */
    _expiry?: fhir.FhirElementArgs;
    /**
     * The time after which the product is no longer expected to be in proper condition, or its use is not advised or not allowed.
     */
    useBy?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: NutritionProduct.instance.useBy
     */
    _useBy?: fhir.FhirElementArgs;
}
/**
 * Conveys instance-level information about this product item. One or several physical, countable instances or occurrences of the product.
 */
export declare class NutritionProductInstance extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The amount of items or instances that the resource considers, for instance when referring to 2 identical units together.
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * The identifier for the physical instance, typically a serial number.
     */
    identifier: fhir.Identifier[];
    /**
     * The identification of the batch or lot of the product.
     */
    lotNumber?: fhir.FhirString | undefined;
    /**
     * The time after which the product is no longer expected to be in proper condition, or its use is not advised or not allowed.
     */
    expiry?: fhir.FhirDateTime | undefined;
    /**
     * The time after which the product is no longer expected to be in proper condition, or its use is not advised or not allowed.
     */
    useBy?: fhir.FhirDateTime | undefined;
    /**
     * Default constructor for NutritionProductInstance - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<NutritionProductInstanceArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the NutritionProduct type.
 */
export interface NutritionProductArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "NutritionProduct" | undefined;
    /**
     * Unknown does not represent "other" - one of the defined statuses must apply.  Unknown is used when the authoring system is not sure what the current status is.
     */
    status: fhir.FhirCode<NutritionproductStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: NutritionProduct.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * Nutrition products can have different classifications - according to its nutritional properties, preparation methods, etc.
     */
    category?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The code assigned to the product, for example a manufacturer number or other terminology.
     */
    code?: fhir.CodeableConceptArgs | undefined;
    /**
     * The organisation (manufacturer, representative or legal authorisation holder) that is responsible for the device.
     */
    manufacturer?: fhir.ReferenceArgs[] | undefined;
    /**
     * Note: This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
     */
    nutrient?: fhir.NutritionProductNutrientArgs[] | undefined;
    /**
     * Ingredients contained in this product.
     */
    ingredient?: fhir.NutritionProductIngredientArgs[] | undefined;
    /**
     * Allergens that are known or suspected to be a part of this nutrition product.
     */
    knownAllergen?: fhir.CodeableReferenceArgs[] | undefined;
    /**
     * Specifies descriptive properties of the nutrition product.
     */
    productCharacteristic?: fhir.NutritionProductProductCharacteristicArgs[] | undefined;
    /**
     * Conveys instance-level information about this product item. One or several physical, countable instances or occurrences of the product.
     */
    instance?: fhir.NutritionProductInstanceArgs | undefined;
    /**
     * Comments made about the product.
     */
    note?: fhir.AnnotationArgs[] | undefined;
}
/**
 * A food or fluid product that is consumed by patients.
 */
export declare class NutritionProduct extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "NutritionProduct";
    /**
     * Unknown does not represent "other" - one of the defined statuses must apply.  Unknown is used when the authoring system is not sure what the current status is.
     */
    status: fhir.FhirCode<NutritionproductStatusCodeType> | null;
    /**
     * Nutrition products can have different classifications - according to its nutritional properties, preparation methods, etc.
     */
    category: fhir.CodeableConcept[];
    /**
     * The code assigned to the product, for example a manufacturer number or other terminology.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * The organisation (manufacturer, representative or legal authorisation holder) that is responsible for the device.
     */
    manufacturer: fhir.Reference[];
    /**
     * Note: This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
     */
    nutrient: fhir.NutritionProductNutrient[];
    /**
     * Ingredients contained in this product.
     */
    ingredient: fhir.NutritionProductIngredient[];
    /**
     * Allergens that are known or suspected to be a part of this nutrition product.
     */
    knownAllergen: fhir.CodeableReference[];
    /**
     * Specifies descriptive properties of the nutrition product.
     */
    productCharacteristic: fhir.NutritionProductProductCharacteristic[];
    /**
     * Conveys instance-level information about this product item. One or several physical, countable instances or occurrences of the product.
     */
    instance?: fhir.NutritionProductInstance | undefined;
    /**
     * Comments made about the product.
     */
    note: fhir.Annotation[];
    /**
     * Default constructor for NutritionProduct - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<NutritionProductArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=NutritionProduct.d.ts.map