import * as fhir from '../fhir.js';
import { UdiEntryTypeCodeType } from '../fhirValueSets/UdiEntryTypeCodes.js';
import { DeviceStatusCodeType } from '../fhirValueSets/DeviceStatusCodes.js';
/**
 * Valid arguments for the DeviceUdi type.
 */
export interface DeviceUdiArgs extends fhir.BackboneElementArgs {
    /**
     * The device identifier (DI) is a mandatory, fixed portion of a UDI that identifies the labeler and the specific version or model of a device.
     */
    deviceIdentifier?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Device.udi.deviceIdentifier
     */
    _deviceIdentifier?: fhir.FhirElementArgs;
    /**
     * Use the `Device.type`  for a generic type or kind of device name.  Note the [GUDID](http://www.fda.gov/medicaldevices/deviceregulationandguidance/uniquedeviceidentification/globaludidatabasegudid/default.htm) lists the name as the 'Brand Name'.
     */
    name?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Device.udi.name
     */
    _name?: fhir.FhirElementArgs;
    /**
     * The identity of the authoritative source for UDI generation within a  jurisdiction.  All UDIs are globally unique within a single namespace. with the appropriate repository uri as the system.  For example,  UDIs of devices managed in the U.S. by the FDA, the value is  http://hl7.org/fhir/NamingSystem/fda-udi.
     */
    jurisdiction?: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: Device.udi.jurisdiction
     */
    _jurisdiction?: fhir.FhirElementArgs;
    /**
     * If separate barcodes for DI and PI are present, concatenate the string with DI first and in order of human readable expression on label.
     */
    carrierHRF?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Device.udi.carrierHRF
     */
    _carrierHRF?: fhir.FhirElementArgs;
    /**
     * The AIDC form of UDIs should be scanned or otherwise used for the identification of the device whenever possible to minimize errors in records resulting from manual transcriptions. If separate barcodes for DI and PI are present, concatenate the string with DI first and in order of human readable expression on label.
     */
    carrierAIDC?: fhir.FhirBase64Binary | string | undefined;
    /**
     * Extended properties for primitive element: Device.udi.carrierAIDC
     */
    _carrierAIDC?: fhir.FhirElementArgs;
    /**
     * Organization that is charged with issuing UDIs for devices.  For example, the US FDA issuers include :
     * 1) GS1:
     * http://hl7.org/fhir/NamingSystem/gs1-di,
     * 2) HIBCC:
     * http://hl7.org/fhir/NamingSystem/hibcc-dI,
     * 3) ICCBBA for blood containers:
     * http://hl7.org/fhir/NamingSystem/iccbba-blood-di,
     * 4) ICCBA for other devices:
     * http://hl7.org/fhir/NamingSystem/iccbba-other-di.
     */
    issuer?: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: Device.udi.issuer
     */
    _issuer?: fhir.FhirElementArgs;
    /**
     * A coded entry to indicate how the data was entered.
     */
    entryType?: fhir.FhirCode<UdiEntryTypeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Device.udi.entryType
     */
    _entryType?: fhir.FhirElementArgs;
}
/**
 * UDI may identify an unique instance of a device, or it may only identify the type of the device.  See [UDI mappings](device-mappings.html#udi) for a complete mapping of UDI parts to Device.
 */
