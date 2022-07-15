import * as fhir from '../fhir.js';
import { PublicationStatusCodeType } from '../fhirValueSets/PublicationStatusCodes.js';
/**
 * Valid arguments for the AdministrableProductDefinitionProperty type.
 */
export interface AdministrableProductDefinitionPropertyArgs extends fhir.BackboneElementArgs {
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
    /**
     * The status of characteristic e.g. assigned or pending.
     */
    status?: fhir.CodeableConceptArgs | undefined;
}
/**
 * Characteristics e.g. a product's onset of action.
 */
export declare class AdministrableProductDefinitionProperty extends fhir.BackboneElement {
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
     * Internal flag to properly serialize choice-type element AdministrableProductDefinition.property.value[x]
     */
    protected static readonly _fts_valueIsChoice: true;
    /**
     * The status of characteristic e.g. assigned or pending.
     */
    status?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for AdministrableProductDefinitionProperty - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<AdministrableProductDefinitionPropertyArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod type.
 */
export interface AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriodArgs extends fhir.BackboneElementArgs {
    /**
     * Coded expression for the type of tissue for which the withdrawal period applies, e.g. meat, milk.
     */
    tissue: fhir.CodeableConceptArgs | null;
    /**
     * A value for the time.
     */
    value: fhir.QuantityArgs | null;
    /**
     * Extra information about the withdrawal period.
     */
    supportingInformation?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: AdministrableProductDefinition.routeOfAdministration.targetSpecies.withdrawalPeriod.supportingInformation
     */
    _supportingInformation?: fhir.FhirElementArgs;
}
/**
 * A species specific time during which consumption of animal product is not appropriate.
 */
export declare class AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
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
    supportingInformation?: fhir.FhirString | undefined;
    /**
     * Default constructor for AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriodArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the AdministrableProductDefinitionRouteOfAdministrationTargetSpecies type.
 */
export interface AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesArgs extends fhir.BackboneElementArgs {
    /**
     * Coded expression for the species.
     */
    code: fhir.CodeableConceptArgs | null;
    /**
     * A species specific time during which consumption of animal product is not appropriate.
     */
    withdrawalPeriod?: fhir.AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriodArgs[] | undefined;
}
/**
 * A species for which this route applies.
 */
export declare class AdministrableProductDefinitionRouteOfAdministrationTargetSpecies extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Coded expression for the species.
     */
    code: fhir.CodeableConcept | null;
    /**
     * A species specific time during which consumption of animal product is not appropriate.
     */
    withdrawalPeriod: fhir.AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod[];
    /**
     * Default constructor for AdministrableProductDefinitionRouteOfAdministrationTargetSpecies - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the AdministrableProductDefinitionRouteOfAdministration type.
 */
export interface AdministrableProductDefinitionRouteOfAdministrationArgs extends fhir.BackboneElementArgs {
    /**
     * Coded expression for the route.
     */
    code: fhir.CodeableConceptArgs | null;
    /**
     * The first dose (dose quantity) administered can be specified for the product, using a numerical value and its unit of measurement.
     */
    firstDose?: fhir.QuantityArgs | undefined;
    /**
     * The maximum single dose that can be administered, specified using a numerical value and its unit of measurement.
     */
    maxSingleDose?: fhir.QuantityArgs | undefined;
    /**
     * The maximum dose per day (maximum dose quantity to be administered in any one 24-h period) that can be administered.
     */
    maxDosePerDay?: fhir.QuantityArgs | undefined;
    /**
     * The maximum dose per treatment period that can be administered.
     */
    maxDosePerTreatmentPeriod?: fhir.RatioArgs | undefined;
    /**
     * The maximum treatment period during which the product can be administered.
     */
    maxTreatmentPeriod?: fhir.DurationArgs | undefined;
    /**
     * A species for which this route applies.
     */
    targetSpecies?: fhir.AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesArgs[] | undefined;
}
/**
 * The path by which the product is taken into or makes contact with the body. In some regions this is referred to as the licenced or approved route. RouteOfAdministration cannot be used when the 'formOf' product already uses MedicinalProductDefinition.route (and vice versa).
 */
export declare class AdministrableProductDefinitionRouteOfAdministration extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
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
    targetSpecies: fhir.AdministrableProductDefinitionRouteOfAdministrationTargetSpecies[];
    /**
     * Default constructor for AdministrableProductDefinitionRouteOfAdministration - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<AdministrableProductDefinitionRouteOfAdministrationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the AdministrableProductDefinition type.
 */
export interface AdministrableProductDefinitionArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "AdministrableProductDefinition" | undefined;
    /**
     * An identifier for the administrable product.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * Allows filtering of administrable products that are appropriate for use versus not.
     */
    status: fhir.FhirCode<PublicationStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: AdministrableProductDefinition.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * References a product from which one or more of the constituent parts of that product can be prepared and used as described by this administrable product.  If this administrable product describes the administration of a crushed tablet, the 'formOf' would be the product representing a distribution containing tablets and possibly also a cream.  This is distinct from the 'producedFrom' which refers to the specific components of the product that are used in this preparation, rather than the product as a whole.
     */
    formOf?: fhir.ReferenceArgs[] | undefined;
    /**
     * The dose form of the final product after necessary reconstitution or processing. Contrasts to the manufactured dose form (see ManufacturedItemDefinition). If the manufactured form was 'powder for solution for injection', the administrable dose form could be 'solution for injection' (once mixed with another item having manufactured form 'solvent for solution for injection').
     */
    administrableDoseForm?: fhir.CodeableConceptArgs | undefined;
    /**
     * The presentation type in which this item is given to a patient. e.g. for a spray - 'puff' (as in 'contains 100 mcg per puff'), or for a liquid - 'vial' (as in 'contains 5 ml per vial').
     */
    unitOfPresentation?: fhir.CodeableConceptArgs | undefined;
    /**
     * Indicates the specific manufactured items that are part of the 'formOf' product that are used in the preparation of this specific administrable form.  In some cases, an administrable form might use all of the items from the overall product (or there might only be one item), while in other cases, an administrable form might use only a subset of the items available in the overall product.  For example, an administrable form might involve combining a liquid and a powder available as part of an overall product, but not involve applying the also supplied cream.
     */
    producedFrom?: fhir.ReferenceArgs[] | undefined;
    /**
     * The ingredients of this administrable medicinal product. This is only needed if the ingredients are not specified either using ManufacturedItemDefiniton (via AdministrableProductDefinition.producedFrom) to state which component items are used to make this, or using by incoming references from the Ingredient resource, to state in detail which substances exist within this. This element allows a basic coded ingredient to be used.
     */
    ingredient?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * A device that is integral to the medicinal product, in effect being considered as an "ingredient" of the medicinal product. This is not intended for devices that are just co-packaged.
     */
    device?: fhir.ReferenceArgs | undefined;
    /**
     * Characteristics e.g. a product's onset of action.
     */
    property?: fhir.AdministrableProductDefinitionPropertyArgs[] | undefined;
    /**
     * The path by which the product is taken into or makes contact with the body. In some regions this is referred to as the licenced or approved route. RouteOfAdministration cannot be used when the 'formOf' product already uses MedicinalProductDefinition.route (and vice versa).
     */
    routeOfAdministration: fhir.AdministrableProductDefinitionRouteOfAdministrationArgs[] | null;
}
/**
 * A medicinal product in the final form which is suitable for administering to a patient (after any mixing of multiple components, dissolution etc. has been performed).
 */
