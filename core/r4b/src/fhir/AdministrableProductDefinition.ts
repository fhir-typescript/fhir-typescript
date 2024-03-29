// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR Resource: AdministrableProductDefinition

import * as fhir from '../fhir.js';

// @ts-ignore
import { PublicationStatusCodes,  PublicationStatusCodeType } from '../fhirValueSets/PublicationStatusCodes.js';
// @ts-ignore
import { PublicationStatusVsValidation } from '../fhirValueSets/PublicationStatusVsValidation.js';
// @ts-ignore
import { AnimalTissueTypeCodes,  AnimalTissueTypeCodeType } from '../fhirValueSets/AnimalTissueTypeCodes.js';
// @ts-ignore
import { AnimalTissueTypeVsValidation } from '../fhirValueSets/AnimalTissueTypeVsValidation.js';
// @ts-ignore
import { TargetSpeciesCodes,  TargetSpeciesCodeType } from '../fhirValueSets/TargetSpeciesCodes.js';
// @ts-ignore
import { TargetSpeciesVsValidation } from '../fhirValueSets/TargetSpeciesVsValidation.js';
// @ts-ignore
import { RouteCodes,  RouteCodeType } from '../fhirValueSets/RouteCodes.js';
// @ts-ignore
import { RouteVsValidation } from '../fhirValueSets/RouteVsValidation.js';
// @ts-ignore
import { AdministrableDoseFormCodes,  AdministrableDoseFormCodeType } from '../fhirValueSets/AdministrableDoseFormCodes.js';
// @ts-ignore
import { AdministrableDoseFormVsValidation } from '../fhirValueSets/AdministrableDoseFormVsValidation.js';
// @ts-ignore
import { UnitOfPresentationCodes,  UnitOfPresentationCodeType } from '../fhirValueSets/UnitOfPresentationCodes.js';
// @ts-ignore
import { UnitOfPresentationVsValidation } from '../fhirValueSets/UnitOfPresentationVsValidation.js';
/**
 * Valid arguments for the AdministrableProductDefinitionProperty type.
 */
export interface AdministrableProductDefinitionPropertyArgs extends fhir.BackboneElementArgs {
  /**
   * A code expressing the type of characteristic.
   */
  type: fhir.CodeableConceptArgs|null;
  /**
   * A value for the characteristic.
   */
  value?: fhir.CodeableConcept|fhir.Quantity|fhir.FhirDate|fhir.FhirBoolean|fhir.Attachment|undefined;
  /**
   * A value for the characteristic.
   */
  valueCodeableConcept?: fhir.CodeableConceptArgs|undefined;
  /**
   * A value for the characteristic.
   */
  valueQuantity?: fhir.QuantityArgs|undefined;
  /**
   * A value for the characteristic.
   */
  valueDate?: fhir.FhirDate|string|undefined;
  /**
   * A value for the characteristic.
   */
  valueBoolean?: fhir.FhirBoolean|boolean|undefined;
  /**
   * A value for the characteristic.
   */
  valueAttachment?: fhir.AttachmentArgs|undefined;
  /**
   * The status of characteristic e.g. assigned or pending.
   */
  status?: fhir.CodeableConceptArgs|undefined;
}

/**
 * Characteristics e.g. a product's onset of action.
 */
export class AdministrableProductDefinitionProperty extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'AdministrableProductDefinitionProperty';
  /**
   * A code expressing the type of characteristic.
   */
  public type: fhir.CodeableConcept|null;
  /**
   * A value for the characteristic.
   */
  public value?: (fhir.CodeableConcept|fhir.Quantity|fhir.FhirDate|fhir.FhirBoolean|fhir.Attachment)|undefined;
  /**
   * Internal flag to properly serialize choice-type element AdministrableProductDefinition.property.value[x]
   */
  protected static readonly _fts_valueIsChoice:true = true;
  /**
   * The status of characteristic e.g. assigned or pending.
   */
  public status?: fhir.CodeableConcept|undefined;
  /**
   * Default constructor for AdministrableProductDefinitionProperty - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<AdministrableProductDefinitionPropertyArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type, options); }
    else { this.type = null; }
    if (source['value']) { this.value = source.value; }
    else if (source['valueCodeableConcept']) { this.value = new fhir.CodeableConcept(source.valueCodeableConcept, options); }
    else if (source['valueQuantity']) { this.value = new fhir.Quantity(source.valueQuantity, options); }
    else if (source['valueDate'] !== undefined) { this.value = new fhir.FhirDate({value: source.valueDate}, options); }
    else if (source['valueBoolean'] !== undefined) { this.value = new fhir.FhirBoolean({value: source.valueBoolean}, options); }
    else if (source['valueAttachment']) { this.value = new fhir.Attachment(source.valueAttachment, options); }
    if (source['status']) { this.status = new fhir.CodeableConcept(source.status, options); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'AdministrableProductDefinition.property' }
    iss.push(...this.vRS('type',exp));
    iss.push(...this.vOS('value',exp));
    iss.push(...this.vOSV('status',exp,'PublicationStatus',PublicationStatusVsValidation,'r'));
    return iss;
  }
}
/**
 * Valid arguments for the AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod type.
 */
