// <auto-generated/>
// Contents of: hl7.fhir.r2.core version: 1.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: Device

import * as fhir from '../fhir.js';

// @ts-ignore
import { DevicestatusCodes,  DevicestatusCodeType } from '../fhirValueSets/DevicestatusCodes.js';
// @ts-ignore
import { DevicestatusVsValidation } from '../fhirValueSets/DevicestatusVsValidation.js';
/**
 * Valid arguments for the Device type.
 */
export interface DeviceArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "Device"|undefined;
  /**
   * Unique instance identifiers assigned to a device by organizations like manufacturers or owners. If the identifier identifies the type of device, Device.type should be used.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * Code or identifier to identify a kind of device.
   */
  type: fhir.CodeableConceptArgs|null;
  /**
   * Descriptive information, usage information or implantation information that is not captured in an existing element.
   */
  note?: fhir.AnnotationArgs[]|undefined;
  /**
   * Status of the Device availability.
   */
  status?: fhir.FhirCode<DevicestatusCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: Device.status
   */
  _status?:fhir.FhirElementArgs;
  /**
   * A name of the manufacturer.
   */
  manufacturer?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Device.manufacturer
   */
  _manufacturer?:fhir.FhirElementArgs;
  /**
   * The "model" is an identifier assigned by the manufacturer to identify the product by its type. This number is shared by the all devices sold as the same type.
   */
  model?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Device.model
   */
  _model?:fhir.FhirElementArgs;
  /**
   * The version of the device, if the device has multiple releases under the same model, or if the device is software or carries firmware.
   */
  version?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Device.version
   */
  _version?:fhir.FhirElementArgs;
  /**
   * The date and time when the device was manufactured.
   */
  manufactureDate?: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: Device.manufactureDate
   */
  _manufactureDate?:fhir.FhirElementArgs;
  /**
   * The date and time beyond which this device is no longer valid or should not be used (if applicable).
   */
  expiry?: fhir.FhirDateTime|string|undefined;
  /**
   * Extended properties for primitive element: Device.expiry
   */
  _expiry?:fhir.FhirElementArgs;
  /**
   * United States Food and Drug Administration mandated Unique Device Identifier (UDI). Use the human readable information (the content that the user sees, which is sometimes different to the exact syntax represented in the barcode)  - see http://www.fda.gov/MedicalDevices/DeviceRegulationandGuidance/UniqueDeviceIdentification/default.htm.
   */
  udi?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Device.udi
   */
  _udi?:fhir.FhirElementArgs;
  /**
   * Lot number assigned by the manufacturer.
   */
  lotNumber?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: Device.lotNumber
   */
  _lotNumber?:fhir.FhirElementArgs;
  /**
   * An organization that is responsible for the provision and ongoing maintenance of the device.
   */
  owner?: fhir.ReferenceArgs|undefined;
  /**
   * The place where the device can be found.
   */
  location?: fhir.ReferenceArgs|undefined;
  /**
   * Patient information, if the resource is affixed to a person.
   */
  patient?: fhir.ReferenceArgs|undefined;
  /**
   * Contact details for an organization or a particular human that is responsible for the device.
   */
  contact?: fhir.ContactPointArgs[]|undefined;
  /**
   * A network address on which the device may be contacted directly.
   */
  url?: fhir.FhirUri|string|undefined;
  /**
   * Extended properties for primitive element: Device.url
   */
  _url?:fhir.FhirElementArgs;
}

/**
 * This resource identifies an instance of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device.  Medical devices includes durable (reusable) medical equipment, implantable devices, as well as disposable equipment used for diagnostic, treatment, and research for healthcare and public health.  Non-medical devices may include items such as a machine, cellphone, computer, application, etc.
 */
