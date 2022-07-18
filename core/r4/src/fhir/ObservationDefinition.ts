// <auto-generated/>
// Contents of: hl7.fhir.r4.core version: 4.0.1
// Minimum TypeScript Version: 3.7
// FHIR Resource: ObservationDefinition

import * as fhir from '../fhir.js';

// @ts-ignore
import { UcumUnitsCodes,  UcumUnitsCodeType } from '../fhirValueSets/UcumUnitsCodes.js';
// @ts-ignore
import { UcumUnitsVsValidation } from '../fhirValueSets/UcumUnitsVsValidation.js';
// @ts-ignore
import { ObservationRangeCategoryCodes,  ObservationRangeCategoryCodeType } from '../fhirValueSets/ObservationRangeCategoryCodes.js';
// @ts-ignore
import { ObservationRangeCategoryVsValidation } from '../fhirValueSets/ObservationRangeCategoryVsValidation.js';
// @ts-ignore
import { ReferencerangeMeaningCodes,  ReferencerangeMeaningCodeType } from '../fhirValueSets/ReferencerangeMeaningCodes.js';
// @ts-ignore
import { ReferencerangeMeaningVsValidation } from '../fhirValueSets/ReferencerangeMeaningVsValidation.js';
// @ts-ignore
import { ReferencerangeAppliestoCodes,  ReferencerangeAppliestoCodeType } from '../fhirValueSets/ReferencerangeAppliestoCodes.js';
// @ts-ignore
import { ReferencerangeAppliestoVsValidation } from '../fhirValueSets/ReferencerangeAppliestoVsValidation.js';
// @ts-ignore
import { AdministrativeGenderCodes,  AdministrativeGenderCodeType } from '../fhirValueSets/AdministrativeGenderCodes.js';
// @ts-ignore
import { AdministrativeGenderVsValidation } from '../fhirValueSets/AdministrativeGenderVsValidation.js';
// @ts-ignore
import { ObservationCategoryCodes,  ObservationCategoryCodeType } from '../fhirValueSets/ObservationCategoryCodes.js';
// @ts-ignore
import { ObservationCategoryVsValidation } from '../fhirValueSets/ObservationCategoryVsValidation.js';
// @ts-ignore
import { ObservationCodes,  ObservationCodeType } from '../fhirValueSets/ObservationCodes.js';
// @ts-ignore
import { ObservationVsValidation } from '../fhirValueSets/ObservationVsValidation.js';
// @ts-ignore
import { PermittedDataTypeCodes,  PermittedDataTypeCodeType } from '../fhirValueSets/PermittedDataTypeCodes.js';
// @ts-ignore
import { PermittedDataTypeVsValidation } from '../fhirValueSets/PermittedDataTypeVsValidation.js';
// @ts-ignore
import { ObservationMethodsCodes,  ObservationMethodsCodeType } from '../fhirValueSets/ObservationMethodsCodes.js';
// @ts-ignore
import { ObservationMethodsVsValidation } from '../fhirValueSets/ObservationMethodsVsValidation.js';
/**
 * Valid arguments for the ObservationDefinitionQuantitativeDetails type.
 */
export interface ObservationDefinitionQuantitativeDetailsArgs extends fhir.BackboneElementArgs {
  /**
   * Customary unit used to report quantitative results of observations conforming to this ObservationDefinition.
   */
  customaryUnit?: fhir.CodeableConceptArgs|undefined;
  /**
   * SI unit used to report quantitative results of observations conforming to this ObservationDefinition.
   */
  unit?: fhir.CodeableConceptArgs|undefined;
  /**
   * Factor for converting value expressed with SI unit to value expressed with customary unit.
   */
  conversionFactor?: fhir.FhirDecimal|number|undefined;
  /**
   * Extended properties for primitive element: ObservationDefinition.quantitativeDetails.conversionFactor
   */
  _conversionFactor?:fhir.FhirElementArgs;
  /**
   * Number of digits after decimal separator when the results of such observations are of type Quantity.
   */
  decimalPrecision?: fhir.FhirInteger|number|undefined;
  /**
   * Extended properties for primitive element: ObservationDefinition.quantitativeDetails.decimalPrecision
   */
  _decimalPrecision?:fhir.FhirElementArgs;
}

/**
 * Characteristics for quantitative results of this observation.
 */
