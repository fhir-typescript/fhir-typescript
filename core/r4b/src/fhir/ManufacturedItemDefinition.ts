// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR Resource: ManufacturedItemDefinition

import * as fhir from '../fhir.js';

// @ts-ignore
import { PublicationStatusCodes,  PublicationStatusCodeType } from '../fhirValueSets/PublicationStatusCodes.js';
// @ts-ignore
import { PublicationStatusVsValidation } from '../fhirValueSets/PublicationStatusVsValidation.js';
// @ts-ignore
import { UnitOfPresentationCodes,  UnitOfPresentationCodeType } from '../fhirValueSets/UnitOfPresentationCodes.js';
// @ts-ignore
import { UnitOfPresentationVsValidation } from '../fhirValueSets/UnitOfPresentationVsValidation.js';
/**
 * Valid arguments for the ManufacturedItemDefinitionProperty type.
 */
export interface ManufacturedItemDefinitionPropertyArgs extends fhir.BackboneElementArgs {
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
}

/**
 * General characteristics of this item.
 */
export class ManufacturedItemDefinitionProperty extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'ManufacturedItemDefinitionProperty';
  /**
   * A code expressing the type of characteristic.
   */
  public type: fhir.CodeableConcept|null;
  /**
   * A value for the characteristic.
   */
  public value?: (fhir.CodeableConcept|fhir.Quantity|fhir.FhirDate|fhir.FhirBoolean|fhir.Attachment)|undefined;
  /**
   * Internal flag to properly serialize choice-type element ManufacturedItemDefinition.property.value[x]
   */
  protected static readonly _fts_valueIsChoice:true = true;
  /**
   * Default constructor for ManufacturedItemDefinitionProperty - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ManufacturedItemDefinitionPropertyArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type, options); }
    else { this.type = null; }
    if (source['value']) { this.value = source.value; }
    else if (source['valueCodeableConcept']) { this.value = new fhir.CodeableConcept(source.valueCodeableConcept, options); }
    else if (source['valueQuantity']) { this.value = new fhir.Quantity(source.valueQuantity, options); }
    else if (source['valueDate'] !== undefined) { this.value = new fhir.FhirDate({value: source.valueDate}, options); }
    else if (source['valueBoolean'] !== undefined) { this.value = new fhir.FhirBoolean({value: source.valueBoolean}, options); }
    else if (source['valueAttachment']) { this.value = new fhir.Attachment(source.valueAttachment, options); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'ManufacturedItemDefinition.property' }
    iss.push(...this.vRS('type',exp));
    iss.push(...this.vOS('value',exp));
    return iss;
  }
}
/**
 * Valid arguments for the ManufacturedItemDefinition type.
 */
export interface ManufacturedItemDefinitionArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "ManufacturedItemDefinition"|undefined;
  /**
   * Unique identifier.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * Allows filtering of manufactured items that are appropriate for use versus not.
   */
  status: fhir.FhirCode<PublicationStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: ManufacturedItemDefinition.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * Dose form as manufactured and before any transformation into the pharmaceutical product.
   */
  manufacturedDoseForm: fhir.CodeableConceptArgs|null;
  /**
   * The “real world” units in which the quantity of the manufactured item is described.
   */
  unitOfPresentation?: fhir.CodeableConceptArgs|undefined;
  /**
   * Manufacturer of the item (Note that this should be named "manufacturer" but it currently causes technical issues).
   */
  manufacturer?: fhir.ReferenceArgs[]|undefined;
  /**
   * The ingredients of this manufactured item. This is only needed if the ingredients are not specified by incoming references from the Ingredient resource.
   */
  ingredient?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * General characteristics of this item.
   */
  property?: fhir.ManufacturedItemDefinitionPropertyArgs[]|undefined;
}

/**
 * The definition and characteristics of a medicinal manufactured item, such as a tablet or capsule, as contained in a packaged medicinal product.
 */
export class ManufacturedItemDefinition extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'ManufacturedItemDefinition';
  /**
   * Resource Type Name
   */
  public override resourceType: "ManufacturedItemDefinition";
  /**
   * Unique identifier.
   */
  public identifier: fhir.Identifier[];
  /**
   * Allows filtering of manufactured items that are appropriate for use versus not.
   */
  public status: fhir.FhirCode<PublicationStatusCodeType>|null;
  /**
   * Dose form as manufactured and before any transformation into the pharmaceutical product.
   */
  public manufacturedDoseForm: fhir.CodeableConcept|null;
  /**
   * The “real world” units in which the quantity of the manufactured item is described.
   */
  public unitOfPresentation?: fhir.CodeableConcept|undefined;
  /**
   * Manufacturer of the item (Note that this should be named "manufacturer" but it currently causes technical issues).
   */
  public manufacturer: fhir.Reference[];
  /**
   * The ingredients of this manufactured item. This is only needed if the ingredients are not specified by incoming references from the Ingredient resource.
   */
  public ingredient: fhir.CodeableConcept[];
  /**
   * General characteristics of this item.
   */
  public property: fhir.ManufacturedItemDefinitionProperty[];
  /**
   * Default constructor for ManufacturedItemDefinition - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ManufacturedItemDefinitionArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'ManufacturedItemDefinition';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x, options)); }
    else { this.identifier = []; }
    if (source['status'] !== undefined) { this.status = new fhir.FhirCode<PublicationStatusCodeType>({value: source.status}, options); }
    else { this.status = null; }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<PublicationStatusCodeType>(source._status as Partial<fhir.FhirCode>, options); }
    }
    if (source['manufacturedDoseForm']) { this.manufacturedDoseForm = new fhir.CodeableConcept(source.manufacturedDoseForm, options); }
    else { this.manufacturedDoseForm = null; }
    if (source['unitOfPresentation']) { this.unitOfPresentation = new fhir.CodeableConcept(source.unitOfPresentation, options); }
    if (source['manufacturer']) { this.manufacturer = source.manufacturer.map((x) => new fhir.Reference(x, options)); }
    else { this.manufacturer = []; }
    if (source['ingredient']) { this.ingredient = source.ingredient.map((x) => new fhir.CodeableConcept(x, options)); }
    else { this.ingredient = []; }
    if (source['property']) { this.property = source.property.map((x) => new fhir.ManufacturedItemDefinitionProperty(x, options)); }
    else { this.property = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'ManufacturedItemDefinition' }
    iss.push(...this.vOA('identifier',exp));
    iss.push(...this.vRSV('status',exp,'PublicationStatus',PublicationStatusVsValidation,'r'));
    iss.push(...this.vRS('manufacturedDoseForm',exp));
    iss.push(...this.vOS('unitOfPresentation',exp));
    iss.push(...this.vOA('manufacturer',exp));
    iss.push(...this.vOA('ingredient',exp));
    iss.push(...this.vOA('property',exp));
    return iss;
  }
}