export declare class DeviceUdi extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The device identifier (DI) is a mandatory, fixed portion of a UDI that identifies the labeler and the specific version or model of a device.
     */
    deviceIdentifier?: fhir.FhirString | undefined;
    /**
     * Use the `Device.type`  for a generic type or kind of device name.  Note the [GUDID](http://www.fda.gov/medicaldevices/deviceregulationandguidance/uniquedeviceidentification/globaludidatabasegudid/default.htm) lists the name as the 'Brand Name'.
     */
    name?: fhir.FhirString | undefined;
    /**
     * The identity of the authoritative source for UDI generation within a  jurisdiction.  All UDIs are globally unique within a single namespace. with the appropriate repository uri as the system.  For example,  UDIs of devices managed in the U.S. by the FDA, the value is  http://hl7.org/fhir/NamingSystem/fda-udi.
     */
    jurisdiction?: fhir.FhirUri | undefined;
    /**
     * If separate barcodes for DI and PI are present, concatenate the string with DI first and in order of human readable expression on label.
     */
    carrierHRF?: fhir.FhirString | undefined;
    /**
     * The AIDC form of UDIs should be scanned or otherwise used for the identification of the device whenever possible to minimize errors in records resulting from manual transcriptions. If separate barcodes for DI and PI are present, concatenate the string with DI first and in order of human readable expression on label.
     */
    carrierAIDC?: fhir.FhirBase64Binary | undefined;
    /**
     * Organization that is charged with issuing UDIs for devices.  For example, the US FDA issuers include :
     * 1) GS1:
     * http://hl7.org/fhir/NamingSystem/gs1-di,
     * 2) HIBCC:
     * http://hl7.org/fhir/NamingSystem/hibcc-dI,
     * 3) ICCBBA for blood containers:
     * http://hl7.org/fhir/NamingSystem/iccbba-blood-di,
     * 4) ICCBA for other devices:
     * http://hl7.org/fhir/NamingSystem/iccbba-other-di.
     */
    issuer?: fhir.FhirUri | undefined;
    /**
     * A coded entry to indicate how the data was entered.
     */
    entryType?: fhir.FhirCode<UdiEntryTypeCodeType> | undefined;
    /**
     * Default constructor for DeviceUdi - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<DeviceUdiArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the Device type.
 */
export interface DeviceArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "Device" | undefined;
    /**
     * The barcode string from a barcode present on a device label or package may identify the instance, include names given to the device in local usage, or may identify the type of device. If the identifier identifies the type of device, Device.type element should be used.  For [UDI](device.html#5.11.3.2.2),  this element corresponds to the variable portion of the UDI that identifies the serial number of a specific device. See [UDI mappings](device-mappings.html#udi) for a complete mapping of UDI parts to Device.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * UDI may identify an unique instance of a device, or it may only identify the type of the device.  See [UDI mappings](device-mappings.html#udi) for a complete mapping of UDI parts to Device.
     */
    udi?: fhir.DeviceUdiArgs | undefined;
    /**
     * This element is labeled as a modifier because the status contains the codes inactive and entered-in-error that mark the device (record)as not currently valid.
     */
    status?: fhir.FhirCode<DeviceStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Device.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * Code or identifier to identify a kind of device.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * Lot number assigned by the manufacturer.
     */
    lotNumber?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Device.lotNumber
     */
    _lotNumber?: fhir.FhirElementArgs;
    /**
     * A name of the manufacturer.
     */
    manufacturer?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Device.manufacturer
     */
    _manufacturer?: fhir.FhirElementArgs;
    /**
     * The date and time when the device was manufactured.
     */
    manufactureDate?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: Device.manufactureDate
     */
    _manufactureDate?: fhir.FhirElementArgs;
    /**
     * The date and time beyond which this device is no longer valid or should not be used (if applicable).
     */
    expirationDate?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: Device.expirationDate
     */
    _expirationDate?: fhir.FhirElementArgs;
    /**
     * The "model" is an identifier assigned by the manufacturer to identify the product by its type. This number is shared by the all devices sold as the same type.
     */
    model?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Device.model
     */
    _model?: fhir.FhirElementArgs;
    /**
     * The version of the device, if the device has multiple releases under the same model, or if the device is software or carries firmware.
     */
    version?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Device.version
     */
    _version?: fhir.FhirElementArgs;
    /**
     * Patient information, If the device is affixed to a person.
     */
    patient?: fhir.ReferenceArgs | undefined;
    /**
     * An organization that is responsible for the provision and ongoing maintenance of the device.
     */
    owner?: fhir.ReferenceArgs | undefined;
    /**
     * used for troubleshooting etc.
     */
    contact?: fhir.ContactPointArgs[] | undefined;
    /**
     * The place where the device can be found.
     */
    location?: fhir.ReferenceArgs | undefined;
    /**
     * If the device is running a FHIR server, the network address should  be the Base URL from which a conformance statement may be retrieved.
     */
    url?: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: Device.url
     */
    _url?: fhir.FhirElementArgs;
    /**
     * Descriptive information, usage information or implantation information that is not captured in an existing element.
     */
    note?: fhir.AnnotationArgs[] | undefined;
    /**
     * Provides additional safety characteristics about a medical device.  For example devices containing latex.
     */
    safety?: fhir.CodeableConceptArgs[] | undefined;
}
/**
 * This resource identifies an instance or a type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device.  Medical devices include durable (reusable) medical equipment, implantable devices, as well as disposable equipment used for diagnostic, treatment, and research for healthcare and public health.  Non-medical devices may include items such as a machine, cellphone, computer, application, etc.
 */