export class ObservationDefinitionQuantitativeDetails extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'ObservationDefinitionQuantitativeDetails';
  /**
   * Customary unit used to report quantitative results of observations conforming to this ObservationDefinition.
   */
  public customaryUnit?: fhir.CodeableConcept|undefined;
  /**
   * SI unit used to report quantitative results of observations conforming to this ObservationDefinition.
   */
  public unit?: fhir.CodeableConcept|undefined;
  /**
   * Factor for converting value expressed with SI unit to value expressed with customary unit.
   */
  public conversionFactor?: fhir.FhirDecimal|undefined;
  /**
   * Number of digits after decimal separator when the results of such observations are of type Quantity.
   */
  public decimalPrecision?: fhir.FhirInteger|undefined;
  /**
   * Default constructor for ObservationDefinitionQuantitativeDetails - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ObservationDefinitionQuantitativeDetailsArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['customaryUnit']) { this.customaryUnit = new fhir.CodeableConcept(source.customaryUnit); }
    if (source['unit']) { this.unit = new fhir.CodeableConcept(source.unit); }
    if (source['conversionFactor']) { this.conversionFactor = new fhir.FhirDecimal({value: source.conversionFactor}); }
    if (source['_conversionFactor']) {
      if (this.conversionFactor) { this.conversionFactor.addExtendedProperties(source._conversionFactor!); }
      else { this.conversionFactor = new fhir.FhirDecimal(source._conversionFactor as Partial<fhir.FhirDecimalArgs>); }
    }
    if (source['decimalPrecision']) { this.decimalPrecision = new fhir.FhirInteger({value: source.decimalPrecision}); }
    if (source['_decimalPrecision']) {
      if (this.decimalPrecision) { this.decimalPrecision.addExtendedProperties(source._decimalPrecision!); }
      else { this.decimalPrecision = new fhir.FhirInteger(source._decimalPrecision as Partial<fhir.FhirIntegerArgs>); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'ObservationDefinition.quantitativeDetails' }
    iss.push(...this.vOS('customaryUnit',exp));
    iss.push(...this.vOS('unit',exp));
    iss.push(...this.vOS('conversionFactor',exp));
    iss.push(...this.vOS('decimalPrecision',exp));
    return iss;
  }
}
/**
 * Valid arguments for the ObservationDefinitionQualifiedInterval type.
 */
export interface ObservationDefinitionQualifiedIntervalArgs extends fhir.BackboneElementArgs {
  /**
   * The category of interval of values for continuous or ordinal observations conforming to this ObservationDefinition.
   */
  category?: fhir.FhirCode<ObservationRangeCategoryCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: ObservationDefinition.qualifiedInterval.category
   */
  _category?:fhir.FhirElementArgs;
  /**
   * The low and high values determining the interval. There may be only one of the two.
   */
  range?: fhir.RangeArgs|undefined;
  /**
   * Codes to indicate the health context the range applies to. For example, the normal or therapeutic range.
   */
  context?: fhir.CodeableConceptArgs|undefined;
  /**
   * If this element is not present then the global population is assumed.
   */
  appliesTo?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Sex of the population the range applies to.
   */
  gender?: fhir.FhirCode<AdministrativeGenderCodeType>|string|undefined;
  /**
   * Extended properties for primitive element: ObservationDefinition.qualifiedInterval.gender
   */
  _gender?:fhir.FhirElementArgs;
  /**
   * Some analytes vary greatly over age.
   */
  age?: fhir.RangeArgs|undefined;
  /**
   * The gestational age to which this reference range is applicable, in the context of pregnancy.
   */
  gestationalAge?: fhir.RangeArgs|undefined;
  /**
   * Text based condition for which the reference range is valid.
   */
  condition?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: ObservationDefinition.qualifiedInterval.condition
   */
  _condition?:fhir.FhirElementArgs;
}

/**
 * Multiple  ranges of results qualified by different contexts for ordinal or continuous observations conforming to this ObservationDefinition.
 */
