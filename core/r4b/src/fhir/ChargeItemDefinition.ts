// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR Resource: ChargeItemDefinition

import * as fhir from '../fhir.js';

// @ts-ignore
import { InvoicePriceComponentTypeCodes,  InvoicePriceComponentTypeCodeType } from '../fhirValueSets/InvoicePriceComponentTypeCodes.js';
// @ts-ignore
import { InvoicePriceComponentTypeVsValidation } from '../fhirValueSets/InvoicePriceComponentTypeVsValidation.js';
// @ts-ignore
import { PublicationStatusCodes,  PublicationStatusCodeType } from '../fhirValueSets/PublicationStatusCodes.js';
// @ts-ignore
import { PublicationStatusVsValidation } from '../fhirValueSets/PublicationStatusVsValidation.js';
// @ts-ignore
import { JurisdictionCodes,  JurisdictionCodeType } from '../fhirValueSets/JurisdictionCodes.js';
// @ts-ignore
import { JurisdictionVsValidation } from '../fhirValueSets/JurisdictionVsValidation.js';
// @ts-ignore
import { ChargeitemBillingCodes,  ChargeitemBillingCodeType } from '../fhirValueSets/ChargeitemBillingCodes.js';
// @ts-ignore
import { ChargeitemBillingVsValidation } from '../fhirValueSets/ChargeitemBillingVsValidation.js';
/**
 * Valid arguments for the ChargeItemDefinitionApplicability type.
 */
export interface ChargeItemDefinitionApplicabilityArgs extends fhir.BackboneElementArgs {
  /**
   * A brief, natural language description of the condition that effectively communicates the intended semantics.
   */
  description?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: ChargeItemDefinition.applicability.description
   */
  _description?:fhir.FhirElementArgs;
  /**
   * The media type of the language for the expression, e.g. "text/cql" for Clinical Query Language expressions or "text/fhirpath" for FHIRPath expressions.
   */
  language?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: ChargeItemDefinition.applicability.language
   */
  _language?:fhir.FhirElementArgs;
  /**
   * Please note that FHIRPath Expressions can only be evaluated in the scope of the current ChargeItem resource to which this definition is being applied.
   * FHIRPath expressions can traverse into other resources linked from the ChargeItem resource, however, testing rules such as that a billing code may be billed only once per encounter need a wider scope. In such scenarios, CQL may be the appropriate choice.
   */
  expression?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: ChargeItemDefinition.applicability.expression
   */
  _expression?:fhir.FhirElementArgs;
}

/**
 * The applicability conditions can be used to ascertain whether a billing item is allowed in a specific context. E.g. some billing codes may only be applicable in out-patient settings, only to male/female patients or only to children.
 */
export class ChargeItemDefinitionApplicability extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'ChargeItemDefinitionApplicability';
  /**
   * A brief, natural language description of the condition that effectively communicates the intended semantics.
   */
  public description?: fhir.FhirString|undefined;
  /**
   * The media type of the language for the expression, e.g. "text/cql" for Clinical Query Language expressions or "text/fhirpath" for FHIRPath expressions.
   */
  public language?: fhir.FhirString|undefined;
  /**
   * Please note that FHIRPath Expressions can only be evaluated in the scope of the current ChargeItem resource to which this definition is being applied.
   * FHIRPath expressions can traverse into other resources linked from the ChargeItem resource, however, testing rules such as that a billing code may be billed only once per encounter need a wider scope. In such scenarios, CQL may be the appropriate choice.
   */
  public expression?: fhir.FhirString|undefined;
  /**
   * Default constructor for ChargeItemDefinitionApplicability - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ChargeItemDefinitionApplicabilityArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['description']) { this.description = new fhir.FhirString({value: source.description}); }
    if (source['_description']) {
      if (this.description) { this.description.addExtendedProperties(source._description!); }
      else { this.description = new fhir.FhirString(source._description as Partial<fhir.FhirStringArgs>); }
    }
    if (source['language']) { this.language = new fhir.FhirString({value: source.language}); }
    if (source['_language']) {
      if (this.language) { this.language.addExtendedProperties(source._language!); }
      else { this.language = new fhir.FhirString(source._language as Partial<fhir.FhirStringArgs>); }
    }
    if (source['expression']) { this.expression = new fhir.FhirString({value: source.expression}); }
    if (source['_expression']) {
      if (this.expression) { this.expression.addExtendedProperties(source._expression!); }
      else { this.expression = new fhir.FhirString(source._expression as Partial<fhir.FhirStringArgs>); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'ChargeItemDefinition.applicability' }
    iss.push(...this.vOS('description',exp));
    iss.push(...this.vOS('language',exp));
    iss.push(...this.vOS('expression',exp));
    return iss;
  }
}
/**
 * Valid arguments for the ChargeItemDefinitionPropertyGroupPriceComponent type.
 */
