import * as fhir from '../fhirJson.js';
/**
 * The production specification such as component revision, serial number, etc.
 */
export interface DeviceComponentProductionSpecification extends fhir.BackboneElement {
    /**
     * The specification type, such as, serial number, part number, hardware revision, software revision, etc.
     */
    specType?: fhir.CodeableConcept | undefined;
    /**
     * The internal component unique identification. This is a provision for manufacture specific standard components using a private OID. 11073-10101 has a partition for private OID semantic that the manufacturer can make use of.
     */
    componentId?: fhir.Identifier | undefined;
    /**
     * The printable string defining the component.
     */
    productionSpec?: string | undefined;
    /**
     * Extended properties for primitive element: DeviceComponent.productionSpecification.productionSpec
     */
    _productionSpec?: fhir.FhirElement;
}
/**
 * The characteristics, operational status and capabilities of a medical-related component of a medical device.
 */
export interface DeviceComponent extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "DeviceComponent" | null;
    /**
     * The locally assigned unique identification by the software. For example: handle ID.
     */
    identifier: fhir.Identifier | null;
    /**
     * DeviceComponent.type can be referred to either GDMN (nomenclature system supported by FDA Global UDI Database) or preferable RTMMS coding system.
     */
    type: fhir.CodeableConcept | null;
    /**
     * The timestamp for the most recent system change which includes device configuration or setting change.
     */
    lastSystemChange?: string | undefined;
    /**
     * Extended properties for primitive element: DeviceComponent.lastSystemChange
     */
    _lastSystemChange?: fhir.FhirElement;
    /**
     * The link to the source Device that contains administrative device information such as manufacture, serial number, etc.
     */
    source?: fhir.Reference | undefined;
    /**
     * The link to the parent resource. For example: Channel is linked to its VMD parent.
     */
    parent?: fhir.Reference | undefined;
    /**
     * OperationalStatus for the MDS, VMD, or Channel will be bound to a specific ValueSet that is defined in its profile.
     */
    operationalStatus?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * The parameter group supported by the current device component that is based on some nomenclature, e.g. cardiovascular.
     */
    parameterGroup?: fhir.CodeableConcept | undefined;
    /**
     * The physical principle of the measurement. For example: thermal, chemical, acoustical, etc.
     */
    measurementPrinciple?: 'acoustical' | 'biological' | 'chemical' | 'electrical' | 'impedance' | 'manual' | 'mechanical' | 'nuclear' | 'optical' | 'other' | 'thermal' | undefined;
    /**
     * Extended properties for primitive element: DeviceComponent.measurementPrinciple
     */
    _measurementPrinciple?: fhir.FhirElement;
    /**
     * The production specification such as component revision, serial number, etc.
     */
    productionSpecification?: (fhir.DeviceComponentProductionSpecification | null)[] | undefined;
    /**
     * The language code for the human-readable text string produced by the device. This language code will follow the IETF language tag. Example: en-US.
     */
    languageCode?: fhir.CodeableConcept | undefined;
}
//# sourceMappingURL=DeviceComponent.d.ts.map