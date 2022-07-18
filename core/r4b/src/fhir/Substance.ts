// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR Resource: Substance

import * as fhir from '../fhir.js';

// @ts-ignore
import { SubstanceStatusCodes,  SubstanceStatusCodeType } from '../fhirValueSets/SubstanceStatusCodes.js';
// @ts-ignore
import { SubstanceStatusVsValidation } from '../fhirValueSets/SubstanceStatusVsValidation.js';
// @ts-ignore
import { SubstanceCategoryCodes,  SubstanceCategoryCodeType } from '../fhirValueSets/SubstanceCategoryCodes.js';
// @ts-ignore
import { SubstanceCategoryVsValidation } from '../fhirValueSets/SubstanceCategoryVsValidation.js';
// @ts-ignore
import { SubstanceCodes,  SubstanceCodeType } from '../fhirValueSets/SubstanceCodes.js';
// @ts-ignore
import { SubstanceVsValidation } from '../fhirValueSets/SubstanceVsValidation.js';
/**
 * Valid arguments for the SubstanceInstance type.
 */
export interface SubstanceInstanceArgs extends fhir.BackboneElementArgs {
  /**
   * Identifier associated with the package/container (usually a label affixed directly).
   */
  identifier?: fhir.IdentifierArgs|undefined;
  /**
   * When the substance is no longer valid to use. For some substances, a single arbitrary date is used for expiry.
   */
  expiry?: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: Substance.instance.expiry
   */
  _expiry?:fhir.FhirElementArgs;
  /**
   * The amount of the substance.
   */
  quantity?: fhir.QuantityArgs|undefined;
}

/**
 * Substance may be used to describe a kind of substance, or a specific package/container of the substance: an instance.
 */
export class SubstanceInstance extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'SubstanceInstance';
  /**
   * Identifier associated with the package/container (usually a label affixed directly).
   */
  public identifier?: fhir.Identifier|undefined;
  /**
   * When the substance is no longer valid to use. For some substances, a single arbitrary date is used for expiry.
   */
  public expiry?: fhir.FhirDateTime|undefined;
  /**
   * The amount of the substance.
   */
  public quantity?: fhir.Quantity|undefined;
  /**
   * Default constructor for SubstanceInstance - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<SubstanceInstanceArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['identifier']) { this.identifier = new fhir.Identifier(source.identifier); }
    if (source['expiry']) { this.expiry = new fhir.FhirDateTime({value: source.expiry}); }
    if (source['_expiry']) {
      if (this.expiry) { this.expiry.addExtendedProperties(source._expiry!); }
      else { this.expiry = new fhir.FhirDateTime(source._expiry as Partial<fhir.FhirDateTimeArgs>); }
    }
    if (source['quantity']) { this.quantity = new fhir.Quantity(source.quantity); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Substance.instance' }
    iss.push(...this.vOS('identifier',exp));
    iss.push(...this.vOS('expiry',exp));
    iss.push(...this.vOS('quantity',exp));
    return iss;
  }
}
/**
 * Valid arguments for the SubstanceIngredient type.
 */
export interface SubstanceIngredientArgs extends fhir.BackboneElementArgs {
  /**
   * The amount of the ingredient in the substance - a concentration ratio.
   */
  quantity?: fhir.RatioArgs|undefined;
  /**
   * Another substance that is a component of this substance.
   */
  substance?: fhir.CodeableConcept|fhir.Reference|undefined;
  /**
   * Another substance that is a component of this substance.
   */
  substanceCodeableConcept?: fhir.CodeableConceptArgs|undefined;
  /**
   * Another substance that is a component of this substance.
   */
  substanceReference?: fhir.ReferenceArgs|undefined;
}

/**
 * A substance can be composed of other substances.
 */
export class SubstanceIngredient extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'SubstanceIngredient';
  /**
   * The amount of the ingredient in the substance - a concentration ratio.
   */
  public quantity?: fhir.Ratio|undefined;
  /**
   * Another substance that is a component of this substance.
   */
  public substance: (fhir.CodeableConcept|fhir.Reference)|null;
  /**
   * Internal flag to properly serialize choice-type element Substance.ingredient.substance[x]
   */
  protected static readonly _fts_substanceIsChoice:true = true;
  /**
   * Default constructor for SubstanceIngredient - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<SubstanceIngredientArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['quantity']) { this.quantity = new fhir.Ratio(source.quantity); }
    if (source['substance']) { this.substance = source.substance; }
    else if (source['substanceCodeableConcept']) { this.substance = new fhir.CodeableConcept(source.substanceCodeableConcept); }
    else if (source['substanceReference']) { this.substance = new fhir.Reference(source.substanceReference); }
    else { this.substance = null; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Substance.ingredient' }
    iss.push(...this.vOS('quantity',exp));
    iss.push(...this.vRS('substance',exp));
    return iss;
  }
}
/**
 * Valid arguments for the Substance type.
 */
