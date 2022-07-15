import * as fhir from '../fhirJson.js';
/**
 * Most observations only have one generic reference range. Systems MAY choose to restrict to only supplying the relevant reference range based on knowledge about the patient (e.g., specific to the patient's age, gender, weight and other factors), but this may not be possible or appropriate. Whenever more than one reference range is supplied, the differences between them SHOULD be provided in the reference range and/or age properties.
 */
export interface ObservationReferenceRange extends fhir.BackboneElement {
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
    appliesTo?: (fhir.CodeableConcept | null)[] | undefined;
    /**
     * The age at which this reference range is applicable. This is a neonatal age (e.g. number of weeks at term) if the meaning says so.
     */
    age?: fhir.Range | undefined;
    /**
     * Text based reference range in an observation which may be used when a quantitative range is not appropriate for an observation.  An example would be a reference value of "Negative" or a list or table of 'normals'.
     */
    text?: string | undefined;
    /**
     * Extended properties for primitive element: Observation.referenceRange.text
     */
    _text?: fhir.FhirElement;
}
/**
 * For a discussion on the ways Observations can assembled in groups together see [Notes below](observation.html#4.20.4).
 */
export interface ObservationRelated extends fhir.BackboneElement {
    /**
     * The "derived-from" type is the only logical choice when referencing the QuestionnaireAnswer resource.
     */
    type?: 'derived-from' | 'has-member' | 'interfered-by' | 'qualified-by' | 'replaces' | 'sequel-to' | undefined;
    /**
     * Extended properties for primitive element: Observation.related.type
     */
    _type?: fhir.FhirElement;
    /**
     * A reference to the observation or [QuestionnaireResponse](questionnaireresponse.html#) resource that is related to this observation.
     */
    target: fhir.Reference | null;
}
/**
 * For a discussion on the ways Observations can be assembled in groups together see [Notes](observation.html#notes) below.
 */
