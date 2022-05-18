import * as fhir from '../fhir.js';
import { UcumUnitsCodingType } from '../fhirValueSets/UcumUnitsCodings.js';
import { ObservationRangeCategoryCodingType } from '../fhirValueSets/ObservationRangeCategoryCodings.js';
import { ObservationRangeCategoryCodeType } from '../fhirValueSets/ObservationRangeCategoryCodes.js';
import { ReferencerangeMeaningCodingType } from '../fhirValueSets/ReferencerangeMeaningCodings.js';
import { AdministrativeGenderCodingType } from '../fhirValueSets/AdministrativeGenderCodings.js';
import { AdministrativeGenderCodeType } from '../fhirValueSets/AdministrativeGenderCodes.js';
import { PermittedDataTypeCodingType } from '../fhirValueSets/PermittedDataTypeCodings.js';
import { PermittedDataTypeCodeType } from '../fhirValueSets/PermittedDataTypeCodes.js';
/**
 * Valid arguments for the ObservationDefinitionQuantitativeDetails type.
 */
export interface ObservationDefinitionQuantitativeDetailsArgs extends fhir.BackboneElementArgs {
    /**
     * Customary unit used to report quantitative results of observations conforming to this ObservationDefinition.
     */
    customaryUnit?: fhir.CodeableConceptArgs | undefined;
    /**
     * SI unit used to report quantitative results of observations conforming to this ObservationDefinition.
     */
    unit?: fhir.CodeableConceptArgs | undefined;
    /**
     * Factor for converting value expressed with SI unit to value expressed with customary unit.
     */
    conversionFactor?: fhir.FhirDecimal | number | undefined;
    /**
     * Number of digits after decimal separator when the results of such observations are of type Quantity.
     */
    decimalPrecision?: fhir.FhirInteger | number | undefined;
}
/**
 * Characteristics for quantitative results of this observation.
 */
export declare class ObservationDefinitionQuantitativeDetails extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Customary unit used to report quantitative results of observations conforming to this ObservationDefinition.
     */
    customaryUnit?: fhir.CodeableConcept | undefined;
    /**
     * SI unit used to report quantitative results of observations conforming to this ObservationDefinition.
     */
    unit?: fhir.CodeableConcept | undefined;
    /**
     * Factor for converting value expressed with SI unit to value expressed with customary unit.
     */
    conversionFactor?: fhir.FhirDecimal | undefined;
    /**
     * Number of digits after decimal separator when the results of such observations are of type Quantity.
     */
    decimalPrecision?: fhir.FhirInteger | undefined;
    /**
     * Default constructor for ObservationDefinitionQuantitativeDetails - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ObservationDefinitionQuantitativeDetailsArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Extensible-bound Value Set for customaryUnit (ObservationDefinition.quantitativeDetails.customaryUnit)
     */
    static customaryUnitExtensibleCoding(): UcumUnitsCodingType;
    /**
     * Extensible-bound Value Set for unit (ObservationDefinition.quantitativeDetails.unit)
     */
    static unitExtensibleCoding(): UcumUnitsCodingType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the ObservationDefinitionQualifiedInterval type.
 */
export interface ObservationDefinitionQualifiedIntervalArgs extends fhir.BackboneElementArgs {
    /**
     * The category of interval of values for continuous or ordinal observations conforming to this ObservationDefinition.
     */
    category?: ObservationRangeCategoryCodeType | undefined;
    /**
     * The low and high values determining the interval. There may be only one of the two.
     */
    range?: fhir.RangeArgs | undefined;
    /**
     * Codes to indicate the health context the range applies to. For example, the normal or therapeutic range.
     */
    context?: fhir.CodeableConceptArgs | undefined;
    /**
     * If this element is not present then the global population is assumed.
     */
    appliesTo?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Sex of the population the range applies to.
     */
    gender?: AdministrativeGenderCodeType | undefined;
    /**
     * Some analytes vary greatly over age.
     */
    age?: fhir.RangeArgs | undefined;
    /**
     * The gestational age to which this reference range is applicable, in the context of pregnancy.
     */
    gestationalAge?: fhir.RangeArgs | undefined;
    /**
     * Text based condition for which the reference range is valid.
     */
    condition?: fhir.FhirString | string | undefined;
}
/**
 * Multiple  ranges of results qualified by different contexts for ordinal or continuous observations conforming to this ObservationDefinition.
 */
export declare class ObservationDefinitionQualifiedInterval extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The category of interval of values for continuous or ordinal observations conforming to this ObservationDefinition.
     */
    category?: ObservationRangeCategoryCodeType | undefined;
    /**
     * The low and high values determining the interval. There may be only one of the two.
     */
    range?: fhir.Range | undefined;
    /**
     * Codes to indicate the health context the range applies to. For example, the normal or therapeutic range.
     */
    context?: fhir.CodeableConcept | undefined;
    /**
     * If this element is not present then the global population is assumed.
     */
    appliesTo?: fhir.CodeableConcept[];
    /**
     * Sex of the population the range applies to.
     */
    gender?: AdministrativeGenderCodeType | undefined;
    /**
     * Some analytes vary greatly over age.
     */
    age?: fhir.Range | undefined;
    /**
     * The gestational age to which this reference range is applicable, in the context of pregnancy.
     */
    gestationalAge?: fhir.Range | undefined;
    /**
     * Text based condition for which the reference range is valid.
     */
    condition?: fhir.FhirString | undefined;
    /**
     * Default constructor for ObservationDefinitionQualifiedInterval - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ObservationDefinitionQualifiedIntervalArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for category (ObservationDefinition.qualifiedInterval.category)
     */
    static categoryRequiredCoding(): ObservationRangeCategoryCodingType;
    /**
     * Extensible-bound Value Set for context (ObservationDefinition.qualifiedInterval.context)
     */
    static contextExtensibleCoding(): ReferencerangeMeaningCodingType;
    /**
     * Required-bound Value Set for gender (ObservationDefinition.qualifiedInterval.gender)
     */
    static genderRequiredCoding(): AdministrativeGenderCodingType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
