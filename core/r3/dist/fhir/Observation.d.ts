import * as fhir from '../fhir.js';
import { ObservationRelationshiptypesCodeType } from '../fhirValueSets/ObservationRelationshiptypesCodes.js';
import { ObservationStatusCodeType } from '../fhirValueSets/ObservationStatusCodes.js';
/**
 * Valid arguments for the ObservationReferenceRange type.
 */
export interface ObservationReferenceRangeArgs extends fhir.BackboneElementArgs {
    /**
     * The value of the low bound of the reference range.  The low bound of the reference range endpoint is inclusive of the value (e.g.  reference range is &gt;=5 - &lt;=9).   If the low bound is omitted,  it is assumed to be meaningless (e.g. reference range is &lt;=2.3).
     */
    low?: fhir.QuantityArgs | undefined;
    /**
     * The value of the high bound of the reference range.  The high bound of the reference range endpoint is inclusive of the value (e.g.  reference range is &gt;=5 - &lt;=9).   If the high bound is omitted,  it is assumed to be meaningless (e.g. reference range is &gt;= 2.3).
     */
    high?: fhir.QuantityArgs | undefined;
    /**
     * This SHOULD be populated if there is more than one range.  If this element is not present then the normal range is assumed.
     */
    type?: fhir.CodeableConceptArgs | undefined;
    /**
     * This SHOULD be populated if there is more than one range.  If this element is not present then the normal population is assumed.
     */
    appliesTo?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * The age at which this reference range is applicable. This is a neonatal age (e.g. number of weeks at term) if the meaning says so.
     */
    age?: fhir.RangeArgs | undefined;
    /**
     * Text based reference range in an observation which may be used when a quantitative range is not appropriate for an observation.  An example would be a reference value of "Negative" or a list or table of 'normals'.
     */
    text?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Observation.referenceRange.text
     */
    _text?: fhir.FhirElementArgs;
}
/**
 * Most observations only have one generic reference range. Systems MAY choose to restrict to only supplying the relevant reference range based on knowledge about the patient (e.g., specific to the patient's age, gender, weight and other factors), but this may not be possible or appropriate. Whenever more than one reference range is supplied, the differences between them SHOULD be provided in the reference range and/or age properties.
 */
export declare class ObservationReferenceRange extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The value of the low bound of the reference range.  The low bound of the reference range endpoint is inclusive of the value (e.g.  reference range is &gt;=5 - &lt;=9).   If the low bound is omitted,  it is assumed to be meaningless (e.g. reference range is &lt;=2.3).
     */
    low?: fhir.Quantity | undefined;
    /**
     * The value of the high bound of the reference range.  The high bound of the reference range endpoint is inclusive of the value (e.g.  reference range is &gt;=5 - &lt;=9).   If the high bound is omitted,  it is assumed to be meaningless (e.g. reference range is &gt;= 2.3).
     */
    high?: fhir.Quantity | undefined;
    /**
     * This SHOULD be populated if there is more than one range.  If this element is not present then the normal range is assumed.
     */
    type?: fhir.CodeableConcept | undefined;
    /**
     * This SHOULD be populated if there is more than one range.  If this element is not present then the normal population is assumed.
     */
    appliesTo: fhir.CodeableConcept[];
    /**
     * The age at which this reference range is applicable. This is a neonatal age (e.g. number of weeks at term) if the meaning says so.
     */
    age?: fhir.Range | undefined;
    /**
     * Text based reference range in an observation which may be used when a quantitative range is not appropriate for an observation.  An example would be a reference value of "Negative" or a list or table of 'normals'.
     */
    text?: fhir.FhirString | undefined;
    /**
     * Default constructor for ObservationReferenceRange - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ObservationReferenceRangeArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ObservationRelated type.
 */
export interface ObservationRelatedArgs extends fhir.BackboneElementArgs {
    /**
     * The "derived-from" type is the only logical choice when referencing the QuestionnaireAnswer resource.
     */
    type?: fhir.FhirCode<ObservationRelationshiptypesCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Observation.related.type
     */
    _type?: fhir.FhirElementArgs;
    /**
     * A reference to the observation or [QuestionnaireResponse](questionnaireresponse.html#) resource that is related to this observation.
     */
    target: fhir.ReferenceArgs | null;
}
/**
 * For a discussion on the ways Observations can assembled in groups together see [Notes below](observation.html#4.20.4).
 */
export declare class ObservationRelated extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The "derived-from" type is the only logical choice when referencing the QuestionnaireAnswer resource.
     */
    type?: fhir.FhirCode<ObservationRelationshiptypesCodeType> | undefined;
    /**
     * A reference to the observation or [QuestionnaireResponse](questionnaireresponse.html#) resource that is related to this observation.
     */
    target: fhir.Reference | null;
    /**
     * Default constructor for ObservationRelated - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ObservationRelatedArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ObservationComponent type.
 */