export interface AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriodArgs extends fhir.BackboneElementArgs {
  /**
   * Coded expression for the type of tissue for which the withdrawal period applies, e.g. meat, milk.
   */
  tissue: fhir.CodeableConceptArgs|null;
  /**
   * A value for the time.
   */
  value: fhir.QuantityArgs|null;
  /**
   * Extra information about the withdrawal period.
   */
  supportingInformation?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: AdministrableProductDefinition.routeOfAdministration.targetSpecies.withdrawalPeriod.supportingInformation
   */
  _supportingInformation?:fhir.FhirElementArgs;
}

/**
 * A species specific time during which consumption of animal product is not appropriate.
 */
export class AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod';
  /**
   * Coded expression for the type of tissue for which the withdrawal period applies, e.g. meat, milk.
   */
  public tissue: fhir.CodeableConcept|null;
  /**
   * A value for the time.
   */
  public value: fhir.Quantity|null;
  /**
   * Extra information about the withdrawal period.
   */
  public supportingInformation?: fhir.FhirString|undefined;
  /**
   * Default constructor for AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriodArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['tissue']) { this.tissue = new fhir.CodeableConcept(source.tissue, options); }
    else { this.tissue = null; }
    if (source['value']) { this.value = new fhir.Quantity(source.value, options); }
    else { this.value = null; }
    if (source['supportingInformation'] !== undefined) { this.supportingInformation = new fhir.FhirString({value: source.supportingInformation}, options); }
    if (source['_supportingInformation']) {
      if (this.supportingInformation) { this.supportingInformation.addExtendedProperties(source._supportingInformation!); }
      else { this.supportingInformation = new fhir.FhirString(source._supportingInformation as Partial<fhir.FhirStringArgs>, options); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'AdministrableProductDefinition.routeOfAdministration.targetSpecies.withdrawalPeriod' }
    iss.push(...this.vRS('tissue',exp));
    iss.push(...this.vRS('value',exp));
    iss.push(...this.vOS('supportingInformation',exp));
    return iss;
  }
}
/**
 * Valid arguments for the AdministrableProductDefinitionRouteOfAdministrationTargetSpecies type.
 */
export interface AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesArgs extends fhir.BackboneElementArgs {
  /**
   * Coded expression for the species.
   */
  code: fhir.CodeableConceptArgs|null;
  /**
   * A species specific time during which consumption of animal product is not appropriate.
   */
  withdrawalPeriod?: fhir.AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriodArgs[]|undefined;
}

/**
 * A species for which this route applies.
 */
export class AdministrableProductDefinitionRouteOfAdministrationTargetSpecies extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'AdministrableProductDefinitionRouteOfAdministrationTargetSpecies';
  /**
   * Coded expression for the species.
   */
  public code: fhir.CodeableConcept|null;
  /**
   * A species specific time during which consumption of animal product is not appropriate.
   */
  public withdrawalPeriod: fhir.AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod[];
  /**
   * Default constructor for AdministrableProductDefinitionRouteOfAdministrationTargetSpecies - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['code']) { this.code = new fhir.CodeableConcept(source.code, options); }
    else { this.code = null; }
    if (source['withdrawalPeriod']) { this.withdrawalPeriod = source.withdrawalPeriod.map((x) => new fhir.AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesWithdrawalPeriod(x, options)); }
    else { this.withdrawalPeriod = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'AdministrableProductDefinition.routeOfAdministration.targetSpecies' }
    iss.push(...this.vRS('code',exp));
    iss.push(...this.vOA('withdrawalPeriod',exp));
    return iss;
  }
}
/**
 * Valid arguments for the AdministrableProductDefinitionRouteOfAdministration type.
 */
