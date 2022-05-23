import * as fhir from '../fhir.js';
import { ObservationStatusCodeType } from '../fhirValueSets/ObservationStatusCodes.js';
/**
 * Valid arguments for the ObservationReferenceRange type.
 */
export interface ObservationReferenceRangeArgs extends fhir.BackboneElementArgs {
    /**
     * The value of the low bound of the reference range.  The low bound of the reference range endpoint is inclusive of the value (e.g.  reference range is &gt;=5 - &lt;=9). If the low bound is omitted,  it is assumed to be meaningless (e.g. reference range is &lt;=2.3).
     */
    low?: fhir.QuantityArgs | undefined;
    /**
     * The value of the high bound of the reference range.  The high bound of the reference range endpoint is inclusive of the value (e.g.  reference range is &gt;=5 - &lt;=9). If the high bound is omitted,  it is assumed to be meaningless (e.g. reference range is &gt;= 2.3).
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
     * Text based reference range in an observation which may be used when a quantitative range is not appropriate for an observation.  An example would be a reference value of "Negative" or a list or table of "normals".
     */
    text?: fhir.FhirString | string | undefined;
}
/**
 * Most observations only have one generic reference range. Systems MAY choose to restrict to only supplying the relevant reference range based on knowledge about the patient (e.g., specific to the patient's age, gender, weight and other factors), but this might not be possible or appropriate. Whenever more than one reference range is supplied, the differences between them SHOULD be provided in the reference range and/or age properties.
 */