export interface ChargeItemDefinitionPropertyGroupPriceComponentArgs extends fhir.BackboneElementArgs {
  /**
   * This code identifies the type of the component.
   */
  type: fhir.FhirCode<InvoicePriceComponentTypeCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: ChargeItemDefinition.propertyGroup.priceComponent.type
   */
  _type?:fhir.FhirElementArgs;
  /**
   * A code that identifies the component. Codes may be used to differentiate between kinds of taxes, surcharges, discounts etc.
   */
  code?: fhir.CodeableConceptArgs|undefined;
  /**
   * The factor that has been applied on the base price for calculating this component.
   */
  factor?: fhir.FhirDecimal|number|undefined;
  /**
   * Extended properties for primitive element: ChargeItemDefinition.propertyGroup.priceComponent.factor
   */
  _factor?:fhir.FhirElementArgs;
  /**
   * The amount calculated for this component.
   */
  amount?: fhir.MoneyArgs|undefined;
}

/**
 * The price for a ChargeItem may be calculated as a base price with surcharges/deductions that apply in certain conditions. A ChargeItemDefinition resource that defines the prices, factors and conditions that apply to a billing code is currently under development. The priceComponent element can be used to offer transparency to the recipient of the Invoice of how the prices have been calculated.
 */
export class ChargeItemDefinitionPropertyGroupPriceComponent extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'ChargeItemDefinitionPropertyGroupPriceComponent';
  /**
   * This code identifies the type of the component.
   */
  public type: fhir.FhirCode<InvoicePriceComponentTypeCodeType>|null;
  /**
   * A code that identifies the component. Codes may be used to differentiate between kinds of taxes, surcharges, discounts etc.
   */
  public code?: fhir.CodeableConcept|undefined;
  /**
   * The factor that has been applied on the base price for calculating this component.
   */
  public factor?: fhir.FhirDecimal|undefined;
  /**
   * The amount calculated for this component.
   */
  public amount?: fhir.Money|undefined;
  /**
   * Default constructor for ChargeItemDefinitionPropertyGroupPriceComponent - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ChargeItemDefinitionPropertyGroupPriceComponentArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['type']) { this.type = new fhir.FhirCode<InvoicePriceComponentTypeCodeType>({value: source.type}); }
    else { this.type = null; }
    if (source['_type']) {
      if (this.type) { this.type.addExtendedProperties(source._type!); }
      else { this.type = new fhir.FhirCode<InvoicePriceComponentTypeCodeType>(source._type as Partial<fhir.FhirCode>); }
    }
    if (source['code']) { this.code = new fhir.CodeableConcept(source.code); }
    if (source['factor']) { this.factor = new fhir.FhirDecimal({value: source.factor}); }
    if (source['_factor']) {
      if (this.factor) { this.factor.addExtendedProperties(source._factor!); }
      else { this.factor = new fhir.FhirDecimal(source._factor as Partial<fhir.FhirDecimalArgs>); }
    }
    if (source['amount']) { this.amount = new fhir.Money(source.amount); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'ChargeItemDefinition.propertyGroup.priceComponent' }
    iss.push(...this.vRSV('type',exp,'InvoicePriceComponentType',InvoicePriceComponentTypeVsValidation,'r'));
    iss.push(...this.vOS('code',exp));
    iss.push(...this.vOS('factor',exp));
    iss.push(...this.vOS('amount',exp));
    return iss;
  }
}
/**
 * Valid arguments for the ChargeItemDefinitionPropertyGroup type.
 */