export interface AdministrableProductDefinitionRouteOfAdministrationArgs extends fhir.BackboneElementArgs {
  /**
   * Coded expression for the route.
   */
  code: fhir.CodeableConceptArgs|null;
  /**
   * The first dose (dose quantity) administered can be specified for the product, using a numerical value and its unit of measurement.
   */
  firstDose?: fhir.QuantityArgs|undefined;
  /**
   * The maximum single dose that can be administered, specified using a numerical value and its unit of measurement.
   */
  maxSingleDose?: fhir.QuantityArgs|undefined;
  /**
   * The maximum dose per day (maximum dose quantity to be administered in any one 24-h period) that can be administered.
   */
  maxDosePerDay?: fhir.QuantityArgs|undefined;
  /**
   * The maximum dose per treatment period that can be administered.
   */
  maxDosePerTreatmentPeriod?: fhir.RatioArgs|undefined;
  /**
   * The maximum treatment period during which the product can be administered.
   */
  maxTreatmentPeriod?: fhir.DurationArgs|undefined;
  /**
   * A species for which this route applies.
   */
  targetSpecies?: fhir.AdministrableProductDefinitionRouteOfAdministrationTargetSpeciesArgs[]|undefined;
}

/**
 * The path by which the product is taken into or makes contact with the body. In some regions this is referred to as the licenced or approved route. RouteOfAdministration cannot be used when the 'formOf' product already uses MedicinalProductDefinition.route (and vice versa).
 */
export class AdministrableProductDefinitionRouteOfAdministration extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'AdministrableProductDefinitionRouteOfAdministration';
  /**
   * Coded expression for the route.
   */
  public code: fhir.CodeableConcept|null;
  /**
   * The first dose (dose quantity) administered can be specified for the product, using a numerical value and its unit of measurement.
   */
  public firstDose?: fhir.Quantity|undefined;
  /**
   * The maximum single dose that can be administered, specified using a numerical value and its unit of measurement.
   */
  public maxSingleDose?: fhir.Quantity|undefined;
  /**
   * The maximum dose per day (maximum dose quantity to be administered in any one 24-h period) that can be administered.
   */
  public maxDosePerDay?: fhir.Quantity|undefined;
  /**
   * The maximum dose per treatment period that can be administered.
   */
  public maxDosePerTreatmentPeriod?: fhir.Ratio|undefined;
  /**
   * The maximum treatment period during which the product can be administered.
   */
  public maxTreatmentPeriod?: fhir.Duration|undefined;
  /**
   * A species for which this route applies.
   */
  public targetSpecies: fhir.AdministrableProductDefinitionRouteOfAdministrationTargetSpecies[];
  /**
   * Default constructor for AdministrableProductDefinitionRouteOfAdministration - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<AdministrableProductDefinitionRouteOfAdministrationArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['code']) { this.code = new fhir.CodeableConcept(source.code, options); }
    else { this.code = null; }
    if (source['firstDose']) { this.firstDose = new fhir.Quantity(source.firstDose, options); }
    if (source['maxSingleDose']) { this.maxSingleDose = new fhir.Quantity(source.maxSingleDose, options); }
    if (source['maxDosePerDay']) { this.maxDosePerDay = new fhir.Quantity(source.maxDosePerDay, options); }
    if (source['maxDosePerTreatmentPeriod']) { this.maxDosePerTreatmentPeriod = new fhir.Ratio(source.maxDosePerTreatmentPeriod, options); }
    if (source['maxTreatmentPeriod']) { this.maxTreatmentPeriod = new fhir.Duration(source.maxTreatmentPeriod, options); }
    if (source['targetSpecies']) { this.targetSpecies = source.targetSpecies.map((x) => new fhir.AdministrableProductDefinitionRouteOfAdministrationTargetSpecies(x, options)); }
    else { this.targetSpecies = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'AdministrableProductDefinition.routeOfAdministration' }
    iss.push(...this.vRS('code',exp));
    iss.push(...this.vOS('firstDose',exp));
    iss.push(...this.vOS('maxSingleDose',exp));
    iss.push(...this.vOS('maxDosePerDay',exp));
    iss.push(...this.vOS('maxDosePerTreatmentPeriod',exp));
    iss.push(...this.vOS('maxTreatmentPeriod',exp));
    iss.push(...this.vOA('targetSpecies',exp));
    return iss;
  }
}
/**
 * Valid arguments for the AdministrableProductDefinition type.
 */
export interface AdministrableProductDefinitionArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "AdministrableProductDefinition"|undefined;
  /**
   * An identifier for the administrable product.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * Allows filtering of administrable products that are appropriate for use versus not.
   */
  status: fhir.FhirCode<PublicationStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: AdministrableProductDefinition.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * References a product from which one or more of the constituent parts of that product can be prepared and used as described by this administrable product.  If this administrable product describes the administration of a crushed tablet, the 'formOf' would be the product representing a distribution containing tablets and possibly also a cream.  This is distinct from the 'producedFrom' which refers to the specific components of the product that are used in this preparation, rather than the product as a whole.
   */
  formOf?: fhir.ReferenceArgs[]|undefined;
  /**
   * The dose form of the final product after necessary reconstitution or processing. Contrasts to the manufactured dose form (see ManufacturedItemDefinition). If the manufactured form was 'powder for solution for injection', the administrable dose form could be 'solution for injection' (once mixed with another item having manufactured form 'solvent for solution for injection').
   */
  administrableDoseForm?: fhir.CodeableConceptArgs|undefined;
  /**
   * The presentation type in which this item is given to a patient. e.g. for a spray - 'puff' (as in 'contains 100 mcg per puff'), or for a liquid - 'vial' (as in 'contains 5 ml per vial').
   */
  unitOfPresentation?: fhir.CodeableConceptArgs|undefined;
  /**
   * Indicates the specific manufactured items that are part of the 'formOf' product that are used in the preparation of this specific administrable form.  In some cases, an administrable form might use all of the items from the overall product (or there might only be one item), while in other cases, an administrable form might use only a subset of the items available in the overall product.  For example, an administrable form might involve combining a liquid and a powder available as part of an overall product, but not involve applying the also supplied cream.
   */
  producedFrom?: fhir.ReferenceArgs[]|undefined;
  /**
   * The ingredients of this administrable medicinal product. This is only needed if the ingredients are not specified either using ManufacturedItemDefiniton (via AdministrableProductDefinition.producedFrom) to state which component items are used to make this, or using by incoming references from the Ingredient resource, to state in detail which substances exist within this. This element allows a basic coded ingredient to be used.
   */
  ingredient?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * A device that is integral to the medicinal product, in effect being considered as an "ingredient" of the medicinal product. This is not intended for devices that are just co-packaged.
   */
  device?: fhir.ReferenceArgs|undefined;
  /**
   * Characteristics e.g. a product's onset of action.
   */
  property?: fhir.AdministrableProductDefinitionPropertyArgs[]|undefined;
  /**
   * The path by which the product is taken into or makes contact with the body. In some regions this is referred to as the licenced or approved route. RouteOfAdministration cannot be used when the 'formOf' product already uses MedicinalProductDefinition.route (and vice versa).
   */
  routeOfAdministration: fhir.AdministrableProductDefinitionRouteOfAdministrationArgs[]|null;
}

/**
 * A medicinal product in the final form which is suitable for administering to a patient (after any mixing of multiple components, dissolution etc. has been performed).
 */
