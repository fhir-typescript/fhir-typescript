import * as fhir from '../fhirJson.js';
/**
 * UDI may identify an unique instance of a device, or it may only identify the type of the device.  See [UDI mappings](device-mappings.html#udi) for a complete mapping of UDI parts to Device.
 */
export interface DeviceUdi extends fhir.BackboneElement {
    /**
     * The device identifier (DI) is a mandatory, fixed portion of a UDI that identifies the labeler and the specific version or model of a device.
     */
    deviceIdentifier?: string | undefined;
    /**
     * Extended properties for primitive element: Device.udi.deviceIdentifier
     */
    _deviceIdentifier?: fhir.FhirElement;
    /**
     * Use the `Device.type`  for a generic type or kind of device name.  Note the [GUDID](http://www.fda.gov/medicaldevices/deviceregulationandguidance/uniquedeviceidentification/globaludidatabasegudid/default.htm) lists the name as the 'Brand Name'.
     */
    name?: string | undefined;
    /**
     * Extended properties for primitive element: Device.udi.name
     */
    _name?: fhir.FhirElement;
    /**
     * The identity of the authoritative source for UDI generation within a  jurisdiction.  All UDIs are globally unique within a single namespace. with the appropriate repository uri as the system.  For example,  UDIs of devices managed in the U.S. by the FDA, the value is  http://hl7.org/fhir/NamingSystem/fda-udi.
     */
    jurisdiction?: string | undefined;
    /**
     * Extended properties for primitive element: Device.udi.jurisdiction
     */
    _jurisdiction?: fhir.FhirElement;
    /**
     * If separate barcodes for DI and PI are present, concatenate the string with DI first and in order of human readable expression on label.
     */
    carrierHRF?: string | undefined;
    /**
     * Extended properties for primitive element: Device.udi.carrierHRF
     */
    _carrierHRF?: fhir.FhirElement;
    /**
     * The AIDC form of UDIs should be scanned or otherwise used for the identification of the device whenever possible to minimize errors in records resulting from manual transcriptions. If separate barcodes for DI and PI are present, concatenate the string with DI first and in order of human readable expression on label.
     */
    carrierAIDC?: string | undefined;
    /**
     * Extended properties for primitive element: Device.udi.carrierAIDC
     */
    _carrierAIDC?: fhir.FhirElement;
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
    issuer?: string | undefined;
    /**
     * Extended properties for primitive element: Device.udi.issuer
     */
    _issuer?: fhir.FhirElement;
    /**
     * A coded entry to indicate how the data was entered.
     */
    entryType?: 'barcode' | 'card' | 'manual' | 'rfid' | 'self-reported' | 'unknown' | undefined;
    /**
     * Extended properties for primitive element: Device.udi.entryType
     */
    _entryType?: fhir.FhirElement;
}
/**
 * This resource identifies an instance or a type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device.  Medical devices include durable (reusable) medical equipment, implantable devices, as well as disposable equipment used for diagnostic, treatment, and research for healthcare and public health.  Non-medical devices may include items such as a machine, cellphone, computer, application, etc.
 */
export interface Device extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "Device" | null;
    /**
     * The barcode string from a barcode present on a device label or package may identify the instance, include names given to the device in local usage, or may identify the type of device. If the identifier identifies the type of device, Device.type element should be used.  For [UDI](device.html#5.11.3.2.2),  this element corresponds to the variable portion of the UDI that identifies the serial number of a specific device. See [UDI mappings](device-mappings.html#udi) for a complete mapping of UDI parts to Device.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * UDI may identify an unique instance of a device, or it may only identify the type of the device.  See [UDI mappings](device-mappings.html#udi) for a complete mapping of UDI parts to Device.
     */
    udi?: fhir.DeviceUdi | undefined;
    /**
     * This element is labeled as a modifier because the status contains the codes inactive and entered-in-error that mark the device (record)as not currently valid.
     */
    status?: 'active' | 'entered-in-error' | 'inactive' | 'unknown' | undefined;
    /**
     * Extended properties for primitive element: Device.status
     */
    _status?: fhir.FhirElement;
    /**
     * Code or identifier to identify a kind of device.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * Lot number assigned by the manufacturer.
     */
    lotNumber?: string | undefined;
    /**
     * Extended properties for primitive element: Device.lotNumber
     */
    _lotNumber?: fhir.FhirElement;
    /**
     * A name of the manufacturer.
     */
    manufacturer?: string | undefined;
    /**
     * Extended properties for primitive element: Device.manufacturer
     */
    _manufacturer?: fhir.FhirElement;
    /**
     * The date and time when the device was manufactured.
     */
    manufactureDate?: string | undefined;
    /**
     * Extended properties for primitive element: Device.manufactureDate
     */
    _manufactureDate?: fhir.FhirElement;
    /**
     * The date and time beyond which this device is no longer valid or should not be used (if applicable).
     */
    expirationDate?: string | undefined;
    /**
     * Extended properties for primitive element: Device.expirationDate
     */
    _expirationDate?: fhir.FhirElement;
    /**
     * The "model" is an identifier assigned by the manufacturer to identify the product by its type. This number is shared by the all devices sold as the same type.
     */
    model?: string | undefined;
    /**
     * Extended properties for primitive element: Device.model
     */
    _model?: fhir.FhirElement;
    /**
     * The version of the device, if the device has multiple releases under the same model, or if the device is software or carries firmware.
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: Device.version
     */
    _version?: fhir.FhirElement;
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
    contact?: (fhir.ContactPoint | null)[] | undefined;
    /**
     * The place where the device can be found.
     */
    location?: fhir.Reference | undefined;
    /**
     * If the device is running a FHIR server, the network address should  be the Base URL from which a conformance statement may be retrieved.
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: Device.url
     */
    _url?: fhir.FhirElement;
    /**
     * Descriptive information, usage information or implantation information that is not captured in an existing element.
     */
    note?: (fhir.Annotation | null)[] | undefined;
    /**
     * Provides additional safety characteristics about a medical device.  For example devices containing latex.
     */
    safety?: (fhir.CodeableConcept | null)[] | undefined;
}
//# sourceMappingURL=Device.d.ts.map