import * as fhir from '../fhirJson.js';
/**
 * Note: This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
 */
export interface NutritionProductNutrient extends fhir.BackboneElement {
    /**
     * The (relevant) nutrients in the product.
     */
    item?: fhir.CodeableReference | undefined;
    /**
     * The amount of nutrient expressed in one or more units: X per pack / per serving / per dose.
     */
    amount?: (fhir.Ratio | null)[] | undefined;
}
/**
 * Ingredients contained in this product.
 */
export interface NutritionProductIngredient extends fhir.BackboneElement {
    /**
     * The ingredient contained in the product.
     */
    item: fhir.CodeableReference | null;
    /**
     * The amount of ingredient that is in the product.
     */
    amount?: (fhir.Ratio | null)[] | undefined;
}
/**
 * Specifies descriptive properties of the nutrition product.
 */
export interface NutritionProductProductCharacteristic extends fhir.BackboneElement {
    /**
     * A code specifying which characteristic of the product is being described (for example, colour, shape).
     */
    type: fhir.CodeableConcept | null;
    /**
     * The description should be provided as a CodeableConcept, SimpleQuantity or an image.  The description can be a string only when these others are not available.
     */
    valueCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * The description should be provided as a CodeableConcept, SimpleQuantity or an image.  The description can be a string only when these others are not available.
     */
    valueString?: string | undefined;
    /**
     * Extended properties for primitive element: NutritionProduct.productCharacteristic.value[x]
     */
    _valueString?: fhir.FhirElement;
    /**
     * The description should be provided as a CodeableConcept, SimpleQuantity or an image.  The description can be a string only when these others are not available.
     */
    valueQuantity?: fhir.Quantity | undefined;
    /**
     * The description should be provided as a CodeableConcept, SimpleQuantity or an image.  The description can be a string only when these others are not available.
     */
    valueBase64Binary?: string | undefined;
    /**
     * Extended properties for primitive element: NutritionProduct.productCharacteristic.value[x]
     */
    _valueBase64Binary?: fhir.FhirElement;
    /**
     * The description should be provided as a CodeableConcept, SimpleQuantity or an image.  The description can be a string only when these others are not available.
     */
    valueAttachment?: fhir.Attachment | undefined;
    /**
     * The description should be provided as a CodeableConcept, SimpleQuantity or an image.  The description can be a string only when these others are not available.
     */
    valueBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: NutritionProduct.productCharacteristic.value[x]
     */
    _valueBoolean?: fhir.FhirElement;
}
/**
 * Conveys instance-level information about this product item. One or several physical, countable instances or occurrences of the product.
 */
export interface NutritionProductInstance extends fhir.BackboneElement {
    /**
     * The amount of items or instances that the resource considers, for instance when referring to 2 identical units together.
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * The identifier for the physical instance, typically a serial number.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * The identification of the batch or lot of the product.
     */
    lotNumber?: string | undefined;
    /**
     * Extended properties for primitive element: NutritionProduct.instance.lotNumber
     */
    _lotNumber?: fhir.FhirElement;
    /**
     * The time after which the product is no longer expected to be in proper condition, or its use is not advised or not allowed.
     */
    expiry?: string | undefined;
    /**
     * Extended properties for primitive element: NutritionProduct.instance.expiry
     */
    _expiry?: fhir.FhirElement;
    /**
     * The time after which the product is no longer expected to be in proper condition, or its use is not advised or not allowed.
     */
    useBy?: string | undefined;
    /**
     * Extended properties for primitive element: NutritionProduct.instance.useBy
     */
    _useBy?: fhir.FhirElement;
}
/**
 * A food or fluid product that is consumed by patients.
 */
export interface NutritionProduct extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "NutritionProduct" | null;
    /**
     * Unknown does not represent "other" - one of the defined statuses must apply.  Unknown is used when the authoring system is not sure what the current status is.
     */
    status: 'active' | 'entered-in-error' | 'inactive' | null;
    /**
     * Extended properties for primitive element: NutritionProduct.status
     */
    _status?: fhir.FhirElement;
    /**
     * Nutrition products can have different classifications - according to its nutritional properties, preparation methods, etc.
     */
    category?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * The code assigned to the product, for example a manufacturer number or other terminology.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * The organisation (manufacturer, representative or legal authorisation holder) that is responsible for the device.
     */
    manufacturer?: (fhir.Reference | null)[] | undefined;
    /**
     * Note: This is a business identifier, not a resource identifier (see [discussion](resource.html#identifiers)).  It is best practice for the identifier to only appear on a single resource instance, however business practices may occasionally dictate that multiple resource instances with the same identifier can exist - possibly even with different resource types.  For example, multiple Patient and a Person resource instance might share the same social insurance number.
     */
    nutrient?: (fhir.NutritionProductNutrient | null)[] | undefined;
    /**
     * Ingredients contained in this product.
     */
    ingredient?: (fhir.NutritionProductIngredient | null)[] | undefined;
    /**
     * Allergens that are known or suspected to be a part of this nutrition product.
     */
    knownAllergen?: (fhir.CodeableReference | null)[] | undefined;
    /**
     * Specifies descriptive properties of the nutrition product.
     */
    productCharacteristic?: (fhir.NutritionProductProductCharacteristic | null)[] | undefined;
    /**
     * Conveys instance-level information about this product item. One or several physical, countable instances or occurrences of the product.
     */
    instance?: fhir.NutritionProductInstance | undefined;
    /**
     * Comments made about the product.
     */
    note?: (fhir.Annotation | null)[] | undefined;
}
//# sourceMappingURL=NutritionProduct.d.ts.map