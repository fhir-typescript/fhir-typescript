import * as fhir from '../fhir.js';
import { UnitsOfTimeCodeType } from '../fhirValueSets/UnitsOfTimeCodes.js';
/**
 * Valid arguments for the TimingRepeat type.
 */
export interface TimingRepeatArgs extends fhir.FhirElementArgs {
    /**
     * Either a duration for the length of the timing schedule, a range of possible length, or outer bounds for start and/or end limits of the timing schedule.
     */
    bounds?: fhir.Quantity | fhir.Range | fhir.Period | undefined;
    /**
     * Either a duration for the length of the timing schedule, a range of possible length, or outer bounds for start and/or end limits of the timing schedule.
     */
    boundsQuantity?: fhir.QuantityArgs | undefined;
    /**
     * Either a duration for the length of the timing schedule, a range of possible length, or outer bounds for start and/or end limits of the timing schedule.
     */
    boundsRange?: fhir.RangeArgs | undefined;
    /**
     * Either a duration for the length of the timing schedule, a range of possible length, or outer bounds for start and/or end limits of the timing schedule.
     */
    boundsPeriod?: fhir.PeriodArgs | undefined;
    /**
     * Repetitions may be limited by end time or total occurrences.
     */
    count?: fhir.FhirInteger | number | undefined;
    /**
     * Extended properties for primitive element: Timing.repeat.count
     */
    _count?: fhir.FhirElementArgs;
    /**
     * Some activities are not instantaneous and need to be maintained for a period of time.
     */
    duration?: fhir.FhirDecimal | number | undefined;
    /**
     * Extended properties for primitive element: Timing.repeat.duration
     */
    _duration?: fhir.FhirElementArgs;
    /**
     * Some activities are not instantaneous and need to be maintained for a period of time.
     */
    durationMax?: fhir.FhirDecimal | number | undefined;
    /**
     * Extended properties for primitive element: Timing.repeat.durationMax
     */
    _durationMax?: fhir.FhirElementArgs;
    /**
     * The units of time for the duration, in UCUM units.
     */
    durationUnits?: fhir.FhirCode<UnitsOfTimeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Timing.repeat.durationUnits
     */
    _durationUnits?: fhir.FhirElementArgs;
    /**
     * The number of times to repeat the action within the specified period / period range (i.e. both period and periodMax provided).
     */
    frequency?: fhir.FhirInteger | number | undefined;
    /**
     * Extended properties for primitive element: Timing.repeat.frequency
     */
    _frequency?: fhir.FhirElementArgs;
    /**
     * If present, indicates that the frequency is a range - so repeat between [frequency] and [frequencyMax] times within the period or period range.
     */
    frequencyMax?: fhir.FhirInteger | number | undefined;
    /**
     * Extended properties for primitive element: Timing.repeat.frequencyMax
     */
    _frequencyMax?: fhir.FhirElementArgs;
    /**
     * Indicates the duration of time over which repetitions are to occur; e.g. to express "3 times per day", 3 would be the frequency and "1 day" would be the period.
     */
    period?: fhir.FhirDecimal | number | undefined;
    /**
     * Extended properties for primitive element: Timing.repeat.period
     */
    _period?: fhir.FhirElementArgs;
    /**
     * If present, indicates that the period is a range from [period] to [periodMax], allowing expressing concepts such as "do this once every 3-5 days.
     */
    periodMax?: fhir.FhirDecimal | number | undefined;
    /**
     * Extended properties for primitive element: Timing.repeat.periodMax
     */
    _periodMax?: fhir.FhirElementArgs;
    /**
     * The units of time for the period in UCUM units.
     */
    periodUnits?: fhir.FhirCode<UnitsOfTimeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Timing.repeat.periodUnits
     */
    _periodUnits?: fhir.FhirElementArgs;
    /**
     * Timings are frequently determined by occurrences such as waking, eating and sleep.
     */
    when?: fhir.FhirCode | string | undefined;
    /**
     * Extended properties for primitive element: Timing.repeat.when
     */
    _when?: fhir.FhirElementArgs;
}
/**
 * Many timing schedules are determined by regular repetitions.
 */
