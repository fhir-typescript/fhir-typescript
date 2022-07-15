import * as fhir from '../fhirJson.js';
/**
 * This resource identifies an instance of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device.  Medical devices includes durable (reusable) medical equipment, implantable devices, as well as disposable equipment used for diagnostic, treatment, and research for healthcare and public health.  Non-medical devices may include items such as a machine, cellphone, computer, application, etc.
 */
export interface Device extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "Device" | null;
    /**
     * Unique instance identifiers assigned to a device by organizations like manufacturers or owners. If the identifier identifies the type of device, Device.type should be used.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * Code or identifier to identify a kind of device.
     */
    type: fhir.CodeableConcept | null;
    /**
     * Descriptive information, usage information or implantation information that is not captured in an existing element.
     */
    note?: (fhir.Annotation | null)[] | undefined;
    /**
     * Status of the Device availability.
     */
    status?: 'available' | 'entered-in-error' | 'not-available' | undefined;
    /**
     * Extended properties for primitive element: Device.status
     */
    _status?: fhir.FhirElement;
    /**
     * A name of the manufacturer.
     */
    manufacturer?: string | undefined;
    /**
     * Extended properties for primitive element: Device.manufacturer
     */
    _manufacturer?: fhir.FhirElement;
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
    expiry?: string | undefined;
    /**
     * Extended properties for primitive element: Device.expiry
     */
    _expiry?: fhir.FhirElement;
    /**
     * United States Food and Drug Administration mandated Unique Device Identifier (UDI). Use the human readable information (the content that the user sees, which is sometimes different to the exact syntax represented in the barcode)  - see http://www.fda.gov/MedicalDevices/DeviceRegulationandGuidance/UniqueDeviceIdentification/default.htm.
     */
    udi?: string | undefined;
    /**
     * Extended properties for primitive element: Device.udi
     */
    _udi?: fhir.FhirElement;
    /**
     * Lot number assigned by the manufacturer.
     */
    lotNumber?: string | undefined;
    /**
     * Extended properties for primitive element: Device.lotNumber
     */
    _lotNumber?: fhir.FhirElement;
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
    contact?: (fhir.ContactPoint | null)[] | undefined;
    /**
     * A network address on which the device may be contacted directly.
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: Device.url
     */
    _url?: fhir.FhirElement;
}
//# sourceMappingURL=Device.d.ts.map