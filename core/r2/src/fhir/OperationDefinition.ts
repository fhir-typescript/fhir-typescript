// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: OperationDefinition

import * as fhir from '../fhir.js';

// @ts-ignore
import { BindingStrengthCodes,  BindingStrengthCodeType } from '../fhirValueSets/BindingStrengthCodes.js';
// @ts-ignore
import { BindingStrengthVsValidation } from '../fhirValueSets/BindingStrengthVsValidation.js';
// @ts-ignore
import { OperationParameterUseCodes,  OperationParameterUseCodeType } from '../fhirValueSets/OperationParameterUseCodes.js';
// @ts-ignore
import { OperationParameterUseVsValidation } from '../fhirValueSets/OperationParameterUseVsValidation.js';
// @ts-ignore
import { OperationParameterTypeCodes,  OperationParameterTypeCodeType } from '../fhirValueSets/OperationParameterTypeCodes.js';
// @ts-ignore
import { OperationParameterTypeVsValidation } from '../fhirValueSets/OperationParameterTypeVsValidation.js';
// @ts-ignore
import { ConformanceResourceStatusCodes,  ConformanceResourceStatusCodeType } from '../fhirValueSets/ConformanceResourceStatusCodes.js';
// @ts-ignore
import { ConformanceResourceStatusVsValidation } from '../fhirValueSets/ConformanceResourceStatusVsValidation.js';
// @ts-ignore
import { OperationKindCodes,  OperationKindCodeType } from '../fhirValueSets/OperationKindCodes.js';
// @ts-ignore
import { OperationKindVsValidation } from '../fhirValueSets/OperationKindVsValidation.js';
// @ts-ignore
import { ResourceTypesCodes,  ResourceTypesCodeType } from '../fhirValueSets/ResourceTypesCodes.js';
// @ts-ignore
import { ResourceTypesVsValidation } from '../fhirValueSets/ResourceTypesVsValidation.js';
/**
 * Valid arguments for the OperationDefinitionContact type.
 */