export declare class ObservationReferenceRange extends fhir.BackboneElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * The value of the low bound of the reference range.  The low bound of the reference range endpoint is inclusive of the value (e.g.  reference range is &gt;=5 - &lt;=9). If the low bound is omitted,  it is assumed to be meaningless (e.g. reference range is &lt;=2.3).
     */
    low?: fhir.Quantity | undefined;
    /**
     * The value of the high bound of the reference range.  The high bound of the reference range endpoint is inclusive of the value (e.g.  reference range is &gt;=5 - &lt;=9). If the high bound is omitted,  it is assumed to be meaningless (e.g. reference range is &gt;= 2.3).
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
     * Text based reference range in an observation which may be used when a quantitative range is not appropriate for an observation.  An example would be a reference value of "Negative" or a list or table of "normals".
     */
    text?: fhir.FhirString | undefined;
    /**
     * Default constructor for ObservationReferenceRange - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ObservationReferenceRangeArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Preferred-bound Value Set for type (Observation.referenceRange.type)
     */
    static get typePreferredCodings(): {
        readonly Endocrine: fhir.Coding;
        readonly FollicularStage: fhir.Coding;
        readonly Luteal: fhir.Coding;
        readonly MidCycle: fhir.Coding;
        readonly NormalRange: fhir.Coding;
        readonly PostTherapeuticDesiredLevel: fhir.Coding;
        readonly PostMenopause: fhir.Coding;
        readonly PreTherapeuticDesiredLevel: fhir.Coding;
        readonly PrePuberty: fhir.Coding;
        readonly RecommendedRange: fhir.Coding;
        readonly TherapeuticDesiredLevel: fhir.Coding;
        readonly TreatmentRange: fhir.Coding;
        readonly Type: fhir.Coding;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
/**
 * Valid arguments for the ObservationComponent type.
 */
export interface ObservationComponentArgs extends fhir.BackboneElementArgs {
    /**
     * *All* code-value and  component.code-component.value pairs need to be taken into account to correctly understand the meaning of the observation.
     */
    code: fhir.CodeableConceptArgs | null;
    /**
     * Used when observation has a set of component observations. An observation may have both a value (e.g. an  Apgar score)  and component observations (the observations from which the Apgar score was derived). If a value is present, the datatype for this element should be determined by Observation.code. A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.
     */
    value?: fhir.Quantity | fhir.CodeableConcept | fhir.FhirString | fhir.FhirBoolean | fhir.FhirInteger | fhir.Range | fhir.Ratio | fhir.SampledData | fhir.FhirTime | fhir.FhirDateTime | fhir.Period | undefined;
    /**
     * Used when observation has a set of component observations. An observation may have both a value (e.g. an  Apgar score)  and component observations (the observations from which the Apgar score was derived). If a value is present, the datatype for this element should be determined by Observation.code. A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.
     */
    valueQuantity?: fhir.QuantityArgs | undefined;
    /**
     * Used when observation has a set of component observations. An observation may have both a value (e.g. an  Apgar score)  and component observations (the observations from which the Apgar score was derived). If a value is present, the datatype for this element should be determined by Observation.code. A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.
     */
    valueCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * Used when observation has a set of component observations. An observation may have both a value (e.g. an  Apgar score)  and component observations (the observations from which the Apgar score was derived). If a value is present, the datatype for this element should be determined by Observation.code. A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.
     */
    valueString?: fhir.FhirString | string | undefined;
    /**
     * Used when observation has a set of component observations. An observation may have both a value (e.g. an  Apgar score)  and component observations (the observations from which the Apgar score was derived). If a value is present, the datatype for this element should be determined by Observation.code. A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.
     */
    valueBoolean?: fhir.FhirBoolean | boolean | undefined;
    /**
     * Used when observation has a set of component observations. An observation may have both a value (e.g. an  Apgar score)  and component observations (the observations from which the Apgar score was derived). If a value is present, the datatype for this element should be determined by Observation.code. A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.
     */
    valueInteger?: fhir.FhirInteger | number | undefined;
    /**
     * Used when observation has a set of component observations. An observation may have both a value (e.g. an  Apgar score)  and component observations (the observations from which the Apgar score was derived). If a value is present, the datatype for this element should be determined by Observation.code. A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.
     */
    valueRange?: fhir.RangeArgs | undefined;
    /**
     * Used when observation has a set of component observations. An observation may have both a value (e.g. an  Apgar score)  and component observations (the observations from which the Apgar score was derived). If a value is present, the datatype for this element should be determined by Observation.code. A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.
     */
    valueRatio?: fhir.RatioArgs | undefined;
    /**
     * Used when observation has a set of component observations. An observation may have both a value (e.g. an  Apgar score)  and component observations (the observations from which the Apgar score was derived). If a value is present, the datatype for this element should be determined by Observation.code. A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.
     */
    valueSampledData?: fhir.SampledDataArgs | undefined;
    /**
     * Used when observation has a set of component observations. An observation may have both a value (e.g. an  Apgar score)  and component observations (the observations from which the Apgar score was derived). If a value is present, the datatype for this element should be determined by Observation.code. A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.
     */
    valueTime?: fhir.FhirTime | string | undefined;
    /**
     * Used when observation has a set of component observations. An observation may have both a value (e.g. an  Apgar score)  and component observations (the observations from which the Apgar score was derived). If a value is present, the datatype for this element should be determined by Observation.code. A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.
     */
    valueDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * Used when observation has a set of component observations. An observation may have both a value (e.g. an  Apgar score)  and component observations (the observations from which the Apgar score was derived). If a value is present, the datatype for this element should be determined by Observation.code. A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.
     */
    valuePeriod?: fhir.PeriodArgs | undefined;
    /**
     * "Null" or exceptional values can be represented two ways in FHIR Observations.  One way is to simply include them in the value set and represent the exceptions in the value.  For example, measurement values for a serology test could be  "detected", "not detected", "inconclusive", or  "test not done".
     * The alternate way is to use the value element for actual observations and use the explicit dataAbsentReason element to record exceptional values.  For example, the dataAbsentReason code "error" could be used when the measurement was not completed.  Because of these options, use-case agreements are required to interpret general observations for exceptional values.
     */
    dataAbsentReason?: fhir.CodeableConceptArgs | undefined;
    /**
     * Historically used for laboratory results (known as 'abnormal flag' ),  its use extends to other use cases where coded interpretations  are relevant.  Often reported as one or more simple compact codes this element is often placed adjacent to the result value in reports and flow sheets to signal the meaning/normalcy status of the result.
     */
    interpretation?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * Most observations only have one generic reference range. Systems MAY choose to restrict to only supplying the relevant reference range based on knowledge about the patient (e.g., specific to the patient's age, gender, weight and other factors), but this might not be possible or appropriate. Whenever more than one reference range is supplied, the differences between them SHOULD be provided in the reference range and/or age properties.
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
     * *All* code-value and  component.code-component.value pairs need to be taken into account to correctly understand the meaning of the observation.
     */
    code: fhir.CodeableConcept | null;
    /**
     * Used when observation has a set of component observations. An observation may have both a value (e.g. an  Apgar score)  and component observations (the observations from which the Apgar score was derived). If a value is present, the datatype for this element should be determined by Observation.code. A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.
     */
    value?: (fhir.Quantity | fhir.CodeableConcept | fhir.FhirString | fhir.FhirBoolean | fhir.FhirInteger | fhir.Range | fhir.Ratio | fhir.SampledData | fhir.FhirTime | fhir.FhirDateTime | fhir.Period) | undefined;
    /**
     * Internal flag to properly serialize choice-type element Observation.component.value[x]
     */
    protected static readonly _fts_valueIsChoice: true;
    /**
     * "Null" or exceptional values can be represented two ways in FHIR Observations.  One way is to simply include them in the value set and represent the exceptions in the value.  For example, measurement values for a serology test could be  "detected", "not detected", "inconclusive", or  "test not done".
     * The alternate way is to use the value element for actual observations and use the explicit dataAbsentReason element to record exceptional values.  For example, the dataAbsentReason code "error" could be used when the measurement was not completed.  Because of these options, use-case agreements are required to interpret general observations for exceptional values.
     */
    dataAbsentReason?: fhir.CodeableConcept | undefined;
    /**
     * Historically used for laboratory results (known as 'abnormal flag' ),  its use extends to other use cases where coded interpretations  are relevant.  Often reported as one or more simple compact codes this element is often placed adjacent to the result value in reports and flow sheets to signal the meaning/normalcy status of the result.
     */
    interpretation: fhir.CodeableConcept[];
    /**
     * Most observations only have one generic reference range. Systems MAY choose to restrict to only supplying the relevant reference range based on knowledge about the patient (e.g., specific to the patient's age, gender, weight and other factors), but this might not be possible or appropriate. Whenever more than one reference range is supplied, the differences between them SHOULD be provided in the reference range and/or age properties.
     */
    referenceRange: fhir.ObservationReferenceRange[];
    /**
     * Default constructor for ObservationComponent - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ObservationComponentArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Extensible-bound Value Set for dataAbsentReason (Observation.component.dataAbsentReason)
     */
    static get dataAbsentReasonExtensibleCodings(): {
        readonly AsText: fhir.Coding;
        readonly AskedButDeclined: fhir.Coding;
        readonly AskedButUnknown: fhir.Coding;
        readonly Error: fhir.Coding;
        readonly Masked: fhir.Coding;
        readonly NegativeInfinityNINF: fhir.Coding;
        readonly NotANumberNaN: fhir.Coding;
        readonly NotApplicable: fhir.Coding;
        readonly NotAsked: fhir.Coding;
        readonly NotPerformed: fhir.Coding;
        readonly NotPermitted: fhir.Coding;
        readonly PositiveInfinityPINF: fhir.Coding;
        readonly TemporarilyUnknown: fhir.Coding;
        readonly Unknown: fhir.Coding;
        readonly Unsupported: fhir.Coding;
    };
    /**
     * Extensible-bound Value Set for interpretation (Observation.component.interpretation)
     */
    static get interpretationExtensibleCodings(): {
        readonly GeneticObservationInterpretation: fhir.Coding;
        readonly ObservationInterpretationChange: fhir.Coding;
        readonly ObservationInterpretationExceptions: fhir.Coding;
        readonly ObservationInterpretationNormality: fhir.Coding;
        readonly ObservationInterpretationSusceptibility: fhir.Coding;
        readonly OffScaleLow: fhir.Coding;
        readonly OffScaleHigh: fhir.Coding;
        readonly Abnormal: fhir.Coding;
        readonly CriticalAbnormal: fhir.Coding;
        readonly Better: fhir.Coding;
        readonly Carrier: fhir.Coding;
        readonly SignificantChangeDown: fhir.Coding;
        readonly Detected: fhir.Coding;
        readonly Equivocal: fhir.Coding;
        readonly OutsideThreshold: fhir.Coding;
        readonly Expected: fhir.Coding;
        readonly High: fhir.Coding;
        readonly CriticalHigh: fhir.Coding;
        readonly SignificantlyHigh: fhir.Coding;
        readonly AboveHighThreshold: fhir.Coding;
        readonly Intermediate: fhir.Coding;
        readonly InsufficientEvidence: fhir.Coding;
        readonly Indeterminate: fhir.Coding;
        readonly Low: fhir.Coding;
        readonly CriticalLow: fhir.Coding;
        readonly SignificantlyLow: fhir.Coding;
        readonly BelowLowThreshold: fhir.Coding;
        readonly Normal: fhir.Coding;
        readonly NoCLSIDefinedBreakpoint: fhir.Coding;
        readonly NotDetected: fhir.Coding;
        readonly Negative: fhir.Coding;
        readonly NonReactive: fhir.Coding;
        readonly NonSusceptible: fhir.Coding;
        readonly ObservationInterpretationDetection: fhir.Coding;
        readonly ObservationInterpretationExpectation: fhir.Coding;
        readonly Positive: fhir.Coding;
        readonly Resistant: fhir.Coding;
        readonly ReactivityObservationInterpretation: fhir.Coding;
        readonly Reactive: fhir.Coding;
        readonly Susceptible: fhir.Coding;
        readonly SusceptibleDoseDependent: fhir.Coding;
        readonly SynergyResistant: fhir.Coding;
        readonly SynergySusceptible: fhir.Coding;
        readonly SignificantChangeUp: fhir.Coding;
        readonly Unexpected: fhir.Coding;
        readonly Worse: fhir.Coding;
        readonly WeaklyReactive: fhir.Coding;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
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
     * A plan, proposal or order that is fulfilled in whole or in part by this event.  For example, a MedicationRequest may require a patient to have laboratory test performed before  it is dispensed.
     */
    basedOn?: fhir.ReferenceArgs[] | undefined;
    /**
     * To link an Observation to an Encounter use `encounter`.  See the  [Notes](observation.html#obsgrouping) below for guidance on referencing another Observation.
     */
    partOf?: fhir.ReferenceArgs[] | undefined;
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: fhir.FhirCode<ObservationStatusCodeType> | string | undefined;
    /**
     * In addition to the required category valueset, this element allows various categorization schemes based on the owner’s definition of the category and effectively multiple categories can be used at once.  The level of granularity is defined by the category concepts in the value set.
     */
    category?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * *All* code-value and, if present, component.code-component.value pairs need to be taken into account to correctly understand the meaning of the observation.
     */
    code: fhir.CodeableConceptArgs | null;
    /**
     * One would expect this element to be a cardinality of 1..1. The only circumstance in which the subject can be missing is when the observation is made by a device that does not know the patient. In this case, the observation SHALL be matched to a patient through some context/channel matching technique, and at this point, the observation should be updated.
     */
    subject?: fhir.ReferenceArgs | undefined;
    /**
     * Typically, an observation is made about the subject - a patient, or group of patients, location, or device - and the distinction between the subject and what is directly measured for an observation is specified in the observation code itself ( e.g., "Blood Glucose") and does not need to be represented separately using this element.  Use `specimen` if a reference to a specimen is required.  If a code is required instead of a resource use either  `bodysite` for bodysites or the standard extension [focusCode](extension-observation-focuscode.html).
     */
    focus?: fhir.ReferenceArgs[] | undefined;
    /**
     * This will typically be the encounter the event occurred within, but some events may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter (e.g. pre-admission laboratory tests).
     */
    encounter?: fhir.ReferenceArgs | undefined;
    /**
     * At least a date should be present unless this observation is a historical report.  For recording imprecise or "fuzzy" times (For example, a blood glucose measurement taken "after breakfast") use the [Timing](datatypes.html#timing) datatype which allow the measurement to be tied to regular life events.
     */
    effective?: fhir.FhirDateTime | fhir.Period | fhir.Timing | fhir.FhirInstant | undefined;
    /**
     * At least a date should be present unless this observation is a historical report.  For recording imprecise or "fuzzy" times (For example, a blood glucose measurement taken "after breakfast") use the [Timing](datatypes.html#timing) datatype which allow the measurement to be tied to regular life events.
     */
    effectiveDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * At least a date should be present unless this observation is a historical report.  For recording imprecise or "fuzzy" times (For example, a blood glucose measurement taken "after breakfast") use the [Timing](datatypes.html#timing) datatype which allow the measurement to be tied to regular life events.
     */
    effectivePeriod?: fhir.PeriodArgs | undefined;
    /**
     * At least a date should be present unless this observation is a historical report.  For recording imprecise or "fuzzy" times (For example, a blood glucose measurement taken "after breakfast") use the [Timing](datatypes.html#timing) datatype which allow the measurement to be tied to regular life events.
     */
    effectiveTiming?: fhir.TimingArgs | undefined;
    /**
     * At least a date should be present unless this observation is a historical report.  For recording imprecise or "fuzzy" times (For example, a blood glucose measurement taken "after breakfast") use the [Timing](datatypes.html#timing) datatype which allow the measurement to be tied to regular life events.
     */
    effectiveInstant?: fhir.FhirInstant | string | undefined;
    /**
     * For Observations that don’t require review and verification, it may be the same as the [`lastUpdated` ](resource-definitions.html#Meta.lastUpdated) time of the resource itself.  For Observations that do require review and verification for certain updates, it might not be the same as the `lastUpdated` time of the resource itself due to a non-clinically significant update that doesn’t require the new version to be reviewed and verified again.
     */
    issued?: fhir.FhirInstant | string | undefined;
    /**
     * Who was responsible for asserting the observed value as "true".
     */
    performer?: fhir.ReferenceArgs[] | undefined;
    /**
     * An observation may have; 1)  a single value here, 2)  both a value and a set of related or component values,  or 3)  only a set of related or component values. If a value is present, the datatype for this element should be determined by Observation.code.  A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.
     */
    value?: fhir.Quantity | fhir.CodeableConcept | fhir.FhirString | fhir.FhirBoolean | fhir.FhirInteger | fhir.Range | fhir.Ratio | fhir.SampledData | fhir.FhirTime | fhir.FhirDateTime | fhir.Period | undefined;
    /**
     * An observation may have; 1)  a single value here, 2)  both a value and a set of related or component values,  or 3)  only a set of related or component values. If a value is present, the datatype for this element should be determined by Observation.code.  A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.
     */
    valueQuantity?: fhir.QuantityArgs | undefined;
    /**
     * An observation may have; 1)  a single value here, 2)  both a value and a set of related or component values,  or 3)  only a set of related or component values. If a value is present, the datatype for this element should be determined by Observation.code.  A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.
     */
    valueCodeableConcept?: fhir.CodeableConceptArgs | undefined;
    /**
     * An observation may have; 1)  a single value here, 2)  both a value and a set of related or component values,  or 3)  only a set of related or component values. If a value is present, the datatype for this element should be determined by Observation.code.  A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.
     */
    valueString?: fhir.FhirString | string | undefined;
    /**
     * An observation may have; 1)  a single value here, 2)  both a value and a set of related or component values,  or 3)  only a set of related or component values. If a value is present, the datatype for this element should be determined by Observation.code.  A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.
     */
    valueBoolean?: fhir.FhirBoolean | boolean | undefined;
    /**
     * An observation may have; 1)  a single value here, 2)  both a value and a set of related or component values,  or 3)  only a set of related or component values. If a value is present, the datatype for this element should be determined by Observation.code.  A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.
     */
    valueInteger?: fhir.FhirInteger | number | undefined;
    /**
     * An observation may have; 1)  a single value here, 2)  both a value and a set of related or component values,  or 3)  only a set of related or component values. If a value is present, the datatype for this element should be determined by Observation.code.  A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.
     */
    valueRange?: fhir.RangeArgs | undefined;
    /**
     * An observation may have; 1)  a single value here, 2)  both a value and a set of related or component values,  or 3)  only a set of related or component values. If a value is present, the datatype for this element should be determined by Observation.code.  A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.
     */
    valueRatio?: fhir.RatioArgs | undefined;
    /**
     * An observation may have; 1)  a single value here, 2)  both a value and a set of related or component values,  or 3)  only a set of related or component values. If a value is present, the datatype for this element should be determined by Observation.code.  A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.
     */
    valueSampledData?: fhir.SampledDataArgs | undefined;
    /**
     * An observation may have; 1)  a single value here, 2)  both a value and a set of related or component values,  or 3)  only a set of related or component values. If a value is present, the datatype for this element should be determined by Observation.code.  A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.
     */
    valueTime?: fhir.FhirTime | string | undefined;
    /**
     * An observation may have; 1)  a single value here, 2)  both a value and a set of related or component values,  or 3)  only a set of related or component values. If a value is present, the datatype for this element should be determined by Observation.code.  A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.
     */
    valueDateTime?: fhir.FhirDateTime | string | undefined;
    /**
     * An observation may have; 1)  a single value here, 2)  both a value and a set of related or component values,  or 3)  only a set of related or component values. If a value is present, the datatype for this element should be determined by Observation.code.  A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.
     */
    valuePeriod?: fhir.PeriodArgs | undefined;
    /**
     * Null or exceptional values can be represented two ways in FHIR Observations.  One way is to simply include them in the value set and represent the exceptions in the value.  For example, measurement values for a serology test could be  "detected", "not detected", "inconclusive", or  "specimen unsatisfactory".
     * The alternate way is to use the value element for actual observations and use the explicit dataAbsentReason element to record exceptional values.  For example, the dataAbsentReason code "error" could be used when the measurement was not completed. Note that an observation may only be reported if there are values to report. For example differential cell counts values may be reported only when &gt; 0.  Because of these options, use-case agreements are required to interpret general observations for null or exceptional values.
     */
    dataAbsentReason?: fhir.CodeableConceptArgs | undefined;
    /**
     * Historically used for laboratory results (known as 'abnormal flag' ),  its use extends to other use cases where coded interpretations  are relevant.  Often reported as one or more simple compact codes this element is often placed adjacent to the result value in reports and flow sheets to signal the meaning/normalcy status of the result.
     */
    interpretation?: fhir.CodeableConceptArgs[] | undefined;
    /**
     * May include general statements about the observation, or statements about significant, unexpected or unreliable results values, or information about its source when relevant to its interpretation.
     */
    note?: fhir.AnnotationArgs[] | undefined;
    /**
     * Only used if not implicit in code found in Observation.code.  In many systems, this may be represented as a related observation instead of an inline component.
     * If the use case requires BodySite to be handled as a separate resource (e.g. to identify and track separately) then use the standard extension[ bodySite](extension-bodysite.html).
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
     * Note that this is not meant to represent a device involved in the transmission of the result, e.g., a gateway.  Such devices may be documented using the Provenance resource where relevant.
     */
    device?: fhir.ReferenceArgs | undefined;
    /**
     * Most observations only have one generic reference range. Systems MAY choose to restrict to only supplying the relevant reference range based on knowledge about the patient (e.g., specific to the patient's age, gender, weight and other factors), but this might not be possible or appropriate. Whenever more than one reference range is supplied, the differences between them SHOULD be provided in the reference range and/or age properties.
     */
    referenceRange?: fhir.ObservationReferenceRangeArgs[] | undefined;
    /**
     * When using this element, an observation will typically have either a value or a set of related resources, although both may be present in some cases.  For a discussion on the ways Observations can assembled in groups together, see [Notes](observation.html#obsgrouping) below.  Note that a system may calculate results from [QuestionnaireResponse](questionnaireresponse.html)  into a final score and represent the score as an Observation.
     */
    hasMember?: fhir.ReferenceArgs[] | undefined;
    /**
     * All the reference choices that are listed in this element can represent clinical observations and other measurements that may be the source for a derived value.  The most common reference will be another Observation.  For a discussion on the ways Observations can assembled in groups together, see [Notes](observation.html#obsgrouping) below.
     */
    derivedFrom?: fhir.ReferenceArgs[] | undefined;
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
     * A plan, proposal or order that is fulfilled in whole or in part by this event.  For example, a MedicationRequest may require a patient to have laboratory test performed before  it is dispensed.
     */
    basedOn: fhir.Reference[];
    /**
     * To link an Observation to an Encounter use `encounter`.  See the  [Notes](observation.html#obsgrouping) below for guidance on referencing another Observation.
     */
    partOf: fhir.Reference[];
    /**
     * This element is labeled as a modifier because the status contains codes that mark the resource as not currently valid.
     */
    status: fhir.FhirCode<ObservationStatusCodeType> | null;
    /**
     * In addition to the required category valueset, this element allows various categorization schemes based on the owner’s definition of the category and effectively multiple categories can be used at once.  The level of granularity is defined by the category concepts in the value set.
     */
    category: fhir.CodeableConcept[];
    /**
     * *All* code-value and, if present, component.code-component.value pairs need to be taken into account to correctly understand the meaning of the observation.
     */
    code: fhir.CodeableConcept | null;
    /**
     * One would expect this element to be a cardinality of 1..1. The only circumstance in which the subject can be missing is when the observation is made by a device that does not know the patient. In this case, the observation SHALL be matched to a patient through some context/channel matching technique, and at this point, the observation should be updated.
     */
    subject?: fhir.Reference | undefined;
    /**
     * Typically, an observation is made about the subject - a patient, or group of patients, location, or device - and the distinction between the subject and what is directly measured for an observation is specified in the observation code itself ( e.g., "Blood Glucose") and does not need to be represented separately using this element.  Use `specimen` if a reference to a specimen is required.  If a code is required instead of a resource use either  `bodysite` for bodysites or the standard extension [focusCode](extension-observation-focuscode.html).
     */
    focus: fhir.Reference[];
    /**
     * This will typically be the encounter the event occurred within, but some events may be initiated prior to or after the official completion of an encounter but still be tied to the context of the encounter (e.g. pre-admission laboratory tests).
     */
    encounter?: fhir.Reference | undefined;
    /**
     * At least a date should be present unless this observation is a historical report.  For recording imprecise or "fuzzy" times (For example, a blood glucose measurement taken "after breakfast") use the [Timing](datatypes.html#timing) datatype which allow the measurement to be tied to regular life events.
     */
    effective?: (fhir.FhirDateTime | fhir.Period | fhir.Timing | fhir.FhirInstant) | undefined;
    /**
     * Internal flag to properly serialize choice-type element Observation.effective[x]
     */
    protected static readonly _fts_effectiveIsChoice: true;
    /**
     * For Observations that don’t require review and verification, it may be the same as the [`lastUpdated` ](resource-definitions.html#Meta.lastUpdated) time of the resource itself.  For Observations that do require review and verification for certain updates, it might not be the same as the `lastUpdated` time of the resource itself due to a non-clinically significant update that doesn’t require the new version to be reviewed and verified again.
     */
    issued?: fhir.FhirInstant | undefined;
    /**
     * Who was responsible for asserting the observed value as "true".
     */
    performer: fhir.Reference[];
    /**
     * An observation may have; 1)  a single value here, 2)  both a value and a set of related or component values,  or 3)  only a set of related or component values. If a value is present, the datatype for this element should be determined by Observation.code.  A CodeableConcept with just a text would be used instead of a string if the field was usually coded, or if the type associated with the Observation.code defines a coded value.  For additional guidance, see the [Notes section](observation.html#notes) below.
     */
    value?: (fhir.Quantity | fhir.CodeableConcept | fhir.FhirString | fhir.FhirBoolean | fhir.FhirInteger | fhir.Range | fhir.Ratio | fhir.SampledData | fhir.FhirTime | fhir.FhirDateTime | fhir.Period) | undefined;
    /**
     * Internal flag to properly serialize choice-type element Observation.value[x]
     */
    protected static readonly _fts_valueIsChoice: true;
    /**
     * Null or exceptional values can be represented two ways in FHIR Observations.  One way is to simply include them in the value set and represent the exceptions in the value.  For example, measurement values for a serology test could be  "detected", "not detected", "inconclusive", or  "specimen unsatisfactory".
     * The alternate way is to use the value element for actual observations and use the explicit dataAbsentReason element to record exceptional values.  For example, the dataAbsentReason code "error" could be used when the measurement was not completed. Note that an observation may only be reported if there are values to report. For example differential cell counts values may be reported only when &gt; 0.  Because of these options, use-case agreements are required to interpret general observations for null or exceptional values.
     */
    dataAbsentReason?: fhir.CodeableConcept | undefined;
    /**
     * Historically used for laboratory results (known as 'abnormal flag' ),  its use extends to other use cases where coded interpretations  are relevant.  Often reported as one or more simple compact codes this element is often placed adjacent to the result value in reports and flow sheets to signal the meaning/normalcy status of the result.
     */
    interpretation: fhir.CodeableConcept[];
    /**
     * May include general statements about the observation, or statements about significant, unexpected or unreliable results values, or information about its source when relevant to its interpretation.
     */
    note: fhir.Annotation[];
    /**
     * Only used if not implicit in code found in Observation.code.  In many systems, this may be represented as a related observation instead of an inline component.
     * If the use case requires BodySite to be handled as a separate resource (e.g. to identify and track separately) then use the standard extension[ bodySite](extension-bodysite.html).
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
     * Note that this is not meant to represent a device involved in the transmission of the result, e.g., a gateway.  Such devices may be documented using the Provenance resource where relevant.
     */
    device?: fhir.Reference | undefined;
    /**
     * Most observations only have one generic reference range. Systems MAY choose to restrict to only supplying the relevant reference range based on knowledge about the patient (e.g., specific to the patient's age, gender, weight and other factors), but this might not be possible or appropriate. Whenever more than one reference range is supplied, the differences between them SHOULD be provided in the reference range and/or age properties.
     */
    referenceRange: fhir.ObservationReferenceRange[];
    /**
     * When using this element, an observation will typically have either a value or a set of related resources, although both may be present in some cases.  For a discussion on the ways Observations can assembled in groups together, see [Notes](observation.html#obsgrouping) below.  Note that a system may calculate results from [QuestionnaireResponse](questionnaireresponse.html)  into a final score and represent the score as an Observation.
     */
    hasMember: fhir.Reference[];
    /**
     * All the reference choices that are listed in this element can represent clinical observations and other measurements that may be the source for a derived value.  The most common reference will be another Observation.  For a discussion on the ways Observations can assembled in groups together, see [Notes](observation.html#obsgrouping) below.
     */
    derivedFrom: fhir.Reference[];
    /**
     * For a discussion on the ways Observations can be assembled in groups together see [Notes](observation.html#notes) below.
     */
    component: fhir.ObservationComponent[];
    /**
     * Default constructor for Observation - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<ObservationArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Required-bound Value Set for status (Observation.status)
     */
    static get statusRequiredCodes(): {
        readonly Amended: "amended";
        readonly Cancelled: "cancelled";
        readonly Corrected: "corrected";
        readonly EnteredInError: "entered-in-error";
        readonly Final: "final";
        readonly Preliminary: "preliminary";
        readonly Registered: "registered";
        readonly Unknown: "unknown";
    };
    /**
     * Preferred-bound Value Set for category (Observation.category)
     */
    static get categoryPreferredCodings(): {
        readonly Activity: fhir.Coding;
        readonly Exam: fhir.Coding;
        readonly Imaging: fhir.Coding;
        readonly Laboratory: fhir.Coding;
        readonly Procedure: fhir.Coding;
        readonly SocialHistory: fhir.Coding;
        readonly Survey: fhir.Coding;
        readonly Therapy: fhir.Coding;
        readonly VitalSigns: fhir.Coding;
    };
    /**
     * Extensible-bound Value Set for dataAbsentReason (Observation.dataAbsentReason)
     */
    static get dataAbsentReasonExtensibleCodings(): {
        readonly AsText: fhir.Coding;
        readonly AskedButDeclined: fhir.Coding;
        readonly AskedButUnknown: fhir.Coding;
        readonly Error: fhir.Coding;
        readonly Masked: fhir.Coding;
        readonly NegativeInfinityNINF: fhir.Coding;
        readonly NotANumberNaN: fhir.Coding;
        readonly NotApplicable: fhir.Coding;
        readonly NotAsked: fhir.Coding;
        readonly NotPerformed: fhir.Coding;
        readonly NotPermitted: fhir.Coding;
        readonly PositiveInfinityPINF: fhir.Coding;
        readonly TemporarilyUnknown: fhir.Coding;
        readonly Unknown: fhir.Coding;
        readonly Unsupported: fhir.Coding;
    };
    /**
     * Extensible-bound Value Set for interpretation (Observation.interpretation)
     */
    static get interpretationExtensibleCodings(): {
        readonly GeneticObservationInterpretation: fhir.Coding;
        readonly ObservationInterpretationChange: fhir.Coding;
        readonly ObservationInterpretationExceptions: fhir.Coding;
        readonly ObservationInterpretationNormality: fhir.Coding;
        readonly ObservationInterpretationSusceptibility: fhir.Coding;
        readonly OffScaleLow: fhir.Coding;
        readonly OffScaleHigh: fhir.Coding;
        readonly Abnormal: fhir.Coding;
        readonly CriticalAbnormal: fhir.Coding;
        readonly Better: fhir.Coding;
        readonly Carrier: fhir.Coding;
        readonly SignificantChangeDown: fhir.Coding;
        readonly Detected: fhir.Coding;
        readonly Equivocal: fhir.Coding;
        readonly OutsideThreshold: fhir.Coding;
        readonly Expected: fhir.Coding;
        readonly High: fhir.Coding;
        readonly CriticalHigh: fhir.Coding;
        readonly SignificantlyHigh: fhir.Coding;
        readonly AboveHighThreshold: fhir.Coding;
        readonly Intermediate: fhir.Coding;
        readonly InsufficientEvidence: fhir.Coding;
        readonly Indeterminate: fhir.Coding;
        readonly Low: fhir.Coding;
        readonly CriticalLow: fhir.Coding;
        readonly SignificantlyLow: fhir.Coding;
        readonly BelowLowThreshold: fhir.Coding;
        readonly Normal: fhir.Coding;
        readonly NoCLSIDefinedBreakpoint: fhir.Coding;
        readonly NotDetected: fhir.Coding;
        readonly Negative: fhir.Coding;
        readonly NonReactive: fhir.Coding;
        readonly NonSusceptible: fhir.Coding;
        readonly ObservationInterpretationDetection: fhir.Coding;
        readonly ObservationInterpretationExpectation: fhir.Coding;
        readonly Positive: fhir.Coding;
        readonly Resistant: fhir.Coding;
        readonly ReactivityObservationInterpretation: fhir.Coding;
        readonly Reactive: fhir.Coding;
        readonly Susceptible: fhir.Coding;
        readonly SusceptibleDoseDependent: fhir.Coding;
        readonly SynergyResistant: fhir.Coding;
        readonly SynergySusceptible: fhir.Coding;
        readonly SignificantChangeUp: fhir.Coding;
        readonly Unexpected: fhir.Coding;
        readonly Worse: fhir.Coding;
        readonly WeaklyReactive: fhir.Coding;
    };
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(): fhir.FtsIssue[];
}
//# sourceMappingURL=Observation.d.ts.map