export interface ObservationComponent extends fhir.BackboneElement {
    /**
     * Describes what was observed. Sometimes this is called the observation "code".
     */
    code: fhir.CodeableConcept | null;
    /**
     * Normally, an observation will have either a single value or a set of related observations. A few observations (e.g. Apgar score) may have both a value and related observations (for an Apgar score, the observations from which the measure is derived). If a value is present, the datatype for this element should be determined by Observation.code. A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.   For boolean values use valueCodeableConcept and select codes from &lt;http://hl7.org/fhir/ValueSet/v2-0136&gt; (these "yes/no" concepts can be mapped to the display name "true/false" or other mutually exclusive terms that may be needed").  The element, Observation.value[x], has a variable name depending on the type as follows: valueQuantity, valueCodeableConcept, valueRatio, valueChoice, valuePeriod, valueSampleData, or valueString (the name format is "'value' + the type name" with a capital on the first letter of the type).
     */
    valueQuantity?: fhir.Quantity | undefined;
    /**
     * Normally, an observation will have either a single value or a set of related observations. A few observations (e.g. Apgar score) may have both a value and related observations (for an Apgar score, the observations from which the measure is derived). If a value is present, the datatype for this element should be determined by Observation.code. A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.   For boolean values use valueCodeableConcept and select codes from &lt;http://hl7.org/fhir/ValueSet/v2-0136&gt; (these "yes/no" concepts can be mapped to the display name "true/false" or other mutually exclusive terms that may be needed").  The element, Observation.value[x], has a variable name depending on the type as follows: valueQuantity, valueCodeableConcept, valueRatio, valueChoice, valuePeriod, valueSampleData, or valueString (the name format is "'value' + the type name" with a capital on the first letter of the type).
     */
    valueCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Normally, an observation will have either a single value or a set of related observations. A few observations (e.g. Apgar score) may have both a value and related observations (for an Apgar score, the observations from which the measure is derived). If a value is present, the datatype for this element should be determined by Observation.code. A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.   For boolean values use valueCodeableConcept and select codes from &lt;http://hl7.org/fhir/ValueSet/v2-0136&gt; (these "yes/no" concepts can be mapped to the display name "true/false" or other mutually exclusive terms that may be needed").  The element, Observation.value[x], has a variable name depending on the type as follows: valueQuantity, valueCodeableConcept, valueRatio, valueChoice, valuePeriod, valueSampleData, or valueString (the name format is "'value' + the type name" with a capital on the first letter of the type).
     */
    valueString?: string | undefined;
    /**
     * Extended properties for primitive element: Observation.component.value[x]
     */
    _valueString?: fhir.FhirElement;
    /**
     * Normally, an observation will have either a single value or a set of related observations. A few observations (e.g. Apgar score) may have both a value and related observations (for an Apgar score, the observations from which the measure is derived). If a value is present, the datatype for this element should be determined by Observation.code. A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.   For boolean values use valueCodeableConcept and select codes from &lt;http://hl7.org/fhir/ValueSet/v2-0136&gt; (these "yes/no" concepts can be mapped to the display name "true/false" or other mutually exclusive terms that may be needed").  The element, Observation.value[x], has a variable name depending on the type as follows: valueQuantity, valueCodeableConcept, valueRatio, valueChoice, valuePeriod, valueSampleData, or valueString (the name format is "'value' + the type name" with a capital on the first letter of the type).
     */
    valueRange?: fhir.Range | undefined;
    /**
     * Normally, an observation will have either a single value or a set of related observations. A few observations (e.g. Apgar score) may have both a value and related observations (for an Apgar score, the observations from which the measure is derived). If a value is present, the datatype for this element should be determined by Observation.code. A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.   For boolean values use valueCodeableConcept and select codes from &lt;http://hl7.org/fhir/ValueSet/v2-0136&gt; (these "yes/no" concepts can be mapped to the display name "true/false" or other mutually exclusive terms that may be needed").  The element, Observation.value[x], has a variable name depending on the type as follows: valueQuantity, valueCodeableConcept, valueRatio, valueChoice, valuePeriod, valueSampleData, or valueString (the name format is "'value' + the type name" with a capital on the first letter of the type).
     */
    valueRatio?: fhir.Ratio | undefined;
    /**
     * Normally, an observation will have either a single value or a set of related observations. A few observations (e.g. Apgar score) may have both a value and related observations (for an Apgar score, the observations from which the measure is derived). If a value is present, the datatype for this element should be determined by Observation.code. A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.   For boolean values use valueCodeableConcept and select codes from &lt;http://hl7.org/fhir/ValueSet/v2-0136&gt; (these "yes/no" concepts can be mapped to the display name "true/false" or other mutually exclusive terms that may be needed").  The element, Observation.value[x], has a variable name depending on the type as follows: valueQuantity, valueCodeableConcept, valueRatio, valueChoice, valuePeriod, valueSampleData, or valueString (the name format is "'value' + the type name" with a capital on the first letter of the type).
     */
    valueSampledData?: fhir.SampledData | undefined;
    /**
     * Normally, an observation will have either a single value or a set of related observations. A few observations (e.g. Apgar score) may have both a value and related observations (for an Apgar score, the observations from which the measure is derived). If a value is present, the datatype for this element should be determined by Observation.code. A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.   For boolean values use valueCodeableConcept and select codes from &lt;http://hl7.org/fhir/ValueSet/v2-0136&gt; (these "yes/no" concepts can be mapped to the display name "true/false" or other mutually exclusive terms that may be needed").  The element, Observation.value[x], has a variable name depending on the type as follows: valueQuantity, valueCodeableConcept, valueRatio, valueChoice, valuePeriod, valueSampleData, or valueString (the name format is "'value' + the type name" with a capital on the first letter of the type).
     */
    valueAttachment?: fhir.Attachment | undefined;
    /**
     * Normally, an observation will have either a single value or a set of related observations. A few observations (e.g. Apgar score) may have both a value and related observations (for an Apgar score, the observations from which the measure is derived). If a value is present, the datatype for this element should be determined by Observation.code. A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.   For boolean values use valueCodeableConcept and select codes from &lt;http://hl7.org/fhir/ValueSet/v2-0136&gt; (these "yes/no" concepts can be mapped to the display name "true/false" or other mutually exclusive terms that may be needed").  The element, Observation.value[x], has a variable name depending on the type as follows: valueQuantity, valueCodeableConcept, valueRatio, valueChoice, valuePeriod, valueSampleData, or valueString (the name format is "'value' + the type name" with a capital on the first letter of the type).
     */
    valueTime?: string | undefined;
    /**
     * Extended properties for primitive element: Observation.component.value[x]
     */
    _valueTime?: fhir.FhirElement;
    /**
     * Normally, an observation will have either a single value or a set of related observations. A few observations (e.g. Apgar score) may have both a value and related observations (for an Apgar score, the observations from which the measure is derived). If a value is present, the datatype for this element should be determined by Observation.code. A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.   For boolean values use valueCodeableConcept and select codes from &lt;http://hl7.org/fhir/ValueSet/v2-0136&gt; (these "yes/no" concepts can be mapped to the display name "true/false" or other mutually exclusive terms that may be needed").  The element, Observation.value[x], has a variable name depending on the type as follows: valueQuantity, valueCodeableConcept, valueRatio, valueChoice, valuePeriod, valueSampleData, or valueString (the name format is "'value' + the type name" with a capital on the first letter of the type).
     */
    valueDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: Observation.component.value[x]
     */
    _valueDateTime?: fhir.FhirElement;
    /**
     * Normally, an observation will have either a single value or a set of related observations. A few observations (e.g. Apgar score) may have both a value and related observations (for an Apgar score, the observations from which the measure is derived). If a value is present, the datatype for this element should be determined by Observation.code. A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.   For boolean values use valueCodeableConcept and select codes from &lt;http://hl7.org/fhir/ValueSet/v2-0136&gt; (these "yes/no" concepts can be mapped to the display name "true/false" or other mutually exclusive terms that may be needed").  The element, Observation.value[x], has a variable name depending on the type as follows: valueQuantity, valueCodeableConcept, valueRatio, valueChoice, valuePeriod, valueSampleData, or valueString (the name format is "'value' + the type name" with a capital on the first letter of the type).
     */
    valuePeriod?: fhir.Period | undefined;
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
    referenceRange?: (fhir.ObservationReferenceRange | null)[] | undefined;
}
/**
 * Measurements and simple assertions made about a patient, device or other subject.
 */
