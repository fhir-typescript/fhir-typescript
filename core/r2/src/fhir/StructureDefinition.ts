// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: StructureDefinition

import * as fhir from '../fhir.js';

// @ts-ignore
import { ConformanceResourceStatusCodes,  ConformanceResourceStatusCodeType } from '../fhirValueSets/ConformanceResourceStatusCodes.js';
// @ts-ignore
import { ConformanceResourceStatusVsValidation } from '../fhirValueSets/ConformanceResourceStatusVsValidation.js';
// @ts-ignore
import { StructureDefinitionKindCodes,  StructureDefinitionKindCodeType } from '../fhirValueSets/StructureDefinitionKindCodes.js';
// @ts-ignore
import { StructureDefinitionKindVsValidation } from '../fhirValueSets/StructureDefinitionKindVsValidation.js';
// @ts-ignore
import { DefinedTypesCodes,  DefinedTypesCodeType } from '../fhirValueSets/DefinedTypesCodes.js';
// @ts-ignore
import { DefinedTypesVsValidation } from '../fhirValueSets/DefinedTypesVsValidation.js';
// @ts-ignore
import { ExtensionContextCodes,  ExtensionContextCodeType } from '../fhirValueSets/ExtensionContextCodes.js';
// @ts-ignore
import { ExtensionContextVsValidation } from '../fhirValueSets/ExtensionContextVsValidation.js';
/**
 * Valid arguments for the StructureDefinitionContact type.
 */
export interface StructureDefinitionContactArgs extends fhir.BackboneElementArgs {
  /**
   * The name of an individual to contact regarding the structure definition.
   */
  name?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: StructureDefinition.contact.name
   */
  _name?:fhir.FhirElementArgs;
  /**
   * Contact details for individual (if a name was provided) or the publisher.
   */
  telecom?: fhir.ContactPointArgs[]|undefined;
}

/**
 * Contacts to assist a user in finding and communicating with the publisher.
 */
export class StructureDefinitionContact extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'StructureDefinitionContact';
  /**
   * The name of an individual to contact regarding the structure definition.
   */
  public name?: fhir.FhirString|undefined;
  /**
   * Contact details for individual (if a name was provided) or the publisher.
   */
  public telecom: fhir.ContactPoint[];
  /**
   * Default constructor for StructureDefinitionContact - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<StructureDefinitionContactArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['name'] !== undefined) { this.name = new fhir.FhirString({value: source.name}, options); }
    if (source['_name']) {
      if (this.name) { this.name.addExtendedProperties(source._name!); }
      else { this.name = new fhir.FhirString(source._name as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['telecom']) { this.telecom = source.telecom.map((x) => new fhir.ContactPoint(x, options)); }
    else { this.telecom = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'StructureDefinition.contact' }
    iss.push(...this.vOS('name',exp));
    iss.push(...this.vOA('telecom',exp));
    return iss;
  }
}
/**
 * Valid arguments for the StructureDefinitionMapping type.
 */
export interface StructureDefinitionMappingArgs extends fhir.BackboneElementArgs {
  /**
   * An Internal id that is used to identify this mapping set when specific mappings are made.
   */
  identity: fhir.FhirId|string|undefined;
  /**
   * Extended properties for primitive element: StructureDefinition.mapping.identity
   */
  _identity?:fhir.FhirElementArgs;
  /**
   * An absolute URI that identifies the specification that this mapping is expressed to.
   */
  uri?: fhir.FhirUri|string|undefined;
  /**
   * Extended properties for primitive element: StructureDefinition.mapping.uri
   */
  _uri?:fhir.FhirElementArgs;
  /**
   * A name for the specification that is being mapped to.
   */
  name?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: StructureDefinition.mapping.name
   */
  _name?:fhir.FhirElementArgs;
  /**
   * Comments about this mapping, including version notes, issues, scope limitations, and other important notes for usage.
   */
  comments?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: StructureDefinition.mapping.comments
   */
  _comments?:fhir.FhirElementArgs;
}