export interface OperationDefinitionContactArgs extends fhir.BackboneElementArgs {
  /**
   * The name of an individual to contact regarding the operation definition.
   */
  name?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: OperationDefinition.contact.name
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
export class OperationDefinitionContact extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'OperationDefinitionContact';
  /**
   * The name of an individual to contact regarding the operation definition.
   */
  public name?: fhir.FhirString|undefined;
  /**
   * Contact details for individual (if a name was provided) or the publisher.
   */
  public telecom: fhir.ContactPoint[];
  /**
   * Default constructor for OperationDefinitionContact - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<OperationDefinitionContactArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['name']) { this.name = new fhir.FhirString({value: source.name}); }
    if (source['_name']) {
      if (this.name) { this.name.addExtendedProperties(source._name!); }
      else { this.name = new fhir.FhirString(source._name as Partial<fhir.FhirStringArgs>); }
    }
    if (source['telecom']) { this.telecom = source.telecom.map((x) => new fhir.ContactPoint(x)); }
    else { this.telecom = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'OperationDefinition.contact' }
    iss.push(...this.vOS('name',exp));
    iss.push(...this.vOA('telecom',exp));
    return iss;
  }
}
/**
 * Valid arguments for the OperationDefinitionParameterBinding type.
 */
export interface OperationDefinitionParameterBindingArgs extends fhir.BackboneElementArgs {
  /**
   * Indicates the degree of conformance expectations associated with this binding - that is, the degree to which the provided value set must be adhered to in the instances.
   */
  strength: fhir.FhirCode<BindingStrengthCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: OperationDefinition.parameter.binding.strength
   */
  _strength?:fhir.FhirElementArgs;
  /**
   * Points to the value set or external definition (e.g. implicit value set) that identifies the set of codes to be used.
   */
  valueSet?: fhir.FhirUri|fhir.Reference|undefined;
  /**
   * Points to the value set or external definition (e.g. implicit value set) that identifies the set of codes to be used.
   */
  valueSetUri?: fhir.FhirUri|string|undefined;
  /**
   * Points to the value set or external definition (e.g. implicit value set) that identifies the set of codes to be used.
   */
  valueSetReference?: fhir.ReferenceArgs|undefined;
}

/**
 * Binds to a value set if this parameter is coded (code, Coding, CodeableConcept).
 */
export class OperationDefinitionParameterBinding extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'OperationDefinitionParameterBinding';
  /**
   * Indicates the degree of conformance expectations associated with this binding - that is, the degree to which the provided value set must be adhered to in the instances.
   */
  public strength: fhir.FhirCode<BindingStrengthCodeType>|null;
  /**
   * Points to the value set or external definition (e.g. implicit value set) that identifies the set of codes to be used.
   */
  public valueSet: (fhir.FhirUri|fhir.Reference)|null;
  /**
   * Internal flag to properly serialize choice-type element OperationDefinition.parameter.binding.valueSet[x]
   */
  protected static readonly _fts_valueSetIsChoice:true = true;
  /**
   * Default constructor for OperationDefinitionParameterBinding - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<OperationDefinitionParameterBindingArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['strength']) { this.strength = new fhir.FhirCode<BindingStrengthCodeType>({value: source.strength}); }
    else { this.strength = null; }
    if (source['_strength']) {
      if (this.strength) { this.strength.addExtendedProperties(source._strength!); }
      else { this.strength = new fhir.FhirCode<BindingStrengthCodeType>(source._strength as Partial<fhir.FhirCode>); }
    }
    if (source['valueSet']) { this.valueSet = source.valueSet; }
    else if (source['valueSetUri']) { this.valueSet = new fhir.FhirUri({value: source.valueSetUri}); }
    else if (source['valueSetReference']) { this.valueSet = new fhir.Reference(source.valueSetReference); }
    else { this.valueSet = null; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'OperationDefinition.parameter.binding' }
    iss.push(...this.vRSV('strength',exp,'BindingStrength',BindingStrengthVsValidation,'r'));
    iss.push(...this.vRS('valueSet',exp));
    return iss;
  }
}
/**
 * Valid arguments for the OperationDefinitionParameter type.
 */
export interface OperationDefinitionParameterArgs extends fhir.BackboneElementArgs {
  /**
   * The name of used to identify the parameter.
   */
  name: fhir.FhirCode|string|undefined;
  /**
   * Extended properties for primitive element: OperationDefinition.parameter.name
   */
  _name?:fhir.FhirElementArgs;
  /**
   * Whether this is an input or an output parameter.
   */
  use: fhir.FhirCode<OperationParameterUseCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: OperationDefinition.parameter.use
   */
  _use?:fhir.FhirElementArgs;
  /**
   * The minimum number of times this parameter SHALL appear in the request or response.
   */
  min: fhir.FhirInteger|number|undefined;
  /**
   * Extended properties for primitive element: OperationDefinition.parameter.min
   */
  _min?:fhir.FhirElementArgs;
  /**
   * The maximum number of times this element is permitted to appear in the request or response.
   */
  max: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: OperationDefinition.parameter.max
   */
  _max?:fhir.FhirElementArgs;
  /**
   * Describes the meaning or use of this parameter.
   */
  documentation?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: OperationDefinition.parameter.documentation
   */
  _documentation?:fhir.FhirElementArgs;
  /**
   * The type for this parameter.
   */
  type?: fhir.FhirCode|string|undefined;
  /**
   * Extended properties for primitive element: OperationDefinition.parameter.type
   */
  _type?:fhir.FhirElementArgs;
  /**
   * A profile the specifies the rules that this parameter must conform to.
   */
  profile?: fhir.ReferenceArgs|undefined;
  /**
   * Binds to a value set if this parameter is coded (code, Coding, CodeableConcept).
   */
  binding?: fhir.OperationDefinitionParameterBindingArgs|undefined;
  /**
   * The parts of a Tuple Parameter.
   */
  part?: fhir.OperationDefinitionParameterArgs[]|undefined;
}

/**
 * The parameters for the operation/query.
 */
export class OperationDefinitionParameter extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'OperationDefinitionParameter';
  /**
   * The name of used to identify the parameter.
   */
  public name: fhir.FhirCode|null;
  /**
   * Whether this is an input or an output parameter.
   */
  public use: fhir.FhirCode<OperationParameterUseCodeType>|null;
  /**
   * The minimum number of times this parameter SHALL appear in the request or response.
   */
  public min: fhir.FhirInteger|null;
  /**
   * The maximum number of times this element is permitted to appear in the request or response.
   */
  public max: fhir.FhirString|null;
  /**
   * Describes the meaning or use of this parameter.
   */
  public documentation?: fhir.FhirString|undefined;
  /**
   * The type for this parameter.
   */
  public type?: fhir.FhirCode|undefined;
  /**
   * A profile the specifies the rules that this parameter must conform to.
   */
  public profile?: fhir.Reference|undefined;
  /**
   * Binds to a value set if this parameter is coded (code, Coding, CodeableConcept).
   */
  public binding?: fhir.OperationDefinitionParameterBinding|undefined;
  /**
   * The parts of a Tuple Parameter.
   */
  public part: fhir.OperationDefinitionParameter[];
  /**
   * Default constructor for OperationDefinitionParameter - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<OperationDefinitionParameterArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['name']) { this.name = new fhir.FhirCode({value: source.name}); }
    else { this.name = null; }
    if (source['_name']) {
      if (this.name) { this.name.addExtendedProperties(source._name!); }
      else { this.name = new fhir.FhirCode(source._name as Partial<fhir.FhirCodeArgs>); }
    }
    if (source['use']) { this.use = new fhir.FhirCode<OperationParameterUseCodeType>({value: source.use}); }
    else { this.use = null; }
    if (source['_use']) {
      if (this.use) { this.use.addExtendedProperties(source._use!); }
      else { this.use = new fhir.FhirCode<OperationParameterUseCodeType>(source._use as Partial<fhir.FhirCode>); }
    }
    if (source['min']) { this.min = new fhir.FhirInteger({value: source.min}); }
    else { this.min = null; }
    if (source['_min']) {
      if (this.min) { this.min.addExtendedProperties(source._min!); }
      else { this.min = new fhir.FhirInteger(source._min as Partial<fhir.FhirIntegerArgs>); }
    }
    if (source['max']) { this.max = new fhir.FhirString({value: source.max}); }
    else { this.max = null; }
    if (source['_max']) {
      if (this.max) { this.max.addExtendedProperties(source._max!); }
      else { this.max = new fhir.FhirString(source._max as Partial<fhir.FhirStringArgs>); }
    }
    if (source['documentation']) { this.documentation = new fhir.FhirString({value: source.documentation}); }
    if (source['_documentation']) {
      if (this.documentation) { this.documentation.addExtendedProperties(source._documentation!); }
      else { this.documentation = new fhir.FhirString(source._documentation as Partial<fhir.FhirStringArgs>); }
    }
    if (source['type']) { this.type = new fhir.FhirCode({value: source.type}); }
    if (source['_type']) {
      if (this.type) { this.type.addExtendedProperties(source._type!); }
      else { this.type = new fhir.FhirCode(source._type as Partial<fhir.FhirCodeArgs>); }
    }
    if (source['profile']) { this.profile = new fhir.Reference(source.profile); }
    if (source['binding']) { this.binding = new fhir.OperationDefinitionParameterBinding(source.binding); }
    if (source['part']) { this.part = source.part.map((x) => new fhir.OperationDefinitionParameter(x)); }
    else { this.part = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'OperationDefinition.parameter' }
    iss.push(...this.vRS('name',exp));
    iss.push(...this.vRSV('use',exp,'OperationParameterUse',OperationParameterUseVsValidation,'r'));
    iss.push(...this.vRS('min',exp));
    iss.push(...this.vRS('max',exp));
    iss.push(...this.vOS('documentation',exp));
    iss.push(...this.vOSV('type',exp,'OperationParameterType',OperationParameterTypeVsValidation,'r'));
    iss.push(...this.vOS('profile',exp));
    iss.push(...this.vOS('binding',exp));
    iss.push(...this.vOA('part',exp));
    return iss;
  }
}
/**
 * Valid arguments for the OperationDefinition type.
 */
export interface OperationDefinitionArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "OperationDefinition"|undefined;
  /**
   * An absolute URL that is used to identify this operation definition when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this operation definition is (or will be) published.
   */
  url?: fhir.FhirUri|string|undefined;
  /**
   * Extended properties for primitive element: OperationDefinition.url
   */
  _url?:fhir.FhirElementArgs;
  /**
   * There may be multiple resource versions of the profile that have this same identifier. The resource version id will change for technical reasons, whereas the stated version number needs to be under the author's control.
   */
  version?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: OperationDefinition.version
   */
  _version?:fhir.FhirElementArgs;
  /**
   * A free text natural language name identifying the operation.
   */
  name: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: OperationDefinition.name
   */
  _name?:fhir.FhirElementArgs;
  /**
   * Allows filtering of profiles that are appropriate for use vs. not.
   */
  status: fhir.FhirCode<ConformanceResourceStatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: OperationDefinition.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * Whether this is an operation or a named query.
   */
  kind: fhir.FhirCode<OperationKindCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: OperationDefinition.kind
   */
  _kind?:fhir.FhirElementArgs;
  /**
   * Allows filtering of profiles that are appropriate for use vs. not.
   */
  experimental?: fhir.FhirBoolean|boolean|undefined;
  /**
   * Extended properties for primitive element: OperationDefinition.experimental
   */
  _experimental?:fhir.FhirElementArgs;
  /**
   * Helps establish the "authority/credibility" of the operation definition.  May also allow for contact.
   */
  publisher?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: OperationDefinition.publisher
   */
  _publisher?:fhir.FhirElementArgs;
  /**
   * Contacts to assist a user in finding and communicating with the publisher.
   */
  contact?: fhir.OperationDefinitionContactArgs[]|undefined;
  /**
   * The date this version of the operation definition was published. The date must change when the business version changes, if it does, and it must change if the status code changes. In addition, it should change when the substantive content of the Operation Definition changes.
   */
  date?: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: OperationDefinition.date
   */
  _date?:fhir.FhirElementArgs;
  /**
   * A free text natural language description of the profile and its use.
   */
  description?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: OperationDefinition.description
   */
  _description?:fhir.FhirElementArgs;
  /**
   * Explains why this operation definition is needed and why it's been constrained as it has.
   */
  requirements?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: OperationDefinition.requirements
   */
  _requirements?:fhir.FhirElementArgs;
  /**
   * Operations that are idempotent (see [HTTP specification definition of idempotent](http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html)) may be invoked by performing an HTTP GET operation instead of a POST.
   */
  idempotent?: fhir.FhirBoolean|boolean|undefined;
  /**
   * Extended properties for primitive element: OperationDefinition.idempotent
   */
  _idempotent?:fhir.FhirElementArgs;
  /**
   * The name used to invoke the operation.
   */
  code: fhir.FhirCode|string|undefined;
  /**
   * Extended properties for primitive element: OperationDefinition.code
   */
  _code?:fhir.FhirElementArgs;
  /**
   * Additional information about how to use this operation or named query.
   */
  notes?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: OperationDefinition.notes
   */
  _notes?:fhir.FhirElementArgs;
  /**
   * Indicates that this operation definition is a constraining profile on the base.
   */
  base?: fhir.ReferenceArgs|undefined;
  /**
   * Indicates whether this operation or named query can be invoked at the system level (e.g. without needing to choose a resource type for the context).
   */
  system: fhir.FhirBoolean|boolean|undefined;
  /**
   * Extended properties for primitive element: OperationDefinition.system
   */
  _system?:fhir.FhirElementArgs;
  /**
   * Indicates whether this operation or named query can be invoked at the resource type level for any given resource type level (e.g. without needing to choose a resource type for the context).
   */
  type?: fhir.FhirCode[]|(string|null)[]|undefined;
  /**
   * Extended properties for primitive element: OperationDefinition.type
   */
  _type?:(fhir.FhirElementArgs|null)[];
  /**
   * Indicates whether this operation can be invoked on a particular instance of one of the given types.
   */
  instance: fhir.FhirBoolean|boolean|undefined;
  /**
   * Extended properties for primitive element: OperationDefinition.instance
   */
  _instance?:fhir.FhirElementArgs;
  /**
   * The parameters for the operation/query.
   */
  parameter?: fhir.OperationDefinitionParameterArgs[]|undefined;
}

