// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: SearchParameter

import * as fhir from '../fhir.js';

// @ts-ignore
import { PublicationStatusCodes,  PublicationStatusCodeType } from '../fhirValueSets/PublicationStatusCodes.js';
// @ts-ignore
import { PublicationStatusVsValidation } from '../fhirValueSets/PublicationStatusVsValidation.js';
// @ts-ignore
import { ResourceTypesCodes,  ResourceTypesCodeType } from '../fhirValueSets/ResourceTypesCodes.js';
// @ts-ignore
import { ResourceTypesVsValidation } from '../fhirValueSets/ResourceTypesVsValidation.js';
// @ts-ignore
import { SearchParamTypeCodes,  SearchParamTypeCodeType } from '../fhirValueSets/SearchParamTypeCodes.js';
// @ts-ignore
import { SearchParamTypeVsValidation } from '../fhirValueSets/SearchParamTypeVsValidation.js';
// @ts-ignore
import { SearchXpathUsageCodes,  SearchXpathUsageCodeType } from '../fhirValueSets/SearchXpathUsageCodes.js';
// @ts-ignore
import { SearchXpathUsageVsValidation } from '../fhirValueSets/SearchXpathUsageVsValidation.js';
// @ts-ignore
import { SearchComparatorCodes,  SearchComparatorCodeType } from '../fhirValueSets/SearchComparatorCodes.js';
// @ts-ignore
import { SearchComparatorVsValidation } from '../fhirValueSets/SearchComparatorVsValidation.js';
// @ts-ignore
import { SearchModifierCodes,  SearchModifierCodeType } from '../fhirValueSets/SearchModifierCodes.js';
// @ts-ignore
import { SearchModifierVsValidation } from '../fhirValueSets/SearchModifierVsValidation.js';
/**
 * Valid arguments for the SearchParameterComponent type.
 */
export interface SearchParameterComponentArgs extends fhir.BackboneElementArgs {
  /**
   * The definition of the search parameter that describes this part.
   */
  definition: fhir.FhirCanonical|string|undefined;
  /**
   * Extended properties for primitive element: SearchParameter.component.definition
   */
  _definition?:fhir.FhirElementArgs;
  /**
   * This expression overrides the expression in the definition and extracts the index values from the outcome of the composite expression.
   */
  expression: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: SearchParameter.component.expression
   */
  _expression?:fhir.FhirElementArgs;
}

/**
 * Used to define the parts of a composite search parameter.
 */
export class SearchParameterComponent extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'SearchParameterComponent';
  /**
   * The definition of the search parameter that describes this part.
   */
  public definition: fhir.FhirCanonical|null;
  /**
   * This expression overrides the expression in the definition and extracts the index values from the outcome of the composite expression.
   */
  public expression: fhir.FhirString|null;
  /**
   * Default constructor for SearchParameterComponent - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<SearchParameterComponentArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['definition']) { this.definition = new fhir.FhirCanonical({value: source.definition}); }
    else { this.definition = null; }
    if (source['_definition']) {
      if (this.definition) { this.definition.addExtendedProperties(source._definition!); }
      else { this.definition = new fhir.FhirCanonical(source._definition as Partial<fhir.FhirCanonicalArgs>); }
    }
    if (source['expression']) { this.expression = new fhir.FhirString({value: source.expression}); }
    else { this.expression = null; }
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
    if (exp === '') { exp = 'SearchParameter.component' }
    iss.push(...this.vRS('definition',exp));
    iss.push(...this.vRS('expression',exp));
    return iss;
  }
}
/**
 * Valid arguments for the SearchParameter type.
 */
