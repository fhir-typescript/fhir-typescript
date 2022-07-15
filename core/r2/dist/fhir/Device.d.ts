import * as fhir from '../fhir.js';
import { DevicestatusCodeType } from '../fhirValueSets/DevicestatusCodes.js';
/**
 * Valid arguments for the Device type.
 */
export interface DeviceArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "Device" | undefined;
    /**
     * Unique instance identifiers assigned to a device by organizations like manufacturers or owners. If the identifier identifies the type of device, Device.type should be used.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * Code or identifier to identify a kind of device.
     */
    type: fhir.CodeableConceptArgs | null;
    /**
     * Descriptive information, usage information or implantation information that is not captured in an existing element.
     */
    note?: fhir.AnnotationArgs[] | undefined;
    /**
     * Status of the Device availability.
     */
    status?: fhir.FhirCode<DevicestatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Device.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * A name of the manufacturer.
     */
    manufacturer?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Device.manufacturer
     */
    _manufacturer?: fhir.FhirElementArgs;
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
    expiry?: fhir.FhirDateTime | string | undefined;
    /**
     * Extended properties for primitive element: Device.expiry
     */
    _expiry?: fhir.FhirElementArgs;
    /**
     * United States Food and Drug Administration mandated Unique Device Identifier (UDI). Use the human readable information (the content that the user sees, which is sometimes different to the exact syntax represented in the barcode)  - see http://www.fda.gov/MedicalDevices/DeviceRegulationandGuidance/UniqueDeviceIdentification/default.htm.
     */
    udi?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Device.udi
     */
    _udi?: fhir.FhirElementArgs;
    /**
     * Lot number assigned by the manufacturer.
     */
    lotNumber?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Device.lotNumber
     */
    _lotNumber?: fhir.FhirElementArgs;
    /**
     * An organization that is responsible for the provision and ongoing maintenance of the device.
     */
    owner?: fhir.ReferenceArgs | undefined;
    /**
     * The place where the device can be found.
     */
    location?: fhir.ReferenceArgs | undefined;
    /**
     * Patient information, if the resource is affixed to a person.
     */
    patient?: fhir.ReferenceArgs | undefined;
    /**
     * Contact details for an organization or a particular human that is responsible for the device.
     */
    contact?: fhir.ContactPointArgs[] | undefined;
    /**
     * A network address on which the device may be contacted directly.
     */
    url?: fhir.FhirUri | string | undefined;
    /**
     * Extended properties for primitive element: Device.url
     */
    _url?: fhir.FhirElementArgs;
}
/**
 * This resource identifies an instance of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device.  Medical devices includes durable (reusable) medical equipment, implantable devices, as well as disposable equipment used for diagnostic, treatment, and research for healthcare and public health.  Non-medical devices may include items such as a machine, cellphone, computer, application, etc.
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
     * Unique instance identifiers assigned to a device by organizations like manufacturers or owners. If the identifier identifies the type of device, Device.type should be used.
     */
    identifier: fhir.Identifier[];
    /**
     * Code or identifier to identify a kind of device.
     */
    type: fhir.CodeableConcept | null;
    /**
     * Descriptive information, usage information or implantation information that is not captured in an existing element.
     */
    note: fhir.Annotation[];
    /**
     * Status of the Device availability.
     */
    status?: fhir.FhirCode<DevicestatusCodeType> | undefined;
    /**
     * A name of the manufacturer.
     */
    manufacturer?: fhir.FhirString | undefined;
    /**
     * The "model" is an identifier assigned by the manufacturer to identify the product by its type. This number is shared by the all devices sold as the same type.
     */
    model?: fhir.FhirString | undefined;
    /**
     * The version of the device, if the device has multiple releases under the same model, or if the device is software or carries firmware.
     */
    version?: fhir.FhirString | undefined;
    /**
     * The date and time when the device was manufactured.
     */
    manufactureDate?: fhir.FhirDateTime | undefined;
    /**
     * The date and time beyond which this device is no longer valid or should not be used (if applicable).
     */
    expiry?: fhir.FhirDateTime | undefined;
    /**
     * United States Food and Drug Administration mandated Unique Device Identifier (UDI). Use the human readable information (the content that the user sees, which is sometimes different to the exact syntax represented in the barcode)  - see http://www.fda.gov/MedicalDevices/DeviceRegulationandGuidance/UniqueDeviceIdentification/default.htm.
     */
    udi?: fhir.FhirString | undefined;
    /**
     * Lot number assigned by the manufacturer.
     */
    lotNumber?: fhir.FhirString | undefined;
    /**
     * An organization that is responsible for the provision and ongoing maintenance of the device.
     */
    owner?: fhir.Reference | undefined;
    /**
     * The place where the device can be found.
     */
    location?: fhir.Reference | undefined;
    /**
     * Patient information, if the resource is affixed to a person.
     */
    patient?: fhir.Reference | undefined;
    /**
     * Contact details for an organization or a particular human that is responsible for the device.
     */
    contact: fhir.ContactPoint[];
    /**
     * A network address on which the device may be contacted directly.
     */
    url?: fhir.FhirUri | undefined;
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