export class ObservationDefinitionQualifiedInterval extends fhir.BackboneElement {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'ObservationDefinitionQualifiedInterval';
  /**
   * The category of interval of values for continuous or ordinal observations conforming to this ObservationDefinition.
   */
  public category?: fhir.FhirCode<ObservationRangeCategoryCodeType>|undefined;
  /**
   * The low and high values determining the interval. There may be only one of the two.
   */
  public range?: fhir.Range|undefined;
  /**
   * Codes to indicate the health context the range applies to. For example, the normal or therapeutic range.
   */
  public context?: fhir.CodeableConcept|undefined;
  /**
   * If this element is not present then the global population is assumed.
   */
  public appliesTo: fhir.CodeableConcept[];
  /**
   * Sex of the population the range applies to.
   */
  public gender?: fhir.FhirCode<AdministrativeGenderCodeType>|undefined;
  /**
   * Some analytes vary greatly over age.
   */
  public age?: fhir.Range|undefined;
  /**
   * The gestational age to which this reference range is applicable, in the context of pregnancy.
   */
  public gestationalAge?: fhir.Range|undefined;
  /**
   * Text based condition for which the reference range is valid.
   */
  public condition?: fhir.FhirString|undefined;
  /**
   * Default constructor for ObservationDefinitionQualifiedInterval - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ObservationDefinitionQualifiedIntervalArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    if (source['category']) { this.category = new fhir.FhirCode<ObservationRangeCategoryCodeType>({value: source.category}); }
    if (source['_category']) {
      if (this.category) { this.category.addExtendedProperties(source._category!); }
      else { this.category = new fhir.FhirCode<ObservationRangeCategoryCodeType>(source._category as Partial<fhir.FhirCode>); }
    }
    if (source['range']) { this.range = new fhir.Range(source.range); }
    if (source['context']) { this.context = new fhir.CodeableConcept(source.context); }
    if (source['appliesTo']) { this.appliesTo = source.appliesTo.map((x) => new fhir.CodeableConcept(x)); }
    else { this.appliesTo = []; }
    if (source['gender']) { this.gender = new fhir.FhirCode<AdministrativeGenderCodeType>({value: source.gender}); }
    if (source['_gender']) {
      if (this.gender) { this.gender.addExtendedProperties(source._gender!); }
      else { this.gender = new fhir.FhirCode<AdministrativeGenderCodeType>(source._gender as Partial<fhir.FhirCode>); }
    }
    if (source['age']) { this.age = new fhir.Range(source.age); }
    if (source['gestationalAge']) { this.gestationalAge = new fhir.Range(source.gestationalAge); }
    if (source['condition']) { this.condition = new fhir.FhirString({value: source.condition}); }
    if (source['_condition']) {
      if (this.condition) { this.condition.addExtendedProperties(source._condition!); }
      else { this.condition = new fhir.FhirString(source._condition as Partial<fhir.FhirStringArgs>); }
    }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'ObservationDefinition.qualifiedInterval' }
    iss.push(...this.vOSV('category',exp,'ObservationRangeCategory',ObservationRangeCategoryVsValidation,'r'));
    iss.push(...this.vOS('range',exp));
    iss.push(...this.vOS('context',exp));
    iss.push(...this.vOA('appliesTo',exp));
    iss.push(...this.vOSV('gender',exp,'AdministrativeGender',AdministrativeGenderVsValidation,'r'));
    iss.push(...this.vOS('age',exp));
    iss.push(...this.vOS('gestationalAge',exp));
    iss.push(...this.vOS('condition',exp));
    return iss;
  }
}
/**
 * Valid arguments for the ObservationDefinition type.
 */
export interface ObservationDefinitionArgs extends fhir.DomainResourceArgs {
  /**
   * Resource Type Name
   */
  resourceType: "ObservationDefinition"|undefined;
  /**
   * This element allows various categorization schemes based on the owner’s definition of the category and effectively multiple categories can be used for one instance of ObservationDefinition. The level of granularity is defined by the category concepts in the value set.
   */
  category?: fhir.CodeableConceptArgs[]|undefined;
  /**
   * Describes what will be observed. Sometimes this is called the observation "name".
   */
  code: fhir.CodeableConceptArgs|null;
  /**
   * A unique identifier assigned to this ObservationDefinition artifact.
   */
  identifier?: fhir.IdentifierArgs[]|undefined;
  /**
   * The data types allowed for the value element of the instance observations conforming to this ObservationDefinition.
   */
  permittedDataType?: fhir.FhirCode<PermittedDataTypeCodeType>[]|(string|null)[]|undefined;
  /**
   * Extended properties for primitive element: ObservationDefinition.permittedDataType
   */
  _permittedDataType?:(fhir.FhirElementArgs|null)[];
  /**
   * An example of observation allowing multiple results is "bacteria identified by culture". Conversely, the measurement of a potassium level allows a single result.
   */
  multipleResultsAllowed?: fhir.FhirBoolean|boolean|undefined;
  /**
   * Extended properties for primitive element: ObservationDefinition.multipleResultsAllowed
   */
  _multipleResultsAllowed?:fhir.FhirElementArgs;
  /**
   * Only used if not implicit in observation code.
   */
  method?: fhir.CodeableConceptArgs|undefined;
  /**
   * The preferred name to be used when reporting the results of observations conforming to this ObservationDefinition.
   */
  preferredReportName?: fhir.FhirString|string|undefined;
  /**
   * Extended properties for primitive element: ObservationDefinition.preferredReportName
   */
  _preferredReportName?:fhir.FhirElementArgs;
  /**
   * Characteristics for quantitative results of this observation.
   */
  quantitativeDetails?: fhir.ObservationDefinitionQuantitativeDetailsArgs|undefined;
  /**
   * Multiple  ranges of results qualified by different contexts for ordinal or continuous observations conforming to this ObservationDefinition.
   */
  qualifiedInterval?: fhir.ObservationDefinitionQualifiedIntervalArgs[]|undefined;
  /**
   * The set of valid coded results for the observations  conforming to this ObservationDefinition.
   */
  validCodedValueSet?: fhir.ReferenceArgs|undefined;
  /**
   * The set of normal coded results for the observations conforming to this ObservationDefinition.
   */
  normalCodedValueSet?: fhir.ReferenceArgs|undefined;
  /**
   * The set of abnormal coded results for the observation conforming to this ObservationDefinition.
   */
  abnormalCodedValueSet?: fhir.ReferenceArgs|undefined;
  /**
   * The set of critical coded results for the observation conforming to this ObservationDefinition.
   */
  criticalCodedValueSet?: fhir.ReferenceArgs|undefined;
}

/**
 * Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service.
 */
export class ObservationDefinition extends fhir.DomainResource {
  /**
   * Mapping of this datatype to a FHIR equivalent
   */
  public static override readonly _fts_dataType:string = 'ObservationDefinition';
  /**
   * Resource Type Name
   */
  public override resourceType: "ObservationDefinition";
  /**
   * This element allows various categorization schemes based on the owner’s definition of the category and effectively multiple categories can be used for one instance of ObservationDefinition. The level of granularity is defined by the category concepts in the value set.
   */
  public category: fhir.CodeableConcept[];
  /**
   * Describes what will be observed. Sometimes this is called the observation "name".
   */
  public code: fhir.CodeableConcept|null;
  /**
   * A unique identifier assigned to this ObservationDefinition artifact.
   */
  public identifier: fhir.Identifier[];
  /**
   * The data types allowed for the value element of the instance observations conforming to this ObservationDefinition.
   */
  public permittedDataType: fhir.FhirCode<PermittedDataTypeCodeType>[];
  /**
   * An example of observation allowing multiple results is "bacteria identified by culture". Conversely, the measurement of a potassium level allows a single result.
   */
  public multipleResultsAllowed?: fhir.FhirBoolean|undefined;
  /**
   * Only used if not implicit in observation code.
   */
  public method?: fhir.CodeableConcept|undefined;
  /**
   * The preferred name to be used when reporting the results of observations conforming to this ObservationDefinition.
   */
  public preferredReportName?: fhir.FhirString|undefined;
  /**
   * Characteristics for quantitative results of this observation.
   */
  public quantitativeDetails?: fhir.ObservationDefinitionQuantitativeDetails|undefined;
  /**
   * Multiple  ranges of results qualified by different contexts for ordinal or continuous observations conforming to this ObservationDefinition.
   */
  public qualifiedInterval: fhir.ObservationDefinitionQualifiedInterval[];
  /**
   * The set of valid coded results for the observations  conforming to this ObservationDefinition.
   */
  public validCodedValueSet?: fhir.Reference|undefined;
  /**
   * The set of normal coded results for the observations conforming to this ObservationDefinition.
   */
  public normalCodedValueSet?: fhir.Reference|undefined;
  /**
   * The set of abnormal coded results for the observation conforming to this ObservationDefinition.
   */
  public abnormalCodedValueSet?: fhir.Reference|undefined;
  /**
   * The set of critical coded results for the observation conforming to this ObservationDefinition.
   */
  public criticalCodedValueSet?: fhir.Reference|undefined;
  /**
   * Default constructor for ObservationDefinition - initializes any required elements to null if a value is not provided.
   */
  constructor(source:Partial<ObservationDefinitionArgs> = {}, options:fhir.FhirConstructorOptions = {}) {
    super(source, options);
    this.resourceType = 'ObservationDefinition';
    if (source['category']) { this.category = source.category.map((x) => new fhir.CodeableConcept(x)); }
    else { this.category = []; }
    if (source['code']) { this.code = new fhir.CodeableConcept(source.code); }
    else { this.code = null; }
    if (source['identifier']) { this.identifier = source.identifier.map((x) => new fhir.Identifier(x)); }
    else { this.identifier = []; }
    if (source['permittedDataType']) { this.permittedDataType = source.permittedDataType.map((x) => new fhir.FhirCode<PermittedDataTypeCodeType>({value: x})); }
    else { this.permittedDataType = []; }
    if (source['_permittedDataType']) {
      source._permittedDataType.forEach((x,i) => {
        if (this.permittedDataType.length >= i) { if (x) { this.permittedDataType[i].addExtendedProperties(x); } }
        else { if (x) { this.permittedDataType.push(new fhir.FhirCode<PermittedDataTypeCodeType>(x as Partial<fhir.FhirCode>)); } }
      });
    }
    if (source['multipleResultsAllowed']) { this.multipleResultsAllowed = new fhir.FhirBoolean({value: source.multipleResultsAllowed}); }
    if (source['_multipleResultsAllowed']) {
      if (this.multipleResultsAllowed) { this.multipleResultsAllowed.addExtendedProperties(source._multipleResultsAllowed!); }
      else { this.multipleResultsAllowed = new fhir.FhirBoolean(source._multipleResultsAllowed as Partial<fhir.FhirBooleanArgs>); }
    }
    if (source['method']) { this.method = new fhir.CodeableConcept(source.method); }
    if (source['preferredReportName']) { this.preferredReportName = new fhir.FhirString({value: source.preferredReportName}); }
    if (source['_preferredReportName']) {
      if (this.preferredReportName) { this.preferredReportName.addExtendedProperties(source._preferredReportName!); }
      else { this.preferredReportName = new fhir.FhirString(source._preferredReportName as Partial<fhir.FhirStringArgs>); }
    }
    if (source['quantitativeDetails']) { this.quantitativeDetails = new fhir.ObservationDefinitionQuantitativeDetails(source.quantitativeDetails); }
    if (source['qualifiedInterval']) { this.qualifiedInterval = source.qualifiedInterval.map((x) => new fhir.ObservationDefinitionQualifiedInterval(x)); }
    else { this.qualifiedInterval = []; }
    if (source['validCodedValueSet']) { this.validCodedValueSet = new fhir.Reference(source.validCodedValueSet); }
    if (source['normalCodedValueSet']) { this.normalCodedValueSet = new fhir.Reference(source.normalCodedValueSet); }
    if (source['abnormalCodedValueSet']) { this.abnormalCodedValueSet = new fhir.Reference(source.abnormalCodedValueSet); }
    if (source['criticalCodedValueSet']) { this.criticalCodedValueSet = new fhir.Reference(source.criticalCodedValueSet); }
  }
  /**
   * Function to perform basic model validation (e.g., check if required elements are present).
   */
  public override doModelValidation(exp:string = ''):fhir.FtsIssue[] {
    let iss:fhir.FtsIssue[] = super.doModelValidation(exp);
    if (exp === '') { exp = 'ObservationDefinition' }
    iss.push(...this.vRPS('resourceType',exp));
    iss.push(...this.vOA('category',exp));
    iss.push(...this.vRS('code',exp));
    iss.push(...this.vOA('identifier',exp));
    iss.push(...this.vOAV('permittedDataType',exp,'PermittedDataType',PermittedDataTypeVsValidation,'r'));
    iss.push(...this.vOS('multipleResultsAllowed',exp));
    iss.push(...this.vOS('method',exp));
    iss.push(...this.vOS('preferredReportName',exp));
    iss.push(...this.vOS('quantitativeDetails',exp));
    iss.push(...this.vOA('qualifiedInterval',exp));
    iss.push(...this.vOS('validCodedValueSet',exp));
    iss.push(...this.vOS('normalCodedValueSet',exp));
    iss.push(...this.vOS('abnormalCodedValueSet',exp));
    iss.push(...this.vOS('criticalCodedValueSet',exp));
    return iss;
  }
}