export interface SearchParameterArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "SearchParameter"|undefined;
  /**
   * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
   * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions). 
   * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
   */
  url: fhir.FhirUri|string|undefined;
  /**
   * Extended properties for primitive element: SearchParameter.url
   */
  _url?:fhir.FhirElementArgs;
  /**
   * There may be different search parameter instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the search parameter with the format [url]|[version].
   */
  version?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: SearchParameter.version
   */
  _version?:fhir.FhirElementArgs;
  /**
   * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
   */
  name: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: SearchParameter.name
   */
  _name?:fhir.FhirElementArgs;
  /**
   * The intent of this is that a server can designate that it provides support for a search parameter defined in the specification itself (e.g.  [`value-quantity`](http://hl7.org/fhir/SearchParameter/Observation-value-quantity), but detail how it is supported by the server.
   */
  derivedFrom?: fhir.FhirCanonical|string|undefined;
  /**
   * Extended properties for primitive element: SearchParameter.derivedFrom
   */
  _derivedFrom?:fhir.FhirElementArgs;
  /**
   * Allows filtering of search parameters that are appropriate for use versus not.
   */
  status: fhir.FhirCode<PublicationStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: SearchParameter.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * Allows filtering of search parameters that are appropriate for use versus not.
   */
  experimental?: fhir.FhirBoolean|boolean|undefined;
  /**
   * Extended properties for primitive element: SearchParameter.experimental
   */
  _experimental?:fhir.FhirElementArgs;
  /**
   * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the search parameter. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
   */
  date?: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: SearchParameter.date
   */
  _date?:fhir.FhirElementArgs;
  /**
   * Usually an organization but may be an individual. The publisher (or steward) of the search parameter is the organization or individual primarily responsible for the maintenance and upkeep of the search parameter. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the search parameter. This item SHOULD be populated unless the information is available from context.
   */
  publisher?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: SearchParameter.publisher
   */
  _publisher?:fhir.FhirElementArgs;
  /**
   * May be a web site, an email address, a telephone number, etc.
   */
  contact?: fhir.ContactDetailArgs[]|undefined;
  /**
   * This description can be used to capture details such as why the search parameter was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the search parameter as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the search parameter is presumed to be the predominant language in the place the search parameter was created).
   */
  description: fhir.FhirMarkdown|string|undefined;
  /**
   * Extended properties for primitive element: SearchParameter.description
   */
  _description?:fhir.FhirElementArgs;
  /**
   * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
   */
  useContext?: fhir.UsageContextArgs[]|undefined;
  /**
   * It may be possible for the search parameter to be used in jurisdictions other than those for which it was originally designed or intended.
   */
  jurisdiction?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * This element does not describe the usage of the search parameter. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this search parameter.
   */
  purpose?: fhir.FhirMarkdown|string|undefined;
  /**
   * Extended properties for primitive element: SearchParameter.purpose
   */
  _purpose?:fhir.FhirElementArgs;
  /**
   * For maximum compatibility, use only lowercase ASCII characters.
   */
  code: fhir.FhirCode|string|undefined;
  /**
   * Extended properties for primitive element: SearchParameter.code
   */
  _code?:fhir.FhirElementArgs;
  /**
   * A search parameter must always apply to at least one resource type. When search parameters apply to more than one resource type, they can be used against any of the listed resource types, or in a cross-type search (see [Cross Resource Search](http.html#xres-search)).
   */
  base: fhir.FhirCode[]|(string|null)[]|undefined;
  /**
   * Extended properties for primitive element: SearchParameter.base
   */
  _base?:(fhir.FhirElementArgs|null)[];
  /**
   * The type of value that a search parameter may contain, and how the content is interpreted.
   */
  type: fhir.FhirCode<SearchParamTypeCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: SearchParameter.type
   */
  _type?:fhir.FhirElementArgs;
  /**
   * Note that the elements returned by the expression are sometimes complex elements where logic is required to determine quite how to handle them; e.g. CodeableConcepts may contain text and/or multiple codings, where the codings themselves contain a code and a system. For composite search parameters, the outcome of the expression must a collection of base elements from which the composites are derived.
   */
  expression?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: SearchParameter.expression
   */
  _expression?:fhir.FhirElementArgs;
  /**
   * Note that the elements returned by the XPath are sometimes complex elements where logic is required to determine quite how to handle them; e.g. CodeableConcepts may contain text and/or multiple codings, where the codings themselves contain a code and a system.
   */
  xpath?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: SearchParameter.xpath
   */
  _xpath?:fhir.FhirElementArgs;
  /**
   * How the search parameter relates to the set of elements returned by evaluating the xpath query.
   */
  xpathUsage?: fhir.FhirCode<SearchXpathUsageCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: SearchParameter.xpathUsage
   */
  _xpathUsage?:fhir.FhirElementArgs;
  /**
   * Types of resource (if a resource is referenced).
   */
  target?: fhir.FhirCode[]|(string|null)[]|undefined;
  /**
   * Extended properties for primitive element: SearchParameter.target
   */
  _target?:(fhir.FhirElementArgs|null)[];
  /**
   * Whether multiple values are allowed for each time the parameter exists. Values are separated by commas, and the parameter matches if any of the values match.
   */
  multipleOr?: fhir.FhirBoolean|boolean|undefined;
  /**
   * Extended properties for primitive element: SearchParameter.multipleOr
   */
  _multipleOr?:fhir.FhirElementArgs;
  /**
   * Whether multiple parameters are allowed - e.g. more than one parameter with the same name. The search matches if all the parameters match.
   */
  multipleAnd?: fhir.FhirBoolean|boolean|undefined;
  /**
   * Extended properties for primitive element: SearchParameter.multipleAnd
   */
  _multipleAnd?:fhir.FhirElementArgs;
  /**
   * If no comparators are listed, clients should not expect servers to support any comparators.
   */
  comparator?: fhir.FhirCode<SearchComparatorCodeType>[]|(string|null)[]|undefined;
  /**
   * Extended properties for primitive element: SearchParameter.comparator
   */
  _comparator?:(fhir.FhirElementArgs|null)[];
  /**
   * A modifier supported for the search parameter.
   */
  modifier?: fhir.FhirCode<SearchModifierCodeType>[]|(string|null)[]|undefined;
  /**
   * Extended properties for primitive element: SearchParameter.modifier
   */
  _modifier?:(fhir.FhirElementArgs|null)[];
  /**
   * Systems are not required to list all the chain names they support, but if they don't list them, clients might not know to use them.
   */
  chain?: fhir.FhirString[]|(string|null)[]|undefined;
  /**
   * Extended properties for primitive element: SearchParameter.chain
   */
  _chain?:(fhir.FhirElementArgs|null)[];
  /**
   * Used to define the parts of a composite search parameter.
   */
  component?: fhir.SearchParameterComponentArgs[]|undefined;
}

