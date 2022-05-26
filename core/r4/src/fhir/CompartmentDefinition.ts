// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: CompartmentDefinition

import * as fhir from '../fhir.js';

// @ts-ignore
import { ResourceTypesCodings, ResourceTypesCodingType,} from '../fhirValueSets/ResourceTypesCodings.js';
// @ts-ignore
import { ResourceTypesCodes,  ResourceTypesCodeType } from '../fhirValueSets/ResourceTypesCodes.js';
// @ts-ignore
import { PublicationStatusCodings, PublicationStatusCodingType,} from '../fhirValueSets/PublicationStatusCodings.js';
// @ts-ignore
import { PublicationStatusCodes,  PublicationStatusCodeType } from '../fhirValueSets/PublicationStatusCodes.js';
// @ts-ignore
import { CompartmentTypeCodings, CompartmentTypeCodingType,} from '../fhirValueSets/CompartmentTypeCodings.js';
// @ts-ignore
import { CompartmentTypeCodes,  CompartmentTypeCodeType } from '../fhirValueSets/CompartmentTypeCodes.js';
/**
 * Valid arguments for the CompartmentDefinitionResource type.
 */
export interface CompartmentDefinitionResourceArgs extends fhir.BackboneElementArgs {
  /**
   * The name of a resource supported by the server.
   */
  code: fhir.FhirCode|string|undefined;
  /**
   * Extended properties for primitive element: CompartmentDefinition.resource.code
   */
  _code?:fhir.FhirElementArgs;
  /**
   * If no search parameters are listed, then the resource is not linked to the compartment.
   */
  param?: fhir.FhirString[]|string[]|undefined;
  /**
   * Extended properties for primitive element: CompartmentDefinition.resource.param
   */
  _param?:(fhir.FhirElementArgs|null)[];
  /**
   * Additional documentation about the resource and compartment.
   */
  documentation?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: CompartmentDefinition.resource.documentation
   */
  _documentation?:fhir.FhirElementArgs;
}

/**
 * Information about how a resource is related to the compartment.
 */
export class CompartmentDefinitionResource extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'CompartmentDefinitionResource';
  /**
   * The name of a resource supported by the server.
   */
  public code: fhir.FhirCode|null;
  /**
   * If no search parameters are listed, then the resource is not linked to the compartment.
   */
  public param: fhir.FhirString[];
  /**
   * Additional documentation about the resource and compartment.
   */
  public documentation?: fhir.FhirString|undefined;
  /**
   * Default constructor for CompartmentDefinitionResource - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<CompartmentDefinitionResourceArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['code']) { this.code = new fhir.FhirCode({value: source.code}); }
    else { this.code = null; }
    if (source['_code']) {
      if (this.code) { this.code.addExtendedProperties(source._code!); }
      else { this.code = new fhir.FhirCode(source._code as Partial<fhir.FhirCodeArgs>); }
    }
    if (source['param']) { this.param = source.param.map((x) => new fhir.FhirString({value: x})); }
    else { this.param = []; }
    if (source['_param']) {
      source._param.forEach((x,i) => {
        if (this.param.length >= i) { if (x) { this.param[i].addExtendedProperties(x); } }
        else { if (x) { this.param.push(new fhir.FhirString(x as Partial<fhir.FhirStringArgs>)); } }
      });
    }
    if (source['documentation']) { this.documentation = new fhir.FhirString({value: source.documentation}); }
    if (source['_documentation']) {
      if (this.documentation) { this.documentation.addExtendedProperties(source._documentation!); }
      else { this.documentation = new fhir.FhirString(source._documentation as Partial<fhir.FhirStringArgs>); }
    }
  }
  /**
   * Required-bound Value Set for code (CompartmentDefinition.resource.code)
   */
  public static get codeRequiredCodes() {
    return ResourceTypesCodes;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    if (!this['code']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property code:fhir.FhirCode fhir: CompartmentDefinition.resource.code:code' });
    }
    if (this['code'] && (!Object.values(ResourceTypesCodes).includes(this.code as any))) {
      issues.push({ severity: 'error', code: 'code-invalid', diagnostics: 'Invalid code property code:fhir.FhirCode fhir: CompartmentDefinition.resource.code:code Required binding to: ResourceTypes' });
    }
    if (this["code"]) { issues.push(...this.code.doModelValidation()); }
    if (this["param"]) { this.param.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["documentation"]) { issues.push(...this.documentation.doModelValidation()); }
    return issues;
  }
}
/**
 * Valid arguments for the CompartmentDefinition type.
 */