export interface ObservationComponentArgs extends fhir.BackboneElementArgs {
    /**
     * Describes what was observed. Sometimes this is called the observation "code".
     */
    code: fhir.CodeableConceptArgs | null;
    /**
     * Normally, an observation will have either a single value or a set of related observations. A few observations (e.g. Apgar score) may have both a value and related observations (for an Apgar score, the observations from which the measure is derived). If a value is present, the datatype for this element should be determined by Observation.code. A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.   For boolean values use valueCodeableConcept and select codes from &lt;http://hl7.org/fhir/ValueSet/v2-0136&gt; (these "yes/no" concepts can be mapped to the display name "true/false" or other mutually exclusive terms that may be needed").  The element, Observation.value[x], has a variable name depending on the type as follows: valueQuantity, valueCodeableConcept, valueRatio, valueChoice, valuePeriod, valueSampleData, or valueString (the name format is "'value' + the type name" with a capital on the first letter of the type).
     */
    value?: fhir.Quantity | fhir.CodeableConcept | fhir.FhirString | fhir.Range | fhir.Ratio | fhir.SampledData | fhir.Attachment | fhir.FhirTime | fhir.FhirDateTime | fhir.Period | undefined;
    /**
     * Normally, an observation will have either a single value or a set of related observations. A few observations (e.g. Apgar score) may have both a value and related observations (for an Apgar score, the observations from which the measure is derived). If a value is present, the datatype for this element should be determined by Observation.code. A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.   For boolean values use valueCodeableConcept and select codes from &lt;http://hl7.org/fhir/ValueSet/v2-0136&gt; (these "yes/no" concepts can be mapped to the display name "true/false" or other mutually exclusive terms that may be needed").  The element, Observation.value[x], has a variable name depending on the type as follows: valueQuantity, valueCodeableConcept, valueRatio, valueChoice, valuePeriod, valueSampleData, or valueString (the name format is "'value' + the type name" with a capital on the first letter of the type).
     */
    valueQuantity?: fhir.QuantityArgs | undefined;
    /**
     * Normally, an observation will have either a single value or a set of related observations. A few observations (e.g. Apgar score) may have both a value and related observations (for an Apgar score, the observations from which the measure is derived). If a value is present, the datatype for this element should be determined by Observation.code. A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.   For boolean values use valueCodeableConcept and select codes from &lt;http://hl7.org/fhir/ValueSet/v2-0136&gt; (these "yes/no" concepts can be mapped to the display name "true/false" or other mutually exclusive terms that may be needed").  The element, Observation.value[x], has a variable name depending on the type as follows: valueQuantity, valueCodeableConcept, valueRatio, valueChoice, valuePeriod, valueSampleData, or valueString (the name format is "'value' + the type name" with a capital on the first letter of the type).
     */
    valueCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * Normally, an observation will have either a single value or a set of related observations. A few observations (e.g. Apgar score) may have both a value and related observations (for an Apgar score, the observations from which the measure is derived). If a value is present, the datatype for this element should be determined by Observation.code. A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.   For boolean values use valueCodeableConcept and select codes from &lt;http://hl7.org/fhir/ValueSet/v2-0136&gt; (these "yes/no" concepts can be mapped to the display name "true/false" or other mutually exclusive terms that may be needed").  The element, Observation.value[x], has a variable name depending on the type as follows: valueQuantity, valueCodeableConcept, valueRatio, valueChoice, valuePeriod, valueSampleData, or valueString (the name format is "'value' + the type name" with a capital on the first letter of the type).
     */
    valueString?: fhir.FhirString | string | undefined;
    /**
     * Normally, an observation will have either a single value or a set of related observations. A few observations (e.g. Apgar score) may have both a value and related observations (for an Apgar score, the observations from which the measure is derived). If a value is present, the datatype for this element should be determined by Observation.code. A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.   For boolean values use valueCodeableConcept and select codes from &lt;http://hl7.org/fhir/ValueSet/v2-0136&gt; (these "yes/no" concepts can be mapped to the display name "true/false" or other mutually exclusive terms that may be needed").  The element, Observation.value[x], has a variable name depending on the type as follows: valueQuantity, valueCodeableConcept, valueRatio, valueChoice, valuePeriod, valueSampleData, or valueString (the name format is "'value' + the type name" with a capital on the first letter of the type).
     */
    valueRange?: fhir.RangeArgs | undefined;
    /**
     * Normally, an observation will have either a single value or a set of related observations. A few observations (e.g. Apgar score) may have both a value and related observations (for an Apgar score, the observations from which the measure is derived). If a value is present, the datatype for this element should be determined by Observation.code. A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.   For boolean values use valueCodeableConcept and select codes from &lt;http://hl7.org/fhir/ValueSet/v2-0136&gt; (these "yes/no" concepts can be mapped to the display name "true/false" or other mutually exclusive terms that may be needed").  The element, Observation.value[x], has a variable name depending on the type as follows: valueQuantity, valueCodeableConcept, valueRatio, valueChoice, valuePeriod, valueSampleData, or valueString (the name format is "'value' + the type name" with a capital on the first letter of the type).
     */
    valueRatio?: fhir.RatioArgs | undefined;
    /**
     * Normally, an observation will have either a single value or a set of related observations. A few observations (e.g. Apgar score) may have both a value and related observations (for an Apgar score, the observations from which the measure is derived). If a value is present, the datatype for this element should be determined by Observation.code. A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.   For boolean values use valueCodeableConcept and select codes from &lt;http://hl7.org/fhir/ValueSet/v2-0136&gt; (these "yes/no" concepts can be mapped to the display name "true/false" or other mutually exclusive terms that may be needed").  The element, Observation.value[x], has a variable name depending on the type as follows: valueQuantity, valueCodeableConcept, valueRatio, valueChoice, valuePeriod, valueSampleData, or valueString (the name format is "'value' + the type name" with a capital on the first letter of the type).
     */
    valueSampledData?: fhir.SampledDataArgs | undefined;
    /**
     * Normally, an observation will have either a single value or a set of related observations. A few observations (e.g. Apgar score) may have both a value and related observations (for an Apgar score, the observations from which the measure is derived). If a value is present, the datatype for this element should be determined by Observation.code. A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.   For boolean values use valueCodeableConcept and select codes from &lt;http://hl7.org/fhir/ValueSet/v2-0136&gt; (these "yes/no" concepts can be mapped to the display name "true/false" or other mutually exclusive terms that may be needed").  The element, Observation.value[x], has a variable name depending on the type as follows: valueQuantity, valueCodeableConcept, valueRatio, valueChoice, valuePeriod, valueSampleData, or valueString (the name format is "'value' + the type name" with a capital on the first letter of the type).
     */
    valueAttachment?: fhir.AttachmentArgs | undefined;
    /**
     * Normally, an observation will have either a single value or a set of related observations. A few observations (e.g. Apgar score) may have both a value and related observations (for an Apgar score, the observations from which the measure is derived). If a value is present, the datatype for this element should be determined by Observation.code. A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.   For boolean values use valueCodeableConcept and select codes from &lt;http://hl7.org/fhir/ValueSet/v2-0136&gt; (these "yes/no" concepts can be mapped to the display name "true/false" or other mutually exclusive terms that may be needed").  The element, Observation.value[x], has a variable name depending on the type as follows: valueQuantity, valueCodeableConcept, valueRatio, valueChoice, valuePeriod, valueSampleData, or valueString (the name format is "'value' + the type name" with a capital on the first letter of the type).
     */
    valueTime?: fhir.FhirTime | string | undefined;
    /**
     * Normally, an observation will have either a single value or a set of related observations. A few observations (e.g. Apgar score) may have both a value and related observations (for an Apgar score, the observations from which the measure is derived). If a value is present, the datatype for this element should be determined by Observation.code. A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.   For boolean values use valueCodeableConcept and select codes from &lt;http://hl7.org/fhir/ValueSet/v2-0136&gt; (these "yes/no" concepts can be mapped to the display name "true/false" or other mutually exclusive terms that may be needed").  The element, Observation.value[x], has a variable name depending on the type as follows: valueQuantity, valueCodeableConcept, valueRatio, valueChoice, valuePeriod, valueSampleData, or valueString (the name format is "'value' + the type name" with a capital on the first letter of the type).
     */
    valueDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * Normally, an observation will have either a single value or a set of related observations. A few observations (e.g. Apgar score) may have both a value and related observations (for an Apgar score, the observations from which the measure is derived). If a value is present, the datatype for this element should be determined by Observation.code. A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.   For boolean values use valueCodeableConcept and select codes from &lt;http://hl7.org/fhir/ValueSet/v2-0136&gt; (these "yes/no" concepts can be mapped to the display name "true/false" or other mutually exclusive terms that may be needed").  The element, Observation.value[x], has a variable name depending on the type as follows: valueQuantity, valueCodeableConcept, valueRatio, valueChoice, valuePeriod, valueSampleData, or valueString (the name format is "'value' + the type name" with a capital on the first letter of the type).
     */
    valuePeriod?: fhir.PeriodArgs | undefined;
    /**
     * "Null" or exceptional values can be represented two ways in FHIR Observations.  One way is to simply include them in the value set and represent the exceptions in the value.  For example, measurement values for a serology test could be  "detected", "not detected", "inconclusive", or  "test not done".   The alternate way is to use the value element for actual observations and use the explicit dataAbsentReason element to record exceptional values.  For example, the dataAbsentReason code "error" could be used when the measurement was not completed.  Because of these options, use-case agreements are required to interpret general observations for exceptional values.
     */
    dataAbsentReason?: fhir.CodeableConceptArgs | undefined;
    /**
     * The component interpretation applies only to the individual component value.  For an overall interpretation all components together use thes Observation.interpretation element.
     */
    interpretation?: fhir.CodeableConceptArgs | undefined;
    /**
     * Most observations only have one generic reference range. Systems MAY choose to restrict to only supplying the relevant reference range based on knowledge about the patient (e.g., specific to the patient's age, gender, weight and other factors), but this may not be possible or appropriate. Whenever more than one reference range is supplied, the differences between them SHOULD be provided in the reference range and/or age properties.
     */
    referenceRange?: fhir.ObservationReferenceRangeArgs[] | undefined;
}
/**
 * For a discussion on the ways Observations can be assembled in groups together see [Notes](observation.html#notes) below.
 */
