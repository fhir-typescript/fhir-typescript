// <auto-generated/>
// Contents of: hl7.fhir.r4b.core version: 4.3.0
// Minimum TypeScript Version: 3.7
// FHIR Resource: DeviceDefinition

import * as fhir from '../fhir.js';

// @ts-ignore
import { DeviceNametypeCodes,  DeviceNametypeCodeType } from '../fhirValueSets/DeviceNametypeCodes.js';
// @ts-ignore
import { DeviceNametypeVsValidation } from '../fhirValueSets/DeviceNametypeVsValidation.js';
// @ts-ignore
import { DeviceKindCodes,  DeviceKindCodeType } from '../fhirValueSets/DeviceKindCodes.js';
// @ts-ignore
import { DeviceKindVsValidation } from '../fhirValueSets/DeviceKindVsValidation.js';
/**
 * Valid arguments for the DeviceDefinitionUdiDeviceIdentifier type.
 */
export interface DeviceDefinitionUdiDeviceIdentifierArgs extends fhir.BackboneElementArgs {
  /**
   * The identifier that is to be associated with every Device that references this DeviceDefintiion for the issuer and jurisdication porvided in the DeviceDefinition.udiDeviceIdentifier.
   */
  deviceIdentifier: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: DeviceDefinition.udiDeviceIdentifier.deviceIdentifier
   */
  _deviceIdentifier?:fhir.FhirElementArgs;
  /**
   * The organization that assigns the identifier algorithm.
   */
  issuer: fhir.FhirUri|string|undefined;
  /**
   * Extended properties for primitive element: DeviceDefinition.udiDeviceIdentifier.issuer
   */
  _issuer?:fhir.FhirElementArgs;
  /**
   * The jurisdiction to which the deviceIdentifier applies.
   */
  jurisdiction: fhir.FhirUri|string|undefined;
  /**
   * Extended properties for primitive element: DeviceDefinition.udiDeviceIdentifier.jurisdiction
   */
  _jurisdiction?:fhir.FhirElementArgs;
}

/**
 * Unique device identifier (UDI) assigned to device label or package.  Note that the Device may include multiple udiCarriers as it either may include just the udiCarrier for the jurisdiction it is sold, or for multiple jurisdictions it could have been sold.
 */
export class DeviceDefinitionUdiDeviceIdentifier extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'DeviceDefinitionUdiDeviceIdentifier';
  /**
   * The identifier that is to be associated with every Device that references this DeviceDefintiion for the issuer and jurisdication porvided in the DeviceDefinition.udiDeviceIdentifier.
   */
  public deviceIdentifier: fhir.FhirString|null;
  /**
   * The organization that assigns the identifier algorithm.
   */
  public issuer: fhir.FhirUri|null;
  /**
   * The jurisdiction to which the deviceIdentifier applies.
   */
  public jurisdiction: fhir.FhirUri|null;
  /**
   * Default constructor for DeviceDefinitionUdiDeviceIdentifier - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<DeviceDefinitionUdiDeviceIdentifierArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['deviceIdentifier']) { this.deviceIdentifier = new fhir.FhirString({value: source.deviceIdentifier}); }
    else { this.deviceIdentifier = null; }
    if (source['_deviceIdentifier']) {
      if (this.deviceIdentifier) { this.deviceIdentifier.addExtendedProperties(source._deviceIdentifier!); }
      else { this.deviceIdentifier = new fhir.FhirString(source._deviceIdentifier as Partial<fhir.FhirStringArgs>); }
    }
    if (source['issuer']) { this.issuer = new fhir.FhirUri({value: source.issuer}); }
    else { this.issuer = null; }
    if (source['_issuer']) {
      if (this.issuer) { this.issuer.addExtendedProperties(source._issuer!); }
      else { this.issuer = new fhir.FhirUri(source._issuer as Partial<fhir.FhirUriArgs>); }
    }
    if (source['jurisdiction']) { this.jurisdiction = new fhir.FhirUri({value: source.jurisdiction}); }
    else { this.jurisdiction = null; }
    if (source['_jurisdiction']) {
      if (this.jurisdiction) { this.jurisdiction.addExtendedProperties(source._jurisdiction!); }
      else { this.jurisdiction = new fhir.FhirUri(source._jurisdiction as Partial<fhir.FhirUriArgs>); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'DeviceDefinition.udiDeviceIdentifier' }
    iss.push(...this.vRS('deviceIdentifier',exp));
    iss.push(...this.vRS('issuer',exp));
    iss.push(...this.vRS('jurisdiction',exp));
    return iss;
  }
}
/**
 * Valid arguments for the DeviceDefinitionDeviceName type.
 */