export interface ChargeItemDefinitionPropertyGroupArgs extends fhir.BackboneElementArgs {
  /**
   * The applicability conditions can be used to ascertain whether a billing item is allowed in a specific context. E.g. some billing codes may only be applicable in out-patient settings, only to male/female patients or only to children.
   */
  applicability?: fhir.ChargeItemDefinitionApplicabilityArgs[]|undefined;
  /**
   * The price for a ChargeItem may be calculated as a base price with surcharges/deductions that apply in certain conditions. A ChargeItemDefinition resource that defines the prices, factors and conditions that apply to a billing code is currently under development. The priceComponent element can be used to offer transparency to the recipient of the Invoice of how the prices have been calculated.
   */
  priceComponent?: fhir.ChargeItemDefinitionPropertyGroupPriceComponentArgs[]|undefined;
}

/**
 * Group of properties which are applicable under the same conditions. If no applicability rules are established for the group, then all properties always apply.
 */
export class ChargeItemDefinitionPropertyGroup extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'ChargeItemDefinitionPropertyGroup';
  /**
   * The applicability conditions can be used to ascertain whether a billing item is allowed in a specific context. E.g. some billing codes may only be applicable in out-patient settings, only to male/female patients or only to children.
   */
  public applicability: fhir.ChargeItemDefinitionApplicability[];
  /**
   * The price for a ChargeItem may be calculated as a base price with surcharges/deductions that apply in certain conditions. A ChargeItemDefinition resource that defines the prices, factors and conditions that apply to a billing code is currently under development. The priceComponent element can be used to offer transparency to the recipient of the Invoice of how the prices have been calculated.
   */
  public priceComponent: fhir.ChargeItemDefinitionPropertyGroupPriceComponent[];
  /**
   * Default constructor for ChargeItemDefinitionPropertyGroup - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ChargeItemDefinitionPropertyGroupArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['applicability']) { this.applicability = source.applicability.map((x) => new fhir.ChargeItemDefinitionApplicability(x)); }
    else { this.applicability = []; }
    if (source['priceComponent']) { this.priceComponent = source.priceComponent.map((x) => new fhir.ChargeItemDefinitionPropertyGroupPriceComponent(x)); }
    else { this.priceComponent = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'ChargeItemDefinition.propertyGroup' }
    iss.push(...this.vOA('applicability',exp));
    iss.push(...this.vOA('priceComponent',exp));
    return iss;
  }
}
/**
 * Valid arguments for the ChargeItemDefinition type.
 */
