import * as fhir from '../fhir.js';
import { MeasurementPrincipleCodeType } from '../fhirValueSets/MeasurementPrincipleCodes.js';
/**
 * Valid arguments for the DeviceComponentProductionSpecification type.
 */
export interface DeviceComponentProductionSpecificationArgs extends fhir.BackboneElementArgs {
    /**
     * Describes the specification type, such as, serial number, part number, hardware revision, software revision, etc.
     */
    specType?: fhir.CodeableConceptArgs | undefined;
    /**
     * Describes the internal component unique identification. This is a provision for manufacture specific standard components using a private OID. 11073-10101 has a partition for private OID semantic that the manufacture can make use of.
     */
    componentId?: fhir.IdentifierArgs | undefined;
    /**
     * Describes the printable string defining the component.
     */
    productionSpec?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: DeviceComponent.productionSpecification.productionSpec
     */
    _productionSpec?: fhir.FhirElementArgs;
}
/**
 * Describes the production specification such as component revision, serial number, etc.
 */
export declare class DeviceComponentProductionSpecification extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
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
    productionSpec?: fhir.FhirString | undefined;
    /**
     * Default constructor for DeviceComponentProductionSpecification - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<DeviceComponentProductionSpecificationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the DeviceComponent type.
 */
export interface DeviceComponentArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "DeviceComponent" | undefined;
    /**
     * Describes the specific component type as defined in the object-oriented or metric nomenclature partition.
     */
    type: fhir.CodeableConceptArgs | null;
    /**
     * Describes the local assigned unique identification by the software. For example: handle ID.
     */
    identifier: fhir.IdentifierArgs | null;
    /**
     * Describes the timestamp for the most recent system change which includes device configuration or setting change.
     */
    lastSystemChange: fhir.FhirInstant | string | undefined;
    /**
     * Extended properties for primitive element: DeviceComponent.lastSystemChange
     */
    _lastSystemChange?: fhir.FhirElementArgs;
    /**
     * Describes the link to the source Device that contains administrative device information such as manufacture, serial number, etc.
     */
    source?: fhir.ReferenceArgs | undefined;
    /**
     * Describes the link to the parent resource. For example: Channel is linked to its VMD parent.
     */
    parent?: fhir.ReferenceArgs | undefined;
    /**
     * Indicates current operational status of the device. For example: On, Off, Standby, etc.
     */
    operationalStatus?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Describes the parameter group supported by the current device component that is based on some nomenclature, e.g. cardiovascular.
     */
    parameterGroup?: fhir.CodeableConceptArgs | undefined;
    /**
     * Describes the physical principle of the measurement. For example: thermal, chemical, acoustical, etc.
     */
    measurementPrinciple?: fhir.FhirCode<MeasurementPrincipleCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: DeviceComponent.measurementPrinciple
     */
    _measurementPrinciple?: fhir.FhirElementArgs;
    /**
     * Describes the production specification such as component revision, serial number, etc.
     */
    productionSpecification?: fhir.DeviceComponentProductionSpecificationArgs[] | undefined;
    /**
     * Describes the language code for the human-readable text string produced by the device. This language code will follow the IETF language tag. Example: en-US.
     */
    languageCode?: fhir.CodeableConceptArgs | undefined;
}
/**
 * Describes the characteristics, operational status and capabilities of a medical-related component of a medical device.
 */
export declare class DeviceComponent extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "DeviceComponent";
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
    lastSystemChange: fhir.FhirInstant | null;
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
    operationalStatus: fhir.CodeableConcept[];
    /**
     * Describes the parameter group supported by the current device component that is based on some nomenclature, e.g. cardiovascular.
     */
    parameterGroup?: fhir.CodeableConcept | undefined;
    /**
     * Describes the physical principle of the measurement. For example: thermal, chemical, acoustical, etc.
     */
    measurementPrinciple?: fhir.FhirCode<MeasurementPrincipleCodeType> | undefined;
    /**
     * Describes the production specification such as component revision, serial number, etc.
     */
    productionSpecification: fhir.DeviceComponentProductionSpecification[];
    /**
     * Describes the language code for the human-readable text string produced by the device. This language code will follow the IETF language tag. Example: en-US.
     */
    languageCode?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for DeviceComponent - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<DeviceComponentArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=DeviceComponent.d.ts.map