export interface DeviceDefinitionDeviceNameArgs extends fhir.BackboneElementArgs {
  /**
   * The name of the device.
   */
  name: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: DeviceDefinition.deviceName.name
   */
  _name?:fhir.FhirElementArgs;
  /**
   * The type of deviceName.
   * UDILabelName | UserFriendlyName | PatientReportedName | ManufactureDeviceName | ModelName.
   */
  type: fhir.FhirCode<DeviceNametypeCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: DeviceDefinition.deviceName.type
   */
  _type?:fhir.FhirElementArgs;
}

/**
 * A name given to the device to identify it.
 */
export class DeviceDefinitionDeviceName extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'DeviceDefinitionDeviceName';
  /**
   * The name of the device.
   */
  public name: fhir.FhirString|null;
  /**
   * The type of deviceName.
   * UDILabelName | UserFriendlyName | PatientReportedName | ManufactureDeviceName | ModelName.
   */
  public type: fhir.FhirCode<DeviceNametypeCodeType>|null;
  /**
   * Default constructor for DeviceDefinitionDeviceName - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<DeviceDefinitionDeviceNameArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['name']) { this.name = new fhir.FhirString({value: source.name}); }
    else { this.name = null; }
    if (source['_name']) {
      if (this.name) { this.name.addExtendedProperties(source._name!); }
      else { this.name = new fhir.FhirString(source._name as Partial<fhir.FhirStringArgs>); }
    }
    if (source['type']) { this.type = new fhir.FhirCode<DeviceNametypeCodeType>({value: source.type}); }
    else { this.type = null; }
    if (source['_type']) {
      if (this.type) { this.type.addExtendedProperties(source._type!); }
      else { this.type = new fhir.FhirCode<DeviceNametypeCodeType>(source._type as Partial<fhir.FhirCode>); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'DeviceDefinition.deviceName' }
    iss.push(...this.vRS('name',exp));
    iss.push(...this.vRSV('type',exp,'DeviceNametype',DeviceNametypeVsValidation,'r'));
    return iss;
  }
}
/**
 * Valid arguments for the DeviceDefinitionSpecialization type.
 */
export interface DeviceDefinitionSpecializationArgs extends fhir.BackboneElementArgs {
  /**
   * The standard that is used to operate and communicate.
   */
  systemType: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: DeviceDefinition.specialization.systemType
   */
  _systemType?:fhir.FhirElementArgs;
  /**
   * The version of the standard that is used to operate and communicate.
   */
  version?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: DeviceDefinition.specialization.version
   */
  _version?:fhir.FhirElementArgs;
}

/**
 * The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication.
 */
export class DeviceDefinitionSpecialization extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'DeviceDefinitionSpecialization';
  /**
   * The standard that is used to operate and communicate.
   */
  public systemType: fhir.FhirString|null;
  /**
   * The version of the standard that is used to operate and communicate.
   */
  public version?: fhir.FhirString|undefined;
  /**
   * Default constructor for DeviceDefinitionSpecialization - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<DeviceDefinitionSpecializationArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['systemType']) { this.systemType = new fhir.FhirString({value: source.systemType}); }
    else { this.systemType = null; }
    if (source['_systemType']) {
      if (this.systemType) { this.systemType.addExtendedProperties(source._systemType!); }
      else { this.systemType = new fhir.FhirString(source._systemType as Partial<fhir.FhirStringArgs>); }
    }
    if (source['version']) { this.version = new fhir.FhirString({value: source.version}); }
    if (source['_version']) {
      if (this.version) { this.version.addExtendedProperties(source._version!); }
      else { this.version = new fhir.FhirString(source._version as Partial<fhir.FhirStringArgs>); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'DeviceDefinition.specialization' }
    iss.push(...this.vRS('systemType',exp));
    iss.push(...this.vOS('version',exp));
    return iss;
  }
}
/**
 * Valid arguments for the DeviceDefinitionCapability type.
 */
export interface DeviceDefinitionCapabilityArgs extends fhir.BackboneElementArgs {
  /**
   * Type of capability.
   */
  type: fhir.CodeableConceptArgs|null;
  /**
   * Description of capability.
   */
  description?: fhir.CodeableConceptArgs[]|undefined;
}

/**
 * Device capabilities.
 */
