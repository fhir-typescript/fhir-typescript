import * as fhir from '../fhirJson.js';
/**
 * Unique device identifier (UDI) assigned to device label or package.  Note that the Device may include multiple udiCarriers as it either may include just the udiCarrier for the jurisdiction it is sold, or for multiple jurisdictions it could have been sold.
 */
export interface DeviceDefinitionUdiDeviceIdentifier extends fhir.BackboneElement {
    /**
     * The identifier that is to be associated with every Device that references this DeviceDefintiion for the issuer and jurisdication porvided in the DeviceDefinition.udiDeviceIdentifier.
     */
    deviceIdentifier: string | null;
    /**
     * Extended properties for primitive element: DeviceDefinition.udiDeviceIdentifier.deviceIdentifier
     */
    _deviceIdentifier?: fhir.FhirElement;
    /**
     * The organization that assigns the identifier algorithm.
     */
    issuer: string | null;
    /**
     * Extended properties for primitive element: DeviceDefinition.udiDeviceIdentifier.issuer
     */
    _issuer?: fhir.FhirElement;
    /**
     * The jurisdiction to which the deviceIdentifier applies.
     */
    jurisdiction: string | null;
    /**
     * Extended properties for primitive element: DeviceDefinition.udiDeviceIdentifier.jurisdiction
     */
    _jurisdiction?: fhir.FhirElement;
}
/**
 * A name given to the device to identify it.
 */
export interface DeviceDefinitionDeviceName extends fhir.BackboneElement {
    /**
     * The name of the device.
     */
    name: string | null;
    /**
     * Extended properties for primitive element: DeviceDefinition.deviceName.name
     */
    _name?: fhir.FhirElement;
    /**
     * The type of deviceName.
     * UDILabelName | UserFriendlyName | PatientReportedName | ManufactureDeviceName | ModelName.
     */
    type: 'manufacturer-name' | 'model-name' | 'other' | 'patient-reported-name' | 'udi-label-name' | 'user-friendly-name' | null;
    /**
     * Extended properties for primitive element: DeviceDefinition.deviceName.type
     */
    _type?: fhir.FhirElement;
}
/**
 * The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication.
 */
export interface DeviceDefinitionSpecialization extends fhir.BackboneElement {
    /**
     * The standard that is used to operate and communicate.
     */
    systemType: string | null;
    /**
     * Extended properties for primitive element: DeviceDefinition.specialization.systemType
     */
    _systemType?: fhir.FhirElement;
    /**
     * The version of the standard that is used to operate and communicate.
     */
    version?: string | undefined;
    /**
     * Extended properties for primitive element: DeviceDefinition.specialization.version
     */
    _version?: fhir.FhirElement;
}
/**
 * Device capabilities.
 */
export interface DeviceDefinitionCapability extends fhir.BackboneElement {
    /**
     * Type of capability.
     */
    type: fhir.CodeableConcept | null;
    /**
     * Description of capability.
     */
    description?: fhir.CodeableConcept[] | undefined;
}
/**
 * The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties.
 */
export interface DeviceDefinitionProperty extends fhir.BackboneElement {
    /**
     * Code that specifies the property DeviceDefinitionPropetyCode (Extensible).
     */
    type: fhir.CodeableConcept | null;
    /**
     * Property value as a quantity.
     */
    valueQuantity?: fhir.Quantity[] | undefined;
    /**
     * Property value as a code, e.g., NTP4 (synced to NTP).
     */
    valueCode?: fhir.CodeableConcept[] | undefined;
}
/**
 * A substance used to create the material(s) of which the device is made.
 */
export interface DeviceDefinitionMaterial extends fhir.BackboneElement {
    /**
     * The substance.
     */
    substance: fhir.CodeableConcept | null;
    /**
     * Indicates an alternative material of the device.
     */
    alternate?: boolean | undefined;
    /**
     * Extended properties for primitive element: DeviceDefinition.material.alternate
     */
    _alternate?: fhir.FhirElement;
    /**
     * Whether the substance is a known or suspected allergen.
     */
    allergenicIndicator?: boolean | undefined;
    /**
     * Extended properties for primitive element: DeviceDefinition.material.allergenicIndicator
     */
    _allergenicIndicator?: fhir.FhirElement;
}
/**
 * The characteristics, operational status and capabilities of a medical-related component of a medical device.
 */