/**
 * A search parameter that defines a named search item that can be used to search/filter on a resource.
 */
export class SearchParameter extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'SearchParameter';
  /**
   * Resource Type Name
   */
  public override resourceType: "SearchParameter";
  /**
   * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
   * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions). 
   * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
   */
  public url: fhir.FhirUri|null;
  /**
   * There may be different search parameter instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the search parameter with the format [url]|[version].
   */
  public version?: fhir.FhirString|undefined;
  /**
   * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.
   */
  public name: fhir.FhirString|null;
  /**
   * The intent of this is that a server can designate that it provides support for a search parameter defined in the specification itself (e.g.  [`value-quantity`](http://hl7.org/fhir/SearchParameter/Observation-value-quantity), but detail how it is supported by the server.
   */
  public derivedFrom?: fhir.FhirCanonical|undefined;
  /**
   * Allows filtering of search parameters that are appropriate for use versus not.
   */
  public status: fhir.FhirCode<PublicationStatusCodeType>|null;
  /**
   * Allows filtering of search parameters that are appropriate for use versus not.
   */
  public experimental?: fhir.FhirBoolean|undefined;
  /**
   * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the search parameter. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
   */
  public date?: fhir.FhirDateTime|undefined;
  /**
   * Usually an organization but may be an individual. The publisher (or steward) of the search parameter is the organization or individual primarily responsible for the maintenance and upkeep of the search parameter. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the search parameter. This item SHOULD be populated unless the information is available from context.
   */
  public publisher?: fhir.FhirString|undefined;
  /**
   * May be a web site, an email address, a telephone number, etc.
   */
  public contact: fhir.ContactDetail[];
  /**
   * This description can be used to capture details such as why the search parameter was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the search parameter as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the search parameter is presumed to be the predominant language in the place the search parameter was created).
   */
  public description: fhir.FhirMarkdown|null;
  /**
   * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
   */
  public useContext: fhir.UsageContext[];
  /**
   * It may be possible for the search parameter to be used in jurisdictions other than those for which it was originally designed or intended.
   */
  public jurisdiction: fhir.CodeableConcept[];
  /**
   * This element does not describe the usage of the search parameter. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this search parameter.
   */
  public purpose?: fhir.FhirMarkdown|undefined;
  /**
   * For maximum compatibility, use only lowercase ASCII characters.
   */
  public code: fhir.FhirCode|null;
  /**
   * A search parameter must always apply to at least one resource type. When search parameters apply to more than one resource type, they can be used against any of the listed resource types, or in a cross-type search (see [Cross Resource Search](http.html#xres-search)).
   */
  public base: fhir.FhirCode[];
  /**
   * The type of value that a search parameter may contain, and how the content is interpreted.
   */
  public type: fhir.FhirCode<SearchParamTypeCodeType>|null;
  /**
   * Note that the elements returned by the expression are sometimes complex elements where logic is required to determine quite how to handle them; e.g. CodeableConcepts may contain text and/or multiple codings, where the codings themselves contain a code and a system. For composite search parameters, the outcome of the expression must a collection of base elements from which the composites are derived.
   */
  public expression?: fhir.FhirString|undefined;
  /**
   * Note that the elements returned by the XPath are sometimes complex elements where logic is required to determine quite how to handle them; e.g. CodeableConcepts may contain text and/or multiple codings, where the codings themselves contain a code and a system.
   */
  public xpath?: fhir.FhirString|undefined;
  /**
   * How the search parameter relates to the set of elements returned by evaluating the xpath query.
   */
  public xpathUsage?: fhir.FhirCode<SearchXpathUsageCodeType>|undefined;
  /**
   * Types of resource (if a resource is referenced).
   */
  public target: fhir.FhirCode[];
  /**
   * Whether multiple values are allowed for each time the parameter exists. Values are separated by commas, and the parameter matches if any of the values match.
   */
  public multipleOr?: fhir.FhirBoolean|undefined;
  /**
   * Whether multiple parameters are allowed - e.g. more than one parameter with the same name. The search matches if all the parameters match.
   */
  public multipleAnd?: fhir.FhirBoolean|undefined;
  /**
   * If no comparators are listed, clients should not expect servers to support any comparators.
   */
  public comparator: fhir.FhirCode<SearchComparatorCodeType>[];
  /**
   * A modifier supported for the search parameter.
   */
  public modifier: fhir.FhirCode<SearchModifierCodeType>[];
  /**
   * Systems are not required to list all the chain names they support, but if they don't list them, clients might not know to use them.
   */
  public chain: fhir.FhirString[];
  /**
   * Used to define the parts of a composite search parameter.
   */
  public component: fhir.SearchParameterComponent[];
  /**
   * Default constructor for SearchParameter - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<SearchParameterArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'SearchParameter';
    if (source['url']) { this.url = new fhir.FhirUri({value: source.url}); }
    else { this.url = null; }
    if (source['_url']) {
      if (this.url) { this.url.addExtendedProperties(source._url!); }
      else { this.url = new fhir.FhirUri(source._url as Partial<fhir.FhirUriArgs>); }
    }
    if (source['version']) { this.version = new fhir.FhirString({value: source.version}); }
    if (source['_version']) {
      if (this.version) { this.version.addExtendedProperties(source._version!); }
      else { this.version = new fhir.FhirString(source._version as Partial<fhir.FhirStringArgs>); }
    }
    if (source['name']) { this.name = new fhir.FhirString({value: source.name}); }
    else { this.name = null; }
    if (source['_name']) {
      if (this.name) { this.name.addExtendedProperties(source._name!); }
      else { this.name = new fhir.FhirString(source._name as Partial<fhir.FhirStringArgs>); }
    }
    if (source['derivedFrom']) { this.derivedFrom = new fhir.FhirCanonical({value: source.derivedFrom}); }
    if (source['_derivedFrom']) {
      if (this.derivedFrom) { this.derivedFrom.addExtendedProperties(source._derivedFrom!); }
      else { this.derivedFrom = new fhir.FhirCanonical(source._derivedFrom as Partial<fhir.FhirCanonicalArgs>); }
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
    else { this.description = null; }
    if (source['_description']) {
      if (this.description) { this.description.addExtendedProperties(source._description!); }
      else { this.description = new fhir.FhirMarkdown(source._description as Partial<fhir.FhirMarkdownArgs>); }
    }
    if (source['useContext']) { this.useContext = source.useContext.map((x) => new fhir.UsageContext(x)); }
    else { this.useContext = []; }
    if (source['jurisdiction']) { this.jurisdiction = source.jurisdiction.map((x) => new fhir.CodeableConcept(x)); }
    else { this.jurisdiction = []; }
    if (source['purpose']) { this.purpose = new fhir.FhirMarkdown({value: source.purpose}); }
    if (source['_purpose']) {
      if (this.purpose) { this.purpose.addExtendedProperties(source._purpose!); }
      else { this.purpose = new fhir.FhirMarkdown(source._purpose as Partial<fhir.FhirMarkdownArgs>); }
    }
    if (source['code']) { this.code = new fhir.FhirCode({value: source.code}); }
    else { this.code = null; }
    if (source['_code']) {
      if (this.code) { this.code.addExtendedProperties(source._code!); }
      else { this.code = new fhir.FhirCode(source._code as Partial<fhir.FhirCodeArgs>); }
    }
    if (source['base']) { this.base = source.base.map((x) => new fhir.FhirCode({value: x})); }
    else { this.base = []; }
    if (source['_base']) {
      source._base.forEach((x,i) => {
        if (this.base.length >= i) { if (x) { this.base[i].addExtendedProperties(x); } }
        else { if (x) { this.base.push(new fhir.FhirCode(x as Partial<fhir.FhirCodeArgs>)); } }
      });
    }
    if (source['type']) { this.type = new fhir.FhirCode<SearchParamTypeCodeType>({value: source.type}); }
    else { this.type = null; }
    if (source['_type']) {
      if (this.type) { this.type.addExtendedProperties(source._type!); }
      else { this.type = new fhir.FhirCode<SearchParamTypeCodeType>(source._type as Partial<fhir.FhirCode>); }
    }
    if (source['expression']) { this.expression = new fhir.FhirString({value: source.expression}); }
    if (source['_expression']) {
      if (this.expression) { this.expression.addExtendedProperties(source._expression!); }
      else { this.expression = new fhir.FhirString(source._expression as Partial<fhir.FhirStringArgs>); }
    }
    if (source['xpath']) { this.xpath = new fhir.FhirString({value: source.xpath}); }
    if (source['_xpath']) {
      if (this.xpath) { this.xpath.addExtendedProperties(source._xpath!); }
      else { this.xpath = new fhir.FhirString(source._xpath as Partial<fhir.FhirStringArgs>); }
    }
    if (source['xpathUsage']) { this.xpathUsage = new fhir.FhirCode<SearchXpathUsageCodeType>({value: source.xpathUsage}); }
    if (source['_xpathUsage']) {
      if (this.xpathUsage) { this.xpathUsage.addExtendedProperties(source._xpathUsage!); }
      else { this.xpathUsage = new fhir.FhirCode<SearchXpathUsageCodeType>(source._xpathUsage as Partial<fhir.FhirCode>); }
    }
    if (source['target']) { this.target = source.target.map((x) => new fhir.FhirCode({value: x})); }
    else { this.target = []; }
    if (source['_target']) {
      source._target.forEach((x,i) => {
        if (this.target.length >= i) { if (x) { this.target[i].addExtendedProperties(x); } }
        else { if (x) { this.target.push(new fhir.FhirCode(x as Partial<fhir.FhirCodeArgs>)); } }
      });
    }
    if (source['multipleOr']) { this.multipleOr = new fhir.FhirBoolean({value: source.multipleOr}); }
    if (source['_multipleOr']) {
      if (this.multipleOr) { this.multipleOr.addExtendedProperties(source._multipleOr!); }
      else { this.multipleOr = new fhir.FhirBoolean(source._multipleOr as Partial<fhir.FhirBooleanArgs>); }
    }
    if (source['multipleAnd']) { this.multipleAnd = new fhir.FhirBoolean({value: source.multipleAnd}); }
    if (source['_multipleAnd']) {
      if (this.multipleAnd) { this.multipleAnd.addExtendedProperties(source._multipleAnd!); }
      else { this.multipleAnd = new fhir.FhirBoolean(source._multipleAnd as Partial<fhir.FhirBooleanArgs>); }
    }
    if (source['comparator']) { this.comparator = source.comparator.map((x) => new fhir.FhirCode<SearchComparatorCodeType>({value: x})); }
    else { this.comparator = []; }
    if (source['_comparator']) {
      source._comparator.forEach((x,i) => {
        if (this.comparator.length >= i) { if (x) { this.comparator[i].addExtendedProperties(x); } }
        else { if (x) { this.comparator.push(new fhir.FhirCode<SearchComparatorCodeType>(x as Partial<fhir.FhirCode>)); } }
      });
    }
    if (source['modifier']) { this.modifier = source.modifier.map((x) => new fhir.FhirCode<SearchModifierCodeType>({value: x})); }
    else { this.modifier = []; }
    if (source['_modifier']) {
      source._modifier.forEach((x,i) => {
        if (this.modifier.length >= i) { if (x) { this.modifier[i].addExtendedProperties(x); } }
        else { if (x) { this.modifier.push(new fhir.FhirCode<SearchModifierCodeType>(x as Partial<fhir.FhirCode>)); } }
      });
    }
    if (source['chain']) { this.chain = source.chain.map((x) => new fhir.FhirString({value: x})); }
    else { this.chain = []; }
    if (source['_chain']) {
      source._chain.forEach((x,i) => {
        if (this.chain.length >= i) { if (x) { this.chain[i].addExtendedProperties(x); } }
        else { if (x) { this.chain.push(new fhir.FhirString(x as Partial<fhir.FhirStringArgs>)); } }
      });
    }
    if (source['component']) { this.component = source.component.map((x) => new fhir.SearchParameterComponent(x)); }
    else { this.component = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'SearchParameter' }
    iss.push(...this.vRS('url',exp));
    iss.push(...this.vOS('version',exp));
    iss.push(...this.vRS('name',exp));
    iss.push(...this.vOS('derivedFrom',exp));
    iss.push(...this.vRSV('status',exp,'PublicationStatus',PublicationStatusVsValidation,'r'));
    iss.push(...this.vOS('experimental',exp));
    iss.push(...this.vOS('date',exp));
    iss.push(...this.vOS('publisher',exp));
    iss.push(...this.vOA('contact',exp));
    iss.push(...this.vRS('description',exp));
    iss.push(...this.vOA('useContext',exp));
    iss.push(...this.vOA('jurisdiction',exp));
    iss.push(...this.vOS('purpose',exp));
    iss.push(...this.vRS('code',exp));
    iss.push(...this.vRAV('base',exp,'ResourceTypes',ResourceTypesVsValidation,'r'));
    iss.push(...this.vRSV('type',exp,'SearchParamType',SearchParamTypeVsValidation,'r'));
    iss.push(...this.vOS('expression',exp));
    iss.push(...this.vOS('xpath',exp));
    iss.push(...this.vOSV('xpathUsage',exp,'SearchXpathUsage',SearchXpathUsageVsValidation,'r'));
    iss.push(...this.vOAV('target',exp,'ResourceTypes',ResourceTypesVsValidation,'r'));
    iss.push(...this.vOS('multipleOr',exp));
    iss.push(...this.vOS('multipleAnd',exp));
    iss.push(...this.vOAV('comparator',exp,'SearchComparator',SearchComparatorVsValidation,'r'));
    iss.push(...this.vOAV('modifier',exp,'SearchModifier',SearchModifierVsValidation,'r'));
    iss.push(...this.vOA('chain',exp));
    iss.push(...this.vOA('component',exp));
    return iss;
  }
}