/**
 * Valid arguments for the ObservationDefinition type.
 */
export interface ObservationDefinitionArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "ObservationDefinition" | undefined;
    /**
     * This element allows various categorization schemes based on the owner’s definition of the category and effectively multiple categories can be used for one instance of ObservationDefinition. The level of granularity is defined by the category concepts in the value set.
     */
    category?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Describes what will be observed. Sometimes this is called the observation "name".
     */
    code: fhir.CodeableConceptArgs | null;
    /**
     * A unique identifier assigned to this ObservationDefinition artifact.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * The data types allowed for the value element of the instance observations conforming to this ObservationDefinition.
     */
    permittedDataType?: PermittedDataTypeCodeType[] | undefined;
    /**
     * An example of observation allowing multiple results is "bacteria identified by culture". Conversely, the measurement of a potassium level allows a single result.
     */
    multipleResultsAllowed?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Only used if not implicit in observation code.
     */
    method?: fhir.CodeableConceptArgs | undefined;
    /**
     * The preferred name to be used when reporting the results of observations conforming to this ObservationDefinition.
     */
    preferredReportName?: fhir.FhirString | string | undefined;
    /**
     * Characteristics for quantitative results of this observation.
     */
    quantitativeDetails?: fhir.ObservationDefinitionQuantitativeDetailsArgs | undefined;
    /**
     * Multiple  ranges of results qualified by different contexts for ordinal or continuous observations conforming to this ObservationDefinition.
     */
    qualifiedInterval?: fhir.ObservationDefinitionQualifiedIntervalArgs[] | undefined;
    /**
     * The set of valid coded results for the observations  conforming to this ObservationDefinition.
     */
    validCodedValueSet?: fhir.ReferenceArgs | undefined;
    /**
     * The set of normal coded results for the observations conforming to this ObservationDefinition.
     */
    normalCodedValueSet?: fhir.ReferenceArgs | undefined;
    /**
     * The set of abnormal coded results for the observation conforming to this ObservationDefinition.
     */
    abnormalCodedValueSet?: fhir.ReferenceArgs | undefined;
    /**
     * The set of critical coded results for the observation conforming to this ObservationDefinition.
     */
    criticalCodedValueSet?: fhir.ReferenceArgs | undefined;
}
/**
 * Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service.
 */
export declare class ObservationDefinition extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "ObservationDefinition";
    /**
     * This element allows various categorization schemes based on the owner’s definition of the category and effectively multiple categories can be used for one instance of ObservationDefinition. The level of granularity is defined by the category concepts in the value set.
     */
    category?: fhir.CodeableConcept[];
    /**
     * Describes what will be observed. Sometimes this is called the observation "name".
     */
    code: fhir.CodeableConcept | null;
    /**
     * A unique identifier assigned to this ObservationDefinition artifact.
     */
    identifier?: fhir.Identifier[];
    /**
     * The data types allowed for the value element of the instance observations conforming to this ObservationDefinition.
     */
    permittedDataType?: PermittedDataTypeCodeType[];
    /**
     * An example of observation allowing multiple results is "bacteria identified by culture". Conversely, the measurement of a potassium level allows a single result.
     */
    multipleResultsAllowed?: fhir.FhirBoolean | undefined;
    /**
     * Only used if not implicit in observation code.
     */
    method?: fhir.CodeableConcept | undefined;
    /**
     * The preferred name to be used when reporting the results of observations conforming to this ObservationDefinition.
     */
    preferredReportName?: fhir.FhirString | undefined;
    /**
     * Characteristics for quantitative results of this observation.
     */
    quantitativeDetails?: fhir.ObservationDefinitionQuantitativeDetails | undefined;
    /**
     * Multiple  ranges of results qualified by different contexts for ordinal or continuous observations conforming to this ObservationDefinition.
     */
    qualifiedInterval?: fhir.ObservationDefinitionQualifiedInterval[];
    /**
     * The set of valid coded results for the observations  conforming to this ObservationDefinition.
     */
    validCodedValueSet?: fhir.Reference | undefined;
    /**
     * The set of normal coded results for the observations conforming to this ObservationDefinition.
     */
    normalCodedValueSet?: fhir.Reference | undefined;
    /**
     * The set of abnormal coded results for the observation conforming to this ObservationDefinition.
     */
    abnormalCodedValueSet?: fhir.Reference | undefined;
    /**
     * The set of critical coded results for the observation conforming to this ObservationDefinition.
     */
    criticalCodedValueSet?: fhir.Reference | undefined;
    /**
     * Default constructor for ObservationDefinition - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ObservationDefinitionArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for permittedDataType (ObservationDefinition.permittedDataType)
     */
    static permittedDataTypeRequiredCoding(): PermittedDataTypeCodingType;
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.OperationOutcome;
}
//# sourceMappingURL=ObservationDefinition.d.ts.map