export interface SubstanceArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "Substance"|undefined;
  /**
   * This identifier is associated with the kind of substance in contrast to the Substance.instance.identifier which is associated with the package/container.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * A code to indicate if the substance is actively used.
   */
  status?: fhir.FhirCode<SubstanceStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: Substance.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * The level of granularity is defined by the category concepts in the value set.   More fine-grained filtering can be performed using the metadata and/or terminology hierarchy in Substance.code.
   */
  category?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * This could be a reference to an externally defined code.  It could also be a locally assigned code (e.g. a formulary),  optionally with translations to the standard drug codes.
   */
  code: fhir.CodeableConceptArgs|null;
  /**
   * A description of the substance - its appearance, handling requirements, and other usage notes.
   */
  description?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Substance.description
   */
  _description?:fhir.FhirElementArgs;
  /**
   * Substance may be used to describe a kind of substance, or a specific package/container of the substance: an instance.
   */
  instance?: fhir.SubstanceInstanceArgs[]|undefined;
  /**
   * A substance can be composed of other substances.
   */
  ingredient?: fhir.SubstanceIngredientArgs[]|undefined;
}

/**
 * A homogeneous material with a definite composition.
 */
export class Substance extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'Substance';
  /**
   * Resource Type Name
   */
  public override resourceType: "Substance";
  /**
   * This identifier is associated with the kind of substance in contrast to the Substance.instance.identifier which is associated with the package/container.
   */
  public identifier: fhir.Identifier[];
  /**
   * A code to indicate if the substance is actively used.
   */
  public status?: fhir.FhirCode<SubstanceStatusCodeType>|undefined;
  /**
   * The level of granularity is defined by the category concepts in the value set.   More fine-grained filtering can be performed using the metadata and/or terminology hierarchy in Substance.code.
   */
  public category: fhir.CodeableConcept[];
  /**
   * This could be a reference to an externally defined code.  It could also be a locally assigned code (e.g. a formulary),  optionally with translations to the standard drug codes.
   */
  public code: fhir.CodeableConcept|null;
  /**
   * A description of the substance - its appearance, handling requirements, and other usage notes.
   */
  public description?: fhir.FhirString|undefined;
  /**
   * Substance may be used to describe a kind of substance, or a specific package/container of the substance: an instance.
   */
  public instance: fhir.SubstanceInstance[];
  /**
   * A substance can be composed of other substances.
   */
  public ingredient: fhir.SubstanceIngredient[];
  /**
   * Default constructor for Substance - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<SubstanceArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'Substance';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['status']) { this.status = new fhir.FhirCode<SubstanceStatusCodeType>({value: source.status}); }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<SubstanceStatusCodeType>(source._status as Partial<fhir.FhirCode>); }
    }
    if (source['category']) { this.category = source.category.map((x) => new fhir.CodeableConcept(x)); }
    else { this.category = []; }
    if (source['code']) { this.code = new fhir.CodeableConcept(source.code); }
    else { this.code = null; }
    if (source['description']) { this.description = new fhir.FhirString({value: source.description}); }
    if (source['_description']) {
      if (this.description) { this.description.addExtendedProperties(source._description!); }
      else { this.description = new fhir.FhirString(source._description as Partial<fhir.FhirStringArgs>); }
    }
    if (source['instance']) { this.instance = source.instance.map((x) => new fhir.SubstanceInstance(x)); }
    else { this.instance = []; }
    if (source['ingredient']) { this.ingredient = source.ingredient.map((x) => new fhir.SubstanceIngredient(x)); }
    else { this.ingredient = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Substance' }
    iss.push(...this.vRPS('resourceType',exp));
    iss.push(...this.vOA('identifier',exp));
    iss.push(...this.vOSV('status',exp,'SubstanceStatus',SubstanceStatusVsValidation,'r'));
    iss.push(...this.vOA('category',exp));
    iss.push(...this.vRS('code',exp));
    iss.push(...this.vOS('description',exp));
    iss.push(...this.vOA('instance',exp));
    iss.push(...this.vOA('ingredient',exp));
    return iss;
  }
}
