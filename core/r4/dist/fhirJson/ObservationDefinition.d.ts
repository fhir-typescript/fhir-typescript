import * as fhir from '../fhirJson.js';
/**
 * Characteristics for quantitative results of this observation.
 */
export interface ObservationDefinitionQuantitativeDetails extends fhir.BackboneElement {
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
    conversionFactor?: number | undefined;
    /**
     * Extended properties for primitive element: ObservationDefinition.quantitativeDetails.conversionFactor
     */
    _conversionFactor?: fhir.FhirElement;
    /**
     * Number of digits after decimal separator when the results of such observations are of type Quantity.
     */
    decimalPrecision?: number | undefined;
    /**
     * Extended properties for primitive element: ObservationDefinition.quantitativeDetails.decimalPrecision
     */
    _decimalPrecision?: fhir.FhirElement;
}
/**
 * Multiple  ranges of results qualified by different contexts for ordinal or continuous observations conforming to this ObservationDefinition.
 */
export interface ObservationDefinitionQualifiedInterval extends fhir.BackboneElement {
    /**
     * The category of interval of values for continuous or ordinal observations conforming to this ObservationDefinition.
     */
    category?: 'absolute' | 'critical' | 'reference' | undefined;
    /**
     * Extended properties for primitive element: ObservationDefinition.qualifiedInterval.category
     */
    _category?: fhir.FhirElement;
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
    appliesTo?: fhir.CodeableConcept[] | undefined;
    /**
     * Sex of the population the range applies to.
     */
    gender?: 'female' | 'male' | 'other' | 'unknown' | undefined;
    /**
     * Extended properties for primitive element: ObservationDefinition.qualifiedInterval.gender
     */
    _gender?: fhir.FhirElement;
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
    condition?: string | undefined;
    /**
     * Extended properties for primitive element: ObservationDefinition.qualifiedInterval.condition
     */
    _condition?: fhir.FhirElement;
}
/**
 * Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service.
 */
export interface ObservationDefinition extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "ObservationDefinition";
    /**
     * This element allows various categorization schemes based on the owner’s definition of the category and effectively multiple categories can be used for one instance of ObservationDefinition. The level of granularity is defined by the category concepts in the value set.
     */
    category?: fhir.CodeableConcept[] | undefined;
    /**
     * Describes what will be observed. Sometimes this is called the observation "name".
     */
    code: fhir.CodeableConcept | null;
    /**
     * A unique identifier assigned to this ObservationDefinition artifact.
     */
    identifier?: fhir.Identifier[] | undefined;
    /**
     * The data types allowed for the value element of the instance observations conforming to this ObservationDefinition.
     */
    permittedDataType?: ('boolean' | 'CodeableConcept' | 'dateTime' | 'integer' | 'Period' | 'Quantity' | 'Range' | 'Ratio' | 'SampledData' | 'string' | 'time')[] | undefined;
    /**
     * Extended properties for primitive element: ObservationDefinition.permittedDataType
     */
    _permittedDataType?: (fhir.FhirElement | null)[];
    /**
     * An example of observation allowing multiple results is "bacteria identified by culture". Conversely, the measurement of a potassium level allows a single result.
     */
    multipleResultsAllowed?: boolean | undefined;
    /**
     * Extended properties for primitive element: ObservationDefinition.multipleResultsAllowed
     */
    _multipleResultsAllowed?: fhir.FhirElement;
    /**
     * Only used if not implicit in observation code.
     */
    method?: fhir.CodeableConcept | undefined;
    /**
     * The preferred name to be used when reporting the results of observations conforming to this ObservationDefinition.
     */
    preferredReportName?: string | undefined;
    /**
     * Extended properties for primitive element: ObservationDefinition.preferredReportName
     */
    _preferredReportName?: fhir.FhirElement;
    /**
     * Characteristics for quantitative results of this observation.
     */
    quantitativeDetails?: fhir.ObservationDefinitionQuantitativeDetails | undefined;
    /**
     * Multiple  ranges of results qualified by different contexts for ordinal or continuous observations conforming to this ObservationDefinition.
     */
    qualifiedInterval?: fhir.ObservationDefinitionQualifiedInterval[] | undefined;
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
}
//# sourceMappingURL=ObservationDefinition.d.ts.map