export interface CompartmentDefinitionArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "CompartmentDefinition"|undefined;
  /**
   * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
   * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions). 
   * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
   */
  url: fhir.FhirUri|string|undefined;
  /**
   * Extended properties for primitive element: CompartmentDefinition.url
   */
  _url?:fhir.FhirElementArgs;
  /**
   * There may be different compartment definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the compartment definition with the format [url]|[version].
   */
  version?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: CompartmentDefinition.version
   */
  _version?:fhir.FhirElementArgs;
  /**
   * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.This is often the same as the code for the parameter, but does not need to be.
   */
  name: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: CompartmentDefinition.name
   */
  _name?:fhir.FhirElementArgs;
  /**
   * Allows filtering of compartment definitions that are appropriate for use versus not.
   */
  status: fhir.FhirCode<PublicationStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: CompartmentDefinition.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * Allows filtering of compartment definitions that are appropriate for use versus not.
   */
  experimental?: fhir.FhirBoolean|boolean|undefined;
  /**
   * Extended properties for primitive element: CompartmentDefinition.experimental
   */
  _experimental?:fhir.FhirElementArgs;
  /**
   * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the compartment definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
   */
  date?: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: CompartmentDefinition.date
   */
  _date?:fhir.FhirElementArgs;
  /**
   * Usually an organization but may be an individual. The publisher (or steward) of the compartment definition is the organization or individual primarily responsible for the maintenance and upkeep of the compartment definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the compartment definition. This item SHOULD be populated unless the information is available from context.
   */
  publisher?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: CompartmentDefinition.publisher
   */
  _publisher?:fhir.FhirElementArgs;
  /**
   * May be a web site, an email address, a telephone number, etc.
   */
  contact?: fhir.ContactDetailArgs[]|undefined;
  /**
   * This description can be used to capture details such as why the compartment definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the compartment definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the compartment definition is presumed to be the predominant language in the place the compartment definition was created).
   */
  description?: fhir.FhirMarkdown|string|undefined;
  /**
   * Extended properties for primitive element: CompartmentDefinition.description
   */
  _description?:fhir.FhirElementArgs;
  /**
   * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
   */
  useContext?: fhir.UsageContextArgs[]|undefined;
  /**
   * This element does not describe the usage of the compartment definition. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this compartment definition.
   */
  purpose?: fhir.FhirMarkdown|string|undefined;
  /**
   * Extended properties for primitive element: CompartmentDefinition.purpose
   */
  _purpose?:fhir.FhirElementArgs;
  /**
   * Only the specification can define the compartments that can exist. Servers can choose to support them.
   */
  code: fhir.FhirCode<CompartmentTypeCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: CompartmentDefinition.code
   */
  _code?:fhir.FhirElementArgs;
  /**
   * Servers may define and use compartments to manage logical access without implementing the compartment related syntax.
   */
  search: fhir.FhirBoolean|boolean|undefined;
  /**
   * Extended properties for primitive element: CompartmentDefinition.search
   */
  _search?:fhir.FhirElementArgs;
  /**
   * Information about how a resource is related to the compartment.
   */
  resource?: fhir.CompartmentDefinitionResourceArgs[]|undefined;
}

/**
 * A compartment definition that defines how resources are accessed on a server.
 */
