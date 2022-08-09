// <auto-generated/>
// Contents of: hl7.fhir.r3.core version: 3.0.2
// Minimum TypeScript Version: 3.7
// FHIR Resource: DeviceComponent

import * as fhir from '../fhir.js';

// @ts-ignore
import { SpecificationTypeCodes,  SpecificationTypeCodeType } from '../fhirValueSets/SpecificationTypeCodes.js';
// @ts-ignore
import { SpecificationTypeVsValidation } from '../fhirValueSets/SpecificationTypeVsValidation.js';
// @ts-ignore
import { DeviceKindCodes,  DeviceKindCodeType } from '../fhirValueSets/DeviceKindCodes.js';
// @ts-ignore
import { DeviceKindVsValidation } from '../fhirValueSets/DeviceKindVsValidation.js';
// @ts-ignore
import { OperationalStatusCodes,  OperationalStatusCodeType } from '../fhirValueSets/OperationalStatusCodes.js';
// @ts-ignore
import { OperationalStatusVsValidation } from '../fhirValueSets/OperationalStatusVsValidation.js';
// @ts-ignore
import { ParameterGroupCodes,  ParameterGroupCodeType } from '../fhirValueSets/ParameterGroupCodes.js';
// @ts-ignore
import { ParameterGroupVsValidation } from '../fhirValueSets/ParameterGroupVsValidation.js';
// @ts-ignore
import { MeasurementPrincipleCodes,  MeasurementPrincipleCodeType } from '../fhirValueSets/MeasurementPrincipleCodes.js';
// @ts-ignore
import { MeasurementPrincipleVsValidation } from '../fhirValueSets/MeasurementPrincipleVsValidation.js';
// @ts-ignore
import { LanguagesCodes,  LanguagesCodeType } from '../fhirValueSets/LanguagesCodes.js';
// @ts-ignore
import { LanguagesVsValidation } from '../fhirValueSets/LanguagesVsValidation.js';
/**
 * Valid arguments for the DeviceComponentProductionSpecification type.
 */
export interface DeviceComponentProductionSpecificationArgs extends fhir.BackboneElementArgs {
  /**
   * The specification type, such as, serial number, part number, hardware revision, software revision, etc.
   */
  specType?: fhir.CodeableConceptArgs|undefined;
  /**
   * The internal component unique identification. This is a provision for manufacture specific standard components using a private OID. 11073-10101 has a partition for private OID semantic that the manufacturer can make use of.
   */
  componentId?: fhir.IdentifierArgs|undefined;
  /**
   * The printable string defining the component.
   */
  productionSpec?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: DeviceComponent.productionSpecification.productionSpec
   */
  _productionSpec?:fhir.FhirElementArgs;
}

/**
 * The production specification such as component revision, serial number, etc.
 */
export class DeviceComponentProductionSpecification extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'DeviceComponentProductionSpecification';
  /**
   * The specification type, such as, serial number, part number, hardware revision, software revision, etc.
   */
  public specType?: fhir.CodeableConcept|undefined;
  /**
   * The internal component unique identification. This is a provision for manufacture specific standard components using a private OID. 11073-10101 has a partition for private OID semantic that the manufacturer can make use of.
   */
  public componentId?: fhir.Identifier|undefined;
  /**
   * The printable string defining the component.
   */
  public productionSpec?: fhir.FhirString|undefined;
  /**
   * Default constructor for DeviceComponentProductionSpecification - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<DeviceComponentProductionSpecificationArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['specType']) { this.specType = new fhir.CodeableConcept(source.specType, options); }
    if (source['componentId']) { this.componentId = new fhir.Identifier(source.componentId, options); }
    if (source['productionSpec'] !== undefined) { this.productionSpec = new fhir.FhirString({value: source.productionSpec}, options); }
    if (source['_productionSpec']) {
      if (this.productionSpec) { this.productionSpec.addExtendedProperties(source._productionSpec!); }
      else { this.productionSpec = new fhir.FhirString(source._productionSpec as Partial<fhir.FhirStringArgs>, options); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'DeviceComponent.productionSpecification' }
    iss.push(...this.vOS('specType',exp));
    iss.push(...this.vOS('componentId',exp));
    iss.push(...this.vOS('productionSpec',exp));
    return iss;
  }
}
/**
 * Valid arguments for the DeviceComponent type.
 */
export interface DeviceComponentArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "DeviceComponent"|undefined;
  /**
   * The locally assigned unique identification by the software. For example: handle ID.
   */
  identifier: fhir.IdentifierArgs|null;
  /**
   * DeviceComponent.type can be referred to either GDMN (nomenclature system supported by FDA Global UDI Database) or preferable RTMMS coding system.
   */
  type: fhir.CodeableConceptArgs|null;
  /**
   * The timestamp for the most recent system change which includes device configuration or setting change.
   */
  lastSystemChange?: fhir.FhirInstant|string|undefined;
  /**
   * Extended properties for primitive element: DeviceComponent.lastSystemChange
   */
  _lastSystemChange?:fhir.FhirElementArgs;
  /**
   * The link to the source Device that contains administrative device information such as manufacture, serial number, etc.
   */
  source?: fhir.ReferenceArgs|undefined;
  /**
   * The link to the parent resource. For example: Channel is linked to its VMD parent.
   */
  parent?: fhir.ReferenceArgs|undefined;
  /**
   * OperationalStatus for the MDS, VMD, or Channel will be bound to a specific ValueSet that is defined in its profile.
   */
  operationalStatus?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * The parameter group supported by the current device component that is based on some nomenclature, e.g. cardiovascular.
   */
  parameterGroup?: fhir.CodeableConceptArgs|undefined;
  /**
   * The physical principle of the measurement. For example: thermal, chemical, acoustical, etc.
   */
  measurementPrinciple?: fhir.FhirCode<MeasurementPrincipleCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: DeviceComponent.measurementPrinciple
   */
  _measurementPrinciple?:fhir.FhirElementArgs;
  /**
   * The production specification such as component revision, serial number, etc.
   */
  productionSpecification?: fhir.DeviceComponentProductionSpecificationArgs[]|undefined;
  /**
   * The language code for the human-readable text string produced by the device. This language code will follow the IETF language tag. Example: en-US.
   */
  languageCode?: fhir.CodeableConceptArgs|undefined;
}