export interface ChargeItemDefinitionArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "ChargeItemDefinition"|undefined;
  /**
   * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
   * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions). 
   * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
   */
  url: fhir.FhirUri|string|undefined;
  /**
   * Extended properties for primitive element: ChargeItemDefinition.url
   */
  _url?:fhir.FhirElementArgs;
  /**
   * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this charge item definition outside of FHIR, where it is not possible to use the logical URI.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * There may be different charge item definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the charge item definition with the format [url]|[version].
   */
  version?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: ChargeItemDefinition.version
   */
  _version?:fhir.FhirElementArgs;
  /**
   * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
   */
  title?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: ChargeItemDefinition.title
   */
  _title?:fhir.FhirElementArgs;
  /**
   * The URL pointing to an externally-defined charge item definition that is adhered to in whole or in part by this definition.
   */
  derivedFromUri?: fhir.FhirUri[]|(string|null)[]|undefined;
  /**
   * Extended properties for primitive element: ChargeItemDefinition.derivedFromUri
   */
  _derivedFromUri?:(fhir.FhirElementArgs|null)[];
  /**
   * A larger definition of which this particular definition is a component or step.
   */
  partOf?: fhir.FhirCanonical[]|(string|null)[]|undefined;
  /**
   * Extended properties for primitive element: ChargeItemDefinition.partOf
   */
  _partOf?:(fhir.FhirElementArgs|null)[];
  /**
   * As new versions of a protocol or guideline are defined, allows identification of what versions are replaced by a new instance.
   */
  replaces?: fhir.FhirCanonical[]|(string|null)[]|undefined;
  /**
   * Extended properties for primitive element: ChargeItemDefinition.replaces
   */
  _replaces?:(fhir.FhirElementArgs|null)[];
  /**
   * Allows filtering of charge item definitions that are appropriate for use versus not.
   */
  status: fhir.FhirCode<PublicationStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: ChargeItemDefinition.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * Allows filtering of charge item definitions that are appropriate for use versus not.
   */
  experimental?: fhir.FhirBoolean|boolean|undefined;
  /**
   * Extended properties for primitive element: ChargeItemDefinition.experimental
   */
  _experimental?:fhir.FhirElementArgs;
  /**
   * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the charge item definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
   */
  date?: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: ChargeItemDefinition.date
   */
  _date?:fhir.FhirElementArgs;
  /**
   * Usually an organization but may be an individual. The publisher (or steward) of the charge item definition is the organization or individual primarily responsible for the maintenance and upkeep of the charge item definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the charge item definition. This item SHOULD be populated unless the information is available from context.
   */
  publisher?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: ChargeItemDefinition.publisher
   */
  _publisher?:fhir.FhirElementArgs;
  /**
   * May be a web site, an email address, a telephone number, etc.
   */
  contact?: fhir.ContactDetailArgs[]|undefined;
  /**
   * This description can be used to capture details such as why the charge item definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the charge item definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the charge item definition is presumed to be the predominant language in the place the charge item definition was created).
   */
  description?: fhir.FhirMarkdown|string|undefined;
  /**
   * Extended properties for primitive element: ChargeItemDefinition.description
   */
  _description?:fhir.FhirElementArgs;
  /**
   * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
   */
  useContext?: fhir.UsageContextArgs[]|undefined;
  /**
   * It may be possible for the charge item definition to be used in jurisdictions other than those for which it was originally designed or intended.
   */
  jurisdiction?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * A copyright statement relating to the charge item definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the charge item definition.
   */
  copyright?: fhir.FhirMarkdown|string|undefined;
  /**
   * Extended properties for primitive element: ChargeItemDefinition.copyright
   */
  _copyright?:fhir.FhirElementArgs;
  /**
   * The 'date' element may be more recent than the approval date because of minor changes or editorial corrections.
   */
  approvalDate?: fhir.FhirDate|string|undefined;
  /**
   * Extended properties for primitive element: ChargeItemDefinition.approvalDate
   */
  _approvalDate?:fhir.FhirElementArgs;
  /**
   * If specified, this date follows the original approval date.
   */
  lastReviewDate?: fhir.FhirDate|string|undefined;
  /**
   * Extended properties for primitive element: ChargeItemDefinition.lastReviewDate
   */
  _lastReviewDate?:fhir.FhirElementArgs;
  /**
   * The effective period for a charge item definition  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
   */
  effectivePeriod?: fhir.PeriodArgs|undefined;
  /**
   * The defined billing details in this resource pertain to the given billing code.
   */
  code?: fhir.CodeableConceptArgs|undefined;
  /**
   * In case of highly customized, individually produced or fitted devices/substances, the pricing information may be different for each instance of the product. This reference links pricing details to specific product instances.
   */
  instance?: fhir.ReferenceArgs[]|undefined;
  /**
   * The applicability conditions can be used to ascertain whether a billing item is allowed in a specific context. E.g. some billing codes may only be applicable in out-patient settings, only to male/female patients or only to children.
   */
  applicability?: fhir.ChargeItemDefinitionApplicabilityArgs[]|undefined;
  /**
   * Group of properties which are applicable under the same conditions. If no applicability rules are established for the group, then all properties always apply.
   */
  propertyGroup?: fhir.ChargeItemDefinitionPropertyGroupArgs[]|undefined;
}