export class CompartmentDefinition extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'CompartmentDefinition';
  /**
   * Resource Type Name
   */
  public override resourceType: "CompartmentDefinition";
  /**
   * Can be a urn:uuid: or a urn:oid: but real http: addresses are preferred.  Multiple instances may share the same URL if they have a distinct version.
   * The determination of when to create a new version of a resource (same url, new version) vs. defining a new artifact is up to the author.  Considerations for making this decision are found in [Technical and Business Versions](resource.html#versions). 
   * In some cases, the resource can no longer be found at the stated url, but the url itself cannot change. Implementations can use the [meta.source](resource.html#meta) element to indicate where the current master source of the resource can be found.
   */
  public url: fhir.FhirUri|null;
  /**
   * There may be different compartment definition instances that have the same identifier but different versions.  The version can be appended to the url in a reference to allow a reference to a particular business version of the compartment definition with the format [url]|[version].
   */
  public version?: fhir.FhirString|undefined;
  /**
   * The name is not expected to be globally unique. The name should be a simple alphanumeric type name to ensure that it is machine-processing friendly.This is often the same as the code for the parameter, but does not need to be.
   */
  public name: fhir.FhirString|null;
  /**
   * Allows filtering of compartment definitions that are appropriate for use versus not.
   */
  public status: fhir.FhirCode<PublicationStatusCodeType>|null;
  /**
   * Allows filtering of compartment definitions that are appropriate for use versus not.
   */
  public experimental?: fhir.FhirBoolean|undefined;
  /**
   * Note that this is not the same as the resource last-modified-date, since the resource may be a secondary representation of the compartment definition. Additional specific dates may be added as extensions or be found by consulting Provenances associated with past versions of the resource.
   */
  public date?: fhir.FhirDateTime|undefined;
  /**
   * Usually an organization but may be an individual. The publisher (or steward) of the compartment definition is the organization or individual primarily responsible for the maintenance and upkeep of the compartment definition. This is not necessarily the same individual or organization that developed and initially authored the content. The publisher is the primary point of contact for questions or issues with the compartment definition. This item SHOULD be populated unless the information is available from context.
   */
  public publisher?: fhir.FhirString|undefined;
  /**
   * May be a web site, an email address, a telephone number, etc.
   */
  public contact: fhir.ContactDetail[];
  /**
   * This description can be used to capture details such as why the compartment definition was built, comments about misuse, instructions for clinical use and interpretation, literature references, examples from the paper world, etc. It is not a rendering of the compartment definition as conveyed in the 'text' field of the resource itself. This item SHOULD be populated unless the information is available from context (e.g. the language of the compartment definition is presumed to be the predominant language in the place the compartment definition was created).
   */
  public description?: fhir.FhirMarkdown|undefined;
  /**
   * When multiple useContexts are specified, there is no expectation that all or any of the contexts apply.
   */
  public useContext: fhir.UsageContext[];
  /**
   * This element does not describe the usage of the compartment definition. Instead, it provides traceability of ''why'' the resource is either needed or ''why'' it is defined as it is.  This may be used to point to source materials or specifications that drove the structure of this compartment definition.
   */
  public purpose?: fhir.FhirMarkdown|undefined;
  /**
   * Only the specification can define the compartments that can exist. Servers can choose to support them.
   */
  public code: fhir.FhirCode<CompartmentTypeCodeType>|null;
  /**
   * Servers may define and use compartments to manage logical access without implementing the compartment related syntax.
   */
  public search: fhir.FhirBoolean|null;
  /**
   * Information about how a resource is related to the compartment.
   */
  public resource: fhir.CompartmentDefinitionResource[];
  /**
   * Default constructor for CompartmentDefinition - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<CompartmentDefinitionArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'CompartmentDefinition';
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
    if (source['purpose']) { this.purpose = new fhir.FhirMarkdown({value: source.purpose}); }
    if (source['_purpose']) {
      if (this.purpose) { this.purpose.addExtendedProperties(source._purpose!); }
      else { this.purpose = new fhir.FhirMarkdown(source._purpose as Partial<fhir.FhirMarkdownArgs>); }
    }
    if (source['code']) { this.code = new fhir.FhirCode<CompartmentTypeCodeType>({value: source.code}); }
    else { this.code = null; }
    if (source['_code']) {
      if (this.code) { this.code.addExtendedProperties(source._code!); }
      else { this.code = new fhir.FhirCode<CompartmentTypeCodeType>(source._code as Partial<fhir.FhirCode>); }
    }
    if (source['search']) { this.search = new fhir.FhirBoolean({value: source.search}); }
    else { this.search = null; }
    if (source['_search']) {
      if (this.search) { this.search.addExtendedProperties(source._search!); }
      else { this.search = new fhir.FhirBoolean(source._search as Partial<fhir.FhirBooleanArgs>); }
    }
    if (source['resource']) { this.resource = source.resource.map((x) => new fhir.CompartmentDefinitionResource(x)); }
    else { this.resource = []; }
  }
  /**
   * Required-bound Value Set for status (CompartmentDefinition.status)
   */
  public static get statusRequiredCodes() {
    return PublicationStatusCodes;
  }
  /**
   * Required-bound Value Set for code (CompartmentDefinition.code)
   */
  public static get codeRequiredCodes() {
    return CompartmentTypeCodes;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation():fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation();
    if (!this['resourceType']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property resourceType:"CompartmentDefinition" fhir: CompartmentDefinition.resourceType:"CompartmentDefinition"' });
    }
    if (!this['url']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property url:fhir.FhirUri fhir: CompartmentDefinition.url:uri' });
    }
    if (this["url"]) { issues.push(...this.url.doModelValidation()); }
    if (this["version"]) { issues.push(...this.version.doModelValidation()); }
    if (!this['name']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property name:fhir.FhirString fhir: CompartmentDefinition.name:string' });
    }
    if (this["name"]) { issues.push(...this.name.doModelValidation()); }
    if (!this['status']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property status:fhir.FhirCode<PublicationStatusCodeType> fhir: CompartmentDefinition.status:code' });
    }
    if (this['status'] && (!Object.values(PublicationStatusCodes).includes(this.status as any))) {
      issues.push({ severity: 'error', code: 'code-invalid', diagnostics: 'Invalid code property status:fhir.FhirCode<PublicationStatusCodeType> fhir: CompartmentDefinition.status:code Required binding to: PublicationStatus' });
    }
    if (this["status"]) { issues.push(...this.status.doModelValidation()); }
    if (this["experimental"]) { issues.push(...this.experimental.doModelValidation()); }
    if (this["date"]) { issues.push(...this.date.doModelValidation()); }
    if (this["publisher"]) { issues.push(...this.publisher.doModelValidation()); }
    if (this["contact"]) { this.contact.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["description"]) { issues.push(...this.description.doModelValidation()); }
    if (this["useContext"]) { this.useContext.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    if (this["purpose"]) { issues.push(...this.purpose.doModelValidation()); }
    if (!this['code']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property code:fhir.FhirCode<CompartmentTypeCodeType> fhir: CompartmentDefinition.code:code' });
    }
    if (this['code'] && (!Object.values(CompartmentTypeCodes).includes(this.code as any))) {
      issues.push({ severity: 'error', code: 'code-invalid', diagnostics: 'Invalid code property code:fhir.FhirCode<CompartmentTypeCodeType> fhir: CompartmentDefinition.code:code Required binding to: CompartmentType' });
    }
    if (this["code"]) { issues.push(...this.code.doModelValidation()); }
    if (!this['search']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property search:fhir.FhirBoolean fhir: CompartmentDefinition.search:boolean' });
    }
    if (this["search"]) { issues.push(...this.search.doModelValidation()); }
    if (this["resource"]) { this.resource.forEach((x) => { issues.push(...x.doModelValidation()); }) }
    return issues;
  }
}