export declare class Device extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "Device";
    /**
     * The barcode string from a barcode present on a device label or package may identify the instance, include names given to the device in local usage, or may identify the type of device. If the identifier identifies the type of device, Device.type element should be used.  For [UDI](device.html#5.11.3.2.2),  this element corresponds to the variable portion of the UDI that identifies the serial number of a specific device. See [UDI mappings](device-mappings.html#udi) for a complete mapping of UDI parts to Device.
     */
    identifier: fhir.Identifier[];
    /**
     * UDI may identify an unique instance of a device, or it may only identify the type of the device.  See [UDI mappings](device-mappings.html#udi) for a complete mapping of UDI parts to Device.
     */
    udi?: fhir.DeviceUdi | undefined;
    /**
     * This element is labeled as a modifier because the status contains the codes inactive and entered-in-error that mark the device (record)as not currently valid.
     */
    status?: fhir.FhirCode<DeviceStatusCodeType> | undefined;
    /**
     * Code or identifier to identify a kind of device.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Lot number assigned by the manufacturer.
     */
    lotNumber?: fhir.FhirString | undefined;
    /**
     * A name of the manufacturer.
     */
    manufacturer?: fhir.FhirString | undefined;
    /**
     * The date and time when the device was manufactured.
     */
    manufactureDate?: fhir.FhirDateTime | undefined;
    /**
     * The date and time beyond which this device is no longer valid or should not be used (if applicable).
     */
    expirationDate?: fhir.FhirDateTime | undefined;
    /**
     * The "model" is an identifier assigned by the manufacturer to identify the product by its type. This number is shared by the all devices sold as the same type.
     */
    model?: fhir.FhirString | undefined;
    /**
     * The version of the device, if the device has multiple releases under the same model, or if the device is software or carries firmware.
     */
    version?: fhir.FhirString | undefined;
    /**
     * Patient information, If the device is affixed to a person.
     */
    patient?: fhir.Reference | undefined;
    /**
     * An organization that is responsible for the provision and ongoing maintenance of the device.
     */
    owner?: fhir.Reference | undefined;
    /**
     * used for troubleshooting etc.
     */
    contact: fhir.ContactPoint[];
    /**
     * The place where the device can be found.
     */
    location?: fhir.Reference | undefined;
    /**
     * If the device is running a FHIR server, the network address should  be the Base URL from which a conformance statement may be retrieved.
     */
    url?: fhir.FhirUri | undefined;
    /**
     * Descriptive information, usage information or implantation information that is not captured in an existing element.
     */
    note: fhir.Annotation[];
    /**
     * Provides additional safety characteristics about a medical device.  For example devices containing latex.
     */
    safety: fhir.CodeableConcept[];
    /**
     * Default constructor for Device - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<DeviceArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=Device.d.ts.map