/**
 * The ChargeItemDefinition resource provides the properties that apply to the (billing) codes necessary to calculate costs and prices. The properties may differ largely depending on type and realm, therefore this resource gives only a rough structure and requires profiling for each type of billing code system.
 */
export class ChargeItemDefinition extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'ChargeItemDefinition';
  /**
   * Resource Type Name
   */
  public override resourceType: "ChargeItemDefinition";
  /**
   * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
   * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions). 
   * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
   */
  public url: fhir.FhirUri|null;
  /**
   * Typically, this is used for identifiers that can go in an HL7 V3 II (instance identifier) data type, and can then identify this charge item definition outside of FHIR, where it is not possible to use the logical URI.
   */
  public identifier: fhir.Identifier[];
  /**
   * There may be different charge item definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the charge item definition with the format [url]|[version].
   */
  public version?: fhir.FhirString|undefined;
  /**
   * This name does not need to be machine-processing friendly and may contain punctuation, white-space, etc.
   */
  public title?: fhir.FhirString|undefined;
  /**
   * The URL pointing to an externally-defined charge item definition that is adhered to in whole or in part by this definition.
   */
  public derivedFromUri: fhir.FhirUri[];
  /**
   * A larger definition of which this particular definition is a component or step.
   */
  public partOf: fhir.FhirCanonical[];
  /**
   * As new versions of a protocol or guideline are defined, allows identification of what versions are replaced by a new instance.
   */
  public replaces: fhir.FhirCanonical[];
  /**
   * Allows filtering of charge item definitions that are appropriate for use versus not.
   */
  public status: fhir.FhirCode<PublicationStatusCodeType>|null;
  /**
   * Allows filtering of charge item definitions that are appropriate for use versus not.
   */
  public experimental?: fhir.FhirBoolean|undefined;
  /**
   * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the charge item definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
   */
  public date?: fhir.FhirDateTime|undefined;
  /**
   * Usually an organization but may be an individual. The publisher (or steward) of the charge item definition is the organization or individual primarily responsible for the maintenance and upkeep of the charge item definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the charge item definition. This item SHOULD be populated unless the information is available from context.
   */
  public publisher?: fhir.FhirString|undefined;
  /**
   * May be a web site, an email address, a telephone number, etc.
   */
  public contact: fhir.ContactDetail[];
  /**
   * This description can be used to capture details such as why the charge item definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the charge item definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the charge item definition is presumed to be the predominant language in the place the charge item definition was created).
   */
  public description?: fhir.FhirMarkdown|undefined;
  /**
   * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
   */
  public useContext: fhir.UsageContext[];
  /**
   * It may be possible for the charge item definition to be used in jurisdictions other than those for which it was originally designed or intended.
   */
  public jurisdiction: fhir.CodeableConcept[];
  /**
   * A copyright statement relating to the charge item definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the charge item definition.
   */
  public copyright?: fhir.FhirMarkdown|undefined;
  /**
   * The 'date' element may be more recent than the approval date because of minor changes or editorial corrections.
   */
  public approvalDate?: fhir.FhirDate|undefined;
  /**
   * If specified, this date follows the original approval date.
   */
  public lastReviewDate?: fhir.FhirDate|undefined;
  /**
   * The effective period for a charge item definition  determines when the content is applicable for usage and is independent of publication and review dates. For example, a measure intended to be used for the year 2016 might be published in 2015.
   */
  public effectivePeriod?: fhir.Period|undefined;
  /**
   * The defined billing details in this resource pertain to the given billing code.
   */
  public code?: fhir.CodeableConcept|undefined;
  /**
   * In case of highly customized, individually produced or fitted devices/substances, the pricing information may be different for each instance of the product. This reference links pricing details to specific product instances.
   */
  public instance: fhir.Reference[];
  /**
   * The applicability conditions can be used to ascertain whether a billing item is allowed in a specific context. E.g. some billing codes may only be applicable in out-patient settings, only to male/female patients or only to children.
   */
  public applicability: fhir.ChargeItemDefinitionApplicability[];
  /**
   * Group of properties which are applicable under the same conditions. If no applicability rules are established for the group, then all properties always apply.
   */
  public propertyGroup: fhir.ChargeItemDefinitionPropertyGroup[];
  /**
   * Default constructor for ChargeItemDefinition - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ChargeItemDefinitionArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'ChargeItemDefinition';
    if (source['url']) { this.url = new fhir.FhirUri({value: source.url}); }
    else { this.url = null; }
    if (source['_url']) {
      if (this.url) { this.url.addExtendedProperties(source._url!); }
      else { this.url = new fhir.FhirUri(source._url as Partial<fhir.FhirUriArgs>); }
    }
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['version']) { this.version = new fhir.FhirString({value: source.version}); }
    if (source['_version']) {
      if (this.version) { this.version.addExtendedProperties(source._version!); }
      else { this.version = new fhir.FhirString(source._version as Partial<fhir.FhirStringArgs>); }
    }
    if (source['title']) { this.title = new fhir.FhirString({value: source.title}); }
    if (source['_title']) {
      if (this.title) { this.title.addExtendedProperties(source._title!); }
      else { this.title = new fhir.FhirString(source._title as Partial<fhir.FhirStringArgs>); }
    }
    if (source['derivedFromUri']) { this.derivedFromUri = source.derivedFromUri.map((x) => new fhir.FhirUri({value: x})); }
    else { this.derivedFromUri = []; }
    if (source['_derivedFromUri']) {
      source._derivedFromUri.forEach((x,i) => {
        if (this.derivedFromUri.length >= i) { if (x) { this.derivedFromUri[i].addExtendedProperties(x); } }
        else { if (x) { this.derivedFromUri.push(new fhir.FhirUri(x as Partial<fhir.FhirUriArgs>)); } }
      });
    }
    if (source['partOf']) { this.partOf = source.partOf.map((x) => new fhir.FhirCanonical({value: x})); }
    else { this.partOf = []; }
    if (source['_partOf']) {
      source._partOf.forEach((x,i) => {
        if (this.partOf.length >= i) { if (x) { this.partOf[i].addExtendedProperties(x); } }
        else { if (x) { this.partOf.push(new fhir.FhirCanonical(x as Partial<fhir.FhirCanonicalArgs>)); } }
      });
    }
    if (source['replaces']) { this.replaces = source.replaces.map((x) => new fhir.FhirCanonical({value: x})); }
    else { this.replaces = []; }
    if (source['_replaces']) {
      source._replaces.forEach((x,i) => {
        if (this.replaces.length >= i) { if (x) { this.replaces[i].addExtendedProperties(x); } }
        else { if (x) { this.replaces.push(new fhir.FhirCanonical(x as Partial<fhir.FhirCanonicalArgs>)); } }
      });
    }
    if (source['status']) { this.status = new fhir.FhirCode<PublicationStatusCodeType>({value: source.status}); }
    else { this.status = null; }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<PublicationStatusCodeType>(source._status as Partial<fhir.FhirCode>); }
    }
    if (source['experimental']) { this.experimental = new fhir.FhirBoolean({value: source.experimental}); }
    if (source['_experimental']) {
      if (this.experimental) { this.experimental.addExtendedProperties(source._experimental!); }
      else { this.experimental = new fhir.FhirBoolean(source._experimental as Partial<fhir.FhirBooleanArgs>); }
    }
    if (source['date']) { this.date = new fhir.FhirDateTime({value: source.date}); }
    if (source['_date']) {
      if (this.date) { this.date.addExtendedProperties(source._date!); }
      else { this.date = new fhir.FhirDateTime(source._date as Partial<fhir.FhirDateTimeArgs>); }
    }
    if (source['publisher']) { this.publisher = new fhir.FhirString({value: source.publisher}); }
    if (source['_publisher']) {
      if (this.publisher) { this.publisher.addExtendedProperties(source._publisher!); }
      else { this.publisher = new fhir.FhirString(source._publisher as Partial<fhir.FhirStringArgs>); }
    }
    if (source['contact']) { this.contact = source.contact.map((x) => new fhir.ContactDetail(x)); }
    else { this.contact = []; }
    if (source['description']) { this.description = new fhir.FhirMarkdown({value: source.description}); }
    if (source['_description']) {
      if (this.description) { this.description.addExtendedProperties(source._description!); }
      else { this.description = new fhir.FhirMarkdown(source._description as Partial<fhir.FhirMarkdownArgs>); }
    }
    if (source['useContext']) { this.useContext = source.useContext.map((x) => new fhir.UsageContext(x)); }
    else { this.useContext = []; }
    if (source['jurisdiction']) { this.jurisdiction = source.jurisdiction.map((x) => new fhir.CodeableConcept(x)); }
    else { this.jurisdiction = []; }
    if (source['copyright']) { this.copyright = new fhir.FhirMarkdown({value: source.copyright}); }
    if (source['_copyright']) {
      if (this.copyright) { this.copyright.addExtendedProperties(source._copyright!); }
      else { this.copyright = new fhir.FhirMarkdown(source._copyright as Partial<fhir.FhirMarkdownArgs>); }
    }
    if (source['approvalDate']) { this.approvalDate = new fhir.FhirDate({value: source.approvalDate}); }
    if (source['_approvalDate']) {
      if (this.approvalDate) { this.approvalDate.addExtendedProperties(source._approvalDate!); }
      else { this.approvalDate = new fhir.FhirDate(source._approvalDate as Partial<fhir.FhirDateArgs>); }
    }
    if (source['lastReviewDate']) { this.lastReviewDate = new fhir.FhirDate({value: source.lastReviewDate}); }
    if (source['_lastReviewDate']) {
      if (this.lastReviewDate) { this.lastReviewDate.addExtendedProperties(source._lastReviewDate!); }
      else { this.lastReviewDate = new fhir.FhirDate(source._lastReviewDate as Partial<fhir.FhirDateArgs>); }
    }
    if (source['effectivePeriod']) { this.effectivePeriod = new fhir.Period(source.effectivePeriod); }
    if (source['code']) { this.code = new fhir.CodeableConcept(source.code); }
    if (source['instance']) { this.instance = source.instance.map((x) => new fhir.Reference(x)); }
    else { this.instance = []; }
    if (source['applicability']) { this.applicability = source.applicability.map((x) => new fhir.ChargeItemDefinitionApplicability(x)); }
    else { this.applicability = []; }
    if (source['propertyGroup']) { this.propertyGroup = source.propertyGroup.map((x) => new fhir.ChargeItemDefinitionPropertyGroup(x)); }
    else { this.propertyGroup = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'ChargeItemDefinition' }
    iss.push(...this.vRPS('resourceType',exp));
    iss.push(...this.vRS('url',exp));
    iss.push(...this.vOA('identifier',exp));
    iss.push(...this.vOS('version',exp));
    iss.push(...this.vOS('title',exp));
    iss.push(...this.vOA('derivedFromUri',exp));
    iss.push(...this.vOA('partOf',exp));
    iss.push(...this.vOA('replaces',exp));
    iss.push(...this.vRSV('status',exp,'PublicationStatus',PublicationStatusVsValidation,'r'));
    iss.push(...this.vOS('experimental',exp));
    iss.push(...this.vOS('date',exp));
    iss.push(...this.vOS('publisher',exp));
    iss.push(...this.vOA('contact',exp));
    iss.push(...this.vOS('description',exp));
    iss.push(...this.vOA('useContext',exp));
    iss.push(...this.vOA('jurisdiction',exp));
    iss.push(...this.vOS('copyright',exp));
    iss.push(...this.vOS('approvalDate',exp));
    iss.push(...this.vOS('lastReviewDate',exp));
    iss.push(...this.vOS('effectivePeriod',exp));
    iss.push(...this.vOS('code',exp));
    iss.push(...this.vOA('instance',exp));
    iss.push(...this.vOA('applicability',exp));
    iss.push(...this.vOA('propertyGroup',exp));
    return iss;
  }
}