export declare class ObservationComponent extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Describes what was observed. Sometimes this is called the observation "code".
     */
    code: fhir.CodeableConcept | null;
    /**
     * Normally, an observation will have either a single value or a set of related observations. A few observations (e.g. Apgar score) may have both a value and related observations (for an Apgar score, the observations from which the measure is derived). If a value is present, the datatype for this element should be determined by Observation.code. A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.   For boolean values use valueCodeableConcept and select codes from &lt;http://hl7.org/fhir/ValueSet/v2-0136&gt; (these "yes/no" concepts can be mapped to the display name "true/false" or other mutually exclusive terms that may be needed").  The element, Observation.value[x], has a variable name depending on the type as follows: valueQuantity, valueCodeableConcept, valueRatio, valueChoice, valuePeriod, valueSampleData, or valueString (the name format is "'value' + the type name" with a capital on the first letter of the type).
     */
    value?: (fhir.Quantity | fhir.CodeableConcept | fhir.FhirString | fhir.Range | fhir.Ratio | fhir.SampledData | fhir.Attachment | fhir.FhirTime | fhir.FhirDateTime | fhir.Period) | undefined;
    /**
     * Internal flag to properly serialize choice-type element Observation.component.value[x]
     */
    protected static readonly _fts_valueIsChoice: true;
    /**
     * "Null" or exceptional values can be represented two ways in FHIR Observations.  One way is to simply include them in the value set and represent the exceptions in the value.  For example, measurement values for a serology test could be  "detected", "not detected", "inconclusive", or  "test not done".   The alternate way is to use the value element for actual observations and use the explicit dataAbsentReason element to record exceptional values.  For example, the dataAbsentReason code "error" could be used when the measurement was not completed.  Because of these options, use-case agreements are required to interpret general observations for exceptional values.
     */
    dataAbsentReason?: fhir.CodeableConcept | undefined;
    /**
     * The component interpretation applies only to the individual component value.  For an overall interpretation all components together use thes Observation.interpretation element.
     */
    interpretation?: fhir.CodeableConcept | undefined;
    /**
     * Most observations only have one generic reference range. Systems MAY choose to restrict to only supplying the relevant reference range based on knowledge about the patient (e.g., specific to the patient's age, gender, weight and other factors), but this may not be possible or appropriate. Whenever more than one reference range is supplied, the differences between them SHOULD be provided in the reference range and/or age properties.
     */
    referenceRange: fhir.ObservationReferenceRange[];
    /**
     * Default constructor for ObservationComponent - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ObservationComponentArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the Observation type.
 */