/**
 * An external specification that the content is mapped to.
 */
export class StructureDefinitionMapping extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'StructureDefinitionMapping';
  /**
   * An Internal id that is used to identify this mapping set when specific mappings are made.
   */
  public identity: fhir.FhirId|null;
  /**
   * An absolute URI that identifies the specification that this mapping is expressed to.
   */
  public uri?: fhir.FhirUri|undefined;
  /**
   * A name for the specification that is being mapped to.
   */
  public name?: fhir.FhirString|undefined;
  /**
   * Comments about this mapping, including version notes, issues, scope limitations, and other important notes for usage.
   */
  public comments?: fhir.FhirString|undefined;
  /**
   * Default constructor for StructureDefinitionMapping - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<StructureDefinitionMappingArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['identity'] !== undefined) { this.identity = new fhir.FhirId({value: source.identity}, options); }
    else { this.identity = null; }
    if (source['_identity']) {
      if (this.identity) { this.identity.addExtendedProperties(source._identity!); }
      else { this.identity = new fhir.FhirId(source._identity as Partial<fhir.FhirIdArgs>, options); }
    }
    if (source['uri'] !== undefined) { this.uri = new fhir.FhirUri({value: source.uri}, options); }
    if (source['_uri']) {
      if (this.uri) { this.uri.addExtendedProperties(source._uri!); }
      else { this.uri = new fhir.FhirUri(source._uri as Partial<fhir.FhirUriArgs>, options); }
    }
    if (source['name'] !== undefined) { this.name = new fhir.FhirString({value: source.name}, options); }
    if (source['_name']) {
      if (this.name) { this.name.addExtendedProperties(source._name!); }
      else { this.name = new fhir.FhirString(source._name as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['comments'] !== undefined) { this.comments = new fhir.FhirString({value: source.comments}, options); }
    if (source['_comments']) {
      if (this.comments) { this.comments.addExtendedProperties(source._comments!); }
      else { this.comments = new fhir.FhirString(source._comments as Partial<fhir.FhirStringArgs>, options); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'StructureDefinition.mapping' }
    iss.push(...this.vRS('identity',exp));
    iss.push(...this.vOS('uri',exp));
    iss.push(...this.vOS('name',exp));
    iss.push(...this.vOS('comments',exp));
    return iss;
  }
}
/**
 * Valid arguments for the StructureDefinitionSnapshot type.
 */
export interface StructureDefinitionSnapshotArgs extends fhir.BackboneElementArgs {
  /**
   * Captures constraints on each element within the resource.
   */
  element: fhir.ElementDefinitionArgs[]|null;
}

/**
 * A snapshot view is expressed in a stand alone form that can be used and interpreted without considering the base StructureDefinition.
 */
export class StructureDefinitionSnapshot extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'StructureDefinitionSnapshot';
  /**
   * Captures constraints on each element within the resource.
   */
  public element: fhir.ElementDefinition[];
  /**
   * Default constructor for StructureDefinitionSnapshot - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<StructureDefinitionSnapshotArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['element']) { this.element = source.element.map((x) => new fhir.ElementDefinition(x, options)); }
    else { this.element = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'StructureDefinition.snapshot' }
    iss.push(...this.vRA('element',exp));
    return iss;
  }
}
/**
 * Valid arguments for the StructureDefinitionDifferential type.
 */
export interface StructureDefinitionDifferentialArgs extends fhir.BackboneElementArgs {
  /**
   * Captures constraints on each element within the resource.
   */
  element: fhir.ElementDefinitionArgs[]|null;
}

/**
 * A differential view is expressed relative to the base StructureDefinition - a statement of differences that it applies.
 */