/**
 * A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction).
 */
export class OperationDefinition extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'OperationDefinition';
  /**
   * Resource Type Name
   */
  public override resourceType: "OperationDefinition";
  /**
   * An absolute URL that is used to identify this operation definition when it is referenced in a specification, model, design or an instance. This SHALL be a URL, SHOULD be globally unique, and SHOULD be an address at which this operation definition is (or will be) published.
   */
  public url?: fhir.FhirUri|undefined;
  /**
   * There may be multiple resource versions of the profile that have this same identifier. The resource version id will change for technical reasons, whereas the stated version number needs to be under the author's control.
   */
  public version?: fhir.FhirString|undefined;
  /**
   * A free text natural language name identifying the operation.
   */
  public name: fhir.FhirString|null;
  /**
   * Allows filtering of profiles that are appropriate for use vs. not.
   */
  public status: fhir.FhirCode<ConformanceResourceStatusCodeType>|null;
  /**
   * Whether this is an operation or a named query.
   */
  public kind: fhir.FhirCode<OperationKindCodeType>|null;
  /**
   * Allows filtering of profiles that are appropriate for use vs. not.
   */
  public experimental?: fhir.FhirBoolean|undefined;
  /**
   * Helps establish the "authority/credibility" of the operation definition.  May also allow for contact.
   */
  public publisher?: fhir.FhirString|undefined;
  /**
   * Contacts to assist a user in finding and communicating with the publisher.
   */
  public contact: fhir.OperationDefinitionContact[];
  /**
   * The date this version of the operation definition was published. The date must change when the business version changes, if it does, and it must change if the status code changes. In addition, it should change when the substantive content of the Operation Definition changes.
   */
  public date?: fhir.FhirDateTime|undefined;
  /**
   * A free text natural language description of the profile and its use.
   */
  public description?: fhir.FhirString|undefined;
  /**
   * Explains why this operation definition is needed and why it's been constrained as it has.
   */
  public requirements?: fhir.FhirString|undefined;
  /**
   * Operations that are idempotent (see [HTTP specification definition of idempotent](http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html)) may be invoked by performing an HTTP GET operation instead of a POST.
   */
  public idempotent?: fhir.FhirBoolean|undefined;
  /**
   * The name used to invoke the operation.
   */
  public code: fhir.FhirCode|null;
  /**
   * Additional information about how to use this operation or named query.
   */
  public notes?: fhir.FhirString|undefined;
  /**
   * Indicates that this operation definition is a constraining profile on the base.
   */
  public base?: fhir.Reference|undefined;
  /**
   * Indicates whether this operation or named query can be invoked at the system level (e.g. without needing to choose a resource type for the context).
   */
  public system: fhir.FhirBoolean|null;
  /**
   * Indicates whether this operation or named query can be invoked at the resource type level for any given resource type level (e.g. without needing to choose a resource type for the context).
   */
  public type: fhir.FhirCode[];
  /**
   * Indicates whether this operation can be invoked on a particular instance of one of the given types.
   */
  public instance: fhir.FhirBoolean|null;
  /**
   * The parameters for the operation/query.
   */
  public parameter: fhir.OperationDefinitionParameter[];
  /**
   * Default constructor for OperationDefinition - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<OperationDefinitionArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'OperationDefinition';
    if (source['url']) { this.url = new fhir.FhirUri({value: source.url}); }
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
    if (source['status']) { this.status = new fhir.FhirCode<ConformanceResourceStatusCodeType>({value: source.status}); }
    else { this.status = null; }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<ConformanceResourceStatusCodeType>(source._status as Partial<fhir.FhirCode>); }
    }
    if (source['kind']) { this.kind = new fhir.FhirCode<OperationKindCodeType>({value: source.kind}); }
    else { this.kind = null; }
    if (source['_kind']) {
      if (this.kind) { this.kind.addExtendedProperties(source._kind!); }
      else { this.kind = new fhir.FhirCode<OperationKindCodeType>(source._kind as Partial<fhir.FhirCode>); }
    }
    if (source['experimental']) { this.experimental = new fhir.FhirBoolean({value: source.experimental}); }
    if (source['_experimental']) {
      if (this.experimental) { this.experimental.addExtendedProperties(source._experimental!); }
      else { this.experimental = new fhir.FhirBoolean(source._experimental as Partial<fhir.FhirBooleanArgs>); }
    }
    if (source['publisher']) { this.publisher = new fhir.FhirString({value: source.publisher}); }
    if (source['_publisher']) {
      if (this.publisher) { this.publisher.addExtendedProperties(source._publisher!); }
      else { this.publisher = new fhir.FhirString(source._publisher as Partial<fhir.FhirStringArgs>); }
    }
    if (source['contact']) { this.contact = source.contact.map((x) => new fhir.OperationDefinitionContact(x)); }
    else { this.contact = []; }
    if (source['date']) { this.date = new fhir.FhirDateTime({value: source.date}); }
    if (source['_date']) {
      if (this.date) { this.date.addExtendedProperties(source._date!); }
      else { this.date = new fhir.FhirDateTime(source._date as Partial<fhir.FhirDateTimeArgs>); }
    }
    if (source['description']) { this.description = new fhir.FhirString({value: source.description}); }
    if (source['_description']) {
      if (this.description) { this.description.addExtendedProperties(source._description!); }
      else { this.description = new fhir.FhirString(source._description as Partial<fhir.FhirStringArgs>); }
    }
    if (source['requirements']) { this.requirements = new fhir.FhirString({value: source.requirements}); }
    if (source['_requirements']) {
      if (this.requirements) { this.requirements.addExtendedProperties(source._requirements!); }
      else { this.requirements = new fhir.FhirString(source._requirements as Partial<fhir.FhirStringArgs>); }
    }
    if (source['idempotent']) { this.idempotent = new fhir.FhirBoolean({value: source.idempotent}); }
    if (source['_idempotent']) {
      if (this.idempotent) { this.idempotent.addExtendedProperties(source._idempotent!); }
      else { this.idempotent = new fhir.FhirBoolean(source._idempotent as Partial<fhir.FhirBooleanArgs>); }
    }
    if (source['code']) { this.code = new fhir.FhirCode({value: source.code}); }
    else { this.code = null; }
    if (source['_code']) {
      if (this.code) { this.code.addExtendedProperties(source._code!); }
      else { this.code = new fhir.FhirCode(source._code as Partial<fhir.FhirCodeArgs>); }
    }
    if (source['notes']) { this.notes = new fhir.FhirString({value: source.notes}); }
    if (source['_notes']) {
      if (this.notes) { this.notes.addExtendedProperties(source._notes!); }
      else { this.notes = new fhir.FhirString(source._notes as Partial<fhir.FhirStringArgs>); }
    }
    if (source['base']) { this.base = new fhir.Reference(source.base); }
    if (source['system']) { this.system = new fhir.FhirBoolean({value: source.system}); }
    else { this.system = null; }
    if (source['_system']) {
      if (this.system) { this.system.addExtendedProperties(source._system!); }
      else { this.system = new fhir.FhirBoolean(source._system as Partial<fhir.FhirBooleanArgs>); }
    }
    if (source['type']) { this.type = source.type.map((x) => new fhir.FhirCode({value: x})); }
    else { this.type = []; }
    if (source['_type']) {
      source._type.forEach((x,i) => {
        if (this.type.length >= i) { if (x) { this.type[i].addExtendedProperties(x); } }
        else { if (x) { this.type.push(new fhir.FhirCode(x as Partial<fhir.FhirCodeArgs>)); } }
      });
    }
    if (source['instance']) { this.instance = new fhir.FhirBoolean({value: source.instance}); }
    else { this.instance = null; }
    if (source['_instance']) {
      if (this.instance) { this.instance.addExtendedProperties(source._instance!); }
      else { this.instance = new fhir.FhirBoolean(source._instance as Partial<fhir.FhirBooleanArgs>); }
    }
    if (source['parameter']) { this.parameter = source.parameter.map((x) => new fhir.OperationDefinitionParameter(x)); }
    else { this.parameter = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'OperationDefinition' }
    iss.push(...this.vRPS('resourceType',exp));
    iss.push(...this.vOS('url',exp));
    iss.push(...this.vOS('version',exp));
    iss.push(...this.vRS('name',exp));
    iss.push(...this.vRSV('status',exp,'ConformanceResourceStatus',ConformanceResourceStatusVsValidation,'r'));
    iss.push(...this.vRSV('kind',exp,'OperationKind',OperationKindVsValidation,'r'));
    iss.push(...this.vOS('experimental',exp));
    iss.push(...this.vOS('publisher',exp));
    iss.push(...this.vOA('contact',exp));
    iss.push(...this.vOS('date',exp));
    iss.push(...this.vOS('description',exp));
    iss.push(...this.vOS('requirements',exp));
    iss.push(...this.vOS('idempotent',exp));
    iss.push(...this.vRS('code',exp));
    iss.push(...this.vOS('notes',exp));
    iss.push(...this.vOS('base',exp));
    iss.push(...this.vRS('system',exp));
    iss.push(...this.vOAV('type',exp,'ResourceTypes',ResourceTypesVsValidation,'r'));
    iss.push(...this.vRS('instance',exp));
    iss.push(...this.vOA('parameter',exp));
    return iss;
  }
}