export class AdministrableProductDefinition extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'AdministrableProductDefinition';
  /**
   * Resource Type Name
   */
  public override resourceType: "AdministrableProductDefinition";
  /**
   * An identifier for the administrable product.
   */
  public identifier: fhir.Identifier[];
  /**
   * Allows filtering of administrable products that are appropriate for use versus not.
   */
  public status: fhir.FhirCode<PublicationStatusCodeType>|null;
  /**
   * References a product from which one or more of the constituent parts of that product can be prepared and used as described by this administrable product.  If this administrable product describes the administration of a crushed tablet, the 'formOf' would be the product representing a distribution containing tablets and possibly also a cream.  This is distinct from the 'producedFrom' which refers to the specific components of the product that are used in this preparation, rather than the product as a whole.
   */
  public formOf: fhir.Reference[];
  /**
   * The dose form of the final product after necessary reconstitution or processing. Contrasts to the manufactured dose form (see ManufacturedItemDefinition). If the manufactured form was 'powder for solution for injection', the administrable dose form could be 'solution for injection' (once mixed with another item having manufactured form 'solvent for solution for injection').
   */
  public administrableDoseForm?: fhir.CodeableConcept|undefined;
  /**
   * The presentation type in which this item is given to a patient. e.g. for a spray - 'puff' (as in 'contains 100 mcg per puff'), or for a liquid - 'vial' (as in 'contains 5 ml per vial').
   */
  public unitOfPresentation?: fhir.CodeableConcept|undefined;
  /**
   * Indicates the specific manufactured items that are part of the 'formOf' product that are used in the preparation of this specific administrable form.  In some cases, an administrable form might use all of the items from the overall product (or there might only be one item), while in other cases, an administrable form might use only a subset of the items available in the overall product.  For example, an administrable form might involve combining a liquid and a powder available as part of an overall product, but not involve applying the also supplied cream.
   */
  public producedFrom: fhir.Reference[];
  /**
   * The ingredients of this administrable medicinal product. This is only needed if the ingredients are not specified either using ManufacturedItemDefiniton (via AdministrableProductDefinition.producedFrom) to state which component items are used to make this, or using by incoming references from the Ingredient resource, to state in detail which substances exist within this. This element allows a basic coded ingredient to be used.
   */
  public ingredient: fhir.CodeableConcept[];
  /**
   * A device that is integral to the medicinal product, in effect being considered as an "ingredient" of the medicinal product. This is not intended for devices that are just co-packaged.
   */
  public device?: fhir.Reference|undefined;
  /**
   * Characteristics e.g. a product's onset of action.
   */
  public property: fhir.AdministrableProductDefinitionProperty[];
  /**
   * The path by which the product is taken into or makes contact with the body. In some regions this is referred to as the licenced or approved route. RouteOfAdministration cannot be used when the 'formOf' product already uses MedicinalProductDefinition.route (and vice versa).
   */
  public routeOfAdministration: fhir.AdministrableProductDefinitionRouteOfAdministration[];
  /**
   * Default constructor for AdministrableProductDefinition - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<AdministrableProductDefinitionArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'AdministrableProductDefinition';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x, options)); }
    else { this.identifier = []; }
    if (source['status'] !== undefined) { this.status = new fhir.FhirCode<PublicationStatusCodeType>({value: source.status}, options); }
    else { this.status = null; }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<PublicationStatusCodeType>(source._status as Partial<fhir.FhirCode>, options); }
    }
    if (source['formOf']) { this.formOf = source.formOf.map((x) => new fhir.Reference(x, options)); }
    else { this.formOf = []; }
    if (source['administrableDoseForm']) { this.administrableDoseForm = new fhir.CodeableConcept(source.administrableDoseForm, options); }
    if (source['unitOfPresentation']) { this.unitOfPresentation = new fhir.CodeableConcept(source.unitOfPresentation, options); }
    if (source['producedFrom']) { this.producedFrom = source.producedFrom.map((x) => new fhir.Reference(x, options)); }
    else { this.producedFrom = []; }
    if (source['ingredient']) { this.ingredient = source.ingredient.map((x) => new fhir.CodeableConcept(x, options)); }
    else { this.ingredient = []; }
    if (source['device']) { this.device = new fhir.Reference(source.device, options); }
    if (source['property']) { this.property = source.property.map((x) => new fhir.AdministrableProductDefinitionProperty(x, options)); }
    else { this.property = []; }
    if (source['routeOfAdministration']) { this.routeOfAdministration = source.routeOfAdministration.map((x) => new fhir.AdministrableProductDefinitionRouteOfAdministration(x, options)); }
    else { this.routeOfAdministration = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'AdministrableProductDefinition' }
    iss.push(...this.vOA('identifier',exp));
    iss.push(...this.vRSV('status',exp,'PublicationStatus',PublicationStatusVsValidation,'r'));
    iss.push(...this.vOA('formOf',exp));
    iss.push(...this.vOS('administrableDoseForm',exp));
    iss.push(...this.vOS('unitOfPresentation',exp));
    iss.push(...this.vOA('producedFrom',exp));
    iss.push(...this.vOA('ingredient',exp));
    iss.push(...this.vOS('device',exp));
    iss.push(...this.vOA('property',exp));
    iss.push(...this.vRA('routeOfAdministration',exp));
    return iss;
  }
}