export class StructureDefinitionDifferential extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'StructureDefinitionDifferential';
  /**
   * Captures constraints on each element within the resource.
   */
  public element: fhir.ElementDefinition[];
  /**
   * Default constructor for StructureDefinitionDifferential - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<StructureDefinitionDifferentialArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['element']) { this.element = source.element.map((x) => new fhir.ElementDefinition(x, options)); }
    else { this.element = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'StructureDefinition.differential' }
    iss.push(...this.vRA('element',exp));
    return iss;
  }
}
/**
 * Valid arguments for the StructureDefinition type.
 */
export interface StructureDefinitionArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "StructureDefinition"|undefined;
  /**
   * So you can say, in a StructureDefinition, what the full extension URLs should be. This is required to allow hosting StructureDefinitions on multiple different servers, and to allow for the editorial process.
   */
  url: fhir.FhirUri|string|undefined;
  /**
   * Extended properties for primitive element: StructureDefinition.url
   */
  _url?:fhir.FhirElementArgs;
  /**
   * Formal identifier that is used to identify this StructureDefinition when it is represented in other formats, or referenced in a specification, model, design or an instance  (should be globally unique OID, UUID, or URI), (if it's not possible to use the literal URI).
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * There may be multiple resource versions of the StructureDefinition that have this same identifier. The resource version id will change for technical reasons, whereas the stated version number needs to be under the author's control.
   */
  version?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: StructureDefinition.version
   */
  _version?:fhir.FhirElementArgs;
  /**
   * A free text natural language name identifying the StructureDefinition.
   */
  name: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: StructureDefinition.name
   */
  _name?:fhir.FhirElementArgs;
  /**
   * Defined so that applications can use this name when displaying the value of the extension to the user.
   */
  display?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: StructureDefinition.display
   */
  _display?:fhir.FhirElementArgs;
  /**
   * Allows filtering of StructureDefinitions that are appropriate for use vs. not.
   */
  status: fhir.FhirCode<ConformanceResourceStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: StructureDefinition.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * Allows filtering of StructureDefinitions that are appropriate for use vs. not.
   */
  experimental?: fhir.FhirBoolean|boolean|undefined;
  /**
   * Extended properties for primitive element: StructureDefinition.experimental
   */
  _experimental?:fhir.FhirElementArgs;
  /**
   * Helps establish the "authority/credibility" of the structure definition.  May also allow for contact.
   */
  publisher?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: StructureDefinition.publisher
   */
  _publisher?:fhir.FhirElementArgs;
  /**
   * Contacts to assist a user in finding and communicating with the publisher.
   */
  contact?: fhir.StructureDefinitionContactArgs[]|undefined;
  /**
   * The date this version of the structure definition was published. The date must change when the business version changes, if it does, and it must change if the status code changes. In addition, it should change when the substantive content of the structure definition changes.
   */
  date?: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: StructureDefinition.date
   */
  _date?:fhir.FhirElementArgs;
  /**
   * A free text natural language description of the StructureDefinition and its use.
   */
  description?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: StructureDefinition.description
   */
  _description?:fhir.FhirElementArgs;
  /**
   * Assist in searching for appropriate content.
   */
  useContext?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Explains why this structure definition is needed and why it's been constrained as it has.
   */
  requirements?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: StructureDefinition.requirements
   */
  _requirements?:fhir.FhirElementArgs;
  /**
   * A copyright statement relating to the structure definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the details of the constraints and mappings.
   */
  copyright?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: StructureDefinition.copyright
   */
  _copyright?:fhir.FhirElementArgs;
  /**
   * Assist in searching for appropriate StructureDefinitions.
   */
  code?: fhir.CodingArgs[]|undefined;
  /**
   * The version of the FHIR specification on which this StructureDefinition is based - this is the formal version of the specification, without the revision number, e.g. [publication].[major].[minor], which is 1.0.2 for this version.
   */
  fhirVersion?: fhir.FhirId|string|undefined;
  /**
   * Extended properties for primitive element: StructureDefinition.fhirVersion
   */
  _fhirVersion?:fhir.FhirElementArgs;
  /**
   * An external specification that the content is mapped to.
   */
  mapping?: fhir.StructureDefinitionMappingArgs[]|undefined;
  /**
   * Defines the kind of structure that this definition is describing.
   */
  kind: fhir.FhirCode<StructureDefinitionKindCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: StructureDefinition.kind
   */
  _kind?:fhir.FhirElementArgs;
  /**
   * The type of type that is being constrained - a data type, an extension, a resource, including abstract ones. If this field is present, it indicates that the structure definition is a constraint. If it is not present, then the structure definition is the definition of a base structure.
   */
  constrainedType?: fhir.FhirCode|string|undefined;
  /**
   * Extended properties for primitive element: StructureDefinition.constrainedType
   */
  _constrainedType?:fhir.FhirElementArgs;
  /**
   * Whether structure this definition describes is abstract or not  - that is, whether an actual exchanged item can ever be of this type.
   */
  abstract: fhir.FhirBoolean|boolean|undefined;
  /**
   * Extended properties for primitive element: StructureDefinition.abstract
   */
  _abstract?:fhir.FhirElementArgs;
  /**
   * If this is an extension, Identifies the context within FHIR resources where the extension can be used.
   */
  contextType?: fhir.FhirCode<ExtensionContextCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: StructureDefinition.contextType
   */
  _contextType?:fhir.FhirElementArgs;
  /**
   * Identifies the types of resource or data type elements to which the extension can be applied.
   */
  context?: fhir.FhirString[]|(string|null)[]|undefined;
  /**
   * Extended properties for primitive element: StructureDefinition.context
   */
  _context?:(fhir.FhirElementArgs|null)[];
  /**
   * An absolute URI that is the base structure from which this set of constraints is derived.
   */
  base?: fhir.FhirUri|string|undefined;
  /**
   * Extended properties for primitive element: StructureDefinition.base
   */
  _base?:fhir.FhirElementArgs;
  /**
   * A snapshot view is expressed in a stand alone form that can be used and interpreted without considering the base StructureDefinition.
   */
  snapshot?: fhir.StructureDefinitionSnapshotArgs|undefined;
  /**
   * A differential view is expressed relative to the base StructureDefinition - a statement of differences that it applies.
   */
  differential?: fhir.StructureDefinitionDifferentialArgs|undefined;
}