export class DeviceDefinitionCapability extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'DeviceDefinitionCapability';
  /**
   * Type of capability.
   */
  public type: fhir.CodeableConcept|null;
  /**
   * Description of capability.
   */
  public description: fhir.CodeableConcept[];
  /**
   * Default constructor for DeviceDefinitionCapability - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<DeviceDefinitionCapabilityArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type); }
    else { this.type = null; }
    if (source['description']) { this.description = source.description.map((x) => new fhir.CodeableConcept(x)); }
    else { this.description = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'DeviceDefinition.capability' }
    iss.push(...this.vRS('type',exp));
    iss.push(...this.vOA('description',exp));
    return iss;
  }
}
/**
 * Valid arguments for the DeviceDefinitionProperty type.
 */
export interface DeviceDefinitionPropertyArgs extends fhir.BackboneElementArgs {
  /**
   * Code that specifies the property DeviceDefinitionPropetyCode (Extensible).
   */
  type: fhir.CodeableConceptArgs|null;
  /**
   * Property value as a quantity.
   */
  valueQuantity?: fhir.QuantityArgs[]|undefined;
  /**
   * Property value as a code, e.g., NTP4 (synced to NTP).
   */
  valueCode?: fhir.CodeableConceptArgs[]|undefined;
}

/**
 * The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties.
 */
export class DeviceDefinitionProperty extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'DeviceDefinitionProperty';
  /**
   * Code that specifies the property DeviceDefinitionPropetyCode (Extensible).
   */
  public type: fhir.CodeableConcept|null;
  /**
   * Property value as a quantity.
   */
  public valueQuantity: fhir.Quantity[];
  /**
   * Property value as a code, e.g., NTP4 (synced to NTP).
   */
  public valueCode: fhir.CodeableConcept[];
  /**
   * Default constructor for DeviceDefinitionProperty - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<DeviceDefinitionPropertyArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type); }
    else { this.type = null; }
    if (source['valueQuantity']) { this.valueQuantity = source.valueQuantity.map((x) => new fhir.Quantity(x)); }
    else { this.valueQuantity = []; }
    if (source['valueCode']) { this.valueCode = source.valueCode.map((x) => new fhir.CodeableConcept(x)); }
    else { this.valueCode = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'DeviceDefinition.property' }
    iss.push(...this.vRS('type',exp));
    iss.push(...this.vOA('valueQuantity',exp));
    iss.push(...this.vOA('valueCode',exp));
    return iss;
  }
}
/**
 * Valid arguments for the DeviceDefinitionMaterial type.
 */
export interface DeviceDefinitionMaterialArgs extends fhir.BackboneElementArgs {
  /**
   * The substance.
   */
  substance: fhir.CodeableConceptArgs|null;
  /**
   * Indicates an alternative material of the device.
   */
  alternate?: fhir.FhirBoolean|boolean|undefined;
  /**
   * Extended properties for primitive element: DeviceDefinition.material.alternate
   */
  _alternate?:fhir.FhirElementArgs;
  /**
   * Whether the substance is a known or suspected allergen.
   */
  allergenicIndicator?: fhir.FhirBoolean|boolean|undefined;
  /**
   * Extended properties for primitive element: DeviceDefinition.material.allergenicIndicator
   */
  _allergenicIndicator?:fhir.FhirElementArgs;
}

/**
 * A substance used to create the material(s) of which the device is made.
 */
export class DeviceDefinitionMaterial extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'DeviceDefinitionMaterial';
  /**
   * The substance.
   */
  public substance: fhir.CodeableConcept|null;
  /**
   * Indicates an alternative material of the device.
   */
  public alternate?: fhir.FhirBoolean|undefined;
  /**
   * Whether the substance is a known or suspected allergen.
   */
  public allergenicIndicator?: fhir.FhirBoolean|undefined;
  /**
   * Default constructor for DeviceDefinitionMaterial - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<DeviceDefinitionMaterialArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['substance']) { this.substance = new fhir.CodeableConcept(source.substance); }
    else { this.substance = null; }
    if (source['alternate']) { this.alternate = new fhir.FhirBoolean({value: source.alternate}); }
    if (source['_alternate']) {
      if (this.alternate) { this.alternate.addExtendedProperties(source._alternate!); }
      else { this.alternate = new fhir.FhirBoolean(source._alternate as Partial<fhir.FhirBooleanArgs>); }
    }
    if (source['allergenicIndicator']) { this.allergenicIndicator = new fhir.FhirBoolean({value: source.allergenicIndicator}); }
    if (source['_allergenicIndicator']) {
      if (this.allergenicIndicator) { this.allergenicIndicator.addExtendedProperties(source._allergenicIndicator!); }
      else { this.allergenicIndicator = new fhir.FhirBoolean(source._allergenicIndicator as Partial<fhir.FhirBooleanArgs>); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'DeviceDefinition.material' }
    iss.push(...this.vRS('substance',exp));
    iss.push(...this.vOS('alternate',exp));
    iss.push(...this.vOS('allergenicIndicator',exp));
    return iss;
  }
}
/**
 * Valid arguments for the DeviceDefinition type.
 */
