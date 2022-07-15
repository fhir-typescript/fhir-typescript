import * as fhir from '../fhir.js';
import { MeasurementPrincipleCodeType } from '../fhirValueSets/MeasurementPrincipleCodes.js';
/**
 * Valid arguments for the DeviceComponentProductionSpecification type.
 */
export interface DeviceComponentProductionSpecificationArgs extends fhir.BackboneElementArgs {
    /**
     * The specification type, such as, serial number, part number, hardware revision, software revision, etc.
     */
    specType?: fhir.CodeableConceptArgs | undefined;
    /**
     * The internal component unique identification. This is a provision for manufacture specific standard components using a private OID. 11073-10101 has a partition for private OID semantic that the manufacturer can make use of.
     */
    componentId?: fhir.IdentifierArgs | undefined;
    /**
     * The printable string defining the component.
     */
    productionSpec?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: DeviceComponent.productionSpecification.productionSpec
     */
    _productionSpec?: fhir.FhirElementArgs;
}
/**
 * The production specification such as component revision, serial number, etc.
 */
export declare class DeviceComponentProductionSpecification extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
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
     * The locally assigned unique identification by the software. For example: handle ID.
     */
    identifier: fhir.IdentifierArgs | null;
    /**
     * DeviceComponent.type can be referred to either GDMN (nomenclature system supported by FDA Global UDI Database) or preferable RTMMS coding system.
     */
    type: fhir.CodeableConceptArgs | null;
    /**
     * The timestamp for the most recent system change which includes device configuration or setting change.
     */
    lastSystemChange?: fhir.FhirInstant | string | undefined;
    /**
     * Extended properties for primitive element: DeviceComponent.lastSystemChange
     */
    _lastSystemChange?: fhir.FhirElementArgs;
    /**
     * The link to the source Device that contains administrative device information such as manufacture, serial number, etc.
     */
    source?: fhir.ReferenceArgs | undefined;
    /**
     * The link to the parent resource. For example: Channel is linked to its VMD parent.
     */
    parent?: fhir.ReferenceArgs | undefined;
    /**
     * OperationalStatus for the MDS, VMD, or Channel will be bound to a specific ValueSet that is defined in its profile.
     */
    operationalStatus?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The parameter group supported by the current device component that is based on some nomenclature, e.g. cardiovascular.
     */
    parameterGroup?: fhir.CodeableConceptArgs | undefined;
    /**
     * The physical principle of the measurement. For example: thermal, chemical, acoustical, etc.
     */
    measurementPrinciple?: fhir.FhirCode<MeasurementPrincipleCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: DeviceComponent.measurementPrinciple
     */
    _measurementPrinciple?: fhir.FhirElementArgs;
    /**
     * The production specification such as component revision, serial number, etc.
     */
    productionSpecification?: fhir.DeviceComponentProductionSpecificationArgs[] | undefined;
    /**
     * The language code for the human-readable text string produced by the device. This language code will follow the IETF language tag. Example: en-US.
     */
    languageCode?: fhir.CodeableConceptArgs | undefined;
}
/**
 * The characteristics, operational status and capabilities of a medical-related component of a medical device.
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
    lastSystemChange?: fhir.FhirInstant | undefined;
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
    operationalStatus: fhir.CodeableConcept[];
    /**
     * The parameter group supported by the current device component that is based on some nomenclature, e.g. cardiovascular.
     */
    parameterGroup?: fhir.CodeableConcept | undefined;
    /**
     * The physical principle of the measurement. For example: thermal, chemical, acoustical, etc.
     */
    measurementPrinciple?: fhir.FhirCode<MeasurementPrincipleCodeType> | undefined;
    /**
     * The production specification such as component revision, serial number, etc.
     */
    productionSpecification: fhir.DeviceComponentProductionSpecification[];
    /**
     * The language code for the human-readable text string produced by the device. This language code will follow the IETF language tag. Example: en-US.
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