export interface DeviceDefinition extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "DeviceDefinition";
    /**
     * Unique instance identifiers assigned to a device by the software, manufacturers, other organizations or owners. For example: handle ID.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * Unique device identifier (UDI) assigned to device label or package.  Note that the Device may include multiple udiCarriers as it either may include just the udiCarrier for the jurisdiction it is sold, or for multiple jurisdictions it could have been sold.
     */
    udiDeviceIdentifier?: fhir.DeviceDefinitionUdiDeviceIdentifier[] | undefined;
    /**
     * A name of the manufacturer.
     */
    manufacturerString?: string | undefined;
    /**
     * Extended properties for primitive element: DeviceDefinition.manufacturer[x]
     */
    _manufacturerString?: fhir.FhirElement;
    /**
     * A name of the manufacturer.
     */
    manufacturerReference?: fhir.Reference | undefined;
    /**
     * A name given to the device to identify it.
     */
    deviceName?: fhir.DeviceDefinitionDeviceName[] | undefined;
    /**
     * The model number for the device.
     */
    modelNumber?: string | undefined;
    /**
     * Extended properties for primitive element: DeviceDefinition.modelNumber
     */
    _modelNumber?: fhir.FhirElement;
    /**
     * What kind of device or device system this is.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * The capabilities supported on a  device, the standards to which the device conforms for a particular purpose, and used for the communication.
     */
    specialization?: fhir.DeviceDefinitionSpecialization[] | undefined;
    /**
     * The available versions of the device, e.g., software versions.
     */
    version?: string[] | undefined;
    /**
     * Extended properties for primitive element: DeviceDefinition.version
     */
    _version?: (fhir.FhirElement | null)[];
    /**
     * Safety characteristics of the device.
     */
    safety?: fhir.CodeableConcept[] | undefined;
    /**
     * Shelf Life and storage information.
     */
    shelfLifeStorage?: fhir.ProductShelfLife[] | undefined;
    /**
     * Dimensions, color etc.
     */
    physicalCharacteristics?: fhir.ProdCharacteristic | undefined;
    /**
     * Language code for the human-readable text strings produced by the device (all supported).
     */
    languageCode?: fhir.CodeableConcept[] | undefined;
    /**
     * Device capabilities.
     */
    capability?: fhir.DeviceDefinitionCapability[] | undefined;
    /**
     * The actual configuration settings of a device as it actually operates, e.g., regulation status, time properties.
     */
    property?: fhir.DeviceDefinitionProperty[] | undefined;
    /**
     * An organization that is responsible for the provision and ongoing maintenance of the device.
     */
    owner?: fhir.Reference | undefined;
    /**
     * used for troubleshooting etc.
     */
    contact?: fhir.ContactPoint[] | undefined;
    /**
     * If the device is running a FHIR server, the network address should  be the Base URL from which a conformance statement may be retrieved.
     */
    url?: string | undefined;
    /**
     * Extended properties for primitive element: DeviceDefinition.url
     */
    _url?: fhir.FhirElement;
    /**
     * Access to on-line information about the device.
     */
    onlineInformation?: string | undefined;
    /**
     * Extended properties for primitive element: DeviceDefinition.onlineInformation
     */
    _onlineInformation?: fhir.FhirElement;
    /**
     * Descriptive information, usage information or implantation information that is not captured in an existing element.
     */
    note?: fhir.Annotation[] | undefined;
    /**
     * The quantity of the device present in the packaging (e.g. the number of devices present in a pack, or the number of devices in the same package of the medicinal product).
     */
    quantity?: fhir.Quantity | undefined;
    /**
     * The parent device it can be part of.
     */
    parentDevice?: fhir.Reference | undefined;
    /**
     * A substance used to create the material(s) of which the device is made.
     */
    material?: fhir.DeviceDefinitionMaterial[] | undefined;
}
//# sourceMappingURL=DeviceDefinition.d.ts.map