export class Device extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'Device';
  /**
   * Resource Type Name
   */
  public override resourceType: "Device";
  /**
   * Unique instance identifiers assigned to a device by organizations like manufacturers or owners. If the identifier identifies the type of device, Device.type should be used.
   */
  public identifier: fhir.Identifier[];
  /**
   * Code or identifier to identify a kind of device.
   */
  public type: fhir.CodeableConcept|null;
  /**
   * Descriptive information, usage information or implantation information that is not captured in an existing element.
   */
  public note: fhir.Annotation[];
  /**
   * Status of the Device availability.
   */
  public status?: fhir.FhirCode<DevicestatusCodeType>|undefined;
  /**
   * A name of the manufacturer.
   */
  public manufacturer?: fhir.FhirString|undefined;
  /**
   * The "model" is an identifier assigned by the manufacturer to identify the product by its type. This number is shared by the all devices sold as the same type.
   */
  public model?: fhir.FhirString|undefined;
  /**
   * The version of the device, if the device has multiple releases under the same model, or if the device is software or carries firmware.
   */
  public version?: fhir.FhirString|undefined;
  /**
   * The date and time when the device was manufactured.
   */
  public manufactureDate?: fhir.FhirDateTime|undefined;
  /**
   * The date and time beyond which this device is no longer valid or should not be used (if applicable).
   */
  public expiry?: fhir.FhirDateTime|undefined;
  /**
   * United States Food and Drug Administration mandated Unique Device Identifier (UDI). Use the human readable information (the content that the user sees, which is sometimes different to the exact syntax represented in the barcode)  - see http://www.fda.gov/MedicalDevices/DeviceRegulationandGuidance/UniqueDeviceIdentification/default.htm.
   */
  public udi?: fhir.FhirString|undefined;
  /**
   * Lot number assigned by the manufacturer.
   */
  public lotNumber?: fhir.FhirString|undefined;
  /**
   * An organization that is responsible for the provision and ongoing maintenance of the device.
   */
  public owner?: fhir.Reference|undefined;
  /**
   * The place where the device can be found.
   */
  public location?: fhir.Reference|undefined;
  /**
   * Patient information, if the resource is affixed to a person.
   */
  public patient?: fhir.Reference|undefined;
  /**
   * Contact details for an organization or a particular human that is responsible for the device.
   */
  public contact: fhir.ContactPoint[];
  /**
   * A network address on which the device may be contacted directly.
   */
  public url?: fhir.FhirUri|undefined;
  /**
   * Default constructor for Device - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<DeviceArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'Device';
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x, options)); }
    else { this.identifier = []; }
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type, options); }
    else { this.type = null; }
    if (source['note']) { this.note = source.note.map((x) => new fhir.Annotation(x, options)); }
    else { this.note = []; }
    if (source['status'] !== undefined) { this.status = new fhir.FhirCode<DevicestatusCodeType>({value: source.status}, options); }
    if (source['_status']) {
      if (this.status) { this.status.addExtendedProperties(source._status!); }
      else { this.status = new fhir.FhirCode<DevicestatusCodeType>(source._status as Partial<fhir.FhirCode>, options); }
    }
    if (source['manufacturer'] !== undefined) { this.manufacturer = new fhir.FhirString({value: source.manufacturer}, options); }
    if (source['_manufacturer']) {
      if (this.manufacturer) { this.manufacturer.addExtendedProperties(source._manufacturer!); }
      else { this.manufacturer = new fhir.FhirString(source._manufacturer as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['model'] !== undefined) { this.model = new fhir.FhirString({value: source.model}, options); }
    if (source['_model']) {
      if (this.model) { this.model.addExtendedProperties(source._model!); }
      else { this.model = new fhir.FhirString(source._model as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['version'] !== undefined) { this.version = new fhir.FhirString({value: source.version}, options); }
    if (source['_version']) {
      if (this.version) { this.version.addExtendedProperties(source._version!); }
      else { this.version = new fhir.FhirString(source._version as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['manufactureDate'] !== undefined) { this.manufactureDate = new fhir.FhirDateTime({value: source.manufactureDate}, options); }
    if (source['_manufactureDate']) {
      if (this.manufactureDate) { this.manufactureDate.addExtendedProperties(source._manufactureDate!); }
      else { this.manufactureDate = new fhir.FhirDateTime(source._manufactureDate as Partial<fhir.FhirDateTimeArgs>, options); }
    }
    if (source['expiry'] !== undefined) { this.expiry = new fhir.FhirDateTime({value: source.expiry}, options); }
    if (source['_expiry']) {
      if (this.expiry) { this.expiry.addExtendedProperties(source._expiry!); }
      else { this.expiry = new fhir.FhirDateTime(source._expiry as Partial<fhir.FhirDateTimeArgs>, options); }
    }
    if (source['udi'] !== undefined) { this.udi = new fhir.FhirString({value: source.udi}, options); }
    if (source['_udi']) {
      if (this.udi) { this.udi.addExtendedProperties(source._udi!); }
      else { this.udi = new fhir.FhirString(source._udi as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['lotNumber'] !== undefined) { this.lotNumber = new fhir.FhirString({value: source.lotNumber}, options); }
    if (source['_lotNumber']) {
      if (this.lotNumber) { this.lotNumber.addExtendedProperties(source._lotNumber!); }
      else { this.lotNumber = new fhir.FhirString(source._lotNumber as Partial<fhir.FhirStringArgs>, options); }
    }
    if (source['owner']) { this.owner = new fhir.Reference(source.owner, options); }
    if (source['location']) { this.location = new fhir.Reference(source.location, options); }
    if (source['patient']) { this.patient = new fhir.Reference(source.patient, options); }
    if (source['contact']) { this.contact = source.contact.map((x) => new fhir.ContactPoint(x, options)); }
    else { this.contact = []; }
    if (source['url'] !== undefined) { this.url = new fhir.FhirUri({value: source.url}, options); }
    if (source['_url']) {
      if (this.url) { this.url.addExtendedProperties(source._url!); }
      else { this.url = new fhir.FhirUri(source._url as Partial<fhir.FhirUriArgs>, options); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'Device' }
    iss.push(...this.vOA('identifier',exp));
    iss.push(...this.vRS('type',exp));
    iss.push(...this.vOA('note',exp));
    iss.push(...this.vOSV('status',exp,'Devicestatus',DevicestatusVsValidation,'r'));
    iss.push(...this.vOS('manufacturer',exp));
    iss.push(...this.vOS('model',exp));
    iss.push(...this.vOS('version',exp));
    iss.push(...this.vOS('manufactureDate',exp));
    iss.push(...this.vOS('expiry',exp));
    iss.push(...this.vOS('udi',exp));
    iss.push(...this.vOS('lotNumber',exp));
    iss.push(...this.vOS('owner',exp));
    iss.push(...this.vOS('location',exp));
    iss.push(...this.vOS('patient',exp));
    iss.push(...this.vOA('contact',exp));
    iss.push(...this.vOS('url',exp));
    return iss;
  }
}