export declare class TimingRepeat extends fhir.FhirElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Either a duration for the length of the timing schedule, a range of possible length, or outer bounds for start and/or end limits of the timing schedule.
     */
    bounds?: (fhir.Quantity | fhir.Range | fhir.Period) | undefined;
    /**
     * Internal flag to properly serialize choice-type element Timing.repeat.bounds[x]
     */
    protected static readonly _fts_boundsIsChoice: true;
    /**
     * Repetitions may be limited by end time or total occurrences.
     */
    count?: fhir.FhirInteger | undefined;
    /**
     * Some activities are not instantaneous and need to be maintained for a period of time.
     */
    duration?: fhir.FhirDecimal | undefined;
    /**
     * Some activities are not instantaneous and need to be maintained for a period of time.
     */
    durationMax?: fhir.FhirDecimal | undefined;
    /**
     * The units of time for the duration, in UCUM units.
     */
    durationUnits?: fhir.FhirCode<UnitsOfTimeCodeType> | undefined;
    /**
     * The number of times to repeat the action within the specified period / period range (i.e. both period and periodMax provided).
     */
    frequency?: fhir.FhirInteger | undefined;
    /**
     * If present, indicates that the frequency is a range - so repeat between [frequency] and [frequencyMax] times within the period or period range.
     */
    frequencyMax?: fhir.FhirInteger | undefined;
    /**
     * Indicates the duration of time over which repetitions are to occur; e.g. to express "3 times per day", 3 would be the frequency and "1 day" would be the period.
     */
    period?: fhir.FhirDecimal | undefined;
    /**
     * If present, indicates that the period is a range from [period] to [periodMax], allowing expressing concepts such as "do this once every 3-5 days.
     */
    periodMax?: fhir.FhirDecimal | undefined;
    /**
     * The units of time for the period in UCUM units.
     */
    periodUnits?: fhir.FhirCode<UnitsOfTimeCodeType> | undefined;
    /**
     * Timings are frequently determined by occurrences such as waking, eating and sleep.
     */
    when?: fhir.FhirCode | undefined;
    /**
     * Default constructor for TimingRepeat - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<TimingRepeatArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
/**
 * Valid arguments for the Timing type.
 */
export interface TimingArgs extends fhir.FhirElementArgs {
    /**
     * In an MAR, for instance, you need to take a general specification, and turn it into a precise specification.
     */
    event?: fhir.FhirDateTime[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: Timing.event
     */
    _event?: (fhir.FhirElementArgs | null)[];
    /**
     * Many timing schedules are determined by regular repetitions.
     */
    repeat?: fhir.TimingRepeatArgs | undefined;
    /**
     * A code for the timing pattern. Some codes such as BID are ubiquitous, but many institutions define their own additional codes.
     */
    code?: fhir.CodeableConceptArgs | undefined;
}
/**
 * Specifies an event that may occur multiple times. Timing schedules are used to record when things are expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds.
 */
export declare class Timing extends fhir.FhirElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * In an MAR, for instance, you need to take a general specification, and turn it into a precise specification.
     */
    event: fhir.FhirDateTime[];
    /**
     * Many timing schedules are determined by regular repetitions.
     */
    repeat?: fhir.TimingRepeat | undefined;
    /**
     * A code for the timing pattern. Some codes such as BID are ubiquitous, but many institutions define their own additional codes.
     */
    code?: fhir.CodeableConcept | undefined;
    /**
     * Default constructor for Timing - initializes any required elements to null if a value is not provided.
     */
    constructor(source?: Partial<TimingArgs>, options?: fhir.FhirConstructorOptions);
    /**
     * Function to perform basic model validation (e.g., check if required elements are present).
     */
    doModelValidation(exp?: string): fhir.FtsIssue[];
}
//# sourceMappingURL=Timing.d.ts.map