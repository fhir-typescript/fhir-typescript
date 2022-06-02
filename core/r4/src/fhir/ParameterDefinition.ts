// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR ComplexType: ParameterDefinition

import * as fhir from '../fhir.js';

// @ts-ignore
import { OperationParameterUseCodings, OperationParameterUseCodingType,} from '../fhirValueSets/OperationParameterUseCodings.js';
// @ts-ignore
import { OperationParameterUseCodes,  OperationParameterUseCodeType } from '../fhirValueSets/OperationParameterUseCodes.js';
// @ts-ignore
import { AllTypesCodings, AllTypesCodingType,} from '../fhirValueSets/AllTypesCodings.js';
// @ts-ignore
import { AllTypesCodes,  AllTypesCodeType } from '../fhirValueSets/AllTypesCodes.js';
/**
 * Valid arguments for the ParameterDefinition type.
 */
export interface ParameterDefinitionArgs extends fhir.FhirElementArgs {
  /**
   * The name of the parameter used to allow access to the value of the parameter in evaluation contexts.
   */
  name?: fhir.FhirCode|string|undefined;
  /**
   * Extended properties for primitive element: ParameterDefinition.name
   */
  _name?:fhir.FhirElementArgs;
  /**
   * Whether the parameter is input or output for the module.
   */
  use: fhir.FhirCode<OperationParameterUseCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: ParameterDefinition.use
   */
  _use?:fhir.FhirElementArgs;
  /**
   * The minimum number of times this parameter SHALL appear in the request or response.
   */
  min?: fhir.FhirInteger|number|undefined;
  /**
   * Extended properties for primitive element: ParameterDefinition.min
   */
  _min?:fhir.FhirElementArgs;
  /**
   * The maximum number of times this element is permitted to appear in the request or response.
   */
  max?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: ParameterDefinition.max
   */
  _max?:fhir.FhirElementArgs;
  /**
   * A brief discussion of what the parameter is for and how it is used by the module.
   */
  documentation?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: ParameterDefinition.documentation
   */
  _documentation?:fhir.FhirElementArgs;
  /**
   * The type of the parameter.
   */
  type: fhir.FhirCode|string|undefined;
  /**
   * Extended properties for primitive element: ParameterDefinition.type
   */
  _type?:fhir.FhirElementArgs;
  /**
   * If specified, this indicates a profile that the input data must conform to, or that the output data will conform to.
   */
  profile?: fhir.FhirCanonical|string|undefined;
  /**
   * Extended properties for primitive element: ParameterDefinition.profile
   */
  _profile?:fhir.FhirElementArgs;
}

/**
 * The parameters to the module. This collection specifies both the input and output parameters. Input parameters are provided by the caller as part of the $evaluate operation. Output parameters are included in the GuidanceResponse.
 */