export interface DeviceDefinitionArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "DeviceDefinition"|undefined;
  /**
   * Unique instance identifiers assigned to a device by the software, manufacturers, other organizations or owners. For example: handle ID.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * Unique device identifier (UDI) assigned to device label or package.  Note that the Device may include multiple udiCarriers as it either may include just the udiCarrier for the jurisdiction it is sold, or for multiple jurisdictions it could have been sold.
   */
  udiDeviceIdentifier?: fhir.DeviceDefinitionUdiDeviceIdentifierArgs[]|undefined;
  /**
   * A name of the manufacturer.
   */
  manufacturer?: fhir.FhirString|fhir.Reference|undefined;
  /**
   * A name of the manufacturer.
   */
  manufacturerString?: fhir.FhirString|string|undefined;
  /**
   * A name of the manufacturer.
   */
  manufacturerReference?: fhir.ReferenceArgs|undefined;
  /**
   * A name given to the device to identify it.
   */
  deviceName?: fhir.DeviceDefinitionDeviceNameArgs[]|undefined;
  /**
   * The model number for the device.
   */
  modelNumber?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: DeviceDefinition.modelNumber
   */
  _modelNumber?:fhir.FhirElementArgs;
  /**
   * What kind of device or device system this is.
   */
  type?: fhir.CodeableConceptArgs|undefined;
  /**
   * The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication.
   */
  specialization?: fhir.DeviceDefinitionSpecializationArgs[]|undefined;
  /**
   * The available versions of the device, e.g., software versions.
   */
  version?: fhir.FhirString[]|(string|null)[]|undefined;
  /**
   * Extended properties for primitive element: DeviceDefinition.version
   */
  _version?:(fhir.FhirElementArgs|null)[];
  /**
   * Safety characteristics of the device.
   */
  safety?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Shelf Life and storage information.
   */
  shelfLifeStorage?: fhir.ProductShelfLifeArgs[]|undefined;
  /**
   * Dimensions, color etc.
   */
  physicalCharacteristics?: fhir.ProdCharacteristicArgs|undefined;
  /**
   * Language code for the human-readable text strings produced by the device (all supported).
   */
  languageCode?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Device capabilities.
   */
  capability?: fhir.DeviceDefinitionCapabilityArgs[]|undefined;
  /**
   * The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties.
   */
  property?: fhir.DeviceDefinitionPropertyArgs[]|undefined;
  /**
   * An organization that is responsible for the provision and ongoing maintenance of the device.
   */
  owner?: fhir.ReferenceArgs|undefined;
  /**
   * used for troubleshooting etc.
   */
  contact?: fhir.ContactPointArgs[]|undefined;
  /**
   * If the device is running a FHIR server, the network address should  be the Base URL from which a conformance statement may be retrieved.
   */
  url?: fhir.FhirUri|string|undefined;
  /**
   * Extended properties for primitive element: DeviceDefinition.url
   */
  _url?:fhir.FhirElementArgs;
  /**
   * Access to on-line information about the device.
   */
  onlineInformation?: fhir.FhirUri|string|undefined;
  /**
   * Extended properties for primitive element: DeviceDefinition.onlineInformation
   */
  _onlineInformation?:fhir.FhirElementArgs;
  /**
   * Descriptive information, usage information or implantation information that is not captured in an existing element.
   */
  note?: fhir.AnnotationArgs[]|undefined;
  /**
   * The quantity of the device present in the packaging (e.g. the number of devices present in a pack, or the number of devices in the same package of the medicinal product).
   */
  quantity?: fhir.QuantityArgs|undefined;
  /**
   * The parent device it can be part of.
   */
  parentDevice?: fhir.ReferenceArgs|undefined;
  /**
   * A substance used to create the material(s) of which the device is made.
   */
  material?: fhir.DeviceDefinitionMaterialArgs[]|undefined;
}