export declare class AdministrableProductDefinition extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "AdministrableProductDefinition";
    /**
     * An identifier for the administrable product.
     */
    identifier: fhir.Identifier[];
    /**
     * Allows filtering of administrable products that are appropriate for use versus not.
     */
    status: fhir.FhirCode<PublicationStatusCodeType> | null;
    /**
     * References a product from which one or more of the constituent parts of that product can be prepared and used as described by this administrable product.  If this administrable product describes the administration of a crushed tablet, the 'formOf' would be the product representing a distribution containing tablets and possibly also a cream.  This is distinct from the 'producedFrom' which refers to the specific components of the product that are used in this preparation, rather than the product as a whole.
     */
    formOf: fhir.Reference[];
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
    producedFrom: fhir.Reference[];
    /**
     * The ingredients of this administrable medicinal product. This is only needed if the ingredients are not specified either using ManufacturedItemDefiniton (via AdministrableProductDefinition.producedFrom) to state which component items are used to make this, or using by incoming references from the Ingredient resource, to state in detail which substances exist within this. This element allows a basic coded ingredient to be used.
     */
    ingredient: fhir.CodeableConcept[];
    /**
     * A device that is integral to the medicinal product, in effect being considered as an "ingredient" of the medicinal product. This is not intended for devices that are just co-packaged.
     */
    device?: fhir.Reference | undefined;
    /**
     * Characteristics e.g. a product's onset of action.
     */
    property: fhir.AdministrableProductDefinitionProperty[];
    /**
     * The path by which the product is taken into or makes contact with the body. In some regions this is referred to as the licenced or approved route. RouteOfAdministration cannot be used when the 'formOf' product already uses MedicinalProductDefinition.route (and vice versa).
     */
    routeOfAdministration: fhir.AdministrableProductDefinitionRouteOfAdministration[];
    /**
     * Default constructor for AdministrableProductDefinition - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<AdministrableProductDefinitionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=AdministrableProductDefinition.d.ts.map