export interface ObservationArgs extends fhir.DomainResourceArgs {
    /**
     * Resource Type Name
     */
    resourceType: "Observation" | undefined;
    /**
     * A unique identifier assigned to this observation.
     */
    identifier?: fhir.IdentifierArgs[] | undefined;
    /**
     * A plan, proposal or order that is fulfilled in whole or in part by this event.
     */
    basedOn?: fhir.ReferenceArgs[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: fhir.FhirCode<ObservationStatusCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Observation.status
     */
    _status?: fhir.FhirElementArgs;
    /**
     * In addition to the required category valueset, this element allows various categorization schemes based on the owner’s definition of the category and effectively multiple categories can be used at once.  The level of granularity is defined by the category concepts in the value set.
     */
    category?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Describes what was observed. Sometimes this is called the observation "name".
     */
    code: fhir.CodeableConceptArgs | null;
    /**
     * One would expect this element to be a cardinality  of 1..1.  The only circumstance in which the subject can be missing is when the observation is made by a device that does not know the patient. In this case, the observation SHALL be matched to a patient through some context/channel matching technique, and at this point, the observation should be updated.
     * If the target of the observation is different than the subject, the general extension [observation-focal-subject](extension-observation-focal-subject.html).  may be used.  However, the distinction between the patient's own value for an observation versus that of the fetus, or the donor or blood product unit, etc., are often specified in the observation code.
     */
    subject?: fhir.ReferenceArgs | undefined;
    /**
     * This will typically be the encounter the event occurred within, but some events may be initiated prior to or after the official completion of an encounter or episode but still be tied to the context of the encounter or episode (e.g. pre-admission lab tests).
     */
    context?: fhir.ReferenceArgs | undefined;
    /**
     * At least a date should be present unless this observation is a historical report.
     */
    effective?: fhir.FhirDateTime | fhir.Period | undefined;
    /**
     * At least a date should be present unless this observation is a historical report.
     */
    effectiveDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * At least a date should be present unless this observation is a historical report.
     */
    effectivePeriod?: fhir.PeriodArgs | undefined;
    /**
     * Updated when the result is updated.
     */
    issued?: fhir.FhirInstant | string | undefined;
    /**
     * Extended properties for primitive element: Observation.issued
     */
    _issued?: fhir.FhirElementArgs;
    /**
     * Who was responsible for asserting the observed value as "true".
     */
    performer?: fhir.ReferenceArgs[] | undefined;
    /**
     * Normally, an observation will have either a single value or a set of related observations. A few observations (e.g. Apgar score) may have both a value and related observations (for an Apgar score, the observations from which the measure is derived). If a value is present, the datatype for this element should be determined by Observation.code. This element has a variable name depending on the type as follows: valueQuantity, valueCodeableConcept, valueString, valueBoolean, valueRange, valueRatio, valueSampledData, valueAttachment, valueTime, valueDateTime, or valuePeriod. (The name format is "'value' + the type name" with a capital on the first letter of the type).
     *
     * If the data element is usually coded or if the type associated with the Observation.value defines a coded value, use CodeableConcept instead of string datatype even if the value is uncoded text.  A value set is bound to the ValueCodeableConcept element.    For further discussion and examples see the  [notes section](observation.html#notes) below.
     */
    value?: fhir.Quantity | fhir.CodeableConcept | fhir.FhirString | fhir.FhirBoolean | fhir.Range | fhir.Ratio | fhir.SampledData | fhir.Attachment | fhir.FhirTime | fhir.FhirDateTime | fhir.Period | undefined;
    /**
     * Normally, an observation will have either a single value or a set of related observations. A few observations (e.g. Apgar score) may have both a value and related observations (for an Apgar score, the observations from which the measure is derived). If a value is present, the datatype for this element should be determined by Observation.code. This element has a variable name depending on the type as follows: valueQuantity, valueCodeableConcept, valueString, valueBoolean, valueRange, valueRatio, valueSampledData, valueAttachment, valueTime, valueDateTime, or valuePeriod. (The name format is "'value' + the type name" with a capital on the first letter of the type).
     *
     * If the data element is usually coded or if the type associated with the Observation.value defines a coded value, use CodeableConcept instead of string datatype even if the value is uncoded text.  A value set is bound to the ValueCodeableConcept element.    For further discussion and examples see the  [notes section](observation.html#notes) below.
     */
    valueQuantity?: fhir.QuantityArgs | undefined;
    /**
     * Normally, an observation will have either a single value or a set of related observations. A few observations (e.g. Apgar score) may have both a value and related observations (for an Apgar score, the observations from which the measure is derived). If a value is present, the datatype for this element should be determined by Observation.code. This element has a variable name depending on the type as follows: valueQuantity, valueCodeableConcept, valueString, valueBoolean, valueRange, valueRatio, valueSampledData, valueAttachment, valueTime, valueDateTime, or valuePeriod. (The name format is "'value' + the type name" with a capital on the first letter of the type).
     *
     * If the data element is usually coded or if the type associated with the Observation.value defines a coded value, use CodeableConcept instead of string datatype even if the value is uncoded text.  A value set is bound to the ValueCodeableConcept element.    For further discussion and examples see the  [notes section](observation.html#notes) below.
     */
    valueCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * Normally, an observation will have either a single value or a set of related observations. A few observations (e.g. Apgar score) may have both a value and related observations (for an Apgar score, the observations from which the measure is derived). If a value is present, the datatype for this element should be determined by Observation.code. This element has a variable name depending on the type as follows: valueQuantity, valueCodeableConcept, valueString, valueBoolean, valueRange, valueRatio, valueSampledData, valueAttachment, valueTime, valueDateTime, or valuePeriod. (The name format is "'value' + the type name" with a capital on the first letter of the type).
     *
     * If the data element is usually coded or if the type associated with the Observation.value defines a coded value, use CodeableConcept instead of string datatype even if the value is uncoded text.  A value set is bound to the ValueCodeableConcept element.    For further discussion and examples see the  [notes section](observation.html#notes) below.
     */
    valueString?: fhir.FhirString | string | undefined;
    /**
     * Normally, an observation will have either a single value or a set of related observations. A few observations (e.g. Apgar score) may have both a value and related observations (for an Apgar score, the observations from which the measure is derived). If a value is present, the datatype for this element should be determined by Observation.code. This element has a variable name depending on the type as follows: valueQuantity, valueCodeableConcept, valueString, valueBoolean, valueRange, valueRatio, valueSampledData, valueAttachment, valueTime, valueDateTime, or valuePeriod. (The name format is "'value' + the type name" with a capital on the first letter of the type).
     *
     * If the data element is usually coded or if the type associated with the Observation.value defines a coded value, use CodeableConcept instead of string datatype even if the value is uncoded text.  A value set is bound to the ValueCodeableConcept element.    For further discussion and examples see the  [notes section](observation.html#notes) below.
     */
    valueBoolean?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Normally, an observation will have either a single value or a set of related observations. A few observations (e.g. Apgar score) may have both a value and related observations (for an Apgar score, the observations from which the measure is derived). If a value is present, the datatype for this element should be determined by Observation.code. This element has a variable name depending on the type as follows: valueQuantity, valueCodeableConcept, valueString, valueBoolean, valueRange, valueRatio, valueSampledData, valueAttachment, valueTime, valueDateTime, or valuePeriod. (The name format is "'value' + the type name" with a capital on the first letter of the type).
     *
     * If the data element is usually coded or if the type associated with the Observation.value defines a coded value, use CodeableConcept instead of string datatype even if the value is uncoded text.  A value set is bound to the ValueCodeableConcept element.    For further discussion and examples see the  [notes section](observation.html#notes) below.
     */
    valueRange?: fhir.RangeArgs | undefined;
    /**
     * Normally, an observation will have either a single value or a set of related observations. A few observations (e.g. Apgar score) may have both a value and related observations (for an Apgar score, the observations from which the measure is derived). If a value is present, the datatype for this element should be determined by Observation.code. This element has a variable name depending on the type as follows: valueQuantity, valueCodeableConcept, valueString, valueBoolean, valueRange, valueRatio, valueSampledData, valueAttachment, valueTime, valueDateTime, or valuePeriod. (The name format is "'value' + the type name" with a capital on the first letter of the type).
     *
     * If the data element is usually coded or if the type associated with the Observation.value defines a coded value, use CodeableConcept instead of string datatype even if the value is uncoded text.  A value set is bound to the ValueCodeableConcept element.    For further discussion and examples see the  [notes section](observation.html#notes) below.
     */
    valueRatio?: fhir.RatioArgs | undefined;
    /**
     * Normally, an observation will have either a single value or a set of related observations. A few observations (e.g. Apgar score) may have both a value and related observations (for an Apgar score, the observations from which the measure is derived). If a value is present, the datatype for this element should be determined by Observation.code. This element has a variable name depending on the type as follows: valueQuantity, valueCodeableConcept, valueString, valueBoolean, valueRange, valueRatio, valueSampledData, valueAttachment, valueTime, valueDateTime, or valuePeriod. (The name format is "'value' + the type name" with a capital on the first letter of the type).
     *
     * If the data element is usually coded or if the type associated with the Observation.value defines a coded value, use CodeableConcept instead of string datatype even if the value is uncoded text.  A value set is bound to the ValueCodeableConcept element.    For further discussion and examples see the  [notes section](observation.html#notes) below.
     */
    valueSampledData?: fhir.SampledDataArgs | undefined;
    /**
     * Normally, an observation will have either a single value or a set of related observations. A few observations (e.g. Apgar score) may have both a value and related observations (for an Apgar score, the observations from which the measure is derived). If a value is present, the datatype for this element should be determined by Observation.code. This element has a variable name depending on the type as follows: valueQuantity, valueCodeableConcept, valueString, valueBoolean, valueRange, valueRatio, valueSampledData, valueAttachment, valueTime, valueDateTime, or valuePeriod. (The name format is "'value' + the type name" with a capital on the first letter of the type).
     *
     * If the data element is usually coded or if the type associated with the Observation.value defines a coded value, use CodeableConcept instead of string datatype even if the value is uncoded text.  A value set is bound to the ValueCodeableConcept element.    For further discussion and examples see the  [notes section](observation.html#notes) below.
     */
    valueAttachment?: fhir.AttachmentArgs | undefined;
    /**
     * Normally, an observation will have either a single value or a set of related observations. A few observations (e.g. Apgar score) may have both a value and related observations (for an Apgar score, the observations from which the measure is derived). If a value is present, the datatype for this element should be determined by Observation.code. This element has a variable name depending on the type as follows: valueQuantity, valueCodeableConcept, valueString, valueBoolean, valueRange, valueRatio, valueSampledData, valueAttachment, valueTime, valueDateTime, or valuePeriod. (The name format is "'value' + the type name" with a capital on the first letter of the type).
     *
     * If the data element is usually coded or if the type associated with the Observation.value defines a coded value, use CodeableConcept instead of string datatype even if the value is uncoded text.  A value set is bound to the ValueCodeableConcept element.    For further discussion and examples see the  [notes section](observation.html#notes) below.
     */
    valueTime?: fhir.FhirTime | string | undefined;
    /**
     * Normally, an observation will have either a single value or a set of related observations. A few observations (e.g. Apgar score) may have both a value and related observations (for an Apgar score, the observations from which the measure is derived). If a value is present, the datatype for this element should be determined by Observation.code. This element has a variable name depending on the type as follows: valueQuantity, valueCodeableConcept, valueString, valueBoolean, valueRange, valueRatio, valueSampledData, valueAttachment, valueTime, valueDateTime, or valuePeriod. (The name format is "'value' + the type name" with a capital on the first letter of the type).
     *
     * If the data element is usually coded or if the type associated with the Observation.value defines a coded value, use CodeableConcept instead of string datatype even if the value is uncoded text.  A value set is bound to the ValueCodeableConcept element.    For further discussion and examples see the  [notes section](observation.html#notes) below.
     */
    valueDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * Normally, an observation will have either a single value or a set of related observations. A few observations (e.g. Apgar score) may have both a value and related observations (for an Apgar score, the observations from which the measure is derived). If a value is present, the datatype for this element should be determined by Observation.code. This element has a variable name depending on the type as follows: valueQuantity, valueCodeableConcept, valueString, valueBoolean, valueRange, valueRatio, valueSampledData, valueAttachment, valueTime, valueDateTime, or valuePeriod. (The name format is "'value' + the type name" with a capital on the first letter of the type).
     *
     * If the data element is usually coded or if the type associated with the Observation.value defines a coded value, use CodeableConcept instead of string datatype even if the value is uncoded text.  A value set is bound to the ValueCodeableConcept element.    For further discussion and examples see the  [notes section](observation.html#notes) below.
     */
    valuePeriod?: fhir.PeriodArgs | undefined;
    /**
     * Null or exceptional values can be represented two ways in FHIR Observations.  One way is to simply include them in the value set and represent the exceptions in the value.  For example, measurement values for a serology test could be  "detected", "not detected", "inconclusive", or  "specimen unsatisfactory".   The alternate way is to use the value element for actual observations and use the explicit dataAbsentReason element to record exceptional values.  For example, the dataAbsentReason code "error" could be used when the measurement was not completed. Note that an observation may only be reported if there are values to report. For example differential cell counts values may be reported only when &gt; 0.  Because of these options, use-case agreements are required to interpret general observations for null or exceptional values.
     */
    dataAbsentReason?: fhir.CodeableConceptArgs | undefined;
    /**
     * The assessment made based on the result of the observation.  Intended as a simple compact code often placed adjacent to the result value in reports and flow sheets to signal the meaning/normalcy status of the result. Otherwise known as abnormal flag.
     */
    interpretation?: fhir.CodeableConceptArgs | undefined;
    /**
     * May include statements about significant, unexpected or unreliable values, or information about the source of the value where this may be relevant to the interpretation of the result.
     */
    comment?: fhir.FhirString | string | undefined;
    /**
     * Extended properties for primitive element: Observation.comment
     */
    _comment?: fhir.FhirElementArgs;
    /**
     * Only used if not implicit in code found in Observation.code.  In many systems, this may be represented as a related observation instead of an inline component.   If the use case requires BodySite to be handled as a separate resource (e.g. to identify and track separately) then use the standard extension[ body-site-instance](extension-body-site-instance.html).
     */
    bodySite?: fhir.CodeableConceptArgs | undefined;
    /**
     * Only used if not implicit in code for Observation.code.
     */
    method?: fhir.CodeableConceptArgs | undefined;
    /**
     * Should only be used if not implicit in code found in `Observation.code`.  Observations are not made on specimens themselves; they are made on a subject, but in many cases by the means of a specimen. Note that although specimens are often involved, they are not always tracked and reported explicitly. Also note that observation resources may be used in contexts that track the specimen explicitly (e.g. Diagnostic Report).
     */
    specimen?: fhir.ReferenceArgs | undefined;
    /**
     * An extension should be used if further typing of the device is needed.  Devices used to support obtaining an observation can be represented using either an extension or through the Observation.related element.
     */
    device?: fhir.ReferenceArgs | undefined;
    /**
     * Most observations only have one generic reference range. Systems MAY choose to restrict to only supplying the relevant reference range based on knowledge about the patient (e.g., specific to the patient's age, gender, weight and other factors), but this may not be possible or appropriate. Whenever more than one reference range is supplied, the differences between them SHOULD be provided in the reference range and/or age properties.
     */
    referenceRange?: fhir.ObservationReferenceRangeArgs[] | undefined;
    /**
     * For a discussion on the ways Observations can assembled in groups together see [Notes below](observation.html#4.20.4).
     */
    related?: fhir.ObservationRelatedArgs[] | undefined;
    /**
     * For a discussion on the ways Observations can be assembled in groups together see [Notes](observation.html#notes) below.
     */
    component?: fhir.ObservationComponentArgs[] | undefined;
}
/**
 * Measurements and simple assertions made about a patient, device or other subject.
 */
export declare class Observation extends fhir.DomainResource {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Resource Type Name
     */
    resourceType: "Observation";
    /**
     * A unique identifier assigned to this observation.
     */
    identifier: fhir.Identifier[];
    /**
     * A plan, proposal or order that is fulfilled in whole or in part by this event.
     */
    basedOn: fhir.Reference[];
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: fhir.FhirCode<ObservationStatusCodeType> | null;
    /**
     * In addition to the required category valueset, this element allows various categorization schemes based on the owner’s definition of the category and effectively multiple categories can be used at once.  The level of granularity is defined by the category concepts in the value set.
     */
    category: fhir.CodeableConcept[];
    /**
     * Describes what was observed. Sometimes this is called the observation "name".
     */
    code: fhir.CodeableConcept | null;
    /**
     * One would expect this element to be a cardinality  of 1..1.  The only circumstance in which the subject can be missing is when the observation is made by a device that does not know the patient. In this case, the observation SHALL be matched to a patient through some context/channel matching technique, and at this point, the observation should be updated.
     * If the target of the observation is different than the subject, the general extension [observation-focal-subject](extension-observation-focal-subject.html).  may be used.  However, the distinction between the patient's own value for an observation versus that of the fetus, or the donor or blood product unit, etc., are often specified in the observation code.
     */
    subject?: fhir.Reference | undefined;
    /**
     * This will typically be the encounter the event occurred within, but some events may be initiated prior to or after the official completion of an encounter or episode but still be tied to the context of the encounter or episode (e.g. pre-admission lab tests).
     */
    context?: fhir.Reference | undefined;
    /**
     * At least a date should be present unless this observation is a historical report.
     */
    effective?: (fhir.FhirDateTime | fhir.Period) | undefined;
    /**
     * Internal flag to properly serialize choice-type element Observation.effective[x]
     */
    protected static readonly _fts_effectiveIsChoice: true;
    /**
     * Updated when the result is updated.
     */
    issued?: fhir.FhirInstant | undefined;
    /**
     * Who was responsible for asserting the observed value as "true".
     */
    performer: fhir.Reference[];
    /**
     * Normally, an observation will have either a single value or a set of related observations. A few observations (e.g. Apgar score) may have both a value and related observations (for an Apgar score, the observations from which the measure is derived). If a value is present, the datatype for this element should be determined by Observation.code. This element has a variable name depending on the type as follows: valueQuantity, valueCodeableConcept, valueString, valueBoolean, valueRange, valueRatio, valueSampledData, valueAttachment, valueTime, valueDateTime, or valuePeriod. (The name format is "'value' + the type name" with a capital on the first letter of the type).
     *
     * If the data element is usually coded or if the type associated with the Observation.value defines a coded value, use CodeableConcept instead of string datatype even if the value is uncoded text.  A value set is bound to the ValueCodeableConcept element.    For further discussion and examples see the  [notes section](observation.html#notes) below.
     */
    value?: (fhir.Quantity | fhir.CodeableConcept | fhir.FhirString | fhir.FhirBoolean | fhir.Range | fhir.Ratio | fhir.SampledData | fhir.Attachment | fhir.FhirTime | fhir.FhirDateTime | fhir.Period) | undefined;
    /**
     * Internal flag to properly serialize choice-type element Observation.value[x]
     */
    protected static readonly _fts_valueIsChoice: true;
    /**
     * Null or exceptional values can be represented two ways in FHIR Observations.  One way is to simply include them in the value set and represent the exceptions in the value.  For example, measurement values for a serology test could be  "detected", "not detected", "inconclusive", or  "specimen unsatisfactory".   The alternate way is to use the value element for actual observations and use the explicit dataAbsentReason element to record exceptional values.  For example, the dataAbsentReason code "error" could be used when the measurement was not completed. Note that an observation may only be reported if there are values to report. For example differential cell counts values may be reported only when &gt; 0.  Because of these options, use-case agreements are required to interpret general observations for null or exceptional values.
     */
    dataAbsentReason?: fhir.CodeableConcept | undefined;
    /**
     * The assessment made based on the result of the observation.  Intended as a simple compact code often placed adjacent to the result value in reports and flow sheets to signal the meaning/normalcy status of the result. Otherwise known as abnormal flag.
     */
    interpretation?: fhir.CodeableConcept | undefined;
    /**
     * May include statements about significant, unexpected or unreliable values, or information about the source of the value where this may be relevant to the interpretation of the result.
     */
    comment?: fhir.FhirString | undefined;
    /**
     * Only used if not implicit in code found in Observation.code.  In many systems, this may be represented as a related observation instead of an inline component.   If the use case requires BodySite to be handled as a separate resource (e.g. to identify and track separately) then use the standard extension[ body-site-instance](extension-body-site-instance.html).
     */
    bodySite?: fhir.CodeableConcept | undefined;
    /**
     * Only used if not implicit in code for Observation.code.
     */
    method?: fhir.CodeableConcept | undefined;
    /**
     * Should only be used if not implicit in code found in `Observation.code`.  Observations are not made on specimens themselves; they are made on a subject, but in many cases by the means of a specimen. Note that although specimens are often involved, they are not always tracked and reported explicitly. Also note that observation resources may be used in contexts that track the specimen explicitly (e.g. Diagnostic Report).
     */
    specimen?: fhir.Reference | undefined;
    /**
     * An extension should be used if further typing of the device is needed.  Devices used to support obtaining an observation can be represented using either an extension or through the Observation.related element.
     */
    device?: fhir.Reference | undefined;
    /**
     * Most observations only have one generic reference range. Systems MAY choose to restrict to only supplying the relevant reference range based on knowledge about the patient (e.g., specific to the patient's age, gender, weight and other factors), but this may not be possible or appropriate. Whenever more than one reference range is supplied, the differences between them SHOULD be provided in the reference range and/or age properties.
     */
    referenceRange: fhir.ObservationReferenceRange[];
    /**
     * For a discussion on the ways Observations can assembled in groups together see [Notes below](observation.html#4.20.4).
     */
    related: fhir.ObservationRelated[];
    /**
     * For a discussion on the ways Observations can be assembled in groups together see [Notes](observation.html#notes) below.
     */
    component: fhir.ObservationComponent[];
    /**
     * Default constructor for Observation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ObservationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=Observation.d.ts.map