/**
 * The characteristics, operational status and capabilities of a medical-related component of a medical device.
 */
export class DeviceDefinition extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'DeviceDefinition';
  /**
   * Resource Type Name
   */
  public override resourceType: "DeviceDefinition";
  /**
   * Unique instance identifiers assigned to a device by the software, manufacturers, other organizations or owners. For example: handle ID.
   */
  public identifier: fhir.Identifier[];
  /**
   * Unique device identifier (UDI) assigned to device label or package.  Note that the Device may include multiple udiCarriers as it either may include just the udiCarrier for the jurisdiction it is sold, or for multiple jurisdictions it could have been sold.
   */
  public udiDeviceIdentifier: fhir.DeviceDefinitionUdiDeviceIdentifier[];
  /**
   * A name of the manufacturer.
   */
  public manufacturer?: (fhir.FhirString|fhir.Reference)|undefined;
  /**
   * Internal flag to properly serialize choice-type element DeviceDefinition.manufacturer[x]
   */
  protected static readonly _fts_manufacturerIsChoice:true = true;
  /**
   * A name given to the device to identify it.
   */
  public deviceName: fhir.DeviceDefinitionDeviceName[];
  /**
   * The model number for the device.
   */
  public modelNumber?: fhir.FhirString|undefined;
  /**
   * What kind of device or device system this is.
   */
  public type?: fhir.CodeableConcept|undefined;
  /**
   * The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication.
   */
  public specialization: fhir.DeviceDefinitionSpecialization[];
  /**
   * The available versions of the device, e.g., software versions.
   */
  public version: fhir.FhirString[];
  /**
   * Safety characteristics of the device.
   */
  public safety: fhir.CodeableConcept[];
  /**
   * Shelf Life and storage information.
   */
  public shelfLifeStorage: fhir.ProductShelfLife[];
  /**
   * Dimensions, color etc.
   */
  public physicalCharacteristics?: fhir.ProdCharacteristic|undefined;
  /**
   * Language code for the human-readable text strings produced by the device (all supported).
   */
  public languageCode: fhir.CodeableConcept[];
  /**
   * Device capabilities.
   */
  public capability: fhir.DeviceDefinitionCapability[];
  /**
   * The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties.
   */
  public property: fhir.DeviceDefinitionProperty[];
  /**
   * An organization that is responsible for the provision and ongoing maintenance of the device.
   */
  public owner?: fhir.Reference|undefined;
  /**
   * used for troubleshooting etc.
   */
  public contact: fhir.ContactPoint[];
  /**
   * If the device is running a FHIR server, the network address should  be the Base URL from which a conformance statement may be retrieved.
   */
  public url?: fhir.FhirUri|undefined;
  /**
   * Access to on-line information about the device.
   */
  public onlineInformation?: fhir.FhirUri|undefined;
  /**
   * Descriptive information, usage information or implantation information that is not captured in an existing element.
   */
  public note: fhir.Annotation[];
  /**
   * The quantity of the device present in the packaging (e.g. the number of devices present in a pack, or the number of devices in the same package of the medicinal product).
   */
  public quantity?: fhir.Quantity|undefined;
  /**
   * The parent device it can be part of.
   */
  public parentDevice?: fhir.Reference|undefined;
  /**
   * A substance used to create the material(s) of which the device is made.
   */
  public material: fhir.DeviceDefinitionMaterial[];
  /**
   * Default constructor for DeviceDefinition - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<DeviceDefinitionArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'DeviceDefinition';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['udiDeviceIdentifier']) { this.udiDeviceIdentifier = source.udiDeviceIdentifier.map((x) => new fhir.DeviceDefinitionUdiDeviceIdentifier(x)); }
    else { this.udiDeviceIdentifier = []; }
    if (source['manufacturer']) { this.manufacturer = source.manufacturer; }
    else if (source['manufacturerString']) { this.manufacturer = new fhir.FhirString({value: source.manufacturerString}); }
    else if (source['manufacturerReference']) { this.manufacturer = new fhir.Reference(source.manufacturerReference); }
    if (source['deviceName']) { this.deviceName = source.deviceName.map((x) => new fhir.DeviceDefinitionDeviceName(x)); }
    else { this.deviceName = []; }
    if (source['modelNumber']) { this.modelNumber = new fhir.FhirString({value: source.modelNumber}); }
    if (source['_modelNumber']) {
      if (this.modelNumber) { this.modelNumber.addExtendedProperties(source._modelNumber!); }
      else { this.modelNumber = new fhir.FhirString(source._modelNumber as Partial<fhir.FhirStringArgs>); }
    }
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type); }
    if (source['specialization']) { this.specialization = source.specialization.map((x) => new fhir.DeviceDefinitionSpecialization(x)); }
    else { this.specialization = []; }
    if (source['version']) { this.version = source.version.map((x) => new fhir.FhirString({value: x})); }
    else { this.version = []; }
    if (source['_version']) {
      source._version.forEach((x,i) => {
        if (this.version.length >= i) { if (x) { this.version[i].addExtendedProperties(x); } }
        else { if (x) { this.version.push(new fhir.FhirString(x as Partial<fhir.FhirStringArgs>)); } }
      });
    }
    if (source['safety']) { this.safety = source.safety.map((x) => new fhir.CodeableConcept(x)); }
    else { this.safety = []; }
    if (source['shelfLifeStorage']) { this.shelfLifeStorage = source.shelfLifeStorage.map((x) => new fhir.ProductShelfLife(x)); }
    else { this.shelfLifeStorage = []; }
    if (source['physicalCharacteristics']) { this.physicalCharacteristics = new fhir.ProdCharacteristic(source.physicalCharacteristics); }
    if (source['languageCode']) { this.languageCode = source.languageCode.map((x) => new fhir.CodeableConcept(x)); }
    else { this.languageCode = []; }
    if (source['capability']) { this.capability = source.capability.map((x) => new fhir.DeviceDefinitionCapability(x)); }
    else { this.capability = []; }
    if (source['property']) { this.property = source.property.map((x) => new fhir.DeviceDefinitionProperty(x)); }
    else { this.property = []; }
    if (source['owner']) { this.owner = new fhir.Reference(source.owner); }
    if (source['contact']) { this.contact = source.contact.map((x) => new fhir.ContactPoint(x)); }
    else { this.contact = []; }
    if (source['url']) { this.url = new fhir.FhirUri({value: source.url}); }
    if (source['_url']) {
      if (this.url) { this.url.addExtendedProperties(source._url!); }
      else { this.url = new fhir.FhirUri(source._url as Partial<fhir.FhirUriArgs>); }
    }
    if (source['onlineInformation']) { this.onlineInformation = new fhir.FhirUri({value: source.onlineInformation}); }
    if (source['_onlineInformation']) {
      if (this.onlineInformation) { this.onlineInformation.addExtendedProperties(source._onlineInformation!); }
      else { this.onlineInformation = new fhir.FhirUri(source._onlineInformation as Partial<fhir.FhirUriArgs>); }
    }
    if (source['note']) { this.note = source.note.map((x) => new fhir.Annotation(x)); }
    else { this.note = []; }
    if (source['quantity']) { this.quantity = new fhir.Quantity(source.quantity); }
    if (source['parentDevice']) { this.parentDevice = new fhir.Reference(source.parentDevice); }
    if (source['material']) { this.material = source.material.map((x) => new fhir.DeviceDefinitionMaterial(x)); }
    else { this.material = []; }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'DeviceDefinition' }
    iss.push(...this.vRPS('resourceType',exp));
    iss.push(...this.vOA('identifier',exp));
    iss.push(...this.vOA('udiDeviceIdentifier',exp));
    iss.push(...this.vOS('manufacturer',exp));
    iss.push(...this.vOA('deviceName',exp));
    iss.push(...this.vOS('modelNumber',exp));
    iss.push(...this.vOS('type',exp));
    iss.push(...this.vOA('specialization',exp));
    iss.push(...this.vOA('version',exp));
    iss.push(...this.vOA('safety',exp));
    iss.push(...this.vOA('shelfLifeStorage',exp));
    iss.push(...this.vOS('physicalCharacteristics',exp));
    iss.push(...this.vOA('languageCode',exp));
    iss.push(...this.vOA('capability',exp));
    iss.push(...this.vOA('property',exp));
    iss.push(...this.vOS('owner',exp));
    iss.push(...this.vOA('contact',exp));
    iss.push(...this.vOS('url',exp));
    iss.push(...this.vOS('onlineInformation',exp));
    iss.push(...this.vOA('note',exp));
    iss.push(...this.vOS('quantity',exp));
    iss.push(...this.vOS('parentDevice',exp));
    iss.push(...this.vOA('material',exp));
    return iss;
  }
}