import * as fhir from '../fhirJson.js';
/**
 * Describes the production specification such as component revision, serial number, etc.
 */
export interface DeviceComponentProductionSpecification extends fhir.BackboneElement {
    /**
     * Describes the specification type, such as, serial number, part number, hardware revision, software revision, etc.
     */
    specType?: fhir.CodeableConcept | undefined;
    /**
     * Describes the internal component unique identification. This is a provision for manufacture specific standard components using a private OID. 11073-10101 has a partition for private OID semantic that the manufacture can make use of.
     */
    componentId?: fhir.Identifier | undefined;
    /**
     * Describes the printable string defining the component.
     */
    productionSpec?: string | undefined;
    /**
     * Extended properties for primitive element: DeviceComponent.productionSpecification.productionSpec
     */
    _productionSpec?: fhir.FhirElement;
}
/**
 * Describes the characteristics, operational status and capabilities of a medical-related component of a medical device.
 */
export interface DeviceComponent extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "DeviceComponent" | null;
    /**
     * Describes the specific component type as defined in the object-oriented or metric nomenclature partition.
     */
    type: fhir.CodeableConcept | null;
    /**
     * Describes the local assigned unique identification by the software. For example: handle ID.
     */
    identifier: fhir.Identifier | null;
    /**
     * Describes the timestamp for the most recent system change which includes device configuration or setting change.
     */
    lastSystemChange: string | null;
    /**
     * Extended properties for primitive element: DeviceComponent.lastSystemChange
     */
    _lastSystemChange?: fhir.FhirElement;
    /**
     * Describes the link to the source Device that contains administrative device information such as manufacture, serial number, etc.
     */
    source?: fhir.Reference | undefined;
    /**
     * Describes the link to the parent resource. For example: Channel is linked to its VMD parent.
     */
    parent?: fhir.Reference | undefined;
    /**
     * Indicates current operational status of the device. For example: On, Off, Standby, etc.
     */
    operationalStatus?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * Describes the parameter group supported by the current device component that is based on some nomenclature, e.g. cardiovascular.
     */
    parameterGroup?: fhir.CodeableConcept | undefined;
    /**
     * Describes the physical principle of the measurement. For example: thermal, chemical, acoustical, etc.
     */
    measurementPrinciple?: 'acoustical' | 'biological' | 'chemical' | 'electrical' | 'impedance' | 'manual' | 'mechanical' | 'nuclear' | 'optical' | 'other' | 'thermal' | undefined;
    /**
     * Extended properties for primitive element: DeviceComponent.measurementPrinciple
     */
    _measurementPrinciple?: fhir.FhirElement;
    /**
     * Describes the production specification such as component revision, serial number, etc.
     */
    productionSpecification?: (fhir.DeviceComponentProductionSpecification | null)[] | undefined;
    /**
     * Describes the language code for the human-readable text string produced by the device. This language code will follow the IETF language tag. Example: en-US.
     */
    languageCode?: fhir.CodeableConcept | undefined;
}
//# sourceMappingURL=DeviceComponent.d.ts.map