export class ParameterDefinition extends fhir.FhirElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'ParameterDefinition';
  /**
   * The name of the parameter used to allow access to the value of the parameter in evaluation contexts.
   */
  public name?: fhir.FhirCode|undefined;
  /**
   * Whether the parameter is input or output for the module.
   */
  public use: fhir.FhirCode<OperationParameterUseCodeType>|null;
  /**
   * The minimum number of times this parameter SHALL appear in the request or response.
   */
  public min?: fhir.FhirInteger|undefined;
  /**
   * The maximum number of times this element is permitted to appear in the request or response.
   */
  public max?: fhir.FhirString|undefined;
  /**
   * A brief discussion of what the parameter is for and how it is used by the module.
   */
  public documentation?: fhir.FhirString|undefined;
  /**
   * The type of the parameter.
   */
  public type: fhir.FhirCode|null;
  /**
   * If specified, this indicates a profile that the input data must conform to, or that the output data will conform to.
   */
  public profile?: fhir.FhirCanonical|undefined;
  /**
   * Default constructor for ParameterDefinition - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ParameterDefinitionArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['name']) { this.name = new fhir.FhirCode({value: source.name}); }
    if (source['_name']) {
      if (this.name) { this.name.addExtendedProperties(source._name!); }
      else { this.name = new fhir.FhirCode(source._name as Partial<fhir.FhirCodeArgs>); }
    }
    if (source['use']) { this.use = new fhir.FhirCode<OperationParameterUseCodeType>({value: source.use}); }
    else { this.use = null; }
    if (source['_use']) {
      if (this.use) { this.use.addExtendedProperties(source._use!); }
      else { this.use = new fhir.FhirCode<OperationParameterUseCodeType>(source._use as Partial<fhir.FhirCode>); }
    }
    if (source['min']) { this.min = new fhir.FhirInteger({value: source.min}); }
    if (source['_min']) {
      if (this.min) { this.min.addExtendedProperties(source._min!); }
      else { this.min = new fhir.FhirInteger(source._min as Partial<fhir.FhirIntegerArgs>); }
    }
    if (source['max']) { this.max = new fhir.FhirString({value: source.max}); }
    if (source['_max']) {
      if (this.max) { this.max.addExtendedProperties(source._max!); }
      else { this.max = new fhir.FhirString(source._max as Partial<fhir.FhirStringArgs>); }
    }
    if (source['documentation']) { this.documentation = new fhir.FhirString({value: source.documentation}); }
    if (source['_documentation']) {
      if (this.documentation) { this.documentation.addExtendedProperties(source._documentation!); }
      else { this.documentation = new fhir.FhirString(source._documentation as Partial<fhir.FhirStringArgs>); }
    }
    if (source['type']) { this.type = new fhir.FhirCode({value: source.type}); }
    else { this.type = null; }
    if (source['_type']) {
      if (this.type) { this.type.addExtendedProperties(source._type!); }
      else { this.type = new fhir.FhirCode(source._type as Partial<fhir.FhirCodeArgs>); }
    }
    if (source['profile']) { this.profile = new fhir.FhirCanonical({value: source.profile}); }
    if (source['_profile']) {
      if (this.profile) { this.profile.addExtendedProperties(source._profile!); }
      else { this.profile = new fhir.FhirCanonical(source._profile as Partial<fhir.FhirCanonicalArgs>); }
    }
  }
  /**
   * Required-bound Value Set for use (ParameterDefinition.use)
   */
  public static get useRequiredCodes() {
    return OperationParameterUseCodes;
  }
  /**
   * Required-bound Value Set for type (ParameterDefinition.type)
   */
  public static get typeRequiredCodes() {
    return AllTypesCodes;
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(expression:string = ''):fhir.FtsIssue[] {
    let issues:fhir.FtsIssue[] = super.doModelValidation(expression);
    if (expression === '') { expression = 'ParameterDefinition' }
    if (this["name"]) { issues.push(...this.name.doModelValidation(expression+'.name')); }
    if (!this['use']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property use fhir: ParameterDefinition.use:code', expression: [expression] });
    }
    if (this['use'] && (!Object.values(OperationParameterUseCodes).includes(this.use.value as any))) {
      issues.push({ severity: 'error', code: 'code-invalid', diagnostics: 'Invalid code property use fhir: ParameterDefinition.use:code Required binding to: OperationParameterUse', expression: [expression] });
    }
    if (this["use"]) { issues.push(...this.use.doModelValidation(expression+'.use')); }
    if (this["min"]) { issues.push(...this.min.doModelValidation(expression+'.min')); }
    if (this["max"]) { issues.push(...this.max.doModelValidation(expression+'.max')); }
    if (this["documentation"]) { issues.push(...this.documentation.doModelValidation(expression+'.documentation')); }
    if (!this['type']) {
      issues.push({ severity: 'error', code: 'required', diagnostics: 'Missing required property type fhir: ParameterDefinition.type:code', expression: [expression] });
    }
    if (this['type'] && (!Object.values(AllTypesCodes).includes(this.type.value as any))) {
      issues.push({ severity: 'error', code: 'code-invalid', diagnostics: 'Invalid code property type fhir: ParameterDefinition.type:code Required binding to: AllTypes', expression: [expression] });
    }
    if (this["type"]) { issues.push(...this.type.doModelValidation(expression+'.type')); }
    if (this["profile"]) { issues.push(...this.profile.doModelValidation(expression+'.profile')); }
    return issues;
  }
}
