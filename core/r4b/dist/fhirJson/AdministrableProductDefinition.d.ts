import * as fhir from '../fhirJson.js';
/**
 * Characteristics e.g. a product's onset of action.
 */
export interface AdministrableProductDefinitionProperty extends fhir.BackboneElement {
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
     * Extended properties for primitive element: AdministrableProductDefinition.property.value[x]
     */
    _valueDate?: fhir.FhirElement;
    /**
     * A value for the characteristic.
     */
    valueBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: AdministrableProductDefinition.property.value[x]
     */
    _valueBoolean?: fhir.FhirElement;
    /**
     * A value for the characteristic.
     */
    valueAttachment?: fhir.Attachment | undefined;
    /**
     * The status of characteristic e.g. assigned or pending.
     */
    status?: 'active' | 'draft' | 'retired' | 'unknown' | undefined;
}
/**
 * A species specific time during which consumption of animal product is not appropriate.
 */
export interface AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod extends fhir.BackboneElement {
    /**
     * Coded expression for the type of tissue for which the withdrawal period applies, e.g. meat, milk.
     */
    tissue: fhir.CodeableConcept | null;
    /**
     * A value for the time.
     */
    value: fhir.Quantity | null;
    /**
     * Extra information about the withdrawal period.
     */
    supportingInformation?: string | undefined;
    /**
     * Extended properties for primitive element: AdministrableProductDefinition.routeOfAdministration.targetSpecies.withdrawalPeriod.supportingInformation
     */
    _supportingInformation?: fhir.FhirElement;
}
/**
 * A species for which this route applies.
 */
export interface AdministrableProductDefinitionRouteOfAdministrationTargetSpecies extends fhir.BackboneElement {
    /**
     * Coded expression for the species.
     */
    code: fhir.CodeableConcept | null;
    /**
     * A species specific time during which consumption of animal product is not appropriate.
     */
    withdrawalPeriod?: (fhir.AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod | null)[] | undefined;
}
/**
 * The path by which the product is taken into or makes contact with the body. In some regions this is referred to as the licenced or approved route. RouteOfAdministration cannot be used when the 'formOf' product already uses MedicinalProductDefinition.route (and vice versa).
 */
export interface AdministrableProductDefinitionRouteOfAdministration extends fhir.BackboneElement {
    /**
     * Coded expression for the route.
     */
    code: fhir.CodeableConcept | null;
    /**
     * The first dose (dose quantity) administered can be specified for the product, using a numerical value and its unit of measurement.
     */
    firstDose?: fhir.Quantity | undefined;
    /**
     * The maximum single dose that can be administered, specified using a numerical value and its unit of measurement.
     */
    maxSingleDose?: fhir.Quantity | undefined;
    /**
     * The maximum dose per day (maximum dose quantity to be administered in any one 24-h period) that can be administered.
     */
    maxDosePerDay?: fhir.Quantity | undefined;
    /**
     * The maximum dose per treatment period that can be administered.
     */
    maxDosePerTreatmentPeriod?: fhir.Ratio | undefined;
    /**
     * The maximum treatment period during which the product can be administered.
     */
    maxTreatmentPeriod?: fhir.Duration | undefined;
    /**
     * A species for which this route applies.
     */
    targetSpecies?: (fhir.AdministrableProductDefinitionRouteOfAdministrationTargetSpecies | null)[] | undefined;
}
/**
 * A medicinal product in the final form which is suitable for administering to a patient (after any mixing of multiple components, dissolution etc. has been performed).
 */
export interface AdministrableProductDefinition extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "AdministrableProductDefinition" | null;
    /**
     * An identifier for the administrable product.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * Allows filtering of administrable products that are appropriate for use versus not.
     */
    status: 'active' | 'draft' | 'retired' | 'unknown' | null;
    /**
     * Extended properties for primitive element: AdministrableProductDefinition.status
     */
    _status?: fhir.FhirElement;
    /**
     * References a product from which one or more of the constituent parts of that product can be prepared and used as described by this administrable product.  If this administrable product describes the administration of a crushed tablet, the 'formOf' would be the product representing a distribution containing tablets and possibly also a cream.  This is distinct from the 'producedFrom' which refers to the specific components of the product that are used in this preparation, rather than the product as a whole.
     */
    formOf?: (fhir.Reference | null)[] | undefined;
    /**
     * The dose form of the final product after necessary reconstitution or processing. Contrasts to the manufactured dose form (see ManufacturedItemDefinition). If the manufactured form was 'powder for solution for injection', the administrable dose form could be 'solution for injection' (once mixed with another item having manufactured form 'solvent for solution for injection').
     */
    administrableDoseForm?: fhir.CodeableConcept | undefined;
    /**
     * The presentation type in which this item is given to a patient. e.g. for a spray - 'puff' (as in 'contains 100 mcg per puff'), or for a liquid - 'vial' (as in 'contains 5 ml per vial').
     */
    unitOfPresentation?: fhir.CodeableConcept | undefined;
    /**
     * Indicates the specific manufactured items that are part of the 'formOf' product that are used in the preparation of this specific administrable form.  In some cases, an administrable form might use all of the items from the overall product (or there might only be one item), while in other cases, an administrable form might use only a subset of the items available in the overall product.  For example, an administrable form might involve combining a liquid and a powder available as part of an overall product, but not involve applying the also supplied cream.
     */
    producedFrom?: (fhir.Reference | null)[] | undefined;
    /**
     * The ingredients of this administrable medicinal product. This is only needed if the ingredients are not specified either using ManufacturedItemDefiniton (via AdministrableProductDefinition.producedFrom) to state which component items are used to make this, or using by incoming references from the Ingredient resource, to state in detail which substances exist within this. This element allows a basic coded ingredient to be used.
     */
    ingredient?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * A device that is integral to the medicinal product, in effect being considered as an "ingredient" of the medicinal product. This is not intended for devices that are just co-packaged.
     */
    device?: fhir.Reference | undefined;
    /**
     * Characteristics e.g. a product's onset of action.
     */
    property?: (fhir.AdministrableProductDefinitionProperty | null)[] | undefined;
    /**
     * The path by which the product is taken into or makes contact with the body. In some regions this is referred to as the licenced or approved route. RouteOfAdministration cannot be used when the 'formOf' product already uses MedicinalProductDefinition.route (and vice versa).
     */
    routeOfAdministration: (fhir.AdministrableProductDefinitionRouteOfAdministration | null)[] | null;
}
//# sourceMappingURL=AdministrableProductDefinition.d.ts.map