/**
 * A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions, and constraints on resources and data types.
 */
export class StructureDefinition extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'StructureDefinition';
  /**
   * Resource Type Name
   */
  public override resourceType: "StructureDefinition";
  /**
   * So you can say, in a StructureDefinition, what the full extension URLs should be. This is required to allow hosting StructureDefinitions on multiple different servers, and to allow for the editorial process.
   */
  public url: fhir.FhirUri|null;
  /**
   * Formal identifier that is used to identify this StructureDefinition when it is represented in other formats, or referenced in a specification, model, design or an instance  (should be globally unique OID, UUID, or URI), (if it's not possible to use the literal URI).
   */
  public identifier: fhir.Identifier[];
  /**
   * There may be multiple resource versions of the StructureDefinition that have this same identifier. The resource version id will change for technical reasons, whereas the stated version number needs to be under the author's control.
   */
  public version?: fhir.FhirString|undefined;
  /**
   * A free text natural language name identifying the StructureDefinition.
   */
  public name: fhir.FhirString|null;
  /**
   * Defined so that applications can use this name when displaying the value of the extension to the user.
   */
  public display?: fhir.FhirString|undefined;
  /**
   * Allows filtering of StructureDefinitions that are appropriate for use vs. not.
   */
  public status: fhir.FhirCode<ConformanceResourceStatusCodeType>|null;
  /**
   * Allows filtering of StructureDefinitions that are appropriate for use vs. not.
   */
  public experimental?: fhir.FhirBoolean|undefined;
  /**
   * Helps establish the "authority/credibility" of the structure definition.  May also allow for contact.
   */
  public publisher?: fhir.FhirString|undefined;
  /**
   * Contacts to assist a user in finding and communicating with the publisher.
   */
  public contact: fhir.StructureDefinitionContact[];
  /**
   * The date this version of the structure definition was published. The date must change when the business version changes, if it does, and it must change if the status code changes. In addition, it should change when the substantive content of the structure definition changes.
   */
  public date?: fhir.FhirDateTime|undefined;
  /**
   * A free text natural language description of the StructureDefinition and its use.
   */
  public description?: fhir.FhirString|undefined;
  /**
   * Assist in searching for appropriate content.
   */
  public useContext: fhir.CodeableConcept[];
  /**
   * Explains why this structure definition is needed and why it's been constrained as it has.
   */
  public requirements?: fhir.FhirString|undefined;
  /**
   * A copyright statement relating to the structure definition and/or its contents. Copyright statements are generally legal restrictions on the use and publishing of the details of the constraints and mappings.
   */
  public copyright?: fhir.FhirString|undefined;
  /**
   * Assist in searching for appropriate StructureDefinitions.
   */
  public code: fhir.Coding[];
  /**
   * The version of the FHIR specification on which this StructureDefinition is based - this is the formal version of the specification, without the revision number, e.g. [publication].[major].[minor], which is 1.0.2 for this version.
   */
  public fhirVersion?: fhir.FhirId|undefined;
  /**
   * An external specification that the content is mapped to.
   */
  public mapping: fhir.StructureDefinitionMapping[];
  /**
   * Defines the kind of structure that this definition is describing.
   */
  public kind: fhir.FhirCode<StructureDefinitionKindCodeType>|null;
  /**
   * The type of type that is being constrained - a data type, an extension, a resource, including abstract ones. If this field is present, it indicates that the structure definition is a constraint. If it is not present, then the structure definition is the definition of a base structure.
   */
  public constrainedType?: fhir.FhirCode|undefined;
  /**
   * Whether structure this definition describes is abstract or not  - that is, whether an actual exchanged item can ever be of this type.
   */
  public abstract: fhir.FhirBoolean|null;
  /**
   * If this is an extension, Identifies the context within FHIR resources where the extension can be used.
   */
  public contextType?: fhir.FhirCode<ExtensionContextCodeType>|undefined;
  /**
   * Identifies the types of resource or data type elements to which the extension can be applied.
   */
  public context: fhir.FhirString[];
  /**
   * An absolute URI that is the base structure from which this set of constraints is derived.
   */
  public base?: fhir.FhirUri|undefined;
  /**
   * A snapshot view is expressed in a stand alone form that can be used and interpreted without considering the base StructureDefinition.
   */
  public snapshot?: fhir.StructureDefinitionSnapshot|undefined;
  /**
   * A differential view is expressed relative to the base StructureDefinition - a statement of differences that it applies.
   */
  public differential?: fhir.StructureDefinitionDifferential|undefined;
  /**
   * Default constructor for StructureDefinition - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<StructureDefinitionArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'StructureDefinition';
    if (source['url'] !== undefined) { this.url = new fhir.FhirUri({value: source.url}, options); }
    else { this.url = null; }
    if (source['_url']) {
      if (this.url) { this.url.addExtendedProperties(source._url!); }
      else { this.url = new fhir.FhirUri(source._url as Partial<fhir.FhirUriArgs>, options); }
    }
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x, options)); }
    else { this.identifier = []; }
    if (source['version'] !== undefined) { this.version = new fhir.FhirString({value: source.version}, options); }
    if (source['_version']) {
      if (this.version) { this.version.addExtendedProperties(source._version!); }
      else { this.version = new fhir.FhirString(source._version as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['name'] !== undefined) { this.name = new fhir.FhirString({value: source.name}, options); }
    else { this.name = null; }
    if (source['_name']) {
      if (this.name) { this.name.addExtendedProperties(source._name!); }
      else { this.name = new fhir.FhirString(source._name as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['display'] !== undefined) { this.display = new fhir.FhirString({value: source.display}, options); }
    if (source['_display']) {
      if (this.display) { this.display.addExtendedProperties(source._display!); }
      else { this.display = new fhir.FhirString(source._display as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['status'] !== undefined) { this.status = new fhir.FhirCode<ConformanceResourceStatusCodeType>({value: source.status}, options); }
    else { this.status = null; }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<ConformanceResourceStatusCodeType>(source._status as Partial<fhir.FhirCode>, options); }
    }
    if (source['experimental'] !== undefined) { this.experimental = new fhir.FhirBoolean({value: source.experimental}, options); }
    if (source['_experimental']) {
      if (this.experimental) { this.experimental.addExtendedProperties(source._experimental!); }
      else { this.experimental = new fhir.FhirBoolean(source._experimental as Partial<fhir.FhirBooleanArgs>, options); }
    }
    if (source['publisher'] !== undefined) { this.publisher = new fhir.FhirString({value: source.publisher}, options); }
    if (source['_publisher']) {
      if (this.publisher) { this.publisher.addExtendedProperties(source._publisher!); }
      else { this.publisher = new fhir.FhirString(source._publisher as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['contact']) { this.contact = source.contact.map((x) => new fhir.StructureDefinitionContact(x, options)); }
    else { this.contact = []; }
    if (source['date'] !== undefined) { this.date = new fhir.FhirDateTime({value: source.date}, options); }
    if (source['_date']) {
      if (this.date) { this.date.addExtendedProperties(source._date!); }
      else { this.date = new fhir.FhirDateTime(source._date as Partial<fhir.FhirDateTimeArgs>, options); }
    }
    if (source['description'] !== undefined) { this.description = new fhir.FhirString({value: source.description}, options); }
    if (source['_description']) {
      if (this.description) { this.description.addExtendedProperties(source._description!); }
      else { this.description = new fhir.FhirString(source._description as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['useContext']) { this.useContext = source.useContext.map((x) => new fhir.CodeableConcept(x, options)); }
    else { this.useContext = []; }
    if (source['requirements'] !== undefined) { this.requirements = new fhir.FhirString({value: source.requirements}, options); }
    if (source['_requirements']) {
      if (this.requirements) { this.requirements.addExtendedProperties(source._requirements!); }
      else { this.requirements = new fhir.FhirString(source._requirements as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['copyright'] !== undefined) { this.copyright = new fhir.FhirString({value: source.copyright}, options); }
    if (source['_copyright']) {
      if (this.copyright) { this.copyright.addExtendedProperties(source._copyright!); }
      else { this.copyright = new fhir.FhirString(source._copyright as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['code']) { this.code = source.code.map((x) => new fhir.Coding(x, options)); }
    else { this.code = []; }
    if (source['fhirVersion'] !== undefined) { this.fhirVersion = new fhir.FhirId({value: source.fhirVersion}, options); }
    if (source['_fhirVersion']) {
      if (this.fhirVersion) { this.fhirVersion.addExtendedProperties(source._fhirVersion!); }
      else { this.fhirVersion = new fhir.FhirId(source._fhirVersion as Partial<fhir.FhirIdArgs>, options); }
    }
    if (source['mapping']) { this.mapping = source.mapping.map((x) => new fhir.StructureDefinitionMapping(x, options)); }
    else { this.mapping = []; }
    if (source['kind'] !== undefined) { this.kind = new fhir.FhirCode<StructureDefinitionKindCodeType>({value: source.kind}, options); }
    else { this.kind = null; }
    if (source['_kind']) {
      if (this.kind) { this.kind.addExtendedProperties(source._kind!); }
      else { this.kind = new fhir.FhirCode<StructureDefinitionKindCodeType>(source._kind as Partial<fhir.FhirCode>, options); }
    }
    if (source['constrainedType'] !== undefined) { this.constrainedType = new fhir.FhirCode({value: source.constrainedType}, options); }
    if (source['_constrainedType']) {
      if (this.constrainedType) { this.constrainedType.addExtendedProperties(source._constrainedType!); }
      else { this.constrainedType = new fhir.FhirCode(source._constrainedType as Partial<fhir.FhirCodeArgs>, options); }
    }
    if (source['abstract'] !== undefined) { this.abstract = new fhir.FhirBoolean({value: source.abstract}, options); }
    else { this.abstract = null; }
    if (source['_abstract']) {
      if (this.abstract) { this.abstract.addExtendedProperties(source._abstract!); }
      else { this.abstract = new fhir.FhirBoolean(source._abstract as Partial<fhir.FhirBooleanArgs>, options); }
    }
    if (source['contextType'] !== undefined) { this.contextType = new fhir.FhirCode<ExtensionContextCodeType>({value: source.contextType}, options); }
    if (source['_contextType']) {
      if (this.contextType) { this.contextType.addExtendedProperties(source._contextType!); }
      else { this.contextType = new fhir.FhirCode<ExtensionContextCodeType>(source._contextType as Partial<fhir.FhirCode>, options); }
    }
    if (source['context'] !== undefined) { this.context = source.context.map((x) => new fhir.FhirString({value: x}, options)); }
    else { this.context = []; }
    if (source['_context']) {
      source._context.forEach((x,i) => {
        if (this.context.length >= i) { if (x) { this.context[i].addExtendedProperties(x); } }
        else { if (x) { this.context.push(new fhir.FhirString(x as Partial<fhir.FhirStringArgs>)); } }
      });
    }
    if (source['base'] !== undefined) { this.base = new fhir.FhirUri({value: source.base}, options); }
    if (source['_base']) {
      if (this.base) { this.base.addExtendedProperties(source._base!); }
      else { this.base = new fhir.FhirUri(source._base as Partial<fhir.FhirUriArgs>, options); }
    }
    if (source['snapshot']) { this.snapshot = new fhir.StructureDefinitionSnapshot(source.snapshot, options); }
    if (source['differential']) { this.differential = new fhir.StructureDefinitionDifferential(source.differential, options); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'StructureDefinition' }
    iss.push(...this.vRS('url',exp));
    iss.push(...this.vOA('identifier',exp));
    iss.push(...this.vOS('version',exp));
    iss.push(...this.vRS('name',exp));
    iss.push(...this.vOS('display',exp));
    iss.push(...this.vRSV('status',exp,'ConformanceResourceStatus',ConformanceResourceStatusVsValidation,'r'));
    iss.push(...this.vOS('experimental',exp));
    iss.push(...this.vOS('publisher',exp));
    iss.push(...this.vOA('contact',exp));
    iss.push(...this.vOS('date',exp));
    iss.push(...this.vOS('description',exp));
    iss.push(...this.vOA('useContext',exp));
    iss.push(...this.vOS('requirements',exp));
    iss.push(...this.vOS('copyright',exp));
    iss.push(...this.vOA('code',exp));
    iss.push(...this.vOS('fhirVersion',exp));
    iss.push(...this.vOA('mapping',exp));
    iss.push(...this.vRSV('kind',exp,'StructureDefinitionKind',StructureDefinitionKindVsValidation,'r'));
    iss.push(...this.vOSV('constrainedType',exp,'DefinedTypes',DefinedTypesVsValidation,'r'));
    iss.push(...this.vRS('abstract',exp));
    iss.push(...this.vOSV('contextType',exp,'ExtensionContext',ExtensionContextVsValidation,'r'));
    iss.push(...this.vOA('context',exp));
    iss.push(...this.vOS('base',exp));
    iss.push(...this.vOS('snapshot',exp));
    iss.push(...this.vOS('differential',exp));
    return iss;
  }
}