/**
 * The characteristics, operational status and capabilities of a medical-related component of a medical device.
 */
export class DeviceComponent extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'DeviceComponent';
  /**
   * Resource Type Name
   */
  public override resourceType: "DeviceComponent";
  /**
   * The locally assigned unique identification by the software. For example: handle ID.
   */
  public identifier: fhir.Identifier|null;
  /**
   * DeviceComponent.type can be referred to either GDMN (nomenclature system supported by FDA Global UDI Database) or preferable RTMMS coding system.
   */
  public type: fhir.CodeableConcept|null;
  /**
   * The timestamp for the most recent system change which includes device configuration or setting change.
   */
  public lastSystemChange?: fhir.FhirInstant|undefined;
  /**
   * The link to the source Device that contains administrative device information such as manufacture, serial number, etc.
   */
  public source?: fhir.Reference|undefined;
  /**
   * The link to the parent resource. For example: Channel is linked to its VMD parent.
   */
  public parent?: fhir.Reference|undefined;
  /**
   * OperationalStatus for the MDS, VMD, or Channel will be bound to a specific ValueSet that is defined in its profile.
   */
  public operationalStatus: fhir.CodeableConcept[];
  /**
   * The parameter group supported by the current device component that is based on some nomenclature, e.g. cardiovascular.
   */
  public parameterGroup?: fhir.CodeableConcept|undefined;
  /**
   * The physical principle of the measurement. For example: thermal, chemical, acoustical, etc.
   */
  public measurementPrinciple?: fhir.FhirCode<MeasurementPrincipleCodeType>|undefined;
  /**
   * The production specification such as component revision, serial number, etc.
   */
  public productionSpecification: fhir.DeviceComponentProductionSpecification[];
  /**
   * The language code for the human-readable text string produced by the device. This language code will follow the IETF language tag. Example: en-US.
   */
  public languageCode?: fhir.CodeableConcept|undefined;
  /**
   * Default constructor for DeviceComponent - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<DeviceComponentArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'DeviceComponent';
    if (source['identifier']) { this.identifier = new fhir.Identifier(source.identifier, options); }
    else { this.identifier = null; }
    if (source['type']) { this.type = new fhir.CodeableConcept(source.type, options); }
    else { this.type = null; }
    if (source['lastSystemChange'] !== undefined) { this.lastSystemChange = new fhir.FhirInstant({value: source.lastSystemChange}, options); }
    if (source['_lastSystemChange']) {
      if (this.lastSystemChange) { this.lastSystemChange.addExtendedProperties(source._lastSystemChange!); }
      else { this.lastSystemChange = new fhir.FhirInstant(source._lastSystemChange as Partial<fhir.FhirInstantArgs>, options); }
    }
    if (source['source']) { this.source = new fhir.Reference(source.source, options); }
    if (source['parent']) { this.parent = new fhir.Reference(source.parent, options); }
    if (source['operationalStatus']) { this.operationalStatus = source.operationalStatus.map((x) => new fhir.CodeableConcept(x, options)); }
    else { this.operationalStatus = []; }
    if (source['parameterGroup']) { this.parameterGroup = new fhir.CodeableConcept(source.parameterGroup, options); }
    if (source['measurementPrinciple'] !== undefined) { this.measurementPrinciple = new fhir.FhirCode<MeasurementPrincipleCodeType>({value: source.measurementPrinciple}, options); }
    if (source['_measurementPrinciple']) {
      if (this.measurementPrinciple) { this.measurementPrinciple.addExtendedProperties(source._measurementPrinciple!); }
      else { this.measurementPrinciple = new fhir.FhirCode<MeasurementPrincipleCodeType>(source._measurementPrinciple as Partial<fhir.FhirCode>, options); }
    }
    if (source['productionSpecification']) { this.productionSpecification = source.productionSpecification.map((x) => new fhir.DeviceComponentProductionSpecification(x, options)); }
    else { this.productionSpecification = []; }
    if (source['languageCode']) { this.languageCode = new fhir.CodeableConcept(source.languageCode, options); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'DeviceComponent' }
    iss.push(...this.vRS('identifier',exp));
    iss.push(...this.vRS('type',exp));
    iss.push(...this.vOS('lastSystemChange',exp));
    iss.push(...this.vOS('source',exp));
    iss.push(...this.vOS('parent',exp));
    iss.push(...this.vOA('operationalStatus',exp));
    iss.push(...this.vOS('parameterGroup',exp));
    iss.push(...this.vOSV('measurementPrinciple',exp,'MeasurementPrinciple',MeasurementPrincipleVsValidation,'r'));
    iss.push(...this.vOA('productionSpecification',exp));
    iss.push(...this.vOS('languageCode',exp));
    return iss;
  }
}