export interface Observation extends fhir.DomainResource {
    /**
     * Resource Type Name
     */
    resourceType: "Observation" | null;
    /**
     * A unique identifier assigned to this observation.
     */
    identifier?: (fhir.Identifier | null)[] | undefined;
    /**
     * A plan, proposal or order that is fulfilled in whole or in part by this event.
     */
    basedOn?: (fhir.Reference | null)[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: 'amended' | 'cancelled' | 'corrected' | 'entered-in-error' | 'final' | 'preliminary' | 'registered' | 'unknown' | null;
    /**
     * Extended properties for primitive element: Observation.status
     */
    _status?: fhir.FhirElement;
    /**
     * In addition to the required category valueset, this element allows various categorization schemes based on the owner’s definition of the category and effectively multiple categories can be used at once.  The level of granularity is defined by the category concepts in the value set.
     */
    category?: (fhir.CodeableConcept | null)[] | undefined;
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
    effectiveDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: Observation.effective[x]
     */
    _effectiveDateTime?: fhir.FhirElement;
    /**
     * At least a date should be present unless this observation is a historical report.
     */
    effectivePeriod?: fhir.Period | undefined;
    /**
     * Updated when the result is updated.
     */
    issued?: string | undefined;
    /**
     * Extended properties for primitive element: Observation.issued
     */
    _issued?: fhir.FhirElement;
    /**
     * Who was responsible for asserting the observed value as "true".
     */
    performer?: (fhir.Reference | null)[] | undefined;
    /**
     * Normally, an observation will have either a single value or a set of related observations. A few observations (e.g. Apgar score) may have both a value and related observations (for an Apgar score, the observations from which the measure is derived). If a value is present, the datatype for this element should be determined by Observation.code. This element has a variable name depending on the type as follows: valueQuantity, valueCodeableConcept, valueString, valueBoolean, valueRange, valueRatio, valueSampledData, valueAttachment, valueTime, valueDateTime, or valuePeriod. (The name format is "'value' + the type name" with a capital on the first letter of the type).
     *
     * If the data element is usually coded or if the type associated with the Observation.value defines a coded value, use CodeableConcept instead of string datatype even if the value is uncoded text.  A value set is bound to the ValueCodeableConcept element.    For further discussion and examples see the  [notes section](observation.html#notes) below.
     */
    valueQuantity?: fhir.Quantity | undefined;
    /**
     * Normally, an observation will have either a single value or a set of related observations. A few observations (e.g. Apgar score) may have both a value and related observations (for an Apgar score, the observations from which the measure is derived). If a value is present, the datatype for this element should be determined by Observation.code. This element has a variable name depending on the type as follows: valueQuantity, valueCodeableConcept, valueString, valueBoolean, valueRange, valueRatio, valueSampledData, valueAttachment, valueTime, valueDateTime, or valuePeriod. (The name format is "'value' + the type name" with a capital on the first letter of the type).
     *
     * If the data element is usually coded or if the type associated with the Observation.value defines a coded value, use CodeableConcept instead of string datatype even if the value is uncoded text.  A value set is bound to the ValueCodeableConcept element.    For further discussion and examples see the  [notes section](observation.html#notes) below.
     */
    valueCodeableConcept?: fhir.CodeableConcept | undefined;
    /**
     * Normally, an observation will have either a single value or a set of related observations. A few observations (e.g. Apgar score) may have both a value and related observations (for an Apgar score, the observations from which the measure is derived). If a value is present, the datatype for this element should be determined by Observation.code. This element has a variable name depending on the type as follows: valueQuantity, valueCodeableConcept, valueString, valueBoolean, valueRange, valueRatio, valueSampledData, valueAttachment, valueTime, valueDateTime, or valuePeriod. (The name format is "'value' + the type name" with a capital on the first letter of the type).
     *
     * If the data element is usually coded or if the type associated with the Observation.value defines a coded value, use CodeableConcept instead of string datatype even if the value is uncoded text.  A value set is bound to the ValueCodeableConcept element.    For further discussion and examples see the  [notes section](observation.html#notes) below.
     */
    valueString?: string | undefined;
    /**
     * Extended properties for primitive element: Observation.value[x]
     */
    _valueString?: fhir.FhirElement;
    /**
     * Normally, an observation will have either a single value or a set of related observations. A few observations (e.g. Apgar score) may have both a value and related observations (for an Apgar score, the observations from which the measure is derived). If a value is present, the datatype for this element should be determined by Observation.code. This element has a variable name depending on the type as follows: valueQuantity, valueCodeableConcept, valueString, valueBoolean, valueRange, valueRatio, valueSampledData, valueAttachment, valueTime, valueDateTime, or valuePeriod. (The name format is "'value' + the type name" with a capital on the first letter of the type).
     *
     * If the data element is usually coded or if the type associated with the Observation.value defines a coded value, use CodeableConcept instead of string datatype even if the value is uncoded text.  A value set is bound to the ValueCodeableConcept element.    For further discussion and examples see the  [notes section](observation.html#notes) below.
     */
    valueBoolean?: boolean | undefined;
    /**
     * Extended properties for primitive element: Observation.value[x]
     */
    _valueBoolean?: fhir.FhirElement;
    /**
     * Normally, an observation will have either a single value or a set of related observations. A few observations (e.g. Apgar score) may have both a value and related observations (for an Apgar score, the observations from which the measure is derived). If a value is present, the datatype for this element should be determined by Observation.code. This element has a variable name depending on the type as follows: valueQuantity, valueCodeableConcept, valueString, valueBoolean, valueRange, valueRatio, valueSampledData, valueAttachment, valueTime, valueDateTime, or valuePeriod. (The name format is "'value' + the type name" with a capital on the first letter of the type).
     *
     * If the data element is usually coded or if the type associated with the Observation.value defines a coded value, use CodeableConcept instead of string datatype even if the value is uncoded text.  A value set is bound to the ValueCodeableConcept element.    For further discussion and examples see the  [notes section](observation.html#notes) below.
     */
    valueRange?: fhir.Range | undefined;
    /**
     * Normally, an observation will have either a single value or a set of related observations. A few observations (e.g. Apgar score) may have both a value and related observations (for an Apgar score, the observations from which the measure is derived). If a value is present, the datatype for this element should be determined by Observation.code. This element has a variable name depending on the type as follows: valueQuantity, valueCodeableConcept, valueString, valueBoolean, valueRange, valueRatio, valueSampledData, valueAttachment, valueTime, valueDateTime, or valuePeriod. (The name format is "'value' + the type name" with a capital on the first letter of the type).
     *
     * If the data element is usually coded or if the type associated with the Observation.value defines a coded value, use CodeableConcept instead of string datatype even if the value is uncoded text.  A value set is bound to the ValueCodeableConcept element.    For further discussion and examples see the  [notes section](observation.html#notes) below.
     */
    valueRatio?: fhir.Ratio | undefined;
    /**
     * Normally, an observation will have either a single value or a set of related observations. A few observations (e.g. Apgar score) may have both a value and related observations (for an Apgar score, the observations from which the measure is derived). If a value is present, the datatype for this element should be determined by Observation.code. This element has a variable name depending on the type as follows: valueQuantity, valueCodeableConcept, valueString, valueBoolean, valueRange, valueRatio, valueSampledData, valueAttachment, valueTime, valueDateTime, or valuePeriod. (The name format is "'value' + the type name" with a capital on the first letter of the type).
     *
     * If the data element is usually coded or if the type associated with the Observation.value defines a coded value, use CodeableConcept instead of string datatype even if the value is uncoded text.  A value set is bound to the ValueCodeableConcept element.    For further discussion and examples see the  [notes section](observation.html#notes) below.
     */
    valueSampledData?: fhir.SampledData | undefined;
    /**
     * Normally, an observation will have either a single value or a set of related observations. A few observations (e.g. Apgar score) may have both a value and related observations (for an Apgar score, the observations from which the measure is derived). If a value is present, the datatype for this element should be determined by Observation.code. This element has a variable name depending on the type as follows: valueQuantity, valueCodeableConcept, valueString, valueBoolean, valueRange, valueRatio, valueSampledData, valueAttachment, valueTime, valueDateTime, or valuePeriod. (The name format is "'value' + the type name" with a capital on the first letter of the type).
     *
     * If the data element is usually coded or if the type associated with the Observation.value defines a coded value, use CodeableConcept instead of string datatype even if the value is uncoded text.  A value set is bound to the ValueCodeableConcept element.    For further discussion and examples see the  [notes section](observation.html#notes) below.
     */
    valueAttachment?: fhir.Attachment | undefined;
    /**
     * Normally, an observation will have either a single value or a set of related observations. A few observations (e.g. Apgar score) may have both a value and related observations (for an Apgar score, the observations from which the measure is derived). If a value is present, the datatype for this element should be determined by Observation.code. This element has a variable name depending on the type as follows: valueQuantity, valueCodeableConcept, valueString, valueBoolean, valueRange, valueRatio, valueSampledData, valueAttachment, valueTime, valueDateTime, or valuePeriod. (The name format is "'value' + the type name" with a capital on the first letter of the type).
     *
     * If the data element is usually coded or if the type associated with the Observation.value defines a coded value, use CodeableConcept instead of string datatype even if the value is uncoded text.  A value set is bound to the ValueCodeableConcept element.    For further discussion and examples see the  [notes section](observation.html#notes) below.
     */
    valueTime?: string | undefined;
    /**
     * Extended properties for primitive element: Observation.value[x]
     */
    _valueTime?: fhir.FhirElement;
    /**
     * Normally, an observation will have either a single value or a set of related observations. A few observations (e.g. Apgar score) may have both a value and related observations (for an Apgar score, the observations from which the measure is derived). If a value is present, the datatype for this element should be determined by Observation.code. This element has a variable name depending on the type as follows: valueQuantity, valueCodeableConcept, valueString, valueBoolean, valueRange, valueRatio, valueSampledData, valueAttachment, valueTime, valueDateTime, or valuePeriod. (The name format is "'value' + the type name" with a capital on the first letter of the type).
     *
     * If the data element is usually coded or if the type associated with the Observation.value defines a coded value, use CodeableConcept instead of string datatype even if the value is uncoded text.  A value set is bound to the ValueCodeableConcept element.    For further discussion and examples see the  [notes section](observation.html#notes) below.
     */
    valueDateTime?: string | undefined;
    /**
     * Extended properties for primitive element: Observation.value[x]
     */
    _valueDateTime?: fhir.FhirElement;
    /**
     * Normally, an observation will have either a single value or a set of related observations. A few observations (e.g. Apgar score) may have both a value and related observations (for an Apgar score, the observations from which the measure is derived). If a value is present, the datatype for this element should be determined by Observation.code. This element has a variable name depending on the type as follows: valueQuantity, valueCodeableConcept, valueString, valueBoolean, valueRange, valueRatio, valueSampledData, valueAttachment, valueTime, valueDateTime, or valuePeriod. (The name format is "'value' + the type name" with a capital on the first letter of the type).
     *
     * If the data element is usually coded or if the type associated with the Observation.value defines a coded value, use CodeableConcept instead of string datatype even if the value is uncoded text.  A value set is bound to the ValueCodeableConcept element.    For further discussion and examples see the  [notes section](observation.html#notes) below.
     */
    valuePeriod?: fhir.Period | undefined;
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
    comment?: string | undefined;
    /**
     * Extended properties for primitive element: Observation.comment
     */
    _comment?: fhir.FhirElement;
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
    referenceRange?: (fhir.ObservationReferenceRange | null)[] | undefined;
    /**
     * For a discussion on the ways Observations can assembled in groups together see [Notes below](observation.html#4.20.4).
     */
    related?: (fhir.ObservationRelated | null)[] | undefined;
    /**
     * For a discussion on the ways Observations can be assembled in groups together see [Notes](observation.html#notes) below.
     */
    component?: (fhir.ObservationComponent | null)[] | undefined;
}
//# sourceMappingURL=Observation.d.ts.map