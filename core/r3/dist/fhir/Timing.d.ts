import * as fhir from '../fhir.js';
import { UnitsOfTimeCodeType } from '../fhirValueSets/UnitsOfTimeCodes.js';
import { DaysOfWeekCodeType } from '../fhirValueSets/DaysOfWeekCodes.js';
/**
 * Valid arguments for the TimingRepeat type.
 */
export interface TimingRepeatArgs extends fhir.FhirElementArgs {
    /**
     * Either a duration for the length of the timing schedule, a range of possible length, or outer bounds for start and/or end limits of the timing schedule.
     */
    bounds?: fhir.Duration | fhir.Range | fhir.Period | undefined;
    /**
     * Either a duration for the length of the timing schedule, a range of possible length, or outer bounds for start and/or end limits of the timing schedule.
     */
    boundsDuration?: fhir.DurationArgs | undefined;
    /**
     * Either a duration for the length of the timing schedule, a range of possible length, or outer bounds for start and/or end limits of the timing schedule.
     */
    boundsRange?: fhir.RangeArgs | undefined;
    /**
     * Either a duration for the length of the timing schedule, a range of possible length, or outer bounds for start and/or end limits of the timing schedule.
     */
    boundsPeriod?: fhir.PeriodArgs | undefined;
    /**
     * If you have both bounds and count, then this should be understood as within the bounds period, until count times happens.
     */
    count?: fhir.FhirInteger | number | undefined;
    /**
     * Extended properties for primitive element: Timing.repeat.count
     */
    _count?: fhir.FhirElementArgs;
    /**
     * A maximum value for the count of the desired repetitions (e.g. do something 6-8 times).
     */
    countMax?: fhir.FhirInteger | number | undefined;
    /**
     * Extended properties for primitive element: Timing.repeat.countMax
     */
    _countMax?: fhir.FhirElementArgs;
    /**
     * For some events the duration is part of the definition of the event (e.g. IV infusions, where the duration is implicit in the specified quantity and rate). For others, it's part of the timing specification (e.g. exercise).
     */
    duration?: fhir.FhirDecimal | number | undefined;
    /**
     * Extended properties for primitive element: Timing.repeat.duration
     */
    _duration?: fhir.FhirElementArgs;
    /**
     * For some events the duration is part of the definition of the event (e.g. IV infusions, where the duration is implicit in the specified quantity and rate). For others, it's part of the timing specification (e.g. exercise).
     */
    durationMax?: fhir.FhirDecimal | number | undefined;
    /**
     * Extended properties for primitive element: Timing.repeat.durationMax
     */
    _durationMax?: fhir.FhirElementArgs;
    /**
     * The units of time for the duration, in UCUM units.
     */
    durationUnit?: fhir.FhirCode<UnitsOfTimeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Timing.repeat.durationUnit
     */
    _durationUnit?: fhir.FhirElementArgs;
    /**
     * The number of times to repeat the action within the specified period / period range (i.e. both period and periodMax provided).
     */
    frequency?: fhir.FhirInteger | number | undefined;
    /**
     * Extended properties for primitive element: Timing.repeat.frequency
     */
    _frequency?: fhir.FhirElementArgs;
    /**
     * If present, indicates that the frequency is a range - so to repeat between [frequency] and [frequencyMax] times within the period or period range.
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
    periodUnit?: fhir.FhirCode<UnitsOfTimeCodeType> | string | undefined;
    /**
     * Extended properties for primitive element: Timing.repeat.periodUnit
     */
    _periodUnit?: fhir.FhirElementArgs;
    /**
     * If no days are specified, the action is assumed to happen every day as otherwise specified. The elements frequency and period cannot be used as well as dayOfWeek.
     */
    dayOfWeek?: fhir.FhirCode<DaysOfWeekCodeType>[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: Timing.repeat.dayOfWeek
     */
    _dayOfWeek?: (fhir.FhirElementArgs | null)[];
    /**
     * When time of day is specified, it is inferred that the action happens every day (as filtered by dayofWeek) on the specified times. The elements when, frequency and period cannot be used as well as timeOfDay.
     */
    timeOfDay?: fhir.FhirTime[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: Timing.repeat.timeOfDay
     */
    _timeOfDay?: (fhir.FhirElementArgs | null)[];
    /**
     * When more than one event is listed, the event is tied to the union of the specified events.
     */
    when?: fhir.FhirCode[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: Timing.repeat.when
     */
    _when?: (fhir.FhirElementArgs | null)[];
    /**
     * The number of minutes from the event. If the event code does not indicate whether the minutes is before or after the event, then the offset is assumed to be after the event.
     */
    offset?: fhir.FhirUnsignedInt | number | undefined;
    /**
     * Extended properties for primitive element: Timing.repeat.offset
     */
    _offset?: fhir.FhirElementArgs;
}
/**
 * A set of rules that describe when the event is scheduled.
 */
export declare class TimingRepeat extends fhir.FhirElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Either a duration for the length of the timing schedule, a range of possible length, or outer bounds for start and/or end limits of the timing schedule.
     */
    bounds?: (fhir.Duration | fhir.Range | fhir.Period) | undefined;
    /**
     * Internal flag to properly serialize choice-type element Timing.repeat.bounds[x]
     */
    protected static readonly _fts_boundsIsChoice: true;
    /**
     * If you have both bounds and count, then this should be understood as within the bounds period, until count times happens.
     */
    count?: fhir.FhirInteger | undefined;
    /**
     * A maximum value for the count of the desired repetitions (e.g. do something 6-8 times).
     */
    countMax?: fhir.FhirInteger | undefined;
    /**
     * For some events the duration is part of the definition of the event (e.g. IV infusions, where the duration is implicit in the specified quantity and rate). For others, it's part of the timing specification (e.g. exercise).
     */
    duration?: fhir.FhirDecimal | undefined;
    /**
     * For some events the duration is part of the definition of the event (e.g. IV infusions, where the duration is implicit in the specified quantity and rate). For others, it's part of the timing specification (e.g. exercise).
     */
    durationMax?: fhir.FhirDecimal | undefined;
    /**
     * The units of time for the duration, in UCUM units.
     */
    durationUnit?: fhir.FhirCode<UnitsOfTimeCodeType> | undefined;
    /**
     * The number of times to repeat the action within the specified period / period range (i.e. both period and periodMax provided).
     */
    frequency?: fhir.FhirInteger | undefined;
    /**
     * If present, indicates that the frequency is a range - so to repeat between [frequency] and [frequencyMax] times within the period or period range.
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
    periodUnit?: fhir.FhirCode<UnitsOfTimeCodeType> | undefined;
    /**
     * If no days are specified, the action is assumed to happen every day as otherwise specified. The elements frequency and period cannot be used as well as dayOfWeek.
     */
    dayOfWeek: fhir.FhirCode<DaysOfWeekCodeType>[];
    /**
     * When time of day is specified, it is inferred that the action happens every day (as filtered by dayofWeek) on the specified times. The elements when, frequency and period cannot be used as well as timeOfDay.
     */
    timeOfDay: fhir.FhirTime[];
    /**
     * When more than one event is listed, the event is tied to the union of the specified events.
     */
    when: fhir.FhirCode[];
    /**
     * The number of minutes from the event. If the event code does not indicate whether the minutes is before or after the event, then the offset is assumed to be after the event.
     */
    offset?: fhir.FhirUnsignedInt | undefined;
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
     * Identifies specific times when the event occurs.
     */
    event?: fhir.FhirDateTime[] | (string | null)[] | undefined;
    /**
     * Extended properties for primitive element: Timing.event
     */
    _event?: (fhir.FhirElementArgs | null)[];
    /**
     * A set of rules that describe when the event is scheduled.
     */
    repeat?: fhir.TimingRepeatArgs | undefined;
    /**
     * BID etc are defined as 'at institutionally specified times'. For example, an institution may choose that BID is "always at 7am and 6pm".  If it is inappropriate for this choice to be made, the code BID should not be used. Instead, a distinct organization-specific code should be used in place of the HL7-defined BID code and/or the a structured representation should be used (in this case, specifying the two event times).
     */
    code?: fhir.CodeableConceptArgs | undefined;
}
/**
 * Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out.
 */
export declare class Timing extends fhir.FhirElement {
    /**
     * Mapping of this datatype to a FHIR equivalent
     */
    static readonly _fts_dataType: string;
    /**
     * Identifies specific times when the event occurs.
     */
    event: fhir.FhirDateTime[];
    /**
     * A set of rules that describe when the event is scheduled.
     */
    repeat?: fhir.TimingRepeat | undefined;
    /**
     * BID etc are defined as 'at institutionally specified times'. For example, an institution may choose that BID is "always at 7am and 6pm".  If it is inappropriate for this choice to be made, the code BID should not be used. Instead, a distinct organization-specific code should be used in place of the HL7-defined BID code and/or the a structured representation should be used (in this case, specifying the two event times).
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